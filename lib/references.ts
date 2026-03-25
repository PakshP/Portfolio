export type ReferenceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const referenceGroups: ReferenceGroup[] = [
  {
    title: "Computer Science",
    description: "Core areas of technical depth and ongoing study.",
    items: [
      "Systems Design and Scalability",
      "Backend APIs and Data Modeling",
      "Frontend Performance and Accessibility",
      "Developer Tooling and Automation",
    ],
  },
  {
    title: "Creative Writing",
    description: "Editorial and narrative work across technical and reflective formats.",
    items: [
      "Technical Essays",
      "Research Summaries",
      "Narrative Drafting",
      "Publication Editing",
    ],
  },
  {
    title: "Community Leadership",
    description: "Experience mentoring peers and organizing collaborative initiatives.",
    items: [
      "Peer Mentorship",
      "Cross-Team Communication",
      "Student Event Coordination",
      "Conflict Resolution",
    ],
  },
];

