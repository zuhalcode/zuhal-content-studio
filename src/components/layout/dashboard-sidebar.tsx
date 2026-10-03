"use client";

import {
  Archive,
  BookOpen,
  ChevronDown,
  CircleHelp,
  FileText,
  FlaskConical,
  FolderKanban,
  GitBranch,
  LayoutDashboard,
  Lightbulb,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navGroups = [
  {
    label: "WORKSPACE",
    items: [
      ["Overview", LayoutDashboard],
      ["Ideas", Lightbulb],
      ["Briefs", FileText],
      ["Content", Archive],
      ["Research", BookOpen],
    ],
  },
  {
    label: "ANALYSIS",
    items: [
      ["Experiments", FlaskConical],
      ["Learnings", Sparkles],
      ["Patterns", GitBranch],
    ],
  },
  {
    label: "SYSTEM",
    items: [
      ["Projects", FolderKanban],
      ["Settings", Settings],
    ],
  },
] as const;

interface DashboardSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  onMobileOpenChange: (open: boolean) => void;
}

const DashboardSidebar = ({
  collapsed,
  mobileOpen,
  onCollapsedChange,
  onMobileOpenChange,
}: DashboardSidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => onMobileOpenChange(false)}
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
        />
      )}

      <aside
        className={[
          "flex h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar",
          "transition-[width,transform] duration-200",

          //   Mobile
          "fixed inset-y-0 left-0 z-40",
          mobileOpen ? "translate-x-0" : "-translate-x-full",

          //   Desktop
          "md:relative md:z-auto md:translate-x-0",
          collapsed ? "md:w-[68px]" : "w-[248px]",
        ].join(" ")}
      >
        {/* Brand */}
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                <Zap className="size-4" />
              </div>

              <div className="min-w-0">
                <div className="truncate text-sm font-semibold tracking-tight">
                  Content OS 12
                </div>

                <div className="truncate text-[11px] text-muted-foreground">
                  Personal workspace
                </div>
              </div>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => onCollapsedChange(!collapsed)}
            className={`hidden md:flex ${collapsed} ? "mx-auto" : ""`}
          >
            {collapsed ? (
              <PanelLeftOpen className="size-4" />
            ) : (
              <PanelLeftClose className="size-4" />
            )}
          </Button>
        </div>

        {/* Project */}
        {!collapsed && (
          <div className="shrink-0 p-3">
            <Button
              variant="ghost"
              className="h-auto w-full justify-start gap-3 border border-sidebar-border bg-sidebar-accent/50 p-2.5 hover:bg-sidebar-accent"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted">
                <FolderKanban className="size-4" />
              </div>

              <div className="min-w-0 flex-1 text-left">
                <div className="truncate text-xs font-medium">All projects</div>

                <div className="text-[10px] text-muted-foreground">
                  Project scope
                </div>
              </div>

              <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" />
            </Button>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              {!collapsed && (
                <div className="mb-2 px-2 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
                  {group.label}
                </div>
              )}

              <div className="flex flex-col gap-0.5">
                {group.items.map(([label, Icon]) => {
                  const active = label === "Overview";

                  return (
                    <Button
                      key={label}
                      variant="ghost"
                      title={collapsed ? label : undefined}
                      className={[
                        "h-9",
                        collapsed
                          ? "justify-center px-2"
                          : "justify-start gap-3 px-2.5",
                        active
                          ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent",
                      ].join(" ")}
                    >
                      <Icon className="size-4 shrink-0" />

                      {!collapsed && (
                        <>
                          <span>{label}</span>

                          {label === "Ideas" && (
                            <span className="ml-auto rounded bg-sidebar-accent px-1.5 py-0.5 text-[10px] text-muted-foreground">
                              12
                            </span>
                          )}
                        </>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-sidebar-border p-3">
          {!collapsed && (
            <Button
              variant="ghost"
              className="h-9 w-full justify-start gap-3 px-2.5 text-muted-foreground"
            >
              <CircleHelp className="size-4" />
              Keyboard shortcuts
              <span className="ml-auto text-[10px]">?</span>
            </Button>
          )}

          <div
            className={[
              "mt-3 flex items-center gap-2 border-t border-sidebar-border pt-3",
              collapsed ? "justify-center" : "px-2.5",
            ].join(" ")}
          >
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
              AM
            </div>

            {!collapsed && (
              <>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium">
                    Alex Morgan
                  </div>

                  <div className="text-[10px] text-muted-foreground">Owner</div>
                </div>

                <Button variant="ghost" size="icon" className="size-7">
                  <MoreHorizontal className="size-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
