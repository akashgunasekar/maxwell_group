import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import WhyMaxwell from "@/components/WhyMaxwell";
import Industries from "@/components/Industries";
import Capabilities from "@/components/Capabilities";
import GroupStructure from "@/components/GroupStructure";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-sky-600 selection:text-white">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. About Maxwell Group: One Group. Specialized Expertise */}
        <About />

        {/* 3. Our Brands: Vector, Maxwell Induction, SK Power Cook */}
        <Brands />

        {/* 4. Why Maxwell Group: Specialized Brands. Shared Commitment */}
        <WhyMaxwell />

        {/* 5. Industries We Serve: Built for Professional Environments */}
        <Industries />

        {/* 6. Group Capabilities: From Equipment to Specialized Technology */}
        <Capabilities />

        {/* 7. How the Group Connects: Architectural Diagram */}
        <GroupStructure />

        {/* 8. Corporate CTA: Looking for the Right Solution? */}
        <CTA />

        {/* 9. Contact: Let's Start a Conversation */}
        <Contact />
      </main>

      {/* Premium Corporate Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Support (+91 89258 57824) */}
      <WhatsAppFloating />
    </div>
  );
}
