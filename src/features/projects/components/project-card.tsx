"use client";

import { FolderKanban } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProjectResponse } from "../project.schemas";

type ProjectCardProps = {
  project: ProjectResponse;
  selected?: boolean;
  onSelect?: () => void;
};

export default function ProjectCard({
  project,
  selected,
  onSelect,
}: ProjectCardProps) {
  const statusLabel =
    project.status.charAt(0).toUpperCase() + project.status.slice(1);

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "rounded-xl border p-5 text-left shadow-sm transition-colors",
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-card hover:border-foreground/30",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
          <FolderKanban className="size-4" />
        </div>

        <Badge>{statusLabel}</Badge>
      </div>

      <h2 className="mt-5 text-base font-semibold">{project.name}</h2>

      <p className="mt-1 text-xs leading-5 text-muted-foreground">
        {project.description ?? "No description provided."}
      </p>
    </button>
  );
}
