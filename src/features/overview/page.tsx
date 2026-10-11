import Link from "next/link";
import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import {
  overviewStats,
  performanceMetrics,
  performanceBarHeights,
  nextTestQueue,
} from "./data";
import OverviewStatCards from "./components/overview-stat-cards";
import PerformanceOverview from "./components/performance-overview";
import TestQueue from "./components/test-queue";

export default function OverviewPage() {
  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Operational command center"
        title="Good morning, Alex"
        description="Here's what is moving through your content system."
        action={
          <div className="flex gap-2">
            <Button variant="outline">
              <span className="size-1.5 rounded-full bg-slate-400" />
              All projects
              <ChevronDown className="size-3.5" />
            </Button>

            <Button asChild>
              <Link href="/dashboard/ideas">
                <Plus className="size-3.5 mr-1" />
                New idea
              </Link>
            </Button>
          </div>
        }
      />

      <OverviewStatCards stats={overviewStats} />

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <PerformanceOverview
          metrics={performanceMetrics}
          barHeights={performanceBarHeights}
        />

        <TestQueue items={nextTestQueue} />
      </div>
    </div>
  );
}
