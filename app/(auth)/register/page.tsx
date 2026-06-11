import SignUpForm from '@/components/auth/sign-up-form';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Create account</h1>
        <SignUpForm />
      </div>
    </main>
  );
}
