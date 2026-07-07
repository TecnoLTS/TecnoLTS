import { NextResponse } from 'next/server';
import { readStore, withStore } from '@/lib/portafolio/crypto-store';
import { updateTokenSchema } from '@/lib/portafolio/schemas';

export const runtime = 'nodejs';

type RouteParams = { params: Promise<{ id: string }> };

function isAuthorized(request: Request): boolean {
  const key = process.env.ADMIN_API_KEY?.trim();
  if (!key) return false;
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${key}`;
}

export async function GET(request: Request, { params }: RouteParams) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;
  const store = await readStore();
  const token = store.tokens.find((t) => t.id === id);

  if (!token) {
    return NextResponse.json({ error: 'Token no encontrado' }, { status: 404 });
  }

  return NextResponse.json({ token });
}

export async function PUT(request: Request, { params }: RouteParams) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = updateTokenSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const updated = await withStore((store) => {
      const token = store.tokens.find((t) => t.id === id);
      if (!token) {
        return { result: null, store };
      }
      if (parsed.data.email !== undefined) token.email = parsed.data.email;
      if (parsed.data.name !== undefined) token.name = parsed.data.name;
      if (parsed.data.active !== undefined) token.active = parsed.data.active;
      return { result: token, store };
    });

    if (!updated) {
      return NextResponse.json({ error: 'Token no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ token: updated });
  } catch (error) {
    console.error('Error actualizando token:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;

  const deleted = await withStore((store) => {
    const index = store.tokens.findIndex((t) => t.id === id);
    if (index === -1) {
      return { result: false, store };
    }
    store.tokens.splice(index, 1);
    store.otps = store.otps.filter((o) => o.tokenId !== id);
    store.sessions = store.sessions.filter((s) => s.tokenId !== id);
    return { result: true, store };
  });

  if (!deleted) {
    return NextResponse.json({ error: 'Token no encontrado' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
