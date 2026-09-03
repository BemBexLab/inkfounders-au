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
    title: "Integrated, straightforward publishing services",
    description: (
      <div className="space-y-3">
        <p>
          As your publishing partner, Ink Founders offers a full-service publishing model covering editing, formatting, publishing, and marketing, all under one roof. Our team supports you at every stage, with clear communication so you always know where your book stands.
        </p>
      </div>
    ),
    image: "/Home/image 5 (traced).webp",
    alt: "Holistic & Transparent Services",
  },
  {
    id: "hybrid-publishing",
    title: "Book Distribution Australia & Worldwide",
    description: (
      <div className="space-y-3">
        <p>
          We expand your reach with comprehensive book distribution in Australia and across 40+ global platforms. Whether you are looking for physical print management or digital e-book publishing in Australia, we ensure your work is accessible on Amazon, IngramSpark, and major global retailers.
        </p>
      </div>
    ),
    image: '/Home/image 6 (traced).webp',
    alt: 'Myriad Of Distribution Channels',
  },
  {
    id: "manuscript-assessment-editing",
    title: "Marketing books and building brands, together",
    description: (
      <div className="space-y-3">
        <p>
          Publishing your book is only the beginning. Building your author brand is what creates a lasting impact. That's why Ink Founders offers author branding services designed to build your public image and connect you with the right audience.
        </p>
      </div>
    ),
    image: '/Home/material-symbols_book-4.webp',
    alt: 'Book Marketing & Author Branding',
  },
];

const WhatMake = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 pt-4 sm:px-6 md:px-8 lg:px-0 lg:pt-2">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="text-center text-base font-semibold text-black mb-2 sm:text-lg md:text-xl">
            Witness Our Uniqueness
          </p>
          <h2 className="mb-6 max-w-[48rem] text-center text-[1.55rem] font-semibold leading-[0.9] sm:text-2xl md:mb-8 md:text-[1.85rem] lg:max-w-none lg:text-[2rem]">
            <span className="text-[#DADD39]">
              At Ink Founders, Your Goals Are Our Commitment
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
