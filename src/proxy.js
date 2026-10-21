
import { NextResponse } from 'next/server';

export function proxy(request) {
  const hostname = request.headers
    .get('host')
    ?.split(':')[0]
    .toLowerCase();

  const { pathname } = request.nextUrl;

  if (hostname !== 'iyaz.sembilanpagi.com') {
    return NextResponse.next();
  }

  // Jangan rewrite aset statis atau endpoint internal.
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Jangan menambahkan prefix /iyaz dua kali.
  if (pathname === '/iyaz' || pathname.startsWith('/iyaz/')) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === '/'
    ? '/iyaz'
    : `/iyaz${pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image).*)',
  ],
};
