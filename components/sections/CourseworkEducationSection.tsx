"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SectionHeader, FadeInUp } from "@/components/ui/AnimatedComponents";
import type { Course } from "@/lib/coursework";
import { courses } from "@/lib/coursework";
import { classNames } from "@/lib/theme";

function CourseModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A3B55]/45 p-4"
      onClick={onClose}
      aria-hidden
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : { opacity: 1 }}
      exit={shouldReduceMotion ? {} : { opacity: 0 }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        className="w-full max-w-2xl rounded-2xl border border-[#D7DCE5] bg-white p-5 shadow-xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? {} : { opacity: 0, y: 8, scale: 0.98 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#BF3A2B]">{course.term}</p>
            <h3 id="course-modal-title" className="mt-2 font-serif text-2xl text-[#2A3B55]">
              {course.name}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#D7DCE5] px-3 py-1 text-sm text-[#2A3B55] hover:border-[#BF3A2B] hover:text-[#BF3A2B]"
          >
            Close
          </button>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#4E5F7A]">{course.description}</p>

        <div className="mt-6 space-y-3">
          {course.projects.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#D7DCE5] bg-[#F9FAFC] p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-base font-semibold text-[#2A3B55]">{item.title}</h4>
                <span className="rounded-full border border-[#D7DCE5] bg-white px-2.5 py-1 text-xs font-medium text-[#BF3A2B]">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#4E5F7A]">{item.summary}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CourseworkEducationSection() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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
    <section id="coursework" className="border-b border-[#D7DCE5] py-16 sm:py-20">
      <SectionHeader
        label="Coursework and Education"
        title="Academic Timeline"
        description="Coursework milestones with applied labs and projects completed through the program."
      />

      <FadeInUp delay={0.3} className="relative mt-10 pl-7 sm:pl-10">
        <span className="absolute left-2 top-0 h-full w-px bg-[#D4AF37]/70 sm:left-3" aria-hidden />
        <div className="space-y-10">
          {courses.map((course) => (
            <motion.article
              key={`${course.term}-${course.name}`}
              className="relative"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span
                className="absolute -left-5 top-2 h-2.5 w-2.5 rounded-full bg-[#D4AF37] sm:-left-6"
                aria-hidden
              />
              <p className="text-xs uppercase tracking-[0.15em] text-[#6D7B90]">{course.term}</p>
              <h3 className="mt-2 text-xl font-semibold text-[#2A3B55]">{course.name}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4E5F7A]">{course.description}</p>
              <motion.button
                type="button"
                onClick={() => openModal(course)}
                className={classNames.buttonSmall}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </motion.article>
          ))}
        </div>
      </FadeInUp>

      <AnimatePresence>
        {activeCourse ? <CourseModal course={activeCourse} onClose={closeModal} /> : null}
      </AnimatePresence>
    </section>
  );
}


