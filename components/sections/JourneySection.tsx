"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/lib/timeline";
import { FadeInUp, SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";

export default function JourneySection() {
  return (
    <section id="experience" className={`border-b ${classNames.sectionBorder} ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <SectionHeader
          label="The Journey"
          title="Experience timeline"
          description="Milestones that shaped how I design, build, and ship software systems."
        />

        <FadeInUp delay={0.3} className="relative mt-10 pl-7 sm:pl-10">
          <span className={classNames.timelineAxis} aria-hidden />
          <div className="space-y-10">
            {timelineEvents.map((event) => (
              <motion.article
                key={`${event.period}-${event.title}`}
                className="relative"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className={classNames.timelineNode} aria-hidden />
                <p className={classNames.timelineLabel}>{event.period}</p>
                <h3 className={classNames.timelineTitle}>{event.title}</h3>
                <p className={classNames.timelineDescription}>{event.organization}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
                {event.highlight ? (
                  <p className="mt-3 inline-flex rounded-md border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-cyan-700 transition-colors hover:border-cyan-500">
                    {event.highlight}
                  </p>
                ) : null}
              </motion.article>
            ))}
          </div>
        </FadeInUp>
      </SectionReveal>
      </div>
    </section>
  );
}

