"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/use-auth";
import { authService } from "@/features/auth/auth.services";

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
  LogOut,
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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      {
        label: "Content",
        href: "/dashboard/content",
        icon: Archive,
      },
      {
        label: "Research",
        href: "/dashboard/research",
        icon: BookOpen,
      },
    ],
  },
  {
    label: "ANALYSIS",
    items: [
      {
        label: "Experiments",
        href: "/dashboard/experiments",
        icon: FlaskConical,
      },
      {
        label: "Learnings",
        href: "/dashboard/learnings",
        icon: Sparkles,
      },
      {
        label: "Patterns",
        href: "/dashboard/patterns",
        icon: GitBranch,
      },
    ],
  },
  {
    label: "SYSTEM",
    items: [
      {
        label: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
      },
      {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { logout, loading } = useAuth();
  const { isMobile } = useSidebar();
  const [user, setUser] = useState<{ id?: string; email?: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    authService
      .me()
      .then((res) => {
        if (mounted && res?.data) {
          setUser(res.data);
        }
      })
      .catch(() => {
        // Silently ignore if unauthenticated or error
      });

    return () => {
      mounted = false;
    };
  }, []);

  const displayName = user?.email ? user.email.split("@")[0] : "Alex Morgan";
  const displayRole = user?.email ?? "Owner";
  const initials = user?.email
    ? user.email.substring(0, 2).toUpperCase()
    : "AM";

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
                          isActive={pathname === item.href}
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

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => logout()}
              disabled={loading}
              tooltip="Log out"
              className="cursor-pointer text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive active:bg-destructive/15"
            >
              <LogOut className="size-4" />
              <span>{loading ? "Logging out..." : "Log out"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="border-t border-sidebar-border pt-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    tooltip={displayName}
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                      {initials}
                    </div>

                    <div className="min-w-0 flex-1 text-left">
                      <div className="truncate text-xs font-medium">
                        {displayName}
                      </div>

                      <div className="truncate text-[10px] text-muted-foreground">
                        {displayRole}
                      </div>
                    </div>

                    <MoreHorizontal className="size-4 shrink-0" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                        {initials}
                      </div>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{displayName}</span>
                        <span className="truncate text-xs text-muted-foreground">
                          {displayRole}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    disabled={loading}
                    className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <LogOut className="mr-2 size-4" />
                    <span>{loading ? "Logging out..." : "Log out"}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
