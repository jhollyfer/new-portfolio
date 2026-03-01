import { SmartphoneIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export function ContactButton({ children, href, icon }: Props) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center justify-center size-8 rounded-full bg-green-400/10 text-green-400 group-hover:bg-green-400/15 transition-colors duration-200">
        {icon || <SmartphoneIcon size={14} />}
      </span>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
        {children}
      </span>
    </Link>
  );
}
