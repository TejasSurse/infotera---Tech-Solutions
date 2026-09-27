import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Hotel,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import civilflowLogo from "@/assets/civilflow-logo.png";
import onecrmLogo from "@/assets/onecrm-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const Products = () => {
  const handleWhatsAppDemo = (productName: string) => {
    const msg = `Hi Infotera Team! 👋 I would like to request a Custom Quote & Free Live Demo for ${productName}.`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#071322] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Flagship Enterprise SaaS Products
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Purpose-Built Software for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                Industry Leaders
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              Specialized high-impact software products with deep domain expertise in Construction and Hospitality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/products/civilflow"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <span>Explore CivilFlow</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => handleWhatsAppDemo("Infotera Software Suite")}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Demo on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Products Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* PRODUCT 1: CivilFlow (Flagship #1) */}
          <div id="civilflow" className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Header badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200 flex items-center justify-center">
                  <img src={civilflowLogo} alt="CivilFlow Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">CivilFlow</h2>
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
                      ● LIVE PRODUCT
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Complete Construction & Labour Management Platform</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-semibold">
                Construction & Infrastructure
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Manage Sites, Labour, Materials, and Expenses with 100% Simplicity
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
                  CivilFlow eliminates paper registers, spreadsheet confusion, and ghost labour expenses for civil contractors, engineers, and builders. Real-time site attendance, material inventory orders, cash vouchers, and progress photos in your pocket.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                  {[
                    "Multi-Site Management & Stage Tracking",
                    "Daily Labour Attendance & Direct Wage Slips",
                    "Material Inward, Stock Audits & Wastage Alerts",
                    "Petty Cash & Expense Tracking with Receipts",
                    "Daily Progress Reports (DPR) & Photo Vault",
                    "24/7 WhatsApp Support & Rapid Onboarding",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/products/civilflow">
                    <Button variant="hero" size="default" className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm">
                      <span>View CivilFlow Product Page</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => handleWhatsAppDemo("CivilFlow Construction Platform")}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow transition-all hover:scale-105"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Book Free Demo on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="lg:col-span-5 bg-[#0a1b2d] rounded-2xl p-5 text-white border border-slate-700">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-xs text-slate-300">
                  <span className="font-mono text-[11px] text-slate-400">app.civilflow.in</span>
                  <span className="text-emerald-400 font-semibold text-[11px]">Active Cloud Sync</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-slate-400 text-[10px]">Active Sites</p>
                      <p className="text-lg font-bold text-cyan-400">08 Active</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">Labour Count</p>
                      <p className="text-lg font-bold text-emerald-400">245 Present</p>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl text-slate-300">
                    <p className="font-semibold text-white mb-0.5">Flexible Tiers for Every Fleet</p>
                    <p className="text-slate-400 text-[11px]">Small Business, Mid Business, and Enterprise Custom Deployments</p>
                  </div>
                  <Link
                    to="/products/civilflow#plans"
                    className="block text-center text-xs font-bold text-cyan-400 hover:underline pt-1"
                  >
                    View Plan Capabilities & Modules →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT 2: OneCRM AI (Flagship #2) */}
          <div id="onecrm" className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Header badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 shadow-sm border border-slate-200 flex items-center justify-center">
                  <img src={onecrmLogo} alt="OneCRM AI Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">OneCRM AI</h2>
                    <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-500/20">
                      ⚡ EARLY ACCESS / BETA
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">End-to-End AI-Driven CRM & Automated Sales Engine</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold">
                Sales Automation & AI
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Automate Inquiries, Lead Scoring, and WhatsApp Follow-ups with AI
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
                  Designed specifically for high-velocity sales in Construction, Real Estate, and Hospitality. Stop losing high-value leads with instant AI qualification, auto-assigned sales reps, and omnichannel deal pipelines.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                  {[
                    "Instant Multi-Channel Lead Ingestion",
                    "AI-Powered Conversation Qualification",
                    "Automated WhatsApp & Email Drip Workflows",
                    "Site Visit & Event Booking Calendars",
                    "Shared Omnichannel Team Inbox",
                    "Custom CRM Customization & Integrations",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/products/onecrm">
                    <Button variant="hero" size="default" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm">
                      <span>Explore OneCRM AI</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => handleWhatsAppDemo("OneCRM AI")}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow transition-all hover:scale-105"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Book Free Demo on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="lg:col-span-5 bg-[#0a1526] rounded-2xl p-5 text-white border border-slate-700">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-xs text-slate-300">
                  <span className="font-mono text-[11px] text-slate-400">onecrm.ai/dashboard</span>
                  <span className="text-cyan-400 font-semibold text-[11px]">AI Engine Online</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-slate-400 text-[10px]">Qualified Leads</p>
                      <p className="text-lg font-bold text-cyan-400">142 Inquiries</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px]">Conversion Rate</p>
                      <p className="text-lg font-bold text-emerald-400">28.4%</p>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl text-slate-300">
                    <p className="font-semibold text-white mb-0.5">Automate WhatsApp & Ad Campaigns</p>
                    <p className="text-slate-400 text-[11px]">Connect WhatsApp, Meta Ads, and Portals in 5 minutes</p>
                  </div>
                  <Link
                    to="/products/onecrm"
                    className="block text-center text-xs font-bold text-cyan-400 hover:underline pt-1"
                  >
                    Read Full OneCRM AI Capabilities →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality & Enterprise Specialized Products */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold mb-2">
                Specialized Solutions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                More Industry-Specific Tech Systems
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hospitality POS */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hospitality & POS System</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Complete Point-of-Sale, table reservation, kitchen display (KDS), and inventory software for hotels, restaurants, and resorts.
                  </p>
                </div>
                <button
                  onClick={() => handleWhatsAppDemo("Hospitality POS System")}
                  className="w-full bg-white dark:bg-slate-800 hover:bg-[#25D366] hover:text-white text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Request Demo on WhatsApp</span>
                </button>
              </div>

              {/* Custom Enterprise Tech */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Custom Enterprise Portals & ERP</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Need customized software for your infrastructure fleet or multi-chain hospitality operations? We build bespoke enterprise platforms.
                  </p>
                </div>
                <button
                  onClick={() => handleWhatsAppDemo("Custom Enterprise Portal")}
                  className="w-full bg-white dark:bg-slate-800 hover:bg-[#25D366] hover:text-white text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Consult Solutions Architect</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Products;
