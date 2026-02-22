export const Footer = () => {
  return (
    <>
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="technical-label mb-12">
          Didukung oleh warisan OZ Radio Bandung -{" "}
          <span className="text-primary italic">
            The Star Factory sejak 1971.
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:opacity-60 transition-opacity">
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono tracking-tighter">
              EST_IDN: 1971
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="text-[10px] font-mono tracking-tighter">
              LOC: BDG_FACTORY
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono tracking-tighter">
              STATUS: BROADCASTING_LIVE
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="text-[10px] font-mono tracking-tighter">
              NODE: OZ_01
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 left-8 pointer-events-none hidden lg:block z-50">
        <div className="text-[9px] font-mono leading-relaxed text-slate-600 uppercase tracking-widest">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-primary animate-pulse"></div>
            <span>System Frequency: 103.1 MHz</span>
          </div>
          <div>Status: Education_Module_Active</div>
          <div>Encryption: OZ_SECURE_256</div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 pointer-events-none hidden lg:block z-50">
        <div className="text-[9px] font-mono text-slate-600 text-right uppercase tracking-widest">
          <div>© 2024 OZCADEMY</div>
          <div>Digital Career Hub</div>
          <div className="mt-1 text-primary/40">
            Broadcasting Excellence Since 1971
          </div>
        </div>
      </div>
    </>
  );
};
