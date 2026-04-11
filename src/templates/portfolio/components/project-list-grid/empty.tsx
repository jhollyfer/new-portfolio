import { PackageOpen } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

export function Empty(): React.JSX.Element {
  const t = useTranslations("portfolio.empty");

  return (
    <div className="bezel-shell">
      <div className="bezel-core flex flex-col items-center gap-6 px-6 py-20 text-center">
        <span className="section-badge">
          <PackageOpen aria-hidden className="size-5" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight">{t("title")}</h3>
          <p className="max-w-md text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <Link href="/portfolio" className={cn("cta-ghost", focusRing)}>
          {t("reset")}
        </Link>
      </div>
    </div>
  );
}
