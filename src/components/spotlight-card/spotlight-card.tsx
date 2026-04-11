"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function SpotlightCard({
  children,
  className,
  intensity = 0.22,
}: SpotlightCardProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (event: PointerEvent<HTMLDivElement>): void => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    element.style.setProperty("--spot-x", `${x}px`);
    element.style.setProperty("--spot-y", `${y}px`);
    element.style.setProperty("--spot-opacity", `${intensity}`);
  };

  const handleLeave = (): void => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--spot-opacity", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        "bezel-shell group/spot relative overflow-hidden",
        className,
      )}
      style={{
        ["--spot-x" as string]: "50%",
        ["--spot-y" as string]: "50%",
        ["--spot-opacity" as string]: "0",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--spot-opacity)",
          background:
            "radial-gradient(400px circle at var(--spot-x) var(--spot-y), color-mix(in oklch, var(--primary) 45%, transparent), transparent 60%)",
        }}
      />
      <div className="bezel-core relative h-full">{children}</div>
    </div>
  );
}
