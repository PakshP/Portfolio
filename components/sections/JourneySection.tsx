"use client";

import { motion } from "framer-motion";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import { SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";
import type { TimelineEvent } from "@/lib/timeline";
import { timeline } from "@/lib/timeline";

function TimelineCard({
  event,
  side,
  delay,
}: {
  event: TimelineEvent;
  side: "left" | "right";
  delay: number;
}) {
  const isLeft = side === "left";
  const colorClasses = isLeft
    ? {
        icon: "text-violet-600 dark:text-violet-400",
        iconBg: "bg-violet-500/10 border-violet-500/20 dark:border-violet-400/20",
        label: "text-violet-600 dark:text-violet-400",
        highlight: "border-violet-500/15 bg-violet-500/10 text-violet-600 dark:text-violet-400",
      }
    : {
        icon: "text-indigo-600 dark:text-indigo-400",
        iconBg: "bg-indigo-500/10 border-indigo-500/20 dark:border-indigo-400/20",
        label: "text-indigo-600 dark:text-indigo-400",
        highlight: "border-indigo-500/15 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-center gap-2.5">
        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border ${colorClasses.iconBg}`}>
          {isLeft ? (
            <LuGraduationCap className={`h-3.5 w-3.5 ${colorClasses.icon}`} />
          ) : (
            <LuBriefcase className={`h-3.5 w-3.5 ${colorClasses.icon}`} />
          )}
        </span>
        <p className={`font-mono text-xs uppercase tracking-[0.14em] ${colorClasses.label}`}>
          {event.period}
        </p>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {event.title}
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{event.organization}</p>
      <p className="mt-2 text-sm leading-7 text-slate-400 dark:text-slate-500">
        {event.description}
      </p>
      {event.highlight && (
        <span className={`mt-3 inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide ${colorClasses.highlight}`}>
          {event.highlight}
        </span>
      )}
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section id="experience" className={`relative ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            label="The Journey"
            title="Education & Experience"
            description="A dual timeline of academic milestones and professional experience, side by side."
          />

          {/* Column labels — desktop only */}
          <div className="mt-12 hidden grid-cols-[1fr_3rem_1fr] gap-0 md:grid">
            <div className="flex items-center gap-2 pb-4">
              <LuGraduationCap className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                Education
              </span>
            </div>
            <div />
            <div className="flex items-center gap-2 pb-4">
              <LuBriefcase className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                Experience
              </span>
            </div>
          </div>

          {/* Desktop: split timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Center axis */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

              <div className="space-y-8">
                {timeline.map((entry, index) => (
                  <div key={entry.year} className="relative grid grid-cols-[1fr_3rem_1fr] items-start gap-0">
                    {/* Left — Education */}
                    <div className="pr-6">
                      {entry.education && (
                        <TimelineCard event={entry.education} side="left" delay={index * 0.1} />
                      )}
                    </div>

                    {/* Center node */}
                    <div className="flex justify-center pt-5">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-xs font-bold text-slate-700 shadow-sm dark:border-white/[0.1] dark:bg-[#0F0F14] dark:text-slate-300"
                      >
                        {entry.year.slice(-2)}
                      </motion.div>
                    </div>

                    {/* Right — Experience */}
                    <div className="pl-6">
                      {entry.experience && (
                        <TimelineCard event={entry.experience} side="right" delay={index * 0.1 + 0.05} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: single column with icons */}
          <div className="relative mt-12 pl-7 md:hidden">
            <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />
            <div className="space-y-6">
              {timeline.map((entry, index) => (
                <div key={entry.year} className="relative">
                  {/* Year node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="absolute -left-[1.6rem] top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-[10px] font-bold text-slate-700 dark:border-white/[0.1] dark:bg-[#0F0F14] dark:text-slate-300"
                  >
                    {entry.year.slice(-2)}
                  </motion.div>

                  <div className="space-y-4 pl-4 pt-1">
                    {entry.education && (
                      <TimelineCard event={entry.education} side="left" delay={index * 0.08} />
                    )}
                    {entry.experience && (
                      <TimelineCard event={entry.experience} side="right" delay={index * 0.08 + 0.05} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
