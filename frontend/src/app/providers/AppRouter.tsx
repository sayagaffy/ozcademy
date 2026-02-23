import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { PricingPage } from "../../pages/pricing";
import { MentorDirectoryPage } from "../../pages/mentor-directory";
import { LoginPage, RegisterPage } from "../../pages/auth";
import { ProgramPage } from "../../pages/program";

// Student Dashboard Imports
import { StudentLayout } from "../../shared/ui/Layouts/StudentLayout";
import { Sidebar } from "../../widgets/Sidebar/Sidebar";
import { ExplorePage, MentorsTab, ModulesTab } from "../../pages/student/explore";
import { ModuleDetailPage } from "../../pages/student/module-detail";
import { MentorDetailPage } from "../../pages/student/mentor-detail";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/mentors" element={<MentorDirectoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/program" element={<ProgramPage />} />

        {/* Student Dashboard Routes */}
        <Route
          path="/student"
          element={
            <StudentLayout sidebarSlot={<Sidebar />}>
              <Outlet />
            </StudentLayout>
          }
        >
          <Route index element={<Navigate to="explore" replace />} />

          <Route path="explore" element={<ExplorePage />}>
            <Route index element={<Navigate to="modules" replace />} />
            <Route path="modules" element={<ModulesTab />} />
            <Route path="mentors" element={<MentorsTab />} />
          </Route>

          <Route path="module/:id" element={<ModuleDetailPage />} />
          <Route path="mentor/:id" element={<MentorDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
