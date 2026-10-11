export interface ResearchMetric {
  label: string;
  value: string;
}

export interface TrackedAccount {
  id: string;
  name: string;
  handle: string;
  niche: string;
  referenceCount: number;
  averageViews: string;
}

export interface ReferenceItem {
  id: string;
  title: string;
  creator: string;
  format: string;
  hookType: string;
  performanceRatio: string;
}

export const researchMetrics: ResearchMetric[] = [
  { label: "Tracked accounts", value: "18" },
  { label: "References collected", value: "142" },
  { label: "Local references", value: "86" },
  { label: "Global references", value: "56" },
  { label: "High performance", value: "27" },
];

export const trackedAccounts: TrackedAccount[] = [
  {
    id: "acc-1",
    name: "Dan Abramov",
    handle: "@dan_abramov",
    niche: "React & Architecture",
    referenceCount: 14,
    averageViews: "45.2k",
  },
  {
    id: "acc-2",
    name: "James Hoffmann",
    handle: "@jimseven",
    niche: "Coffee Extraction",
    referenceCount: 22,
    averageViews: "180.5k",
  },
  {
    id: "acc-3",
    name: "Rob Fitzpatrick",
    handle: "@robfitz",
    niche: "Customer Discovery",
    referenceCount: 9,
    averageViews: "28.4k",
  },
];

export const referenceItems: ReferenceItem[] = [
  {
    id: "ref-1",
    title: "Why your state management is leaking across boundaries",
    creator: "Dan Abramov",
    format: "Diagram breakdown",
    hookType: "Curiosity opener",
    performanceRatio: "3.2x baseline",
  },
  {
    id: "ref-2",
    title: "The temperature variable espresso baristas never test",
    creator: "James Hoffmann",
    format: "Side-by-side demonstration",
    hookType: "Contrarian demonstration",
    performanceRatio: "4.8x baseline",
  },
  {
    id: "ref-3",
    title: "Stop asking 'Would you buy this?' in customer interviews",
    creator: "Rob Fitzpatrick",
    format: "Short script tear-down",
    hookType: "Concrete proof",
    performanceRatio: "2.7x baseline",
  },
];

