import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm hover:shadow-md dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm hover:shadow-md hover:-translate-y-px",
  secondary:
    "border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800",
  ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
  outline: "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-5 py-2",
  sm: "h-9 rounded-md px-4",
  lg: "h-12 rounded-xl px-7 text-base",
  icon: "h-10 w-10",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
