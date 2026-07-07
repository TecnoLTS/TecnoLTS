import nodemailer from 'nodemailer';

type MailConfig = {
  host?: string;
  port: number;
  secure: boolean;
  tlsServername?: string;
  tlsRejectUnauthorized: boolean;
  user: string;
  pass: string;
  from: string;
};

function parseBooleanEnv(value: string | undefined, defaultValue: boolean): boolean {
  if (typeof value !== 'string' || !value.trim()) return defaultValue;
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
  const from = (process.env.SMTP_FROM || user).trim();

  if (!user || !pass || !from || !Number.isFinite(smtpPort)) return null;

  return {
    host: smtpHost || undefined,
    port: smtpPort,
    secure: smtpSecure,
    tlsServername: smtpTlsServername || undefined,
    tlsRejectUnauthorized: smtpTlsRejectUnauthorized,
    user,
    pass,
    from,
  };
}

function createTransporter(config: MailConfig) {
  return config.host
    ? nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: { user: config.user, pass: config.pass },
        tls: {
          servername: config.tlsServername || config.host,
          rejectUnauthorized: config.tlsRejectUnauthorized,
        },
      })
    : nodemailer.createTransport({
        service: 'gmail',
        auth: { user: config.user, pass: config.pass },
      });
}

export async function sendOtpEmail(to: string, code: string, name: string): Promise<void> {
  const config = getMailConfig();
  if (!config) {
    throw new Error('Configuración SMTP incompleta');
  }

  const transporter = createTransporter(config);

  await transporter.sendMail({
    from: `"TecnoLTS" <${config.from}>`,
    to,
    subject: `Tu código de acceso: ${code}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Código de Acceso al Portafolio</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <p>Hola <strong>${name.replace(/[<>"'&]/g, '')}</strong>,</p>
            <p>Tu código de verificación es:</p>
            <div style="text-align: center; margin: 25px 0;">
              <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #0891b2; background: white; padding: 15px 30px; border-radius: 8px; border: 2px solid #e5e7eb;">${code}</span>
            </div>
            <p style="color: #6b7280; font-size: 14px;">Este código expira en <strong>10 minutos</strong>.</p>
            <p style="color: #6b7280; font-size: 14px;">Si no solicitaste este código, puedes ignorar este mensaje.</p>
          </div>
          <div style="background: #1e293b; color: #94a3b8; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">TecnoLTS - Soluciones IT Empresariales</p>
          </div>
        </body>
      </html>
    `,
  });
}

export function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return '***@***';
  const visible = local.length <= 2 ? local[0] : local.slice(0, 2);
  return `${visible}${'*'.repeat(Math.max(1, local.length - 2))}@${domain}`;
}
