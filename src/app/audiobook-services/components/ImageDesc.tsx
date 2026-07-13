"use client";

import { robotoMono } from "@/app/fonts";
import CustomScrollbar from "@/components/CustomScrollbar";
import React, { useEffect, useRef, useState } from "react";

interface Section {
  title: string;
  paragraphs: string[] | React.ReactNode;
  imgSrc: string;
  imgFirst: boolean;
}

interface ImageDescProps {
  /**
   * Sections to render. component will render nothing if this prop is
   * missing or empty - there is no built-in default content anymore.
   */
  data?: Section[];
}

function DesktopSection({ section }: { section: Section }) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  useEffect(() => {
    const element = imageRef.current;

    if (!element) {
      return;
    }

    const updateHeight = () => {
      setTextHeight(element.offsetHeight || null);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(element);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [section.imgSrc, section.paragraphs]);

  return (
    <div
      className={`my-10 flex items-start justify-center gap-16 ${
        section.imgFirst ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className="flex max-w-[520px] flex-1 flex-col"
        style={textHeight ? { height: `${textHeight}px` } : undefined}
      >
        <h2 className="mb-3 text-[28px] font-semibold leading-tight text-[#1a1a1a]">
          {section.title}
        </h2>

        <CustomScrollbar
          orientation="vertical"
          containerClassName="mt-2 flex-1 overflow-hidden pr-4"
          className="h-full pr-8"
          trackClassName="right-1"
        >
          <div
            className={`${robotoMono.className} space-y-3 text-[15px] leading-relaxed text-[#333333]`}
          >
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <div>{section.paragraphs}</div>
            )}
          </div>
        </CustomScrollbar>
      </div>

      <div ref={imageRef} className="w-[550px] shrink-0 overflow-hidden rounded-lg">
        <img src={section.imgSrc} alt="" className="h-auto w-[550px]" />
      </div>
    </div>
  );
}

const ImageDesc = ({ data }: ImageDescProps) => {
  const sections: Section[] = data || [];

  if (!sections.length) {
    return null;
  }

  return (
    <section>
      <div className="hidden bg-[#f0eedd] px-8 py-16 lg:block">
        <div className="mx-auto max-w-[1400px]">
          {sections.map((section, index) => (
            <DesktopSection key={index} section={section} />
          ))}
        </div>
      </div>

      <div className="block bg-[#f0eedd] px-4 py-10 sm:px-6 md:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl">
          {sections.map((section, index) => (
            <div key={index} className="mb-12 last:mb-0 sm:mb-14">
              <h2 className="mb-5 text-center text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
                {section.title}
              </h2>

              <div className="mx-auto mb-6 w-full max-w-[620px] overflow-hidden rounded-lg">
                <img
                  src={section.imgSrc}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              </div>

              <div
                className={`${robotoMono.className} mx-auto max-w-2xl space-y-4 text-center text-sm text-[#333333] sm:text-base`}
              >
                {Array.isArray(section.paragraphs) ? (
                  section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))
                ) : (
                  <div>{section.paragraphs}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDesc;
