# Portfolio

A dark, high-contrast personal portfolio showcasing software engineering projects, coursework, and technical expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for a refined, performant user experience.

## Featured Projects

- **F1 Telem** — Desktop app for recording F1 25 UDP telemetry with distance-normalized lap data export (C#, WPF, .NET 8)
- **Midnight on Main** — First-person stealth puzzle game built in Godot with team collaboration (Godot, Blender, 3D Game Dev)
- **WorldTools Fork** — Maintained Fabric-only fork of WorldTools for Minecraft 1.21.11 with modern API updates (Java 21, Fabric, Open Source)
- **Portfolio** — This site: high-performance personal website with refined typography and responsive design (Next.js, TypeScript, Tailwind CSS)

## Tech Stack

**Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React

**Languages:** Python, TypeScript, JavaScript, Java, C#, SQL, HTML, CSS

**Backend & Tools:** Node.js, REST APIs, PostgreSQL, Spring Boot, .NET Framework, Docker, Git, CI/CD

**Game Dev:** Godot, Blender, Unity, Game Design

## Sections

- **Hero** — Introduction with serif typography and call-to-action
- **Projects Showcase** — Sticky horizontal carousel of featured work
- **Journey** — Vertical timeline of experience and education
- **Coursework** — Academic projects and relevant course highlights
- **Skills** — Categorized technical expertise (Languages, Frontend, Backend, DevOps)
- **References** — Expertise areas with detailed breakdowns

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` to view the portfolio.

## Project Structure

- `app/page.tsx` — Top-level page composition
- `app/layout.tsx` — Root layout with theme provider
- `components/sections/*` — Hero, journey, coursework, skills, and timeline sections
- `components/projects/*` — Project showcase, cards, and grid layouts
- `components/ui/*` — Reusable animated components and primitives
- `lib/*.ts` — Typed data for projects, skills, coursework, timeline, and utilities

## Customization

Edit the data files to update your portfolio content:

- `lib/projects.ts` — Featured projects
- `lib/skills.ts` — Skill categories and expertise
- `lib/coursework.ts` — Academic courses and projects
- `lib/timeline.ts` — Experience and journey events
- `lib/references.ts` — Expertise references and categories
