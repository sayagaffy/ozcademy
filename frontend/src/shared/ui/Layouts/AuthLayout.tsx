import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  protocolText: string;
  heroTitle: ReactNode;
  heroDescription: string;
}

export function AuthLayout({ children, protocolText, heroTitle, heroDescription }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background-dark font-display text-slate-100 overflow-hidden selection:bg-primary selection:text-background-dark">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden border-r border-white/5">
        <img
          alt="Radio Studio"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2bIykbemfUwIVaQUZUTm7yrSt8IbFIDKDbT0gsjak3eVUAW5uIp9E9liHE9gDPtuhfTL0NT3HeaoPhQG7c9yuMmWTRFQW6FxuYaeD_T-kXl3eFnfbPVN6DAmoIhK7DCRv23bfL4-KNdBXnSZ2HVoTg6AeNqR8qoXRpMVz-A8ft9wOnMtuCbgkpVk0-EqwA8PfOwl_G08-WdcCKAcz3SutH855ieuRbDfOkt0lOObRVgLn8knqYxibJaZAVpoJBHPGfiXIubwQrXo"
        />
        <div className="absolute inset-0 studio-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark/80"></div>

        <div className="relative z-10 p-12 w-full flex flex-col h-full">
           <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg text-background-dark shadow-[0_0_20px_rgba(242,208,13,0.4)]">
              <span className="material-symbols-outlined block text-3xl font-black">bolt</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter leading-none">OZCADEMY</span>
              <span className="text-[10px] tracking-[0.4em] text-primary font-medium uppercase">Heritage_Since_1971</span>
            </div>
          </div>

          <div className="mt-auto max-w-md">
            <div className="text-primary text-[10px] tracking-[0.5em] font-bold uppercase mb-4 flex items-center gap-2">
               <span className="w-2 h-2 bg-primary animate-pulse rounded-full"></span>
               {protocolText}
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-tight mb-4">
              {heroTitle}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed tracking-wide font-light">
               {heroDescription}
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 text-right">
           <div className="text-[8px] font-mono text-white/30 tracking-[0.2em] uppercase space-y-1">
             <div>FREQ: 103.1_MHZ_ACTIVE</div>
             <div>LATENCY: 12MS</div>
             <div>ENCR: AES_256_OZ</div>
           </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative overflow-y-auto">
        <div className="fixed inset-0 star-field pointer-events-none opacity-40"></div>
        <div className="fixed inset-0 grid-pattern pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md my-8">
           {/* Mobile Header (visible only on small screens) */}
           <div className="lg:hidden flex items-center gap-3 mb-12 justify-center">
             <div className="p-2 bg-primary rounded-lg text-background-dark">
               <span className="material-symbols-outlined block text-2xl font-black">bolt</span>
             </div>
             <span className="text-xl font-bold tracking-tighter">OZCADEMY</span>
           </div>

           {children}
        </div>
      </div>
    </div>
  );
}
