# PROJECT_MAP.md

## [TECH_STACK]
React 18 + TypeScript 5 + Vite 5, Tailwind 3.4, Framer Motion 11, React Router 6, Lucide icons. Static SPA, Cloudflare Pages (`dist/`, `public/_redirects`). No backend. Form posts to configurable `VITE_FORM_ENDPOINT`.

## [SYSTEM_FLOW]
Routes: `/` `/services` `/dynamics-365` `/digital-solutions` `/about` `/contact` `/privacy` `*→404`. Layout: sticky header + animated mobile menu + footer + CTA bands. `/contact?service=X` preselects service. Contact: 4-step (Service → Contact → Requirement → Review) → POST JSON → success/error states, never fake success.

## [ARCHITECTURE]
- `src/site.ts` — single config (contact placeholders)
- `src/components/Layout.tsx` — header/footer/Seo/CtaBand
- `src/components/ui.tsx` — Reveal/Stagger/SectionHead (reduced-motion aware)
- `src/components/HeroVisual.tsx` — animated ERP↔data↔web visual (Framer Motion SVG, no 3D/video)
- `src/pages/*` — code-split via React.lazy in `App.tsx`
- `public/` — logo.svg (PLACEHOLDER), favicon, og-cover, robots, sitemap, _redirects

## [ORPHANS & PENDING]
- `public/logo.svg` is recreated from the official logo (navy #0A1F3D + azure #1B87F0); replace with the official vector file if you have it.
- All contact details are placeholders (`src/site.ts` + README checklist).
- Form endpoint empty by design until configured.
- No clients/testimonials/stats invented per requirements.
