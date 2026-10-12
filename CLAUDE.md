# tilman.io

Personal website of Tilman Frick, built with Astro (static output) and Sass.

## Commands

- `npm install` – install dependencies
- `npm run dev` – dev server at `localhost:4321`
- `npm run build` – `astro check` (type check) + `astro build` to `./dist/`. Run this before every push.

## Structure

- `src/pages/` – routes (`index`, `music/`, `legal/`)
- `src/components/`, `src/layouts/` – Astro components
- `src/data/` – JSON content (e.g. music releases)
- `src/images/` – images processed by Astro's image pipeline
- `public/` – static files served as-is

## Deployment

`.github/workflows/deploy.yml` builds with `withastro/action` on every push to `main` and copies `dist/` to the server via SCP. Its Node version must satisfy Astro's `engines.node` requirement. Check it whenever Astro gets a major upgrade.

## Commit messages

Use Conventional Commits, matching the existing history:

```
<type>: <short lowercase summary>
```

- Types: `feat` (new content/feature), `fix` (bug fix), `chore` (dependencies, tooling, CI)
- Optional scope, e.g. `chore(deps): bump astro to 7.3.8`
- Summary is lowercase, imperative, no trailing period, e.g. `chore: upgrade packages`
- PR titles follow the same format, so squash-merge commits do too.
