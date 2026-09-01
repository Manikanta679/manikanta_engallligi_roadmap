import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompanyByTierAndSlug } from "@/data/companies";
import type { Tier } from "@/types/company";
import { logoUrl } from "@/lib/utils";

const questions: { key: keyof QuestionMap; title: string }[] = [
  { key: "sells", title: "What does the company/industry actually sell?" },
  { key: "customers", title: "Who are the customers?" },
  { key: "monetization", title: "How does it make money?" },
  { key: "problems", title: "What are its biggest business problems?" },
  {
    key: "aiValue",
    title: "Where can Data, AI or automation create value?",
  },
  { key: "rolesHiring", title: "Which Data/AI roles are companies hiring?" },
  { key: "skillsNeeded", title: "Which skills repeatedly appear?" },
  {
    key: "enjoymentFit",
    title: "Would I actually enjoy solving these problems?",
  },
];

type QuestionMap = {
  sells: string;
  customers: string;
  monetization: string;
  problems: string;
  aiValue: string;
  rolesHiring: string[];
  skillsNeeded: string[];
  enjoymentFit: string;
};

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ tier: string; slug: string }>;
}) {
  const { tier: tierRaw, slug } = await params;
  const tierNum = Number(tierRaw) as Tier;
  if (![1, 2, 3].includes(tierNum)) notFound();

  const company = getCompanyByTierAndSlug(tierNum, slug);
  if (!company) notFound();

  return (
    <div className="space-y-10">
      <div>
        <Link
          href={`/companies/${company.tier}`}
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← Tier {company.tier}
        </Link>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl(company.domain)}
                alt=""
                className="h-16 w-16 rounded-sm border border-[var(--border)] bg-[var(--surface)] object-contain p-2"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Tier {company.tier} · {company.sector}
                </p>
                <h1 className="mt-1 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
                  {company.name}
                </h1>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
              {company.brief}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
              >
                Official website ↗
              </a>
              {company.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="w-full max-w-sm border border-[var(--accent)] bg-[var(--accent-soft)] p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              Headquarters · highlighted
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-snug">
              {company.headquarters}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {company.headquartersHighlight}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <Row label="Locations" value={company.locations.join(" · ")} />
              {company.revenue ? (
                <Row label="Revenue / scale" value={company.revenue} />
              ) : null}
              {company.valuation ? (
                <Row label="Valuation / funding" value={company.valuation} />
              ) : null}
              {company.employees ? (
                <Row label="Employees" value={company.employees} />
              ) : null}
            </div>
          </aside>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-56 overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-[var(--surface-muted)]" />
          <div className="relative flex h-full min-h-56 flex-col justify-between p-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Visual anchor
            </p>
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl capitalize">
                {company.imageHint}
              </p>
              <p className="mt-2 max-w-md text-sm text-[var(--muted)]">
                Europe focus: {company.europeFocus}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Where they invest
          </p>
          <p className="mt-3 text-sm leading-relaxed">{company.investments}</p>
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.03em]">
          Decision brief — 8 questions
        </h2>
        <div className="mt-5 space-y-3">
          {questions.map((q, index) => {
            const raw = company[q.key];
            const content = Array.isArray(raw) ? raw.join(" · ") : raw;
            return (
              <article
                key={q.key}
                className="border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Q{index + 1}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                  {q.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {content}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Next 2–3 years strategy
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
          Source-oriented outlook
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {company.strategy2to3Years}
        </p>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Always re-verify against IR decks, annual reports, Dealroom/Crunchbase,
          and the company site before making application decisions.
        </p>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Sources for this company
        </h2>
        <ul className="mt-4 space-y-2">
          {company.sources.map((s) => (
            <li
              key={s.url + s.title}
              className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
            >
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--accent)] hover:underline"
              >
                {s.title} ↗
              </a>
              {s.note ? (
                <p className="mt-1 text-xs text-[var(--muted)]">{s.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-0.5 text-sm">{value}</p>
    </div>
  );
}
