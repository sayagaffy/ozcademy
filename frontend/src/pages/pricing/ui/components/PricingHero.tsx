export const PricingHero = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
        <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
          Tier Selection Matrix
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-tight mb-6">
        <span className="text-outline">Investasikan</span> Suaramu
      </h2>
      <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg tracking-wide font-light">
        Pilih paket yang sesuai dengan ambisi Anda.
      </p>
    </div>
  );
};
