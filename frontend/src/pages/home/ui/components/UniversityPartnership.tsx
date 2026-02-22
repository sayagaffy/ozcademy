import { Button } from "../../../../shared/ui/Button/Button";
import { Section } from "../../../../shared/ui/Section/Section";

export const UniversityPartnership = () => {
  return (
    <Section className="pt-0 pb-24">
      <div className="relative bg-primary p-12 lg:p-16 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-background-dark/10 border border-background-dark/20 rounded mb-6 text-[10px] font-black uppercase tracking-widest text-background-dark">
            University Partnership
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-background-dark uppercase leading-tight mb-4">
            Bawa OZCADEMY ke <br className="hidden lg:block" /> Kampus Anda
          </h2>
          <p className="text-background-dark/70 font-medium max-w-xl text-lg">
            Program kurikulum industri yang disesuaikan untuk mahasiswa Ilmu
            Komunikasi dan Multimedia.
          </p>
        </div>
        <div className="relative z-10">
          <Button variant="inverse" size="lg" className="px-10">
            Hubungi Tim Sales
          </Button>
        </div>
      </div>
    </Section>
  );
};
