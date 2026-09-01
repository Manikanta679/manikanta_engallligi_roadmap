import Link from "next/link";
import type { Company } from "@/types/company";
import { logoUrl } from "@/lib/utils";

const tierColor = {
  1: "var(--tier1)",
  2: "var(--tier2)",
  3: "var(--tier3)",
} as const;

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/companies/${company.tier}/${company.slug}`}
      className="group block border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
    >
      <div className="flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl(company.domain)}
          alt=""
          className="mt-0.5 h-10 w-10 rounded-sm bg-[var(--surface-muted)] object-contain p-1"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate font-[family-name:var(--font-display)] text-xl leading-tight group-hover:text-[var(--accent)]">
              {company.name}
            </h3>
            <span
              className="rounded-sm px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em]"
              style={{
                color: tierColor[company.tier],
                background: "var(--accent-soft)",
              }}
            >
              Tier {company.tier}
            </span>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
            {company.sector}
          </p>
          <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
            {company.brief}
          </p>
          <p className="mt-3 text-xs text-[var(--accent)]">
            HQ: {company.headquartersHighlight}
          </p>
        </div>
      </div>
    </Link>
  );
}
