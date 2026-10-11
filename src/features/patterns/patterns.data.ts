export interface PatternItem {
  id: string;
  title: string;
  niche: string;
  evidence: string;
  positive: string;
  confidence: "High" | "Medium" | "Low";
  status: "Validated" | "Emerging" | "Hypothesis";
  experimentsCount: number;
}

export const initialPatterns: PatternItem[] = [
  {
    id: "pat-1",
    title: "Curiosity + Demonstration",
    niche: "Coding · Authority",
    evidence: "7 contents",
    positive: "5 positive",
    confidence: "High",
    status: "Validated",
    experimentsCount: 2,
  },
  {
    id: "pat-2",
    title: "Problem-first + Concrete proof",
    niche: "Coding · Education",
    evidence: "5 contents",
    positive: "4 positive",
    confidence: "Medium",
    status: "Emerging",
    experimentsCount: 1,
  },
  {
    id: "pat-3",
    title: "Sensory payoff before process",
    niche: "Coffee · Awareness",
    evidence: "6 contents",
    positive: "4 positive",
    confidence: "Medium",
    status: "Emerging",
    experimentsCount: 2,
  },
  {
    id: "pat-4",
    title: "Reader tension + contrarian close",
    niche: "Books · Consideration",
    evidence: "4 contents",
    positive: "3 positive",
    confidence: "Low",
    status: "Hypothesis",
    experimentsCount: 1,
  },
];

