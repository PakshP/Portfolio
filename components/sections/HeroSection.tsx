"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuContact, LuDownload } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { classNames } from "@/lib/theme";

export default function HeroSection() {
  return (
    <section id="about" className={`border-b ${classNames.sectionBorder} py-16 sm:py-24`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-700"
        >
          Status: Open to Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-4xl font-heading text-5xl font-bold leading-tight text-slate-900 sm:text-7xl"
        >
          Hi, I am Paksh Patel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"
        >
          I am a <b>software developer</b> focused on building reliable products with clean architecture, strong engineering practices, and practical user experience.
        </motion.p>

        <div className="mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-5 font-mono text-sm text-slate-700 shadow-sm">
          <p>
            <span className="text-cyan-700">$</span> stack --current
          </p>
          <p className="mt-2 text-slate-600">Python · TypeScript · C# · Java · PostgreSQL · Docker</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
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
    </section>
  );
}

