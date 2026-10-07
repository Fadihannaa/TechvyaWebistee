# Techvya — Company Website

React + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router + Lucide. Static build, Cloudflare Pages ready. No Bolt runtime, no Next.js.

## 1. Local setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

Requirements: Node 18+.

## 2. Editing content

- All company details: `src/site.ts` (email, phone, WhatsApp, LinkedIn, domain, location, booking link, form endpoint).
- Pages: `src/pages/*.tsx`. Shared header/footer/CTA: `src/components/Layout.tsx`.
- Styles/brand: `tailwind.config.js` (`navy` + `brand` colors), `src/index.css`.
- Logo: replace `public/logo.svg` with the official Techvya file (keep the same filename, don't stretch). Current file is a placeholder — brand colors used: deep navy `#0A1F3D`, azure `#1B87F0` (from official logo).

## 3. Configuring forms

The contact form POSTs JSON to `VITE_FORM_ENDPOINT` (see `.env.example`) falling back to `site.formEndpoint`.

- If empty: the form shows an amber "endpoint not configured" notice on the Review step and refuses to fake success.
- To connect: set `VITE_FORM_ENDPOINT` in Cloudflare Pages env vars + local `.env`, endpoint must accept `POST application/json` and return 2xx. Options: small Worker/API, Formspree, Basin, Getform.
- Payload: `{ service, name, company, email, phone, country, contactMethod, title, description, currentSystem, impact, timeline, budget, consent, source, sentAt }`.

## 4. Deploying to Cloudflare Pages

- Build command: `npm run build`, output: `dist`.
- SPA routing handled by `public/_redirects` (`/* /index.html 200`).
- Set env var `VITE_FORM_ENDPOINT` in Pages → Settings → Environment variables.
- Update `public/robots.txt`, `public/sitemap.xml`, `src/site.ts` domain once the real domain is known.

## 5. Configure-before-launch checklist

- [ ] `site.domain`, `site.email`, `site.phoneDisplay`/`phoneHref`, `site.whatsapp`, `site.linkedin`, `site.bookingUrl`, `site.formEndpoint` / `VITE_FORM_ENDPOINT`
- [ ] Replace `public/logo.svg` with official logo, check header/footer contrast
- [ ] Update sitemap/robots domain, OG image if needed
- [ ] Test all routes, mobile menu, form validation + real submission
