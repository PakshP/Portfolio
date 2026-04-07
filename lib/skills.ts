export type SkillCategory = {
  name: string;
  color: {
    border: string;
    bg: string;
    text: string;
    dot: string;
  };
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    color: {
      border: "border-indigo-500/15 dark:border-indigo-400/15",
      bg: "bg-indigo-500/[0.06] dark:bg-indigo-400/[0.06]",
      text: "text-indigo-600 dark:text-indigo-400",
      dot: "bg-indigo-500 dark:bg-indigo-400",
    },
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    color: {
      border: "border-violet-500/15 dark:border-violet-400/15",
      bg: "bg-violet-500/[0.06] dark:bg-violet-400/[0.06]",
      text: "text-violet-600 dark:text-violet-400",
      dot: "bg-violet-500 dark:bg-violet-400",
    },
    skills: ["React", "Next.js", "Tailwind CSS", "Accessibility", "WPF"],
  },
  {
    name: "Backend",
    color: {
      border: "border-emerald-500/15 dark:border-emerald-400/15",
      bg: "bg-emerald-500/[0.06] dark:bg-emerald-400/[0.06]",
      text: "text-emerald-600 dark:text-emerald-400",
      dot: "bg-emerald-500 dark:bg-emerald-400",
    },
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Spring Boot", ".NET Framework"],
  },
  {
    name: "DevOps & Tools",
    color: {
      border: "border-amber-500/15 dark:border-amber-400/15",
      bg: "bg-amber-500/[0.06] dark:bg-amber-400/[0.06]",
      text: "text-amber-600 dark:text-amber-400",
      dot: "bg-amber-500 dark:bg-amber-400",
    },
    skills: ["Docker", "Git", "GitHub", "CI/CD", "Testing", "System Design"],
  },
];

// Flat list for backwards compat if needed
export const skills = skillCategories.flatMap((c) => c.skills);
