"use client";

import { motion } from "framer-motion";
import { LuDownload, LuLinkedin, LuMail } from "react-icons/lu";
import { FadeInUp, SectionHeader, SectionReveal } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";

const contactLinks = [
  {
    href: "/Paksh Patel.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: LuDownload,
    label: "Download Resume",
    delay: 0,
  },
  {
    href: "mailto:pakshpatel1@gmail.com",
    icon: LuMail,
    label: "Email",
    delay: 0.08,
  },
  {
    href: "https://www.linkedin.com/in/paksh-patel/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: LuLinkedin,
    label: "LinkedIn",
    delay: 0.16,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`relative ${classNames.sectionPy}`}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/[0.04] blur-[100px] dark:bg-indigo-500/[0.03]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            label="Contact"
            title="Let's Connect"
            description="Reach out for software roles, collaborations, or to view my resume."
          />

          <FadeInUp delay={0.3} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="group inline-flex items-center justify-center gap-3 rounded-xl glass-card px-5 py-4 font-mono text-xs uppercase tracking-wide text-slate-500 transition-all duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: link.delay }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <link.icon className="h-4 w-4" /> {link.label}
              </motion.a>
            ))}
          </FadeInUp>
        </SectionReveal>
      </div>
    </section>
  );
}
