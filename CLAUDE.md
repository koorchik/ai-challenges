# CLAUDE.md

Project context for Claude when editing this repo. Keep it short — see `README.md` for human-facing docs.

## Commits

Never add a `Co-Authored-By: Claude …` trailer (or any other co-author trailer) to commit messages or PR descriptions in this repo. Plain author only.

## What this is

A 62-slide presentation for **DOU Day 2026**, topic **«Що робити в часи ШІ?»**.
Built with [`@revealjs/react`](https://www.npmjs.com/package/@revealjs/react) (React wrapper around reveal.js 5), TypeScript, Vite. Deployed as a static site to GitHub Pages.

Audience: developers (talk is in **Ukrainian** — slide copy stays in Ukrainian unless explicitly asked otherwise).

## Rendering mode

The deck uses reveal.js **scroll view** (`view: 'scroll'`) — it renders as a single long vertically scrollable page with snap-scrolling, not as a classic deck with arrow keys. Consequences:

- Each `<Slide>` must be **top-level** inside `<Deck>`. Do **not** use `<Stack>` — scroll view flattens 2D structure anyway.
- Controls are disabled (`controls: false`) since arrow keys don't apply. URL hash routing is on (`hash: true`).
- `scrollActivationWidth: null` forces scroll mode on all viewport widths; don't change unless asked.

Config lives in `src/Presentation.tsx`.

## Slide files — flat numbering

Slides are `src/slides/Slide-01.tsx` … `Slide-61.tsx` in a single flat folder. No subfolders. Each file:

- Starts with a one-line comment: `// NN · Section · Topic` (this is the only "metadata" — keep it accurate when you change a slide's content).
- Exports a single named component `SlideNN` returning a fragment (`<>…</>`).

The deck order is **the lexicographic file-name order**. `src/slides/index.ts` uses `import.meta.glob('./Slide-*.tsx')` to auto-discover and sort. No manual registry to update.

### Operations

| Task | How |
|---|---|
| Add a slide at the end | Create `Slide-62.tsx` |
| Insert a slide | Renumber subsequent files (e.g. `Slide-23` → `Slide-24`, then create new `Slide-23`) |
| Reorder | Rename files (use a tmp name to swap pairs) |
| Multi-file renumber | Two-stage `git mv` via `_tmp-Slide-NN.tsx` prefix — the glob doesn't match it, so the build stays consistent mid-rename |
| Skip a slide temporarily | Rename to `_Slide-23.tsx` so the glob ignores it |
| Remove | Delete the file |

When inserting/reordering, also update the `// NN · …` comment in the header of any file whose number changed. Don't rename the exported `SlideNN` function — it's not used by name, only the default export of the module is picked up. But if you do rename, keep it valid TS.

After any renumber:

- **Audit cross-refs.** Never write `слайд N` / `слайду N` / `slide N` inside a slide — they rot on every renumber and clutter the prose. Keep slides self-contained: restate the idea briefly or drop the pointer entirely. The grep `grep -nEi '(слайд|slide [0-9])' src/slides/*.tsx` must return zero hits. Run `grep -nEi '(слайд|slide [0-9])' src/slides/*.tsx` and reconcile each hit.
- **Audit header comments.** Verify every file's `// NN · …` first line matches its filename:
  ```sh
  for f in src/slides/Slide-*.tsx; do n=$(basename "$f" .tsx | sed 's/Slide-//'); h=$(head -1 "$f" | grep -oE '^// [0-9]+' | grep -oE '[0-9]+'); [ "$h" != "$n" ] && echo "$f header=$h expected=$n"; done
  ```

## Section layout

The deck spine: declare per-audience challenges (06–09), set transversal concepts that everything else leans on (10–16), then answer the challenges one-by-one in audience order. Cross-cutting framings (Jevons, Ricardo, J-curve, skill-leveling, capability matrix) live inside the audience section where they best support a specific declared challenge — there is **no** separate "Перспективи" or "Ринок" section.

| Range | Section |
|---|---|
| 01–05 | Intro |
| 06–09 | Виклики (declarations per audience: Студенти / Розробники / Бізнеси / Україна) |
| 10–17 | Загальні ідеї (vibe vs agentic engineering · verifiability · LLM-as-judge · human/AI Venn · X+AI inequality) |
| 18–30 | Студенти |
| 31–42 | Розробники |
| 43–54 | Бізнеси |
| 55–61 | Україна |
| 62–63 | Закриття |

## Authoring conventions

- Each slide is a fragment with one `<h1>` or `<h2>` + a short `<ul>`/`<ol>`. Keep slides scannable — long paragraphs read badly in scroll mode.
- Reusable CSS hooks in `src/styles/custom.css`:
  - `.section-label` — small uppercase tag above an `<h1>` to mark a section header (used by header slides).
  - `.slide-footnote` — small dim text for sources/contact lines.
  - `ul.checklist` — list with `→` markers instead of bullets, for "do this" lists.
- Code blocks: highlight plugin is registered. Use `<pre><code class="language-ts">…</code></pre>` or the `<Code>` component from `@revealjs/react`.
- Don't add slide-specific CSS files — extend `custom.css` with a class.
- **Prefer shared CSS classes over inline `style={{}}`** in slides. Duplicated `fontSize` / `maxWidth` per slide is the most common refactor target. Available helpers in `custom.css`:
  - Typography: `.lede`, `.section-sub`, `.text-sm|md|lg`
  - Widths: `.narrow` (900), `.wide` (1100)
  - Layout grids: `.two-col`, `.three-col`, `.four-col`, `.quad`, `.fork`, `.matrix-2x2`
  - Callouts: `.callout` (+ `.callout-yellow`, `.callout-green`)
  - KPIs / sims: `.kpi-row`, `.kpi-cell`, `.kpi-stack`, `.sim-grid`, `.sim-controls`, `.sim-controls-single`
- **Accent colors** via CSS variable: set `data-accent="yellow|blue|green|red|purple|amber"` on a container. The `--accent` var drives stripe + h3 color in `.quad-cell` / `.fork-node` / `.matrix-cell`, and `class="accent"` on any child.
- **Section header slides use `<SectionHeader label title subtitle />`**, not inline `.section-label` + `<h1>` + `<p>`.

## Voice

Slide prose should read like a developer talking, not like ChatGPT. Strip:

- **Defensive hedges**: "це не паніка — це дані", "не просто X, а Y", "не вся робота, а лише її частина"
- **Strawman negations** that pre-empt nobody's objection: "Не «AI-стартапи взагалі». Конкретно…", "Не «стратегія до 2035»…"
- **Em-dash restatements** — saying the same thing twice across a dash instead of building on it
- **Empty intensifiers** without numbers behind them: "катастрофічний", "найбільш структурний", "технічна розкіш", "в темряві"
- **Fence-sitting closings**: "…а не точка розриву", "…найбільш структурний"
- **Rhetorical inflation**: "Найгірша помилка… найкраща практика…", "страшилки", "три страшилки які…"
- **Closing wisdom**: "Доповідь має сенс лише тоді, коли…", meta-references to the talk itself

Lead with the data the chart/list already shows. If a hedge can be deleted without losing information, delete it.

## Evidence framing

Slide 5 sets the rule for the whole deck: named research only, no "ChatGPT says". Patterns the deck uses to honor it:

- **Sourced claim** → `<p className="slide-footnote">` with author + year + what they actually measured **and an inline `<a href>` to the report/article on the same slide**. Always keep the link next to the claim — never push it to a closing bibliography slide. The reader should see the source without scrolling away.
- **Stylized / extrapolated** → chart subtitle starts with "Стилізовано за …"; footnote names the paper *and* flags that the specific bin breakdown or curve fit is illustrative.
- **Approximate value** → `≈` prefix in chart labels (e.g. `junior ≈ 38`) to signal rounding without changing the data.
- **Forward projection on a chart** → split `<Line>` into solid (measured) + dashed (`<Line points={...} dasharray="6 5" />`) segments, with an inline "проєкція" text label near the projected endpoint. Canonical example: `src/slides/Slide-38.tsx`.

## Critical files

| File | Purpose |
|---|---|
| `src/Presentation.tsx` | Renders `<Deck>` with config + iterates `orderedSlides` |
| `src/slides/index.ts` | Auto-discovery via `import.meta.glob` |
| `src/slides/Slide-*.tsx` | One file per slide |
| `src/styles/custom.css` | Shared style hooks (see above) |
| `src/components/charts/` | SVG primitives (`ChartSvg`, `Bar`, `Line`, `Axis`, `Annotation`, `Slider`, `KPI`) |
| `src/components/sims/` | Interactive sims: Jevons, Ricardo, OutsourcingErosion (exploratory sliders), MetrReveal (scroll-triggered). `MetrGuess` exists but is no longer mounted. |
| `src/components/hooks/useInView.ts` | IntersectionObserver hook — gate animations |
| `src/components/hooks/useOverflowGuard.ts` | Dev-only — flags any slide whose scrollHeight > 720 with a red badge |
| `src/components/SectionHeader.tsx` | Shared header for 5 divider slides (10 Загальні ідеї, 18 Студенти, 31 Розробники, 43 Бізнеси, 55 Україна) |
| `src/vite-env.d.ts` | Declares ambient modules for `reveal.js/plugin/*` (no types ship with reveal.js) |
| `vite.config.ts` | `base: '/dou-day-2026/'` for GitHub Pages — change if repo name differs |
| `.github/workflows/deploy.yml` | Build + publish on push to `main` |

## Gotchas

- **reveal.js has no TS types**. `src/vite-env.d.ts` provides minimal ambient declarations. If you import something new from `reveal.js`, you may need to extend it.
- **CSS paths under `reveal.js/dist/...`**, not `reveal.js/...`. The package has no `exports` field, so the path is the real on-disk path. The `@revealjs/react` README shows `reveal.js/reveal.css` which **does not work** with current reveal.js.
- **The plugin import path is `reveal.js/plugin/highlight/highlight.esm.js`** (with the `.esm.js` suffix), not `reveal.js/plugin/highlight`.
- **`base` in `vite.config.ts` must match the GH repo subpath** — otherwise asset URLs 404 on Pages. For an apex-domain deploy, set to `'/'`.
- **`vh` units inside slides reference the *browser* viewport**, not the scaled 1280×720 slide. Use `em` for height constraints (reveal.js scales slides via font-size). `ChartSvg` already uses `maxHeight: 11em`.
- **All 61 slides mount simultaneously** in scroll-view. Any animation, count-up, or chart reveal must gate on `useInView` from `src/components/hooks/useInView.ts` — otherwise it fires off-screen before the user gets there.
- **Content overflows the 1280×720 viewport silently** (no scrollbars, content just gets clipped). When adding content, mentally budget: h2 ~50px + lede ~60px + chart ≤395px + callout ~70px + footnote ~30px ≈ 605px of the ~640px usable height. Long multi-line `<ol>` items are the biggest offender — collapse to one tight line each.
- **Dev-time overflow indicator.** `useOverflowGuard` (mounted by `Presentation.tsx`) toggles `.is-overflowing` + `data-overflow="<px>"` on any `<section>` whose `scrollHeight` > 720. CSS draws a red dashed outline and a "overflow +Npx" badge. Stripped from production via `import.meta.env.DEV`. If you see the badge in `npm run dev`, trim the slide until it disappears.
- **Shared `.slide-body` wrapper.** Wrap stacked h2/lede/list/callout content in `<div className="slide-body wide">` (or `.narrow`). It's a flex-column with consistent `gap` and zero per-child margins — replaces ad-hoc `style={{ marginTop: '0.5em' }}` between siblings. Variants: `.slide-body--tight`, `.slide-body--loose`. Canonical examples: `Slide-12.tsx`, `Slide-13.tsx`, `Slide-16.tsx`.
- **Strict TS:** `tsconfig.app.json` sets `noUnusedLocals` + `noUnusedParameters`. Build fails on stray imports.

## Dependencies — kept minimal on purpose

Only added third-party dep is **`d3-scale`** (`scaleLinear`, `scaleLog`). No charting library (recharts/visx/etc.), no animation library — all SVG is hand-rolled in `src/components/charts/` for full styling control on the dark theme. Don't add a chart lib without strong reason.

## Build / dev

```bash
npm run dev      # vite dev server
npm run build    # tsc -b && vite build  → ./dist
npm run preview  # serve ./dist
```

Build must stay green; the GH Action runs `npm ci && npm run build` and fails the deploy on any TS error.
