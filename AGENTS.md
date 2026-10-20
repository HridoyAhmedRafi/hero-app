# AGENTS.md

## Stack
- Next.js 16 App Router + React 19, TypeScript (strict), npm (`package-lock.json`).
- Tailwind CSS v4 + daisyUI 5; React Compiler is enabled in `next.config.ts`.
- No test suite, CI, or formatter. Do not invent test or Prettier commands.

## Commands
- `npm run dev` — dev server on port 3000.
- `npm run build` / `npm start` — production build and serve.
- `npm run lint` — project-wide ESLint (script is bare `eslint`, there is no per-file script).
- `npx tsc --noEmit` — typecheck; no npm script exists for it. `next build` typechecks but does not run ESLint, so run lint separately.

## App data
- Catalog data is `src/data/apps.json`, imported through `src/data/apps.ts` and bundled at build time. There is no HTTP fetch, API, or environment variable for it.
- Update the JSON and `IApp` in `src/types/apps.type.ts` together; `apps.ts` type-checks the JSON against `IApp`.
- Never reintroduce a `fetch` of the app list against a localhost/production URL — it breaks static prerendering on Vercel (the original deployment failure).

## Architecture
- Routes: `/` (Banner + TrendingApps), `/apps`, `/apps/[appId]` (dynamic), `/installation`.
- `src/app/layout.tsx` wraps every page in Navbar, Footer, `AppsProvider`, and react-toastify's `ToastContainer`.
- In Next 16 dynamic route `params` is a Promise; `src/app/apps/[appId]/page.tsx` awaits it.
- Installed apps are client-only state in `src/context/AppsProvider.tsx` — no persistence or API, so reloading clears `/installation`.
- `/apps/[appId]` calls `notFound()` for unknown IDs, rendering `src/app/not-found.tsx`.
- Import alias `@/*` maps to `src/*`. Components are grouped by area: `home`, `shared`, `app-details-button`.

## Styling
- Tailwind v4 has no `tailwind.config.*`; global setup is `src/app/globals.css` (`@import "tailwindcss"; @plugin "daisyui";`). Add daisyUI config there.
- daisyUI theme is fixed with `data-theme="light"` on `<html>`; Navbar uses daisyUI classes.
- Recurring brand colors: primary `#6b35e5`, headings `#001931`.
- `next/image` accepts any HTTPS host (`remotePatterns` in `next.config.ts`); local images are imported from `src/assets`.
