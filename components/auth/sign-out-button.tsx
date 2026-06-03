'use client';

export default function SignOutButton() {
  async function handleSignOut() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/login';
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded-md bg-slate-900 px-3 py-2 text-white"
    >
      Sign out
    </button>
  );
}
