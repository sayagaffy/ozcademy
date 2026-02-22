import { Button } from "../../shared/ui/Button/Button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full border-b border-white/5 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary rounded-lg text-background-dark shadow-[0_0_15px_rgba(242,208,13,0.3)]">
          <span className="material-symbols-outlined block text-2xl font-black">
            bolt
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter leading-none">
            OZCADEMY
          </span>
          <span className="technical-label">SYS_v2.5_PRO</span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-10 text-[11px] tracking-[0.25em] text-slate-400 font-bold uppercase">
        <a
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/50 pb-1"
          href="#"
        >
          Program
        </a>
        <a
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/50 pb-1"
          href="#"
        >
          Mentor
        </a>
        <a
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/50 pb-1"
          href="#"
        >
          Harga
        </a>
        <a
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/50 pb-1 flex items-center gap-2"
          href="#"
        >
          Untuk Kampus{" "}
          <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[8px]">
            B2B
          </span>
        </a>
      </nav>
      <div className="flex items-center gap-6">
        <Button variant="primary" size="sm">
          Masuk / Daftar
        </Button>
      </div>
    </header>
  );
};
