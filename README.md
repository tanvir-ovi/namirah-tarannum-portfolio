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

The contact form posts to [Formspree](https://formspree.io) when configured:

1. Create a free form at formspree.io and copy its form ID.
2. Copy `.env.local.example` to `.env.local`.
3. Set `NEXT_PUBLIC_FORMSPREE_ID` to your form ID.
4. Restart the dev server.

Until then, submitting opens the visitor's email client with a pre-filled
message, so the form is never a dead end.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at https://vercel.com/new — Next.js is detected automatically.
3. (Optional) add `NEXT_PUBLIC_FORMSPREE_ID` under Environment Variables.
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
