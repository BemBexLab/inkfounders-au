import type { Metadata } from "next";
import PrivacyPolicy from "./components/privacy";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/privacy");

export default function Privacy() {
  return (
    <>
    <PrivacyPolicy />
    </>
  );
}
