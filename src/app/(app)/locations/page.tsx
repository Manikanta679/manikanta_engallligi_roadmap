import Link from "next/link";
import { allCompanies, tierMeta } from "@/data/companies";
import { CompanyCard } from "@/components/company-card";
import { PhaseContinue } from "@/components/phase-continue";
import {
  companyMatchesCity,
  hubResources,
  locationLane,
  newsResources,
  priorityCities,
} from "@/data/priorityHubs";

export default function LocationsPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Target Location · Semester 3
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          {locationLane.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {locationLane.body}
        </p>
      </section>

      {priorityCities.map((hub) => {
        const companies = allCompanies
          .filter((company) => companyMatchesCity(company, hub))
          .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
        const byTier = ([1, 2, 3] as const).map((tier) => ({
          tier,
          list: companies.filter((company) => company.tier === tier),
        }));

        return (
          <section
            key={hub.city}
            className="space-y-4 border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                {hub.region} · {hub.priorityLabel}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
                {hub.city}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {hub.whenForMe}
              </p>
            </div>

            <dl className="grid gap-3 md:grid-cols-2 text-sm">
              <div>
                <dt className="text-[var(--foreground)]">Why this city</dt>
                <dd className="mt-1 text-[var(--muted)]">{hub.sells}</dd>
              </div>
              <div>
                <dt className="text-[var(--foreground)]">Problems they pay for</dt>
                <dd className="mt-1 text-[var(--muted)]">{hub.problems}</dd>
              </div>
              <div>
                <dt className="text-[var(--foreground)]">Roles I target</dt>
                <dd className="mt-1 text-[var(--muted)]">{hub.roles}</dd>
              </div>
              <div>
                <dt className="text-[var(--foreground)]">Companies I track here</dt>
                <dd className="mt-1 text-[var(--muted)]">
                  {companies.length} in the map
                  {companies.length === 0 ? ` · watch list: ${hub.companies}` : ""}
                </dd>
              </div>
            </dl>

            {byTier.map(({ tier, list }) =>
              list.length ? (
                <div key={tier} className="space-y-3">
                  <p
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: tierMeta[tier].accent }}
                  >
                    Tier {tier}
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {list.map((company) => (
                      <CompanyCard key={company.id} company={company} />
                    ))}
                  </div>
                </div>
              ) : null,
            )}

            {!companies.length ? (
              <p className="text-sm text-[var(--muted)]">
                No company card is tagged to this city yet. Names I still
                research: {hub.companies}
              </p>
            ) : null}
          </section>
        );
      })}

      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Verified sources for this phase
        </h2>
        <div className="space-y-3">
          {[...hubResources, ...newsResources].map((resource, index) => (
            <article
              key={resource.url}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Source {index + 1}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                    {resource.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Use for me: {resource.useFor}
                  </p>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
                >
                  Open ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="text-sm text-[var(--muted)]">
        Open a company for the full brief.{" "}
        <Link href="/companies" className="text-[var(--accent)] hover:underline">
          All companies by tier →
        </Link>
      </p>

      <PhaseContinue current="/locations" />
    </div>
  );
}
