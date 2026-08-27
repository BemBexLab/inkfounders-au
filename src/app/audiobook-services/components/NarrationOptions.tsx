'use client';

import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { nl2br } from "@/utils/textUtils";

interface NarrationOption {
  id?: string;
  title: string;
  description: string | React.ReactNode;
  imgSrc: string;
}

interface NarrationData {
  header: string;
  intro: string;
  options: NarrationOption[];
  quote: string | React.ReactNode;
  button: {
    text: string;
    link: string;
  };
}

interface NarrationOptionsProps {
  data?: NarrationData;
}

const NarrationOptions = ({ data }: NarrationOptionsProps) => {
  const renderRichText = (value: string | React.ReactNode) =>
    typeof value === "string" ? nl2br(value) : value;

  const narrationData: NarrationData = data || {
    header: "Flexible Audiobook Narration Options",
    intro:
      "Every author has a different vision. That's why we offer multiple narration styles:",
    options: [
      {
        id: "author-read",
        title: "Author-Read",
        description:
          "You narrate your own story with professional recording and production support.",
        imgSrc: "/audiobooks/book.webp",
      },
      {
        id: "actor-read",
        title: "Actor-Read",
        description:
          "A trained voice actor performs your book with character depth and emotional range.",
        imgSrc: "/audiobooks/headphones.webp",
      },
      {
        id: "narration-with-musical-scoring",
        title: "Narration With Musical Scoring",
        description:
          "Subtle background music enhances the listening experience and adds atmosphere.",
        imgSrc: "/audiobooks/audiochat.webp",
      },
    ],
    quote:
      '"We\'ve generated the highest number of demo requests of all time. It was a 20-30% increase."',
    button: {
      text: "Request a Call",
      link: "/contactus",
    },
  };

  return (
    <section>
      <div className="bg-[#f5f5f5] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-3xl font-semibold tracking-[0.02em] text-[#253548] sm:text-4xl">
            {narrationData.header}
          </h1>
          <p className={`${robotoMono.className} mx-auto mb-10 max-w-5xl text-sm leading-7 text-[#455568] sm:text-[15px]`}>
            {narrationData.intro}
          </p>

          <div className="mb-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {narrationData.options.map((opt) => (
              <article
                key={opt.id ?? opt.title}
                className="flex h-[382px] flex-col items-center overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white px-7 py-9 text-center shadow-[0_14px_28px_rgba(0,0,0,0.07)] sm:px-8"
              >
                <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#eeeaa8] bg-[#fffef0]">
                  <img
                    src={opt.imgSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-11 w-11 object-contain"
                  />
                </div>
                <h2 className="mb-3 shrink-0 text-[17px] font-semibold leading-[1.4] text-[#253548]">
                  {opt.title}
                </h2>
                <div className="min-h-0 w-full flex-1 overflow-y-auto pr-3 [scrollbar-color:#d8d59b_#f2f2f2] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f2f2f2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d8d59b]">
                  <p className={`${robotoMono.className} text-[14px] leading-[1.95] text-[#253548]`}>
                    {renderRichText(opt.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mb-8 max-w-5xl rounded-[24px] border border-[#e8e8e8] bg-white px-6 py-6 shadow-[0_14px_28px_rgba(0,0,0,0.06)] sm:px-8">
            <p className={`${robotoMono.className} whitespace-pre-line text-sm leading-7 text-[#253548] sm:text-[15px]`}>
              {renderRichText(narrationData.quote)}
            </p>
          </div>

          <Link
            href={narrationData.button.link}
            className="btn-slide-bg inline-flex items-center gap-2 rounded-md border border-[#DADD39] bg-[#DADD39] px-5 py-2.5 text-base font-normal text-black shadow transition-all duration-300 hover:border-black"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10 flex items-center gap-2">
              <IoMdCall size={20} />
              {narrationData.button.text}
            </span>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default NarrationOptions;
