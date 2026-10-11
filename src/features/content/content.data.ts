export type ContentPerformance = "Above baseline" | "Near baseline" | "Below baseline";

export interface ContentItem {
  id: string;
  title: string;
  project: string;
  format: string;
  views: string;
  retention: string;
  performance: ContentPerformance;
  publishedDate: string;
}

export const initialContent: ContentItem[] = [
  {
    id: "content-1",
    title: "Why I don't put supplier_id inside products",
    project: "Coding",
    format: "Talking head",
    views: "12.4k",
    retention: "46%",
    performance: "Above baseline",
    publishedDate: "Sep 24",
  },
  {
    id: "content-2",
    title: "The 4-minute pour over that changed my morning",
    project: "Coffee Brewing",
    format: "Demonstration",
    views: "8.8k",
    retention: "38%",
    performance: "Above baseline",
    publishedDate: "Sep 18",
  },
  {
    id: "content-3",
    title: "What The Mom Test gets right about feedback",
    project: "Books",
    format: "Voiceover",
    views: "5.2k",
    retention: "31%",
    performance: "Near baseline",
    publishedDate: "Sep 12",
  },
  {
    id: "content-4",
    title: "Stop putting business logic in your components",
    project: "Coding",
    format: "Screen recording",
    views: "2.1k",
    retention: "19%",
    performance: "Below baseline",
    publishedDate: "Aug 29",
  },
];

