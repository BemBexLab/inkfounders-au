"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { MdBrush, MdCampaign, MdCategory, MdChildCare, MdDesignServices, MdEditNote, MdLocalShipping } from "react-icons/md";
import AOSProvider from "@/components/AOSProvider";
import { robotoMono } from "../fonts";
import CustomScrollbar from "@/components/CustomScrollbar";

type WhatMakeItem = {
  id: string;
  title: string;
  description: ReactNode;
  image?: string;
  alt?: string;
  icon?: ReactNode;
};

const whatMakeItems: WhatMakeItem[] = [
  {
    id: "integrated-publishing-services",
    title: "Self-Publishing Australia",
    description: (
      <div className="space-y-3">
        <p>
          Keep full creative control and higher royalties. Our{" "}
          <b>self-publishing Australia</b> service guides independent authors
          and self-published authors through manuscript formatting, ISBN
          registration, book cover design, and distribution to Amazon KDP,
          IngramSpark, and other major platforms without you needing to manage
          the technical side alone.
        </p>
        <p>
          A trusted alternative to traditional publishing for authors who want
          speed and control.
        </p>
      </div>
    ),
    image: "/Home/image 5 (traced).webp",
    alt: "Holistic & Transparent Services",
  },
  {
    id: "hybrid-publishing",
    title: "Hybrid Publishing",
    description: (
      <div className="space-y-3">
        <p>
          A partnership model that combines the creative control of
          self-publishing with the professional support of traditional
          publishing editorial guidance, professional book design, and full
          distribution, backed by an experienced publishing house.
        </p>
        <p>
          Ideal for authors who want a guided, professionally produced book
          without giving up ownership.
        </p>
      </div>
    ),
    icon: <MdCategory className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "manuscript-assessment-editing",
    title: "Manuscript Assessment & Editing",
    description: (
      <div className="space-y-3">
        <p>
          Before your book goes to print, it needs a professional eye. Our
          editing services include:
        </p>
        <ul className="list-disc list-outside">
          <li>Manuscript Review & Manuscript Assessment</li>
          <li>Developmental Editing for structure, pacing, and clarity</li>
          <li>Copy Editing Services</li>
          <li>Proofreading Services</li>
          <li>
            Feedback tailored for first-time authors, independent authors, and
            experienced writers alike.
          </li>
        </ul>
      </div>
    ),
    icon: <MdEditNote className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "book-design-formatting",
    title: "Book Design & Formatting",
    description: (
      <div className="space-y-3">
        <ul className="list-disc list-outside">
          <li>Book Cover Design & Book Illustration</li>
          <li>Interior Book Design, Interior Layout & Typesetting</li>
          <li>Book Formatting for paperback, hardcover, and eBook</li>
          <li>
            Print-ready file preparation in EPUB, MOBI, PDF, and DOCX formats
          </li>
        </ul>
      </div>
    ),
    icon: <MdDesignServices className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "book-printing-distribution",
    title: "Book Printing & Distribution",
    description: (
      <div className="space-y-3">
        <ul className="list-disc list-outside">
          <li>Print-on-Demand (POD) and Offset Printing</li>
          <li>Paperback Printing and Hardcover Printing across Australia</li>
          <li>
            Book Distribution setup for retailers, plus ISBN Registration and
            barcode/CIP assistance
          </li>
          <li>
            eBook Conversion and eBook Publishing across all major platforms
          </li>
        </ul>
      </div>
    ),
    icon: <MdLocalShipping className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "book-marketing-promotion",
    title: "Book Marketing & Promotion",
    description: (
      <div className="space-y-3">
        <ul className="list-disc list-outside">
          <li>Author Marketing campaigns tailored to your genre</li>
          <li>Amazon Book Marketing and launch day promotion</li>
          <li>
            Book Promotion strategies to help readers actually discover your
            book after publication
          </li>
          <li>
            Metadata and keyword optimisation so your book is genuinely
            discoverable on retailer platforms
          </li>
        </ul>
      </div>
    ),
    icon: <MdCampaign className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "childrens-book-publishing",
    title: "Children's Book Publishing",
    description: (
      <div className="space-y-3">
        <p>
          Specialised support for children's authors and picture books,
          including illustration coordination, age appropriate book formatting,
          and print quality suited to younger readers from picture books to
          early educational books.
        </p>
      </div>
    ),
    icon: <MdChildCare className="h-full w-full" aria-hidden="true" />,
  },
  {
    id: "publishing-for-every-genre",
    title: "Publishing for Every Genre",
    description: (
      <div className="space-y-3">
        <p>
          We publish across every category, including: Novels · Memoirs · Poetry
          Books · Cookbooks · Business Books · Educational Books · Fantasy Books
          · Romance Books · Non-Fiction · Picture Books.
        </p>
        <p>Whatever your genre, our editors, designers, and publishing consultants tailor the process to fit it.</p>
      </div>
    ),
    icon: <MdBrush className="h-full w-full" aria-hidden="true" />,
  },
];

const WhatMake = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 pt-4 sm:px-6 md:px-8 lg:px-0 lg:pt-2">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="text-center text-base font-semibold text-black mb-2 sm:text-lg md:text-xl">
            Witness our Uniqueness
          </p>
          <h2 className="mb-6 max-w-[48rem] text-center text-[1.55rem] font-semibold leading-[0.9] sm:text-2xl md:mb-8 md:text-[1.85rem] lg:max-w-none lg:text-[2rem]">
            <span className="text-[#DADD39]">
              Our E-book Publishing Services
            </span>
          </h2>

          <CustomScrollbar
            orientation="horizontal"
            data-aos="fade-down-right"
            containerClassName="w-full"
            className="flex w-full max-w-full items-stretch gap-4 px-1 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {whatMakeItems.map((item) => (
              <div
                key={item.id}
                className="flex w-[82vw] max-w-[360px] shrink-0 flex-col items-center px-2 text-center sm:w-[58vw] sm:px-4 md:w-[42vw] lg:w-full lg:max-w-none lg:shrink"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    width={48}
                    height={48}
                    className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                ) : item.icon ? (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center text-black sm:h-12 sm:w-12">
                    {item.icon}
                  </div>
                ) : null}
                <h3 className="mb-3 max-w-[30rem] text-[18px] font-semibold leading-[1] text-black sm:text-[20px] md:text-[22px] lg:text-2xl">
                  {item.title}
                </h3>
                <div className="relative w-full max-w-[24rem] h-[34vh] lg:h-[20vh]">
                  <div
                    className="scrollbar-none h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
                    tabIndex={0}
                    role="region"
                    aria-label={`${item.title} description`}
                  >
                    <div
                      className={`${robotoMono.className} pr-3 text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] md:text-[15px] md:leading-[1.2] lg:text-[16px]`}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  );
};

export default WhatMake;
