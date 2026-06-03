export const SESSION_COOKIE_NAME = 'app-session';

export function cookieOptions() {
  return {
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
  };
}
