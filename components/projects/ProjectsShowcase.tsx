"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

type ProjectsShowcaseProps = {
  projects: Project[];
};

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current || !sectionRef.current) {
        return;
      }

      const sectionWidth = sectionRef.current.clientWidth;
      const viewportHeight = window.innerHeight;
      const trackWidth = trackRef.current.scrollWidth;
      const horizontalDistance = Math.max(trackWidth - sectionWidth, 0);

      setScrollDistance(horizontalDistance);
      setSectionHeight(Math.max(viewportHeight * 1.35, viewportHeight + horizontalDistance));
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <>
      <div className="space-y-4 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div ref={sectionRef} className="relative hidden md:block" style={{ height: sectionHeight || "220vh" }}>
        <div className="sticky top-28 overflow-hidden py-6">
          <motion.div
            ref={trackRef}
            className="flex gap-8"
            style={{ x: prefersReducedMotion ? 0 : x }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

