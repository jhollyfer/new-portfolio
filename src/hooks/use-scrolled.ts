"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let latest = false;

    const handle = (): void => {
      const shouldBeScrolled = window.scrollY > threshold;
      if (shouldBeScrolled !== latest) {
        latest = shouldBeScrolled;
        setScrolled(shouldBeScrolled);
      }
      rafId = 0;
    };

    const onScroll = (): void => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(handle);
      }
    };

    handle();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
}
