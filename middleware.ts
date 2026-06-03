import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*', '/api/auth/:path*'],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('app-session')?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (!token && pathname.startsWith('/dashboard')) {
    const signInUrl = new URL('/login', request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (token && isAuthPage) {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}
