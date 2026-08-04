import type { Metadata } from "next";
import HomeHero from "./Home/HomeHero";
import PartnerLogos from "./Home/OurPartner";
import Publishing from "./Home/Publishing";
import QuoteBanner from "./Home/QuoteBanner";
import WhatMake from "./Home/WhatMake";
import AuthorsPublishedSection from "./Home/AuthorPublished";
import HowItWork from "./Home/HowItWork";
import OurPromise from "./Home/OurPromise";
import Testimonials from "./Home/Testimonials";
import GetInTouch from "./Home/GetInTouch";
import FAQs from "./Home/FAQs";
import { faqItems } from "./Home/faqData";
import Lagacy from "./Home/Legacy";
import OurWork from "./Home/OurWork";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/"),
  title:
    "Self-Publishing Company Australia: Book Publishing Services for Authors",
  description:
    "Ink Founders is a self-publishing company authors trust for full-service book publishing, editing, design, and marketing. Book a Free Consultation",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <PartnerLogos />
      <Publishing />
      <QuoteBanner />
      <WhatMake />
      <AuthorsPublishedSection />
      <HowItWork />
      <Lagacy />
      <OurWork />
      <OurPromise />
      <Testimonials />
      <GetInTouch />
      <FAQs
        items={[
          {
            question: "How much does it cost to publish a book in Australia?",
            answerParagraphs: [
              "Costs vary depending on your book's length, whether it needs full editing, cover design, and which distribution platforms you choose. We provide a transparent quote after reviewing your manuscript see our full [Publishing Cost Guide].",
            ],
          },
          {
            question: "How long does the publishing process take?",
            answerParagraphs: [
              "Most books take a few months from manuscript assessment to publication, depending on the extent of editing and design required. See our [Publishing Timeline] for a stage-by-stage breakdown.",
            ],
          },
          {
            question: "Do I need an ISBN to self-publish in Australia? ",
            answerParagraphs: [
              "Yes, if you want your book listed for sale through retailers. We handle ISBN registration as part of our publishing packages.",
            ],
          },
          {
            question: "Will I own the rights to my book? ",
            answerParagraphs: [
              "Yes. With self-publishing and hybrid publishing, you retain ownership of your manuscript and royalties.",
            ],
          },
          {
            question: "Can I publish a children's book with you?",
            answerParagraphs: [
              "Yes we offer dedicated support for children's book authors, including illustration coordination and age appropriate formatting.",
            ],
          },
        ]}
      />
    </>
  );
}
