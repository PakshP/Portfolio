"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import { FadeInUp } from "@/components/ui/AnimatedComponents";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/85 py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <FadeInUp>
          <p className="font-heading text-[1.9rem] font-semibold text-slate-900">Paksh Patel</p>
          <p className="mt-2 max-w-sm text-base leading-7 text-slate-600">
            I build reliable products with clean architecture and practical UX.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
            {year} - Built with Next.js + TypeScript
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700">Quick Links</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["About", "Projects", "Coursework", "Journey", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700">Other Links</p>
          <div className="mt-3 flex gap-2">
            <a
              href="https://github.com/pakshpatel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              <LuGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/paksh-patel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              <LuLinkedin />
            </a>
            <a
              href="mailto:pakshpatel1@gmail.com"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              <LuMail />
            </a>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}

