"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Archive,
  BookOpen,
  Command,
  FileText,
  FlaskConical,
  FolderKanban,
  GitBranch,
  Lightbulb,
  Menu,
  Moon,
  Plus,
  Search,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  pageTitle?: string;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onCreateClick?: () => void;
}

function getTitleFromPathname(path: string): string {
  if (path.includes("/dashboard/projects")) return "Projects";
  if (path.includes("/dashboard/ideas")) return "Ideas";
  if (path.includes("/dashboard/briefs")) return "Briefs";
  if (path.includes("/dashboard/content")) return "Content";
  if (path.includes("/dashboard/research")) return "Research";
  if (path.includes("/dashboard/experiments")) return "Experiments";
  if (path.includes("/dashboard/learnings")) return "Learnings";
  if (path.includes("/dashboard/patterns")) return "Patterns";
  if (path.includes("/dashboard/settings")) return "Settings";
  if (path.includes("/dashboard/overview")) return "Overview";
  return "Overview";
}

const searchableDestinations = [
  { label: "Ideas", href: "/dashboard/ideas", icon: Lightbulb, desc: "Inbox for opportunities and hooks" },
  { label: "Briefs", href: "/dashboard/briefs", icon: FileText, desc: "Pre-production structured execution plans" },
  { label: "Content", href: "/dashboard/content", icon: Archive, desc: "Published library and audience signals" },
  { label: "Research", href: "/dashboard/research", icon: BookOpen, desc: "Tracked accounts and reference library" },
  { label: "Experiments", href: "/dashboard/experiments", icon: FlaskConical, desc: "Active A/B tests and variants" },
  { label: "Learnings", href: "/dashboard/learnings", icon: Sparkles, desc: "Evidence and observation knowledge base" },
  { label: "Patterns", href: "/dashboard/patterns", icon: GitBranch, desc: "Validated repeatable content patterns" },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban, desc: "Workspace strategic configurations" },
];

const creatableEntities = [
  { label: "New idea", href: "/dashboard/ideas", desc: "Capture a raw hook or topic into the inbox" },
  { label: "New brief", href: "/dashboard/briefs", desc: "Draft an execution plan for production" },
  { label: "New content", href: "/dashboard/content", desc: "Log published content piece and baseline" },
  { label: "New experiment", href: "/dashboard/experiments", desc: "Design a hypothesis and test variable" },
  { label: "Capture learning", href: "/dashboard/learnings", desc: "Document evidence and next action" },
];

const DashboardHeader = ({
  pageTitle,
  onMenuClick,
  onSearchClick,
  onCreateClick,
}: DashboardHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setCreateOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const displayTitle =
    pageTitle ?? (pathname ? getTitleFromPathname(pathname) : "Overview");
  const handleMenuClick = onMenuClick ?? toggleSidebar;

  const handleOpenSearch = () => {
    if (onSearchClick) {
      onSearchClick();
    } else {
      setSearchOpen(true);
    }
  };

  const handleOpenCreate = () => {
    if (onCreateClick) {
      onCreateClick();
    } else {
      setCreateOpen(true);
    }
  };

  const filteredDestinations = searchableDestinations.filter((d) =>
    d.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-0 flex h-auto shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur md:px-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation"
            onClick={handleMenuClick}
            className="md:hidden"
          >
            <Menu className="size-5" />
          </Button>

          {/* Desktop breadcrumb */}
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <span>Workspace</span>
            <span>/</span>
            <span className="text-foreground">{displayTitle}</span>
          </div>

          {/* Mobile title */}
          <div className="truncate text-sm font-semibold sm:hidden">
            {displayTitle}
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Desktop search button */}
          <Button
            variant="outline"
            onClick={handleOpenSearch}
            className="hidden h-9 w-auto gap-2 px-3 text-xs font-normal text-muted-foreground sm:flex"
          >
            <Search className="size-3.5" />
            <span>Search anything</span>
            <span className="ml-4 flex items-center rounded border border-border px-1.5 py-0.5 text-[10px]">
              <Command className="mr-0.5 size-2.5" />K
            </span>
          </Button>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={handleOpenSearch}
            className="sm:hidden"
          >
            <Search className="size-4" />
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:bg-muted"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>

          {/* Create button */}
          <Button onClick={handleOpenCreate}>
            <Plus className="size-3.5" />
            <span className="hidden sm:inline">Create</span>
          </Button>
        </div>
      </header>

      {/* Global Quick Search Modal */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search workspace"
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-20 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-border bg-background p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex flex-1 items-center gap-2">
                <Search className="size-4 text-muted-foreground" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search workspace sections..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="rounded-md p-1 hover:bg-muted"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex max-h-80 flex-col gap-1 overflow-y-auto">
              {filteredDestinations.map((dest) => {
                const Icon = dest.icon;
                return (
                  <button
                    key={dest.href}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      router.push(dest.href);
                    }}
                    className="flex items-center gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-muted"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                      <Icon className="size-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold">{dest.label}</div>
                      <div className="truncate text-[11px] text-muted-foreground">
                        {dest.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Global Quick Create Modal */}
      {createOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Create new workspace item"
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-20 backdrop-blur-sm"
          onClick={() => setCreateOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-border bg-background p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h2 className="text-sm font-semibold">Create something new</h2>
              <button
                onClick={() => setCreateOpen(false)}
                aria-label="Close create"
                className="rounded-md p-1 hover:bg-muted"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Choose an operational starting point for your content workflow:
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {creatableEntities.map((entity) => (
                <button
                  key={entity.label}
                  onClick={() => {
                    setCreateOpen(false);
                    router.push(entity.href);
                  }}
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-left transition-colors hover:border-primary/50 hover:bg-muted/40"
                >
                  <div>
                    <strong className="block text-xs font-semibold">
                      {entity.label}
                    </strong>
                    <span className="text-[11px] text-muted-foreground">
                      {entity.desc}
                    </span>
                  </div>
                  <Plus className="size-3.5 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
