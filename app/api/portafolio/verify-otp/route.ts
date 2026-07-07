import { NextResponse } from 'next/server';
import { withStore } from '@/lib/portafolio/crypto-store';
import { findValidOtp, verifyOtpCode, isOtpBlocked, cleanExpiredOtps } from '@/lib/portafolio/otp';
import {
  createSession,
  buildCookieValue,
  getSessionCookieOptions,
  cleanExpiredSessions,
} from '@/lib/portafolio/session';
import { verifyOtpSchema } from '@/lib/portafolio/schemas';

export const runtime = 'nodejs';

type VerifyError = { error: string; status: number; remaining?: number };
type VerifySuccess = { success: true; sessionId: string };
type VerifyResult = VerifyError | VerifySuccess;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = verifyOtpSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
    }

    const { token, code } = parsed.data;

    const result = await withStore<VerifyResult>((store) => {
      const tokenEntry = store.tokens.find(
        (t) => t.token === token && t.active
      );
      if (!tokenEntry) {
        return { result: { error: 'Acceso no válido', status: 404 }, store };
      }

      cleanExpiredOtps(store);
      cleanExpiredSessions(store);

      const otp = findValidOtp(store, tokenEntry.id);
      if (!otp) {
        return {
          result: { error: 'Código expirado o no encontrado. Solicita uno nuevo.', status: 400 },
          store,
        };
      }

      if (isOtpBlocked(otp)) {
        return {
          result: { error: 'Demasiados intentos. Solicita un nuevo código.', status: 429 },
          store,
        };
      }

      otp.attempts += 1;

      if (!verifyOtpCode(otp, code)) {
        const remaining = 5 - otp.attempts;
        return {
          result: {
            error: `Código incorrecto. ${remaining > 0 ? `${remaining} intento(s) restante(s).` : 'Solicita un nuevo código.'}`,
            status: 401,
            remaining,
          },
          store,
        };
      }

      otp.verified = true;
      const session = createSession(tokenEntry.id);
      store.sessions.push(session);

      return {
        result: { success: true, sessionId: session.sessionId },
        store,
      };
    });

    if ('error' in result) {
      return NextResponse.json(
        { error: result.error, ...('remaining' in result ? { remaining: result.remaining } : {}) },
        { status: result.status }
      );
    }

    const cookieOpts = getSessionCookieOptions();
    const response = NextResponse.json({ success: true });
    response.cookies.set(
      cookieOpts.name,
      buildCookieValue(result.sessionId),
      {
        httpOnly: cookieOpts.httpOnly,
        secure: cookieOpts.secure,
        sameSite: cookieOpts.sameSite,
        path: cookieOpts.path,
        maxAge: cookieOpts.maxAge,
      }
    );
    return response;
  } catch (error) {
    console.error('Error en verify-otp:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
