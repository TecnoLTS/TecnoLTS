import { z } from 'zod';

export const sendOtpSchema = z.object({
  token: z.string().trim().min(1),
});

export const verifyOtpSchema = z.object({
  token: z.string().trim().min(1),
  code: z.string().trim().length(6),
});

export const createTokenSchema = z.object({
  email: z.string().trim().email().max(254),
  name: z.string().trim().min(1).max(120),
});

export const updateTokenSchema = z.object({
  email: z.string().trim().email().max(254).optional(),
  name: z.string().trim().min(1).max(120).optional(),
  active: z.boolean().optional(),
});
