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
    title: "Portfolio Platform",
    description:
      "A high-performance personal website with fast page loads, refined typography, and a polished responsive design system.",
    year: "2026",
    category: "Web Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/portfolio-platform.svg",
    sourceCodeUrl: "https://github.com/pakshpatel/portfolio-platform",
    isInProgress: true,
  },
  {
    title: "Task Workflow App",
    description:
      "A collaborative planning product with board views, custom workflows, and shared project timelines.",
    year: "2025",
    category: "Productivity",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/task-workflow.svg",
    sourceCodeUrl: "https://github.com/pakshpatel/task-workflow-app",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An insight-driven analytics suite with reusable chart components and role-based reporting views.",
    year: "2025",
    category: "Data Systems",
    tags: ["React", "Recharts", "REST API"],
    image: "/projects/analytics-dashboard.svg",
    sourceCodeUrl: "https://github.com/pakshpatel/analytics-dashboard",
  },
  {
    title: "Developer Toolkit",
    description:
      "A utility toolkit for snippet workflows, formatting automation, and streamlined local development tasks.",
    year: "2024",
    category: "Developer Tools",
    tags: ["TypeScript", "CLI", "Automation"],
    image: "/projects/developer-toolkit.svg",
    sourceCodeUrl: "https://github.com/pakshpatel/developer-toolkit",
  },
];

