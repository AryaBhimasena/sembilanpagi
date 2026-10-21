import { NextResponse } from 'next/server';

export function proxy(request) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const { pathname } = request.nextUrl;

  if (
    hostname === 'iyaz.sembilanpagi.com' &&
    pathname === '/'
  ) {
    return NextResponse.rewrite(
      new URL('/iyaz', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};