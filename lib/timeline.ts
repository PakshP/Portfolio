export type TimelineEvent = {
  period: string;
  title: string;
  organization: string;
  description: string;
  highlight?: string;
};

export type TimelineEntry = {
  year: string;
  education?: TimelineEvent;
  experience?: TimelineEvent;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    education: {
      period: "May 2026",
      title: "B.S. Computer Science",
      organization: "University of South Carolina",
      description:
        "Completing undergraduate degree with coursework in machine learning, networks, and distributed systems.",
      highlight: "Graduating",
    },
  },
  {
    year: "2025",
    education: {
      period: "Fall 2025",
      title: "Game Development · CSCE 552",
      organization: "University of South Carolina",
      description:
        "Collaborated in a team to design and build 2D and 3D games, focusing on gameplay systems and cross-discipline integration.",
    },
  },
  {
    year: "2024",
    education: {
      period: "Spring 2024",
      title: "Software Engineering · CSCE 247",
      organization: "University of South Carolina",
      description:
        "Applied planning, testing, architecture, and team delivery workflows in collaborative projects.",
    },
    experience: {
      period: "2024 — 2024",
      title: "Information Technology Intern",
      organization: "Short Trip LLC",
      description:
        "Collaborated with a team to build backend management apps in Google AppSheet that streamlined business workflows, and helped migrate the data layer to SQL by designing scalable schemas from initial dbdiagram models.",
      highlight: "Process Optimization",
    },
  },
  {
    year: "2022",
    education: {
      period: "Aug 2022",
      title: "B.S. in Computer Science",
      organization: "University of South Carolina",
      description:
        "Began undergraduate studies in Computer Science with a focus on algorithms, systems, and software architecture.",
      highlight: "Started",
    },
  },
];
