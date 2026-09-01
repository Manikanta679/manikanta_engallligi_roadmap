import Link from "next/link";
import { auth } from "@/lib/auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { LandingCollage } from "@/components/landing-collage";

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-[#f2ebe0]">
      <div className="pointer-events-none absolute inset-0 grid-noise" />
      <LandingCollage />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-5">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
            Private roadmap
          </p>
          <ThemeToggle />
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-8 text-center">
          <p className="fade-up text-[11px] uppercase tracking-[0.45em] text-white/55">
            Welcome to
          </p>
          <h1 className="name-sheen fade-up mt-4 max-w-5xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[0.08em] sm:text-7xl md:text-8xl">
            MANIKANTA
            <br />
            ENGALLIGI
          </h1>
          <p className="fade-up mt-6 max-w-xl text-sm leading-relaxed tracking-[0.08em] text-white/65 sm:text-base">
            Multi-year career universe — Tier 1 corporates, Tier 2 scale-ups,
            Tier 3 startups across Europe. Source-backed. Decision-ready.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={session ? "/dashboard" : "/login"}
              className="border border-[#c4a574] bg-[#c4a574]/10 px-8 py-3 text-xs uppercase tracking-[0.28em] text-[#c4a574] transition hover:bg-[#c4a574] hover:text-black"
            >
              {session ? "Enter dashboard" : "Secure login"}
            </Link>
            <Link
              href="/login"
              className="border border-white/20 px-8 py-3 text-xs uppercase tracking-[0.28em] text-white/70 transition hover:border-white/50 hover:text-white"
            >
              Access roadmap
            </Link>
          </div>
        </main>

        <footer className="relative z-10 flex flex-wrap items-center justify-center gap-6 px-4 pb-8 text-[10px] uppercase tracking-[0.28em] text-white/45">
          <span>Companies</span>
          <span className="text-white/20">·</span>
          <span>Analytics</span>
          <span className="text-white/20">·</span>
          <span>Sources</span>
          <span className="text-white/20">·</span>
          <span>Authenticated</span>
        </footer>
      </div>
    </div>
  );
}
