import { Link } from "react-router-dom";
import { cn } from "../../../../shared/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: Array<{ text: string; highlighted?: boolean }>;
  ctaText: string;
  ctaLink?: string;
  isFeatured?: boolean;
  metadata: {
    model: string;
    level: string;
  };
  subtitle?: string;
  footerText: string;
  footerIcon?: boolean;
}

export const PricingCard = ({
  title,
  price,
  period,
  features,
  ctaText,
  ctaLink = "#",
  isFeatured = false,
  metadata,
  subtitle,
  footerText,
  footerIcon = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card-dark technical-border flex flex-col w-full max-w-md transition-all duration-500",
        isFeatured
          ? "border border-primary/50 p-10 card-glow premium-glow lg:scale-105 z-20"
          : "border border-white/5 hover:border-white/20 p-8"
      )}
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background-dark text-[9px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">
          Pilihan Profesional
        </div>
      )}

      <div
        className={cn(
          "absolute top-4 right-6 text-[8px] font-mono flex flex-col items-end uppercase tracking-tighter z-20",
          isFeatured ? "text-primary/40" : "text-slate-600"
        )}
      >
        <span>PRICING_MODEL: {metadata.model}</span>
        <span>ACCESS_LEVEL: {metadata.level}</span>
      </div>

      <div className="mb-8">
        <h3
          className={cn(
            "text-2xl font-bold tracking-tight uppercase mb-2",
            isFeatured ? "text-primary" : "text-white"
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1 block">
            {subtitle}
          </span>
        )}
        <div
          className={cn(
            "flex gap-1",
            subtitle ? "flex-col" : "items-baseline"
          )}
        >
          <span className="text-3xl font-bold text-white">
            {price}
            {!subtitle && (
               <span className="text-xs text-slate-500 font-medium tracking-widest uppercase ml-1">
                 {period}
               </span>
            )}
          </span>
           {subtitle && (
               <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                 {period}
               </span>
            )}
        </div>
      </div>

      <div className="flex-1 space-y-4 mb-10">
        <ul
          className={cn(
            "space-y-3 text-sm",
            isFeatured ? "text-slate-100" : "text-slate-300"
          )}
        >
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={cn(
                "feature-list-item",
                feature.highlighted ? "font-bold text-primary" : ""
              )}
            >
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={ctaLink}
        className={cn(
          "w-full py-4 font-bold text-xs tracking-[0.3em] uppercase transition-all flex items-center justify-center",
          isFeatured
            ? "bg-primary text-background-dark hover:bg-white shadow-[0_0_20px_rgba(242,208,13,0.4)]"
            : "border border-primary/40 text-primary hover:bg-primary/10"
        )}
      >
        {ctaText}
      </Link>

      <div
        className={cn(
          "mt-6 flex items-center justify-between",
          isFeatured ? "" : "opacity-20"
        )}
      >
        <span
          className={cn(
            "text-[8px] font-mono uppercase tracking-tighter",
            isFeatured ? "text-primary" : ""
          )}
        >
          {footerText}
        </span>
        <div
          className={cn(
            isFeatured
              ? "flex-1 mx-4 h-px bg-primary/20"
              : "w-12 h-px bg-white flex-none ml-auto"
          )}
        ></div>
        {footerIcon && (
          <span className="material-symbols-outlined text-primary text-sm">
            verified_user
          </span>
        )}
      </div>
    </div>
  );
};
