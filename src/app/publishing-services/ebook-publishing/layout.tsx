import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/ebook-publishing"),
  title:
    "Book Publishing Service for Authors: Ink Founders",
  description:
    "Book publishing services for Australian authors, including ghostwriting, editing, cover design, formatting, ISBN registration, and marketing.",
};

export default function EbookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
