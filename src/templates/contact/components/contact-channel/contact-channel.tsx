import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn, focusRing } from "@/lib/utils";

interface ContactChannelProps {
  label: string;
  value: ReactNode;
  href?: string;
  Icon: LucideIcon;
  external?: boolean;
}

export function ContactChannel({
  label,
  value,
  href,
  Icon,
  external,
}: ContactChannelProps): React.JSX.Element {
  const content = (
    <div className="bezel-shell group/channel">
      <div className="bezel-core flex items-center gap-4 p-5">
        <span className="section-badge">
          <Icon aria-hidden className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="kbd">{label}</p>
          <p className="truncate text-sm text-foreground">{value}</p>
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("block transition-transform hover:-translate-y-0.5", focusRing)}
    >
      {content}
    </a>
  );
}
