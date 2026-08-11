# Pentagram — recreation

A Next.js (App Router) recreation of the [pentagram.com](https://www.pentagram.com) website, built for study.

## Features

- **Homepage** — full-bleed hero with a cross-fading slider and the signature "We design ___ for ___" pill that detaches and sticks to the bottom on scroll
- **Dark feature section** + a "See latest projects" **masonry** grid
- **Case studies** (`/work/[slug]`) — full-bleed media, and an "About the project" panel that splits the layout (media left, credits right)
- **About** and **News** pages
- Scroll-reveal, hover, and page transitions; responsive; reduced-motion aware

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Notes

Tile visuals are original CSS-generated graphics (Pentagram's real photography is copyrighted), and the projects are invented stand-ins. Structure, layout, typography, and interactions mirror the real site. Not affiliated with Pentagram.
