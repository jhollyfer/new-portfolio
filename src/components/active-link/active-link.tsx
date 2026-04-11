"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn, focusRing } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";

type LinkProps = ComponentProps<typeof Link>;

interface ActiveLinkProps {
  href: LinkProps["href"];
  children: ReactNode;
  className?: string;
  sharedLayoutId?: string;
}

function resolveHref(href: LinkProps["href"]): string {
  return typeof href === "string" ? href : href.pathname ?? "/";
}

export function ActiveLink({
  children,
  href,
  className,
  sharedLayoutId = "nav-active-indicator",
}: ActiveLinkProps): React.JSX.Element {
  const pathname = usePathname();
  const linkPath = resolveHref(href);
  const isActive =
    linkPath === "/"
      ? pathname === "/"
      : pathname === linkPath || pathname.startsWith(`${linkPath}/`);

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center rounded-md px-1 pb-2 text-sm font-medium transition-colors duration-200",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        focusRing,
        className,
      )}
    >
      <span className="relative z-[1]">{children}</span>
      {isActive ? (
        <motion.span
          layoutId={sharedLayoutId}
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      ) : null}
    </Link>
  );
}
