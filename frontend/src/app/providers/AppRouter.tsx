import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
