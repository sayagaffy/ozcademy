import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("max-w-7xl mx-auto px-6 py-24", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
