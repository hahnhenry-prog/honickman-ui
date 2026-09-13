# BevApps — engineering to-do

Working list. Moves to the monorepo root once that exists.

BevApps is the product. The Honickman Companies (`hongrp`) is the first
tenant. That framing decides most of the questions below.

---

## Security — do first

- [ ] **AWS credential is fully exposed. Rotate it.** Both halves are public:
      the key ID sits in `honickman-catalog-admin/CLAUDE.md`, and the *secret*
      is inlined into the deployed admin bundle, because `VITE_`-prefixed vars
      are compiled into the JavaScript Vite ships. Verified against the live
      bundle on 2026-09-12. The password gate downloads after the bundle, so it
      protects nothing. Rotating is the stopgap; the fix is moving uploads
      behind a server that mints presigned URLs, so no key ever reaches a
      browser. Fold that into the auth work — both need a server-side piece.
- [ ] **Database has no access control.** The anon key reads every table,
      including contact and billing details in `requests`, and performs every
      write the apps make. Verified live. Fixed by the tenancy + RLS work below.
- [ ] **Repos are public.** All four. The private monorepo settles it.
- [ ] **`VITE_SITE_PASSWORD` ships in the JavaScript.** One password gates both
      the catalog and the admin, readable in the public bundle. Superseded by
      auth, except on the catalog, which deliberately keeps a shared password.

## Next up, in order

1. [ ] **Monorepo, named `bevapps`.** Layout below. Removes the
       build → push → update → push cycle every library change costs today.
       Vercel handles it via per-project Root Directory. Start git history
       fresh; these repos are days old and mostly Figma Make noise.
2. [ ] **Auth and tenancy.** Email code (OTP) via Supabase, the table set
       below, and RLS so the database enforces access instead of the UI hiding
       buttons. Needs an email provider connected first — Resend, free at this
       volume, because Supabase's built-in sender is rate limited to a handful
       per hour and is for testing only.
3. [ ] **Components: `Select`, `Button`.** `Field` and `Input` are done and
       prove the pipeline. Select is the bigger win: two full implementations
       exist today, one in the admin and one in the catalog.

## Repo layout

```
bevapps/
  packages/
    ui/              BevApps design system: bevapps theme, ThemeProvider,
                     hooks, shared components, auth client
    brand-hongrp/    Customer brand pack: honickman, pepsi, canada-dry
                     themes + the five logos. Separate package so it is
                     obvious these are a customer's brands, not BevApps'.
                     A second customer gets brand-<slug>/ alongside it.
  apps/
    catalog/           customer-facing  → wears the customer's brand
    catalog-admin/     staff-facing     → wears BevApps
    vend-maintenance/  staff-facing     → wears BevApps   (VendTools)
    vend-prospects/    planned          → Prospect List Tracker (VendTools)
    vend-proposals/    planned          → proposals and pro formas (VendTools)
```

- [ ] Rename the repo `honickman-*` → `bevapps`. GitHub redirects old URLs, so
      nothing breaks while it happens.
- [ ] "VendTools" is a suite, not an app. It is a grouping label on the apps
      table, not its own repo — a separate repo per app in a suite buys
      nothing and costs a dependency to manage.

## Branding — who wears what

Rule: **chrome is BevApps, content is the customer's brand.** Recorded as
rule 5 in `CLAUDE.md`.

| Surface | Wears | Why |
|---|---|---|
| Sign-in, emailed codes, landing page | BevApps | Vendor identity lives at the auth boundary |
| Catalog admin | BevApps | Staff-facing; its users are BevApps users |
| All VendTools apps | BevApps | Same |
| Product catalog | Pepsi / Canada Dry | Customer-facing. The retailer reading it has a relationship with the bottler, not with BevApps. "Build your own digital catalog in your branding" is the product. |

- [ ] Point `catalog-admin` and `vend-maintenance` at `brand="bevapps"`.
      One line each. Do it during the monorepo move, not before, to avoid
      paying the update cycle twice.
- [ ] Note for later: the catalog admin may move to Honickman IT
      infrastructure, at which point its branding goes back to Honickman and
      BevApps keeps a fork for repurposing. Design so that is a theme swap,
      not a rewrite.

## Data model — proposed

Seven tables. Sketch only; nothing built yet.

| Table | Holds | Notes |
|---|---|---|
| `tenants` | The customer | `hongrp` is the first row |
| `apps` | What BevApps offers | Slug, name, `suite` column groups VendTools |
| `tenant_apps` | Which apps a tenant has bought | The entitlement layer |
| `profiles` | One row per person | Keyed to Supabase's `auth.users.id`, holds email and name |
| `memberships` | Who belongs to which tenant | Plus a tenant-level role: owner / admin / member, for managing users |
| `roles` | Roles an app defines | Per app, not per tenant. Carries a permissions array |
| `user_roles` | Who has which role, at which tenant | The assignment |

- [ ] **A role in an app IS access to that app.** No separate app-access
      table: two tables that can disagree is a bug waiting to happen. Access =
      the tenant has the app, and the user holds a role in it.
- [ ] **Every data table needs a `tenant_id` column.** `requests`,
      `request_machines`, `products`, everything. Add it now — retrofitting
      means backfilling every table and rewriting every policy.
- [ ] **One SQL helper, `has_permission(tenant, app, permission)`**, so each
      RLS policy is a single readable line instead of a four-table join
      copy-pasted everywhere.
- [ ] Seed `roles` from what the code already uses: vending has Sales,
      Vending, MDM and Route Accounting; the admin needs Editor and Viewer.

## Cleanup backlog

- [ ] **`node_modules` is committed to `honickman-ui`** — 6,881 files, no
      `.gitignore`. Every install pulls a 19.8 MB tarball instead of 290 KB.
      Resolved by the monorepo; until then `git rm -r --cached node_modules`.
- [ ] **Bundle size.** The catalog ships 513 KB of JS and is customer-facing,
      so people on mobile data pay for it. Usually one or two dependencies
      dominate; lazy-loading beats removal.
- [ ] **No staging environment.** Local `pnpm dev` reads and writes production
      Supabase and S3 for every app. `DEV_PREVIEW` in the vending form submits
      real rows.
- [ ] **The schema lives only in the Supabase dashboard.** No migrations
      anywhere. `data_complete` is filtered on by two apps and written by none,
      and the admin carries two definitions of it that disagree.
- [ ] **Ad-hoc sizes.** ~85 `text-[13px]`-style literals. Converting as
      components move to the library, deliberately not in one sweep.
- [ ] **Hardcoded neutrals in the vending form** — roughly 45 greys.
      Brand colours are all tokenised; these are not.
- [ ] **`#1a2533` in the admin has no traced source.**
- [ ] **Next files to split:** `admin/components/modals.tsx` (935),
      `vending/Dashboard.tsx` (780), `catalog/CompanyCatalogPage.tsx` (600).
- [ ] **No tests anywhere.** Every refactor so far was verified by typecheck
      plus identical bundle size. That catches moved code, not changed
      behaviour. Worth adding before the logic starts changing.
- [ ] **`AGENTS.md` is stale in all four repos.** Describes the Figma Make
      sandbox, a dev server that is not running, and a force-push deploy
      procedure that would overwrite `main`. The library's copy also documents
      a token vocabulary that no longer exists.

## Done

- [x] Brand palette sourced from artwork; seven competing blues down to one
- [x] `@honickman/ui` — tokens, `ThemeProvider`, logos, sizing scale
- [x] All three apps themed; zero hardcoded brand colours or typefaces
- [x] Figma Make coupling removed (~1,580 lines, 10.8 MB of unused assets)
- [x] `App.tsx` 3,177 → 900; `MachinesSection.tsx` 1,771 → 738
- [x] `Field` + `Input` extracted; 94 lines of duplication removed
- [x] Catalog served a partial product list on a failed request — now fails loudly
- [x] BevApps identity: navy, six-pack mark, sign-in email and landing page
- [x] `bevapps` added as the fourth theme; existing three untouched
