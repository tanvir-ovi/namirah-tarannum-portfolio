# Namirah Tarannum — Graphics Designer Portfolio

A premium, multi-page portfolio for **Namirah Tarannum**, a graphics designer in
Chattogram, Bangladesh. Built with Next.js (App Router), TypeScript, Tailwind
CSS v4, GSAP, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design direction

A restrained, editorial **"warm gallery-noir"**: an espresso canvas, ivory type,
and a single amber-gold accent, so Namirah's vivid, saturated work reads like
pieces hung on a gallery wall.

- **Type**: Fraunces (display serif) paired with Archivo (grotesque body).
- **Colour**: three-to-five tokens, held with discipline (see `src/app/globals.css`).
- **Motion**: a bespoke self-assembling hero composition plus quiet, once-only
  scroll reveals. All motion respects `prefers-reduced-motion`.

## Project structure

- `src/app/`: pages for Home, Work, About, and Contact, plus `sitemap.ts`,
  `robots.ts`, and the icon / Open Graph image conventions.
- `src/components/`: UI grouped by area (`home`, `work`, `contact`, `layout`,
  `brand`, `ui`).
- `src/lib/data.ts`: all site copy in one place — edit here to update content.
- `src/lib/work.generated.json`: the curated work manifest (title, category,
  tags, dimensions).
- `public/work/`: the optimized WebP campaign images.

## Images

The work images are pre-optimized to WebP at sensible dimensions and served
directly (`next.config.ts` sets `images.unoptimized`), so rendering is identical
in every environment and no image-optimization quota is used.

## Brand assets

The monogram, favicon, and Open Graph card share one gilded "N" identity
(`src/app/icon.png`, `src/app/apple-icon.png`, `src/app/opengraph-image.png`,
`public/logo.png`).

## Contact form

The contact form posts to Formspree at `https://formspree.io/f/xrewnrkj` by
default.

To use a different Formspree form:

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the full Formspree endpoint.
3. Restart the dev server.

If a Formspree request fails, the form shows Namirah's direct email as the
fallback contact path.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at https://vercel.com/new — Next.js is detected automatically.
3. (Optional) add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under Environment Variables
   only if you want to override the built-in Formspree endpoint.
4. Deploy. Every push to `main` redeploys.

After attaching a production domain, update `SITE_URL` in `src/lib/site.ts` so
the canonical URL, Open Graph, sitemap, and robots all use it.

## Build

```bash
npm run build
npm run start
```

## Credits

Designed & developed by **Tanvir Hossain Ovi** — https://tanvir-hossain-ovi.me
