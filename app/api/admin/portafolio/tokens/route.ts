import { NextResponse } from 'next/server';
import { randomBytes, randomUUID } from 'node:crypto';
import { readStore, withStore } from '@/lib/portafolio/crypto-store';
import { createTokenSchema } from '@/lib/portafolio/schemas';

export const runtime = 'nodejs';

function isAuthorized(request: Request): boolean {
  const key = process.env.ADMIN_API_KEY?.trim();
  if (!key) return false;
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${key}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const store = await readStore();
  return NextResponse.json({ tokens: store.tokens });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = createTokenSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const newToken = await withStore((store) => {
      const entry = {
        id: randomUUID(),
        token: randomBytes(32).toString('base64url'),
        email: parsed.data.email,
        name: parsed.data.name,
        createdAt: new Date().toISOString(),
        active: true,
      };
      store.tokens.push(entry);
      return { result: entry, store };
    });

    return NextResponse.json({ token: newToken }, { status: 201 });
  } catch (error) {
    console.error('Error creando token:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
