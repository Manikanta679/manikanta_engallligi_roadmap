"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { allCompanies } from "@/data/companies";
import { PhaseContinue } from "@/components/phase-continue";

const COLORS = ["#c4a574", "#6b8f71", "#7a9eb8", "#a67c52", "#5c7a8a", "#8b6914"];

export default function AnalyticsPage() {
  const [view, setView] = useState<"tiers" | "sectors" | "skills" | "locations">(
    "tiers",
  );

  const tierData = useMemo(
    () =>
      [1, 2, 3].map((tier) => ({
        name: `Tier ${tier}`,
        count: allCompanies.filter((c) => c.tier === tier).length,
      })),
    [],
  );

  const sectorData = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of allCompanies) {
      const key = simplifySector(c.sector);
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
  }, []);

  const skillsData = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of allCompanies) {
      for (const skill of c.skillsNeeded) {
        const key = skill.split("(")[0].trim();
        map.set(key, (map.get(key) ?? 0) + 1);
      }
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
  }, []);

  const locationData = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of allCompanies) {
      for (const loc of c.locations) {
        const key = normalizeLocation(loc);
        map.set(key, (map.get(key) ?? 0) + 1);
      }
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
  }, []);

  const chartData =
    view === "tiers"
      ? tierData
      : view === "sectors"
        ? sectorData
        : view === "skills"
          ? skillsData
          : locationData;

  return (
    <div className="space-y-8">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Analytics studio
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Graphs from my dataset
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Compare tiers, sectors, recurring skills, and location density across
          the companies currently tracked. Expand the data files to enrich these
          charts over time.
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["tiers", "Tiers"],
            ["sectors", "Sectors"],
            ["skills", "Skills"],
            ["locations", "Locations"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setView(id)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
              view === id
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-4">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl">
            Bar comparison
          </h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ left: 8, right: 8, bottom: 40 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "var(--muted)", fontSize: 11 }}
                  interval={0}
                  angle={-25}
                  textAnchor="end"
                  height={70}
                />
                <YAxis tick={{ fill: "var(--muted)", fontSize: 11 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                />
                <Bar dataKey="count" radius={[2, 2, 0, 0]}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)] p-4">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl">
            Distribution
          </h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="font-[family-name:var(--font-display)] text-xl">
          Snapshot table
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2">Count</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((row) => (
                <tr key={row.name} className="border-b border-[var(--border)]/60">
                  <td className="py-2.5 pr-4">{row.name}</td>
                  <td className="py-2.5 text-[var(--accent)]">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PhaseContinue current="/analytics" />
    </div>
  );
}

function simplifySector(sector: string): string {
  const s = sector.toLowerCase();
  if (s.includes("ai")) return "AI";
  if (s.includes("software") || s.includes("saas")) return "Software";
  if (s.includes("consult")) return "Consulting";
  if (s.includes("it service") || s.includes("it services")) return "IT Services";
  if (s.includes("logistic") || s.includes("freight")) return "Logistics";
  if (s.includes("retail") || s.includes("e-commerce") || s.includes("food"))
    return "Retail / E-com";
  if (s.includes("bank") || s.includes("fintech")) return "Banking / FinTech";
  if (s.includes("insurance") || s.includes("insurtech")) return "Insurance";
  if (s.includes("auto") || s.includes("mobility")) return "Automotive";
  if (s.includes("energy") || s.includes("greentech")) return "Energy";
  if (s.includes("pharma") || s.includes("health") || s.includes("biotech") || s.includes("medtech"))
    return "Health / Pharma";
  if (s.includes("industrial") || s.includes("robot")) return "Industrial";
  return "Other";
}

function normalizeLocation(loc: string): string {
  const l = loc.toLowerCase();
  if (l.includes("berlin")) return "Berlin";
  if (l.includes("munich") || l.includes("münchen")) return "Munich";
  if (l.includes("leipzig")) return "Leipzig";
  if (l.includes("frankfurt")) return "Frankfurt";
  if (l.includes("hamburg")) return "Hamburg";
  if (l.includes("paris")) return "Paris";
  if (l.includes("zurich") || l.includes("zürich")) return "Zurich";
  if (l.includes("amsterdam")) return "Amsterdam";
  if (l.includes("stockholm")) return "Stockholm";
  if (l.includes("copenhagen")) return "Copenhagen";
  if (l.includes("stuttgart")) return "Stuttgart";
  if (l.includes("dresden")) return "Dresden";
  if (l.includes("netherlands") || l.includes("nl")) return "Netherlands";
  if (l.includes("france") || l.includes("fr")) return "France";
  if (l.includes("spain") || l.includes("es")) return "Spain";
  if (l.includes("germany") || l.includes("de")) return "Germany (other)";
  return loc.length > 18 ? `${loc.slice(0, 16)}…` : loc;
}
