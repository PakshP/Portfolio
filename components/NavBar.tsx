"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Coursework", href: "#coursework" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#09090B]/80">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <p className="font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
              Paksh Patel
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Software Developer</p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 px-2 py-1.5 dark:border-white/[0.06] dark:bg-white/[0.03] xl:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-100"
              href={link.href}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-white/[0.08] dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-100 xl:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06] xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-100"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
