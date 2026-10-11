"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  initialBriefs,
  editorialChecklist,
  type BriefStatus,
  type BriefItem,
} from "./briefs.data";

const filterStatuses: BriefStatus[] = [
  "All",
  "Draft",
  "Ready",
  "Production",
  "Published",
  "Archived",
];

export default function BriefsPage() {
  const [status, setStatus] = useState<BriefStatus>("All");
  const [briefs] = useState<BriefItem[]>(initialBriefs);

  const filteredBriefs = briefs.filter(
    (b) => status === "All" || b.status === status
  );

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Pre-production workspace"
        title="Briefs"
        description="Turn selected opportunities into structured execution plans."
        action={
          <Button>
            <Plus className="size-3.5" />
            New brief
          </Button>
        }
      />

      {/* Filter status buttons */}
      <div className="mb-5 flex flex-wrap gap-2">
        {filterStatuses.map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
              status === item
                ? "bg-primary font-medium text-primary-foreground"
                : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Pipeline Table */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold">Brief pipeline</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Draft → ready → production → published
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                {[
                  "Brief",
                  "Project",
                  "Topic",
                  "Audience",
                  "Funnel",
                  "Format",
                  "Readiness",
                  "Updated",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredBriefs.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-muted/40"
                >
                  <td className="px-5 py-4 text-xs font-medium text-card-foreground">
                    {row.title}
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {row.project}
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {row.topic}
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {row.audience}
                  </td>
                  <td className="px-5 py-4">
                    <Badge variant="secondary">{row.funnel}</Badge>
                  </td>
                  <td className="px-5 py-4 text-xs">{row.format}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-medium">{row.readiness}</span>
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {row.updated}
                  </td>
                </tr>
              ))}
              {filteredBriefs.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="py-8 text-center text-xs text-muted-foreground"
                  >
                    No briefs found for status &quot;{status}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Editorial Workspace & Readiness panel */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Editorial workspace</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              The selected brief is ready for structured editing
            </p>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-2">
            {editorialChecklist.map((item, i) => (
              <button
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-left text-xs transition-colors hover:bg-muted"
              >
                <span
                  className={`flex size-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                    i < 8
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < 8 ? <Check className="size-3" /> : i + 1}
                </span>
                <span className="font-medium">{item}</span>
                <ArrowRight className="ml-auto size-3 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Brief readiness</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Pre-flight validation check
            </p>
          </div>

          <div className="p-5">
            <div className="text-3xl font-semibold">
              8{" "}
              <span className="text-sm font-normal text-muted-foreground">
                / 10
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Add a primary metric and baseline before moving to production.
            </p>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/dashboard/content">
                  <Plus className="size-3.5 mr-1" />
                  Create Content
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

