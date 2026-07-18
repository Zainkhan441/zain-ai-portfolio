import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-premium focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white shadow-glow-sm hover:shadow-glow hover:bg-accent-soft active:scale-[0.98]",
  secondary:
    "glass text-ink hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]",
  ghost:
    "text-ink-muted hover:text-ink active:scale-[0.98]",
};

export function buttonClasses(
  variant: NonNullable<ButtonProps["variant"]> = "primary",
  className?: string
) {
  return cn(base, variants[variant], className);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
