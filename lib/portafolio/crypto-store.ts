import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from 'node:crypto';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import path from 'node:path';
import type { PortafolioStore } from './types';

const ALGO = 'aes-256-gcm';
const IV_LENGTH = 12;
const TAG_LENGTH = 16;
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'portafolio-tokens.enc');

const EMPTY_STORE: PortafolioStore = { tokens: [], otps: [], sessions: [] };

function getKey(): Buffer {
  const hex = process.env.DATA_ENCRYPTION_KEY?.trim();
  if (!hex || hex.length !== 64) {
    throw new Error(
      'DATA_ENCRYPTION_KEY debe ser un string hexadecimal de 64 caracteres (32 bytes)'
    );
  }
  return Buffer.from(hex, 'hex');
}

function encrypt(plaintext: string): Buffer {
  const key = getKey();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGO, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]);
}

function decrypt(buffer: Buffer): string {
  const key = getKey();
  const iv = buffer.subarray(0, IV_LENGTH);
  const tag = buffer.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
  const ciphertext = buffer.subarray(IV_LENGTH + TAG_LENGTH);
  const decipher = createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
}

let lockChain: Promise<void> = Promise.resolve();

export async function readStore(): Promise<PortafolioStore> {
  try {
    const buffer = await readFile(DATA_FILE);
    const json = decrypt(buffer);
    return JSON.parse(json) as PortafolioStore;
  } catch (err: unknown) {
    if (err instanceof Error && 'code' in err && (err as NodeJS.ErrnoException).code === 'ENOENT') {
      return { ...EMPTY_STORE, tokens: [], otps: [], sessions: [] };
    }
    throw err;
  }
}

export async function writeStore(store: PortafolioStore): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  const encrypted = encrypt(JSON.stringify(store));
  const tmpFile = DATA_FILE + '.tmp';
  await writeFile(tmpFile, encrypted);
  await rename(tmpFile, DATA_FILE);
}

export async function withStore<T>(
  fn: (store: PortafolioStore) => { result: T; store: PortafolioStore }
): Promise<T> {
  let resolve: () => void;
  const next = new Promise<void>((r) => {
    resolve = r;
  });
  const prev = lockChain;
  lockChain = next;

  await prev;
  try {
    const store = await readStore();
    const { result, store: updated } = fn(store);
    await writeStore(updated);
    return result;
  } finally {
    resolve!();
  }
}
