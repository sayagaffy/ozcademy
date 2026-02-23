import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <aside className="w-72 border-r border-white/5 bg-background-dark/80 backdrop-blur-xl flex flex-col z-50 h-full">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-primary rounded text-background-dark">
            <span className="material-symbols-outlined block text-2xl font-black">
              bolt
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none">
              OZCADEMY
            </span>
            <span className="text-[8px] tracking-[0.3em] text-primary font-medium uppercase">
              Skill_Platform
            </span>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/dashboard")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/dashboard"
        >
          <span className="material-symbols-outlined text-xl">grid_view</span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Beranda
          </span>
        </Link>
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/explore")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/explore"
        >
          <span className="material-symbols-outlined text-xl font-black">
            search
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
            Katalog
          </span>
        </Link>
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/learning")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/learning"
        >
          <span className="material-symbols-outlined text-xl">
            local_library
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Pembelajaranku
          </span>
        </Link>
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/community")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/community"
        >
          <span className="material-symbols-outlined text-xl">forum</span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Komunitas
          </span>
        </Link>
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/profile")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/profile"
        >
          <span className="material-symbols-outlined text-xl">
            account_circle
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Profil & Portofolio
          </span>
        </Link>
        <Link
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
            isActive("/student/settings")
              ? "bg-primary text-background-dark font-black shadow-[0_0_20px_rgba(242,208,13,0.2)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          to="/student/settings"
        >
          <span className="material-symbols-outlined text-xl">
            settings_applications
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Pengaturan & Pembiayaan
          </span>
        </Link>
      </nav>
      <div className="p-6 mt-auto">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="text-[8px] font-mono text-primary uppercase tracking-widest">
            CATALOG_SYNC: ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-mono text-slate-400 uppercase">
              System_Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
