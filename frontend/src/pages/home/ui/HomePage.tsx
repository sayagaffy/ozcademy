import { Header } from "../../../widgets/Header/Header";
import { Footer } from "../../../widgets/Footer/Footer";
import { HeroSection } from "./components/HeroSection";
import { CareerTracks } from "./components/CareerTracks";
import { UniversityPartnership } from "./components/UniversityPartnership";

export const HomePage = () => {
  return (
    <>
      <div className="fixed inset-0 star-field pointer-events-none"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      <div className="fixed inset-0 hero-glow pointer-events-none"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CareerTracks />
          <UniversityPartnership />
        </main>
        <Footer />
      </div>
    </>
  );
};
