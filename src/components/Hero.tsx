"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, ChevronRight, UtensilsCrossed, Zap, Flame, ExternalLink, CheckCircle2 } from "lucide-react";
import { BRANDS } from "@/lib/constants";

export default function Hero() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 3 brands every 5.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % BRANDS.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeBrand = BRANDS[activeBrandIndex];
  const isVector = activeBrand.id === "vector";
  const isMaxwell = activeBrand.id === "maxwell-induction";
  const isSKPower = activeBrand.id === "sk-powercook";

  const spotlightData = [
    {
      badge: "Turnkey Kitchen Equipment",
      tagline: "Custom SS-304 Fabrication & Commercial Equipment",
      metricLabel: "Application",
      metricValue: "Hotels, QSR, Cloud Kitchens & Institutions",
      highlight: "Heavy-gauge stainless steel & complete cold chain",
    },
    {
      badge: "Commercial Induction Tech",
      tagline: "~90% Energy Efficiency · Flameless Cool Kitchens",
      metricLabel: "Operating Benefit",
      metricValue: "Up to 60%* Savings vs Commercial LPG",
      highlight: "Precision digital control, zero ambient exhaust heat",
    },
    {
      badge: "Machinery & Processing",
      tagline: "Engineered Solutions for Commercial Food Processing",
      metricLabel: "Heavy Duty",
      metricValue: "Tilting Kadhais, Mixers & Boiling Systems",
      highlight: "High-volume bulk preparation & industrial processing",
    },
  ];

  const currentSpotlight = spotlightData[activeBrandIndex];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-10 lg:pt-36 lg:pb-14 overflow-hidden bg-white">
      {/* Background Architectural Patterns & Subtle Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-bl from-sky-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/80 via-slate-50/50 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      {/* Main 2-Column Hero Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: Narrative & Corporate Authority */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Live Parent Identity Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-2xs mb-6 backdrop-blur-md">
              <Image
                src="/images/maxwell-group-emblem.png"
                alt="Maxwell Group"
                width={24}
                height={16}
                className="w-4 h-auto object-contain shrink-0"
              />
              <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
                MAXWELL GROUP · PARENT CORPORATE IDENTITY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold text-slate-950 leading-[1.08] font-jakarta">
              Engineering Better Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-blue-800 to-slate-900">
                Professional Kitchens
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl">
              Maxwell Group connects three specialized engineering brands — uniting commercial
              kitchen equipment, high-efficiency induction systems, and engineered food-processing
              machinery under one architectural identity.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#brands"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#011b3b] via-[#06305d] to-[#0d4783] text-white font-semibold text-xs sm:text-sm uppercase shadow-lg shadow-[#011b3b]/30 hover:from-[#042852] hover:via-[#0a3d74] hover:to-[#125497] border border-[#0d4783]/40 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#06305d]"
              >
                <span>Explore Our 3 Brands</span>
                <ChevronRight className="w-4 h-4 text-sky-200" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm uppercase border border-slate-300 hover:border-slate-400 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Talk to Technical Team</span>
              </a>
            </div>

            {/* High-level Trust Markers */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <span className="text-2xl font-black text-slate-950 font-jakarta block">03</span>
                <span className="text-[11px] font-bold uppercase text-slate-500">
                  Specialized Brands
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-sky-700 font-jakarta block">~90%</span>
                <span className="text-[11px] font-bold uppercase text-slate-500">
                  Induction Efficiency
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-slate-950 font-jakarta block">SS-304</span>
                <span className="text-[11px] font-bold uppercase text-slate-500">
                  Heavy Fabrication
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Dynamic Brand Spotlight Showcase */}
          <div
            className="lg:col-span-6 xl:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-sm bg-white border border-slate-200 shadow-2xl p-2 sm:p-3 overflow-hidden">
              {/* Brand Navigation Tabs */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2 p-1 rounded-sm bg-slate-50 border border-slate-200/80">
                {BRANDS.map((brand, idx) => {
                  const isActive = idx === activeBrandIndex;
                  return (
                    <button
                      key={brand.id}
                      onClick={() => setActiveBrandIndex(idx)}
                      className={`relative py-2.5 px-2 rounded-sm text-center transition-all ${
                        isActive
                          ? "bg-white text-slate-950 shadow-sm border border-slate-200"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            brand.id === "vector"
                              ? "bg-red-600"
                              : brand.id === "maxwell-induction"
                              ? "bg-sky-600"
                              : "bg-orange-600"
                          }`}
                        />
                        <span className="text-[11px] sm:text-xs font-bold uppercase font-jakarta truncate">
                          {brand.name.replace(" Equipments", "").replace(" Machinery", "")}
                        </span>
                      </div>

                      {/* Active indicator bar */}
                      {isActive && (
                        <div
                          className={`absolute bottom-0 left-2 right-2 h-0.5 ${
                            brand.id === "vector"
                              ? "bg-red-600"
                              : brand.id === "maxwell-induction"
                              ? "bg-sky-600"
                              : "bg-orange-600"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Main Showcase Visual */}
              <div className="relative aspect-[16/11] w-full rounded-sm overflow-hidden bg-slate-950 group">
                <Image
                  src={activeBrand.image}
                  alt={`${activeBrand.name} - ${activeBrand.descriptor}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft gradient overlay for readable floating badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase backdrop-blur-md shadow-sm border ${
                      isVector
                        ? "bg-white/95 text-red-700 border-red-200"
                        : isMaxwell
                        ? "bg-white/95 text-sky-700 border-sky-200"
                        : "bg-white/95 text-orange-700 border-orange-200"
                    }`}
                  >
                    {isVector && <UtensilsCrossed className="w-3.5 h-3.5 text-red-600" />}
                    {isMaxwell && <Zap className="w-3.5 h-3.5 text-sky-600" />}
                    {isSKPower && <Flame className="w-3.5 h-3.5 text-orange-600" />}
                    <span>{currentSpotlight.badge}</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-sm bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-slate-200 border border-slate-700">
                    Brand 0{activeBrandIndex + 1} of 03
                  </span>
                </div>

                {/* Bottom Overlaid Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs sm:text-sm font-bold font-jakarta text-slate-100">
                    {currentSpotlight.tagline}
                  </p>

                  <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-medium line-clamp-1">{currentSpotlight.highlight}</span>
                    </div>

                    <a
                      href={activeBrand.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-sky-300 hover:text-white transition-colors shrink-0 ml-2"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Spotlight Bottom Action Bar with Official Brand Logo */}
              <div className="mt-2.5 p-3 rounded-sm bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative h-8 w-36 sm:w-44 shrink-0">
                    <Image
                      src={activeBrand.logo}
                      alt={`${activeBrand.name} Official Logo`}
                      fill
                      sizes="180px"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="hidden sm:block border-l border-slate-200 pl-3">
                    <p className="text-[11px] font-medium text-slate-600 line-clamp-1">
                      {activeBrand.descriptor}
                    </p>
                  </div>
                </div>

                <a
                  href={isMaxwell ? "https://www.maxwellinduction.com/" : `#${activeBrand.id}`}
                  target={isMaxwell ? "_blank" : undefined}
                  rel={isMaxwell ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-bold uppercase transition-all text-white shrink-0 ${
                    isVector
                      ? "bg-red-600 hover:bg-red-700"
                      : isMaxwell
                      ? "bg-sky-600 hover:bg-sky-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  <span>{isMaxwell ? "Open Portal" : "Details"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Brand Pillar Bar: Features all 3 official brand logos */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          {/* Pillar 01: Vector */}
          <button
            type="button"
            onClick={() => setActiveBrandIndex(0)}
            className={`group text-left p-4 rounded-sm transition-all ${
              activeBrandIndex === 0
                ? "bg-white border-2 border-red-500 shadow-md ring-2 ring-red-500/10"
                : "bg-white/95 border border-slate-200 hover:border-slate-300 shadow-2xs"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="relative h-8 w-36">
                <Image
                  src="/brands/vector-logo.png"
                  alt="Vector Food Equipments Official Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <UtensilsCrossed className="w-4 h-4 text-red-600 shrink-0" />
            </div>
            <p className="text-xs font-bold text-slate-900 mt-1">Complete Commercial Kitchen Solutions</p>
            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Cooking, refrigeration, fabrication & infrastructure</p>
          </button>

          {/* Pillar 02: Maxwell Induction */}
          <button
            type="button"
            onClick={() => setActiveBrandIndex(1)}
            className={`group text-left p-4 rounded-sm transition-all ${
              activeBrandIndex === 1
                ? "bg-white border-2 border-sky-500 shadow-md ring-2 ring-sky-500/10"
                : "bg-white/95 border border-slate-200 hover:border-slate-300 shadow-2xs"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="relative h-8 w-36">
                <Image
                  src="/brands/maxwell-induction.png"
                  alt="Maxwell Induction Official Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <Zap className="w-4 h-4 text-sky-600 shrink-0" />
            </div>
            <p className="text-xs font-bold text-slate-900 mt-1">Commercial Induction Technology</p>
            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">~90% efficiency, flame-free, cool kitchens</p>
          </button>

          {/* Pillar 03: SK Power Cook */}
          <button
            type="button"
            onClick={() => setActiveBrandIndex(2)}
            className={`group text-left p-4 rounded-sm transition-all ${
              activeBrandIndex === 2
                ? "bg-white border-2 border-orange-500 shadow-md ring-2 ring-orange-500/10"
                : "bg-white/95 border border-slate-200 hover:border-slate-300 shadow-2xs"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="relative h-8 w-36">
                <Image
                  src="/brands/sk-powercook-logo.png"
                  alt="SK Power Cook Machinery Official Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <Flame className="w-4 h-4 text-orange-600 shrink-0" />
            </div>
            <p className="text-xs font-bold text-slate-900 mt-1">Commercial Food Processing</p>
            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Motorized boiling pans, electric kadhais, mixers</p>
          </button>
        </div>



        {/* Subtle Scroll Down Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about"
            className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
}

