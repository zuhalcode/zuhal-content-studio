export type IdeaStatus = "Inbox" | "Selected" | "Briefing";
export type IdeaPriority = "High" | "Medium" | "Low";

export interface IdeaItem {
  id: string;
  title: string;
  project: string;
  topic: string;
  source: string;
  priority: IdeaPriority;
  status: IdeaStatus;
  problem?: string;
  angle?: string;
  coreIdea?: string;
}

export const initialIdeas: IdeaItem[] = [
  {
    id: "idea-1",
    title: "Why supplier_id should not live inside products",
    project: "Coding",
    topic: "Database Architecture",
    source: "Experience",
    priority: "High",
    status: "Inbox",
    problem: "Developers often model ownership relationships in the wrong layer.",
    angle: "A practical architecture decision with a concrete schema example.",
    coreIdea: "Keep product identity separate from supplier relationships.",
  },
  {
    id: "idea-2",
    title: "The overlooked variable in pour-over recipes",
    project: "Coffee Brewing",
    topic: "Extraction",
    source: "Reference",
    priority: "Medium",
    status: "Selected",
    problem: "Most recipes emphasize grind size while ignoring water flow velocity.",
    angle: "Controlled brew comparison with measured TDS differences.",
    coreIdea: "Pour speed changes contact time and extraction balance dramatically.",
  },
  {
    id: "idea-3",
    title: "What The Mom Test gets right about feedback",
    project: "Books",
    topic: "Product Thinking",
    source: "Reading",
    priority: "Low",
    status: "Briefing",
    problem: "Founders ask customers if they like an idea instead of studying actual behavior.",
    angle: "Practical interview script tear-downs with good vs bad questions.",
    coreIdea: "Past commitments reveal truth faster than speculative opinions.",
  },
  {
    id: "idea-4",
    title: "Stop putting business logic in components",
    project: "Coding",
    topic: "TypeScript",
    source: "Experience",
    priority: "High",
    status: "Inbox",
    problem: "UI components become bloated with validation, auth, and data transforms.",
    angle: "Refactoring a 300-line messy component into clean single-responsibility layers.",
    coreIdea: "Keep UI pure rendering; encapsulate state transformations in hooks and domain services.",
  },
];

