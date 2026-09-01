"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password. Access is allowlisted.");
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]"
          >
            ← Back
          </Link>
          <ThemeToggle />
        </div>

        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Secure access
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-[0.06em]">
          Sign in
        </h1>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Private roadmap for a small team (≈5–10). Only allowlisted emails can
          enter.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-4 border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Password
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>

          {error ? (
            <p className="text-sm text-[var(--danger)]">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-[var(--accent)] bg-[var(--accent)]/15 px-4 py-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)] disabled:opacity-60"
          >
            {loading ? "Checking…" : "Enter roadmap"}
          </button>
        </form>

        <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
          Invite-only access. If you&apos;re on the list, you&apos;re in.
        </p>
      </div>
    </div>
  );
}
