import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        {/* Content */}
        <div className="contents space-y-8 lg:block lg:w-full lg:max-w-2xl lg:text-left">
          <div>
            <h2 className="order-1 mb-5 w-full max-w-3xl text-center text-[23px] font-semibold leading-[1] text-black sm:text-[25px] md:text-[27px] lg:order-none lg:max-w-none lg:text-left">
              Meet the People Behind Your Book
            </h2>
            <div
              className={`order-3 w-full max-w-3xl space-y-3 text-left font-mono text-[13px] leading-[1.32] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:max-w-none lg:space-y-4 lg:text-[16px] lg:leading-tight ${robotoMono.className}`}
            >
              <div className="space-y-2">
                <p>
                  Publishing a book takes a team. Depending on your package,
                  your book is supported by:
                </p>{" "}
                <p>
                  <b>
                    Publisher · Editor · Copy Editor · Proofreader · Illustrator
                    · Book Designer · Cover Designer · Typesetter
                  </b>
                </p>{" "}
                <p>
                  Every role exists to move your manuscript closer to a
                  professionally published book, not just a printed file.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="order-1 mb-5 w-full max-w-3xl text-center text-[23px] font-semibold leading-[1] text-black sm:text-[25px] md:text-[27px] lg:order-none lg:max-w-none lg:text-left">
              Publishing Standards We Work To
            </h2>
            <div
              className={`order-3 w-full max-w-3xl space-y-3 text-left font-mono text-[13px] leading-[1.32] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:max-w-none lg:space-y-4 lg:text-[16px] lg:leading-tight ${robotoMono.className}`}
            >
              <div className="space-y-2">
                <p>
                  Every book we publish is produced to proper industry
                  standards, including:
                </p>{" "}
                <ul className="list-inside list-disc space-y-1">
                  <li><b>ISBN</b> and <b>Barcode</b> registration</li>
                  <li><b>Copyright</b> registration and guidance</li>
                  <li><b>CIP</b> (Cataloguing-in-Publication) data where required</li>
                  <li>Correct <b>file formats</b> for print and digital: <b>EPUB, MOBI, PDF, DOCX</b></li>
                  <li>Compatibility with <b>Amazon KDP, IngramSpark, Apple Books, Google Play Books, Kobo, Barnes & Noble Press,</b> and <b>Draft2Digital</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Book Cover */}
        <div className="order-2 flex w-full flex-shrink-0 justify-center lg:order-none lg:w-auto">
          <Image
            src="/Home/updatedImages/Leonard - 2 1.webp"
            alt="Book Cover"
            width={540}
            height={740}
            className="h-auto w-[min(78vw,340px)] transform transition-transform duration-300 hover:scale-105 lg:w-[540px] lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:rotate-3"
            priority
          />
        </div>
      </div>
    </section>
  );
}
