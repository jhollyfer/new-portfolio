import Image from "next/image";

interface Props {
  name: string;
  icon: string;
}

export function SkillIcon({ name, icon }: Props) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="size-16 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-green-400/30 group-hover:bg-white/[0.06] transition-all duration-200">
        <Image
          src={icon}
          alt={name}
          className="size-7"
          width={28}
          height={28}
        />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}
