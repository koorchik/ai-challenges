# DOU Day 2026 — «Що робити в часи ШІ?»

Vertically scrollable slide deck built with [`@revealjs/react`](https://www.npmjs.com/package/@revealjs/react), React + TypeScript, bundled by Vite. The deck uses reveal.js 5.x **scroll view** (`view: 'scroll'`) so the whole presentation reads as one long page.

**Live deck:** <https://koorchik.github.io/ai-challenges/>

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

Each slide is one tiny React component: `src/slides/Slide-01.tsx` … `Slide-48.tsx`. They live in a single flat folder and sort numerically. The first line of each file is a comment with the section and topic, so they remain discoverable when you scan `ls`.

The deck order is **the file name order** — `src/slides/index.ts` auto-discovers every `Slide-*.tsx` via `import.meta.glob` and sorts them lexicographically.

Workflow:

- **Add a slide** — create the next `Slide-NN.tsx`.
- **Reorder** — rename the files (e.g. `Slide-23.tsx` ↔ `Slide-24.tsx`). Linux: `mv Slide-23.tsx _tmp && mv Slide-24.tsx Slide-23.tsx && mv _tmp Slide-24.tsx`.
- **Remove a slide** — delete the file.
- **Skip a slide temporarily** — rename to something that doesn't match `Slide-*.tsx`, e.g. `_Slide-23.tsx`.

Section grouping (48 slides):

| Range | Section |
|---|---|
| 01–05 | Intro |
| 06–09 | Виклики (declarations per audience) |
| 10–16 | Студенти |
| 17–27 | Розробники |
| 28–39 | Бізнеси |
| 40–46 | Україна |
| 47–48 | Закриття |

## Deploy (GitHub Pages)

Deployed to GitHub Pages: <https://koorchik.github.io/ai-challenges/>

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. To trigger a manual run without a new commit:

```bash
npm run deploy     # gh workflow run deploy.yml --ref main
```

Requires the [GitHub CLI](https://cli.github.com/) authenticated against this repo.

One-time setup (already done for this repo):

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. `base` in `vite.config.ts` matches the repo subpath (`/ai-challenges/`). Change to `/<repo-name>/` if forking, or `/` for an apex-domain deploy.

## Theme

Default theme is reveal.js `black`. To change, edit the imports in `src/Presentation.tsx`:

```ts
import 'reveal.js/theme/white.css';   // or: league, beige, sky, night, serif, simple, solarized, moon, dracula
```
