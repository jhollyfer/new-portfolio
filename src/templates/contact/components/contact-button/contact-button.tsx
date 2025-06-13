import { Smartphone } from "lucide-react";
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
      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="p-2 rounded-full bg-green-400/10 text-green-400 group-hover:bg-green-400/20 transition-colors">
        {icon || <Smartphone size={18} />}
      </span>
      <span>{children}</span>
    </Link>
  );
}
