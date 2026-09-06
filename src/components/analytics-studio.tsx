"use client";

import { useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { allCompanies } from "@/data/companies";
import {
  analyticsKpis,
  problemCoverage,
  problemRadar,
  projectSectorLoad,
  roleMix,
  salaryPath,
  salaryVsDemand,
  sectorMarketWeight,
} from "@/data/analytics";
import { projectProblemGuide } from "@/data/projects";
import { roleDemandScores } from "@/data/roles";
import { screeningBusiness, screeningTech } from "@/data/skills";

const COLORS = ["#e09a45", "#9aa097", "#7ba7c4", "#c47a28", "#6d5a78", "#eceae4"];
const AMBER = "#e09a45";
const STEEL = "#7ba7c4";

const tooltipStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  color: "var(--foreground)",
};

type View =
  | "overview"
  | "salary"
  | "sectors"
  | "problems"
  | "roles"
  | "companies";

export function AnalyticsStudio() {
  const [view, setView] = useState<View>("overview");

  return (
    <div className="space-y-8">
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {analyticsKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              {kpi.label}
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["overview", "Overview"],
            ["salary", "Salary"],
            ["sectors", "Sectors"],
            ["problems", "Problems"],
            ["roles", "Roles"],
            ["companies", "Companies"],
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

      {view === "overview" ? <OverviewPanel /> : null}
      {view === "salary" ? <SalaryPanel /> : null}
      {view === "sectors" ? <SectorsPanel /> : null}
      {view === "problems" ? <ProblemsPanel /> : null}
      {view === "roles" ? <RolesPanel /> : null}
      {view === "companies" ? <CompaniesPanel /> : null}
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Salary · entry vs later"
          blurb="Midpoints from role research (k EUR). Entry is the first hire band; later is the 3–5 year / destination band."
        >
          <GroupedSalaryChart compact />
        </ChartCard>
        <ChartCard
          title="Sector market weight"
          blurb="Hiring and path-fit weight (0–100) for the six priority sectors."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sectorMarketWeight}
              layout="vertical"
              margin={{ left: 4, right: 16, top: 4, bottom: 4 }}
            >
              <CartesianGrid stroke="var(--border)" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={tick} />
              <YAxis
                type="category"
                dataKey="label"
                width={128}
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="weight" name="Market weight" fill={AMBER} radius={[0, 4, 4, 0]} />
              <Bar dataKey="fit" name="Path fit" fill={STEEL} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Problems A–F · project coverage"
          blurb="Share of the catalogue that proves each problem."
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={problemRadar} cx="50%" cy="50%" outerRadius="72%">
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="problem"
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
              />
              <PolarRadiusAxis
                domain={[0, 80]}
                tick={{ fill: "var(--muted)", fontSize: 10 }}
              />
              <Radar
                name="Coverage %"
                dataKey="coverage"
                stroke={AMBER}
                fill={AMBER}
                fillOpacity={0.35}
              />
              <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Role demand · 2027 vs 2029"
          blurb="Demand index from role research — not a job-ad percentage."
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={roleDemandScores} margin={{ left: 0, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="role" tick={{ fill: "var(--muted)", fontSize: 10 }} interval={0} angle={-22} height={56} textAnchor="end" />
              <YAxis domain={[0, 100]} tick={tick} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Area type="monotone" dataKey="demand2027" name="2027" stroke={STEEL} fill={STEEL} fillOpacity={0.22} />
              <Area type="monotone" dataKey="demand2029" name="2029" stroke={AMBER} fill={AMBER} fillOpacity={0.22} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function SalaryPanel() {
  return (
    <div className="space-y-6">
      <ChartCard
        title="Salary path · entry vs later"
        blurb="Grouped comparison: first hire band versus later / destination band. Values are research midpoints in thousand EUR."
        tall
      >
        <GroupedSalaryChart />
      </ChartCard>
      <ChartCard
        title="Salary vs wage-premium signal"
        blurb="Later salary (bars) against the wage-lift % from role research (line)."
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={salaryVsDemand} margin={{ left: 0, right: 8, bottom: 48 }}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis dataKey="role" interval={0} angle={-28} textAnchor="end" height={60} tick={{ fill: "var(--muted)", fontSize: 10 }} />
            <YAxis yAxisId="left" tick={tick} unit="k" />
            <YAxis yAxisId="right" orientation="right" tick={tick} unit="%" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend />
            <Bar yAxisId="left" dataKey="later" name="Later €k" fill={AMBER} radius={[3, 3, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="wageLift" name="Wage lift %" stroke={STEEL} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function SectorsPanel() {
  return (
    <div className="space-y-6">
      <ChartCard
        title="Market weight vs path fit"
        blurb="Weight is how strong the sector is for 2027–29 hiring. Fit is how well it matches the locked work mode."
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sectorMarketWeight} margin={{ left: 8, right: 8, bottom: 16 }}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: "var(--muted)", fontSize: 11 }} interval={0} />
            <YAxis domain={[0, 100]} tick={tick} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend />
            <Bar dataKey="weight" name="Market weight" fill={AMBER} radius={[3, 3, 0, 0]} />
            <Bar dataKey="fit" name="Path fit" fill={STEEL} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Companies vs projects by sector"
          blurb="Coverage in the company map versus the project catalogue."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sectorMarketWeight} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={tick} allowDecimals={false} />
              <YAxis type="category" dataKey="label" width={128} tick={{ fill: "var(--foreground)", fontSize: 11 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar dataKey="companies" name="Companies" fill={AMBER} radius={[0, 4, 4, 0]} />
              <Bar dataKey="projects" name="Projects" fill={STEEL} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Project load · List 1 vs List 2"
          blurb="How the two catalogues sit by sector — lines make the gap easier to read than a stack."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectSectorLoad} margin={{ left: 0, right: 8, bottom: 12, top: 8 }}>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="sector" tick={{ fill: "var(--muted)", fontSize: 11 }} />
              <YAxis tick={tick} allowDecimals={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Line type="monotone" dataKey="list1" name="List 1" stroke={AMBER} strokeWidth={2.5} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="list2" name="List 2" stroke={STEEL} strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function ProblemsPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Projects per problem"
          blurb="How many catalogue items prove each gap."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={problemCoverage} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={tick} allowDecimals={false} />
              <YAxis type="category" dataKey="label" width={148} tick={{ fill: "var(--foreground)", fontSize: 11 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="projects" name="Projects" fill={AMBER} radius={[0, 4, 4, 0]}>
                {problemCoverage.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Coverage radar"
          blurb="Share of all projects tagged to each problem."
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={problemRadar} cx="50%" cy="50%" outerRadius="72%">
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="problem" tick={{ fill: "var(--foreground)", fontSize: 12 }} />
              <PolarRadiusAxis domain={[0, 80]} tick={{ fill: "var(--muted)", fontSize: 10 }} />
              <Radar dataKey="coverage" name="Coverage %" stroke={AMBER} fill={AMBER} fillOpacity={0.35} />
              <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {projectProblemGuide.map((row) => (
          <p
            key={row.code}
            className="border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Problem {row.code}
            </span>
            <span className="mt-1 block">{row.title}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function RolesPanel() {
  const mixNamed = roleMix.map((row) => ({
    ...row,
    label: row.role
      .replace("Analytics Engineer (hybrid)", "Hybrid AE")
      .replace("Process Intelligence / Celonis Consultant", "Celonis / PI")
      .replace("AI Business Analyst / Product Analyst", "AI Bus. Analyst")
      .replace("AI & Digital Consultant", "AI Dig. Consult")
      .replace("Business Data Analyst", "Business DA")
      .replace("Decision Scientist", "Decision Sci")
      .replace("Analytics Translator", "Translator")
      .replace("BI Analyst", "BI Analyst"),
  }));

  return (
    <div className="space-y-6">
      <ChartCard
        title="Demand shift · 2027 to 2029"
        blurb="Lines show how each role’s demand index moves — not a job-ad percentage."
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={roleDemandScores} margin={{ left: 0, right: 8, bottom: 48, top: 8 }}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis dataKey="role" interval={0} angle={-28} textAnchor="end" height={60} tick={{ fill: "var(--muted)", fontSize: 10 }} />
            <YAxis domain={[50, 100]} tick={tick} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend />
            <Line type="monotone" dataKey="demand2027" name="2027" stroke={STEEL} strokeWidth={2.5} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="demand2029" name="2029" stroke={AMBER} strokeWidth={2.5} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <ChartCard
        title="Technical vs business mix"
        blurb="Work-mode split for each named role — not letter codes."
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mixNamed} layout="vertical" margin={{ left: 8, right: 16, top: 4, bottom: 4 }}>
            <CartesianGrid stroke="var(--border)" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={tick} unit="%" />
            <YAxis type="category" dataKey="label" width={118} tick={{ fill: "var(--foreground)", fontSize: 11 }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend />
            <Bar dataKey="technical" name="Technical %" fill={STEEL} radius={[0, 4, 4, 0]} />
            <Bar dataKey="business" name="Business %" fill={AMBER} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function CompaniesPanel() {
  const tierData = [1, 2, 3].map((tier) => ({
    name: `Tier ${tier}`,
    count: allCompanies.filter((c) => c.tier === tier).length,
  }));

  const locationData = (() => {
    const map = new Map<string, number>();
    for (const c of allCompanies) {
      for (const loc of c.locations) {
        const key = normalizeLocation(loc);
        map.set(key, (map.get(key) ?? 0) + 1);
      }
    }
    const all = Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
    const pinned = new Set([
      "Amsterdam",
      "Rotterdam",
      "Heidelberg / Walldorf",
      "Karlsruhe",
    ]);
    const rest = all.filter((row) => !pinned.has(row.name)).slice(0, 8);
    const extras = all.filter((row) => pinned.has(row.name) && row.count > 0);
    return [...rest, ...extras.filter((row) => !rest.some((r) => r.name === row.name))].sort(
      (a, b) => b.count - a.count,
    );
  })();

  const screenRadar = screeningTech.map((tech, i) => ({
    item: tech.item.split(" / ")[0],
    technical: tech.weight,
    business: screeningBusiness[i]?.weight ?? 0,
  }));

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Tier mix" blurb="Share of the company map by tier.">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tierData}
                dataKey="count"
                nameKey="name"
                innerRadius={58}
                outerRadius={96}
                paddingAngle={3}
              >
                {tierData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Hub density" blurb="Most frequent locations in the company map — including Amsterdam / Rotterdam and Heidelberg / Walldorf / Karlsruhe.">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={locationData} margin={{ left: 0, right: 8, bottom: 28, top: 8 }}>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "var(--muted)", fontSize: 9 }} interval={0} angle={-28} textAnchor="end" height={56} />
              <YAxis tick={tick} allowDecimals={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="count" name="Mentions" stroke={STEEL} fill={STEEL} fillOpacity={0.28} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard
        title="Screening weights · one radar"
        blurb="Sits with the company map because firms screen tools and the decision — not tools alone."
        tall
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={screenRadar} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis dataKey="item" tick={{ fill: "var(--foreground)", fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={{ fill: "var(--muted)", fontSize: 10 }} />
            <Radar dataKey="technical" name="Technical" stroke={STEEL} fill={STEEL} fillOpacity={0.22} />
            <Radar dataKey="business" name="Business" stroke={AMBER} fill={AMBER} fillOpacity={0.22} />
            <Legend />
            <Tooltip contentStyle={tooltipStyle} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function GroupedSalaryChart({ compact = false }: { compact?: boolean }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={salaryPath}
        margin={{ left: 0, right: 8, bottom: compact ? 48 : 56, top: 8 }}
      >
        <CartesianGrid stroke="var(--border)" vertical={false} />
        <XAxis
          dataKey="role"
          interval={0}
          angle={-28}
          textAnchor="end"
          height={compact ? 56 : 64}
          tick={{ fill: "var(--muted)", fontSize: 10 }}
        />
        <YAxis tick={tick} unit="k" />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend />
        <Bar dataKey="entry" name="Entry €k" fill={STEEL} radius={[3, 3, 0, 0]} />
        <Bar dataKey="later" name="Later €k" fill={AMBER} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function ChartCard({
  title,
  blurb,
  children,
  tall,
}: {
  title: string;
  blurb: string;
  children: ReactNode;
  tall?: boolean;
}) {
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="font-[family-name:var(--font-display)] text-xl">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{blurb}</p>
      <div className={`mt-5 w-full ${tall ? "h-96" : "h-72"}`}>{children}</div>
    </div>
  );
}

const tick = { fill: "var(--muted)", fontSize: 11 };

function normalizeLocation(loc: string): string {
  const l = loc.toLowerCase();
  if (l.includes("berlin")) return "Berlin";
  if (l.includes("munich") || l.includes("münchen")) return "Munich";
  if (l.includes("leipzig")) return "Leipzig";
  if (l.includes("frankfurt")) return "Frankfurt";
  if (l.includes("hamburg")) return "Hamburg";
  if (l.includes("paris")) return "Paris";
  if (l.includes("zurich") || l.includes("zürich") || l.includes("zug") || l.includes("schindellegi"))
    return "Zurich / Zug";
  if (l.includes("düsseldorf") || l.includes("dusseldorf")) return "Düsseldorf";
  if (l.includes("cologne") || l.includes("köln") || l.includes("koln")) return "Cologne";
  if (l.includes("dortmund")) return "Dortmund";
  if (l.includes("essen") || l.includes("leverkusen")) return "Essen / Ruhr";
  if (l.includes("duisburg")) return "Duisburg";
  if (l.includes("bonn")) return "Bonn";
  if (l.includes("amsterdam") || l.includes("utrecht") || l.includes("zaandam")) return "Amsterdam";
  if (l.includes("rotterdam") || l.includes("dordrecht") || l.includes("ridderkerk") || l.includes("schiedam")) return "Rotterdam";
  if (l.includes("heidelberg") || l.includes("walldorf") || l.includes("mannheim") || l.includes("ludwigshafen")) return "Heidelberg / Walldorf";
  if (l.includes("karlsruhe") || l.includes("bruchsal")) return "Karlsruhe";
  if (l.includes("copenhagen")) return "Copenhagen";
  if (l.includes("stuttgart")) return "Stuttgart";
  return loc.length > 16 ? `${loc.slice(0, 14)}…` : loc;
}
