"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
export type ProjectCategory = "all" | "frontend" | "backend" | "mobile";

interface Props {
  category: ProjectCategory;
}

const ProjectCategoryMapper = {
  all: "Todos",
  frontend: "Front-end",
  backend: "Back-end",
  mobile: "Mobile",
};

export function FilterButton({ category }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category") ?? "all";

  const handleCategory = React.useCallback(
    (category: ProjectCategory) => {
      router.push(`/portfolio?category=${encodeURIComponent(category)}`);
    },
    [router]
  );

  return (
    <button
      onClick={() => handleCategory(category)}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all bg-white/5 border border-white/10 text-white hover:bg-white/10 cursor-pointer",
        category === searchCategory && "bg-green-400 text-black"
      )}
      type="button"
    >
      {ProjectCategoryMapper[category]}
    </button>
  );
}
