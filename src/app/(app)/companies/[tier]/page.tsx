import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompaniesByTier, tierMeta } from "@/data/companies";
import type { Tier } from "@/types/company";
import { CompaniesFilter } from "@/components/companies-filter";

export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierRaw } = await params;
  const tierNum = Number(tierRaw) as Tier;
  if (![1, 2, 3].includes(tierNum)) notFound();

  const companies = getCompaniesByTier(tierNum);
  const meta = tierMeta[tierNum];

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/companies"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← All companies
        </Link>
        <h1
          className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em]"
          style={{ color: meta.accent }}
        >
          {meta.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
          {meta.subtitle}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          {companies.length} entries
        </p>
      </div>

      <CompaniesFilter companies={companies} />
    </div>
  );
}
