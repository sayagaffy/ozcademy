import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-card-dark border border-white/10 p-10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 relative group",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
