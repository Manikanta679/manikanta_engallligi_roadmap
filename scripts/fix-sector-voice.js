const fs = require("fs");
const path = "src/data/sectorProfiles.ts";
let s = fs.readFileSync(path);
// decode as latin1 then fix common UTF-8 mojibake, or read buffer
// Try utf8 first; if invalid sequences, repair
try {
  s = s.toString("utf8");
} catch {
  s = s.toString("latin1");
}

// Remove invalid replacement / mojibake em dashes
s = s.replace(/â/g, " - ");
s = s.replace(/â€”/g, " - ");
s = s.replace(/\uFFFD/g, "-");
s = s.replace(/—/g, " - ");
s = s.replace(/–/g, "-");
s = s.replace(/CO₂/g, "CO2");

const reps = [
  [
    "Strong fit if you enjoy productized engineering, platform thinking, and measurable impact on enterprise workflows.",
    "I see a strong fit here when I want productized engineering, platform thinking, and measurable impact on enterprise workflows.",
  ],
  [
    "Ideal if you like large-scale systems, customer architectures, and applied AI on real infrastructure.",
    "This fits me when I want large-scale systems, customer architectures, and applied AI on real infrastructure.",
  ],
  [
    "Best fit if you want maximum ownership on AI problems and fast learning curves at scale-ups/startups.",
    "This fits me when I want maximum ownership on AI problems and a fast learning curve at scale-ups/startups.",
  ],
  [
    "Fit if you enjoy variety, client exposure, structured problem-solving, and fast skill breadth over deep product ownership.",
    "This fits me when I want variety, client exposure, structured problem-solving, and skill breadth over deep product ownership.",
  ],
  [
    "Good entry path for structured learning and visa-friendly hiring; enjoyment depends on project quality and AI exposure.",
    "This can be a structured entry path for me, including more visa-friendly hiring - my enjoyment depends on project quality and AI exposure.",
  ],
  [
    "Excellent if you like real-world optimization problems with clear KPI impact (cost, time, CO2).",
    "This works for me when I want real-world optimization problems with clear KPI impact (cost, time, CO2).",
  ],
  [
    "Strong if you like consumer-scale data problems and measurable conversion/ops outcomes.",
    "This fits me when I want consumer-scale data problems and measurable conversion/ops outcomes.",
  ],
  [
    "Fit if you enjoy high-stakes regulated ML problems and measurable risk/ops impact.",
    "This fits me when I want high-stakes regulated ML problems and measurable risk/ops impact.",
  ],
  [
    "Great if you like probabilistic modeling with real financial outcomes.",
    "This fits me when I want probabilistic modeling with real financial outcomes.",
  ],
  [
    "High if you want industrial AI + software meeting physical products.",
    "This is high-interest for me when I want industrial AI plus software meeting physical products.",
  ],
  [
    "Excellent for applied AI with tangible factory KPIs - strong Leipzig/Mittelstand angle.",
    "This is excellent for me for applied AI with tangible factory KPIs - strong Leipzig/Mittelstand angle.",
  ],
  [
    "Strong if climate + optimization problems motivate you.",
    "This fits me when climate and optimization problems motivate my work choices.",
  ],
  [
    "High impact if you care about science + rigorous validation culture.",
    "This is high-impact for me when I want science plus a rigorous validation culture.",
  ],
  [
    "Fit if you want AI with clinical stakes and careful evidence culture.",
    "This fits me when I want AI with clinical stakes and a careful evidence culture.",
  ],
  [
    "Great for high-velocity product + ML with clear financial KPIs.",
    "This is great for me when I want high-velocity product plus ML with clear financial KPIs.",
  ],
  [
    "Fit if large-scale network + AI ops problems appeal to you.",
    "This fits me when large-scale network plus AI ops problems appeal to me.",
  ],
  [
    "High if complex engineering systems and quality AI excite you.",
    "This is high-interest for me when complex engineering systems and quality AI excite me.",
  ],
  [
    "Exceptional if deep-tech + precision problems motivate you.",
    "This is exceptional for me when deep-tech and precision problems motivate me.",
  ],
  [
    "Only if mission domain aligns with your values; note adjacency vs your core sector preference.",
    "I only pursue this if the mission domain aligns with my values; I note it as adjacent vs my core sector preference.",
  ],
  [
    "Useful as a source engine for Leipzig startups rather than a long-term employer target.",
    "I use this mainly as a source engine for Leipzig startups rather than a long-term employer target.",
  ],
];

for (const [a, b] of reps) {
  s = s.split(a).join(b);
}

// Strip any remaining non-ascii that breaks parsers from prior corruption
// Keep letters, common punctuation
fs.writeFileSync(path, s, { encoding: "utf8" });

// Validate readable
const check = fs.readFileSync(path, "utf8");
const stillYou = /if you |for you|your values/.test(check);
const bad = /â.|�/.test(check);
console.log(JSON.stringify({ stillYou, bad, len: check.length }));
