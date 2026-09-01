import Link from "next/link";
import { allCompanies, tierMeta } from "@/data/companies";
import { researchSources } from "@/data/sources";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  const tierCounts = [1, 2, 3].map((tier) => ({
    tier,
    count: allCompanies.filter((c) => c.tier === tier).length,
    ...tierMeta[tier as 1 | 2 | 3],
  }));

  const leipzigCount = allCompanies.filter((c) =>
    c.tags.includes("leipzig-local"),
  ).length;
  const aiCount = allCompanies.filter(
    (c) =>
      c.sector.toLowerCase().includes("ai") || c.tags.includes("ai-focus"),
  ).length;

  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Dashboard
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Welcome back{session?.user?.name ? `, ${session.user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Your private multi-year career operating system — companies by tier,
          source-backed briefs, strategy notes, and analytics for decisions.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Companies tracked" value={String(allCompanies.length)} />
        <Stat label="Research sources" value={String(researchSources.length)} />
        <Stat label="Leipzig-local ⭐" value={String(leipzigCount)} />
        <Stat label="AI-tagged entries" value={String(aiCount)} />
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.04em]">
          Explore by tier
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {tierCounts.map((t) => (
            <Link
              key={t.tier}
              href={`/companies/${t.tier}`}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
            >
              <p
                className="text-[10px] uppercase tracking-[0.22em]"
                style={{ color: t.accent }}
              >
                Tier {t.tier}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {t.count} companies
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{t.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/analytics"
          className="border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Visualizations
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Analytics studio
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Compare sectors, skills, locations, and tier mix from the company
            dataset.
          </p>
        </Link>
        <Link
          href="/sources"
          className="border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Verified research
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Source library
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Dealroom, appliedAI, Northdata, Unternehmensregister, SpinLab, and
            more — with what each unlocks.
          </p>
        </Link>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">
        {value}
      </p>
    </div>
  );
}
