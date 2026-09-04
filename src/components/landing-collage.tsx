"use client";

type Tone = "gold" | "steel" | "sage" | "sand" | "slate";

type Tile = {
  title: string;
  className: string;
  delay: string;
  tone: Tone;
};

const toneStyles: Record<
  Tone,
  { border: string; glow: string; title: string; wash: string }
> = {
  gold: {
    border: "border-[#c4a574]/50",
    glow: "shadow-[0_0_22px_rgba(196,165,116,0.2)]",
    title: "text-[#c4a574]",
    wash: "bg-[radial-gradient(circle_at_30%_20%,rgba(196,165,116,0.26),transparent_58%)]",
  },
  steel: {
    border: "border-[#7a9eb8]/50",
    glow: "shadow-[0_0_22px_rgba(122,158,184,0.2)]",
    title: "text-[#7a9eb8]",
    wash: "bg-[radial-gradient(circle_at_30%_20%,rgba(122,158,184,0.26),transparent_58%)]",
  },
  sage: {
    border: "border-[#6b8f71]/50",
    glow: "shadow-[0_0_22px_rgba(107,143,113,0.2)]",
    title: "text-[#6b8f71]",
    wash: "bg-[radial-gradient(circle_at_30%_20%,rgba(107,143,113,0.26),transparent_58%)]",
  },
  sand: {
    border: "border-[#d4a574]/45",
    glow: "shadow-[0_0_20px_rgba(212,165,116,0.16)]",
    title: "text-[#d4a574]",
    wash: "bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.2),transparent_58%)]",
  },
  slate: {
    border: "border-[#9aa8b8]/45",
    glow: "shadow-[0_0_18px_rgba(154,168,184,0.14)]",
    title: "text-[#a8b4c4]",
    wash: "bg-[radial-gradient(circle_at_30%_20%,rgba(154,168,184,0.18),transparent_58%)]",
  },
};

/** Name-only floating labels around the hero */
const tiles: Tile[] = [
  {
    title: "Market",
    className:
      "left-[5%] top-[12%] h-16 w-16 float-slow sm:left-[7%] sm:h-[4.5rem] sm:w-[4.5rem]",
    delay: "0s",
    tone: "steel",
  },
  {
    title: "Sectors",
    className:
      "right-[5%] top-[11%] h-[4.25rem] w-[4.25rem] float-mid sm:right-[8%]",
    delay: "0.35s",
    tone: "gold",
  },
  {
    title: "SQL",
    className:
      "left-[12%] top-[40%] h-14 w-14 float-fast sm:left-[15%] sm:h-16 sm:w-16",
    delay: "0.7s",
    tone: "sage",
  },
  {
    title: "Roles",
    className: "right-[9%] top-[38%] h-14 w-14 float-slow sm:right-[13%] sm:h-16 sm:w-16",
    delay: "0.2s",
    tone: "sand",
  },
  {
    title: "Problems",
    className:
      "left-[4%] bottom-[24%] h-[4.25rem] w-[4.25rem] float-mid sm:left-[8%]",
    delay: "0.9s",
    tone: "gold",
  },
  {
    title: "Skills",
    className:
      "right-[5%] bottom-[22%] h-16 w-16 float-fast sm:right-[8%] sm:h-[4.5rem] sm:w-[4.5rem]",
    delay: "1.1s",
    tone: "steel",
  },
  {
    title: "SAP",
    className: "left-[30%] top-[9%] hidden h-14 w-14 float-mid md:block",
    delay: "0.5s",
    tone: "sand",
  },
  {
    title: "Python",
    className: "right-[30%] top-[8%] hidden h-14 w-14 float-slow lg:block",
    delay: "1.3s",
    tone: "sage",
  },
  {
    title: "Leipzig",
    className: "left-[24%] bottom-[11%] hidden h-14 w-14 float-fast md:block",
    delay: "0.4s",
    tone: "steel",
  },
  {
    title: "Berlin",
    className: "right-[24%] bottom-[10%] hidden h-14 w-14 float-mid md:block",
    delay: "1.5s",
    tone: "gold",
  },
  {
    title: "BMW",
    className: "left-[44%] top-[7%] hidden h-12 w-12 float-slow xl:block",
    delay: "0.8s",
    tone: "slate",
  },
  {
    title: "DHL",
    className: "right-[42%] bottom-[7%] hidden h-12 w-12 float-fast xl:block",
    delay: "1.2s",
    tone: "sand",
  },
  {
    title: "Frankfurt",
    className: "left-[2%] top-[58%] hidden h-12 w-[4.75rem] float-mid lg:block",
    delay: "1.6s",
    tone: "steel",
  },
  {
    title: "Munich",
    className: "right-[2%] top-[58%] hidden h-12 w-14 float-slow lg:block",
    delay: "0.6s",
    tone: "sage",
  },
];

export function LandingCollage({
  density = "full",
}: {
  density?: "full" | "soft";
}) {
  const visible =
    density === "soft"
      ? tiles.filter(
          (t, i) =>
            i % 2 === 0 ||
            ["Sectors", "Skills", "SQL", "Berlin"].includes(t.title),
        )
      : tiles;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft readability veil — keep light so skyline stays visible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.25)_0%,transparent_62%)]" />

      {visible.map((tile) => {
        const t = toneStyles[tile.tone];
        return (
          <div
            key={tile.title}
            className={`absolute overflow-hidden border bg-[var(--surface)]/80 backdrop-blur-[2px] ${t.border} ${t.glow} ${tile.className} ${
              density === "soft" ? "opacity-65" : ""
            }`}
            style={{ animationDelay: tile.delay }}
          >
            <div className={`absolute inset-0 ${t.wash}`} />
            <div className="relative flex h-full items-center justify-center px-2">
              <p
                className={`font-[family-name:var(--font-display)] text-center text-sm leading-none tracking-wide sm:text-base ${t.title}`}
              >
                {tile.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
