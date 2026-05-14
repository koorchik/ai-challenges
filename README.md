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

Slides live in numbered section folders under `src/slides/`. Each slide is a tiny React component named after its topic (e.g. `JuniorJobs.tsx`, `JevonsParadox.tsx`); the folder it sits in encodes the section. Each section folder has an `index.ts` that imports its slides and exports them as a `slides` array — the order in that array is the order in the deck. The top-level `src/slides/index.ts` concatenates these arrays in folder order.

```
src/slides/
├── 01-intro/
├── 02-challenges/
├── 03-general-ideas/
├── 04-students/
├── 05-developers/
├── 06-businesses/
├── 07-ukraine/
├── 08-closing/
└── index.ts
```

Workflow — no file renames are ever required to change order:

- **Add a slide** — create `src/slides/<section>/<Name>.tsx` (default-export a function returning a fragment). Add `import <Name> from './<Name>'` plus a `<Name>,` entry in the section's `index.ts`.
- **Reorder within a section** — move a line in that section's `slides = [ … ]` array.
- **Move across sections** — move the file; update both sections' `index.ts`.
- **Reorder sections** — rename folder prefixes (e.g. `04-students/` ↔ `05-developers/`) and update the import order in top-level `src/slides/index.ts`.
- **Skip a slide temporarily** — comment out its entry in the section's `index.ts` (the file stays).
- **Remove a slide** — delete the file and its entry in `index.ts`.

Section layout (63 slides total):

| Folder | Section |
|---|---|
| `01-intro/` | Intro |
| `02-challenges/` | Виклики (declarations per audience) |
| `03-general-ideas/` | Загальні ідеї |
| `04-students/` | Студенти |
| `05-developers/` | Розробники |
| `06-businesses/` | Бізнеси |
| `07-ukraine/` | Україна |
| `08-closing/` | Закриття |

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
