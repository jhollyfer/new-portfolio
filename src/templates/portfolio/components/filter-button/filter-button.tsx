"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export type ProjectCategory = "all" | "frontend" | "backend" | "mobile";

interface Props {
  category: ProjectCategory;
}

export function FilterButton({ category }: Props) {
  const router = useRouter();
  const t = useTranslations("portfolio.filters");

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category") ?? "all";

  const handleCategory = React.useCallback(
    (category: ProjectCategory) => {
      router.push(`/portfolio?category=${encodeURIComponent(category)}`);
    },
    [router]
  );

  const isActive = category === searchCategory;

  return (
    <button
      onClick={() => handleCategory(category)}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-green-400/50",
        isActive
          ? "bg-green-400 text-black"
          : "bg-white/[0.04] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-white/[0.08]"
      )}
      type="button"
      aria-pressed={isActive}
    >
      {t(category)}
    </button>
  );
}
