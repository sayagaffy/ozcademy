import { Header } from "../../../widgets/Header/Header";
import { Footer } from "../../../widgets/Footer/Footer";
import { PricingHero } from "./components/PricingHero";
import { PricingCard } from "./components/PricingCard";
import { FinancialAidSection } from "./components/FinancialAidSection";

export const PricingPage = () => {
  return (
    <>
      <div className="fixed inset-0 star-field pointer-events-none"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background-dark/20 to-background-dark pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col items-center px-6 py-12 max-w-7xl mx-auto w-full relative z-10">
          <PricingHero />

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 w-full max-w-5xl mb-24">
            <PricingCard
              title="Langganan OZCADEMY"
              price="Rp 99.000"
              period="/ bulan"
              ctaText="Mulai Uji Coba Gratis"
              features={[
                {
                  text: "Akses tanpa batas ke SELURUH Modul Video & Audio",
                  highlighted: true,
                },
                { text: "Workbook yang dapat diunduh" },
                { text: "Akses Komunitas" },
                { text: "Sertifikat Resmi" },
              ]}
              metadata={{ model: "SUB_01", level: "CORE" }}
              footerText="System_Check: Clear"
            />

            <PricingCard
              isFeatured
              title="Executive Coaching"
              subtitle="Bayar Per Sesi - Pilih kelas 1-on-1, Grup 5, atau Grup 10 bersama praktisi ahli"
              price="Rp 500.000"
              period="/ sesi"
              ctaText="Pesan Mentor"
              features={[
                { text: "Semua fitur Paket Core" },
                { text: "Sesi Live Interaktif", highlighted: true },
                { text: "Review Portofolio Langsung" },
                { text: "Konsultasi Strategi Karir" },
                { text: "Tiket Audisi Jalur Cepat" },
              ]}
              metadata={{ model: "LIVE_02", level: "ELITE" }}
              footerText="Direct_Access: Enabled"
              footerIcon
            />
          </div>

          <FinancialAidSection />

          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex flex-wrap justify-center gap-12 opacity-30">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono tracking-tighter uppercase">
                  SECURE_PAYMENT_v4.0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono tracking-tighter uppercase">
                  GLOBAL_ACCESS_NODE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono tracking-tighter uppercase">
                  24/7_SUPPORT_OS
                </span>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
