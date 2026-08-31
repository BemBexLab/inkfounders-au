"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaBars,
  FaBook,
  FaChevronDown,
  FaCog,
  FaHome,
  FaInfoCircle,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
  desktopOnlyMenu?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome size={22} />,
  },
  {
    label: "Publishing Services",
    href: "/publishing-services",
    icon: <FaCog size={20} />,
    children: [
      {
        label: "E-Book Writing",
        href: "/publishing-services/ebook-writing",
      },
      {
        label: "E-Book Publishing",
        href: "/publishing-services/ebook-publishing",
      },
      {
        label: "E-Book Cover Design",
        href: "/publishing-services/ebook-cover-design",
      },
      {
        label: "Editing & Proofreading",
        href: "/publishing-services/editing-and-proofreading",
      },
    ],
  },
  {
    label: "Audiobook Services",
    href: "/audiobook-services",
    icon: <FaBook size={20} />,
    desktopOnlyMenu: true,
    children: [
      {
        label: "Audiobook Narration",
        href: "/audiobook-services/audiobook-narration",
      },
      {
        label: "Audiobook Editing",
        href: "/audiobook-services/audiobook-editing",
      },
      {
        label: "Audiobook Publishing",
        href: "/audiobook-services/audiobook-publishing",
      },
    ],
  },
  {
    label: "Our Book",
    href: "/ourbook",
    icon: <FaBook size={22} />,
  },
  {
    label: "Who we are",
    href: "/whoweare",
    icon: <FaInfoCircle size={20} />,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: <FaInfoCircle size={20} />,
  },
  {
    label: "Contact Us",
    href: "/contactus",
    icon: <FaUserCircle size={20} />,
  },
];

const isActivePath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#F4F3E1]/95 px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md sm:px-6 md:px-8 xl:px-6 xl:py-4 2xl:px-10"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <Link href="/" aria-label="Ink Founders home" className="shrink-0">
          <div className="flex items-center gap-2">
            <video
              width="130"
              height="50"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-[105px] sm:w-[118px] 2xl:w-[130px]"
            >
              <source
                src="/logovideo/inkfounder_logo_animate.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 xl:block">
          <nav className="relative z-50 flex items-center justify-center gap-5 rounded-full px-2 py-3 2xl:gap-9 2xl:px-6">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              if (item.children?.length) {
                return (
                  <div key={item.href} className="group relative">
                    {item.desktopOnlyMenu ? (
                      <span
                        className={`cursor-default whitespace-nowrap text-xs transition hover:text-[#a8ad12] 2xl:text-[15px] ${
                          isActive
                            ? "font-semibold text-[#858a00] underline underline-offset-[10px]"
                            : "text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className={`whitespace-nowrap text-xs transition hover:text-[#a8ad12] 2xl:text-[15px] ${
                          isActive
                            ? "font-semibold text-[#858a00] underline underline-offset-[10px]"
                            : "text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    <div className="invisible absolute left-0 top-full mt-2 w-60 translate-y-1 overflow-hidden rounded-xl border border-black/5 bg-white opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#F4F3E1] hover:text-black focus:bg-[#F4F3E1] focus:outline-none"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-xs transition hover:text-[#a8ad12] 2xl:text-[15px] ${
                    isActive
                      ? "font-semibold text-[#858a00] underline underline-offset-[10px]"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link
          href="/contactus"
          className="btn-slide-bg hidden shrink-0 items-center gap-2 rounded-[10px] border border-[#DADD39] bg-[#DADD39] px-3 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:border-black xl:flex 2xl:px-6 2xl:text-base"
        >
          <span className="slide-bg"></span>
          <span className="relative z-10 whitespace-nowrap">Request a Quote</span>
        </Link>

        <div className="xl:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-xl text-black transition hover:border-[#DADD39] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ad12]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex justify-end bg-black/35 backdrop-blur-[2px] xl:hidden"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setMenuOpen(false);
            }}
          >
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
              className="flex h-[100dvh] w-full max-w-[430px] flex-col overflow-y-auto bg-[#fffef8] shadow-[-16px_0_50px_rgba(0,0,0,0.16)]"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-[#F4F3E1]/95 px-5 py-4 backdrop-blur-md sm:px-7">
                <Link
                  href="/"
                  aria-label="Ink Founders home"
                  onClick={() => setMenuOpen(false)}
                >
                  <video
                    width="118"
                    height="46"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-auto w-[110px]"
                  >
                    <source
                      src="/logovideo/inkfounder_logo_animate.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Link>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-black transition hover:border-[#DADD39] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ad12]"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="flex-1 px-5 pb-6 pt-4 sm:px-7">
                <ul className="flex w-full flex-col">
                  {navItems.map((item) => {
                    const isActive = isActivePath(pathname, item.href);
                    const hasChildren = Boolean(item.children?.length);
                    const isExpanded = openMobileSection === item.href;

                    return (
                      <li
                        key={item.href}
                        className="w-full border-b border-[#e6e2d4] py-1"
                      >
                        <div className="flex items-center justify-between gap-3">
                          {item.desktopOnlyMenu ? (
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileSection((prev) =>
                                  prev === item.href ? null : item.href,
                                )
                              }
                              className={`flex min-h-14 flex-1 items-center gap-3 rounded-lg px-2 py-3 text-left text-[17px] transition hover:bg-black/[0.03] ${
                                isActive
                                  ? "font-semibold text-[#858a00]"
                                  : "text-gray-700"
                              }`}
                              aria-expanded={isExpanded}
                            >
                              <span
                                className={
                                  isActive ? "text-[#858a00]" : "text-gray-400"
                                }
                              >
                                {item.icon}
                              </span>
                              <span>{item.label}</span>
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className={`flex min-h-14 flex-1 items-center gap-3 rounded-lg px-2 py-3 text-[17px] transition hover:bg-black/[0.03] ${
                                isActive
                                  ? "font-semibold text-[#858a00]"
                                  : "text-gray-700"
                              }`}
                            >
                              <span
                                className={
                                  isActive ? "text-[#858a00]" : "text-gray-400"
                                }
                              >
                                {item.icon}
                              </span>
                              <span>{item.label}</span>
                            </Link>
                          )}

                          {hasChildren && (
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileSection((prev) =>
                                  prev === item.href ? null : item.href,
                                )
                              }
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-[#F4F3E1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ad12]"
                              aria-label={`Toggle ${item.label} submenu`}
                              aria-expanded={isExpanded}
                            >
                              <FaChevronDown
                                className={`transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {hasChildren && isExpanded && (
                          <div className="ml-11 flex flex-col gap-0.5 pb-3">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-lg border-l-2 px-3 py-2.5 text-[15px] transition hover:bg-[#F4F3E1] ${
                                  isActivePath(pathname, child.href)
                                    ? "border-[#DADD39] bg-[#F4F3E1] font-semibold text-[#858a00]"
                                    : "border-transparent text-gray-600"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-black/5 bg-[#F4F3E1] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-7">
                <a
                  href="tel:0468285539"
                  className="group mb-4 flex items-center gap-3 rounded-xl text-black"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DADD39] text-black transition group-hover:bg-[#cbd02b]">
                    <IoCall size={20} />
                  </span>
                  <span>
                    <span className="block text-xs text-gray-500">Call us</span>
                    <span className="font-semibold group-hover:underline">(0468) 285-539</span>
                  </span>
                </a>

                <Link
                  href="/contactus"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl border border-[#DADD39] bg-[#DADD39] px-6 py-3.5 text-center font-semibold text-black transition hover:border-black hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ad12]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
