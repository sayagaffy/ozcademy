interface MentorCardProps {
  name: string;
  role: string;
  exp: string;
  image: string;
  pracId: string;
  status?: string;
}

export const MentorCard = ({
  name,
  role,
  exp,
  image,
  pracId,
  status = "ACTIVE",
}: MentorCardProps) => {
  return (
    <div className="group relative bg-card-dark border border-white/5 hover:border-primary/30 transition-all duration-500 p-4 technical-border card-glow">
      <div className="absolute top-2 right-4 text-[8px] font-mono text-slate-600 flex flex-col items-end uppercase tracking-tighter z-20">
        <span>PRAC_ID: {pracId}</span>
        <span>STATUS: {status}</span>
      </div>
      <div className="relative mb-6 overflow-hidden mentor-image-mask aspect-[4/5] bg-slate-900 group-hover:ring-1 ring-primary/20 transition-all">
        <img
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-block bg-primary text-background-dark text-[8px] font-bold px-2 py-0.5 uppercase tracking-widest">
            Tersedia untuk 1-on-1
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">
          {role}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[9px] font-mono text-slate-600">EXP: {exp}</span>
        <div className="w-8 h-px bg-white/10 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};
