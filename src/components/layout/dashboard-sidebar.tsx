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
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

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

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Brand */}
      <SidebarHeader className="h-[72px] border-b border-sidebar-border p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
            <Zap className="size-4" />
          </div>

          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <div className="truncate text-sm font-semibold tracking-tight">
              Content OS 12
            </div>

            <div className="truncate text-[11px] text-muted-foreground">
              Personal workspace
            </div>
          </div>
        </div>
      </SidebarHeader>

      {/* Project */}
      <div className="p-3 group-data-[collapsible=icon]:hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="h-auto border border-sidebar-border bg-sidebar-accent/50 hover:bg-sidebar-accent"
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
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      {/* Navigation */}
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] font-semibold tracking-[0.16em] group-data-[collapsible=icon]:hidden">
              {group.label}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map(([label, Icon]) => {
                  const active = label === "Overview";

                  return (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton
                        isActive={active}
                        tooltip={label}
                        className={
                          active
                            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent"
                        }
                      >
                        <Icon className="size-4 shrink-0" />

                        <span>{label}</span>

                        {label === "Ideas" && (
                          <span className="ml-auto rounded bg-sidebar-accent px-1.5 py-0.5 text-[10px] text-muted-foreground">
                            12
                          </span>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Keyboard shortcuts"
              className="text-muted-foreground"
            >
              <CircleHelp className="size-4" />
              <span>Keyboard shortcuts</span>
              <span className="ml-auto text-[10px]">?</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="border-t border-sidebar-border pt-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Alex Morgan">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                  AM
                </div>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium">
                    Alex Morgan
                  </div>

                  <div className="text-[10px] text-muted-foreground">Owner</div>
                </div>

                <MoreHorizontal className="size-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
