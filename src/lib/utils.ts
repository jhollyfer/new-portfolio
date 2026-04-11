import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const MONTH_ABBREVIATIONS: Record<string, Record<string, string>> = {
  "pt-BR": {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    "10": "Out",
    "11": "Nov",
    "12": "Dez",
  },
  "en-US": {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  },
  es: {
    "01": "Ene",
    "02": "Feb",
    "03": "Mar",
    "04": "Abr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dic",
  },
};

export function formatMonth(value: string, locale: string): string {
  const [year, month] = value.split("-");
  if (!year) return value;
  const table = MONTH_ABBREVIATIONS[locale] ?? MONTH_ABBREVIATIONS["en-US"];
  if (!month) return year;
  const abbr = table[month];
  return abbr ? `${abbr} ${year}` : `${month}/${year}`;
}

export function formatPeriod(
  start: string,
  end: string | null,
  locale: string,
  currentLabel: string,
): string {
  const startLabel = formatMonth(start, locale);
  const endLabel = end ? formatMonth(end, locale) : currentLabel;
  return `${startLabel} — ${endLabel}`;
}
