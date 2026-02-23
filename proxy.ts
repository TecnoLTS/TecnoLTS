import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPathname =
    pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : pathname;

  if (normalizedPathname === '/es' || normalizedPathname.startsWith('/es/')) {
    const redirectUrl = request.nextUrl.clone();
    const redirectedPath = normalizedPathname.replace(/^\/es/, '') || '/';
    redirectUrl.pathname = redirectedPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (normalizedPathname !== pathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = normalizedPathname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (normalizedPathname === '/') {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = '/es';
    return NextResponse.rewrite(rewriteUrl);
  }

  if (normalizedPathname === '/services' || normalizedPathname.startsWith('/services/')) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/es${normalizedPathname}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
