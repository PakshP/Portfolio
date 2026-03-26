import type { Project } from "@/lib/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-[32rem] w-[min(88vw,38rem)] shrink-0 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="relative mb-5 h-56 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 88vw, 38rem"
        />
      </div>
      <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
        <span>{project.year}</span>
        <span className="text-cyan-700">{project.category}</span>
      </div>
      <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-slate-900">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-cyan-700"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

