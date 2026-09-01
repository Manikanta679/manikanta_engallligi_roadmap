"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Building2,
  Library,
  ChartColumn,
  LogOut,
  TrendingUp,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/market", label: "Market", icon: TrendingUp },
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/analytics", label: "Analytics", icon: ChartColumn },
  { href: "/sources", label: "Sources", icon: Library },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data } = useSession();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/dashboard" className="min-w-0">
            <p className="font-[family-name:var(--font-display)] text-lg tracking-[0.18em] uppercase sm:text-xl">
              Manikanta Engalligi
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              Career Roadmap
            </p>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs uppercase tracking-[0.16em] transition",
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden max-w-[140px] truncate text-xs text-[var(--muted)] sm:inline">
              {data?.user?.email}
            </span>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-xs uppercase tracking-[0.14em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto border-t border-[var(--border)] px-2 py-2 md:hidden">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-[10px] uppercase tracking-[0.14em]",
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--muted)]",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
