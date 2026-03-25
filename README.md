# Portfolio

Dark, high-contrast portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Sections

- Hero intro with serif headline and accent CTAs
- Curated writing and research feed
- Sticky horizontal projects showcase
- Vertical timeline for journey and experience
- Accordion references for expertise categories

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project Structure

- `app/page.tsx`: top-level page composition
- `components/sections/*`: hero, writing, journey, references sections
- `components/projects/*`: modular project showcase and cards
- `lib/*.ts`: typed content data for each section
