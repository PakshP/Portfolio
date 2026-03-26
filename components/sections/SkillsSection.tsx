"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";
import { skills } from "@/lib/skills";

export default function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...skills, ...skills];

  return (
    <section id="skills" className={`border-b ${classNames.sectionBorder} ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <SectionHeader
          label="Skills"
          title="Core tools and technologies"
          description="A moving stack ticker that highlights the technologies I use most in production work."
        />

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white/85 py-5 shadow-sm">
          {reduceMotion ? (
            <div className="flex flex-wrap gap-3 px-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-cyan-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <motion.div
              className="flex w-max gap-3 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-md border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-cyan-700"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </SectionReveal>
      </div>
    </section>
  );
}

