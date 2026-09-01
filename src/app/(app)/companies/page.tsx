import Link from "next/link";
import { allCompanies, tierMeta } from "@/data/companies";
import { CompanyCard } from "@/components/company-card";
import { PhaseContinue } from "@/components/phase-continue";

export default function CompaniesPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Companies
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Three tiers, one roadmap
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Browse separately by tier. Open any company for the 8 decision
          questions, HQ highlight, investments, and 2–3 year strategy notes.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        {([1, 2, 3] as const).map((tier) => (
          <Link
            key={tier}
            href={`/companies/${tier}`}
            className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-[var(--accent)]"
            style={{ color: tierMeta[tier].accent }}
          >
            Tier {tier} ·{" "}
            {allCompanies.filter((c) => c.tier === tier).length}
          </Link>
        ))}
      </div>

      {([1, 2, 3] as const).map((tier) => {
        const list = allCompanies.filter((c) => c.tier === tier);
        return (
          <section key={tier} id={`tier-${tier}`} className="space-y-4">
            <div className="flex items-end justify-between gap-4 border-b border-[var(--border)] pb-3">
              <div>
                <h2
                  className="font-[family-name:var(--font-display)] text-2xl"
                  style={{ color: tierMeta[tier].accent }}
                >
                  {tierMeta[tier].title}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {tierMeta[tier].subtitle}
                </p>
              </div>
              <Link
                href={`/companies/${tier}`}
                className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]"
              >
                Open tier →
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {list.slice(0, 4).map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </section>
        );
      })}

      <PhaseContinue current="/companies" />
    </div>
  );
}
