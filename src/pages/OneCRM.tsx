import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Bot,
  Zap,
  Users,
  BarChart3,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  Clock,
  ArrowRight,
  TrendingUp,
  Brain,
  MessageSquare,
  Building2,
  Hotel,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import onecrmLogo from "@/assets/onecrm-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const OneCRM = () => {
  const capabilities = [
    {
      icon: Bot,
      title: "AI Lead Capture & Qualification",
      desc: "Instantly capture inquiries from WhatsApp, Meta Ads, Website, and Portals. AI automatically qualifies buyer budget, readiness, and intent.",
    },
    {
      icon: Workflow,
      title: "Automated WhatsApp & Email Follow-ups",
      desc: "Zero lead leakage. Automated, hyper-personalized nurturing messages sent on WhatsApp, SMS, and email based on customer behavior.",
    },
    {
      icon: Brain,
      title: "Predictive Deal Scoring & Insights",
      desc: "Machine learning models analyze conversation sentiment and historical close rates to highlight your highest-value deals.",
    },
    {
      icon: Users,
      title: "Omnichannel Team Collaboration",
      desc: "Single shared inbox for sales, support, and account executives with automated round-robin lead assignment and SLA tracking.",
    },
    {
      icon: BarChart3,
      title: "Real-time Sales Velocity Analytics",
      desc: "Complete visibility into pipeline health, rep performance, revenue forecasts, and lost reason analytics.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Grade Security & Sync",
      desc: "Seamless integration with ERPs, accounting software, and proprietary industry tools with 256-bit encrypted data protection.",
    },
  ];

  const handleWhatsAppDemo = () => {
    const message =
      "Hi Infotera Team! ⚡ I am interested in OneCRM AI (End-to-End AI CRM). I want to request Early Beta Access & a Free Walkthrough.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      {/* Hero Section (Clean Bright Light) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-5 shadow-sm">
              <img src={onecrmLogo} alt="OneCRM AI" className="w-4 h-4 rounded-full object-cover" />
              <span className="text-xs sm:text-sm font-bold text-blue-800">
                ✦ Next-Gen AI Customer Relationship & Sales Automation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-5">
              Close More Deals with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                OneCRM AI
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The unified AI-driven CRM engineered specifically for high-velocity sales teams in Construction, Real Estate, and Hospitality. Automate inquiries to closed deals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDemo}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book Free OneCRM Demo on WhatsApp</span>
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Specific */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-slate-900">
              Tailored for Specialized Industry Pipelines
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Construction & Real Estate CRM</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Track site visit bookings, channel partner commissions, property unit availability, payment schedules, and automated WhatsApp payment reminders.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 font-bold">
                <Hotel className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Hospitality & Banquet CRM</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manage corporate event inquiries, banquet date slots, wedding booking contracts, room block allotments, and automated guest check-in journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              Smart AI Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Designed to Accelerate Every Stage of Your Funnel
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Empower your sales executives with intelligent automation that works 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-4">
                  <cap.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 text-center max-w-2xl mx-auto border border-slate-200 shadow-lg">
            <img src={onecrmLogo} alt="OneCRM AI" className="w-14 h-14 rounded-2xl object-cover mx-auto mb-4 border border-slate-200 shadow" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Get Free Early Access Demo
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Connect with our solutions architects to see how OneCRM AI can 3x your lead conversion rates with automated WhatsApp workflows.
            </p>
            <button
              onClick={handleWhatsAppDemo}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Us on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OneCRM;
