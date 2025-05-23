import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

export const getPageTitleFromPath = (pageTitles: Record<string, string>, path: string): string => {
  // Sort paths by length (DESC) to match the most specific path first
  const match = Object.keys(pageTitles)
    .sort((a, b) => b.length - a.length)
    .find((key) => path.replace("/pt/", "/").startsWith(key))

  return match ? pageTitles[match] : ""
}
