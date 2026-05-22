import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(
  "/publishing-services/editing-and-proofreading",
);

export default function EditingAndProofreadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
