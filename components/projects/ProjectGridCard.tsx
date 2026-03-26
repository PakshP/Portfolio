import Image from "next/image";
import { LuGithub } from "react-icons/lu";

import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectGridCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectGridCard({ project, className }: ProjectGridCardProps) {
  return (
    <article className={cn("flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md", className)}>
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
          <span>{project.year}</span>
          <span className="text-cyan-700">{project.category}</span>
        </div>

        <h3 className="font-heading text-[1.7rem] font-bold text-slate-900">{project.title}</h3>
        {project.isInProgress ? (
          <p className="-mt-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-600">
            Currently working on
          </p>
        ) : null}
        <p className="text-base leading-7 text-slate-600">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-600"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-cyan-700 transition-colors hover:text-cyan-600"
        >
          <LuGithub />
          <span>Source Code</span>
        </a>
      </div>
    </article>
  );
}

