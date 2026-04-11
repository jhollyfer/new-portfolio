"use client";

import Image from "next/image";
import type { Skill } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SkillIconProps {
  skill: Skill;
  level?: number;
}

export function SkillIcon({ skill }: SkillIconProps): React.JSX.Element {
  const level = skill.level ?? 0;

  return (
    <div className="bezel-shell group/skill">
      <div className="bezel-core flex flex-col items-start gap-3 p-4">
        <div className="relative flex size-10 items-center justify-center overflow-hidden">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={32}
            height={32}
            unoptimized
            className="size-8 object-contain transition-transform duration-500 ease-[var(--ease-cinematic)] group-hover/skill:scale-110"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <span className="truncate text-xs font-medium text-foreground">
            {skill.name}
          </span>
          {level > 0 ? (
            <span
              aria-hidden
              className="flex items-center gap-0.5"
              title={`Level ${level}`}
            >
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={cn(
                    "inline-block size-1 rounded-full",
                    dot <= level ? "bg-primary" : "bg-border-strong",
                  )}
                />
              ))}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
