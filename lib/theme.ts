// Reusable class names for common patterns (light/dark adaptive via Tailwind dark: prefix)
export const classNames = {
  // Section styling
  sectionPy: "py-20 sm:py-28",
  sectionLabel: "inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-400",
  sectionTitle: "mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl",
  sectionDescription: "mt-4 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg",

  // Timeline styling
  timelineLabel: "font-mono text-xs uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400",
  timelineTitle: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100",
  timelineDescription: "text-base text-slate-500 dark:text-slate-400",
  timelineAxis: "absolute left-2 top-0 h-full w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent sm:left-3",
  timelineNode: "absolute -left-5 top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400 pulse-glow sm:-left-6",

  // Button styling
  buttonPrimary:
    "h-12 rounded-lg border border-indigo-500/30 bg-indigo-600 px-7 font-mono text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-400",
  buttonOutline:
    "h-12 rounded-lg border border-slate-300 bg-white/70 px-7 font-mono text-base text-slate-700 hover:border-indigo-500/50 hover:text-indigo-600 transition-all duration-300 dark:border-slate-700 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-400",

  // Badge styling
  badge: "rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 font-mono text-xs font-medium text-violet-600 dark:text-violet-400",
};
