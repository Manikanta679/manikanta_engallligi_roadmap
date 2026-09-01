/**
 * Seed allowlist metadata. Passwords live ONLY in .env.local (never commit).
 * Format in env: ROADMAP_USERS=email:password:Display Name|email2:password2:Name2
 */
export interface AllowedUserMeta {
  id: string;
  name: string;
  email: string;
}

export const defaultUserDirectory: AllowedUserMeta[] = [
  {
    id: "1",
    name: "Manikanta Engalligi",
    email: "manikanta@roadmap.local",
  },
  {
    id: "2",
    name: "Team Member",
    email: "member@roadmap.local",
  },
];

export function parseUsersFromEnv(): { email: string; password: string; name: string; id: string }[] {
  const raw = process.env.ROADMAP_USERS;
  if (!raw) {
    // Local-dev fallback — change via ROADMAP_USERS in .env.local before sharing
    return [
      {
        id: "1",
        email: "manikanta@roadmap.local",
        password: "Roadmap2026!",
        name: "Manikanta Engalligi",
      },
      {
        id: "2",
        email: "member@roadmap.local",
        password: "Roadmap2026!",
        name: "Team Member",
      },
    ];
  }

  return raw.split("|").map((entry, index) => {
    const [email, password, name] = entry.split(":");
    return {
      id: String(index + 1),
      email: (email ?? "").toLowerCase().trim(),
      password: password ?? "",
      name: name ?? email ?? `User ${index + 1}`,
    };
  });
}
