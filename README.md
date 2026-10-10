# Alishbah K. — Portfolio

Personal portfolio with two tracks: engineering projects and creative / e-commerce work.

**Live:** https://alishbahkap.github.io

## Stack

- [Next.js](https://nextjs.org) (App Router), exported as a static site
- TypeScript
- Tailwind CSS v4
- GitHub Pages, deployed with GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:3000.

## Project structure

```
src/
  app/          pages (each folder is a route; [slug] folders are per-project pages)
  components/   shared UI: breadcrumb bar, image frames, gallery, masonry
  content/      project text and data: engineering.ts, creative.ts, site.ts
  lib/          image lookup helpers
public/work/    project photos, matched to projects by file name
```

## Adding content

- **Text:** edit the project lists in `src/content/`.
- **Images:** add a file to `public/work/` named after its slot (e.g. `brewos-cover.jpg`, `brewos-1.jpg`). Until a file exists, a placeholder of the same shape is shown.

## Deploy

Run the **Deploy to GitHub Pages** workflow from the Actions tab.
