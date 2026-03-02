"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import React from "react";

const LOCALE_LABELS: Record<string, string> = {
  "pt-BR": "PT",
  "en-US": "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as typeof routing.locales[number] });
    setIsOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
        aria-label="Language"
        aria-expanded={isOpen}
      >
        <GlobeIcon size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 min-w-[7rem] rounded-lg bg-background border border-white/[0.08] shadow-xl overflow-hidden animate-fade-in z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={cn(
                "w-full px-3 py-2 text-left text-sm transition-colors duration-150 cursor-pointer",
                loc === locale
                  ? "text-green-400 bg-white/[0.04]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.06]"
              )}
            >
              {LOCALE_LABELS[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
