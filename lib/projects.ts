export type ProjectColor = {
  accent: string;        // e.g. "indigo"
  border: string;        // light border class
  borderDark: string;    // dark border class
  bg: string;            // light bg class
  bgDark: string;        // dark bg class
  text: string;          // light text class
  textDark: string;      // dark text class
  tagBorder: string;
  tagBorderDark: string;
  tagBg: string;
  tagBgDark: string;
  tagText: string;
  tagTextDark: string;
  dot: string;
  dotDark: string;
  glowLight: string;     // ambient glow color for light mode
  glowDark: string;      // ambient glow color for dark mode
  overlayLight: string;  // tinted overlay for light mode
  overlayDark: string;   // tinted overlay for dark mode
};

export const projectColors: ProjectColor[] = [
  {
    // Indigo / Blue
    accent: "indigo",
    border: "border-indigo-500/20",
    borderDark: "dark:border-indigo-400/20",
    bg: "bg-indigo-500/10",
    bgDark: "dark:bg-indigo-400/10",
    text: "text-indigo-600",
    textDark: "dark:text-indigo-400",
    tagBorder: "border-indigo-200",
    tagBorderDark: "dark:border-indigo-400/15",
    tagBg: "bg-indigo-50",
    tagBgDark: "dark:bg-indigo-400/[0.07]",
    tagText: "text-indigo-600",
    tagTextDark: "dark:text-indigo-400",
    dot: "bg-indigo-500",
    dotDark: "dark:bg-indigo-400",
    glowLight: "rgba(99, 102, 241, 0.06)",
    glowDark: "rgba(129, 140, 248, 0.08)",
    overlayLight: "from-indigo-50/80 via-white/90 to-white/60",
    overlayDark: "dark:from-indigo-950/40 dark:via-[#09090B]/80 dark:to-[#09090B]/40",
  },
  {
    // Emerald / Green
    accent: "emerald",
    border: "border-emerald-500/20",
    borderDark: "dark:border-emerald-400/20",
    bg: "bg-emerald-500/10",
    bgDark: "dark:bg-emerald-400/10",
    text: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    tagBorder: "border-emerald-200",
    tagBorderDark: "dark:border-emerald-400/15",
    tagBg: "bg-emerald-50",
    tagBgDark: "dark:bg-emerald-400/[0.07]",
    tagText: "text-emerald-600",
    tagTextDark: "dark:text-emerald-400",
    dot: "bg-emerald-500",
    dotDark: "dark:bg-emerald-400",
    glowLight: "rgba(16, 185, 129, 0.06)",
    glowDark: "rgba(52, 211, 153, 0.08)",
    overlayLight: "from-emerald-50/80 via-white/90 to-white/60",
    overlayDark: "dark:from-emerald-950/40 dark:via-[#09090B]/80 dark:to-[#09090B]/40",
  },
  {
    // Rose / Pink
    accent: "rose",
    border: "border-rose-500/20",
    borderDark: "dark:border-rose-400/20",
    bg: "bg-rose-500/10",
    bgDark: "dark:bg-rose-400/10",
    text: "text-rose-600",
    textDark: "dark:text-rose-400",
    tagBorder: "border-rose-200",
    tagBorderDark: "dark:border-rose-400/15",
    tagBg: "bg-rose-50",
    tagBgDark: "dark:bg-rose-400/[0.07]",
    tagText: "text-rose-600",
    tagTextDark: "dark:text-rose-400",
    dot: "bg-rose-500",
    dotDark: "dark:bg-rose-400",
    glowLight: "rgba(244, 63, 94, 0.06)",
    glowDark: "rgba(251, 113, 133, 0.08)",
    overlayLight: "from-rose-50/80 via-white/90 to-white/60",
    overlayDark: "dark:from-rose-950/40 dark:via-[#09090B]/80 dark:to-[#09090B]/40",
  },
  {
    // Amber / Orange
    accent: "amber",
    border: "border-amber-500/20",
    borderDark: "dark:border-amber-400/20",
    bg: "bg-amber-500/10",
    bgDark: "dark:bg-amber-400/10",
    text: "text-amber-600",
    textDark: "dark:text-amber-400",
    tagBorder: "border-amber-200",
    tagBorderDark: "dark:border-amber-400/15",
    tagBg: "bg-amber-50",
    tagBgDark: "dark:bg-amber-400/[0.07]",
    tagText: "text-amber-600",
    tagTextDark: "dark:text-amber-400",
    dot: "bg-amber-500",
    dotDark: "dark:bg-amber-400",
    glowLight: "rgba(245, 158, 11, 0.06)",
    glowDark: "rgba(251, 191, 36, 0.08)",
    overlayLight: "from-amber-50/80 via-white/90 to-white/60",
    overlayDark: "dark:from-amber-950/40 dark:via-[#09090B]/80 dark:to-[#09090B]/40",
  },
];

export type Project = {
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  sourceCodeUrl: string;
  isInProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "A high-performance personal website with fast page loads, refined typography, and a polished responsive design system.",
    year: "2026",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    sourceCodeUrl: "https://github.com/PakshP/Portfolio",
    isInProgress: false,
  },
  {
    title: "F1 Telem",
    description:
      "A desktop app that captures F1 25 UDP telemetry during Time Trial sessions and exports distance-normalized lap data as structured JSON for lap comparison and performance analysis.",
    year: "2025",
    category: "Desktop Development",
    tags: ["C#", "WPF", "UDP Telemetry", ".NET 8", "JSON"],
    image: "/projects/f1telem.png",
    sourceCodeUrl: "https://github.com/PakshP/F1Telem",
    isInProgress: true,
  },
  {
    title: "Midnight on Main",
    description:
      "A first-person stealth puzzle game built in Godot where players solve challenges to recover missing homework, evade the Homework Enforcer, and escape a university engineering building.",
    year: "2025",
    category: "Game Development",
    tags: ["Godot", "Blender", "3D Game Development", "Stealth", "Puzzle Design"],
    image: "/projects/midnightonmain.png",
    sourceCodeUrl: "https://github.com/R0bb1eV/Midnight-On-Main",
  },
  {
    title: "WorldTools Fork",
    description:
      "Maintained a Fabric-only fork of WorldTools for Minecraft 1.21.11, updating compatibility for modern APIs and preserving world snapshot export features (chunks, entities, players, stats, advancements, and metadata).",
    year: "2026",
    category: "Open Source Maintenance",
    tags: ["Java 21", "Fabric", "Minecraft Modding", "Gradle", "Open Source"],
    image: "/projects/worldtools.png",
    sourceCodeUrl: "https://github.com/PakshP/WorldTools",
  },
];
