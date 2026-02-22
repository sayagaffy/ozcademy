import { Section } from "../../../../shared/ui/Section/Section";

export function ProgramTracks() {
  const tracks = [
    {
      id: "Mdl_01_Audio",
      icon: "mic",
      title: "The Podcaster / <br/>Audio Creator Track",
      desc: "Kuasai seni bercerita, produksi audio, dan keterlibatan audiens. Ubah suaramu menjadi brand personal.",
      skills: ["Storytelling Mastery", "Audio Post-Production", "Audience Growth Strategy"]
    },
    {
      id: "Mdl_02_Live",
      icon: "broadcast_on_home",
      title: "The Live Streamer / <br/>Host Track",
      desc: "Dari MC menjadi Live Presenter. Pelajari interaksi cepat dan cara menguasai ruang digital.",
      skills: ["Real-time Engagement", "Technical Setup (OBS/Stream)", "Personal Branding"]
    },
    {
      id: "Mdl_03_MC",
      icon: "theater_comedy",
      title: "Professional MC / <br/>Moderator",
      desc: "Kendali panggung penuh, manajemen acara offline, dan moderasi diskusi tingkat tinggi.",
      skills: ["Stage Management", "Crisis Handling", "Professional Moderation"]
    }
  ];

  return (
    <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
               <div key={track.id} className="group relative bg-card-dark border border-white/10 p-8 rounded-xl card-gradient-hover transition-all duration-500 hover:border-primary/40 flex flex-col h-full">
                  <div className="mb-8 flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors">
                      <span className="material-symbols-outlined text-3xl text-primary">{track.icon}</span>
                    </div>
                    <span className="technical-label opacity-40">{track.id}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: track.title }}></h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{track.desc}</p>
                    <div className="space-y-3 mb-12">
                      {track.skills.map(skill => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="h-px w-4 bg-primary/40"></div>
                          <span className="technical-label">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-3 text-primary font-bold text-[11px] tracking-[0.3em] uppercase hover:gap-5 transition-all" href="#">
                      Lihat Kurikulum <span>→</span>
                  </a>
               </div>
            ))}
        </div>
    </Section>
  );
}
