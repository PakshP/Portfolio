export type CourseworkProject = {
  title: string;
  type: "Project" | "Lab";
  summary: string;
};

export type Course = {
  name: string;
  description: string;
  term: string;
  projects: CourseworkProject[];
};

export const courses: Course[] = [
  {
    name: "Data Structures and Algorithms",
    term: "Fall 2024",
    description:
      "Implemented core data structures and evaluated algorithmic tradeoffs through performance-focused problem solving.",
    projects: [
      {
        title: "Custom Priority Queue Benchmark",
        type: "Lab",
        summary: "Compared heap variants and profiled insertion and extraction under varied loads.",
      },
      {
        title: "Graph Pathfinding Visualizer",
        type: "Project",
        summary: "Built Dijkstra and A* visual demos with step-by-step state rendering.",
      },
    ],
  },
  {
    name: "Operating Systems",
    term: "Spring 2025",
    description:
      "Explored process scheduling, memory management, and synchronization through systems-level programming.",
    projects: [
      {
        title: "Thread Scheduler Simulator",
        type: "Lab",
        summary: "Simulated FCFS, SJF, and round-robin scheduling with latency metrics.",
      },
      {
        title: "Mini Shell with Job Control",
        type: "Project",
        summary: "Implemented command parsing, foreground/background jobs, and signal handling.",
      },
    ],
  },
  {
    name: "Database Systems",
    term: "Fall 2025",
    description:
      "Designed relational schemas and optimized queries for consistency, scale, and maintainability.",
    projects: [
      {
        title: "Campus Event Data Model",
        type: "Project",
        summary: "Created normalized schemas, migration scripts, and reporting views.",
      },
      {
        title: "Indexing and Query Analysis",
        type: "Lab",
        summary: "Tested execution plans and compared index strategies on large datasets.",
      },
    ],
  },
  {
    name: "Software Engineering",
    term: "Spring 2026",
    description:
      "Applied team-based delivery practices including planning, testing, CI, and architecture reviews.",
    projects: [
      {
        title: "Team Sprint Management Tool",
        type: "Project",
        summary: "Developed backlog, sprint, and velocity tracking features with API integration.",
      },
      {
        title: "Test Automation Pipeline",
        type: "Lab",
        summary: "Integrated lint, unit tests, and coverage gates in a CI workflow.",
      },
    ],
  },
];

