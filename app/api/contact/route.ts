import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, RateLimitBucket>;

type MailConfig = {
  host?: string;
  port: number;
  secure: boolean;
  tlsServername?: string;
  tlsRejectUnauthorized: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_CONTENT_LENGTH_BYTES = 16_384;
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL?.trim();
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

declare global {
  var __contactRateLimitStore: RateLimitStore | undefined;
}

const globalStore = globalThis as typeof globalThis & {
  __contactRateLimitStore?: RateLimitStore;
};
const rateLimitStore: RateLimitStore =
  globalStore.__contactRateLimitStore ?? new Map<string, RateLimitBucket>();
globalStore.__contactRateLimitStore = rateLimitStore;

const services = [
  'software',
  'monitoring',
  'network',
  'iso',
  'cybersecurity',
  'backups',
  'licensing',
  'disaster',
  'datacenter',
  'other',
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).nullable().optional(),
  service: z.enum(services),
  message: z.string().trim().max(5000).nullable().optional(),
  website: z.string().trim().max(255).optional().default(''),
  privacy_accepted: z.literal(true),
});

const serviceNames: Record<(typeof services)[number], string> = {
  software: 'Desarrollo de Software',
  monitoring: 'Monitoreo y observabilidad',
  network: 'Soluciones de Red',
  iso: 'Certificación ISO 27001',
  cybersecurity: 'Ciberseguridad',
  backups: 'Gestión de Respaldos',
  licensing: 'Licenciamiento de Software',
  disaster: 'Recuperación ante Desastres',
  datacenter: 'Diseño de Data Center',
  other: 'Otro',
};

function jsonWithRateLimit(
  body: Record<string, unknown>,
  status: number,
  rateLimit: { remaining: number; resetAt: number }
) {
  const retryAfterSeconds = Math.max(0, Math.ceil((rateLimit.resetAt - Date.now()) / 1000));

  return NextResponse.json(body, {
    status,
    headers: {
      'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
      'X-RateLimit-Remaining': String(Math.max(0, rateLimit.remaining)),
      'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
      'Retry-After': String(retryAfterSeconds),
    },
  });
}

function sanitizeIp(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim();
  if (!normalized) {
    return null;
  }

  // Basic guard against header injection / malformed values.
  if (/[^0-9a-fA-F:., ]/.test(normalized)) {
    return null;
  }

  const candidate = normalized.split(',')[0].trim();
  if (!candidate) {
    return null;
  }

  return candidate;
}

function getClientIp(request: Request): string {
  const realIp = sanitizeIp(request.headers.get('x-real-ip'));
  if (realIp) {
    return realIp;
  }

  const forwardedFor = sanitizeIp(request.headers.get('x-forwarded-for'));
  if (forwardedFor) {
    return forwardedFor;
  }

  const cloudflareIp = sanitizeIp(request.headers.get('cf-connecting-ip'));
  if (cloudflareIp) {
    return cloudflareIp;
  }

  return 'unknown';
}

function consumeRateLimitLocal(ip: string): {
  limited: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(ip, { count: 1, resetAt });

    return {
      limited: false,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt,
    };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      remaining: 0,
      resetAt: current.resetAt,
    };
  }

  current.count += 1;
  rateLimitStore.set(ip, current);

  return {
    limited: false,
    remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
    resetAt: current.resetAt,
  };
}

async function upstashCommand<T>(command: Array<string | number>): Promise<T> {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Upstash no configurado');
  }

  const response = await fetch(`${UPSTASH_REDIS_REST_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{ command }]),
  });

  if (!response.ok) {
    throw new Error(`Upstash HTTP ${response.status}`);
  }

  const payload = (await response.json()) as Array<{ result: T; error?: string }>;
  if (!Array.isArray(payload) || payload.length === 0 || payload[0].error) {
    throw new Error(payload?.[0]?.error || 'Respuesta inválida de Upstash');
  }

  return payload[0].result;
}

async function consumeRateLimit(ip: string): Promise<{
  limited: boolean;
  remaining: number;
  resetAt: number;
}> {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return consumeRateLimitLocal(ip);
  }

  try {
    const key = `contact:rate-limit:${ip}`;
    const count = Number(await upstashCommand<number>(['INCR', key]));

    if (count === 1) {
      await upstashCommand<number>(['PEXPIRE', key, RATE_LIMIT_WINDOW_MS]);
    }

    let ttlMs = Number(await upstashCommand<number>(['PTTL', key]));
    if (!Number.isFinite(ttlMs) || ttlMs < 0) {
      ttlMs = RATE_LIMIT_WINDOW_MS;
    }

    const resetAt = Date.now() + ttlMs;
    const limited = count > RATE_LIMIT_MAX_REQUESTS;
    const remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - count);

    return { limited, remaining, resetAt };
  } catch (error) {
    console.error('Fallo rate-limit distribuido, usando fallback local:', error);
    return consumeRateLimitLocal(ip);
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function parseBooleanEnv(value: string | undefined, defaultValue: boolean): boolean {
  if (typeof value !== 'string' || !value.trim()) {
    return defaultValue;
  }

  const normalized = value.trim().toLowerCase();
  return normalized === '1' || normalized === 'true' || normalized === 'yes' || normalized === 'on';
}

function getMailConfig(): MailConfig | null {
  const rawSmtpHost = process.env.SMTP_HOST?.trim();
  const smtpPortRaw = process.env.SMTP_PORT?.trim();
  const smtpPort = Number.parseInt(smtpPortRaw || '587', 10);
  const smtpSecure = parseBooleanEnv(process.env.SMTP_SECURE, smtpPort === 465);
  const smtpTlsServername = process.env.SMTP_TLS_SERVERNAME?.trim();
  const smtpTlsRejectUnauthorized = !parseBooleanEnv(process.env.SMTP_TLS_INSECURE, false);
  const smtpHost =
    rawSmtpHost && rawSmtpHost.toLowerCase() !== 'mailserver'
      ? rawSmtpHost
      : smtpTlsServername || undefined;

  const user = (process.env.SMTP_USER || process.env.GMAIL_USER || '').trim();
  const pass = (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '').trim();
  const to = (process.env.EMAIL_TO || user).trim();
  const from = (process.env.SMTP_FROM || user).trim();

  if (!user || !pass || !to || !from || !Number.isFinite(smtpPort)) {
    return null;
  }

  return {
    host: smtpHost || undefined,
    port: smtpPort,
    secure: smtpSecure,
    tlsServername: smtpTlsServername || undefined,
    tlsRejectUnauthorized: smtpTlsRejectUnauthorized,
    user,
    pass,
    to,
    from,
  };
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = await consumeRateLimit(ip);

  if (rateLimit.limited) {
    return jsonWithRateLimit(
      { error: 'Demasiadas solicitudes. Intenta nuevamente en un minuto.' },
      429,
      rateLimit
    );
  }

  try {
    const contentLength = Number(request.headers.get('content-length') || '0');
    if (Number.isFinite(contentLength) && contentLength > MAX_CONTENT_LENGTH_BYTES) {
      return jsonWithRateLimit({ error: 'Payload demasiado grande.' }, 413, rateLimit);
    }

    const rawBody = await request.json();
    const parsed = contactSchema.safeParse(rawBody);

    if (!parsed.success) {
      return jsonWithRateLimit({ error: 'Campos requeridos faltantes o inválidos.' }, 400, rateLimit);
    }

    const { name, email, phone, service, message, website } = parsed.data;

    // Honeypot field for basic bot filtering.
    if (website) {
      return jsonWithRateLimit({ message: 'Email enviado exitosamente' }, 200, rateLimit);
    }

    const normalizedName = name.replace(/[\r\n]+/g, ' ');
    const normalizedEmail = email.toLowerCase().replace(/[\r\n]+/g, '');
    const normalizedPhone = phone ? phone.replace(/[\r\n]+/g, '') : '';
    const normalizedMessage = message ? message : '';

    const sanitizedName = escapeHtml(normalizedName);
    const sanitizedEmail = escapeHtml(normalizedEmail);
    const sanitizedPhone = normalizedPhone ? escapeHtml(normalizedPhone) : '';
    const sanitizedMessage = normalizedMessage ? escapeHtml(normalizedMessage) : '';
    const normalizedServiceName = serviceNames[service];
    const serviceName = escapeHtml(normalizedServiceName);

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      return jsonWithRateLimit(
        {
          error:
            'Configuracion SMTP incompleta. Revisa SMTP_USER/SMTP_PASS (o GMAIL_USER/GMAIL_APP_PASSWORD) y EMAIL_TO.',
        },
        500,
        rateLimit
      );
    }

    const transporter = mailConfig.host
      ? nodemailer.createTransport({
          host: mailConfig.host,
          port: mailConfig.port,
          secure: mailConfig.secure,
          auth: {
            user: mailConfig.user,
            pass: mailConfig.pass,
          },
          tls: {
            servername: mailConfig.tlsServername || mailConfig.host,
            rejectUnauthorized: mailConfig.tlsRejectUnauthorized,
          },
        })
      : nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: mailConfig.user,
            pass: mailConfig.pass,
          },
        });

    const mailOptions = {
      from: `"${normalizedName.replaceAll('"', '')}" <${mailConfig.from}>`,
      to: mailConfig.to,
      replyTo: normalizedEmail,
      subject: `Nueva consulta de ${normalizedName} - ${normalizedServiceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #0891b2;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border: 1px solid #e5e7eb;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #0891b2;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                background: #1e293b;
                color: #94a3b8;
                padding: 20px;
                border-radius: 0 0 10px 10px;
                text-align: center;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📬 Nueva Consulta desde el Formulario de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nombre Completo</div>
                <div class="field-value">${sanitizedName}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">
                  <a href="mailto:${encodeURIComponent(normalizedEmail)}" style="color: #0891b2; text-decoration: none;">${sanitizedEmail}</a>
                </div>
              </div>

              ${
                sanitizedPhone
                  ? `
              <div class="field">
                <div class="field-label">📱 Teléfono</div>
                <div class="field-value">
                  <a href="tel:${encodeURIComponent(normalizedPhone)}" style="color: #0891b2; text-decoration: none;">${sanitizedPhone}</a>
                </div>
              </div>
              `
                  : ''
              }

              <div class="field">
                <div class="field-label">💼 Servicio de Interés</div>
                <div class="field-value">${serviceName}</div>
              </div>

              ${
                sanitizedMessage
                  ? `
              <div class="field">
                <div class="field-label">💬 Mensaje</div>
                <div class="message-box">${sanitizedMessage}</div>
              </div>
              `
                  : ''
              }
            </div>
            <div class="footer">
              <p>Este correo fue enviado desde el formulario de contacto de tu sitio web.</p>
              <p>Responde directamente a este correo para contactar con el cliente.</p>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return jsonWithRateLimit({ message: 'Email enviado exitosamente' }, 200, rateLimit);
  } catch (error) {
    console.error('Error al enviar email:', error);

    return jsonWithRateLimit({ error: 'Error al enviar el mensaje' }, 500, rateLimit);
  }
}
