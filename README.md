# FencingPatrolWeb — FencingPatrol

Standalone client site for FencingPatrol (family-owned general contractor —
roofing, fencing, paving; Long Island / NYC; bilingual). Built on the shared
component library **`@aagf470/ui`**.

## Prerequisites — one-time auth

`@aagf470/ui` lives on GitHub Packages, which requires a token even to install.

1. Create a **classic** GitHub PAT with the **`read:packages`** scope
   (github.com/settings/tokens). If the `cryarkWebsite` repo the package is
   published from is private, also tick `repo`.
2. Export it in your shell:
   ```bash
   export NODE_AUTH_TOKEN=ghp_your_classic_token
   ```
   The repo's `.npmrc` reads this env var — the token is never committed.

## Run it

```bash
npm install        # pulls @aagf470/ui from GitHub Packages
npm run dev        # local dev server
npm run build      # → dist/  (static SPA, deploy anywhere)
```

## Updating the component library

```bash
npm update @aagf470/ui   # opt in to a new library release, on your schedule
```

## Deploy

`npm run build` → static `dist/`. Serve with any static host. FencingPatrol is a
single page, so an SPA fallback isn't strictly required, but it doesn't hurt.
