# Unsolved — The Last Mysteries Map

> A world map of genuinely unresolved historical mysteries, presented as an honest research archive — not a clickbait mystery blog.

[![CI](https://github.com/your-username/unsolved/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/unsolved/actions/workflows/ci.yml)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/unsolved)
[![License: MIT](https://img.shields.io/badge/License-MIT-cc785c.svg)](LICENSE)

> [!NOTE]
> Replace `your-username` in the badge and deploy URLs above with your GitHub
> username (or org) once you've pushed the repo, so the CI badge and one-click
> deploy button resolve correctly.

---

## Screenshots

<!--
  📸 ADD YOUR MEDIA HERE.
  1. Run the app (`npm run dev`), take a screenshot of the map view and an open
     case file (ideally also a short GIF of filtering + opening an entry).
  2. Save them under `docs/` (e.g. docs/screenshot-map.png, docs/demo.gif).
  3. Replace the placeholders below.
-->

| Map view                                     | Case file                                         |
| -------------------------------------------- | ------------------------------------------------- |
| _`docs/screenshot-map.png` — add screenshot_ | _`docs/screenshot-casefile.png` — add screenshot_ |

_Optional: a short GIF at `docs/demo.gif` showing filtering by category and opening a case file._

## Live demo

🔗 **[Add your deployed URL here]** (e.g. `https://unsolved.vercel.app`)

## What it is

**Unsolved** is a single-page app that plots genuinely unresolved historical
mysteries on an old-atlas world map. Each entry is filed like a research case:
what is actually documented, what _specifically_ remains unexplained, the
leading theories (labelled by how supported they really are), and — crucially —
an honest framing of what "unsolved" _means_ in that particular case.

That last part is the whole point. The archive deliberately distinguishes:

- **Genuinely no evidence either way** (e.g. the Voynich Manuscript, the Wow! signal)
- **Likely explained but not proven** (e.g. the Mary Celeste, Dyatlov Pass)
- **Broadly explained, only details open** (e.g. the Tunguska event)
- **Possibly a hoax / possibly unsolvable** (e.g. the Beale Ciphers)

## Features

- 🗺️ **Interactive world map** (Leaflet) with clickable, category-coloured pins
  across **232 curated cases** spanning antiquity to the present (and counting).
- 🖼️ **Real lead images** fetched at runtime from Wikipedia/Wikimedia Commons by
  article title — no API key, no hardcoded URLs, graceful placeholder when none
  exists. Adding a new mystery only needs a one-line `wikipedia:` field.
- 🗂️ **Full "case file" for every entry** — documented facts, the specific open
  question, leading theories, sources, and an explicit "what unsolved means here".
- 🔍 **Filter by category** — Disappearances · Ciphers & Documents · Unexplained
  Events · Unexplained Phenomena.
- 🎲 **Mystery of the Day** — a deterministic daily pick (stable across reloads)
  surfaced on load to encourage exploration.
- 📜 **Archival / case-file aesthetic** — aged-paper cream canvas, serif display
  type, an atlas-toned map, and dark "dossier" detail panels.
- 🌗 **Light / dark theme toggle** — remembers your choice (localStorage) and
  defaults to your OS preference; the map swaps to dark cartography in dark mode.
- ♿ **Keyboard & screen-reader friendly** — dialog semantics, Escape-to-close,
  and a text index of all cases beneath the map as a non-map fallback.
- 🔑 **No API keys required** — uses CARTO's keyless basemap tiles out of the box.

## Tech stack

| Area       | Choice                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Framework  | [React 18](https://react.dev/)                                                                          |
| Build tool | [Vite 5](https://vitejs.dev/)                                                                           |
| Styling    | [Tailwind CSS 3](https://tailwindcss.com/) (design tokens from `design.md`)                             |
| Map        | [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/), CARTO basemap tiles |
| Tooling    | ESLint, Prettier                                                                                        |
| CI         | GitHub Actions                                                                                          |
| Deploy     | Vercel (config included)                                                                                |

## Prerequisites

- **Node.js 20+** (the project is built and CI-tested on Node 20; Node 18+ should work)
- **npm 9+** (ships with Node 20)

## Installation

```bash
# 1. Clone
git clone https://github.com/your-username/unsolved.git
cd unsolved

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

To produce and preview a production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

### Available scripts

| Script                 | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR            |
| `npm run build`        | Production build to `dist/`                   |
| `npm run preview`      | Preview the production build locally          |
| `npm run lint`         | Run ESLint (zero warnings allowed)            |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing (used in CI) |

## Environment variables

**None are required.** The app uses CARTO's keyless map tiles and runs entirely
in the browser, so it works with no configuration.

A single **optional** override is supported, documented in
[`.env.example`](.env.example):

| Variable            | Default           | Purpose                               |
| ------------------- | ----------------- | ------------------------------------- |
| `VITE_MAP_TILE_URL` | CARTO `light_all` | Swap in a different XYZ tile provider |

To use it, copy the example file and edit:

```bash
cp .env.example .env
```

> ⚠️ Vite only exposes variables prefixed with `VITE_` to the browser, and
> anything exposed to the browser is **public**. Never put real secrets in a
> `VITE_` variable — use a referer-restricted tile key if your provider needs one.

## Usage

1. **Browse the map.** Pins are coloured by category. The pin with a coral ring
   is the current _Mystery of the Day_.
2. **Open a case file.** Click any pin (or any card in the index list below the
   map) to slide open the full dossier. Press **Escape** or click the backdrop
   to close.
3. **Filter.** Use the category tabs to narrow the map and index to a single
   category; click the active tab (or **All**) to reset.
4. **Read honestly.** Every case ends with a "What 'unsolved' means here"
   section — read it. It's the difference between this archive and a mystery blog.

## Project structure

```
unsolved/
├── .github/workflows/ci.yml   # GitHub Actions: format-check, lint, build
├── public/
│   └── favicon.svg            # The radial spike-mark glyph
├── src/
│   ├── components/
│   │   ├── TopNav.jsx          # Cream sticky nav + wordmark
│   │   ├── FilterBar.jsx       # Category filter tabs
│   │   ├── MysteryMap.jsx      # Leaflet atlas + category-coloured pins
│   │   ├── MysteryPanel.jsx    # Dark "case file" detail drawer
│   │   ├── MysteryOfTheDay.jsx # Coral daily-feature callout card
│   │   ├── MysteryImage.jsx    # Real Wikimedia lead image w/ loading + fallback
│   │   └── SpikeMark.jsx       # Inline SVG brand glyph
│   ├── data/
│   │   ├── mysteries.js        # ← The seeded dataset (the heart of the app)
│   │   └── categories.js       # Category definitions + pin colours
│   ├── hooks/
│   │   └── useTheme.js         # Light/dark theme state + persistence
│   ├── lib/
│   │   └── wikimedia.js        # Keyless Wikipedia image fetch (cached)
│   ├── App.jsx                 # Layout + state (filter / selection / daily pick)
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind layers, paper texture, atlas styling
├── tailwind.config.js          # Design tokens transcribed from design.md
├── vercel.json                 # Vercel build + SPA rewrite config
└── .env.example                # Optional env var documentation
```

The most interesting file is [`src/data/mysteries.js`](src/data/mysteries.js):
each entry follows a strict editorial schema (documented facts, specific open
question, supported theories, honest "unsolved" framing, real sources).

## Contributing

Contributions are very welcome — especially data corrections and well-sourced
new entries. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow,
branch-naming convention, and the **golden rule on honesty** that governs the
dataset. In short: open an issue to discuss, branch from `main` with a
`feat/`, `fix/`, `data/`, or `docs/` prefix, and make sure `npm run lint` and
`npm run build` pass before opening a PR.

## Deployment

This project is **optimized for [Vercel](https://vercel.com/)** and ships with a
[`vercel.json`](vercel.json) that sets:

- **Framework:** `vite`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **SPA rewrite:** all routes → `index.html`

One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/unsolved)

It also deploys cleanly to **Netlify** or any static host — just use build
command `npm run build` and publish directory `dist`.

## License

Released under the [MIT License](LICENSE).

## Credits & acknowledgments

- **Map tiles:** © [OpenStreetMap](https://www.openstreetmap.org/copyright)
  contributors, © [CARTO](https://carto.com/attributions) (`light_all` / `dark_all` basemaps).
- **Images:** lead photos are fetched at runtime from the
  [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) and originate on
  [Wikimedia Commons](https://commons.wikimedia.org/); each remains under its own
  license, and the case file links back to the source article.
- **Mapping library:** [Leaflet](https://leafletjs.com/) and
  [react-leaflet](https://react-leaflet.js.org/).
- **Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond),
  [Inter](https://fonts.google.com/specimen/Inter), and
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts —
  open-source substitutes for the licensed Copernicus / StyreneB design typefaces.
- **Design system:** visual tokens (cream + coral + dark navy, serif display)
  transcribed from the provided `design.md`.
- **Mystery data:** compiled from public historical and scientific records;
  per-entry sources are listed inside each case file. This archive is for
  research and curiosity, summarising the documented record without asserting
  paranormal explanations.
