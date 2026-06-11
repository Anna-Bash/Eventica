import { getSession } from './session';
import { createToken, verifyToken } from './jwt';

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
}

const SECRET = process.env.AUTH_SECRET
if (!SECRET) {
  throw new Error(
    "AUTH_SECRET environment variable is not set. Refusing to start.",
  );
}

export function createSessionToken(user: {
  id: string;
  email: string;
  name?: string;
}) {
  return createToken({ user, iat: Date.now() }, SECRET);
}

export function verifySessionToken(token: string) {
  return verifyToken(token, SECRET) as
    | { user: { id: string; email: string; name?: string } }
    | null;
}
