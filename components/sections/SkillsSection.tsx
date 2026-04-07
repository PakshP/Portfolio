"use client";

import { motion } from "framer-motion";

import { SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";
import { skillCategories } from "@/lib/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className={`relative ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            label="Skills"
            title="Core tools and technologies"
            description="The languages, frameworks, and tools I reach for when building production software."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card rounded-xl p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${category.color.dot}`} />
                  <h3 className={`font-mono text-xs uppercase tracking-[0.18em] ${category.color.text}`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.04 }}
                      viewport={{ once: true }}
                      className={`rounded-full border ${category.color.border} ${category.color.bg} px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider ${category.color.text} transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
