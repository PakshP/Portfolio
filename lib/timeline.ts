export type TimelineEvent = {
  period: string;
  title: string;
  organization: string;
  description: string;
  highlight?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    period: "2025 - Present",
    title: "Software Developer",
    organization: "Independent Projects",
    description:
      "Builds full-stack products focused on performance, maintainability, and practical user workflows.",
    highlight: "Node.js",
  },
  {
    period: "2024 - 2025",
    title: "Resident Assistant",
    organization: "Student Housing",
    description:
      "Led peer support initiatives, coordinated events, and managed communications across diverse student groups.",
    highlight: "Resident Assistant",
  },
  {
    period: "2022 - 2026",
    title: "B.S. in Computer Science",
    organization: "University Program",
    description:
      "Studied algorithms, distributed systems, and software architecture with a focus on project-based implementation.",
    highlight: "Python",
  },
];

