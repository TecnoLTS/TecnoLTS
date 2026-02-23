import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Lógica de proxy para manejar el SEO y la localización.
 * - Redirige /es/* a /* (evita duplicados y conserva autoridad SEO)
 * - Reescribe /* a /es/* internamente para servir el idioma predeterminado
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Nunca reescribir recursos estáticos ni endpoints técnicos.
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/favicon.svg' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.webmanifest' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 1. Normalizar barras finales (Trailing Slashes)
  const normalizedPathname =
    pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : pathname;

  if (normalizedPathname !== pathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = normalizedPathname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  // 2. El prefijo /es no existe públicamente.
  // Español vive en la raíz y /es* siempre redirige a su canónico.
  if (normalizedPathname === '/es' || normalizedPathname.startsWith('/es/')) {
    const redirectUrl = request.nextUrl.clone();
    const canonicalPath = normalizedPathname.replace(/^\/es(?=\/|$)/, '') || '/';
    redirectUrl.pathname = canonicalPath;
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
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)',
  ],
};
