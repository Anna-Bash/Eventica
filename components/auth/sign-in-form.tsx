'use client';

import { useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
        />
      </label>
      <label className="block">
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 block w-full rounded-md border px-3 py-2"
        />
      </label>
      <button type="submit" className="w-full rounded-md bg-slate-900 px-4 py-2 text-white">
        Sign in
      </button>
    </form>
  );
}
