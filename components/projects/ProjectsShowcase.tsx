"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { LuGithub, LuArrowRight } from "react-icons/lu";

import type { Project } from "@/lib/projects";
import { projectColors } from "@/lib/projects";

type ProjectsShowcaseProps = {
  projects: Project[];
};

function FullScreenProject({ project, index, total }: { project: Project; index: number; total: number }) {
  const c = projectColors[index % projectColors.length];

  return (
    <div className="relative h-screen w-screen flex-shrink-0 overflow-hidden">
      {/* Full bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover opacity-100 dark:opacity-30 transition-opacity duration-700"
          sizes="100vw"
          priority={index === 0}
        />
        {/* Color-tinted overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${c.overlayLight} ${c.overlayDark}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 dark:from-[#09090B] dark:via-transparent dark:to-[#09090B]/60" />
      </div>

      {/* Ambient glow blob */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full blur-[150px]"
        style={{
          backgroundColor: `var(--glow-color, ${c.glowLight})`,
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 hidden h-[500px] w-[500px] rounded-full blur-[150px] dark:block"
        style={{ backgroundColor: c.glowDark }}
      />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 block h-[500px] w-[500px] rounded-full blur-[150px] dark:hidden"
        style={{ backgroundColor: c.glowLight }}
      />

      {/* Giant watermark number */}
      <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none font-heading text-[20rem] font-bold leading-none text-slate-900/[0.03] dark:text-white/[0.02] sm:text-[28rem] lg:right-16 lg:text-[36rem]">
        {index + 1}
      </span>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-full border ${c.border} ${c.borderDark} ${c.bg} ${c.bgDark} px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${c.text} ${c.textDark}`}>
              {project.category}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-600">
              {project.year}
            </span>
            {project.isInProgress && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse dark:bg-amber-400" />
                In Progress
              </span>
            )}
          </div>

          <h3 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg sm:leading-8">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border ${c.tagBorder} ${c.tagBorderDark} ${c.tagBg} ${c.tagBgDark} px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider ${c.tagText} ${c.tagTextDark}`}
              >
                {tag}
              </li>
            ))}
          </ul>

          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/link mt-8 inline-flex items-center gap-2 rounded-lg border ${c.border} ${c.borderDark} ${c.bg} ${c.bgDark} px-6 py-3 font-mono text-xs uppercase tracking-wide ${c.text} ${c.textDark} transition-all duration-300 hover:opacity-80`}
          >
            <LuGithub className="h-4 w-4" />
            <span>View Source</span>
            <LuArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3 sm:left-12 lg:left-24">
          {Array.from({ length: total }).map((_, i) => {
            const dotColor = projectColors[i % projectColors.length];
            return (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index
                    ? `w-10 ${dotColor.dot} ${dotColor.dotDark}`
                    : "w-2 bg-slate-300 dark:bg-white/[0.1]"
                }`}
              />
            );
          })}
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

function MobileStack({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col md:hidden">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <FullScreenProject project={project} index={index} total={projects.length} />
        </motion.div>
      ))}
    </div>
  );
}

function HorizontalGallery({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(projects.length - 1) * 100}vw`]
  );

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {projects.map((project, index) => (
            <FullScreenProject
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <FullScreenProject key={project.title} project={project} index={index} total={projects.length} />
        ))}
      </div>
    );
  }

  return (
    <>
      <MobileStack projects={projects} />
      <HorizontalGallery projects={projects} />
    </>
  );
}
