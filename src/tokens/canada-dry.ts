import type { ThemeTokens } from "./types";

// Canada Dry green — shared by CDDV and CDP
// Primary sourced from header background used across both Canada Dry catalog apps
export const canadaDryTokens: ThemeTokens = {
  primary:      "#0e4636",
  primaryDark:  "#082d24",
  primaryLight: "#1a6b3c",
  primaryMuted: "rgba(14, 70, 54, 0.08)",

  background: "#f4f6f9",
  surface:    "#ffffff",
  border:     "#e2e2e2",

  textPrimary:   "#242424",
  textSecondary: "#555555",
  textMuted:     "#999999",

  accent: "#c8a93a",   // Canada Dry gold
  ring:   "rgba(14, 70, 54, 0.25)",

  fontDisplay: "'Barlow Condensed', sans-serif",
  fontBody:    "'Open Sans', sans-serif",
};
