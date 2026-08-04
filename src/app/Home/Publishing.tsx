import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

// components/AboutSection.tsx
export default function Publishing() {
  return (
    <AOSProvider>
      <section
        data-aos="fade-down-right"
        className="mt-6 w-full bg-[#F6F5F3] pt-4 md:mt-8 md:pb-4 lg:mt-0"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-7">
          {/* Left: Headline */}
          <div className="mb-3 w-full md:mb-0 md:w-2/5">
            <h2 className="text-[23px] mb-2 font-semibold leading-[1.08] text-black md:text-3xl lg:leading-snug">
              Why Authors Trust Us
            </h2>
            <p className="text-md font-regular max-w-6/7 leading-[1.08] text-black lg:leading-snug">
              Publishing a book is a big decision, and you deserve a book
              publishing company that's transparent about how the process works,
              not vague promises.
            </p>
          </div>
          {/* Right: Description */}
          <div
            className={`w-full space-y-2 pr-5 text-[12px] leading-[1.25] text-gray-700 md:w-3/5 md:text-[16px] lg:space-y-4 lg:leading-tight ${robotoMono.className}`}
          >
            <p>
              <b>Real experience</b> - Our editors, book designers,
              illustrators, and publishing consultants have worked directly with
              manuscripts from new authors, independent authors, fiction
              authors, non-fiction authors, and children's authors across genres
              including novels, memoirs, poetry books, cookbooks, business
              books, educational books, fantasy books, and romance books.
            </p>

            <p className="mt-1 lg:mt-2">
              <b>Industry expertise</b> - Our publishing team understands ISBN
              registration, copyright, CIP data, barcodes, and the technical
              requirements of every major retailer and platform, so your
              manuscript is genuinely publishing-ready not just uploaded and
              hoped for.
            </p>

            <p className="mt-1 lg:mt-2">
              <b>Clear, honest pricing</b> - No hidden fees. You'll know exactly
              what's included in every publishing package from manuscript
              assessment to book printing before you commit to anything. See our
              [Publishing Cost] guide for real numbers.
            </p>

            <p className="mt-1 lg:mt-2">
              <b>You keep your rights</b> - Whether you choose self-publishing
              or hybrid publishing, your manuscript, royalties, and publishing
              contract terms remain yours and are explained in plain English.
            </p>

            <p className="mt-1 lg:mt-2">
              <b>Australian-based support</b> - Work with a publishing company
              that understands the Australian publishing industry, local book
              printing, ISBN Australia registration, and local distribution not
              an overseas call centre.
            </p>

            <p className="mt-1 lg:mt-2">
              <b>A defined publishing timeline</b> - You'll always know what
              stage your book is at, from first submission to launch. See our
              [Publishing Timeline] for what to expect.
            </p>
          </div>
        </div>
      </section>
    </AOSProvider>
  );
}
