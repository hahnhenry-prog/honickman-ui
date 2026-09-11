import { honickmanTokens, pepsiTokens, canadaDryTokens } from "../tokens";
import type { ThemeTokens } from "../tokens";

export type ThemeId = "honickman" | "pepsi" | "canada-dry";
export type BrandId = "honickman" | "pcny" | "pnb" | "cddv" | "cdp";

export interface Brand {
  id: BrandId;
  name: string;
  shortName: string;
  theme: ThemeId;
  // Logos are intentionally excluded from this package.
  // Each app imports its own logo asset and passes it via
  // ThemeProvider's `logo` prop or uses it directly in the app shell.
}

export const BRANDS: Record<BrandId, Brand> = {
  honickman: {
    id: "honickman",
    name: "The Honickman Companies",
    shortName: "Honickman",
    theme: "honickman",
  },
  pcny: {
    id: "pcny",
    name: "Pepsi-Cola Bottling Company of New York",
    shortName: "PCNY",
    theme: "pepsi",
  },
  pnb: {
    id: "pnb",
    name: "Pepsi-Cola and National Brand Beverages",
    shortName: "PNB",
    theme: "pepsi",
  },
  cddv: {
    id: "cddv",
    name: "Canada Dry Delaware Valley",
    shortName: "CDDV",
    theme: "canada-dry",
  },
  cdp: {
    id: "cdp",
    name: "Canada Dry Potomac",
    shortName: "CDP",
    theme: "canada-dry",
  },
};

export const THEME_TOKENS: Record<ThemeId, ThemeTokens> = {
  honickman:    honickmanTokens,
  pepsi:        pepsiTokens,
  "canada-dry": canadaDryTokens,
};

export function tokensForBrand(brandId: BrandId): ThemeTokens {
  return THEME_TOKENS[BRANDS[brandId].theme];
}
