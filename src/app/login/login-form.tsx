"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
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
    <div className="editorial-shell relative flex h-dvh flex-col overflow-hidden">
      <header className="relative z-20 flex shrink-0 items-center justify-end gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.14em] text-[var(--editorial-muted)] transition hover:text-[var(--editorial-ink)]"
        >
          Home
        </Link>
        <ThemeToggle className="h-8 w-8 border-transparent bg-transparent text-[var(--editorial-muted)] hover:border-transparent hover:text-[var(--editorial-ink)]" />
      </header>

      <main className="relative z-10 flex min-h-0 flex-1 items-stretch px-4 sm:px-8">
        <div className="editorial-hero fade-up relative w-full">
          <Image
            src="/landing/portrait-hero.png"
            alt="Manikanta Engalligi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 flex w-full items-center justify-start bg-gradient-to-r from-[var(--editorial-wash)] via-[var(--editorial-wash-mid)] to-transparent p-6 sm:w-[min(42%,28rem)] sm:p-8">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--editorial-muted)]">
                Secure access
              </p>
              <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] text-[var(--editorial-ink)]">
                Sign in
              </h1>
              <label className="mt-6 block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted)]">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full border border-[var(--editorial-line)] bg-[var(--editorial-field)] px-3 py-2.5 text-sm text-[var(--editorial-ink)] outline-none transition focus:border-[var(--editorial-amber)]"
                />
              </label>
              <label className="mt-4 block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted)]">
                  Password
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full border border-[var(--editorial-line)] bg-[var(--editorial-field)] px-3 py-2.5 text-sm text-[var(--editorial-ink)] outline-none transition focus:border-[var(--editorial-amber)]"
                />
              </label>
              {error ? (
                <p className="mt-3 text-sm text-[#c47a7a]">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full border border-[var(--editorial-amber)] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[var(--editorial-amber)] transition hover:bg-[var(--editorial-amber)] hover:text-[var(--editorial-on-accent)] disabled:opacity-60"
              >
                {loading ? "Checking…" : "Enter roadmap"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="editorial-wordmark-wrap relative z-10 shrink-0 overflow-hidden">
        <p className="editorial-wordmark select-none font-[family-name:var(--font-display)] font-semibold">
          ROADMAP
        </p>
      </div>
    </div>
  );
}
