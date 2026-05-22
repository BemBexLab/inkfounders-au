import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/blog/pricing-for-professional-book-editing-services",
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
