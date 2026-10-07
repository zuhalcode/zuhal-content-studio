"use client";

import Link from "next/link";

import {
  Archive,
  BookOpen,
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
  type LucideIcon,
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
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "WORKSPACE",
    items: [
      {
        label: "Overview",
        href: "/dashboard/overview",
        icon: LayoutDashboard,
      },
      {
        label: "Ideas",
        href: "/dashboard/ideas",
        icon: Lightbulb,
        badge: "12",
      },
      {
        label: "Briefs",
        href: "/dashboard/briefs",
        icon: FileText,
      },
      // {
      //   label: "Content",
      //   href: "/dashboard/content",
      //   icon: Archive,
      // },
      // {
      //   label: "Research",
      //   href: "/dashboard/research",
      //   icon: BookOpen,
      // },
    ],
  },
  // {
  //   label: "ANALYSIS",
  //   items: [
  //     {
  //       label: "Experiments",
  //       href: "/experiments",
  //       icon: FlaskConical,
  //     },
  //     {
  //       label: "Learnings",
  //       href: "/learnings",
  //       icon: Sparkles,
  //     },
  //     {
  //       label: "Patterns",
  //       href: "/patterns",
  //       icon: GitBranch,
  //     },
  //   ],
  // },
  {
    label: "SYSTEM",
    items: [
      {
        label: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
      },
      // {
      //   label: "Settings",
      //   href: "/settings",
      //   icon: Settings,
      // },
    ],
  },
];

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="h-svh transition-all duration-400 ">
      {/* Header */}
      <SidebarHeader className="h-[72px] shrink-0 border-b border-sidebar-border p-3">
        <div className="flex h-full items-center gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-3 group-data-[collapsible=icon]:hidden">
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

          <SidebarTrigger
            className="size-8 shrink-0"
            aria-label="Toggle sidebar"
          />
        </div>
      </SidebarHeader>

      {/* ONLY SCROLLABLE AREA */}
      <SidebarContent className="min-h-0 flex-1">
        <div className="overflow-y-auto">
          {navGroups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel className="text-[10px] font-semibold tracking-[0.16em] group-data-[collapsible=icon]:hidden">
                {group.label}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <SidebarMenuItem
                        key={`${group.label}-${item.label}-${index}`}
                      >
                        <SidebarMenuButton
                          asChild
                          tooltip={item.label}
                          className="text-sidebar-foreground/70 hover:bg-sidebar-accent"
                        >
                          <Link href={item.href}>
                            <Icon className="size-4 shrink-0" />

                            <span>{item.label}</span>

                            {item.badge && (
                              <span className="ml-auto rounded bg-sidebar-accent px-1.5 py-0.5 text-[10px] text-muted-foreground">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="shrink-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Keyboard shortcuts"
              className="text-muted-foreground"
            >
              <Link href="/shortcuts">
                <CircleHelp className="size-4" />
                <span>Keyboard shortcuts</span>
                <span className="ml-auto text-[10px]">?</span>
              </Link>
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
