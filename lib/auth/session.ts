import { cookies } from 'next/headers';
import { verifyToken } from './jwt';

const SECRET = process.env.AUTH_SECRET;
if (!SECRET) {
  throw new Error(
    "AUTH_SECRET environment variable is not set. Refusing to start.",
  );
}


export function getSession() {
  const token = cookies().get('app-session')?.value;
  if (!token) return null;

  const payload = verifyToken(token, SECRET) as { user?: { id: string; email: string } } | null;
  if (!payload || !payload.user) return null;

  return {
    user: payload.user,
    token,
  };
}
