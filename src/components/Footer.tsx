import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BRANDS } from "@/lib/constants";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Our Brands", href: "#brands" },
    { name: "Industries", href: "#industries" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Group Structure", href: "#structure" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200">
          {/* Col 1: Group Identity & Statement */}
          <div className="lg:col-span-4">
            <Link href="#" className="inline-block group mb-4">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-950 uppercase font-jakarta">
                  MAXWELL
                </span>
                <span className="text-xl font-medium text-slate-600 uppercase font-jakarta">
                  GROUP
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-500 uppercase block mt-0.5">
                Parent Corporate Identity
              </span>
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Specialized solutions for professional kitchens and food-processing environments.
            </p>

            <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
              Industrial engineering, precision induction cooking, turnkey stainless steel
              fabrication, and heavy-duty food processing machinery.
            </p>

            {/* Social Links (Placeholders) */}
            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="#contact"
                aria-label="Maxwell Group on LinkedIn"
                className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-700 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.25 1.63 1.63 0 0 0 0 3.25m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#contact"
                aria-label="Maxwell Group on YouTube"
                className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-700 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#contact"
                aria-label="Maxwell Group on Instagram"
                className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-700 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#contact"
                aria-label="Maxwell Group on X"
                className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-700 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Specialized Brands */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase text-slate-900 mb-4 font-jakarta">
              Our Specialized Brands
            </h4>
            <ul className="space-y-3">
              {BRANDS.map((brand) => (
                <li key={brand.id}>
                  <a
                    href={brand.websiteUrl}
                    target={brand.isExternal ? "_blank" : undefined}
                    rel={brand.isExternal ? "noopener noreferrer" : undefined}
                    className="group flex flex-col p-3 rounded-sm bg-white border border-slate-200 hover:border-sky-500 transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="relative h-6 w-36">
                        <Image
                          src={brand.logo}
                          alt={brand.wordmark}
                          fill
                          sizes="144px"
                          className="object-contain object-left"
                        />
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700 transition-colors shrink-0" />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5">{brand.descriptor}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase text-slate-900 mb-4 font-jakarta">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Governance */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase text-slate-900 mb-4 font-jakarta">
              Group Operations
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Industrial Corridor, Mel Ayanambakkam, Chennai, Tamil Nadu, India.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="inline-block px-2 py-1 rounded-sm bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-2xs">
                B2B Industrial Group
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Maxwell Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corporate Gateway Portal</span>
            <span>·</span>
            <span>SEO Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

