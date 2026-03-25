export type Project = {
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio Platform",
    description:
      "A high-performance personal website with fast page loads, refined typography, and a polished responsive design system.",
    year: "2026",
    category: "Web Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Task Workflow App",
    description:
      "A collaborative planning product with board views, custom workflows, and shared project timelines.",
    year: "2025",
    category: "Productivity",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "An insight-driven analytics suite with reusable chart components and role-based reporting views.",
    year: "2025",
    category: "Data Systems",
    tags: ["React", "Recharts", "REST API"],
  },
  {
    title: "Developer Toolkit",
    description:
      "A utility toolkit for snippet workflows, formatting automation, and streamlined local development tasks.",
    year: "2024",
    category: "Developer Tools",
    tags: ["TypeScript", "CLI", "Automation"],
  },
];

