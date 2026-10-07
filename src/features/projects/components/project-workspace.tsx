"use client";

import { useState } from "react";

import ProjectSection from "./project-section";
import ProjectTabs from "./project-tabs";
import ProjectOverview from "./project-overview";
import { ProjectResponse } from "../project.schemas";
import { ProjectTab } from "../project.types";

type ProjectWorkspaceProps = {
  project: ProjectResponse;
};

export default function ProjectWorkspace({ project }: ProjectWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("Overview");

  return (
    <ProjectSection
      title={`${project.name} workspace`}
      description="Overview · Audience · Topics · Keywords · Content · Experiments · Patterns"
    >
      <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <ProjectWorkspaceContent project={project} activeTab={activeTab} />
    </ProjectSection>
  );
}

type ProjectWorkspaceContentProps = {
  project: ProjectResponse;
  activeTab: ProjectTab;
};

function ProjectWorkspaceContent({
  project,
  activeTab,
}: ProjectWorkspaceContentProps) {
  switch (activeTab) {
    case "Overview":
      return <ProjectOverview project={project} />;

    case "Audience":
      return (
        <div className="p-5 text-sm text-muted-foreground">
          Audience configuration coming soon.
        </div>
      );

    case "Topics":
    case "Keywords":
    case "Content":
    case "Experiments":
    case "Patterns":
    case "Settings":
      return (
        <div className="p-5 text-sm text-muted-foreground">
          {activeTab} configuration coming soon.
        </div>
      );

    default:
      return null;
  }
}
