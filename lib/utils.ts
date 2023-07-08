import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { NewsArticle } from "@/types/interfaces"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}