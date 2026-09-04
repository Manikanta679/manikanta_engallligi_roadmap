"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  screeningBusiness,
  screeningTech,
  skillsBalanceTimeline,
} from "@/data/skills";

const tooltipStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  color: "var(--foreground)",
};

export function SkillsInsightsCharts() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
          <h3 className="font-[family-name:var(--font-display)] text-xl">
            Screening weight · Technical
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Relative weight (0–100) of technical signals recruiters check for
            my target roles.
          </p>
          <div className="mt-5 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={screeningTech}
                layout="vertical"
                margin={{ left: 4, right: 16, top: 4, bottom: 4 }}
              >
                <CartesianGrid stroke="var(--border)" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "var(--muted)", fontSize: 11 }}
                />
                <YAxis
                  type="category"
                  dataKey="item"
                  width={150}
                  tick={{ fill: "var(--foreground)", fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(v) => [`${v}`, "Weight"]}
                />
                <Bar dataKey="weight" fill="#7a9eb8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
          <h3 className="font-[family-name:var(--font-display)] text-xl">
            Screening weight · Business
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Relative weight (0–100) of business and communication signals on
            the same hiring screen.
          </p>
          <div className="mt-5 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={screeningBusiness}
                layout="vertical"
                margin={{ left: 4, right: 16, top: 4, bottom: 4 }}
              >
                <CartesianGrid stroke="var(--border)" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "var(--muted)", fontSize: 11 }}
                />
                <YAxis
                  type="category"
                  dataKey="item"
                  width={150}
                  tick={{ fill: "var(--foreground)", fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(v) => [`${v}`, "Weight"]}
                />
                <Bar dataKey="weight" fill="var(--accent)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl">
          Tech ↔ business balance over time
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Effort shift across phases: more technical while closing entry gaps,
          then more business weight toward Decision Scientist / Analytics
          Translator.
        </p>
        <div className="mt-5 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={skillsBalanceTimeline}
              margin={{ left: 0, right: 8, top: 8, bottom: 8 }}
            >
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="phase"
                tick={{ fill: "var(--muted)", fontSize: 11 }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "var(--muted)", fontSize: 11 }}
                unit="%"
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Area
                type="monotone"
                dataKey="technical"
                name="Technical %"
                stroke="#7a9eb8"
                fill="#7a9eb8"
                fillOpacity={0.25}
              />
              <Area
                type="monotone"
                dataKey="business"
                name="Business %"
                stroke="var(--accent)"
                fill="var(--accent)"
                fillOpacity={0.25}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
