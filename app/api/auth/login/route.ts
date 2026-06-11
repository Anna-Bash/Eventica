import { NextResponse } from 'next/server';
import { verifyCredentials } from '@/lib/auth/strategy';
import { createSessionToken } from '@/lib/auth/auth';
import { SESSION_COOKIE_NAME } from '@/lib/auth/cookies';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body as { email: string; password: string };

  const user = await verifyCredentials({ email, password });
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const token = createSessionToken({ id: user.id, email: user.email, name: user.name });

  const res = NextResponse.json({ authenticated: true, user: { id: user.id, email: user.email, name: user.name } });
  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return res;
}
