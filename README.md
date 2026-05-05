# Portfolio

A personal portfolio site for **Paksh Patel** — a dark, high-contrast showcase of software engineering projects, coursework, and technical expertise. Built with the Next.js App Router, React 19, TypeScript, Tailwind CSS v4, and Framer Motion for a refined, performant experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?logo=framer)](https://www.framer.com/motion/)

## Featured Projects

| Project | Description | Stack |
| --- | --- | --- |
| **Blender Collab** | Web-based version control for Blender with object-level versioning, content deduplication, and team collaboration. | FastAPI · Next.js · PostgreSQL · S3/MinIO · Docker |
| **Packing Manifest** | Collaborative packing list app for extended travel with a local-first TSA compliance assistant and visual progress tracking. | Next.js 15 · React 19 · TypeScript · Supabase · PostgreSQL |
| **F1 Telem** | Desktop app capturing F1 25 UDP telemetry and exporting distance-normalized lap data for performance analysis. | C# · WPF · .NET 8 · UDP |
| **Midnight on Main** | First-person stealth puzzle game where players evade the Homework Enforcer to escape a university building. | Godot · Blender · 3D Game Dev |

## Tech Stack

- **Framework** — Next.js 16 (App Router), React 19, TypeScript 5
- **Styling** — Tailwind CSS 4, `tw-animate-css`, `tailwindcss-animate`
- **Motion & UI** — Framer Motion 12, Radix UI primitives, Lucide & React Icons
- **Tooling** — ESLint 9, PostCSS, Autoprefixer

## Sections

- **Hero** — Introduction with serif typography and primary call-to-action
- **Skills** — Categorized technical expertise across languages, frameworks, and tools
- **Projects** — Sticky horizontal showcase of featured work with detailed cards
- **Coursework & Education** — Academic highlights and relevant courses
- **Journey** — Vertical timeline of experience and milestones
- **Contact** — Direct links and social channels

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The dev server hot-reloads on file changes.

### Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint with ESLint |

## Project Structure

```
app/
  layout.tsx          # Root layout, font loading, theme bootstrap
  page.tsx            # Top-level page composition
components/
  NavBar.tsx          # Navigation and theme toggle
  Footer.tsx
  projects/           # Project showcase, cards, grid layouts
  sections/           # Hero, Skills, Coursework, Journey, Contact
  ui/                 # Reusable animated primitives
lib/
  projects.ts         # Featured projects + color tokens
  skills.ts           # Skill categories
  coursework.ts       # Academic courses & projects
  timeline.ts         # Experience timeline
  references.ts       # Expertise references
  theme.ts            # Theme helpers
  animations.ts       # Shared motion variants
public/
  projects/           # Project cover images
```

## Customization

All content is data-driven — edit the typed files in `lib/` to update the site without touching components:

- `lib/projects.ts` — Featured projects (title, description, year, tags, image, source URL, in-progress flag)
- `lib/skills.ts` — Skill categories and entries
- `lib/coursework.ts` — Academic courses and projects
- `lib/timeline.ts` — Journey events and milestones
- `lib/references.ts` — Expertise references and categories

Site metadata (title, description) lives in `app/layout.tsx`.

## Deployment

The site is built for any Node-compatible host. For Vercel:

```bash
npm run build
```

then deploy via the Vercel CLI or GitHub integration. No environment variables are required for the base site.

## License

This project is for personal use. Feel free to draw inspiration from the structure, but please do not redistribute the content (copy, project descriptions, or images) as your own.
