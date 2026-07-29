# AGENTS.md — kelev_ID

Pet ID digital profile service built with Astro.

## Tech

- **Framework:** Astro 5
- **Language:** JavaScript
- **Package manager:** pnpm
- **Build output:** Static site (`dist/`)
- **Styling:** CSS custom properties (global tokens in `src/styles/global.css`)

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build |

## Architecture

```
src/
├── components/     # Reusable UI components (Hero, PetProfile, etc.)
├── layouts/        # BaseLayout.astro (wraps all pages)
├── pages/          # Routes: index.astro (/), id.astro (/id)
└── styles/         # Global CSS with design tokens
```

## Routes

- `/` — Landing page with hero, features, CTA
- `/id` — Pet ID profile page (demo data for "Luna")

## Design System

Design created in Stitch (project `kelev_ID`). Tokens defined in `global.css`:
- Colors: warm pet-friendly palette (primary orange, secondary yellow, tertiary green)
- Typography: Lexend (headlines) + Plus Jakarta Sans (body)
- Spacing: 8px linear scale
- Radius: rounded shapes for friendly feel
