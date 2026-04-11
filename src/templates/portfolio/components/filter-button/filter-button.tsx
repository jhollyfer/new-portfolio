"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { useRouter } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";
import type { ProjectCategory } from "@/lib/types";

interface FilterButtonProps {
  category: ProjectCategory;
  count: number;
}

export function FilterButton({
  category,
  count,
}: FilterButtonProps): React.JSX.Element {
  const router = useRouter();
  const t = useTranslations("portfolio.filters");
  const searchParams = useSearchParams();
  const current = searchParams.get("category") ?? "all";

  const handleClick = useCallback(() => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    const query = params.toString();
    router.push(`/portfolio${query ? `?${query}` : ""}`, { scroll: false });
  }, [category, router]);

  const active = current === category || (category === "all" && current === "all");

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      className={cn(
        "group/filter inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary/50 bg-primary text-primary-foreground"
          : "border-border bg-[var(--bezel-shell-bg)] text-muted-foreground hover:border-border-strong hover:text-foreground",
        focusRing,
      )}
    >
      <span>{t(category)}</span>
      <span
        className={cn(
          "font-mono text-[0.625rem] tracking-[0.12em]",
          active ? "text-primary-foreground/80" : "text-muted-foreground/70",
        )}
      >
        {count.toString().padStart(2, "0")}
      </span>
    </button>
  );
}
