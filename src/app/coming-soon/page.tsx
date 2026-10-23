import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon | Ink Founders",
  description:
    "Ink Founders is preparing a new home for authors. Our website will be back soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
