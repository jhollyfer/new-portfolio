import Image from "next/image";

interface Props {
  name: string;
  icon: string;
}

export function SkillIcon({ name, icon }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-green-400/30 transition-all duration-300 mb-2 group">
        <Image
          src={icon}
          alt={name}
          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          width={32}
          height={32}
        />
      </div>
      <span className="text-xs text-white/70">{name}</span>
    </div>
  );
}
