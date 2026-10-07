"use client";

import { cn } from "@/lib/utils";
import { ProjectTab } from "../project.types";
import { PROJECT_TABS } from "../project.constant";

type ProjectTabsProps = {
  activeTab: ProjectTab;
  onTabChange: (tab: ProjectTab) => void;
};

export default function ProjectTabs({
  activeTab,
  onTabChange,
}: ProjectTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-border px-5 pt-3">
      {PROJECT_TABS.map((tab) => {
        const active = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            aria-pressed={active}
            onClick={() => onTabChange(tab)}
            className={cn(
              "rounded-t px-3 py-2 text-xs transition-colors",
              active
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
