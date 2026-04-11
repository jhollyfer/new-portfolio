"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}

export function Magnetic({
  children,
  className,
  strength = 14,
  as = "div",
}: MagneticProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.4 });

  const translateX = useTransform(springX, (value) => `${value}px`);
  const translateY = useTransform(springY, (value) => `${value}px`);

  const handleMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (reduced) return;
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  };

  const handleLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ x: translateX, y: translateY, display: "inline-flex" }}
      className={cn("relative", className)}
    >
      {children}
    </Component>
  );
}
