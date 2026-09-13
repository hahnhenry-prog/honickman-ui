import type { ThemeTokens } from "./types";

// BevApps — the product brand, not a customer.
//
// This is the vendor's own identity: sign-in screens, emailed codes, the
// landing page, and the chrome of staff-facing tools. Customer-facing
// surfaces keep their beverage brand (see pepsi.ts, canada-dry.ts).
//
// `primary` is deliberately far darker and roughly half as saturated as
// Pepsi blue (#174a92) so the two never read as competing brand blues —
// this one is ink with a blue cast. The light ground is what separates it
// from Encompass, which builds on dark navy with an electric cyan accent.
//
// The palette is monochrome on purpose: one hue at three values. Do not add
// a second accent hue without a reason — restraint is the point.
export const bevappsTokens: ThemeTokens = {
  primary:           "#27405c",
  primaryDark:       "#16202e",
  primaryLight:      "#38587c",
  primaryMuted:      "rgba(39, 64, 92, 0.09)",
  primaryForeground: "#ffffff",
  secondary:         "#16202e",
  secondaryForeground: "#ffffff",
  accent:            "#38587c",

  background:      "#f0eeeb",
  foreground:      "#16202e",
  card:            "#ffffff",
  cardForeground:  "#16202e",
  muted:           "#f6f5f3",
  mutedForeground: "#6a7482",
  border:          "#e2e0dc",
  ring:            "rgba(39, 64, 92, 0.25)",
  surfaceInverse:           "#16202e",
  surfaceInverseForeground: "#ffffff",

  radius:      "2px",
  fontSans:    "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
};
