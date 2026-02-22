export const FinancialAidSection = () => {
  return (
    <section className="w-full max-w-5xl mb-20">
      <div className="relative bg-card-dark border border-white/10 p-8 technical-border overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-6xl">
            account_balance_wallet
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight uppercase mb-2">
              Terkendala Biaya?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Kami percaya setiap talenta berhak mendapatkan akses edukasi
              berkualitas. Jika Anda memiliki kendala finansial, tim kami siap
              membantu melalui skema bantuan khusus.
            </p>
          </div>
          <div className="shrink-0">
            <button className="group relative px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background-dark font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center">
              Ajukan Skema Cicilan / Beasiswa
              <span className="ml-2 material-symbols-outlined align-middle text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 opacity-30">
          <span className="text-[8px] font-mono uppercase tracking-tighter">
            Financial_Protocol: AID_SCHEME_v2
          </span>
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-[8px] font-mono uppercase tracking-tighter">
            Access: Equitable
          </span>
        </div>
      </div>
    </section>
  );
};
