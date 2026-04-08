import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/AnimatedComponents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Projects I've Worked On"
          description="Scroll through full-screen project cards — each one with details, tech stack, and source links."
        />
      </div>

      <ProjectsShowcase projects={projects} />

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
