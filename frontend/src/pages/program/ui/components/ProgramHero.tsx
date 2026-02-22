import { Section } from "../../../../shared/ui/Section/Section";

export function ProgramHero() {
  return (
    <Section className="mb-20 text-center">
        <div className="technical-label mb-6 text-primary tracking-[0.8em]">Career_Path_Selection</div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            <span className="text-outline">PILIH JALUR</span><br/>KARIRMU
        </h1>
        <p className="mt-8 text-slate-400 max-w-xl mx-auto text-sm tracking-widest uppercase font-medium">
            Tentukan spesialisasi digitalmu dan mulai perjalanan profesional bersama mentor terbaik.
        </p>
    </Section>
  );
}
