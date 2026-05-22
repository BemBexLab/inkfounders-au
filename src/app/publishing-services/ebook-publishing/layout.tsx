import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/publishing-services/ebook-publishing",
);

export default function EbookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
