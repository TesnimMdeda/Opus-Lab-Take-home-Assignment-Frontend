import { STRAPI_URL } from "./utils";

export function getStrapiURL(path: string = "") {
  return `${STRAPI_URL || "http://localhost:1337"}${path}`;
}

export function getStrapiMedia(url: string | null | undefined) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return getStrapiURL(url);
}
