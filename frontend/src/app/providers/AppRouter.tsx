import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { PricingPage } from "../../pages/pricing";
import { MentorDirectoryPage } from "../../pages/mentor-directory";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/mentors" element={<MentorDirectoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
