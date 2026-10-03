"use client";

import { Command, Menu, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  pageTitle?: string;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onCreateClick?: () => void;
}

const DashboardHeader = ({
  pageTitle = "Overview",
  onMenuClick,
  onSearchClick,
  onCreateClick,
}: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur md:px-8">
      {/* Left */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Mobile menu */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="size-5" />
        </Button>

        {/* Desktop breadcrumb */}
        <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
          <span>Workspace</span>
          <span>/</span>
          <span className="text-foreground">{pageTitle}</span>
        </div>

        {/* Mobile title */}
        <div className="truncate text-sm font-semibold sm:hidden">
          {pageTitle}
        </div>
      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Desktop search */}
        <Button
          variant="outline"
          onClick={onSearchClick}
          className="hidden h-9 w-auto gap-2 px-3 text-xs font-normal text-muted-foreground sm:flex"
        >
          <Search className="size-3.5" />

          <span>Search anything</span>

          <span className="ml-4 flex items-center rounded border border-border px-1.5 py-0.5 text-[10px]">
            <Command className="mr-0.5 size-2.5" />K
          </span>
        </Button>

        {/* Mobile search */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search"
          onClick={onSearchClick}
          className="sm:hidden"
        >
          <Search className="size-4" />
        </Button>

        {/* Create */}
        <Button onClick={onCreateClick}>
          <Plus className="size-3.5" />
          <span className="hidden sm:inline">Create</span>
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
