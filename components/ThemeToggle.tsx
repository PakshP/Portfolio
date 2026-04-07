"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-100"
      whileTap={{ scale: 0.92 }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </motion.button>
  );
}
