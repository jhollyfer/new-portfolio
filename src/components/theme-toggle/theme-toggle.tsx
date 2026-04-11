"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn, focusRing } from "@/lib/utils";

type ResolvedTheme = "light" | "dark" | "system";

const ORDER: readonly ResolvedTheme[] = ["light", "dark", "system"];

function nextTheme(current: string | undefined): ResolvedTheme {
  const index = ORDER.indexOf((current ?? "system") as ResolvedTheme);
  const nextIndex = (index + 1) % ORDER.length;
  return ORDER[nextIndex];
}

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("theme");

  useEffect(() => {
    setMounted(true);
  }, []);

  const active: ResolvedTheme = mounted
    ? ((theme ?? "system") as ResolvedTheme)
    : "system";

  const label =
    active === "light"
      ? t("light")
      : active === "dark"
        ? t("dark")
        : t("system");

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme(theme))}
      aria-label={t("toggle", { mode: label })}
      title={label}
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 backdrop-blur transition-colors hover:border-border-strong hover:text-foreground",
        focusRing,
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      {mounted ? (
        <>
          <Sun
            aria-hidden
            className={cn(
              "absolute size-4 transition-all duration-300",
              active === "light"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-75 opacity-0",
            )}
          />
          <Moon
            aria-hidden
            className={cn(
              "absolute size-4 transition-all duration-300",
              active === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-75 opacity-0",
            )}
          />
          <Monitor
            aria-hidden
            className={cn(
              "absolute size-4 transition-all duration-300",
              active === "system"
                ? "rotate-0 scale-100 opacity-100"
                : "scale-75 opacity-0",
            )}
          />
        </>
      ) : (
        <Monitor aria-hidden className="size-4 opacity-60" />
      )}
    </button>
  );
}
