import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Lógica de proxy para manejar el SEO y la localización.
 * - Redirige /es/* a /* (Evitar contenido duplicado)
 * - Reescribe /* a /es/* internamente para servir el idioma predeterminado
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Normalizar barras finales (Trailing Slashes)
  const normalizedPathname =
    pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : pathname;

  if (normalizedPathname !== pathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = normalizedPathname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  // 2. Redirigir prefijo /es a la raíz (SEO: contenido canónico en la raíz)
  if (normalizedPathname === '/es' || normalizedPathname.startsWith('/es/')) {
    const redirectUrl = request.nextUrl.clone();
    const redirectedPath = normalizedPathname.replace(/^\/es/, '') || '/';
    redirectUrl.pathname = redirectedPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  // 3. Manejo de prefijos de idioma existentes (ej. /en)
  const locales = ['en']; // 'es' se maneja como predeterminado en la raíz
  const hasLocale = locales.some(
    (loc) => normalizedPathname === `/${loc}` || normalizedPathname.startsWith(`/${loc}/`)
  );

  // 4. Si no tiene prefijo, reescritura interna a /es para que [lang] lo procese
  if (!hasLocale) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/es${normalizedPathname}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (files with extensions)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|[\\w-]+\\.\\w+).*)',
  ],
};
