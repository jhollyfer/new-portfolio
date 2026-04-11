import { cn } from "@/lib/utils";

export function GridSkeleton(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {Array.from({ length: 5 }).map((_, index) => {
        const featured = index === 0;
        return (
          <div
            key={index}
            className={cn(
              "bezel-shell",
              "col-span-1",
              featured ? "md:col-span-12" : "md:col-span-6",
            )}
          >
            <div className="bezel-core">
              <div
                className={cn(
                  "relative w-full animate-pulse bg-[var(--bezel-shell-bg)]",
                  featured ? "aspect-[16/9]" : "aspect-[16/10]",
                )}
              />
              <div className="space-y-3 p-6">
                <div className="h-3 w-24 animate-pulse rounded-full bg-[var(--bezel-shell-bg)]" />
                <div className="h-5 w-2/3 animate-pulse rounded-lg bg-[var(--bezel-shell-bg)]" />
                <div className="h-3 w-full animate-pulse rounded-full bg-[var(--bezel-shell-bg)]" />
                <div className="h-3 w-5/6 animate-pulse rounded-full bg-[var(--bezel-shell-bg)]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
