import type { Metadata } from "next";
import { robotoMono } from "@/app/fonts";
import { createCanonicalMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import ServiceCard from "../components/ServiceCard";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/ebook-writing"),
  title: "Book Ghostwriting Services: Hire a Ghostwriter for Your book",
  description:
    "Ink Founders offers professional book ghostwriting services Australia authors and leaders trust. Hire a ghostwriter for your book today.",
};

export default function EbookWritingPage() {
  const serviceCards = [
    {
      title: "Idea Development & In-Depth Research",
      description:
        "Our team helps refine and sharpen your concept, structure your content into a compelling blueprint, and carry out thorough research to make sure your book is authoritative, accurate, and relevant to your target readers.",
      checklist: [],
    },
    {
      title: "Original, High-Quality Writing",
      description: "Every book is written from scratch, ensuring:",
      checklist: [
        "100% original content",
        "No plagiarism",
        "Clear, engaging, reader-focused writing",
      ],
    },
    {
      title: "Authentic Voice Matching",
      description:
        "For ghostwriting projects, we carefully adapt to your tone, style, and personal cadence so the finished book genuinely feels like you wrote every word. We provide dedicated ghostwriting services Australia authors trust, including unlimited revisions during draft stages until the manuscript truly sounds like you.",
      checklist: [],
    },
    {
      title: "Genres We Cover",
      description:
        "As one of the best book ghostwriting services for a range of industries, we write across genres including:",
      checklist: [
        "Business & Entrepreneurship",
        "Self-Help & Personal Development",
        "Health & Wellness",
        "Technology & Education",
        "Fiction & Creative Writing",
        "Biographies & Memoirs",
      ],
      subDesc:
        "Whether you need a dedicated non fiction ghostwriter, a ghostwriter for a self help book, or a professional memoir ghostwriter to capture your life story, our team pairs you with a specialist who understands your specific genre.",
    },
    {
      title: "Our Writing Process",
      description: "",
      checklist: [
        "Concept discussion & project planning",
        "Outline creation & approval",
        "Writing & content development",
        "Client review & revisions",
        "Final delivery (ready for editing & publishing)",
      ],
    },
    {
      title: "Who This Service Is For",
      description: "",
      checklist: [
        "First time authors looking for ghostwriting services for first-time authors",
        "Entrepreneurs & coaches seeking an book writing service for coaches and entrepreneurs",
        "Business owners in need of a business ghostwriting service to put their expertise into a book",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      <section className="relative px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:py-16 2xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid grid-cols-1 items-center justify-items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="contents lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-center lg:px-1 lg:pl-12 xl:pl-20">
              <div className="contents lg:block lg:w-full lg:max-w-xl">
                <h1 className="order-1 mb-0 w-full max-w-2xl text-center text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-[48px] lg:mb-6 lg:text-left">
                  Book Writing & Ghostwriting Services
                </h1>
                <p
                  className={`${robotoMono.className} order-3 w-full max-w-2xl text-center text-[13px] leading-[1.5] text-gray-700 sm:text-[14px] md:text-[15px] lg:max-w-none lg:text-left lg:leading-[1.65]`}
                >
                  At Ink Founders, our book ghostwriting services are built to transform your ideas into a unique, engaging, high quality book. Whether you have a rough concept, notes, or a detailed outline, our experienced writers craft a publish-ready manuscript with clarity, creativity, and precision. If you are looking to hire a book ghostwriter in Australia, our team guides you seamlessly from that first conversation to a finished manuscript ready for print and digital release.
                </p>
              </div>
            </div>
            <div className="relative order-2 flex w-full items-center justify-center px-0 sm:px-4 md:px-8 lg:order-none lg:ml-5">
              <div className="relative flex aspect-square w-[min(82vw,350px)] items-center justify-center overflow-hidden rounded-lg sm:w-[400px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 20.webp"
                  alt="E-Book Writing Services"
                  width={574}
                  height={736}
                  sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, (max-width: 1024px) 440px, 520px"
                  className="h-full w-full object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-5 md:px-10 2xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-7 sm:px-6 sm:py-9 md:px-10 lg:py-12 2xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="order-2 flex w-full justify-center lg:order-none lg:w-1/2">
              <div className="relative flex aspect-square w-[min(66vw,240px)] items-center justify-center overflow-hidden rounded-lg sm:w-[260px] md:w-[340px] lg:w-full lg:max-w-md">
                <Image
                  src="/publishingservices/Rectangle 24.webp"
                  alt="Why Choose Ink Founders"
                  width={574}
                  height={736}
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="contents lg:flex lg:w-1/2 lg:flex-col">
              <h2 className="order-1 mb-0 text-center text-[20px] font-semibold leading-tight text-black sm:text-2xl md:text-3xl lg:mb-6 lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="order-3 mb-4 w-full max-w-[360px] flex-grow space-y-1.5 sm:max-w-[320px] sm:space-y-2 lg:mb-8 lg:max-w-none lg:space-y-3">
                {[
                  "Affordable ghostwriting services without cutting corners on quality",
                  "Experienced, professional ghostwriters",
                  "Transparent process & communication",
                  "Full author ownership and rights",
                  "Global publishing expertise, with ghostwriting services available across Australia",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-lg text-[#DADD39]">&#10003;</span>
                    <span className="text-[12px] leading-[1.45] text-gray-800 sm:text-[13px] md:text-[14px] lg:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="order-4 mt-auto self-center lg:self-start">
                <Link href="/contactus">
                  <button
                    type="button"
                    className="btn-slide-bg flex items-center gap-2 rounded-md border border-transparent bg-[#DADD39] px-5 py-2 text-[13px] font-normal text-black shadow transition-all duration-300 hover:border-black sm:px-6 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base"
                  >
                    <span className="slide-bg rounded-md"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <IoMdCall size={20} />
                      Request a Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
