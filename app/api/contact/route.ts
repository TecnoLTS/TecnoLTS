import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, RateLimitBucket>;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string | null;
  service?: string;
  message?: string | null;
  website?: string;
  privacy_accepted?: boolean;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

declare global {
  var __contactRateLimitStore: RateLimitStore | undefined;
}

const globalStore = globalThis as typeof globalThis & {
  __contactRateLimitStore?: RateLimitStore;
};
const rateLimitStore: RateLimitStore = globalStore.__contactRateLimitStore ?? new Map<string, RateLimitBucket>();
globalStore.__contactRateLimitStore = rateLimitStore;

const serviceNames: Record<string, string> = {
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

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, phone, service, message, website, privacy_accepted } = body;

    if (typeof website === 'string' && website.trim()) {
      return NextResponse.json({ message: 'Email enviado exitosamente' }, { status: 200 });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta nuevamente en un minuto.' },
        { status: 429 }
      );
    }

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof service !== 'string' ||
      !privacy_accepted
    ) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    const normalizedName = name.trim().replace(/[\r\n]+/g, ' ');
    const normalizedEmail = email.trim().toLowerCase().replace(/[\r\n]+/g, '');
    const normalizedPhone = typeof phone === 'string' ? phone.trim().replace(/[\r\n]+/g, '') : '';
    const normalizedMessage = typeof message === 'string' ? message.trim() : '';

    const sanitizedName = escapeHtml(normalizedName);
    const sanitizedEmail = escapeHtml(normalizedEmail);
    const sanitizedPhone = normalizedPhone ? escapeHtml(normalizedPhone) : '';
    const sanitizedMessage = normalizedMessage ? escapeHtml(normalizedMessage) : '';
    const normalizedServiceName = serviceNames[service] || service;
    const serviceName = escapeHtml(normalizedServiceName);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${normalizedName.replaceAll('"', '')}" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.GMAIL_USER,
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

              ${sanitizedPhone ? `
              <div class="field">
                <div class="field-label">📱 Teléfono</div>
                <div class="field-value">
                  <a href="tel:${encodeURIComponent(normalizedPhone)}" style="color: #0891b2; text-decoration: none;">${sanitizedPhone}</a>
                </div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">💼 Servicio de Interés</div>
                <div class="field-value">${serviceName}</div>
              </div>

              ${sanitizedMessage ? `
              <div class="field">
                <div class="field-label">💬 Mensaje</div>
                <div class="message-box">${sanitizedMessage}</div>
              </div>
              ` : ''}
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

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
