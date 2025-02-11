import ThemeToggle from "./components/theme-toggle"
import { ProgressBar } from "./components/progress-bar"
import { Code, Database, Globe, Wrench, Mail, Github, Linkedin } from "lucide-react"
import { MobileNav } from "./components/mobile-nav"
import { ProjectCard } from "./components/project-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import {Bungee} from "next/dist/compiled/@next/font/dist/google";
import ContactForm from "@/app/components/contact-form";
import { FaArrowLeft } from "react-icons/fa";
import Home from "@/app/page.tsx"; 

export default function WatchLogApp() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <header className="flex justify-center sticky top-0 z-40 w-full drop-shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <a href="" className="flex items-center ml-20 space-x-2">
                        <FaArrowLeft className="h-8 w-8 drop-shadow-lg" />
                    </a>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-2xl font-bold transition-colors hover:text-primary">
                            WatchLog
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
                <section className="relative flex justify-center bg-amber-500 md:flex-row">
                    {/* Right Side (Text) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 text-center">
                        <div className="max-w-xl mx-auto my-20 md:my-60">
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
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 drop-shadow-lg">
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
            </main>

            <footer className="flex justify-center py-6 md:py-8">
                <div className="container text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Paksh Patel. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
