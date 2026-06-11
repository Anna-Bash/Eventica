import { verifyPassword } from './users';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type UserProfile = {
  id: string;
  email: string;
  name?: string;
  role?: 'user' | 'admin';
};

export async function verifyCredentials(credentials: AuthCredentials) {
  const user = await verifyPassword(credentials.email, credentials.password);
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}
