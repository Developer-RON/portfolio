"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

/**
 * Single gentle reveal used across sections.
 * 12px upward, 400ms, once, transform+opacity only.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = (motion as any)[as] ?? motion.div;

  if (reduce) {
    const Plain = as as any;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </Comp>
  );
}
