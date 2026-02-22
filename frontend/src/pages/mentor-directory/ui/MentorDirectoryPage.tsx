import { Header } from "../../../widgets/Header/Header";
import { MentorHero } from "./components/MentorHero";
import { MentorCard } from "./components/MentorCard";

const mentors = [
  {
    name: "Andi Wijaya",
    role: "Senior Podcaster",
    exp: "12Y+",
    pracId: "103.1_AW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqBqAeAD8M-mTKznwdqM6YQfJ0HaK_3Queg2WnOF3GoVscETJ_pcWThZPBYdGirYM5_qFWQT41L3QaJ63gaA1odZ3afdeVa2L6HnYFG3ooyAZC2EFvSdY8SSdGkDrDajC-RfwYXc5H5WkT8TKFUHc4vR7TbGCdAbOvd47GcvWTknQjX7al4xi0LbW7tNYNTH6vMZW0JHoG8f1ADILxpriNesqmrm576UEgZk9pAb2X5MbpQyf-9q-vWD8dfsqBuxU7ckgRolsojMk",
  },
  {
    name: "Sita Pratama",
    role: "Morning Show Host",
    exp: "8Y+",
    pracId: "103.1_SP",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXuyqkYVGxtsTW-Z_90XIwa89h2osEiqEVr-II6Aztw7rInxWlx1XfovXggmi0FrpbF9h4adOktQi007d6nOrbd95nywUA5l5BSpbcrBbTHYHR-mzCjP7c4sQkSYsXamMduEA_3CnqsjY4FTwOlrSs3566rBLRY9g6vfFChH9N66DOPAB-NA3-B7oKzh6afKYRIRmwa0SdVmr3NL9D4wBfJGhkFj4nKjkcmFK-gWvbLuHaOExqye21JjLnGzZwSSP_AUE3GTG1rug",
  },
  {
    name: "Bram Kusuma",
    role: "Creative Director",
    exp: "15Y+",
    pracId: "103.1_BK",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhd0xpHpB06mh8PSvMDKI-V5-J4gpc-XYiJRtgEM7LMSGEeeFtIuq-9b2bFs0hPkb45PVXkTooIpZVYEgbGbe6MWd8D5e_qCHdBj3lneP99XVNKrWC40cJnx5Rtu0gj2QLYSEiIm2OUXT8DVeSo1ls4REE-VIS4m_X36lqhoho50DNPYqTPc-Ts4bBxKHiA3ZJqUVvyEppbq3fI8lkHqHT8kTLsZAJlu8pn2St6S4EK4sGYUZh5lbgu-57Jphf_Ezkik8-fDF8eE8",
  },
  {
    name: "Dina Nur",
    role: "Digital Content Specialist",
    exp: "6Y+",
    pracId: "103.1_DN",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIbSJkDaYYa0niGh4Je8n6ujtIYj2dfbreUSyPgjzREdRaMX_o428_8n0hPKAG9y2Nn7Sn2c2xoZHpQSxLFzq2O8XED20nmHpjcVZah1qdFmp2wTMshxEn7DmgPhiN8sOZQhyj6Pc1C2tpuIh5HeFhXcqAqixXwI283yrXIanB4fRsx8Y46zor2HYCgxZPubzvgP5maSKv1oS2CD5CnNNoLsM8kmwC1Cn-j-8f3ORvrb8c_v4cXAK5PaPQgPHzI5uazm42SCsnEIo",
  },
];

export const MentorDirectoryPage = () => {
  return (
    <>
      <div className="fixed inset-0 star-field pointer-events-none"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background-dark/20 to-background-dark pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col items-center px-6 py-12 max-w-7xl mx-auto w-full relative z-10">
          <MentorHero />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.pracId} {...mentor} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <button className="flex items-center gap-4 px-10 py-4 bg-transparent border border-primary/40 hover:bg-primary/5 transition-all group cursor-pointer">
              <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase">
                Jadwalkan Sesi Sekarang
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                bolt
              </span>
            </button>
            <div className="flex gap-12 opacity-30 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono tracking-tighter uppercase">
                  MENTOR_POOL: VERIFIED
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono tracking-tighter uppercase">
                  MATCH_ALGO: OPTIMIZED
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed bottom-8 left-8 pointer-events-none hidden lg:block z-50">
        <div className="text-[9px] font-mono leading-relaxed text-slate-600 uppercase tracking-widest">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-primary animate-pulse"></div>
            <span>System Frequency: 103.1 MHz</span>
          </div>
          <div>Status: Mentorship_Module_Active</div>
          <div>Selection_Mode: Premium</div>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 pointer-events-none hidden lg:block z-50">
        <div className="text-[9px] font-mono text-slate-600 text-right uppercase tracking-widest">
          <div>Encryption: RSA_4096</div>
          <div>Server_Node: BDG_FACTORY_01</div>
          <div className="mt-1 text-primary/40">
            © 2024 OZ Radio EdTech Division
          </div>
        </div>
      </div>
    </>
  );
};
