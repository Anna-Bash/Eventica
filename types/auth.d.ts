export type AuthSession = {
  user: {
    id: string;
    email: string;
    name?: string;
    role?: 'user' | 'admin';
  };
  token: string;
};

export type AuthResponse = {
  authenticated: boolean;
  user: AuthSession['user'] | null;
};
