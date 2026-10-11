import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import OverviewSection from "./overview-section";
import type { NextTestQueueItem } from "../data";

interface TestQueueProps {
  items: NextTestQueueItem[];
}

export default function TestQueue({ items }: TestQueueProps) {
  return (
    <OverviewSection
      title="Next test queue"
      description="Experiments waiting to be run"
    >
      <div className="divide-y divide-border">
        {items.map((item) => (
          <Link
            key={item.id}
            href="/dashboard/experiments"
            className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/40"
          >
            <span className="font-mono text-[10px] text-muted-foreground">
              {item.id}
            </span>
            <span className="flex-1 text-xs font-medium text-card-foreground">
              {item.title}
              <span className="mt-1 block text-[11px] text-muted-foreground">
                {item.topic}
              </span>
            </span>
            <Badge
              variant={item.priority === "High" ? "destructive" : "secondary"}
            >
              {item.priority}
            </Badge>
          </Link>
        ))}
      </div>
    </OverviewSection>
  );
}
