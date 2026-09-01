"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LandingCollage } from "@/components/landing-collage";

export function LandingPage() {
  const { data: session } = useSession();

  return (
    <div className="landing-shell relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-noise" />
      <LandingCollage />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-5">
          <p className="landing-eyebrow text-[10px] uppercase tracking-[0.35em]">
            Private roadmap
          </p>
          <ThemeToggle />
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-8 text-center">
          <p className="landing-eyebrow fade-up text-[11px] uppercase tracking-[0.45em]">
            Welcome to
          </p>
          <h1 className="name-sheen fade-up mt-4 max-w-5xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[0.08em] sm:text-7xl md:text-8xl">
            MANIKANTA
            <br />
            ENGALLIGI
          </h1>
          <p className="landing-copy fade-up mt-6 max-w-xl text-sm leading-relaxed tracking-[0.08em] sm:text-base">
            My Europe career command center — companies, sources, skills.
            Built to decide, not just scroll.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={session ? "/dashboard" : "/login"}
              className="landing-btn-primary border px-8 py-3 text-xs uppercase tracking-[0.28em] transition"
            >
              {session ? "Enter dashboard" : "Secure login"}
            </Link>
            <Link
              href="/login"
              className="landing-btn-secondary border px-8 py-3 text-xs uppercase tracking-[0.28em] transition"
            >
              Access roadmap
            </Link>
          </div>
        </main>

        <footer className="landing-footer relative z-10 flex flex-wrap items-center justify-center gap-6 px-4 pb-8 text-[10px] uppercase tracking-[0.28em]">
          <span>Companies</span>
          <span className="opacity-40">·</span>
          <span>Analytics</span>
          <span className="opacity-40">·</span>
          <span>Sources</span>
          <span className="opacity-40">·</span>
          <span>Authenticated</span>
        </footer>
      </div>
    </div>
  );
}
