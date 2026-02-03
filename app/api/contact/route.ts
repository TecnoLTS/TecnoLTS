import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, privacy_accepted } = body;

    // Validación básica
    if (!name || !email || !service || !privacy_accepted) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    // Configuración del transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Mapeo de servicios a nombres legibles
    const serviceNames: { [key: string]: string } = {
      software: 'Desarrollo de Software',
      network: 'Soluciones de Red',
      iso: 'Certificación ISO 27001',
      cybersecurity: 'Ciberseguridad',
      backups: 'Gestión de Respaldos',
      licensing: 'Licenciamiento de Software',
      disaster: 'Recuperación ante Desastres',
      datacenter: 'Diseño de Data Center',
      other: 'Otro'
    };

    const serviceName = serviceNames[service] || service;

    // Configuración del email
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nueva consulta de ${name} - ${serviceName}`,
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
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">📱 Teléfono</div>
                <div class="field-value">
                  <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">💼 Servicio de Interés</div>
                <div class="field-value">${serviceName}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="field-label">💬 Mensaje</div>
                <div class="message-box">${message}</div>
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

    // Enviar el email
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
