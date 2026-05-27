import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { mockDashboardData } from "@/lib/mock/deebi";

export default function DashboardPage() {
  return <DashboardShell data={mockDashboardData} />;
}
