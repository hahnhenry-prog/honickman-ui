import type { ThemeTokens } from "./types";

// Pepsi blue — shared by PCNY and PNB
// Primary sourced from header background used across both Pepsi catalog apps
export const pepsiTokens: ThemeTokens = {
  primary:      "#174a92",
  primaryDark:  "#0e2d6b",
  primaryLight: "#2a5db0",
  primaryMuted: "rgba(23, 74, 146, 0.08)",

  background: "#f4f6f9",
  surface:    "#ffffff",
  border:     "#e2e2e2",

  textPrimary:   "#242424",
  textSecondary: "#555555",
  textMuted:     "#999999",

  accent: "#e4003a",   // Pepsi red
  ring:   "rgba(23, 74, 146, 0.25)",

  fontDisplay: "'Barlow Condensed', sans-serif",
  fontBody:    "'Open Sans', sans-serif",
};
