import SignOutButton from '@/components/auth/sign-out-button';

export default function ProtectedPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">Protected dashboard</h1>
      <p className="mb-6 text-sm text-slate-600">This page is only accessible when signed in.</p>
      <SignOutButton />
    </main>
  );
}
