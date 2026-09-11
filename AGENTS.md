# @honickman/ui

Shared headless component library and brand/theme system for all Honickman Companies applications.
Published to GitHub Packages: `https://npm.pkg.github.com/@honickman/ui`

---

## Purpose

This package provides:
- **Design tokens** — typed color + typography values per theme
- **Brand registry** — maps each company to a theme and metadata
- **ThemeProvider** — React context that injects CSS custom properties
- **Headless hooks** — behavior-only hooks (no CSS, no markup) for tables, filters, etc.

It does **not** contain logos, icons, or rendered UI components. Each app owns its own markup and assets.

---

## Project Structure

```
src/
  tokens/
    types.ts          # ThemeTokens interface (source of truth for all token keys)
    honickman.ts      # Navy/corporate palette
    pepsi.ts          # Pepsi blue + red
    canada-dry.ts     # Canada Dry green + gold
    index.ts          # Re-exports all tokens and types
  brands/
    index.ts          # Brand registry, BrandId/ThemeId types, tokensForBrand()
  context/
    ThemeContext.tsx   # ThemeProvider component + useTheme hook
  hooks/
    useTable.ts       # Headless sort/filter/pagination hook
    useFilters.ts     # Composable multi-key filter hook (10 operators)
  index.ts            # Main public export surface
```

---

## Brand Hierarchy

```
The Honickman Companies (parent)
├── PCNY  (Pepsi-Cola NY)          → theme: pepsi
├── PNB   (Pepsi National Brand)   → theme: pepsi
├── CDDV  (Canada Dry Delaware)    → theme: canada-dry
└── CDP   (Canada Dry Potomac)     → theme: canada-dry

theme: honickman  → used for parent-company / internal tools
```

`BrandId` values: `"honickman" | "pcny" | "pnb" | "cddv" | "cdp"`
`ThemeId` values: `"honickman" | "pepsi" | "canada-dry"`

---

## Token Keys (ThemeTokens interface)

| Key | Purpose |
|-----|---------|
| `primary` | Main brand color (buttons, links, active states) |
| `primaryDark` | Darker shade (hover, headings) |
| `primaryLight` | Lighter shade (focus rings, subtle accents) |
| `primaryMuted` | Very light tint (backgrounds, highlights) |
| `background` | Page background |
| `surface` | Card/panel background |
| `border` | Default border color |
| `textPrimary` | Main body text |
| `textSecondary` | Secondary/supporting text |
| `textMuted` | Placeholder, hint, disabled text |
| `accent` | Secondary brand color (badges, tags) |
| `ring` | Focus ring shadow color (rgba) |
| `fontDisplay` | CSS font-family for headings |
| `fontBody` | CSS font-family for body text |

---

## CSS Custom Properties

`ThemeProvider` injects these onto `:root` (or a scoped selector):

```css
--color-primary
--color-primary-dark
--color-primary-light
--color-primary-muted
--color-background
--color-surface
--color-border
--color-text-primary
--color-text-secondary
--color-text-muted
--color-accent
--color-ring
--font-display
--font-body
```

Use them in CSS: `color: var(--color-primary);`
Use them in Tailwind v4: `color: var(--color-primary)` inside `@layer` or inline `style` props.

---

## Usage in a Consuming App

### 1. Install

```bash
# .npmrc must contain:
# @honickman:registry=https://npm.pkg.github.com
pnpm add @honickman/ui
```

### 2. Wrap the app

```tsx
import { ThemeProvider } from "@honickman/ui";

<ThemeProvider brand="pcny">
  <App />
</ThemeProvider>
```

### 3. Access tokens in a component

```tsx
import { useTheme } from "@honickman/ui";

function Header() {
  const { tokens, brandId } = useTheme();
  return <h1 style={{ color: tokens.primaryDark }}>...</h1>;
}
```

### 4. Use headless table hook

```tsx
import { useTable } from "@honickman/ui";

const { rows, sort, setSort, pagination, setPage, totalPages, query, setQuery } =
  useTable({ data: myRows, defaultPageSize: 20, filterFn: (row, q) => row.name.includes(q) });
```

### 5. Use headless filter hook

```tsx
import { useFilters } from "@honickman/ui";

const { setFilter, clearFilter, apply } = useFilters<MyRow>();
setFilter("status", "eq", "active");
const visible = apply(allRows);
```

---

## How to Add a New Brand

1. If the brand uses an existing theme, add a new entry to `BRANDS` in `src/brands/index.ts`:
   ```ts
   newco: { id: "newco", name: "New Company LLC", shortName: "NewCo", theme: "pepsi" }
   ```
2. Add `"newco"` to the `BrandId` union type.
3. If the brand needs a new theme, create `src/tokens/newtheme.ts` implementing `ThemeTokens`, add it to `src/tokens/index.ts`, `THEME_TOKENS` in `src/brands/index.ts`, and the `ThemeId` union.

## How to Add a New Hook

Create `src/hooks/useMyHook.ts`. Export the hook and its types from `src/index.ts`. Hooks must be headless (no JSX, no CSS imports).

---

## Building and Publishing

```bash
pnpm build           # outputs to dist/
pnpm publish         # publishes to GitHub Packages (requires GITHUB_TOKEN with write:packages)
```

The build uses Vite in library mode. React is externalized (peer dependency). Type declarations are emitted by `vite-plugin-dts`.

---

## Key Invariants

- All token values are plain CSS strings (hex, rgba, CSS font stacks). No Tailwind classes inside the package.
- Hooks export only data and callbacks — no rendered elements, no className strings.
- Logos and brand marks are never included in this package; each app imports its own.
- This package has no dependency on any specific app's CSS framework.
