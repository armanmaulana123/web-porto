# Web Porto

Single-page personal portfolio built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript without emitting

## Structure

- [app/](app/) — Next.js App Router (root layout + single page)
- [components/](components/) — section components stitched together in [app/page.tsx](app/page.tsx)

The site is one route. Sections are stacked in `app/page.tsx` and linked via in-page anchors (`#about`, `#projects`, `#contact`).
