import crypto from 'node:crypto';

type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'user' | 'admin';
};

const users: UserRecord[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    passwordHash: hashPassword('password'),
    role: 'admin',
  },
];

function hashPassword(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function findUserByEmail(email: string) {
  return users.find((user) => user.email === email.toLowerCase()) ?? null;
}

export async function verifyPassword(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }

  const passwordHash = hashPassword(password);
  return user.passwordHash === passwordHash ? user : null;
}

export async function createUser(name: string, email: string, password: string) {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return null;
  }

  const user: UserRecord = {
    id: crypto.randomUUID(),
    name,
    email: email.toLowerCase(),
    passwordHash: hashPassword(password),
    role: 'user',
  };

  users.push(user);
  return user;
}
