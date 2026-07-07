import { randomInt, timingSafeEqual } from 'node:crypto';
import type { OtpEntry, PortafolioStore } from './types';

const OTP_LENGTH = 6;
const OTP_EXPIRY_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export function generateOtpCode(): string {
  return String(randomInt(100_000, 1_000_000));
}

export function createOtp(tokenId: string): OtpEntry {
  const now = new Date();
  return {
    tokenId,
    code: generateOtpCode(),
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + OTP_EXPIRY_MS).toISOString(),
    attempts: 0,
    verified: false,
  };
}

export function findValidOtp(store: PortafolioStore, tokenId: string): OtpEntry | null {
  const now = Date.now();
  return (
    store.otps.find(
      (o) =>
        o.tokenId === tokenId &&
        !o.verified &&
        new Date(o.expiresAt).getTime() > now &&
        o.attempts < MAX_ATTEMPTS
    ) ?? null
  );
}

export function verifyOtpCode(otp: OtpEntry, code: string): boolean {
  const a = Buffer.from(otp.code.padEnd(OTP_LENGTH, '0'));
  const b = Buffer.from(code.padEnd(OTP_LENGTH, '0'));
  return timingSafeEqual(a, b);
}

export function isOtpBlocked(otp: OtpEntry): boolean {
  return otp.attempts >= MAX_ATTEMPTS;
}

export function cleanExpiredOtps(store: PortafolioStore): void {
  const now = Date.now();
  store.otps = store.otps.filter(
    (o) => !o.verified && new Date(o.expiresAt).getTime() > now
  );
}
