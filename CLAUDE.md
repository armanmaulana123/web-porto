# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build (also the fastest way to surface type errors that escape `tsc`)
- `npm run start` — serve the production build
- `npm run lint` — ESLint via `next lint`
- `npm run typecheck` — `tsc --noEmit` (no test runner is configured)

## Architecture

Single-page portfolio site. The entire UI is one route ([app/page.tsx](app/page.tsx)) that composes section components from [components/](components/) — `Nav`, `Hero`, `About`, `Projects`, `Contact`, `Footer`. Navigation is in-page anchor links (`#about`, `#projects`, `#contact`), not Next.js routing.

Key conventions:
- **App Router, not Pages Router.** Root layout is [app/layout.tsx](app/layout.tsx); global styles in [app/globals.css](app/globals.css).
- **Server Components by default.** None of the existing sections need `"use client"`. Add it only when introducing hooks/interactivity, and keep client components leaf-level so the rest stays server-rendered.
- **`@/*` path alias** maps to the project root (see [tsconfig.json](tsconfig.json)). Import section components as `@/components/Hero`, not relative paths.
- **Tailwind theme extensions** (`bg-ink`, `text-accent`, `text-accent-soft`, `container-tight`, `section`, `nav-link`) are defined in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css). Reuse these instead of hardcoding colors/spacing — the site's visual consistency depends on it.
- **Section pattern:** every section uses `<section id="..." className="section ...">` with the `section` utility (handles `scroll-mt` for the fixed nav and vertical rhythm). Adding a new section means adding it to `app/page.tsx`, giving it an `id`, and optionally adding a link to [components/Nav.tsx](components/Nav.tsx).

## Adding content

Project entries are a static array in [components/Projects.tsx](components/Projects.tsx) (the `projects: Project[]`). Skills are a static array in [components/About.tsx](components/About.tsx). There is no CMS or content layer — edit those arrays directly.
