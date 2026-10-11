export type BriefStatus = "All" | "Draft" | "Ready" | "Production" | "Published" | "Archived";

export interface BriefItem {
  id: string;
  title: string;
  project: string;
  topic: string;
  audience: string;
  funnel: string;
  format: string;
  status: "Draft" | "Ready" | "Production" | "Published" | "Archived";
  readiness: string;
  updated: string;
}

export const initialBriefs: BriefItem[] = [
  {
    id: "brief-1",
    title: "Supplier relationships without leaky models",
    project: "Coding",
    topic: "Database Architecture",
    audience: "Senior Engineers",
    funnel: "Authority",
    format: "Video",
    status: "Draft",
    readiness: "8 / 10",
    updated: "Today",
  },
  {
    id: "brief-2",
    title: "The tasting variable nobody tracks",
    project: "Coffee Brewing",
    topic: "Extraction",
    audience: "Home Brewers",
    funnel: "Education",
    format: "Carousel",
    status: "Ready",
    readiness: "10 / 10",
    updated: "Yesterday",
  },
  {
    id: "brief-3",
    title: "A better way to interview users",
    project: "Books",
    topic: "Product Thinking",
    audience: "Founders & PMs",
    funnel: "Awareness",
    format: "Voiceover",
    status: "Production",
    readiness: "9 / 10",
    updated: "3 days ago",
  },
];

export const editorialChecklist = [
  "Context",
  "Audience",
  "Objective",
  "Core Idea",
  "Hypothesis",
  "Hook",
  "Tension",
  "Payoff",
  "CTV",
  "Format",
  "Research",
  "Measurement",
];

