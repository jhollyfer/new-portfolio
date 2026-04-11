import {
  Boxes,
  BrainCircuit,
  Layout,
  Server,
  Smartphone,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { cn } from "@/lib/utils";

interface BentoItem {
  key: "frontend" | "backend" | "mobile" | "infra" | "design" | "ai";
  Icon: LucideIcon;
  className: string;
}

const ITEMS: readonly BentoItem[] = [
  {
    key: "frontend",
    Icon: Layout,
    className: "md:col-span-7 md:row-span-2",
  },
  { key: "backend", Icon: Server, className: "md:col-span-5" },
  { key: "mobile", Icon: Smartphone, className: "md:col-span-5" },
  { key: "infra", Icon: Boxes, className: "md:col-span-4" },
  { key: "design", Icon: Wand2, className: "md:col-span-4" },
  { key: "ai", Icon: BrainCircuit, className: "md:col-span-4" },
];

export function TechBento(): React.JSX.Element {
  const t = useTranslations("home.bento");

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <ScrollReveal>
              <p className="kbd">{t("eyebrow")}</p>
            </ScrollReveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal delay={80}>
              <h2 className="text-display">{t("title")}</h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-12">
          {ITEMS.map(({ key, Icon, className }, index) => (
            <ScrollReveal
              key={key}
              delay={index * 70}
              className={cn("col-span-1 md:col-span-4", className)}
            >
              <article className="bezel-shell group/bento relative flex h-full flex-col">
                <div className="bezel-core flex h-full flex-col gap-6 p-6 md:p-8">
                  <span className="section-badge">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div className="mt-auto flex flex-col gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
