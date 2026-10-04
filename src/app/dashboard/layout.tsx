"use client";

import DashboardHeader from "@/components/layout/dashboard-header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties, type ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width-icon": "4.0rem",
        } as CSSProperties
      }
    >
      <DashboardSidebar />

      <SidebarInset>
        <DashboardHeader />

        <main className="min-h-0 flex-1 px-4 md:px-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
