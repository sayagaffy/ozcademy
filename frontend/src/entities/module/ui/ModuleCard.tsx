import type { Module } from "../model/mockData";

interface ModuleCardProps {
  module: Module;
}

export const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <div className="group bg-card-dark rounded-2xl border border-white/5 hover:border-primary/40 transition-all overflow-hidden cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[4/3] bg-neutral-800">
        <img
          alt={module.title}
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          src={module.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        {module.category && (
          <div className="absolute top-4 right-4">
            <span
              className={
                module.category === "LIVE CLASS"
                  ? "px-2 py-0.5 bg-white/10 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-tighter rounded border border-white/20"
                  : "px-2 py-0.5 bg-primary text-background-dark text-[8px] font-black uppercase tracking-tighter rounded"
              }
            >
              {module.category}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-xs">
            {module.category === "LIVE CLASS" ? "podcasts" : "play_circle"}
          </span>
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
            {module.id}
          </span>
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>
        <h3 className="text-base font-bold tracking-tight uppercase group-hover:text-primary transition-colors leading-tight">
          {module.title}
        </h3>
        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-medium">
          {module.mentorName}
        </p>

        {module.price && (
          <div className="mt-2">
            <span className="text-[9px] text-primary font-black uppercase tracking-[0.1em]">
              SESI LIVE MULAI DARI {module.price}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-6">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-xs fill-1">
              star
            </span>
            <span className="text-[10px] font-bold text-slate-300">
              {module.rating.toFixed(1)}
            </span>
          </div>
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            {module.lessonsCount} LESSONS
          </div>
        </div>
      </div>
    </div>
  );
};
