"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    brandRequirement: "General Maxwell Group Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending enquiry without backend complexity
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            <span className="text-[11px] font-bold uppercase text-slate-800 font-jakarta">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-jakarta">
            Let&apos;s Start a Conversation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Whether you require complete commercial kitchen design, specialized induction
            installations, or food processing machinery, our engineering teams are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-sm shadow-md">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-jakarta">
                  Thank You, {formData.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700 max-w-md mx-auto">
                  Your enquiry regarding{" "}
                  <span className="text-sky-700 font-semibold">{formData.brandRequirement}</span>{" "}
                  has been recorded. A technical specialist from Maxwell Group will respond
                  promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      company: "",
                      phone: "",
                      email: "",
                      brandRequirement: "General Maxwell Group Inquiry",
                      message: "",
                    });
                  }}
                  className="mt-6 inline-flex px-5 py-2 text-xs font-semibold uppercase text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-sm transition-colors shadow-2xs"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase text-slate-800 mb-2"
                    >
                      Your Name <span className="text-sky-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      suppressHydrationWarning
                      placeholder="e.g. Arun Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-bold uppercase text-slate-800 mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      suppressHydrationWarning
                      placeholder="e.g. Grand Horizon Hotels"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase text-slate-800 mb-2"
                    >
                      Phone Number <span className="text-sky-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      suppressHydrationWarning
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase text-slate-800 mb-2"
                    >
                      Email Address <span className="text-sky-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      suppressHydrationWarning
                      placeholder="arun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Brand / Requirement Selector */}
                <div>
                  <label
                    htmlFor="contact-requirement"
                    className="block text-xs font-bold uppercase text-slate-800 mb-2"
                  >
                    Select Requirement / Brand Focus
                  </label>
                  <select
                    id="contact-requirement"
                    suppressHydrationWarning
                    value={formData.brandRequirement}
                    onChange={(e) =>
                      setFormData({ ...formData, brandRequirement: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-2xs"
                  >
                    <option value="General Maxwell Group Inquiry">
                      General Maxwell Group Inquiry
                    </option>
                    <option value="Vector - Complete Commercial Kitchen Equipment">
                      Vector — Complete Commercial Kitchen Equipment & Fabrication
                    </option>
                    <option value="Maxwell Induction - Commercial Induction Technology">
                      Maxwell Induction — Commercial Induction Technology
                    </option>
                    <option value="SK Power Cook - Food Processing Machinery">
                      SK Power Cook Machinery — Food Processing & Cooking Machinery
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase text-slate-800 mb-2"
                  >
                    Message / Project Details <span className="text-sky-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    suppressHydrationWarning
                    placeholder="Tell us about your kitchen capacity, project timeline, or specific machinery requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y shadow-2xs"
                  />
                </div>


                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#011b3b] via-[#06305d] to-[#0d4783] text-white font-semibold text-xs uppercase shadow-md shadow-[#011b3b]/30 hover:from-[#042852] hover:via-[#0a3d74] hover:to-[#125497] border border-[#0d4783]/40 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#06305d]"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-3.5 h-3.5 text-sky-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Regional Presence */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Operations Card */}
            <div className="p-7 rounded-sm bg-slate-50 border border-slate-200 space-y-6 shadow-md">
              <h3 className="text-sm font-bold uppercase text-slate-900 font-jakarta pb-3 border-b border-slate-200">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">
                    Industrial Facilities & Office
                  </h4>
                  <p className="mt-1 text-sm text-slate-800 leading-relaxed font-normal">
                    {CONTACT_DETAILS.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">
                    Direct Phone Lines
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    <a href="tel:+918925857821" className="hover:text-sky-700 transition-colors">
                      +91 89258 57821
                    </a>
                    <span className="text-slate-400 mx-2">/</span>
                    <a href="tel:+918925857824" className="hover:text-sky-700 transition-colors">
                      +91 89258 57824
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Product sales, technical support, and group enquiries
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">
                    Email Correspondence
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    <span className="text-slate-500 text-xs">Induction: </span>
                    {CONTACT_DETAILS.inductionEmail}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <span>Group Inquiries: </span>
                    [GROUP EMAIL: {CONTACT_DETAILS.email}]
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">
                    Operating Schedule
                  </h4>
                  <p className="mt-1 text-xs text-slate-700">
                    {CONTACT_DETAILS.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Note on brand portals */}
            <div className="p-5 rounded-sm bg-sky-50/70 border border-sky-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                Direct Brand Communication:
              </span>
              Looking specifically for commercial induction equipment? You can also contact the
              Maxwell Induction team directly via their dedicated portal at{" "}
              <a
                href="https://www.maxwellinduction.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 underline hover:text-sky-800 font-semibold"
              >
                www.maxwellinduction.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

