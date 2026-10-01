import { CAPABILITIES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              Capabilities Matrix
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            From Equipment to Specialized Technology
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Maxwell Group coordinates core capabilities across dedicated engineering divisions,
            matching specific commercial requirements to the appropriate specialist brand.
          </p>
        </div>

        {/* Capabilities System Blocks */}
        <div className="space-y-4">
          {CAPABILITIES.map((cap) => {
            const isVector = cap.accent === "red";
            const isInduction = cap.accent === "blue";
            const isSKPower = cap.accent === "orange";

            return (
              <div
                key={cap.number}
                className="group p-6 sm:p-8 rounded-sm bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg hover:shadow-slate-200/60"
              >
                {/* Left: Number & Main Title */}
                <div className="flex items-start sm:items-center gap-5 md:w-5/12">
                  <span className="text-xl sm:text-2xl font-black text-slate-300 group-hover:text-slate-900 transition-colors font-jakarta">
                    {cap.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-jakarta">
                      {cap.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">Delivered by:</span>
                      <span
                        className={`text-xs font-bold uppercase ${
                          isVector
                            ? "text-red-700"
                            : isInduction
                            ? "text-sky-700"
                            : isSKPower
                            ? "text-orange-700"
                            : "text-slate-700"
                        }`}
                      >
                        {cap.leadBrand}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center: Description */}
                <div className="md:w-5/12">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Right: Quick Anchor Link */}
                <div className="md:w-2/12 flex md:justify-end">
                  <a
                    href={
                      isVector
                        ? "#vector"
                        : isInduction
                        ? "#maxwell-induction"
                        : isSKPower
                        ? "#sk-powercook"
                        : "#brands"
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                  >
                    <span>View Brand</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

