import type { ThemeTokens } from "./types";

// Honickman corporate — parent-company and internal tools.
// `primary` sampled from TheHonickmanCompanies-1.svg; `secondary` is the
// corporate navy that pairs with it.
export const honickmanTokens: ThemeTokens = {
  primary:           "#de8500",
  primaryDark:       "#b86e00",
  primaryLight:      "#f0a030",
  primaryMuted:      "rgba(222, 133, 0, 0.08)",
  primaryForeground: "#ffffff",
  secondary:         "#283a4d",
  secondaryForeground: "#ffffff",
  accent:            "#de8500",

  background:      "#f0eeeb",
  foreground:      "#1a2533",
  card:            "#ffffff",
  cardForeground:  "#1a2533",
  muted:           "#f8f7f5",
  mutedForeground: "#6b7a90",
  border:          "#e2e0dc",
  ring:            "rgba(222, 133, 0, 0.25)",
  surfaceInverse:           "#2e2e2e",
  surfaceInverseForeground: "#ffffff",

  radius:      "2px",
  fontSans:    "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
};
