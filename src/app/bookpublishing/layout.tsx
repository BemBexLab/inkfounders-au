import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/bookpublishing");

export default function BookpublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
