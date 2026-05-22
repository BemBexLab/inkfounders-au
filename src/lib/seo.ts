import type { Metadata } from "next";

export const SITE_URL = "https://www.inkfounders.com";

function normalizeCanonicalPath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

export function getCanonicalUrl(path: string) {
  return new URL(normalizeCanonicalPath(path), SITE_URL).toString();
}

export function createCanonicalMetadata(path: string): Metadata {
  return {
    alternates: {
      canonical: normalizeCanonicalPath(path),
    },
  };
}
