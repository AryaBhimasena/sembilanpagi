
import { NextResponse } from 'next/server';

export function proxy(request) {
  const hostname = request.headers
    .get('host')
    ?.split(':')[0]
    .toLowerCase();

  const { pathname } = request.nextUrl;

  if (hostname === 'iyaz.sembilanpagi.com') {
    // Hindari rewrite berulang jika path sudah memiliki prefix /iyaz
    if (pathname === '/iyaz' || pathname.startsWith('/iyaz/')) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = pathname === '/'
      ? '/iyaz'
      : `/iyaz${pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
