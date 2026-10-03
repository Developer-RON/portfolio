import { cn } from "@/lib/utils";
import * as React from "react";

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" | "outline" }>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        variant === "secondary" && "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
        variant === "outline" && "border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
