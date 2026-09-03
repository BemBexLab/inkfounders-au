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


// export const metadata: Metadata = {
//   ...createCanonicalMetadata("/"),
//   title:
//     "Self-Publishing Company Australia: Book Publishing Services for Authors",
//   description:
//     "Ink Founders is a self-publishing company authors trust for full-service book publishing, editing, design, and marketing. Book a Free Consultation",
// };

export const metadata: Metadata = {
  ...createCanonicalMetadata("/"),
  title:
    "Self-Publishing Australia: Book Publishing Company & Services | Ink Founders",
  description:
    "Looking for professional self-publishing in Australia? Ink Founders provides book editing, cover design, formatting, ISBN registration, publishing, distribution, and book marketing services.",
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
            question: "What is Ink Founders?",
            answerParagraphs: [
              <>Ink Founders is one of the leading <b>Australian book publishing companies</b> that authors trust to bring their books to the world. We offer a complete suite of publishing services, including editing, proofreading, formatting, cover design, ISBN registration, and marketing, so authors can go from idea to published book without the stress of doing it alone.</>,
            ],
          },
          {
            question: "What makes Ink Founders one of the best self-publishing companies for first-time authors?",
            answerParagraphs: [
              "We create our process specifically with first-time authors in mind. From your very first conversation with our team to the day your book is published, we guide you through every step, explain what to expect, and never rewrite your voice. Our 100+ qualified experts and clear, step-by-step process are why so many new authors choose us for their first book.",
            ],
          },
          {
            question: "Do you offer full-service book publishing, or just certain parts of the process?",
            answerParagraphs: [
              <>As a full-service company for <b>book publishing Australia</b> authors rely on, we cover the entire journey: editing, proofreading, formatting, cover design, ISBN and barcode registration, publishing, and marketing. You can use one service or the complete package, depending on where you are in your writing journey.</>,
            ],
          },
          {
            question: "What genres do you work with?",
            answerParagraphs: [
              "We work with a wide range of genres, including fiction, non-fiction, Christian, self-help, historical, memoir, and poetry. Wherever your story fits, our team can help shape it into a professionally published book.",
            ],
          },
          {
            question: "Will I keep the rights to my book?",
            answerParagraphs: [
              "Yes. When you publish with Ink Founders, you retain 100% ownership, rights and rewards, including all rights and rewards. We help you publish and market your book, but it remains entirely yours.",
            ],
          },
          {
            question: "Will your editors change my writing style or voice?",
            answerParagraphs: [
              "No. Our editors refine and clarify your manuscript, sharpening grammar, structure, and flow, but they don't rewrite your story or change your voice. Your book will still sound like you, just polished.",
            ],
          },
          {
            question: "Do you help with book cover design?",
            answerParagraphs: [
              "Yes. We offer custom book cover design services for self-published authors, creating covers that reflect your book's genre, tone, and message so it stands out to readers at a glance.",
            ],
          },
          {
            question: "How does Ink Founders help my book reach readers after publishing?",
            answerParagraphs: [
              "Beyond publishing, we distribute your book to more than 40 global platforms and offer book marketing and promotion services for self-published authors, including social media campaigns and brand-building strategies, so your book reaches the right audience.",
            ],
          },
          {
            question: "Do you help with ISBN and barcode registration?",
            answerParagraphs: [
              "Yes. We help you secure your ISBN and barcode so your book is easy to find, search, and purchase anywhere in the world.",
            ],
          },
          {
            question: "What is the difference between hybrid publishing and self-publishing?",
            answerParagraphs: [
              "While traditional hybrid publishing companies often split upfront costs and ongoing royalties, Ink Founders operates under an author-first self-publishing model where you retain 100% of your earnings and rights.",
            ],
          },
          {
            question: "Where is Ink Founders based, and who do you work with?",
            answerParagraphs: [
              "We work with authors across Australia, including our self-publishing agency serving Miami, Florida, as well as authors nationwide and internationally.",
            ],
          },
          {
            question: "How do I get started?",
            answerParagraphs: [
              "Start with a free consultation. We'll talk through your story, your goals, and what stage you're at, whether you have a finished manuscript or just an idea, and map out a publishing path from there.",
            ],
          },
          {
            question: "What is the average publishing cost in Australia?",
            answerParagraphs: [
              "The publishing cost in Australia varies depending on the level of editing, design complexity, and distribution required. Ink Founders offers transparent, customisable packages designed to suit independent authors without hidden fees.",
            ],
          },
          {
            question: "What is the typical publishing timeline for a book?",
            answerParagraphs: [
              "Our standard publishing timeline usually spans between 6 to 12 weeks from finalised manuscript assessment through editing, layout design, ISBN setup, and final distribution.",
            ],
          },
        ]}
      />
    </>
  );
}
