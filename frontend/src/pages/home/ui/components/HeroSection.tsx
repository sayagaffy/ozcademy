import { Button } from "../../../../shared/ui/Button/Button";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 lg:py-32 max-w-6xl mx-auto w-full text-center">
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.4em] text-primary uppercase">
          Broadcast Signal: Live from Star Factory
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] max-w-6xl">
        <span className="text-outline">BUKAN SEKADAR</span> <br />
        BICARA. JADILAH <br />
        DIDENGAR.
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl tracking-wide mt-10 font-light leading-relaxed">
        Mulai Karir Digitalmu Bersama Legenda OZ Radio.{" "}
        <br className="hidden md:block" />
        Akses blueprint industri broadcasting langsung dari sumbernya.
      </p>
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          Pilih Jalurmu
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          <span className="material-symbols-outlined text-lg">play_circle</span>
          Tonton Trailer
        </Button>
      </div>
    </section>
  );
};
