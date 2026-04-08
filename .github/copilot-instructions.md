# Copilot Instructions for bytenodes

## Architecture quick map

- This is a Next.js App Router project (`next` 15) with React 19 + TypeScript + Tailwind.
- Route files in `src/app/**/page.tsx` are mostly thin wrappers: they define metadata + JSON-LD, then render a view from `src/views/*`.
- Most UI composition lives in `src/views/*` (page-level sections) and `src/components/*` (reusable sections/widgets).
- Shared providers are centralized in `src/app/providers.tsx` (`next-themes`, React Query, tooltip/toast providers).
- SEO is layered in three places:
  - global metadata in `src/app/layout.tsx`
  - route metadata in each `src/app/**/page.tsx`
  - JSON-LD helpers in `src/lib/structured-data.tsx` and `src/components/SEO.tsx`

## Data and service boundaries

- Current data is mostly local/static, not backend-driven:
  - catalog/content JSON in `src/data/*.json`
  - selectors/helpers in `src/lib/dataService.ts`
- `src/lib/api.ts` is a client-side mock service using `localStorage` (auth + tickets); no real server API routes are implemented.
- If adding real API integration, avoid breaking existing mock contracts used by UI components.

## Conventions to follow in this codebase

- Use alias imports (`@/*`) instead of long relative paths (see `tsconfig.json`).
- Keep App Router pages minimal; implement page UI in `src/views/*`.
- Add `"use client"` only where hooks/browser APIs are needed (many views/components are client components due to animations/state).
- Keep styling in Tailwind utility classes and existing design tokens from `src/app/globals.css` (HSL CSS variables).
- Reuse shadcn UI primitives from `src/components/ui/*` before creating custom low-level components.
- For animated sections, reuse patterns from `src/hooks/useScrollAnimation.tsx` and existing GSAP/Framer Motion components.

## SEO/content specifics

- Production domain is `https://bytenodes.icu`; keep canonical URLs, OpenGraph, Twitter metadata, sitemap, and structured data aligned.
- Update `src/app/sitemap.ts` when adding/removing indexable routes.
- Keep legal/support links consistent across `Navbar`, `Footer`, and route pages.

## Developer workflows

- Use npm scripts from `package.json`:
  - `npm run dev` (local dev)
  - `npm run build` (production build)
  - `npm run start` (serve build)
  - `npm run lint` (Next.js lint)
- There is currently no test script configured.
- `README.md` is partially outdated (mentions Vite/PHP flow); prefer actual configuration in `package.json` + `src/app` structure.

## Safe change strategy

- Preserve Indonesian marketing copy/tone in UI text unless requested otherwise.
- Keep changes scoped; avoid broad refactors across `src/views/*` and `src/components/*` unless necessary.
- When introducing new pages, follow existing pattern: metadata in route file, UI in `src/views`, and JSON-LD where relevant.
