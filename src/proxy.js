import { NextResponse } from 'next/server';

export function proxy(request) {
  const hostname = request.headers
    .get('host')
    ?.split(':')[0]
    .toLowerCase();

  const { pathname } = request.nextUrl;

  // Subdomain personal Iyaz
  if (hostname === 'iyaz.sembilanpagi.com') {
    // Tampilkan halaman Iyaz saat membuka homepage subdomain
    if (pathname === '/') {
      return NextResponse.rewrite(
        new URL('/iyaz', request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
