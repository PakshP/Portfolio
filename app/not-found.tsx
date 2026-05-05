"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuHouse, LuFolderGit2 } from "react-icons/lu";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { classNames } from "@/lib/theme";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative overflow-hidden">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center py-24 sm:py-32">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[120px] dark:bg-indigo-500/[0.04]" />
          <div className="pointer-events-none absolute top-40 left-1/4 h-[300px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[100px] dark:bg-violet-500/[0.03]" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse dark:bg-indigo-400" />
              Error 404 — Page Not Found
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 font-heading text-7xl font-bold leading-none sm:text-8xl lg:text-9xl"
            >
              <span className="gradient-text animate-gradient">404</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 max-w-3xl font-heading text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            >
              This page got lost in the build.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400"
            >
              Either it never existed, ran off to find better URL hygiene, or got
              refactored into oblivion. Let&apos;s pretend that didn&apos;t happen and
              get you back somewhere useful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 max-w-xl glass-card rounded-xl p-5 font-mono text-sm"
            >
              <p>
                <span className="text-indigo-600 dark:text-indigo-400">$</span>{" "}
                <span className="text-slate-700 dark:text-slate-300">
                  find . -name &quot;the-page-you-wanted&quot;
                </span>
              </p>
              <p className="mt-2 text-rose-500 dark:text-rose-400">
                find: 0 matches across 1 universe
              </p>
              <p className="mt-1 text-slate-400 dark:text-slate-500">
                hint: try the homepage, or one of the sections below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild className={classNames.buttonPrimary}>
                <Link href="/">
                  Back to Home <LuHouse />
                </Link>
              </Button>
              <Button asChild variant="outline" className={classNames.buttonOutline}>
                <Link href="/#projects">
                  View Projects <LuFolderGit2 />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
