import Sidebar from "@/src/features/dashboard/Sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar (hidden on mobile) */}
      <div className="hidden lg:block w-[275px] border-r border-gray-200 bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
