# Honickman — engineering to-do

Working list. Moves to the monorepo root once that exists.

---

## Security — do first

- [ ] **Repos are public.** All four. Decide deliberately whether internal tools
      should be publicly readable. Folding into a private monorepo settles it;
      making `honickman-ui` private on its own would break the `github:`
      dependency on Vercel.
- [ ] **AWS access key ID is in `honickman-catalog-admin/CLAUDE.md`** (`AKIAU…`)
      in a public repo. The secret key is not, so this is half a credential —
      but move it out and rotate if the repo has been public for long.
- [ ] **`VITE_SITE_PASSWORD` ships in the JavaScript bundle.** Inherent to how
      `VITE_` vars work. The password gates are a speed bump, not access
      control. Superseded by the auth work below.

## Next up, in order

1. [ ] **Monorepo.** One repo: `packages/ui` + `apps/{catalog,admin,vending}`.
       Removes the build→push→update→push cycle that every library change costs
       today. Vercel supports it via per-project Root Directory. Decide whether
       to preserve git history (leaning: start fresh — these repos are days old
       and mostly Figma Make noise).
2. [ ] **Auth: magic link + role-based access.** Supabase does this natively and
       is already wired into all three apps. Replaces the three hand-rolled
       password gates. Roles table + RLS so the database enforces access rather
       than the UI hiding buttons.
3. [ ] **Components: `Select`, `Button`.** `Field` and `Input` are done and prove
       the pipeline. Select is the bigger win — two full implementations, one in
       the admin and one in the catalog, same job, different tech.

## Cleanup backlog

- [ ] **Bundle size.** Catalog ships 513 KB of JS and is customer-facing, so
      people on mobile data pay for it. Not yet investigated — usually one or
      two dependencies dominate, and lazy-loading beats removal.
- [ ] **Ad-hoc sizes.** ~85 `text-[13px]`-style literals remain. Converting as
      components move to the library, deliberately not in one sweep.
- [ ] **Remaining hardcoded colours in the vending form** — roughly 45 greys and
      warm neutrals. The brand colours are all tokenised; these are not.
- [ ] **`#1a2533` in the admin has no traced source.** Every other colour maps
      to brand artwork. Get a brand file or fold it into an existing token.
- [ ] **Next files to split:** `admin/components/modals.tsx` (935),
      `vending/Dashboard.tsx` (780), `catalog/CompanyCatalogPage.tsx` (600).
- [ ] **No tests anywhere.** Every refactor so far was verified by typecheck plus
      identical bundle size. That works for moving code; it will not catch a
      behaviour change. Worth adding before the logic starts changing.
- [ ] **Audit the docs.** The recorded frontend URL was wrong for an unknown
      period (`honickman-catalog-frontend` vs the live `honickman-catalog`).
      Other facts in `CLAUDE.md` may have drifted the same way.

## Done

- [x] Brand palette sourced from artwork; seven competing blues down to one
- [x] `@honickman/ui` — tokens, `ThemeProvider`, logos, sizing scale
- [x] All three apps themed; zero hardcoded brand colours or typefaces
- [x] Figma Make coupling removed (~1,580 lines, 10.8 MB of unused assets)
- [x] `App.tsx` 3,177 → 900; `MachinesSection.tsx` 1,771 → 738
- [x] `Field` + `Input` extracted; 94 lines of duplication removed
- [x] Catalog served a partial product list on a failed request — now fails loudly
