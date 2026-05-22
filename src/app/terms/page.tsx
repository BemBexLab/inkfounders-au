import type { Metadata } from "next";
import TermsAndConditions from "./components/terms";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/terms");

export default function Terms() {
  return (
    <>
    <TermsAndConditions />
    </>
  );
}
