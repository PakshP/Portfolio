import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/AnimatedComponents";
import { LuGithub, LuArrowRight } from "react-icons/lu";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Projects I've Worked On"
          description="Scroll through the projects I have worked on, each one includes details, tech stack, and source links."
        />
      </div>

      <ProjectsShowcase projects={projects} />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            More on GitHub
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
            Want to see more?
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Check out the rest of my work, experiments, and contributions on GitHub.
          </p>
          <a
            href="https://github.com/PakshP"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-mono text-xs uppercase tracking-wide text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
          >
            <LuGithub className="h-4 w-4" />
            <span>Visit My GitHub</span>
            <LuArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
