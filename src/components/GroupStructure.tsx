import Image from "next/image";
import { ArrowRight, UtensilsCrossed, Zap, Flame, ExternalLink } from "lucide-react";

export default function GroupStructure() {
  return (
    <section id="structure" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              How The Group Connects
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            One Group. Multiple Areas of Expertise.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Maxwell Group operates as an architectural parent connecting three independent,
            deeply specialized engineering brands.
          </p>
        </div>

        {/* Premium Architectural Visual Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Top Parent Node: MAXWELL GROUP */}
          <div className="flex justify-center">
            <div className="w-full max-w-md p-6 rounded-sm bg-white border-2 border-slate-300 text-center shadow-lg relative">
              <div className="inline-block px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-[10px] font-bold uppercase text-slate-700 mb-2">
                Parent Identity
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-black text-slate-950 font-jakarta">MAXWELL</span>
                <span className="text-2xl font-light text-slate-700 font-jakarta">GROUP</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Strategic Stewardship · Shared Standards · Unified Oversight
              </p>
            </div>
          </div>

          {/* Vertical Trunk Line */}
          <div className="w-0.5 h-10 bg-slate-300 mx-auto" />

          {/* Horizontal Distribution Beam (Desktop) */}
          <div className="hidden md:block relative h-4">
            <div className="absolute top-0 left-16 right-16 h-0.5 bg-slate-300" />
            <div className="absolute top-0 left-16 w-0.5 h-4 bg-slate-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300" />
            <div className="absolute top-0 right-16 w-0.5 h-4 bg-slate-300" />
          </div>

          {/* Three Specialized Child Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-0">
            {/* Child Node 01: VECTOR */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-red-500 transition-all flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-sm bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-red-700">
                    Turnkey Equipment
                  </span>
                </div>

                {/* Official Vector Logo */}
                <div className="relative h-9 w-40 mb-2">
                  <Image
                    src="/brands/vector-logo.png"
                    alt="Vector Food Equipments Official Logo"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>

                <p className="text-xs font-semibold text-red-700 mt-0.5">
                  Complete Commercial Kitchen Solutions
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Cooking, refrigeration, bakery, dishwashing, prep, and stainless steel fabrication.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="#vector"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800"
                >
                  <span>Explore Vector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Child Node 02: MAXWELL INDUCTION */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-sky-500 transition-all flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-sm bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-sky-700">
                    Advanced Induction
                  </span>
                </div>

                {/* Official Maxwell Induction Logo */}
                <div className="relative h-9 w-40 mb-2">
                  <Image
                    src="/brands/maxwell-induction.png"
                    alt="Maxwell Induction Official Logo"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>

                <p className="text-xs font-semibold text-sky-700 mt-0.5">
                  Commercial Induction Technology
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  High-efficiency flameless commercial cooking, boiling pans, woks, and hot plates.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://www.maxwellinduction.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                >
                  <span>Visit maxwellinduction.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Child Node 03: SK POWER COOK */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-orange-500 transition-all flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-sm bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                    <Flame className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-orange-700">
                    Machinery & Processing
                  </span>
                </div>

                {/* Official SK Power Cook Logo */}
                <div className="relative h-9 w-40 mb-2">
                  <Image
                    src="/brands/sk-powercook-logo.png"
                    alt="SK Power Cook Machinery Official Logo"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>


                <p className="text-xs font-semibold text-orange-700 mt-0.5">
                  Commercial Food Processing
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Engineered machinery, heavy electric kadhais, and motorized food processing equipment.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="#sk-powercook"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 hover:text-orange-800"
                >
                  <span>Explore SK Power Cook</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


