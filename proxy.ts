import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const redirectUrl = request.nextUrl.clone();
    const redirectedPath = pathname.replace(/^\/es/, '') || '/';
    redirectUrl.pathname = redirectedPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (pathname === '/') {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = '/es';
    return NextResponse.rewrite(rewriteUrl);
  }

  if (pathname === '/services' || pathname.startsWith('/services/')) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/es${pathname}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
