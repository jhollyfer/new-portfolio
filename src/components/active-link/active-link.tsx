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
    linkPath === "/"
      ? pathname === "/"
      : pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md pb-1",
        isActive
          ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-400 after:rounded-full"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
};
