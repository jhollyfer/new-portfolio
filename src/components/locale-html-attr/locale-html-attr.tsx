"use client";

import { useLocale } from "next-intl";
import React from "react";

export function LocaleHtmlAttr() {
  const locale = useLocale();

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
