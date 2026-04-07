"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import { FadeInUp } from "@/components/ui/AnimatedComponents";

const socialLinks = [
  { href: "https://github.com/PakshP", icon: LuGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/paksh-patel/", icon: LuLinkedin, label: "LinkedIn" },
  { href: "mailto:pakshpatel1@gmail.com", icon: LuMail, label: "Email" },
];

const navLinks = ["About", "Projects", "Coursework", "Journey", "Contact"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/50 py-14 dark:border-white/[0.06] dark:bg-[#09090B]/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <FadeInUp>
          <p className="font-heading text-[1.9rem] font-semibold text-slate-900 dark:text-slate-100">Paksh Patel</p>
          <p className="mt-2 max-w-sm text-base leading-7 text-slate-500 dark:text-slate-500">
            I build scalable software with clean architecture, thoughtful UX, and strong engineering practices.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-600">
            {year} - Built with Next.js + TypeScript
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Quick Links</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-500 dark:hover:border-white/[0.15] dark:hover:text-slate-300"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Other Links</p>
          <div className="mt-3 flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-indigo-500/25 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-500 dark:hover:border-indigo-400/25 dark:hover:text-indigo-400"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}
