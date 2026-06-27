# Contributing to Unsolved

Thanks for your interest in improving **Unsolved**! This is a small, friendly
project and contributions of all kinds are welcome — whether that's fixing a
typo, improving the accessibility of a component, or (most valuably) helping
keep the mystery dataset accurate and honestly framed.

## Code of conduct

Be kind and assume good faith. We're here to build a careful, honest archive,
not to argue about the paranormal.

## The golden rule for data contributions

This project lives or dies by its **honesty**. Every entry in
[`src/data/mysteries.js`](src/data/mysteries.js) must:

- State only what is **documented**, not what is sensational.
- Describe **specifically** what remains unexplained — not a vague "nobody
  knows".
- Label each theory by **how supported it actually is**.
- Include an honest `unsolvedMeaning` that distinguishes "genuinely no evidence
  either way" from "likely explained but unproven" from "possibly a hoax".
- Cite real, checkable **sources**.
- Provide a `wikipedia` field with the exact article title — that's all the app
  needs to fetch a real lead image (and attribution) at runtime. No image files
  to commit.

Pull requests that add clickbait, assert paranormal explanations as fact, or
drop sourcing will be asked for revisions.

## Filing issues

Found a factual error, a broken link, a bug, or have an idea for a new entry?
Please [open an issue](../../issues/new/choose) and include:

- **For bugs:** what you did, what you expected, what happened, plus your
  browser/OS and a screenshot if visual.
- **For data corrections:** the entry, the specific claim, and a source for the
  correction.
- **For new mysteries:** why it's genuinely unresolved (not merely "spooky").

## Development setup

```bash
git clone https://github.com/<your-username>/unsolved.git
cd unsolved
npm install
npm run dev
```

Before opening a PR, please make sure these all pass locally:

```bash
npm run format   # apply Prettier
npm run lint     # ESLint, zero warnings
npm run build    # production build must succeed
```

CI runs `lint` + `build` on every push and PR, so it's quickest to catch issues
before pushing.

## Branch naming

Use short, descriptive, kebab-case branches with a type prefix:

- `feat/` — a new feature (e.g. `feat/search-box`)
- `fix/` — a bug fix (e.g. `fix/map-pin-overlap`)
- `data/` — dataset additions or corrections (e.g. `data/add-eilean-mor`)
- `docs/` — documentation only (e.g. `docs/readme-screenshot`)
- `chore/` — tooling/config (e.g. `chore/bump-vite`)

## Pull request process

1. Fork the repo and create your branch from `main`.
2. Make your change; keep the diff focused on one thing.
3. Run format, lint, and build (see above).
4. Open a PR against `main` with a clear title and description. Reference any
   issue it closes (`Closes #123`).
5. For data changes, list your sources in the PR description.
6. A maintainer will review. Small, well-sourced PRs are merged quickly.

Thank you for helping keep the record straight. 🔍
