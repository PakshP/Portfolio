export type CourseworkProject = {
  title: string;
  type: "Project" | "Lab";
  summary: string;
  repositoryUrl: string;
};

export type Course = {
  name: string;
  description: string;
  term: string;
  projects: CourseworkProject[];
};

export const courses: Course[] = [
  {
    name: "Applied Machine Learning · CSCE 583",
    term: "Spring 2026",
    description:
      "Applied machine learning methods for model training, evaluation, and practical problem solving.",
    projects: [],
  },
  {
    name: "Computer Game Development · CSCE 552",
    term: "Fall 2025",
    description:
      "Collaborated in a team to design and build 2D and 3D games, focusing on gameplay systems, iteration, and cross-discipline integration.",
    projects: [
      {
        title: "Midnight on Main",
        type: "Project",
        summary:
          "Built with a team: a first-person stealth puzzle game in Godot with objective progression, enemy avoidance, and checkpoint-style save flow.",
        repositoryUrl: "https://github.com/R0bb1eV/Midnight-On-Main",
      },
      {
        title: "Virucity",
        type: "Project",
        summary:
          "Built with a team: a fast-paced 2D endless runner where players dodge dynamic city hazards, collect cassettes, and survive increasingly difficult runs as game speed scales over time.",
        repositoryUrl: "https://github.com/PakshP/Virucity/",
      },
    ],
  },
  {
    name: "Software Engineering · CSCE 247",
    term: "Spring 2024",
    description:
      "Applied software engineering practices including planning, testing, architecture, and team delivery workflows.",
    projects: [
      {
        title: "DegreeAudit Frontend",
        type: "Project",
        summary:
          "Collaborated with a team to build the client-side experience for a degree progress and audit system, including requirement tracking views and user-focused workflows.",
        repositoryUrl: "https://github.com/AlexRishmawi/degreeauditGUI",
      },
      {
        title: "DegreeAudit Backend",
        type: "Project",
        summary:
          "Collaborated with a team to develop the backend services for a degree audit platform, handling requirement evaluation logic, data persistence, and API endpoints.",
        repositoryUrl: "https://github.com/AlexRishmawi/DegreeAudit",
      },
    ],
  },
  {
    name: "Data Structures and Algorithms · CSCE 350",
    term: "Fall 2024",
    description:
      "Implemented core data structures and analyzed algorithmic tradeoffs through performance-focused problem solving.",
    projects: [],
  },
  {
    name: "Computer Networks · CSCE 416",
    term: "Fall 2024",
    description:
      "Studied network protocols, layered architecture, and data transport behavior in distributed systems.",
    projects: [],
  },
  {
    name: "Advanced Programming Techniques · CSCE 240",
    term: "Spring 2024",
    description:
      "Built larger software systems with emphasis on code organization, reuse, and maintainability.",
    projects: [],
  },
  {
    name: "Unix/Linux Fundamentals · CSCE 215",
    term: "Spring 2023",
    description:
      "Worked with shell environments, scripting, tooling, and practical command-line workflows.",
    projects: [],
  },
];

