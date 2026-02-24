import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../../pages/auth";
import { HomePage } from "../../pages/home";
import { MentorDirectoryPage } from "../../pages/mentor-directory";
import { PricingPage } from "../../pages/pricing";
import { ProgramPage } from "../../pages/program";

// Student Dashboard Imports
import { BookingSuccessPage } from "../../pages/student/booking-success";
import { ExplorePage, MentorsTab, ModulesTab } from "../../pages/student/explore";
import { MentorDetailPage } from "../../pages/student/mentor-detail";
import { ModuleDetailPage } from "../../pages/student/module-detail";
import { MyLearningPage } from "../../pages/student/my-learning";
import { StudentLayout } from "../../shared/ui/Layouts/StudentLayout";
import { Sidebar } from "../../widgets/Sidebar/Sidebar";

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
          <Route path="booking-success" element={<BookingSuccessPage />} />
          <Route path="my-learning" element={<MyLearningPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
