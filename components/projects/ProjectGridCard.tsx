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
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl glass-card transition-all duration-300",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-900/50">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
          <span>{project.year}</span>
          <span className="text-emerald-400">{project.category}</span>
        </div>

        <h3 className="font-heading text-[1.7rem] font-bold text-slate-100">{project.title}</h3>
        {project.isInProgress ? (
          <p className="-mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-[0.14em] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            In Progress
          </p>
        ) : null}
        <p className="text-base leading-7 text-slate-400">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-emerald-400 transition-colors hover:text-emerald-300"
        >
          <LuGithub />
          <span>Source Code</span>
        </a>
      </div>
    </article>
  );
}
