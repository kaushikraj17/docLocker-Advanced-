// app/dashboard/layout.js
import DashboardShell from "./DashboardShell";

export const metadata = {
  title: "DocLocker | Dashboard",
  description: "Secure and Easy Access",
};

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
