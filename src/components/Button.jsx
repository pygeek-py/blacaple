import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

export default function Button({
  children,
  href,
  type,
  variant = "primary",
  icon = true,
  className,
  ...props
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

  const variants = {
    primary:
      "bg-gradient-to-r from-ember-500 to-ember-300 text-ink shadow-[0_8px_30px_-8px_rgba(255,122,69,0.55)] hover:shadow-[0_12px_40px_-8px_rgba(255,122,69,0.75)] hover:-translate-y-0.5",
    secondary:
      "border border-bone/15 bg-bone/[0.03] text-bone hover:bg-bone/[0.08] hover:-translate-y-0.5",
    ghost: "text-bone hover:text-ember-300",
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type || "button"} className={cn(base, variants[variant], className)} {...props}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={cn(base, variants[variant], className)} {...props}>
      {content}
    </a>
  );
}
