import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/admin");

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
