import { BRANDS } from "@/lib/constants";
import BrandCard from "./BrandCard";

export default function Brands() {
  return (
    <section id="brands" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              Specialized Expertise · One Group
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            Our Brands
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Maxwell Group connects three distinct engineering entities. Select the appropriate
            brand to explore tailored kitchen equipment, commercial induction technology, or
            food-processing machinery.
          </p>
        </div>

        {/* The 3 Brand Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BRANDS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
