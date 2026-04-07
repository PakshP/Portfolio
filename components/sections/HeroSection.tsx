"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuContact, LuDownload } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { classNames } from "@/lib/theme";

export default function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[120px] dark:bg-indigo-500/[0.04]" />
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[300px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[100px] dark:bg-violet-500/[0.03]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse dark:bg-indigo-400" />
          Open to Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-[1.1] sm:text-7xl lg:text-8xl"
        >
          <span className="text-slate-900 dark:text-slate-100">Hi, I am </span>
          <span className="gradient-text">Paksh Patel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400"
        >
          I am a <span className="font-medium text-slate-800 dark:text-slate-200">software developer</span> focused on
          building reliable products with clean architecture, strong engineering practices, and
          practical user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-xl glass-card rounded-xl p-5 font-mono text-sm"
        >
          <p>
            <span className="text-indigo-600 dark:text-indigo-400">$</span>{" "}
            <span className="text-slate-700 dark:text-slate-300">stack --current</span>
          </p>
          <p className="mt-2 text-slate-400 dark:text-slate-500">
            Python · TS/JS · C# · Java · PSQL · Docker · REST APIs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild className={classNames.buttonPrimary}>
            <Link href="/Paksh Patel.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume <LuDownload />
            </Link>
          </Button>
          <Button asChild variant="outline" className={classNames.buttonOutline}>
            <Link href="#contact">
              Contact <LuContact />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
