import type { ThemeTokens } from "./types";

// Canada Dry green — shared by CDDV and CDP
// `primary` matches the header green used by both Canada Dry catalog apps and
// the green in the logo artwork. `accent` is sampled from the CDP logo gold.
export const canadaDryTokens: ThemeTokens = {
  primary:           "#144937",
  primaryDark:       "#082d24",
  primaryLight:      "#1a6b3c",
  primaryMuted:      "rgba(20, 73, 55, 0.08)",
  primaryForeground: "#ffffff",
  secondary:         "#082d24",
  secondaryForeground: "#ffffff",
  accent:            "#d0a82a",   // Canada Dry gold

  background:      "#f0eeeb",
  foreground:      "#242424",
  card:            "#ffffff",
  cardForeground:  "#242424",
  muted:           "#f8f7f5",
  mutedForeground: "#666666",
  border:          "#e2e0dc",
  ring:            "rgba(20, 73, 55, 0.25)",
  surfaceInverse:           "#2e2e2e",
  surfaceInverseForeground: "#ffffff",

  radius:      "2px",
  fontSans:    "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
};
