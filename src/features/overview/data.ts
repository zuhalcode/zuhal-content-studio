import type { LucideIcon } from "lucide-react";
import { Activity, FlaskConical, GitBranch, Lightbulb } from "lucide-react";

export interface OverviewStat {
  label: string;
  value: string;
  category: string;
  icon: LucideIcon;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  highlightClass?: string;
}

export interface NextTestQueueItem {
  id: string;
  title: string;
  topic: string;
  priority: "High" | "Medium" | "Low";
}

export const overviewStats: OverviewStat[] = [
  {
    label: "Active experiments",
    value: "04",
    category: "Experiments",
    icon: FlaskConical,
  },
  {
    label: "Unanalyzed content",
    value: "07",
    category: "Content",
    icon: Activity,
  },
  {
    label: "Pending learnings",
    value: "03",
    category: "Learnings",
    icon: Lightbulb,
  },
  {
    label: "Emerging patterns",
    value: "06",
    category: "Patterns",
    icon: GitBranch,
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  { label: "Published", value: "24" },
  { label: "Above baseline", value: "14", highlightClass: "text-emerald-600" },
  { label: "Below baseline", value: "05", highlightClass: "text-rose-600" },
];

export const performanceBarHeights: number[] = [
  42, 56, 48, 70, 62, 76, 58, 84, 68, 92, 78, 88, 96, 72, 86, 100,
];

export const nextTestQueue: NextTestQueueItem[] = [
  {
    id: "01",
    title: "Curiosity hook",
    topic: "Supabase RPC",
    priority: "High",
  },
  {
    id: "02",
    title: "Concrete demonstration",
    topic: "TypeScript architecture",
    priority: "Medium",
  },
  {
    id: "03",
    title: "Contrarian opener",
    topic: "Coffee extraction",
    priority: "Medium",
  },
];

// Preserved for backwards compatibility with any tuple-based references
export const stats = overviewStats.map(
  (s) => [s.label, s.value, s.category, s.icon] as const,
);
