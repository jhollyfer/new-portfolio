"use client";

import * as Tabs from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { cn, focusRing } from "@/lib/utils";

interface CareerTabsProps {
  professional: ReactNode;
  academic: ReactNode;
  certifications: ReactNode;
}

export function CareerTabs({
  professional,
  academic,
  certifications,
}: CareerTabsProps): React.JSX.Element {
  const t = useTranslations("career.tabs");

  return (
    <Tabs.Root defaultValue="professional" className="w-full">
      <Tabs.List className="mb-10 inline-flex items-center gap-1 rounded-full border border-border bg-[var(--bezel-shell-bg)] p-1 text-sm">
        {(["professional", "academic", "certifications"] as const).map(
          (value) => (
            <Tabs.Trigger
              key={value}
              value={value}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                focusRing,
              )}
            >
              {t(value)}
            </Tabs.Trigger>
          ),
        )}
      </Tabs.List>
      <Tabs.Content value="professional" className="focus-visible:outline-none">
        {professional}
      </Tabs.Content>
      <Tabs.Content value="academic" className="focus-visible:outline-none">
        {academic}
      </Tabs.Content>
      <Tabs.Content
        value="certifications"
        className="focus-visible:outline-none"
      >
        {certifications}
      </Tabs.Content>
    </Tabs.Root>
  );
}
