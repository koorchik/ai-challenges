# DOU Day 2026 — «Що робити в часи ШІ?»

Vertically scrollable slide deck built with [`@revealjs/react`](https://www.npmjs.com/package/@revealjs/react), React + TypeScript, bundled by Vite. The deck uses reveal.js 5.x **scroll view** (`view: 'scroll'`) so the whole presentation reads as one long page.

## Develop

```bash
npm install
npm run dev
```

Vite prints a local URL. The deck renders as a single vertically scrollable column with snap-scrolling between slides. The URL hash updates as you scroll (`hash: true`), so deep links work.

## Build

```bash
npm run build      # type-check + Vite build → ./dist
npm run preview    # serve ./dist locally
```

## Slide structure

Each slide is one tiny React component: `src/slides/Slide-01.tsx` … `Slide-50.tsx`. They live in a single flat folder and sort numerically. The first line of each file is a comment with the section and topic, so they remain discoverable when you scan `ls`.

The deck order is **the file name order** — `src/slides/index.ts` auto-discovers every `Slide-*.tsx` via `import.meta.glob` and sorts them lexicographically.

Workflow:

- **Add a slide** — create the next `Slide-NN.tsx`.
- **Reorder** — rename the files (e.g. `Slide-23.tsx` ↔ `Slide-24.tsx`). Linux: `mv Slide-23.tsx _tmp && mv Slide-24.tsx Slide-23.tsx && mv _tmp Slide-24.tsx`.
- **Remove a slide** — delete the file.
- **Skip a slide temporarily** — rename to something that doesn't match `Slide-*.tsx`, e.g. `_Slide-23.tsx`.

Section grouping in the current 50 stubs:

| Range | Section |
|---|---|
| 01–05 | Intro: title, speaker, agenda |
| 06–14 | Perspectives: engineer, entrepreneur, economist |
| 15–20 | What's actually happening on the market |
| 21–27 | Group 1: Students |
| 28–34 | Group 2: Developers |
| 35–41 | Group 3: Businesses |
| 42–48 | Group 4: The state (Ukraine) |
| 49–50 | Closing |

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.

One-time setup:

1. Create a GitHub repository named **`dou-day-2026`** and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. Site goes live at `https://<username>.github.io/dou-day-2026/`.

If the repo name is **not** `dou-day-2026`, change the `base` field in `vite.config.ts` to `/<actual-repo-name>/` (or `/` for a custom apex domain).

## Theme

Default theme is reveal.js `black`. To change, edit the imports in `src/Presentation.tsx`:

```ts
import 'reveal.js/theme/white.css';   // or: league, beige, sky, night, serif, simple, solarized, moon, dracula
```
