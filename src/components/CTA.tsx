import { ChevronRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background glow & subtle pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-200/60 via-blue-200/40 to-indigo-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
          <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
            Direct Gateway
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
          Looking for the Right Solution?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
          Explore our specialized brands and find the equipment, technology or solution that
          fits your requirements.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#brands"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white font-semibold text-sm uppercase shadow-lg shadow-sky-600/25 hover:from-sky-500 hover:to-blue-600 border border-sky-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <span>Explore Our Brands</span>
            <ChevronRight className="w-4 h-4 text-sky-100" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm uppercase border border-slate-300 hover:border-slate-400 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Contact Maxwell Group</span>
          </a>
        </div>
      </div>
    </section>
  );
}

