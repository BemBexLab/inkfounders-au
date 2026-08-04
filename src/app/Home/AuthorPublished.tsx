import Image from "next/image";
import { robotoMono } from "../fonts";

export default function AuthorsPublishedSection() {
  return (
    <section className="w-full bg-[#F6F5F3] pb-8 pt-8 md:pt-12 lg:pt-15">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center lg:hidden">
        <h2 className="mb-6 max-w-3xl text-[24px] font-semibold leading-[1.05] text-black sm:text-[28px] md:text-[32px]">
          Who We Publish
        </h2>

        <Image
          src="/ourbook/New folder/Peter 1.webp"
          alt="Book Cover"
          width={330}
          height={540}
          className="mb-7 h-auto w-[min(72vw,300px)] transition-transform duration-300 hover:scale-105"
          priority
        />

        <div
          className={`${robotoMono.className} mx-auto max-w-3xl space-y-3 text-left text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px]`}
        >
          <p>We work with:</p>
          <ul className="list-disc pl-5">
            <li>First-time authors and new authors</li>
            <li>Independent authors and self-published authors</li>
            <li>Fiction authors and non-fiction authors</li>
            <li>Memoir writers, poets, and storytellers</li>
            <li>Children's authors and illustrators</li>
            <li>
              Business authors, educators, and manuscript writers of every
              background
            </li>
          </ul>
          <p className="mt-2">
            Whatever stage you're at a finished manuscript or just an idea our
            publishers, editors, and publishing consultants can tell you
            honestly what your book needs next.
          </p>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-10 px-6 lg:flex">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <Image
            src="/ourbook/New folder/Peter 1.webp"
            alt="Book Cover"
            width={330}
            height={540}
            className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
            priority
          />
        </div>
        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-[27px] leading-[0.9] font-semibold text-black mb-4">
            Who We Publish
          </h2>
          <div
            className={`${robotoMono.className} leading-tight space-y-4 text-gray-700 text-[12px] md:text-[16px]`}
          >
            <p>We work with:</p>
            <ul className="list-disc pl-5">
              <li>First-time authors and new authors</li>
              <li>Independent authors and self-published authors</li>
              <li>Fiction authors and non-fiction authors</li>
              <li>Memoir writers, poets, and storytellers</li>
              <li>Children's authors and illustrators</li>
              <li>
                Business authors, educators, and manuscript writers of every
                background
              </li>
            </ul>
            <p className="mt-2">
              Whatever stage you're at a finished manuscript or just an idea our
              publishers, editors, and publishing consultants can tell you
              honestly what your book needs next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
