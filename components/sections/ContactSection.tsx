"use client";

import { motion } from "framer-motion";
import { LuDownload, LuLinkedin, LuMail } from "react-icons/lu";
import { FadeInUp, SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";

export default function ContactSection() {
  return (
    <section id="contact" className={`border-t ${classNames.sectionBorder} ${classNames.sectionPy}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="Reach out for software roles, collaborations, or to view my resume."
        />

        <FadeInUp delay={0.3} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <motion.a
            href="/Paksh Patel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-wide text-slate-700 transition-colors hover:border-cyan-500/50 hover:text-cyan-700"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <LuDownload /> Download Resume
          </motion.a>

          <motion.a
            href="mailto:pakshpatel1@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-wide text-slate-700 transition-colors hover:border-cyan-500/50 hover:text-cyan-700"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <LuMail /> Email
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/paksh-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-wide text-slate-700 transition-colors hover:border-cyan-500/50 hover:text-cyan-700"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <LuLinkedin /> LinkedIn
          </motion.a>
        </FadeInUp>
      </SectionReveal>
      </div>
    </section>
  );
}

