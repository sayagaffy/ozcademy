import { Link, Outlet, useLocation } from "react-router-dom";

export const ExplorePage = () => {
  const location = useLocation();
  const isModulesTab = location.pathname.includes("/modules");
  const isMentorsTab = location.pathname.includes("/mentors");

  return (
    <>
      <div className="p-8 pb-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-black tracking-tight uppercase leading-none">
                EKSPLORASI KATALOG
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] mt-3">
                TEMUKAN KEAHLIAN BARU UNTUK MASA DEPAN DIGITAL ANDA
              </p>
            </div>
            <div className="text-right">
              <div className="text-[8px] font-mono text-primary uppercase tracking-[0.2em] mb-1">
                FILTER_ACTIVE: GLOBAL
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                128 SKILL TERSEDIA
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-600 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="w-full bg-card-dark border border-white/10 focus:border-primary/50 text-white pl-16 pr-24 py-5 rounded-xl text-sm font-medium tracking-widest uppercase focus:ring-1 focus:ring-primary/20 glow-search transition-all outline-none placeholder:text-slate-600"
              placeholder="CARI SKILL ATAU MENTOR..."
              type="text"
            />
            <div className="absolute inset-y-0 right-6 flex items-center">
              <kbd className="hidden md:flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-slate-500">
                CMD + K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-8 border-b border-white/5 pb-1">
            <Link
              to="/student/explore/modules"
              className={`text-xs font-black uppercase tracking-[0.2em] pb-4 transition-colors ${
                isModulesTab
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-600 hover:text-slate-400 border-b-2 border-transparent"
              }`}
            >
              Modul VOD & Audio
            </Link>
            <Link
              to="/student/explore/mentors"
              className={`text-xs font-bold uppercase tracking-[0.2em] pb-4 transition-colors ${
                isMentorsTab
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-600 hover:text-slate-400 border-b-2 border-transparent"
              }`}
            >
              Sesi Live Mentor
            </Link>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar">
            <button className="whitespace-nowrap px-8 py-2.5 rounded-full bg-primary text-background-dark text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(242,208,13,0.3)]">
              SEMUA
            </button>
            {["PODCASTING", "LIVE STREAMING", "VOICE ACTING", "AUDIO PRODUCTION", "COPYWRITING"].map((tag) => (
               <button key={tag} className="whitespace-nowrap px-8 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-primary/50 hover:text-white transition-all">
                 {tag}
               </button>
            ))}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
