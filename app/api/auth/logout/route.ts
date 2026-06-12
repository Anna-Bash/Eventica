import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'logged out' });
  response.cookies.set({
    name: 'app-session',
    value: '',
    maxAge: 0,
    path: '/',
  });
  return response;
}
