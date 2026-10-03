import { Activity, FlaskConical, GitBranch, Lightbulb } from "lucide-react";

export const stats = [
  ["Active experiments", "04", "Experiments", FlaskConical],
  ["Unanalyzed content", "07", "Content", Activity],
  ["Pending learnings", "03", "Learnings", Lightbulb],
  ["Emerging patterns", "06", "Patterns", GitBranch],
] as const;
