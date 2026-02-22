import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { PricingPage } from "../../pages/pricing";
import { MentorDirectoryPage } from "../../pages/mentor-directory";
import { LoginPage, RegisterPage } from "../../pages/auth";
import { ProgramPage } from "../../pages/program";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/mentors" element={<MentorDirectoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/program" element={<ProgramPage />} />
      </Routes>
    </BrowserRouter>
  );
};
