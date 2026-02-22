import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg" | "custom";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary hover:bg-white text-background-dark font-black shadow-[0_4px_20px_rgba(242,208,13,0.2)]",
      outline: "border border-white/20 hover:border-primary/50 text-white bg-white/5 backdrop-blur-sm font-bold",
      ghost: "bg-white/5 border border-white/10 hover:border-primary hover:text-primary font-bold",
      inverse: "bg-background-dark text-primary hover:bg-slate-900 shadow-xl font-black",
    };

    const sizes = {
      sm: "px-8 py-2.5 text-[11px] tracking-widest",
      md: "py-4 px-6 text-[10px] tracking-[0.3em]",
      lg: "py-5 px-12 text-xs tracking-[0.3em]",
      custom: "",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "cursor-pointer rounded-sm uppercase transition-all duration-300 flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
