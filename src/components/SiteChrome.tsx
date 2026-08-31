"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer2";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome =
    pathname === "/bookpublishing" ||
    pathname.startsWith("/bookpublishing/") ||
    pathname === "/book-publishing" ||
    pathname.startsWith("/book-publishing/");

  if (hideChrome) {
    return children;
  }

  return (
    <>
      <Header />
      <div
        aria-hidden="true"
        className="h-[68px] sm:h-[70px] xl:h-[78px] 2xl:h-[82px]"
      />
      {children}
      <Footer />
    </>
  );
}
