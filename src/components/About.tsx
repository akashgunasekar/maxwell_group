import Image from "next/image";
import { CheckCircle2, Building2, Cpu, Wrench } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Position */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
                About Maxwell Group
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta leading-tight">
              One Group. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-slate-800 to-slate-900">
                Specialized Expertise.
              </span>
            </h2>

            {/* Exact Required Positioning Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Maxwell Group brings together specialized brands serving the professional food-service
              and commercial kitchen industry. Each brand focuses on a distinct area of expertise,
              allowing the group to address different equipment, technology and solution
              requirements.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Rather than attempting a one-size-fits-all approach, Maxwell Group unites specialized
              engineering under one cohesive umbrella: turnkey commercial kitchen equipment through
              Vector, high-efficiency induction systems through Maxwell Induction, and robust food
              processing machinery through SK Power Cook.
            </p>

            {/* Core Group Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="p-4 rounded-sm bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
                <Building2 className="w-5 h-5 text-red-600 mb-2" />
                <h3 className="text-xs font-bold text-slate-900 uppercase">Kitchen Infrastructure</h3>
                <p className="text-[11px] text-slate-600 mt-1">Complete commercial equipment & stainless steel fabrication</p>
              </div>

              <div className="p-4 rounded-sm bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
                <Cpu className="w-5 h-5 text-sky-600 mb-2" />
                <h3 className="text-xs font-bold text-slate-900 uppercase">Induction Technology</h3>
                <p className="text-[11px] text-slate-600 mt-1">High-efficiency, flameless professional induction solutions</p>
              </div>

              <div className="p-4 rounded-sm bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
                <Wrench className="w-5 h-5 text-orange-600 mb-2" />
                <h3 className="text-xs font-bold text-slate-900 uppercase">Food Processing</h3>
                <p className="text-[11px] text-slate-600 mt-1">Specialized machinery for commercial food-processing operations</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual + Verified Numerical Stat */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl bg-white group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/maxwell-commercial-kitchen.jpg"
                  alt="Maxwell Group specialized commercial kitchen engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              </div>

              {/* Verified Editorial Highlight Card (Only factual claims) */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-sm bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-slate-950 font-jakarta">03</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-sky-700">Specialized Brands</span>
                    <span className="text-[11px] text-slate-600">United under one corporate identity</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Dedicated engineering focus per brand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Direct access to specialized brand websites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
