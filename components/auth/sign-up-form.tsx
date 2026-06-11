'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function SignUpForm() {
  const router = useRouter();
  const returnTo =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('returnTo')
      : null;
  const safeReturnTo = returnTo?.startsWith('/') ? returnTo : '/';
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data?.error ?? 'Registration failed.');
        return;
      }

      toast({
        title: 'Account created',
        description: 'Redirecting to the previous page...',
      });

      router.push(safeReturnTo);
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to submit form. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-muted-foreground">Full name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-muted-foreground">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-muted-foreground">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
          required
          minLength={8}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-muted-foreground">Confirm password</span>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
          required
          minLength={8}
        />
      </label>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-slate-900 px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
}
