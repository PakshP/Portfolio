import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { LuDownload, LuContact } from "react-icons/lu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <NavBar />
      <main className="mx-auto w-full max-w-3/4 px-4 sm:px-6 lg:px-10">
        <section id="about" className="py-10 sm:py-14">
          <h2 className="text-xl font-semibold sm:text-6xl">Paksh Patel</h2>
          <div className="relative mx-auto flex items-center">
            <p className="mt-2 max-w-prose text-lg text-muted-foreground sm:text-lg">
              I am a <b>software developer</b> passionate about building impactful applications and continuously learning new technologies. I am well versed in <b>full-stack development</b> and enjoy working on projects that challenge me to grow my skills.
            </p>

            <div className="flex w-full items-center justify-center gap-3">
              <Button className="px-7 py-6 text-lg" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
                <LuDownload />
              </Button>
              <Button variant="outline" className="bg-white px-7 py-6 text-lg">
                Contact Me
                <LuContact />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="projects" className="border-t border-border py-10 sm:py-14">
          <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            Placeholder content.
          </p>
        </section>

        <section
          id="experience" className="border-t border-border py-10 sm:py-14">
          <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            Placeholder content.
          </p>
        </section>

        <section id="contact" className="border-t border-border py-10 sm:py-14">
          <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            Placeholder content.
          </p>
        </section>

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          Footer placeholder
        </footer>
      </main>
    </div>
  );
}
