import type { ThemeTokens } from "./types";

// Pepsi blue — shared by PCNY and PNB
//
// `primary` is sampled from the flat fill of the PCNY logo artwork:
// honickman-vending-maintenance-form/src/imports/PCNY_logo.png — a lossless
// PNG, rgb(23, 74, 146), 57% of the image. This is the source of truth.
//
// Never re-source this value from the .webp logo copies. WebP is lossy and
// reads back as #174b92, one point off. Sample brand colors from PNG or SVG.
//
// Values previously mistaken for Pepsi blue — do not reintroduce:
// #004b93, #0065c3, #2ea3f2, #174b92.
export const pepsiTokens: ThemeTokens = {
  primary:      "#174a92",
  primaryDark:  "#0e3585",   // hover shade, already in production use
  primaryLight: "#1f65c7",   // derived: same hue, lightened
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
