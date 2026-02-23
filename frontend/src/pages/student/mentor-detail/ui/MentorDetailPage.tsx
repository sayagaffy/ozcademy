import { useParams } from "react-router-dom";

export const MentorDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <header className="relative w-full h-[400px] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
        <div className="relative z-20 h-full max-w-7xl mx-auto px-10 flex items-end pb-12">
          <div className="flex items-center gap-10">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-primary p-1 bg-background-dark overflow-hidden">
                <img
                  alt="Aris Budiman"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoe9lx8FWj5eJcwghmlYPp2uX32V3Sp5Cn9bEcCWhTdt4mOrPBW9O-nwSBDpajJo9yygiPMYdkiSzMPImgK1KUyTXYA17hai6DCzyJX-EOqnBph0tSxS8Xh4GiyWwgL6G2kywB7sxkoA3-M2J7Hw-yRzQI4oDfj2Y_UeA50P5f1Pb3SNMOT7350lfVGj95WJm4hnou8REhmTxLOkivAgpEKGj8fDFK0ymemHPnHAw7NIQiCdtzA4P6OYlP5hQRBZGL_vn5P_7GCIc"
                />
              </div>
              <div className="absolute -bottom-2 right-4 px-3 py-1 bg-primary text-background-dark text-[10px] font-black uppercase tracking-widest rounded shadow-xl">
                PRO_MENTOR
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">
                  MENTOR_ID: {id}
                </span>
                <div className="h-[1px] w-12 bg-primary/30"></div>
              </div>
              <h1 className="text-7xl font-black tracking-tighter text-outline hover:text-white transition-all cursor-default uppercase">
                Aris Budiman
              </h1>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-primary text-sm font-black tracking-widest uppercase">
                    Senior Broadcaster
                  </span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary fill-1 text-2xl">
                    star
                  </span>
                  <span className="text-2xl font-black text-white">5.0</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    (124 Ulasan)
                  </span>
                </div>
              </div>
              <p className="mt-6 text-slate-400 max-w-2xl text-sm leading-relaxed">
                Berpengalaman lebih dari 15 tahun di industri penyiaran
                nasional. Fokus pada pengembangan karakter vokal, teknik
                interview, dan produksi podcast berkualitas tinggi untuk
                platform digital modern.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-12">
          <div className="border-b border-white/5 flex gap-10">
            <button className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary pb-5">
              Tentang Mentor
            </button>
            <button className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-slate-300 border-b-2 border-transparent pb-5 transition-all">
              Ulasan Siswa
            </button>
          </div>
          <div className="space-y-6 text-slate-300">
            <p className="text-sm leading-relaxed">
              Aris Budiman mengawali karirnya sebagai radio announcer di stasiun
              radio legendaris. Kini, ia berfokus membagikan ilmunya kepada
              generasi baru broadcaster digital. Kurikulum yang disusunnya
              menitikberatkan pada sisi praktis dan mentalitas seorang penampil
              di depan mikrofon.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[8px] font-mono text-primary uppercase tracking-widest mb-1">
                  KEAHLIAN_01
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  Voice Characterizing
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[8px] font-mono text-primary uppercase tracking-widest mb-1">
                  KEAHLIAN_02
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  Podcast Mastering
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-xl font-black tracking-tight uppercase leading-none">
                  Modul VOD oleh Mentor Ini
                </h2>
                <p className="text-[8px] text-slate-500 uppercase tracking-[0.4em] mt-2">
                  AKSES MATERI REKAMAN KAPAN SAJA
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-white/10 hover:border-primary text-slate-500 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="p-2 rounded-full border border-white/10 hover:border-primary text-slate-500 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-hidden pb-4">
              <div className="min-w-[300px] group">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all mb-4">
                  <img
                    alt="Course"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmaKZWa8YEGWH68LWSGzzQzsrlQiqPRVilcgRnavYVPZFAion5oCuj4hS7bZ9Y0E6lS4GdDiI_gyM6ChTi3JefcOkksFPjouMIwmc3VCjT-frISKRNRmoPsUoS_8zkU_yPYcaomH2DDTecnvYpx4dqiNLGQPsr0kYIeShAj9BwTQ8TQpZ790-2jMMi2B65Oq9XB7VCucV3H1F3DPyePMiEBZtiHmXSKFt6l6VwSpqqFEdp7vqMRJ5N-wUowySJqSOb7uJWQsJwFvQ"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-primary text-background-dark text-[8px] font-black rounded">
                      12 MATERI
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  Fundamental Broadcasting v1.0
                </h3>
                <div className="flex items-center gap-3 mt-2 text-[9px] font-mono text-slate-500 uppercase">
                  <span>245 Siswa</span>
                  <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                  <span>8 Jam Total</span>
                </div>
              </div>
              <div className="min-w-[300px] group">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all mb-4">
                  <img
                    alt="Course"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMhRoe4cWhjwONR8K5F6aA7WG5ANbLmoNqldQ90LNBRKDxt3kFLKStc0QAyxH8G7wYxYocra_syBOfJGIIiRJqDunOQiz-ylLtNktuW0FR-bS3xHW5FIyrHVxJr4LVB-9DHpfqUfHMuT6hcKvWIEyfxwQ8_AorVL5rV7_EOm3nsR7PxeeXOL1InRTytyXXL6DEHOzQO15eybPulDZ988wePl-v_C8QnY1RRYY_ChuY9__9S6oOiY5RLwa2dGklKFFBd2c65Jg5kk"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-primary text-background-dark text-[8px] font-black rounded">
                      08 MATERI
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  Audio Engineering for Podcasters
                </h3>
                <div className="flex items-center gap-3 mt-2 text-[9px] font-mono text-slate-500 uppercase">
                  <span>189 Siswa</span>
                  <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                  <span>5 Jam Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="sticky top-12 bg-card-dark border border-white/10 rounded-3xl p-8 glow-card">
            <div className="mb-8">
              <div className="text-[8px] font-mono text-primary uppercase tracking-[0.3em] mb-2">
                SCHEDULING_SYSTEM
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                Pesan Sesi Live
              </h2>
              <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-bold">
                Pilih Tipe Sesi Mentoring
              </p>
            </div>
            <div className="space-y-4 mb-10">
              <label className="block cursor-pointer group">
                <input
                  defaultChecked
                  className="hidden peer"
                  name="tier"
                  type="radio"
                />
                <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      Privat 1-on-1
                    </span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                      <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-primary">
                    Rp 500rb
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                    Durasi 60 Menit • Video Call
                  </div>
                </div>
              </label>
              <label className="block cursor-pointer group">
                <input className="hidden peer" name="tier" type="radio" />
                <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      Grup Maks 5
                    </span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                      <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-primary">
                    Rp 250rb
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                    Durasi 90 Menit • Interaktif
                  </div>
                </div>
              </label>
              <label className="block cursor-pointer group">
                <input className="hidden peer" name="tier" type="radio" />
                <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      Grup Maks 10
                    </span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                      <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-primary">
                    Rp 100rb
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                    Durasi 90 Menit • Webinar Mode
                  </div>
                </div>
              </label>
            </div>
            <button className="w-full bg-primary text-background-dark py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(242,208,13,0.2)] hover:shadow-[0_15px_40px_rgba(242,208,13,0.3)] hover:-translate-y-1 transition-all active:translate-y-0">
              Lihat Jadwal & Booking
            </button>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[14px] text-slate-600">
                verified_user
              </span>
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                TRANSACTION_SECURED: END-TO-END
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
