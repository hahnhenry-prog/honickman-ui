/**
 * The complete set of themeable values.
 *
 * Names follow the convention the apps already use (`foreground`, `card`,
 * `mutedForeground`) rather than an invented vocabulary, so a themed app needs
 * no rewrite. Each key maps to one CSS custom property — see ThemeProvider.
 */
export interface ThemeTokens {
  // ── Brand ──
  primary: string
  primaryDark: string           // hover / pressed
  primaryLight: string          // subtle accents
  primaryMuted: string          // translucent tint for backgrounds
  primaryForeground: string     // text sitting on primary
  secondary: string             // supporting brand colour
  secondaryForeground: string
  accent: string                // vivid highlight

  // ── Surfaces ──
  background: string            // page
  foreground: string            // body text
  card: string                  // panel / card surface
  cardForeground: string
  muted: string                 // subdued fill
  mutedForeground: string       // secondary / placeholder text
  border: string
  ring: string                  // focus ring

  // ── Shape & type ──
  radius: string
  fontSans: string
  fontDisplay: string
  fontMono: string
}
