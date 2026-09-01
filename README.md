# Manikanta Engalligi — Career Roadmap

Private, authenticated career roadmap for European Tier 1–3 companies, with source library and analytics.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- NextAuth (credentials, email allowlist)
- Recharts (analytics)
- Light / dark mode (`next-themes`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Default local login

| Email | Password |
| --- | --- |
| `manikanta@roadmap.local` | `Roadmap2026!` |
| `member@roadmap.local` | `Roadmap2026!` |

Change users in `.env.local`:

```env
AUTH_SECRET=your-long-random-secret
ROADMAP_USERS=you@email.com:YourPassword:Your Name|friend@email.com:Pass:Friend Name
```

## App map

1. **Landing** — cinematic entry with highlighted name
2. **Login** — allowlisted email access
3. **Dashboard** — overview counts + shortcuts
4. **Companies** — Tier 1 / 2 / 3 separately; company detail with 8 questions, HQ, investments, 2–3y strategy, official link, sources
5. **Analytics** — bar/pie charts for tiers, sectors, skills, locations
6. **Sources** — verified research websites

## Extend company data

Edit:

- `src/data/companies/tier1.ts`
- `src/data/companies/tier2.ts`
- `src/data/companies/tier3.ts`
- `src/data/sources.ts`

Sector defaults live in `src/data/sectorProfiles.ts` — override per company for source-specific notes.

## Git

`.env.local` is gitignored. Commit code, not secrets. Push when ready:

```bash
git init   # if needed inside this folder
git add .
git commit -m "Initial career roadmap app"
git remote add origin <your-repo-url>
git push -u origin main
```
