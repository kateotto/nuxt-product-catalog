# Nuxt Product Catalog

A Nuxt 4 product-catalog SPA with client-side filtering over a CSV-backed dataset.

Live version: https://nuxt-product-catalog-lyart.vercel.app/

## Requirements

- Node.js `>= 20.12.0` (tested on Node 20.12+)

## Setup

Run all commands from the project root (`nuxt-product-catalog/`):

```bash
cd nuxt-product-catalog
npm install
npm run dev
```

Dev server runs at http://localhost:3000.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the build locally
- `npm run lint:fix` — lint and autofix
- `npm run format` — Prettier

## How it works

- Products live in [server/assets/data/products.csv](server/assets/data/products.csv) and are served by [server/api/products.get.ts](server/api/products.get.ts).
- [app/composables/useProducts.ts](app/composables/useProducts.ts) holds all shared filter state (search, category, manufacturer, price range) and exposes `filteredProducts`. Every filter component calls it directly.
- Editing the CSV requires restarting the dev server.

## Credits

Code in this repository was generated with the assistance of [Claude](https://claude.com/claude-code).
