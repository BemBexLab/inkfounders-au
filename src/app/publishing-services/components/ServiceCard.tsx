"use client";

import type { ReactNode } from "react";
import { robotoMono } from "@/app/fonts";
import { FiCheck } from "react-icons/fi";
import CustomScrollbar from "@/components/CustomScrollbar";

export type PublishingServiceCardData = {
  title: string;
  subtitle?: string;
  description?: string;
  checklist: string[];
  subDesc?: string;
  compactDescription?: boolean;
};

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#DADD39]">
        <FiCheck size={16} />
      </span>
      <span className="text-[14px] leading-6 text-[#334155]">{children}</span>
    </li>
  );
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  checklist,
  subDesc,
  compactDescription = false,
}: PublishingServiceCardData) {
  return (
    <article className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-[18px] border border-[#e8e2c8] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(65,60,35,0.08)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(65,60,35,0.12)] sm:px-6 sm:py-6 lg:h-[340px]">
      <div className="space-y-2">
        <h3 className="text-[18px] font-semibold leading-snug text-black">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-[15px] font-medium leading-6 text-black">
            {subtitle}
          </p>
        ) : null}
      </div>

      <CustomScrollbar
        orientation="vertical"
        containerClassName="mt-4 flex-1 overflow-hidden pr-4"
        className="h-full pr-8"
        trackClassName="right-1"
      >
          {description ? (
            <p
              className={`${robotoMono.className} text-[14px] leading-6 text-[#334155]`}
            >
              {description}
            </p>
          ) : null}

          {checklist.length > 0 ? (
            <ul className={`${description ? "mt-6" : "mt-1"} space-y-2.5`}>
              {checklist.map((item, index) => (
                <CheckItem key={`${item}-${index}`}>{item}</CheckItem>
              ))}
            </ul>
          ) : null}

          {subDesc ? (
            <p
              className={`${robotoMono.className} mt-5 text-[13px] leading-6 text-[#475569]`}
            >
              {subDesc}
            </p>
          ) : null}
      </CustomScrollbar>
    </article>
  );
}
