"use client";

import * as Popover from "@radix-ui/react-popover";
import { Check, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn, focusRing } from "@/lib/utils";

type SupportedLocale = (typeof routing.locales)[number];

const LOCALE_DATA: Record<
  SupportedLocale,
  { short: string; name: string }
> = {
  "pt-BR": { short: "PT", name: "Português" },
  "en-US": { short: "EN", name: "English" },
  es: { short: "ES", name: "Español" },
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return (routing.locales as readonly string[]).includes(value);
}

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({
  className,
}: LanguageSwitcherProps): React.JSX.Element {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const current: SupportedLocale = isSupportedLocale(locale) ? locale : "pt-BR";

  const handleSelect = (target: SupportedLocale): void => {
    if (target === current) return;
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  };

  return (
    <Popover.Root>
      <Popover.Trigger
        aria-label={LOCALE_DATA[current].name}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 backdrop-blur transition-colors hover:border-border-strong hover:text-foreground data-[state=open]:border-border-strong",
          isPending && "opacity-60",
          focusRing,
          className,
        )}
      >
        <Globe aria-hidden className="size-4" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={10}
          className="z-[70] w-44 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl backdrop-blur-xl animate-fade-in"
        >
          <ul className="flex flex-col">
            {routing.locales.map((loc) => {
              const data = LOCALE_DATA[loc];
              const active = loc === current;
              return (
                <li key={loc}>
                  <button
                    type="button"
                    onClick={() => handleSelect(loc)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-[color-mix(in_oklch,var(--primary)_12%,transparent)] text-primary"
                        : "text-muted-foreground hover:bg-[var(--bezel-shell-bg)] hover:text-foreground",
                      focusRing,
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {data.short}
                      </span>
                      <span className="text-sm">{data.name}</span>
                    </span>
                    {active ? (
                      <Check aria-hidden className="size-3.5 text-primary" />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
