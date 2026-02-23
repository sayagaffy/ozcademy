import { Footer } from "../../../widgets/Footer/Footer";
import { Header } from "../../../widgets/Header/Header";
import { ProgramEnterprise } from "./components/ProgramEnterprise";
import { ProgramHero } from "./components/ProgramHero";
import { ProgramTracks } from "./components/ProgramTracks";

export default function ProgramPage() {
  return (
    <>
      <div className="fixed inset-0 star-field pointer-events-none"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      <div className="fixed inset-0 hero-glow pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-32">
          <ProgramHero />
          <ProgramTracks />
          <ProgramEnterprise />
        </main>
        <Footer />

        {/* Floating Metadata */}
        <div className="fixed bottom-8 left-8 pointer-events-none hidden lg:block z-50">
          <div className="text-[9px] font-mono leading-relaxed text-slate-600 uppercase tracking-widest">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></div>
              <span>Track_Selector_Active</span>
            </div>
            <div>Lat: -6.9175 | Long: 107.6191</div>
          </div>
        </div>
      </div>
    </>
  );
}
