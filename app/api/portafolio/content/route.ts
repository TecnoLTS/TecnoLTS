import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cookies } from 'next/headers';
import { readStore } from '@/lib/portafolio/crypto-store';
import {
  parseCookieValue,
  findValidSession,
  getSessionCookieName,
  cleanExpiredSessions,
} from '@/lib/portafolio/session';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(getSessionCookieName());
    if (!cookie?.value) {
      return new NextResponse('No autorizado', { status: 401 });
    }

    const sessionId = parseCookieValue(cookie.value);
    if (!sessionId) {
      return new NextResponse('Sesión inválida', { status: 401 });
    }

    const store = await readStore();
    cleanExpiredSessions(store);

    const session = findValidSession(store, sessionId);
    if (!session) {
      return new NextResponse('Sesión expirada', { status: 401 });
    }

    const htmlPath = path.join(process.cwd(), 'data', 'portafolio.html');
    const html = await readFile(htmlPath, 'utf-8');

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'private, no-store',
        'X-Frame-Options': 'SAMEORIGIN',
      },
    });
  } catch (error) {
    console.error('Error sirviendo portafolio:', error);
    return new NextResponse('Error interno', { status: 500 });
  }
}
