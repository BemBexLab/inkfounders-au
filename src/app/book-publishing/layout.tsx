import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/book-publishing");

export default function BookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
