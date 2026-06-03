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
  // TODO: replace with real user lookup
  const isValid = credentials.email === 'admin@example.com' && credentials.password === 'password';

  if (!isValid) {
    return null;
  }

  return {
    id: '1',
    email: credentials.email,
    name: 'Admin User',
    role: 'admin' as const,
  };
}
