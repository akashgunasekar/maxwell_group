import { WHY_MAXWELL } from "@/lib/constants";
import { Compass, Target, ShieldCheck, Headphones } from "lucide-react";

export default function WhyMaxwell() {
  const icons = [Compass, Target, ShieldCheck, Headphones];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              Why Maxwell Group
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            Specialized Brands. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-slate-800 to-slate-900">
              Shared Commitment.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            By operating focused independent entities rather than a dispersed generalist catalog,
            Maxwell Group delivers deeper engineering competence and operational durability.
          </p>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_MAXWELL.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.number}
                className="group p-7 rounded-sm bg-white border border-slate-200 hover:border-sky-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/80"
              >
                <div>
                  {/* Top Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors font-jakarta">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-sky-600 group-hover:border-sky-200 group-hover:bg-sky-50 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 uppercase font-jakarta">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <div className="w-8 h-0.5 bg-slate-200 group-hover:w-16 group-hover:bg-sky-600 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

