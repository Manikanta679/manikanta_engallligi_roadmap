import Link from "next/link";

const phaseFlow = [
  { href: "/market", label: "Market" },
  { href: "/sectors", label: "Sectors" },
  { href: "/problems", label: "Problems" },
  { href: "/roles", label: "Roles" },
  { href: "/companies", label: "Companies" },
  { href: "/analytics", label: "Analytics" },
  { href: "/sources", label: "Sources" },
] as const;

type PhaseHref = (typeof phaseFlow)[number]["href"];

export function PhaseContinue({ current }: { current: PhaseHref }) {
  const index = phaseFlow.findIndex((step) => step.href === current);
  if (index < 0) return null;

  const prev = index > 0 ? phaseFlow[index - 1] : null;
  const next = index < phaseFlow.length - 1 ? phaseFlow[index + 1] : null;

  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
        Continue
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link
            href={prev.href}
            className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          >
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
          >
            Next · {next.label} →
          </Link>
        ) : (
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            End of current map
          </span>
        )}
      </div>
    </section>
  );
}
