import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Portafolio routes: skip i18n rewrite, let the page/API handle auth
  if (pathname === '/portafolio' || pathname.startsWith('/api/portafolio/')) {
    return NextResponse.next();
  }

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

  // 1. /es no existe públicamente. Redirigir en un solo salto al canónico.
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const withoutEsPrefix = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
    const canonicalPath =
      withoutEsPrefix !== '/' ? withoutEsPrefix.replace(/\/+$/, '') || '/' : '/';
    const destination = `${canonicalPath}${request.nextUrl.search}`;
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  // 2. Normalizar barras finales (Trailing Slashes)
  const normalizedPathname =
    pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : pathname;

  if (normalizedPathname !== pathname) {
    const destination = `${normalizedPathname}${request.nextUrl.search}`;
    return NextResponse.redirect(new URL(destination, request.url), 308);
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
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)',
  ],
};
