import ThemeToggle from "./components/theme-toggle"
import { ProgressBar } from "./components/progress-bar"
import { Code, Database, Globe, Wrench, Mail, Github, Linkedin } from "lucide-react"
import { MobileNav } from "./components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-6 mx-auto">
            <MobileNav />
            <a href="#" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-full" />
              <span className="font-bold">Portfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
              <a href="#languages" className="text-sm font-medium transition-colors hover:text-primary">
                Languages
              </a>
              <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                Skills
              </a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-6xl mb-4 font-bold tracking-tighter animate-fade-up">Paksh Patel</h1>
          <p className="text-xl mb-2 text-muted-foreground max-w-[600px] mx-auto animate-fade-up">
            A motivated Computer Science student with a passion for building creative applications using modern technologies.
          </p>
          <p className="text-xl mb-4 text-muted-foreground max-w-[600px] mx-auto animate-fade-up">
            Dedicated to delivering impactful, user-focused solutions in software and web development.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 animate-fade-up"
          >
            Contact Me
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">About Me</h2>
          <div className="space-y-6 text-muted-foreground max-w-3xl mx-auto">
            <p>
              I’m a <b>Computer Science student</b> at the University of South Carolina with a strong passion for
              creating
              impactful software adesigning applications thbring ideas to life. expertise lies in <b>full-stack
              development</b>,
              with hands-on experience building dynamic <b>wapplications, efficiedatabase systems, and
              intuitive user interfaces</b>.
              I have a particular interest <b>game development</b> alove exploring how softwasolutions
              can enhance gaming experiencor complement the gamiindustry.
            </p>
            <p>
              When I’m not coding, I enjoy exploring the intersection of technology and creativity, diving
              into <b>game development,
              computer systems, and graphidesign</b>. Whether itdesigning <b>intuitiinterfaces,
              optimizing game mechanics,
              or building interactiapplications</b>, I’m alwalooking for ways to blefunctionality with
              aesthetics to engage users aelevate their experience.
            </p>
            <p>
              I’m eager to take on <b>internship</b> and <b>job opportunities</b> where I can apply my skills, collaborate on innovative projects, 
              and grow as a developer. you’re looking for someowho’s <b>passionate, versatiland driven</b> to delivexceptional results, letconnect!
            </p>
          </div>
        </section>

        {/* Programming Languages Section */}
        <section id="languages" className="py-12 md:py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Programming Languages</h2>
          <div className="grid gap-6 max-w-2xl mx-auto">
            <ProgressBar label="Java" progress={90} />
            <ProgressBar label="Python" progress={85} />
            <ProgressBar label="C++" progress={75} />
            <ProgressBar label="JavaScript" progress={95} />
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-12 md:py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
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
                <Database className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
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
                <Code className="h-5 w-5" />
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
          <div className="max-w-md mx-auto text-center space-y-8">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <div className="space-y-4">
              <a
                href="mailto:paksh@email.sc.edu"
                className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                paksh@email.sc.edu
              </a>
              <a
                href="mailto:pakshpatel1@gmail.com"
                className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
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
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/paksh-patel"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Paksh Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

