import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL(path: string = ""): string {
  return `${STRAPI_URL || "http://localhost:1337"}${path}`;
}

export function getStrapiMedia(url: string | undefined): string {
  if (!url) return "/placeholder.jpg";
  if (url.startsWith("http")) return url;
  return getStrapiURL(url);
}

export function formatDate(date: string | Date) {
  return format(new Date(date), "MMMM dd, yyyy");
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
export const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
export const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
