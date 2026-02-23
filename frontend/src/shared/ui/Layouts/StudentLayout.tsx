import type { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
  sidebarSlot: ReactNode;
}

export const StudentLayout = ({
  children,
  sidebarSlot,
}: StudentLayoutProps) => {
  return (
    <div className="flex min-h-screen overflow-hidden bg-background-dark font-display text-slate-100 selection:bg-primary selection:text-background-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 star-field pointer-events-none opacity-40"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>

      {/* Sidebar Slot */}
      {sidebarSlot}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
        {children}
      </main>
    </div>
  );
};
