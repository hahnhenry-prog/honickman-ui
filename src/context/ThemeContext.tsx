import React, { createContext, useContext, useEffect, type ReactNode } from "react";
import type { BrandId } from "../brands";
import { tokensForBrand } from "../brands";
import type { ThemeTokens } from "../tokens";

interface ThemeContextValue {
  brandId: BrandId;
  tokens: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  brand: BrandId;
  children: ReactNode;
  /** Optional CSS selector to scope custom properties (defaults to ":root") */
  scope?: string;
}

export function ThemeProvider({ brand, children, scope = ":root" }: ThemeProviderProps) {
  const tokens = tokensForBrand(brand);

  useEffect(() => {
    const target =
      scope === ":root"
        ? document.documentElement
        : (document.querySelector(scope) as HTMLElement | null);

    if (!target) return;

    target.style.setProperty("--color-primary",       tokens.primary);
    target.style.setProperty("--color-primary-dark",  tokens.primaryDark);
    target.style.setProperty("--color-primary-light", tokens.primaryLight);
    target.style.setProperty("--color-primary-muted", tokens.primaryMuted);
    target.style.setProperty("--color-background",    tokens.background);
    target.style.setProperty("--color-surface",       tokens.surface);
    target.style.setProperty("--color-border",        tokens.border);
    target.style.setProperty("--color-text-primary",   tokens.textPrimary);
    target.style.setProperty("--color-text-secondary", tokens.textSecondary);
    target.style.setProperty("--color-text-muted",     tokens.textMuted);
    target.style.setProperty("--color-accent",        tokens.accent);
    target.style.setProperty("--color-ring",          tokens.ring);
    target.style.setProperty("--font-display",        tokens.fontDisplay);
    target.style.setProperty("--font-body",           tokens.fontBody);
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
