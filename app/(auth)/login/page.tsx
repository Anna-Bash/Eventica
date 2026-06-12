import SignInForm from '@/components/auth/sign-in-form';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Sign in</h1>
        <SignInForm />
      </div>
    </main>
  );
}
