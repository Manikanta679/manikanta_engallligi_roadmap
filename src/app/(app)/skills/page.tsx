import Link from "next/link";
import {
  crucialSkills,
  destinationSkills,
  importantSkills,
  screeningBusiness,
  screeningTech,
  skillTierGuide,
  skillsTimelinePhases,
} from "@/data/skills";
import { PhaseContinue } from "@/components/phase-continue";
import { SkillsInsightsCharts } from "@/components/skills-insights-charts";
import type { SkillItem } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 05 · Skills
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Skills I build for 2027–30
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          I grow technical and business skills together for Business Data
          Analyst entry, then Decision Scientist / Analytics Translator.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            How I tier skills
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillTierGuide.map((tier, index) => (
            <article
              key={tier.id}
              className={`border p-5 ${
                index === 0
                  ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                  : index === 3
                    ? "border-dashed border-[var(--border)] bg-[var(--background)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                {tier.action}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {tier.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{tier.meaning}</p>
            </article>
          ))}
        </div>
      </section>

      <SkillCluster
        title="Crucial skills"
        blurb="I need these before 2028 entry applications. Open any skill for technical and business depth."
        skills={crucialSkills}
      />

      <SkillCluster
        title="Important skills"
        blurb="I add these as differentiators through 2027–29."
        skills={importantSkills}
      />

      <SkillCluster
        title="Destination skills"
        blurb="I build these for 2029–30 after analyst proof."
        skills={destinationSkills}
      />

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            What companies screen for
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            Technical and business signals side by side — with charts below.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Technical
            </p>
            <ul className="mt-4 space-y-2">
              {screeningTech.map((row) => (
                <li
                  key={row.item}
                  className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {row.item}
                </li>
              ))}
            </ul>
          </article>
          <article className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Business
            </p>
            <ul className="mt-4 space-y-2">
              {screeningBusiness.map((row) => (
                <li
                  key={row.item}
                  className="border border-[var(--border)] bg-[var(--background)]/60 px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {row.item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Timeline · technical & business
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            What I build in each phase — both stacks. Open a phase for the
            checklist.
          </p>
        </div>
        <div className="space-y-2">
          {skillsTimelinePhases.map((phase) => (
            <details
              key={phase.id}
              className="group border border-[var(--border)] bg-[var(--surface)] open:border-[var(--accent)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {phase.when}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                    {phase.title}
                  </h3>
                </div>
                <span className="shrink-0 pt-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)] group-open:hidden">
                  Open →
                </span>
                <span className="hidden shrink-0 pt-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)] group-open:inline">
                  Close ↑
                </span>
              </summary>
              <div className="grid gap-4 border-t border-[var(--border)] px-5 pb-5 pt-4 md:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Technical
                  </p>
                  <ul className="mt-3 space-y-2">
                    {phase.tech.map((item) => (
                      <li
                        key={item}
                        className="border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Business
                  </p>
                  <ul className="mt-3 space-y-2">
                    {phase.business.map((item) => (
                      <li
                        key={item}
                        className="border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Skills view · charts
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            Screening weights, balance shift, and phase build load — technical
            and business together.
          </p>
        </div>
        <SkillsInsightsCharts />
      </section>

      <PhaseContinue current="/skills" />
    </div>
  );
}

function SkillCluster({
  title,
  blurb,
  skills,
}: {
  title: string;
  blurb: string;
  skills: SkillItem[];
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">{blurb}</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {skills.map((skill) => (
          <Link
            key={skill.id}
            href={`/skills/${skill.slug}`}
            className="border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {skill.tier}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
              {skill.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {skill.cardLine}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              Open detail →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
