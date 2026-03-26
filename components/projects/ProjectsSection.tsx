import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import { projects } from "@/lib/projects";
import { FadeInUp, SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-sky-50/50 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Projects"
        title="Selected projects"
        description="A stacked card showcase where projects layer as you scroll through recent engineering work."
      />
      <SectionReveal>
        <FadeInUp delay={0.3} className="mt-10">
          <ProjectsShowcase projects={projects} />
        </FadeInUp>
      </SectionReveal>
      </div>
    </section>
  );
}

