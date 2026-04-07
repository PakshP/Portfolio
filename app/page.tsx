import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CourseworkEducationSection from "@/components/sections/CourseworkEducationSection";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="w-full">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CourseworkEducationSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
