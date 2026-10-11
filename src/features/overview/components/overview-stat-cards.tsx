import Link from "next/link";
import type { OverviewStat } from "../data";
import { ArrowRight } from "lucide-react";

interface OverviewStatCardsProps {
  stats: OverviewStat[];
}

function getCategoryHref(category: string): string {
  switch (category.toLowerCase()) {
    case "experiments":
      return "/dashboard/experiments";
    case "content":
      return "/dashboard/content";
    case "learnings":
      return "/dashboard/learnings";
    case "patterns":
      return "/dashboard/patterns";
    default:
      return "/dashboard/overview";
  }
}

export default function OverviewStatCards({ stats }: OverviewStatCardsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const href = getCategoryHref(stat.category);

        return (
          <Link
            key={stat.label}
            href={href}
            className="group block rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-all hover:border-foreground/30 hover:shadow-md"
          >
            <div className="mb-4 flex justify-between text-xs font-medium text-muted-foreground">
              <span>{stat.label}</span>
              <Icon className="size-4 text-primary transition-transform group-hover:scale-110" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold text-card-foreground">
                {stat.value}
              </span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
