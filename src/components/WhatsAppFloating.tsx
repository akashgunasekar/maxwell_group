"use client";

import { CONTACT_DETAILS } from "@/lib/constants";

export default function WhatsAppFloating() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
        <div className="bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-xl border border-slate-700 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Chat on WhatsApp: +91 89258 57824</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href={CONTACT_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Maxwell Group: +91 89258 57824"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Soft pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.128-.518-1.706-.704-2.809-2.433-2.894-2.546-.086-.114-.687-.912-.687-1.738 0-.825.433-1.233.587-1.391.155-.157.34-.195.454-.195.114 0 .227.002.327.007.106.005.248-.04.388.297.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.114-.087.185-.173.286-.086.101-.182.226-.26.304-.086.086-.176.18-.076.352.101.172.448.74 0.963 1.199.664.591 1.224.774 1.397.86.173.086.274.072.376-.043.101-.115.433-.503.548-.675.115-.172.231-.144.389-.086.158.058 1.002.472 1.175.559.173.086.288.13.331.202.043.072.043.418-.101.823z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.523 3.662 1.433 5.178L2 22l4.954-1.398A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.17 8.17 0 0 1-4.345-1.242l-.312-.187-2.923.825.84-2.846-.205-.328A8.176 8.176 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2s8.2 3.679 8.2 8.2-3.679 8.2-8.2 8.2z" />
        </svg>
      </a>
    </aside>
  );
}
