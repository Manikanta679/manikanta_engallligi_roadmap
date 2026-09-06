"use client";

import { useMemo, useState } from "react";
import type { Company } from "@/types/company";
import { CompanyCard } from "@/components/company-card";

export function CompaniesFilter({ companies }: { companies: Company[] }) {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState("all");

  const sectors = useMemo(
    () =>
      Array.from(new Set(companies.map((c) => c.sector))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [companies],
  );

  const filtered = companies.filter((c) => {
    const hay =
      `${c.name} ${c.sector} ${c.headquarters} ${c.locations.join(" ")} ${c.brief}`.toLowerCase();
    const matchesQ = !q || hay.includes(q.toLowerCase());
    const matchesSector = sector === "all" || c.sector === sector;
    return matchesQ && matchesSector;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search company, sector, city…"
          className="flex-1 border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
        />
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
        >
          <option value="all">All sectors</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-[var(--muted)]">
        Showing {filtered.length} of {companies.length}
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
}
