import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              Industry Verticals
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            Built for Professional Environments
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Our specialized brands deploy high-capacity cooking, induction, and processing
            solutions across demanding commercial kitchen sectors.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="group relative rounded-sm overflow-hidden bg-white border border-slate-200 hover:border-sky-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  {/* Special Note Badge if applicable */}
                  {industry.specialNote && (
                    <div className="absolute top-3 left-3 right-3">
                      <span className="inline-block px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase bg-sky-700 text-white shadow-sm backdrop-blur-md">
                        {industry.specialNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-jakarta">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Brands Serving Vertical */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    Brands:
                  </span>
                  {industry.brandsInvolved.map((brandName) => (
                    <span
                      key={brandName}
                      className="px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-700"
                    >
                      {brandName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

