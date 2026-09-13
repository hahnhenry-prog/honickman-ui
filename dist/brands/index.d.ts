import { ThemeTokens } from '../tokens';
export type ThemeId = "honickman" | "pepsi" | "canada-dry" | "bevapps";
export type BrandId = "bevapps" | "honickman" | "pcny" | "pnb" | "cddv" | "cdp";
export interface Brand {
    id: BrandId;
    name: string;
    shortName: string;
    theme: ThemeId;
}
export declare const BRANDS: Record<BrandId, Brand>;
export declare const THEME_TOKENS: Record<ThemeId, ThemeTokens>;
export declare function tokensForBrand(brandId: BrandId): ThemeTokens;
