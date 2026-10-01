"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronRight, ChevronDown, UtensilsCrossed, Zap, Flame, Phone } from "lucide-react";
import { BRANDS, CONTACT_DETAILS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterBrands = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setBrandsDropdownOpen(true);
  };

  const handleMouseLeaveBrands = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setBrandsDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Structure", href: "#structure" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-md shadow-slate-900/5"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/70 py-4 shadow-2xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: MAXWELL GROUP Wordmark / Text Logo */}
            <Link
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm shrink-0"
              aria-label="Maxwell Group Homepage"
            >
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="font-extrabold text-sm text-sky-400">M</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 ml-0.5 animate-pulse"></span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-950 uppercase font-jakarta">
                    MAXWELL
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-slate-600 uppercase font-jakarta">
                    GROUP
                  </span>
                </div>
                <span className="text-[9px] font-medium text-slate-500 uppercase mt-0.5">
                  Parent Corporate Identity
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop Navigation with sleek interactive links & dropdown */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-50/90 border border-slate-200/80 shadow-2xs shrink-0"
              aria-label="Main Navigation"
            >
              <a
                href="#"
                className="whitespace-nowrap px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                Home
              </a>

              <a
                href="#about"
                className="whitespace-nowrap px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                About
              </a>

              {/* Our Brands with Interactive Dropdown & Official Logos */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterBrands}
                onMouseLeave={handleMouseLeaveBrands}
              >
                <a
                  href="#brands"
                  className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-sky-500 ${
                    brandsDropdownOpen
                      ? "text-sky-700 bg-white shadow-2xs"
                      : "text-slate-700 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  <span className="whitespace-nowrap">Our Brands</span>
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-sky-100 text-[10px] font-bold text-sky-700 leading-none">
                    3
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      brandsDropdownOpen ? "rotate-180 text-sky-600" : "text-slate-400"
                    }`}
                  />
                </a>

                {/* Dropdown Card */}
                {brandsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-sm shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-2 py-1.5 mb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-slate-500">
                        Specialized Brands
                      </span>
                      <span className="text-[10px] text-sky-600 font-semibold">Official Portals</span>
                    </div>

                    <div className="space-y-1.5">
                      {/* Vector */}
                      <a
                        href="#vector"
                        onClick={() => setBrandsDropdownOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-sm hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                      >
                        <div className="relative h-7 w-28 shrink-0">
                          <Image
                            src="/brands/vector-logo.png"
                            alt="Vector Food Equipments"
                            fill
                            sizes="120px"
                            className="object-contain object-left"
                          />
                        </div>
                        <div className="flex-1 min-w-0 border-l border-slate-100 pl-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-red-600 transition-colors truncate">
                              Commercial Kitchens
                            </span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-red-600" />
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            Turnkey equipment & fabrication
                          </p>
                        </div>
                      </a>

                      {/* Maxwell Induction */}
                      <a
                        href="https://www.maxwellinduction.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setBrandsDropdownOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-sm hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                      >
                        <div className="relative h-7 w-28 shrink-0">
                          <Image
                            src="/brands/maxwell-induction.png"
                            alt="Maxwell Induction"
                            fill
                            sizes="120px"
                            className="object-contain object-left"
                          />
                        </div>
                        <div className="flex-1 min-w-0 border-l border-slate-100 pl-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-sky-600 transition-colors truncate">
                              Induction Technology
                            </span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600" />
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            ~90% energy efficiency (Live site ↗)
                          </p>
                        </div>
                      </a>

                      {/* SK Power Cook */}
                      <a
                        href="#sk-powercook"
                        onClick={() => setBrandsDropdownOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-sm hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                      >
                        <div className="relative h-7 w-28 shrink-0">
                          <Image
                            src="/brands/sk-powercook-logo.png"
                            alt="SK Power Cook"
                            fill
                            sizes="120px"
                            className="object-contain object-left"
                          />
                        </div>
                        <div className="flex-1 min-w-0 border-l border-slate-100 pl-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-orange-600 transition-colors truncate">
                              Food Processing
                            </span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-orange-600" />
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            Commercial cooking machinery
                          </p>
                        </div>
                      </a>

                    </div>
                  </div>
                )}
              </div>


              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* RIGHT: Quick Contact & CTA Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="tel:+918925857821"
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors whitespace-nowrap shrink-0"
                title="Call Maxwell Group: +91 89258 57821 / +91 89258 57824"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="whitespace-nowrap">+91 89258 57821</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase whitespace-nowrap shrink-0 rounded-sm bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white shadow-md shadow-sky-600/20 hover:from-sky-500 hover:to-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                    <span className="font-extrabold text-xs text-sky-400">M</span>
                    <span className="w-1 h-1 rounded-full bg-red-500 ml-0.5"></span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 leading-none">
                      <span className="text-base font-extrabold text-slate-950">MAXWELL</span>
                      <span className="text-base font-medium text-slate-600">GROUP</span>
                    </div>
                    <span className="text-[9px] text-slate-500 uppercase mt-0.5">
                      Parent Identity
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-500 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="py-6 space-y-1">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                >
                  <span>About</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                >
                  <span>Our Brands</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              {/* Three Brands Quick Access */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-[10px] font-bold uppercase text-slate-500 mb-3 px-3">
                  Direct Brand Portals
                </p>
                <div className="space-y-2">
                  {BRANDS.map((brand) => (
                    <a
                      key={brand.id}
                      href={brand.websiteUrl}
                      target={brand.isExternal ? "_blank" : undefined}
                      rel={brand.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-800 hover:border-slate-300 hover:bg-slate-100 transition-all font-semibold"
                    >
                      <div className="relative h-6 w-32">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          sizes="120px"
                          className="object-contain object-left"
                        />
                      </div>

                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </a>
                  ))}

                </div>
              </div>
            </div>

            {/* Bottom Contact quick action */}
            <div className="pt-6 border-t border-slate-200">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 px-4 rounded-sm text-xs font-bold uppercase bg-gradient-to-r from-sky-600 to-blue-700 text-white hover:from-sky-500 hover:to-blue-600 shadow-md shadow-sky-600/20"
              >
                Connect With Maxwell Group
              </a>
              <p className="text-[10px] text-center text-slate-500 mt-3">
                Mel Ayanambakkam, Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

