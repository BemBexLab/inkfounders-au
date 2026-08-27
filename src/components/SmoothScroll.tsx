"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
  children,
  withHeader = false,
}: {
  children: React.ReactNode;
  withHeader?: boolean;
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => smoother.kill();
  }, []);

  useLayoutEffect(() => {
    // Recalculate the scroll bounds after client-side route changes.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div
        id="smooth-content"
        className={withHeader ? "smooth-content-with-header" : undefined}
      >
        {children}
      </div>
    </div>
  );
}
