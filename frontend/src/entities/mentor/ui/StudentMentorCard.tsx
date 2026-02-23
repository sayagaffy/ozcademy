import type { Mentor } from "../model/mockData";

interface StudentMentorCardProps {
  mentor: Mentor;
}

export const StudentMentorCard = ({ mentor }: StudentMentorCardProps) => {
  return (
    <div className="group bg-card-dark rounded-3xl border border-white/5 hover:border-primary/40 transition-all overflow-hidden flex flex-col p-6 h-full">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 mb-4">
          <img
            alt={mentor.name}
            className="w-full h-full object-cover rounded-full grayscale transition-all duration-500 group-hover:grayscale-0 border-2 border-white/10 group-hover:border-primary/50"
            src={mentor.imageUrl}
          />
          <div className="absolute -top-2 -right-2">
            <span
              className={
                mentor.status === "LIVE CLASS"
                  ? "px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-tighter rounded border border-white/20"
                  : "px-2 py-1 bg-primary text-background-dark text-[8px] font-black uppercase tracking-tighter rounded"
              }
            >
              {mentor.status}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-black tracking-tight uppercase leading-none text-white text-center">
          {mentor.name}
        </h3>
        <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mt-2">
          {mentor.role}
        </p>
      </div>
      <div className="flex-1 flex flex-col">
        {mentor.priceStart && (
          <div className="mt-2 mb-4 p-2 bg-primary/5 rounded border border-primary/20">
            <span className="text-[8px] text-primary font-black uppercase tracking-widest block text-center uppercase">
              MULAI {mentor.priceStart}
            </span>
          </div>
        )}
        <div className="h-[1px] w-full bg-white/5 mb-4 mt-auto"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[10px] fill-1">
              star
            </span>
            <span className="text-[10px] font-bold text-slate-300">
              {mentor.rating.toFixed(1)}
            </span>
          </div>
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            MENTOR
          </div>
        </div>
      </div>
    </div>
  );
};
