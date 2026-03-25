import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import { projects } from "@/lib/projects";
import { FadeInUp, SectionHeader } from "@/components/ui/AnimatedComponents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-y border-[#D7DCE5] bg-[#F9FAFC] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Project Showcase"
          title="Selected Engineering Work"
          description="Scroll to move through the project gallery. The section is stretched to full width for a wider showcase."
        />

        <FadeInUp delay={0.3} className="mt-10">
          <ProjectsShowcase projects={projects} />
        </FadeInUp>
      </div>
    </section>
  );
}

