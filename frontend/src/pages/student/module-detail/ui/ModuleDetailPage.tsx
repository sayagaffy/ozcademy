import { useParams } from "react-router-dom";

export const ModuleDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 space-y-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/10 blur-xl opacity-50"></div>
            <div className="relative glow-border aspect-video bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                alt="Module Banner"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoe9lx8FWj5eJcwghmlYPp2uX32V3Sp5Cn9bEcCWhTdt4mOrPBW9O-nwSBDpajJo9yygiPMYdkiSzMPImgK1KUyTXYA17hai6DCzyJX-EOqnBph0tSxS8Xh4GiyWwgL6G2kywB7sxkoA3-M2J7Hw-yRzQI4oDfj2Y_UeA50P5f1Pb3SNMOT7350lfVGj95WJm4hnou8REhmTxLOkivAgpEKGj8fDFK0ymemHPnHAw7NIQiCdtzA4P6OYlP5hQRBZGL_vn5P_7GCIc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <button className="relative z-10 w-20 h-20 rounded-full bg-primary/90 text-background-dark flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(242,208,13,0.5)]">
                <span className="material-symbols-outlined text-4xl fill-1">
                  play_arrow
                </span>
              </button>
              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                    LIVE_BITRATE: 4.2MBPS
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Episode 01: Fondasi Suara
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-white">
                    closed_caption
                  </span>
                  <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-white">
                    settings
                  </span>
                  <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-white">
                    fullscreen
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[8px] font-black uppercase tracking-widest rounded">
                  VOD + PODCAST
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  MOD_ID: {id}
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight uppercase leading-none">
                TEKNIK BROADCASTING LEGENDARIS
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-xs text-primary">
                    person
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Aris Budiman
                </span>
                <span className="text-slate-700">|</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                  Eksklusif Ozcademy
                </span>
              </div>
            </div>
            <div className="p-6 border-l-2 border-primary/30 bg-white/5 rounded-r-xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">
                Deskripsi
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Jelajahi rahasia dibalik mikrofon bersama sang legenda, Aris
                Budiman. Dalam modul ini, Anda akan mempelajari seni olah vokal,
                teknik penulisan naskah radio yang memikat, hingga manajemen
                energi saat siaran langsung. Kurikulum ini dirancang khusus untuk
                membawa karakter suara Anda ke level profesional yang mampu
                menghipnotis pendengar.
              </p>
            </div>
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  Kurikulum Modul
                </h3>
                <span className="text-[10px] font-mono text-slate-500">
                  12 MATERI TERSEDIA
                </span>
              </div>
              <div className="space-y-2">
                <div className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-primary/40 hover:bg-white/[0.05] transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-primary transition-colors">
                      01
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-white">
                        Membangun Persona Suara
                      </h4>
                      <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-tighter">
                        Video Lesson • 15:20
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-primary text-xl">
                    play_circle
                  </span>
                </div>
                <div className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-primary/40 hover:bg-white/[0.05] transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-primary transition-colors">
                      02
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-white">
                        Struktur Naskah Berita vs Talkshow
                      </h4>
                      <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-tighter">
                        Audio Lesson • 24:45
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-primary text-xl">
                    mic
                  </span>
                </div>
                <div className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-primary/40 hover:bg-white/[0.05] transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-primary transition-colors">
                      03
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-white">
                        Psikologi Pendengar Modern
                      </h4>
                      <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-tighter">
                        Video Lesson • 18:10
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-primary text-xl">
                    play_circle
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="sticky top-8 space-y-6">
            <div className="p-6 bg-card-dark border border-white/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-[0.2em]">
                    ACCESS_GRANTED
                  </span>
                  <span className="material-symbols-outlined text-primary text-lg">
                    verified
                  </span>
                </div>
                <button className="w-full py-5 bg-primary hover:bg-yellow-400 text-background-dark text-xs font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_10px_30px_rgba(242,208,13,0.2)] transition-all active:scale-95">
                  Mulai Belajar
                </button>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest text-center">
                    Akses Premium Aktif - Termasuk dalam langganan Anda
                  </p>
                  <div className="flex gap-1 mt-2">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-5">
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  Butuh Bimbingan Langsung?
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-tight">
                  Dapatkan feedback personal dari Aris Budiman lewat sesi 1-on-1
                  private video call.
                </p>
              </div>
              <button className="w-full py-4 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-primary/5 transition-colors">
                Pesan Sesi Live Mentor
              </button>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 uppercase">
                  <span>Next Schedule:</span>
                  <span className="text-slate-300">Mon, 14 Oct • 19:00</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between">
                <span className="text-[8px] font-mono text-slate-600 uppercase">
                  CDN_EDGE:
                </span>
                <span className="text-[8px] font-mono text-slate-400">
                  JKT-S01
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[8px] font-mono text-slate-600 uppercase">
                  ENCRYPTION:
                </span>
                <span className="text-[8px] font-mono text-green-600/60">
                  AES-256-GCM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
