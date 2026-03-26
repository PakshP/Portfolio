"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@/lib/projects";
import ProjectGridCard from "@/components/projects/ProjectGridCard";

type ProjectsShowcaseProps = {
  projects: Project[];
};

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectGridCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="relative hidden md:block">
        <div className="space-y-[16vh] pb-[16vh]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="sticky top-24 h-[calc(100vh-7rem)] px-2"
              style={{ zIndex: index + 1 }}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <ProjectGridCard
                project={project}
                className="mx-auto h-full w-full max-w-5xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

