"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a subtle cursor-following border/glow.
 * Transform + opacity only; CSS vars avoid layout work.
 * Disabled on touch / reduced-motion via media queries in CSS.
 */
export function SpotlightCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spot-opacity", "1");
  }

  function onLeave() {
    ref.current?.style.setProperty("--spot-opacity", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("spotlight-card", className)}
      {...props}
    >
      {children}
    </div>
  );
}
