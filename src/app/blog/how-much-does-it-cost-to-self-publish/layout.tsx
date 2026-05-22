import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/blog/how-much-does-it-cost-to-self-publish",
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
