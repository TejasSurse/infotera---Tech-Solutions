import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import civilflowLogo from "@/assets/civilflow-logo.png";
import onecrmLogo from "@/assets/onecrm-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const ProductsSection = () => {
  const handleWhatsAppDemo = (product: string) => {
    const msg = `Hi Infotera! I want to request a Free Live Demo for ${product} on WhatsApp.`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            Flagship Software Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Specialized Products Built to Scale Your Business
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Ready-to-deploy, industry-specific SaaS platforms engineered with domain depth and 24/7 dedicated support.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: CivilFlow */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-sm border border-slate-200 flex items-center justify-center">
                    <img src={civilflowLogo} alt="CivilFlow Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      CivilFlow
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">For Contractors & Civil Engineers</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                  Construction Tech
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Complete Construction & Labour Management Platform
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                Manage multiple sites, daily labour roster, material inventory challans, petty expenses, and daily site progress logs from one simple portal.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-medium text-slate-700 dark:text-slate-300">
                {[
                  "Labour Attendance & Wages",
                  "Multi-Site Management",
                  "Material Tracking & Audits",
                  "Site Expense Cashflow",
                  "Daily Progress Photos",
                  "24/7 Mobile App Access",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="grid sm:grid-cols-2 gap-2.5">
                <Link to="/products/civilflow">
                  <Button variant="hero" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs">
                    <span>View CivilFlow</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>

                <button
                  onClick={() => handleWhatsAppDemo("CivilFlow Construction Management")}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-105"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Free WhatsApp Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: OneCRM AI */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm border border-slate-200 flex items-center justify-center">
                    <img src={onecrmLogo} alt="OneCRM AI Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      OneCRM AI
                      <span className="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold px-2 py-0.5 rounded-full">
                        AI Beta
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">For High-Velocity Sales Teams</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  Sales & AI
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                End-to-End AI CRM & Automated Lead Pipeline
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                Engineered specifically for Real Estate, Construction, and Hospitality deals. Automates buyer qualification, WhatsApp follow-ups, and booking workflows.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-medium text-slate-700 dark:text-slate-300">
                {[
                  "AI Lead Qualification",
                  "Automated WhatsApp Drips",
                  "Site Visit & Event Booking",
                  "Omnichannel Team Inbox",
                  "Deal Velocity Analytics",
                  "Custom ERP Integrations",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="grid sm:grid-cols-2 gap-2.5">
                <Link to="/products/onecrm">
                  <Button variant="hero" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                    <span>Explore OneCRM</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>

                <button
                  onClick={() => handleWhatsAppDemo("OneCRM AI")}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-105"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Request AI Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore all products bar */}
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:underline"
          >
            <span>Explore all specialized software products and custom development</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
