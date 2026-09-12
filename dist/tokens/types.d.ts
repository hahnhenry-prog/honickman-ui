/**
 * The complete set of themeable values.
 *
 * Names follow the convention the apps already use (`foreground`, `card`,
 * `mutedForeground`) rather than an invented vocabulary, so a themed app needs
 * no rewrite. Each key maps to one CSS custom property — see ThemeProvider.
 */
export interface ThemeTokens {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    primaryMuted: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    ring: string;
    radius: string;
    fontSans: string;
    fontDisplay: string;
    fontMono: string;
}
