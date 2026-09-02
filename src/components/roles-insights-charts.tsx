"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { roleDemandScores, sectorFitScores } from "@/data/roles";

const tooltipStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  color: "var(--foreground)",
};

export function RolesInsightsCharts() {
  return (
    <div className="space-y-6">
      <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl">
          Sector fit for my path
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Fit score (0–100%): how well each priority sector matches the work
          mode I locked — data, presentation, and decisions.
        </p>
        <div className="mt-5 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sectorFitScores}
              layout="vertical"
              margin={{ left: 8, right: 24, top: 8, bottom: 8 }}
            >
              <CartesianGrid stroke="var(--border)" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                unit="%"
                tick={{ fill: "var(--muted)", fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="sector"
                width={88}
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value) => [`${value}%`, "Fit"]}
              />
              <Bar dataKey="fit" name="Fit %" fill="var(--accent)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Target companies by sector
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sectorFitScores.map((row) => (
              <div key={row.sector} className="text-sm">
                <span className="text-[var(--accent)]">{row.sector}</span>
                <span className="text-[var(--muted)]"> · {row.companies}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl">
          Role demand outlook · 2027 vs 2029
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
          Demand index is a 0–100 score I assigned from market research (hiring
          intensity and growth signals — not a literal % of job ads). Wage lift
          is the expected premium percentage versus a baseline analyst path.
        </p>
        <div className="mt-5 h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={roleDemandScores}
              margin={{ left: 0, right: 8, top: 8, bottom: 48 }}
            >
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="role"
                interval={0}
                angle={-28}
                textAnchor="end"
                height={60}
                tick={{ fill: "var(--muted)", fontSize: 10 }}
              />
              <YAxis domain={[0, 100]} tick={{ fill: "var(--muted)", fontSize: 11 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar
                dataKey="demand2027"
                name="2027 demand index (0–100)"
                fill="#7a9eb8"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="demand2029"
                name="2029 demand index (0–100)"
                fill="var(--accent)"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="wageLift"
                name="Wage lift %"
                fill="#6b8f71"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function parseFitPercent(fit: string): number {
  const match = fit.match(/(\d+)/);
  if (match) return Number(match[1]);
  const lower = fit.toLowerCase();
  if (lower.includes("north") || lower.includes("high")) return 85;
  if (lower.includes("rising")) return 72;
  return 55;
}

export function RoleSectorFitPanel({
  rows,
}: {
  rows: { sector: string; fit: string; companies: string }[];
}) {
  const chartData = rows.map((row) => ({
    sector: row.sector.split("·")[0].trim().split("/")[0].trim().slice(0, 18),
    fit: parseFitPercent(row.fit),
    companies: row.companies,
  }));

  return (
    <div className="space-y-5">
      <div className="h-56 w-full sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ left: 4, right: 28, top: 4, bottom: 4 }}
          >
            <CartesianGrid stroke="var(--border)" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              unit="%"
              tick={{ fill: "var(--muted)", fontSize: 11 }}
            />
            <YAxis
              type="category"
              dataKey="sector"
              width={100}
              tick={{ fill: "var(--foreground)", fontSize: 11 }}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value}%`, "Fit"]}
            />
            <Bar dataKey="fit" name="Fit %" fill="var(--accent)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="border-t border-[var(--border)] pt-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Companies
        </p>
        <ul className="mt-3 space-y-2">
          {rows.map((row) => (
            <li key={row.sector + row.companies} className="text-sm leading-relaxed">
              <span className="text-[var(--accent)]">
                {row.sector} · {parseFitPercent(row.fit)}%
              </span>
              <span className="text-[var(--muted)]"> — {row.companies}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
