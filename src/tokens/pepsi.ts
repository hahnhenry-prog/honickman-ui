import type { ThemeTokens } from "./types";

// Pepsi blue — shared by PCNY and PNB
//
// `primary` is sampled from the flat fill of the PCNY logo artwork:
// PCNY_logo.png — a lossless PNG, rgb(23, 74, 146), 57% of the image.
// Never re-source it from the .webp copies: WebP is lossy and reads #174b92.
//
// Values previously mistaken for Pepsi blue — do not reintroduce:
// #004b93, #0065c3, #2ea3f2, #174b92.
export const pepsiTokens: ThemeTokens = {
  primary:           "#174a92",
  primaryDark:       "#0e3585",
  primaryLight:      "#1f65c7",
  primaryMuted:      "rgba(23, 74, 146, 0.08)",
  primaryForeground: "#ffffff",
  secondary:         "#0e2d6b",
  secondaryForeground: "#ffffff",
  accent:            "#e4003a",   // Pepsi red

  background:      "#f4f6f9",
  foreground:      "#242424",
  card:            "#ffffff",
  cardForeground:  "#242424",
  muted:           "#eef2f7",
  mutedForeground: "#666666",
  border:          "#e2e2e2",
  ring:            "rgba(23, 74, 146, 0.25)",
  surfaceInverse:           "#2e2e2e",
  surfaceInverseForeground: "#ffffff",

  radius:      "2px",
  fontSans:    "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
};
