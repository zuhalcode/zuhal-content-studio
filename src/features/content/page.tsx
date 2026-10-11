"use client";

import { useState } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  initialContent,
  type ContentItem,
  type ContentPerformance,
} from "./content.data";

function getPerformanceBadgeVariant(perf: ContentPerformance) {
  if (perf === "Above baseline") return "secondary";
  if (perf === "Below baseline") return "destructive";
  return "outline";
}

export default function ContentPage() {
  const [content] = useState<ContentItem[]>(initialContent);
  const [isGrid, setIsGrid] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const projects = ["All", ...Array.from(new Set(content.map((c) => c.project)))];

  const filtered = content.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchesProject =
      selectedProject === "All" || item.project === selectedProject;
    return matchesQuery && matchesProject;
  });

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Published library"
        title="Content"
        description="Review the work that shipped and the signals it is generating."
        action={
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsGrid(!isGrid)}
            >
              {isGrid ? "Table view" : "Grid view"}
            </Button>
            <Button>
              <Plus className="size-3.5" />
              New content
            </Button>
          </div>
        }
      />

      {/* Filter toolbar */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div className="flex h-9 min-w-[220px] flex-1 items-center gap-2 rounded-md border border-border bg-background px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search content..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-1">
          {projects.map((proj) => (
            <button
              key={proj}
              onClick={() => setSelectedProject(proj)}
              className={`rounded-md px-2.5 py-1.5 text-xs transition-colors ${
                selectedProject === proj
                  ? "bg-secondary font-medium text-secondary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {proj}
            </button>
          ))}
        </div>
      </div>

      {/* View: Grid or Table */}
      {isGrid ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-foreground/30"
            >
              <div className="flex h-28 items-end bg-muted/60 p-4">
                <div className="h-1/2 w-full rounded bg-muted-foreground/20" />
              </div>
              <div className="p-4">
                <h2 className="text-xs font-semibold leading-5 text-card-foreground">
                  {item.title}
                </h2>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {item.project} · {item.format}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs font-medium">{item.views} views</span>
                  <Badge variant={getPerformanceBadgeVariant(item.performance)}>
                    {item.performance}
                  </Badge>
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-border py-12 text-center text-xs text-muted-foreground">
              No content matched your search query.
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Content library</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Sorted by recently published
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  {[
                    "Content",
                    "Project",
                    "Format",
                    "Published",
                    "Views",
                    "Retention",
                    "Performance",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-muted/40"
                  >
                    <td className="max-w-[280px] px-5 py-4 text-xs font-medium text-card-foreground">
                      {item.title}
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {item.project}
                    </td>
                    <td className="px-5 py-4 text-xs">{item.format}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {item.publishedDate}
                    </td>
                    <td className="px-5 py-4 text-xs font-medium">{item.views}</td>
                    <td className="px-5 py-4 text-xs font-medium">
                      {item.retention}
                    </td>
                    <td className="px-5 py-4">
                      <Badge
                        variant={getPerformanceBadgeVariant(item.performance)}
                      >
                        {item.performance}
                      </Badge>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-12 text-center text-xs text-muted-foreground"
                    >
                      No content matching &quot;{query}&quot;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

