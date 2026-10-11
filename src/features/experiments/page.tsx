"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { initialExperiments, type ExperimentItem } from "./experiments.data";

const decisionOptions = [
  "Continue testing",
  "Run another test",
  "Adopt pattern",
  "Invalidate",
  "Insufficient evidence",
];

export default function ExperimentsPage() {
  const [experiments] = useState<ExperimentItem[]>(initialExperiments);
  const [selectedId, setSelectedId] = useState<string>(initialExperiments[0].id);
  const [selectedDecision, setSelectedDecision] = useState("Adopt pattern");
  const [rationale, setRationale] = useState("");

  const activeExp =
    experiments.find((e) => e.id === selectedId) ?? experiments[0];

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Hypothesis & measurement"
        title="Experiments"
        description="Run controlled tests on format, hooks, and structure."
        action={
          <Button>
            <Plus className="size-3.5" />
            New experiment
          </Button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[340px_1fr]">
        {/* Experiment Log Sidebar */}
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Experiment log</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {experiments.length} logged tests
            </p>
          </div>

          <div className="divide-y divide-border">
            {experiments.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`w-full border-l-2 p-5 text-left transition-colors ${
                  selectedId === exp.id
                    ? "border-primary bg-muted/60"
                    : "border-transparent hover:bg-muted/30"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-xs font-semibold text-card-foreground">
                    {exp.title}
                  </strong>
                  <Badge
                    variant={exp.status === "Active" ? "secondary" : "outline"}
                    className="shrink-0 text-[10px]"
                  >
                    {exp.status}
                  </Badge>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {exp.summary}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Experiment Details */}
        <div className="flex flex-col gap-5">
          {/* Hypothesis statement */}
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">
                {activeExp.code} · {activeExp.status}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {activeExp.title}
              </p>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-muted/40 p-4 sm:col-span-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Question
                </div>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  {activeExp.question}
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Variable
                </div>
                <p className="mt-2 text-sm font-medium">{activeExp.variable}</p>
              </div>

              <div className="rounded-lg bg-muted/40 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Primary Metric
                </div>
                <p className="mt-2 text-sm font-medium">{activeExp.metric}</p>
              </div>
            </div>

            <div className="px-5 pb-5">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Hypothesis
              </div>
              <p className="text-sm leading-relaxed text-card-foreground">
                {activeExp.hypothesis}
              </p>
            </div>
          </div>

          {/* Control vs Variant */}
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">Control versus variant</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Percentage points and percentage change reported separately
              </p>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="flex justify-between">
                  <Badge variant="outline">Control</Badge>
                  <span className="text-xs text-muted-foreground">
                    {activeExp.controlContent}
                  </span>
                </div>
                <div className="mt-6 text-3xl font-semibold">
                  {activeExp.controlMetricValue}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activeExp.metric} · {activeExp.controlViews}
                </p>
              </div>

              <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-50/20 p-4 dark:bg-emerald-950/20">
                <div className="flex justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                  >
                    Variant B
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activeExp.variantContent}
                  </span>
                </div>
                <div className="mt-6 text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeExp.variantMetricValue}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activeExp.metric} · {activeExp.variantViews}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-border px-5 py-4 text-xs">
              <div>
                <span className="text-muted-foreground">Absolute delta:</span>
                <strong className="ml-2 font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeExp.absoluteDelta}
                </strong>
              </div>
              <div>
                <span className="text-muted-foreground">Relative delta:</span>
                <strong className="ml-2 font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeExp.relativeDelta}
                </strong>
              </div>
            </div>
          </div>

          {/* Decision */}
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">Decision</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Document test conclusions to feed the Pattern library
              </p>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {decisionOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedDecision(item)}
                    className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
                      selectedDecision === item
                        ? "bg-primary font-medium text-primary-foreground"
                        : "border border-border bg-background text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <textarea
                value={rationale}
                onChange={(e) => setRationale(e.target.value)}
                placeholder="Document decision rationale and next testing loop..."
                className="mt-4 min-h-24 w-full rounded-md border border-border bg-background p-3 text-xs outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

