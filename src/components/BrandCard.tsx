import Image from "next/image";
import { Check, Zap, Flame, UtensilsCrossed, ExternalLink } from "lucide-react";
import { BrandInfo } from "@/lib/constants";

interface BrandCardProps {
  brand: BrandInfo;
  index: number;
}

export default function BrandCard({ brand, index }: BrandCardProps) {
  const isVector = brand.id === "vector";
  const isMaxwell = brand.id === "maxwell-induction";
  const isSKPower = brand.id === "sk-powercook";

  return (
    <div
      id={brand.id}
      className={`group relative rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between scroll-mt-28 bg-white border ${
        isVector
          ? "border-slate-200 hover:border-red-500 shadow-md hover:shadow-2xl hover:shadow-red-500/10"
          : isMaxwell
          ? "border-slate-200 hover:border-sky-500 shadow-md hover:shadow-2xl hover:shadow-sky-500/10"
          : "border-slate-200 hover:border-orange-500 shadow-md hover:shadow-2xl hover:shadow-orange-500/10"
      }`}
    >
      {/* Top Accent Strip */}
      <div
        className={`h-1.5 w-full transition-all duration-300 ${
          isVector
            ? "bg-gradient-to-r from-red-600 via-rose-500 to-red-700"
            : isMaxwell
            ? "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600"
            : "bg-gradient-to-r from-orange-500 via-amber-500 to-red-600"
        }`}
      />

      {/* Card Header & Media Showcase */}
      <div>
        {/* Editorial Brand Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={brand.image}
            alt={`${brand.name} - ${brand.descriptor}`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

          {/* Floating Brand Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase border backdrop-blur-md shadow-xs ${
                isVector
                  ? "bg-white/95 text-red-700 border-red-200"
                  : isMaxwell
                  ? "bg-white/95 text-sky-700 border-sky-200"
                  : "bg-white/95 text-orange-700 border-orange-200"
              }`}
            >
              {isVector && <UtensilsCrossed className="w-3 h-3 text-red-600" />}
              {isMaxwell && <Zap className="w-3 h-3 text-sky-600" />}
              {isSKPower && <Flame className="w-3 h-3 text-orange-600" />}
              <span>Brand 0{index + 1}</span>
            </span>
          </div>
        </div>

        {/* Brand Identity Area */}
        <div className="p-6 sm:p-7">
          {/* Logo Showcase Area */}
          <div className="h-16 flex items-center mb-5 pb-4 border-b border-slate-100">
            <div className="relative h-12 w-full max-w-[280px]">
              <Image
                src={brand.logo}
                alt={`${brand.name} Official Logo`}
                fill
                sizes="280px"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Descriptor Tagline */}
          <div className="mb-3">
            <h3
              className={`text-sm font-bold uppercase font-jakarta ${
                isVector ? "text-red-700" : isMaxwell ? "text-sky-700" : "text-orange-700"
              }`}
            >
              {brand.descriptor}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {brand.description}
          </p>

          {/* Specific Brand Value Metrics / USPs */}
          {isMaxwell && (
            <div className="mt-5 p-4 rounded-sm bg-sky-50/70 border border-sky-100 space-y-2.5">
              <p className="text-[11px] font-bold uppercase text-sky-900">
                Verified Maxwell Induction Benefits:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>~90% Energy Efficiency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Up to 60%* vs LPG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Flameless Cool Kitchen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Instant Heat Control</span>
                </div>
              </div>
            </div>
          )}

          {isVector && (
            <div className="mt-5 p-4 rounded-sm bg-red-50/60 border border-red-100 space-y-2.5">
              <p className="text-[11px] font-bold uppercase text-red-900">
                Scope of Kitchen Solutions:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Custom SS Fabrication</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Commercial Ranges</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Refrigeration & Cold</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Steam & Dishwash</span>
                </div>
              </div>
            </div>
          )}

          {isSKPower && (
            <div className="mt-5 p-4 rounded-sm bg-orange-50/60 border border-orange-100 space-y-2.5">
              <p className="text-[11px] font-bold uppercase text-orange-900">
                Engineering Capabilities:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Heavy Electric Kadhais</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Tilting Boiling Pans</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Motorized Mixers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Food Processing Units</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4">
        <a
          href={brand.websiteUrl}
          target={brand.isExternal ? "_blank" : undefined}
          rel={brand.isExternal ? "noopener noreferrer" : undefined}
          className={`w-full inline-flex items-center justify-between px-5 py-3 rounded-sm font-semibold text-xs uppercase transition-all focus:outline-none focus:ring-2 ${
            isVector
              ? "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 focus:ring-red-400"
              : isMaxwell
              ? "bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-md shadow-sky-600/20 focus:ring-sky-400"
              : "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-md shadow-orange-600/20 focus:ring-orange-400"
          }`}
        >
          <span>
            {isVector ? "Explore Vector" : isMaxwell ? "Visit Maxwell Induction" : "Explore SK Power Cook"}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] opacity-90">
              {isMaxwell ? "maxwellinduction.com" : "Dedicated Brand Portal"}
            </span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </div>
        </a>
      </div>
    </div>
  );
}
