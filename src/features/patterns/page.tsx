"use client";

import { useState } from "react";
import { ArrowRight, GitBranch, Plus } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { initialPatterns, type PatternItem } from "./patterns.data";

function getStatusBadgeVariant(status: PatternItem["status"]) {
  if (status === "Validated") return "secondary";
  if (status === "Emerging") return "outline";
  return "default";
}

export default function PatternsPage() {
  const [patterns] = useState<PatternItem[]>(initialPatterns);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const statuses = ["All", "Validated", "Emerging", "Hypothesis"];

  const filtered = patterns.filter(
    (p) => selectedStatus === "All" || p.status === selectedStatus
  );

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Strategic knowledge layer"
        title="Patterns"
        description="A library of repeatable signals synthesized from evidence."
        action={
          <Button>
            <Plus className="size-3.5" />
            New pattern
          </Button>
        }
      />

      {/* Filter status buttons */}
      <div className="mb-5 flex flex-wrap gap-2">
        {statuses.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedStatus(item)}
            className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
              selectedStatus === item
                ? "bg-secondary font-medium text-secondary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Patterns Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-foreground/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GitBranch className="size-5" />
              </div>
              <Badge variant={getStatusBadgeVariant(item.status)}>
                {item.status}
              </Badge>
            </div>

            <h2 className="mt-4 text-base font-semibold leading-tight text-card-foreground">
              {item.title}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{item.niche}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
              <div>
                <span className="text-muted-foreground">Evidence</span>
                <strong className="mt-1 block font-semibold">{item.evidence}</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Positive</span>
                <strong className="mt-1 block font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.positive}
                </strong>
              </div>
              <div>
                <span className="text-muted-foreground">Confidence</span>
                <strong className="mt-1 block font-semibold">{item.confidence}</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Experiments</span>
                <strong className="mt-1 block font-semibold">
                  {item.experimentsCount}
                </strong>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-border">
              <Button variant="outline" className="w-full justify-between">
                <span>View pattern details</span>
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border py-12 text-center text-xs text-muted-foreground">
            No patterns found for status &quot;{selectedStatus}&quot;
          </div>
        )}
      </div>
    </div>
  );
}

