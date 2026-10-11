"use client";

import { useState } from "react";
import { Plus, Search, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { initialLearnings, type LearningItem } from "./learnings.data";

export default function LearningsPage() {
  const [learnings] = useState<LearningItem[]>(initialLearnings);
  const [query, setQuery] = useState("");
  const [confidences, setConfidences] = useState<Record<string, "Low" | "Medium" | "High">>(
    Object.fromEntries(initialLearnings.map((l) => [l.id, l.defaultConfidence]))
  );

  const filtered = learnings.filter(
    (l) =>
      l.observation.toLowerCase().includes(query.toLowerCase()) ||
      l.learning.toLowerCase().includes(query.toLowerCase()) ||
      l.evidence.toLowerCase().includes(query.toLowerCase())
  );

  const handleSetConfidence = (id: string, level: "Low" | "Medium" | "High") => {
    setConfidences((prev) => ({ ...prev, [id]: level }));
  };

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Evidence knowledge base"
        title="Learnings"
        description="Browse observations, evidence, and decisions you can reuse."
        action={
          <Button>
            <Plus className="size-3.5" />
            Capture learning
          </Button>
        }
      />

      {/* Search and filters */}
      <div className="mb-5 flex flex-wrap gap-2">
        <div className="flex h-9 min-w-[240px] flex-1 items-center gap-2 rounded-md border border-border bg-background px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search observations, learning, evidence..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        {/* Knowledge Articles */}
        <div className="flex flex-col gap-4">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Observation
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-card-foreground">
                    {item.observation}
                  </p>

                  <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Evidence
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.evidence}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Learning
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground">
                    {item.learning}
                  </p>

                  <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Next action
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.nextAction}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                <span className="text-[11px] text-muted-foreground">
                  Confidence:
                </span>
                {(["Low", "Medium", "High"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => handleSetConfidence(item.id, level)}
                    className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                      confidences[item.id] === level
                        ? "bg-primary font-medium text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {level}
                  </button>
                ))}
                <span className="ml-auto text-[11px] text-muted-foreground">
                  {item.sources}
                </span>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-border py-12 text-center text-xs text-muted-foreground">
              No learnings matching &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Traceability Panel */}
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">Evidence traceability</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Upstream signals and connections
              </p>
            </div>
            <div className="flex flex-col gap-4 p-5 text-xs">
              <div>
                <span className="text-muted-foreground">Source content</span>
                <strong className="mt-1 block font-medium">3 related contents</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Source experiment</span>
                <strong className="mt-1 block font-medium">EXP-023 · Curiosity hook</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Related pattern</span>
                <strong className="mt-1 block font-medium text-primary">Curiosity + Demonstration</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

