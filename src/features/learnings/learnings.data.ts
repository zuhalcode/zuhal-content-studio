export interface LearningItem {
  id: string;
  observation: string;
  evidence: string;
  learning: string;
  nextAction: string;
  defaultConfidence: "Low" | "Medium" | "High";
  sources: string;
  relatedExperiment: string;
  relatedPattern: string;
}

export const initialLearnings: LearningItem[] = [
  {
    id: "learn-1",
    observation: "Talking-head coding content generated higher saves.",
    evidence: "3 of 5 comparable contents exceeded the account baseline on bookmarks.",
    learning: "Concrete demonstrations accompanied by direct face-to-camera explanation build higher trust for senior developers.",
    nextAction: "Test a different topic with the exact same visual format next week.",
    defaultConfidence: "Medium",
    sources: "3 contents · 1 experiment",
    relatedExperiment: "EXP-023 · Curiosity hook",
    relatedPattern: "Curiosity + Demonstration",
  },
  {
    id: "learn-2",
    observation: "Shorter coffee intros improved completion.",
    evidence: "4 of 6 references crossed the account average by cutting historical background.",
    learning: "Lead with the sensory payoff and physical extraction result before technical process detail.",
    nextAction: "Repeat with a darker roast profile in the next production batch.",
    defaultConfidence: "High",
    sources: "4 contents · 2 experiments",
    relatedExperiment: "EXP-025 · Short vs long form",
    relatedPattern: "Sensory payoff before process",
  },
];

