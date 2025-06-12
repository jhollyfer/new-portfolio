"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const ActiveLink = ({
  children,
  href,
  className,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  const linkPath = typeof href === "string" ? href : href.pathname;
  const pathname = usePathname();
  const isActive =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        className,
        "text-sm font-medium transition-colors hover:text-green-400 text-white",
        isActive && "text-green-400"
      )}
    >
      {children}
    </Link>
  );
};
