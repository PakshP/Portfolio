import type { Project } from "@/lib/projects";
import { colors } from "@/lib/theme";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-[28rem] w-[min(88vw,34rem)] shrink-0 flex-col rounded-2xl border border-[#D7DCE5] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className={`mb-5 rounded-xl border border-[#D7DCE5] bg-gradient-to-br from-[${colors.gradient1}] to-[${colors.lightBorder}] p-10 text-center text-sm text-[#6D7B90]`}>
        Project Preview
      </div>
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[#6D7B90]">
        <span>{project.year}</span>
        <span className={`text-[${colors.secondary}]`}>{project.category}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-[#2A3B55]">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#4E5F7A]">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-full border border-[#D7DCE5] bg-[${colors.backgroundAlt}] px-3 py-1 text-xs font-medium text-[#2A3B55]`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

