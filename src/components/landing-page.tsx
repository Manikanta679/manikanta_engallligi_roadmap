"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";

export function LandingPage() {
  const { data: session } = useSession();
  const loginHref = session ? "/dashboard" : "/login";

  return (
    <div className="editorial-shell relative flex h-dvh flex-col overflow-hidden">
      <header className="relative z-20 flex shrink-0 items-center justify-end gap-6 px-6 py-4 sm:px-10">
        <Link
          href={loginHref}
          className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.14em] text-[var(--editorial-amber)] transition hover:text-[var(--editorial-ink)]"
        >
          {session ? "Dashboard" : "Login"}
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
