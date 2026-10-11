"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";

import ProjectCard from "./components/project-card";
import AudienceProfile from "./components/audience-profile";
import ProjectWorkspace from "./components/project-workspace";
import { useProject } from "./use-project";

export default function ProjectPage() {
  const { projects, loading } = useProject();

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ??
    projects[0] ??
    null;

  useEffect(() => {
    if (!selectedProjectId && projects.length > 0) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Workspace configuration"
        title="Projects"
        description="Define the strategic foundation your content system operates on."
        action={
          <Button>
            <Plus className="size-3.5" />
            New project
          </Button>
        }
      />

      {loading ? (
        <ProjectListSkeleton />
      ) : projects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <h3 className="text-sm font-semibold">No projects yet</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Create your first strategic foundation to begin organizing topics and content.
          </p>
        </div>
      ) : (
        <section aria-label="Projects" className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              selected={project.id === selectedProject?.id}
              onSelect={() => setSelectedProjectId(project.id)}
            />
          ))}
        </section>
      )}

      {selectedProject && (
        <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
          <ProjectWorkspace project={selectedProject} />

          <AudienceProfile />
        </section>
      )}
    </div>
  );
}

function ProjectListSkeleton() {
  return (
    <section
      aria-label="Loading projects"
      className="grid gap-4 md:grid-cols-3"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="h-40 animate-pulse rounded-xl border border-border bg-muted/40"
        />
      ))}
    </section>
  );
}
