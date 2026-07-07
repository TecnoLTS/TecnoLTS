import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/portafolio/crypto-store';
import { findValidOtp, createOtp, cleanExpiredOtps } from '@/lib/portafolio/otp';
import { findActiveSessionByTokenId } from '@/lib/portafolio/session';
import { sendOtpEmail, maskEmail } from '@/lib/portafolio/mail';
import { sendOtpSchema } from '@/lib/portafolio/schemas';

export const runtime = 'nodejs';

type RateLimitBucket = { count: number; resetAt: number };
type RateLimitStore = Map<string, RateLimitBucket>;

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

declare global {
  var __otpSendRateLimitStore: RateLimitStore | undefined;
}

const globalStore = globalThis as typeof globalThis & {
  __otpSendRateLimitStore?: RateLimitStore;
};
const rateLimitStore: RateLimitStore =
  globalStore.__otpSendRateLimitStore ?? new Map();
globalStore.__otpSendRateLimitStore = rateLimitStore;

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-real-ip')?.split(',')[0]?.trim() ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) rateLimitStore.delete(key);
  }
  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Intenta en unos minutos.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = sendOtpSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
    }

    const store = await readStore();
    const tokenEntry = store.tokens.find(
      (t) => t.token === parsed.data.token && t.active
    );
    if (!tokenEntry) {
      return NextResponse.json({ error: 'Acceso no válido' }, { status: 404 });
    }

    const activeSession = findActiveSessionByTokenId(store, tokenEntry.id);
    if (activeSession) {
      return NextResponse.json({
        success: true,
        hasActiveSession: true,
        maskedEmail: maskEmail(tokenEntry.email),
      });
    }

    cleanExpiredOtps(store);

    let otp = findValidOtp(store, tokenEntry.id);
    if (!otp) {
      otp = createOtp(tokenEntry.id);
      store.otps.push(otp);
    }

    await writeStore(store);
    await sendOtpEmail(tokenEntry.email, otp.code, tokenEntry.name);

    return NextResponse.json({
      success: true,
      hasActiveSession: false,
      maskedEmail: maskEmail(tokenEntry.email),
    });
  } catch (error) {
    console.error('Error en send-otp:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
