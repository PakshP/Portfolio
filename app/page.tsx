import ThemeToggle from "./components/theme-toggle"
import { ProgressBar } from "./components/progress-bar"
import { Code, Database, Globe, Wrench, Mail, Github, Linkedin } from "lucide-react"
import { MobileNav } from "./components/mobile-nav"
import { ProjectCard } from "./components/project-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Bungee} from "next/dist/compiled/@next/font/dist/google";

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <header className="flex justify-center sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <a href="#" className="flex items-center ml-20 space-x-2">
              <img
                  src="https://pakshp.github.io/Portfolio/public/logo-home.png"
                  alt="Portfolio Home"
                  className="h-10 w-10"
              />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#hero" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </a>
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
              <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
            <div className="flex items-center mr-20 gap-4">
              <MobileNav />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="hero" className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="relative flex flex-col md:flex-row">
            {/* Left Side (Image) */}
            <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-fit overflow-hidden md:block hidden">
              <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://pakshp.github.io/Portfolio/public/IMG_6399.JPG')`
                  }}
              ></div>
            </div>

            {/* Right Side (Text) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 text-center">
              <div className="max-w-xl mx-auto my-20 md:my-60">
                <div className="md:hidden mb-4">
                  <img
                      src="https://pakshp.github.io/Portfolio/public/IMG_6399.JPG"
                      alt="Paksh Patel"
                      className="rounded-full w-40 h-40 mx-auto"
                  />
                </div>
                <h1 className="text-6xl md:text-9xl mb-4 font-bold tracking-tighter animate-fade-up">
                  Paksh Patel
                </h1>
                <p className="text-md md:text-xl mb-2 animate-fade-up">
                  A motivated Computer Science student with a passion for building
                  creative applications using modern technologies.
                </p>
                <p className="text-md md:text-xl mb-6 animate-fade-up">
                  Dedicated to delivering impactful, user-focused solutions in
                  software and web development.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium 
             ring-offset-background transition-colors focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
             disabled:pointer-events-none disabled:opacity-50 bg-primary 
             text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 animate-fade-up"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 mx-5">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <div className="space-y-6 mx-auto text-lg">
              <p>
                I'm a <b>Computer Science student</b> at the University of South Carolina with a strong passion for
                creating impactful software and designing applications that bring ideas to life. My expertise lies in
                <b> full-stack development</b>, with hands-on experience building dynamic <b>web applications, efficient
                database systems, and intuitive user interfaces</b>. I have a particular interest in <b>game
                development</b> and
                enjoy exploring how software solutions can enhance gaming experiences or complement the gaming industry.
              </p>
              <p>
                When I'm not coding, I enjoy exploring the intersection of technology and creativity, diving into
                <b> game development, computer systems, and graphic design</b>. Whether it's designing
                <b> intuitive interfaces, optimizing game mechanics, or building interactive applications</b>, I'm
                always looking
                for ways to blend functionality with aesthetics to engage users and elevate their experience.
              </p>
              <p>
                I'm eager to take on <b>internship</b> and <b>job opportunities</b> where I can apply my skills,
                collaborate on innovative projects, and grow as a developer. If you're looking for someone who's
                <b> passionate, versatile, and driven</b> to deliver exceptional results, let's connect!
              </p>

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 mx-5">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                  title="DegreeAudit"
                  description="A desktop application created by me and a team of 4 others for our Software Engineering class. The application is used to help students track their progress towards their degree."
                  technologies={["Java", "JavaFX", "JSON"]}
                  githubUrl="https://github.com/AlexRishmawi/degreeauditGUI"
              />
              <ProjectCard
                  title="ModCompany-Installer"
                  description="A desktop application for installing mods for Lethal Company. I created this to make it easy for friends to install and uninstall mods."
                  technologies={["Python", "GoogleDrive API"]}
                  githubUrl="https://github.com/PakshP/ModCompany-Installer"
              />
              <ProjectCard
                  title="PhantomToggle"
                  description="PhantomToggle is a simple Minecraft Spigot plugin that allows players to toggle the spawning of phantoms for themselves. This plugin is perfect for servers where players want to avoid phantoms without using beds."
                  technologies={["Java"]}
                  githubUrl="https://github.com/PakshP/PhantomToggle"
              />
            </div>
          </section>

          {/* Programming Languages Section */}
          <section className="mx-5">
            <h2 className="text-2xl font-bold mb-6">Programming Languages</h2>
            <div className="grid gap-6 mx-auto">
              <ProgressBar label="Java" progress={90}/>
              <ProgressBar label="Python" progress={85}/>
              <ProgressBar label="C++" progress={75}/>
              <ProgressBar label="JavaScript" progress={80}/>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section id="skills" className="py-12 md:py-16 mx-5">
            <h2 className="text-2xl font-bold mb-6 text-center">Other Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5"/>
                  <h3 className="text-xl font-semibold">Web Technologies</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5"/>
                  <h3 className="text-xl font-semibold">Databases</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5"/>
                  <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>AppSheet</li>
                  <li>Android Studio</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5"/>
                  <h3 className="text-xl font-semibold">Other Skills</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>RESTful APIs</li>
                  <li>GoogleDrive API</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-16">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <a
                      href="mailto:paksh@email.sc.edu"
                      className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5"/>
                    paksh@email.sc.edu
                  </a>
                  <a
                      href="mailto:pakshpatel1@gmail.com"
                      className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5"/>
                    pakshpatel1@gmail.com
                  </a>
                </div>
                <div className="flex justify-center gap-6">
                  <a
                      href="https://github.com/pakshp"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6"/>
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                      href="https://linkedin.com/in/paksh-patel"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6"/>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="border-t flex justify-center py-6 md:py-8">
          <div className="container text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Paksh Patel. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}
