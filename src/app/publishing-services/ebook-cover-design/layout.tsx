import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/publishing-services/ebook-cover-design",
);

export default function EbookCoverDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
