import Link from "next/link";
import { allCompanies, tierMeta } from "@/data/companies";
import { researchSources } from "@/data/sources";
import { marketJobSources, marketTrendSources } from "@/data/market";
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
  const marketSourceCount =
    marketTrendSources.length + marketJobSources.length;

  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Dashboard
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Welcome back
          {session?.user?.name ? `, ${session.user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          My private multi-year career operating system — Market → Sector →
          Problems → Role → Skills → Project/Internship → Thesis → Job — with
          companies, sources, and analytics I can revisit anytime.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Companies tracked" value={String(allCompanies.length)} />
        <Stat label="Market sources" value={String(marketSourceCount)} />
        <Stat label="Company sources" value={String(researchSources.length)} />
        <Stat label="Leipzig-local ⭐" value={String(leipzigCount)} />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/market"
          className="border border-[var(--accent)] bg-[var(--accent-soft)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Step 01 · Done
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Market & Trends
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            WEF, Bitkom, GTAI, Stanford, job boards — written as my research
            notes with how each source helped me.
          </p>
        </Link>
        <Link
          href="/sectors"
          className="border border-[var(--accent)] bg-[var(--accent-soft)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Step 02 · Done
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Sectors
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            My six priority sectors with problems, Data/AI use-cases, roles,
            skills, hubs, and resources.
          </p>
        </Link>
        <Link
          href="/problems"
          className="border border-[var(--accent)] bg-[var(--accent-soft)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Step 03 · Done
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Business Problems
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Pilot-to-production, data quality, AI Act, agentic AI — and where I
            fit in 2027–28.
          </p>
        </Link>
        <Link
          href="/companies"
          className="border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Companies
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Tier 1–3 map
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            My company universe across giants, scale-ups, and startups.
          </p>
        </Link>
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

      <section>
        <Link
          href="/analytics"
          className="block border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Visualizations
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            Analytics studio
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            I compare sectors, skills, locations, and tier mix from the company
            dataset I maintain.
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
