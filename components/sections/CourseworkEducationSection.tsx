"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuExternalLink, LuGithub, LuX } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";
import type { Course } from "@/lib/coursework";
import { courses } from "@/lib/coursework";

function CourseOverlay({ course, onClose }: { course: Course; onClose: () => void }) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-white/90 p-4 backdrop-blur-md dark:bg-[#09090B]/90"
      onClick={onClose}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : { opacity: 1 }}
      exit={shouldReduceMotion ? {} : { opacity: 0 }}
      aria-hidden
    >
      <motion.div
        layoutId={`course-node-${course.term}-${course.name}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-overlay-title"
        onClick={(event) => event.stopPropagation()}
        className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/[0.08] dark:bg-[#0F0F14]/95 dark:shadow-black/40 dark:backdrop-blur-xl"
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 dark:border-white/[0.06] sm:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">{course.term}</p>
            <h3 id="course-overlay-title" className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-slate-100">
              {course.name}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-200"
          >
            <LuX />
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-7 pt-6 sm:px-8">
          <p className="max-w-4xl text-sm leading-7 text-slate-500 dark:text-slate-400">{course.description}</p>

          <div className="mt-6 space-y-4">
            {course.projects.map((item) => (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="font-heading text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    {item.type}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.summary}</p>
                <a
                  href={item.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <LuGithub />
                  View Repository
                  <LuExternalLink />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CourseworkEducationSection() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const portalRoot = typeof window === "undefined" ? null : document.body;

  useEffect(() => {
    if (!activeCourse) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCourse(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeCourse]);

  useEffect(() => {
    if (activeCourse) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
    previousFocusRef.current?.focus();
  }, [activeCourse]);

  const openModal = (course: Course) => {
    setActiveCourse(course);
  };

  const closeModal = () => {
    setActiveCourse(null);
  };

  return (
    <section id="coursework" className={`relative ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            label="Coursework and Education"
            title="Interactive coursework timeline"
            description="Each node opens a full-screen view with coursework details and direct repository links."
          />

          <div className="relative mt-12 pl-7 sm:pl-10">
            <span className={classNames.timelineAxis} aria-hidden />
            <div className="space-y-6">
              {courses.map((course, index) => {
                const hasProjects = course.projects.length > 0;
                const Wrapper = hasProjects ? motion.button : motion.div;
                const wrapperProps = hasProjects
                  ? { type: "button" as const, onClick: () => openModal(course) }
                  : {};

                return (
                  <Wrapper
                    key={`${course.term}-${course.name}`}
                    {...wrapperProps}
                    className={`relative block w-full text-left ${hasProjects ? "cursor-pointer" : ""}`}
                    initial={{ opacity: 0, x: -14, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className={classNames.timelineNode} aria-hidden />
                    <motion.article
                      layoutId={hasProjects ? `course-node-${course.term}-${course.name}` : undefined}
                      className="glass-card rounded-xl p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400">{course.term}</p>
                        {hasProjects && (
                          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-400 dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-slate-500">
                            click to open
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">{course.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">{course.description}</p>
                    </motion.article>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {portalRoot
          ? createPortal(
              <AnimatePresence>{activeCourse ? <CourseOverlay course={activeCourse} onClose={closeModal} /> : null}</AnimatePresence>,
              portalRoot,
            )
          : null}
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
