"use client";

import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.span
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/25 bg-emerald-500/10 font-mono text-sm font-bold text-emerald-700"
            whileHover={{ scale: 1.05 }}
          >
            {'</>'}
          </motion.span>
          <div className="leading-tight">
            <p className="font-mono text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              Paksh Patel
            </p>
            <p className="text-xs text-slate-500">Software Developer</p>
          </div>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-medium xl:flex">
          <a className="text-slate-600 transition-colors hover:text-cyan-700" href="#about">
            About
          </a>
          <a className="text-slate-600 transition-colors hover:text-cyan-700" href="#projects">
            Projects
          </a>
          <a className="text-slate-600 transition-colors hover:text-cyan-700" href="#coursework">
            Coursework
          </a>
          <a className="text-slate-600 transition-colors hover:text-cyan-700" href="#experience">
            Journey
          </a>
          <a className="text-slate-600 transition-colors hover:text-cyan-700" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
