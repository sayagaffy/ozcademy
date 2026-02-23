import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, subLabel, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {(label || subLabel) && (
          <div className="flex justify-between items-end">
            {label && (
              <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                {label}
              </label>
            )}
            {subLabel && (
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">
                {subLabel}
              </span>
            )}
          </div>
        )}
        <div className="relative group">
          <input
            className={cn(
              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-700 outline-none text-slate-100",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-[9px] font-mono text-red-500 tracking-tight flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px]">error</span> {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
