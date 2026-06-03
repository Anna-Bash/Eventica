import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Protected',
};

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const session = cookies().get('app-session')?.value;

  if (!session) {
    redirect('/login');
  }

  return <section className="min-h-screen">{children}</section>;
}
