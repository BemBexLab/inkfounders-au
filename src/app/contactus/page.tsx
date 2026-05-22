import type { Metadata } from "next";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import ContactUsHero from "./components/ContactUsHero";
import Portfolio from "./components/portfolio";
import { getInTouchContent } from "./getInTouchData";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/contactus");

export default function Home() {
  return (
    <>
    <ContactUsHero />
    <PartnersSection />
    <GetInTouch data={getInTouchContent} />
    <Portfolio />
    </>
  );
}
