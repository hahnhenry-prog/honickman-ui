export interface ThemeTokens {
  // Core palette
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryMuted: string;   // translucent tint for backgrounds/rings

  // Surfaces
  background: string;     // page background
  surface: string;        // card / section surface
  border: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Semantic
  accent: string;         // highlights, active states
  ring: string;           // focus ring color (semi-transparent)

  // Typography
  fontDisplay: string;    // headings
  fontBody: string;       // body / UI text
}
