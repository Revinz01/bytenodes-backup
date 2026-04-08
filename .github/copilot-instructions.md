# Copilot Instructions for bytenodes

## Architecture quick map

- Next.js App Router project (`next` 15) with React 19 + TypeScript + Tailwind.
- `src/app/**/page.tsx` files are thin route wrappers (metadata + JSON-LD + render one view).
- Most page composition is in `src/views/*`; reusable UI/sections in `src/components/*`.
- Global providers are in `src/app/providers.tsx` (theme, React Query, tooltip/toast).

## SEO and routing pattern

- SEO is layered in 3 places:
  - global metadata in `src/app/layout.tsx`
  - per-route metadata in `src/app/**/page.tsx`
  - structured-data helpers in `src/lib/structured-data.tsx` + `src/components/SEO.tsx`
- Canonical/OG/Twitter and sitemap must stay aligned with production domain `https://bytenodes.icu`.
- If adding/removing indexable pages, update `src/app/sitemap.ts`.

## Data and service boundaries

- Content/catalog data is local JSON in `src/data/*.json` and read via `src/lib/dataService.ts`.
- `src/lib/api.ts` is a browser-side mock service (`localStorage`) for auth/tickets; no real backend API routes yet.
- Keep existing mock response shapes stable when integrating real APIs.

## Interactive landing specifics (important)

- Home/interactive landing uses GSAP-heavy sections: `HeroGSAP`, `ScrollStorySection`, `HorizontalServicesScroll`, `WhyChooseUsGSAP`.
- `HorizontalServicesScroll` currently has:
  - desktop pinned horizontal scroll with `ScrollTrigger`
  - mobile fallback to normal stacked cards
  - fixed bottom nav controls that only appear when section is active (`isSectionActive`) and ready (`isScrollReady`)
  - extra scroll effort per card and an end hold before leaving section.
- `ScrollStorySection` currently has:
  - desktop sticky scroll storytelling
  - mobile fallback to simple card list (non-sticky).

## Conventions in this codebase

- Use alias imports `@/*` (see `tsconfig.json`).
- Keep App Router pages minimal; put UI logic in `src/views/*`.
- Use `"use client"` only where hooks/browser APIs are needed.
- Reuse shadcn primitives in `src/components/ui/*` before creating new low-level components.
- Use Tailwind tokenized styles from `src/app/globals.css` (HSL variables).
- Keep to valid Tailwind spacing scale tokens (avoid nonstandard classes like `md:pb-18`).

## Developer workflow

- Scripts from `package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- No test script currently configured.
- `README.md` is partially outdated; trust `package.json` and `src/app` structure over README claims.

## Safe change strategy

- Preserve Indonesian marketing tone/copy unless explicitly asked to rewrite.
- Keep changes scoped; avoid broad refactors across many views/components.
- Keep legal/support links consistent in `Navbar`, `Footer`, and legal pages.
