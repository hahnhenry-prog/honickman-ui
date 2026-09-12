import React, { createContext, useContext, useLayoutEffect, type ReactNode } from "react";
import type { BrandId } from "../brands";
import { tokensForBrand } from "../brands";
import type { ThemeTokens } from "../tokens";

interface ThemeContextValue {
  brandId: BrandId;
  tokens: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** token key -> CSS custom property. The single source of truth for the
 *  variable names apps are allowed to rely on. */
const CSS_VARS: Record<keyof ThemeTokens, string> = {
  primary:             "--color-primary",
  primaryDark:         "--color-primary-dark",
  primaryLight:        "--color-primary-light",
  primaryMuted:        "--color-primary-muted",
  primaryForeground:   "--color-primary-foreground",
  secondary:           "--color-secondary",
  secondaryForeground: "--color-secondary-foreground",
  accent:              "--color-accent",
  background:          "--color-background",
  foreground:          "--color-foreground",
  card:                "--color-card",
  cardForeground:      "--color-card-foreground",
  muted:               "--color-muted",
  mutedForeground:     "--color-muted-foreground",
  border:              "--color-border",
  ring:                "--color-ring",
  surfaceInverse:           "--color-surface-inverse",
  surfaceInverseForeground: "--color-surface-inverse-foreground",
  radius:              "--radius",
  fontSans:            "--font-sans",
  fontDisplay:         "--font-display",
  fontMono:            "--font-mono",
};

export interface ThemeProviderProps {
  brand: BrandId;
  children: ReactNode;
  /** CSS selector to scope the variables to. Defaults to :root, which is
   *  required if any UI renders through a portal into document.body. */
  scope?: string;
}

export function ThemeProvider({ brand, children, scope = ":root" }: ThemeProviderProps) {
  const tokens = tokensForBrand(brand);

  // Layout effect so the theme is applied before first paint — otherwise the
  // app flashes its stylesheet defaults for a frame.
  useLayoutEffect(() => {
    const target =
      scope === ":root"
        ? document.documentElement
        : (document.querySelector(scope) as HTMLElement | null);

    if (!target) return;

    for (const [key, cssVar] of Object.entries(CSS_VARS)) {
      target.style.setProperty(cssVar, tokens[key as keyof ThemeTokens]);
    }

    return () => {
      for (const cssVar of Object.values(CSS_VARS)) {
        target.style.removeProperty(cssVar);
      }
    };
  }, [tokens, scope]);

  return (
    <ThemeContext.Provider value={{ brandId: brand, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
