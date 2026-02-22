import { Button } from "../../../../shared/ui/Button/Button";
import { Card } from "../../../../shared/ui/Card/Card";
import { Section } from "../../../../shared/ui/Section/Section";

export const CareerTracks = () => {
  return (
    <Section className="border-t border-white/5">
      <div className="mb-16">
        <p className="technical-label mb-4 tracking-[0.5em]">
          Career_Track_Protocols
        </p>
        <h2 className="text-4xl font-bold tracking-tighter uppercase">
          Spesialisasi Digital
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <span className="material-symbols-outlined text-[120px]">mic</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-mono text-sm tracking-widest">
                [ TRACK_01 ]
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">
              The Podcaster Track
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
              Kuasai seni storytelling, teknik vokal, dan manajemen produksi
              podcast dari nol hingga monetisasi.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Modules</div>
                <div className="text-sm font-bold">12 Intensive Sessions</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Equipment</div>
                <div className="text-sm font-bold">Studio Standard Pro</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Certification</div>
                <div className="text-sm font-bold">OZ Verified Creator</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Output</div>
                <div className="text-sm font-bold">Pilot Episode Ready</div>
              </div>
            </div>
            <Button variant="ghost" className="w-full">
              Explore Curriculum
            </Button>
          </div>
        </Card>

        <Card>
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <span className="material-symbols-outlined text-[120px]">
              sensors
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-mono text-sm tracking-widest">
                [ TRACK_02 ]
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">
              The Live Streamer Track
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
              Integrasi public speaking radio klasik dengan teknologi streaming
              modern untuk engagement maksimal.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Modules</div>
                <div className="text-sm font-bold">15 Real-time Labs</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Tech Stack</div>
                <div className="text-sm font-bold">OBS & Multi-stream</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Focus</div>
                <div className="text-sm font-bold">Live Interaction UI</div>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <div className="technical-label mb-1">Mentorship</div>
                <div className="text-sm font-bold">Live Review Sessions</div>
              </div>
            </div>
            <Button variant="ghost" className="w-full">
              Explore Curriculum
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};
