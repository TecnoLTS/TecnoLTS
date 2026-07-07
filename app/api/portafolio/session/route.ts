import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { readStore, writeStore } from '@/lib/portafolio/crypto-store';
import {
  findActiveSessionByTokenId,
  createSession,
  buildCookieValue,
  getSessionCookieOptions,
  cleanExpiredSessions,
} from '@/lib/portafolio/session';

export const runtime = 'nodejs';

function getBaseUrl(request: NextRequest): string {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'http';
  return `${proto}://${host}`;
}

export async function GET(request: NextRequest) {
  const base = getBaseUrl(request);

  try {
    const token = request.nextUrl.searchParams.get('token');
    if (!token) {
      return NextResponse.redirect(`${base}/portafolio`);
    }

    const store = await readStore();
    const tokenEntry = store.tokens.find(
      (t) => t.token === token && t.active
    );
    if (!tokenEntry) {
      return NextResponse.redirect(`${base}/portafolio`);
    }

    cleanExpiredSessions(store);

    const activeSession = findActiveSessionByTokenId(store, tokenEntry.id);
    if (!activeSession) {
      return NextResponse.redirect(
        `${base}/portafolio?token=${encodeURIComponent(token)}`
      );
    }

    const newSession = createSession(tokenEntry.id);
    store.sessions.push(newSession);
    await writeStore(store);

    const cookieOpts = getSessionCookieOptions();
    const response = NextResponse.redirect(`${base}/portafolio`);
    response.cookies.set(cookieOpts.name, buildCookieValue(newSession.sessionId), {
      httpOnly: cookieOpts.httpOnly,
      secure: cookieOpts.secure,
      sameSite: cookieOpts.sameSite,
      path: cookieOpts.path,
      maxAge: cookieOpts.maxAge,
    });
    return response;
  } catch (error) {
    console.error('Error en session:', error);
    return NextResponse.redirect(`${base}/portafolio`);
  }
}
