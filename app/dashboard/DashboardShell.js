"use client";

import NavbarDashboard from "@/component/Dashboard/NavbarDashboard";
import LeftNavigation from "@/component/Dashboard/LeftNavigation";

export default function DashboardShell({ children }) {
  return (
    <>
      <NavbarDashboard />
      <div className="flex">
        <LeftNavigation />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
