# Jauvis Dozier — Portfolio

A dark, editorial UX/product design portfolio built with Next.js 16 (App
Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — homepage (hero, selected work, capabilities, tools,
  process, about, final CTA)
- `src/app/work/tesla/page.tsx` — Tesla Homepage Redesign case study
- `src/app/work/discord/page.tsx` — Discord notifications & search case study
- `src/app/about/page.tsx` — full about page
- `src/components/` — homepage sections
- `src/components/case-study/` — shared case-study building blocks
  (hero, numbered section headings, callouts, image frames, device grids)
- `src/lib/data.ts` — all site copy and project metadata in one place

## Still to do

- **Resume**: `public/resume.pdf` is already wired to the "Download Resume"
  buttons — replace the file whenever the resume is updated (same filename,
  same path).
- **LinkedIn / email**: set in `src/lib/data.ts` (`site.linkedin`,
  `site.email`) — update there if either changes.

## Image sources

- Discord case-study mockups (`public/images/discord/`) were extracted from
  the original case-study export via `scripts/extract-discord-images.js`
  (kept for reference/reproducibility — not part of the app build). The case
  study's hero image is a Mockuuups Studio lifestyle mockup composited with
  the real "Server notifications" screen.
- Tesla final-design imagery (`public/images/tesla/hero-band.jpg`,
  `full-homepage.jpg`, `cybertruck-band.jpg`) came straight from the
  Tesla-Prototype Figma file via the Figma MCP; the laptop/tablet device
  shots (`final-*.jpg`) were cropped out of a single exported presentation
  frame via `scripts/crop-tesla-frame.js`. `model-3/x/y.jpg` and
  `cybertruck.jpg` are the source vehicle photography used in the redesign.

## Deploying

Any Next.js host works (Vercel is the simplest). `npm run build` produces a
fully static export of every route — no server-side data fetching is used.
