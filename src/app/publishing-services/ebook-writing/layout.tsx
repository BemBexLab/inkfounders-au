import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/publishing-services/ebook-writing",
);

export default function EbookWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
