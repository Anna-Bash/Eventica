import { NextResponse } from 'next/server';
import { createUser } from '@/lib/auth/users';
import { createSessionToken } from '@/lib/auth/auth';
import { SESSION_COOKIE_NAME } from '@/lib/auth/cookies';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body as {
    name?: string;
    email?: string;
    password?: string;
  };

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    return NextResponse.json({ error: 'Name, email, and password are required.' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters long.' }, { status: 400 });
  }

  const user = await createUser(name.trim(), email.trim(), password);
  if (!user) {
    return NextResponse.json({ error: 'Email already registered.' }, { status: 409 });
  }

  const token = createSessionToken({ id: user.id, email: user.email, name: user.name });
  const res = NextResponse.json({ registered: true, user: { id: user.id, email: user.email, name: user.name } });

  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return res;
}
