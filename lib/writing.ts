export type WritingEntry = {
  title: string;
  summary: string;
  year: string;
  type: "Research" | "Essay" | "Case Study";
};

export const writingEntries: WritingEntry[] = [
  {
    title: "Designing Developer Experience for Small Teams",
    summary:
      "A practical study on reducing cognitive load in internal tools by using progressive disclosure and predictable UI patterns.",
    year: "2026",
    type: "Research",
  },
  {
    title: "Readable Systems and the Cost of Complexity",
    summary:
      "An editorial exploration of how architecture decisions impact onboarding speed and long-term product quality.",
    year: "2025",
    type: "Essay",
  },
  {
    title: "From Prototype to Production in Four Iterations",
    summary:
      "A retrospective on shipping an MVP with clear milestones, risk tracking, and user-centric metrics.",
    year: "2025",
    type: "Case Study",
  },
  {
    title: "Maintaining Velocity in a Full-Stack Monorepo",
    summary:
      "A technical breakdown of release hygiene, linting gates, and test strategy for scaling product teams.",
    year: "2024",
    type: "Research",
  },
];

