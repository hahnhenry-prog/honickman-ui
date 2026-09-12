import { default as React, ReactNode } from 'react';
import { BrandId } from '../brands';
import { ThemeTokens } from '../tokens';
interface ThemeContextValue {
    brandId: BrandId;
    tokens: ThemeTokens;
}
export interface ThemeProviderProps {
    brand: BrandId;
    children: ReactNode;
    /** CSS selector to scope the variables to. Defaults to :root, which is
     *  required if any UI renders through a portal into document.body. */
    scope?: string;
}
export declare function ThemeProvider({ brand, children, scope }: ThemeProviderProps): React.JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
