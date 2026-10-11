"use client";

import { useState } from "react";
import { ChevronDown, Inbox, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { initialIdeas, type IdeaItem, type IdeaStatus } from "./ideas.data";
import IdeaDetail from "./components/idea-detail";

const boardStatuses: IdeaStatus[] = ["Inbox", "Selected", "Briefing"];

export default function IdeasPage() {
  const [ideas] = useState<IdeaItem[]>(initialIdeas);
  const [view, setView] = useState<"board" | "list">("board");
  const [selectedIdea, setSelectedIdea] = useState<IdeaItem | null>(null);
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState("All");

  const projects = ["All", ...Array.from(new Set(ideas.map((i) => i.project)))];

  const filtered = ideas.filter((idea) => {
    const matchesQuery = idea.title.toLowerCase().includes(query.toLowerCase());
    const matchesProject = selectedProject === "All" || idea.project === selectedProject;
    return matchesQuery && matchesProject;
  });

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Capture → triage → develop → convert"
        title="Ideas"
        description="An inbox for opportunities before they become briefs."
        action={
          <Button onClick={() => setSelectedIdea(ideas[0])}>
            <Plus className="size-3.5" />
            New idea
          </Button>
        }
      />

      {/* Filter and View toolbar */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div className="flex h-9 min-w-[220px] flex-1 items-center gap-2 rounded-md border border-border bg-background px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ideas..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Project filter */}
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

        {/* View toggle */}
        <div className="flex rounded-md border border-border p-0.5">
          <button
            onClick={() => setView("board")}
            className={`rounded px-3 py-1 text-xs transition-colors ${
              view === "board"
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Board
          </button>
          <button
            onClick={() => setView("list")}
            className={`rounded px-3 py-1 text-xs transition-colors ${
              view === "list"
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Board or List view */}
      {view === "board" ? (
        <div className="grid gap-4 lg:grid-cols-3">
          {boardStatuses.map((status) => {
            const statusItems = filtered.filter((i) => i.status === status);
            return (
              <div
                key={status}
                className="rounded-xl border border-border bg-muted/20 p-3"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {status}
                  </h2>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                    {statusItems.length}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {statusItems.map((idea) => (
                    <button
                      key={idea.id}
                      onClick={() => setSelectedIdea(idea)}
                      className="rounded-lg border border-border bg-card p-4 text-left shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xs font-semibold leading-5 text-card-foreground">
                          {idea.title}
                        </h3>
                        <Badge
                          variant={
                            idea.priority === "High"
                              ? "destructive"
                              : "secondary"
                          }
                          className="shrink-0"
                        >
                          {idea.priority}
                        </Badge>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <Badge variant="outline" className="text-[10px]">
                          {idea.project}
                        </Badge>
                        <Badge variant="secondary" className="text-[10px]">
                          {idea.topic}
                        </Badge>
                      </div>

                      <p className="mt-3 text-[10px] text-muted-foreground">
                        Source: {idea.source}
                      </p>
                    </button>
                  ))}
                  {statusItems.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border py-8 text-center text-xs text-muted-foreground">
                      No ideas in {status.toLowerCase()}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Idea inventory</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {filtered.length} opportunities currently recorded
            </p>
          </div>
          <div className="divide-y divide-border">
            {filtered.map((idea) => (
              <button
                key={idea.id}
                onClick={() => setSelectedIdea(idea)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40"
              >
                <Inbox className="size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1">
                  <strong className="block truncate text-xs font-medium">
                    {idea.title}
                  </strong>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">
                    {idea.project} · {idea.topic} · {idea.source}
                  </span>
                </span>
                <Badge variant="outline">{idea.status}</Badge>
                <Badge
                  variant={
                    idea.priority === "High" ? "destructive" : "secondary"
                  }
                >
                  {idea.priority}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Idea detail drawer */}
      <IdeaDetail
        idea={selectedIdea}
        onClose={() => setSelectedIdea(null)}
      />
    </div>
  );
}

