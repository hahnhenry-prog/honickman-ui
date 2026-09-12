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
  secondary:         "#283a4e",
  secondaryForeground: "#ffffff",
  accent:            "#de8500",

  background:      "#f4f6f8",
  foreground:      "#1a2533",
  card:            "#ffffff",
  cardForeground:  "#1a2533",
  muted:           "#eaecf0",
  mutedForeground: "#6b7a90",
  border:          "#d4d9e2",
  ring:            "rgba(222, 133, 0, 0.25)",

  radius:      "2px",
  fontSans:    "'Nunito', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
};
