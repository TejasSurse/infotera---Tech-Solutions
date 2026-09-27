import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import civilflowLogo from "@/assets/civilflow-logo.png";
import onecrmLogo from "@/assets/onecrm-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Soft atmospheric background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Niche Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Specialized Tech & SaaS for Construction & Hospitality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
            Next-Gen Software & AI Products for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Modern Enterprises
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Power your business operations with flagship products like <strong className="text-slate-900 font-bold">CivilFlow</strong> (Construction ERP) and <strong className="text-slate-900 font-bold">OneCRM AI</strong>. Get 100% Free Technology Consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href={getWhatsAppUrl("Hi Infotera! I want to Book a Free Demo on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:scale-105 transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Book Free Demo on WhatsApp</span>
            </a>

            <Link
              to="/products"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:scale-105 transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Flagship Products Cards (Clean White Cards) */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {/* CivilFlow Pill */}
            <Link
              to="/products/civilflow"
              className="group bg-white hover:bg-cyan-50/40 border border-slate-200 hover:border-cyan-400 p-5 rounded-2xl flex items-center gap-4 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 p-1.5 flex items-center justify-center shrink-0 border border-slate-200">
                <img src={civilflowLogo} alt="CivilFlow" className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                    CivilFlow
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    Live Demo
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete Construction & Labour Management
                </p>
              </div>
            </Link>

            {/* OneCRM AI Pill */}
            <Link
              to="/products/onecrm"
              className="group bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl flex items-center gap-4 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 flex items-center justify-center shrink-0 border border-slate-200">
                <img src={onecrmLogo} alt="OneCRM AI" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                    OneCRM AI
                  </span>
                  <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-bold">
                    AI Beta
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated Leads & Sales Intelligence
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
