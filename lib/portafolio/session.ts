import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import type { PortafolioStore, SessionEntry } from './types';

const SESSION_COOKIE_NAME = 'portafolio_session';

function getSessionDurationMs(): number {
  const hours = Number(process.env.SESSION_DURATION_HOURS) || 8;
  return hours * 60 * 60 * 1000;
}

function getKey(): string {
  const key = process.env.DATA_ENCRYPTION_KEY?.trim();
  if (!key) throw new Error('DATA_ENCRYPTION_KEY requerida');
  return key;
}

function hmacSign(data: string): string {
  return createHmac('sha256', getKey()).update(data).digest('hex');
}

export function createSession(tokenId: string): SessionEntry {
  const now = new Date();
  return {
    tokenId,
    sessionId: randomUUID(),
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + getSessionDurationMs()).toISOString(),
  };
}

export function buildCookieValue(sessionId: string): string {
  const sig = hmacSign(sessionId);
  return `${sessionId}.${sig}`;
}

export function parseCookieValue(value: string): string | null {
  const dotIndex = value.lastIndexOf('.');
  if (dotIndex === -1) return null;
  const sessionId = value.slice(0, dotIndex);
  const sig = value.slice(dotIndex + 1);
  const expected = hmacSign(sessionId);
  if (sig.length !== expected.length) return null;
  const a = Buffer.from(sig, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length) return null;
  if (!timingSafeEqual(a, b)) return null;
  return sessionId;
}

export function findValidSession(
  store: PortafolioStore,
  sessionId: string
): SessionEntry | null {
  const now = Date.now();
  return (
    store.sessions.find(
      (s) => s.sessionId === sessionId && new Date(s.expiresAt).getTime() > now
    ) ?? null
  );
}

export function findActiveSessionByTokenId(
  store: PortafolioStore,
  tokenId: string
): SessionEntry | null {
  const now = Date.now();
  return (
    store.sessions.find(
      (s) => s.tokenId === tokenId && new Date(s.expiresAt).getTime() > now
    ) ?? null
  );
}

export function cleanExpiredSessions(store: PortafolioStore): void {
  const now = Date.now();
  store.sessions = store.sessions.filter(
    (s) => new Date(s.expiresAt).getTime() > now
  );
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE_NAME;
}

export function getSessionCookieOptions() {
  return {
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
    secure: (process.env.APP_ENV ?? process.env.NODE_ENV) === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: Math.floor(getSessionDurationMs() / 1000),
  };
}
