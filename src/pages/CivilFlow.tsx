import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  HardHat,
  Truck,
  IndianRupee,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  Headphones,
  Check,
  BarChart3,
  PhoneCall,
  Layers,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import civilflowLogo from "@/assets/civilflow-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const CivilFlow = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "labour" | "materials" | "expenses">("overview");

  const features = [
    {
      icon: Building2,
      title: "Project & Site Management",
      description: "Manage multiple sites and projects effortlessly with real-time stage tracking and milestones.",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: HardHat,
      title: "Labour & Attendance Tracking",
      description: "Add, track, and manage site labour, daily attendance, wage calculations, and direct payouts.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: Truck,
      title: "Material & Inventory Control",
      description: "Keep complete control over material orders, site dispatches, vendor bills, and waste prevention.",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: IndianRupee,
      title: "Site Expense & Cashflow",
      description: "Know exactly where every rupee goes with automated receipts, petty cash, and budget limits.",
      color: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      icon: TrendingUp,
      title: "Task & Progress Milestones",
      description: "Update daily site logs with photos, track delays, and ensure projects finish on schedule.",
      color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    {
      icon: FileSpreadsheet,
      title: "Smart Documents & Reports",
      description: "Generate 1-click PDF/Excel reports, store blueprints, vendor invoices, and compliance docs safely.",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      icon: Layers,
      title: "Team Roles & Permissions",
      description: "Assign custom role permissions for Site Engineers, Supervisors, Accountants, and Clients.",
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      icon: BarChart3,
      title: "Real-time Executive Dashboard",
      description: "Get a bird's eye view of site costs, labour productivity, and delivery metrics on desktop or mobile.",
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
  ];

  const whoItsFor = [
    {
      icon: HardHat,
      title: "Small Contractors",
      desc: "Contractors managing 1–3 sites who need to eliminate paper diaries and accurately track site expenses and labour wages.",
      highlight: "Quick setup • Mobile ready • 100% Reliable",
      capacity: "Up to 30 Labour & 3 Active Sites",
    },
    {
      icon: Building2,
      title: "Growing Construction Firms",
      desc: "Contractors scaling to 5–15 simultaneous sites needing synchronized materials, vendor payments, and supervisor accountability.",
      highlight: "Multi-site sync • Supervisor roles • Material audits",
      capacity: "Up to 100 Labour & 10 Active Sites",
    },
    {
      icon: Layers,
      title: "Large Builders & Enterprises",
      desc: "Real estate builders and civil infrastructure giants requiring unlimited labour oversight, enterprise analytics, and custom ERP workflows.",
      highlight: "Unlimited sites • Dedicated manager • API integration",
      capacity: "Unlimited Labour & Unlimited Sites",
    },
  ];

  const handleWhatsAppDemo = (planName?: string) => {
    const message = planName
      ? `Hi Infotera Team! 🏗️ I am interested in CivilFlow (${planName}). Please share a custom quote and schedule a Free Live Demo for my construction team.`
      : "Hi Infotera Team! 🏗️ I want to book a Free Live Demo of CivilFlow for my construction projects & labour management.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      {/* Hero Section (Clean Bright Light) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5 shadow-sm">
                <img src={civilflowLogo} alt="CivilFlow" className="w-4 h-4 object-contain" />
                <span className="text-xs sm:text-sm font-bold text-cyan-800">
                  ✦ Built Exclusively for Construction Teams
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-4">
                Manage Construction Projects,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">
                  Effortlessly with CivilFlow
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed">
                Manage your sites, labour, materials, expenses, tasks, documents, and real-time progress in one powerful platform. Simple. Smart. Reliable.
              </p>

              {/* Value Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 text-xs font-semibold text-slate-700">
                {["Save Time", "Reduce Costs", "Stay Organized", "Faster Completion"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-white py-2 px-3 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => handleWhatsAppDemo()}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free Demo on WhatsApp</span>
                </button>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Explore Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 justify-center lg:justify-start text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Purpose-Engineered for Civil Contractors, Builders & Site Engineers Across India</span>
              </div>
            </div>

            {/* Right Clean Light Mockup Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-xl">
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-slate-500 text-[11px]">app.civilflow.in</span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live Cloud Sync
                  </div>
                </div>

                {/* Dashboard Brand Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img src={civilflowLogo} alt="CivilFlow" className="w-9 h-9 object-contain bg-slate-50 rounded-lg p-1 border border-slate-200" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">CivilFlow Portal</h3>
                    <p className="text-[10px] text-slate-500">Keep Building Progress!</p>
                  </div>
                </div>

                {/* Mockup Tabs */}
                <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl mb-4 text-[10px] font-bold">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "overview" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("labour")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "labour" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Labour
                  </button>
                  <button
                    onClick={() => setActiveTab("materials")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "materials" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Material
                  </button>
                  <button
                    onClick={() => setActiveTab("expenses")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "expenses" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Expense
                  </button>
                </div>

                {/* Dynamic Mockup Content */}
                <div>
                  {activeTab === "overview" && (
                    <div className="space-y-3">
                      {/* Metric Cards */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <p className="text-[10px] text-slate-500 font-medium">Active Sites</p>
                          <p className="text-lg font-black text-cyan-700">08</p>
                          <p className="text-[9px] text-emerald-600 font-semibold">✓ On Track</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <p className="text-[10px] text-slate-500 font-medium">Labour On-Site</p>
                          <p className="text-lg font-black text-emerald-700">245</p>
                          <p className="text-[9px] text-slate-500">94% Present</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <p className="text-[10px] text-slate-500 font-medium">Site Expenses</p>
                          <p className="text-lg font-black text-amber-700">₹12.5L</p>
                          <p className="text-[9px] text-slate-500">Budget Safe</p>
                        </div>
                      </div>

                      {/* Recent Activities */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                        <h4 className="text-[11px] font-bold text-slate-800 mb-2">Live Site Activity</h4>
                        <div className="space-y-1.5 text-[11px] text-slate-600">
                          <div className="flex justify-between items-center">
                            <span>● Concrete slab work completed — Site A</span>
                            <span className="text-[9px] text-slate-400">10m</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>● 50 bags Ultratech Cement added</span>
                            <span className="text-[9px] text-slate-400">30m</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>● New labour added — Ahmed (Mason)</span>
                            <span className="text-[9px] text-slate-400">1h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "labour" && (
                    <div className="space-y-2.5 text-xs">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-bold text-slate-900">Daily Attendance Roster</span>
                          <span className="text-emerald-700 font-bold">245 Present</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                          <div className="bg-emerald-500 h-full w-[85%]"></div>
                          <div className="bg-amber-500 h-full w-[10%]"></div>
                          <div className="bg-rose-500 h-full w-[5%]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 mt-2">
                          <span>Masons: 68</span>
                          <span>Helpers: 120</span>
                          <span>Carpenters: 35</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        ✓ Automated daily & weekly wage calculation with 1-click payslips.
                      </p>
                    </div>
                  )}

                  {activeTab === "materials" && (
                    <div className="space-y-2 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between border border-slate-200">
                        <div>
                          <p className="font-bold text-slate-900">OPC Cement 53 Grade</p>
                          <p className="text-[10px] text-slate-500">Site A • 450 bags in stock</p>
                        </div>
                        <span className="text-emerald-700 font-bold text-[10px]">Good Stock</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between border border-slate-200">
                        <div>
                          <p className="font-bold text-slate-900">TMT Steel Rebars (12mm)</p>
                          <p className="text-[10px] text-slate-500">Site B • 2.4 Ton remaining</p>
                        </div>
                        <span className="text-amber-700 font-bold text-[10px]">Re-order Soon</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "expenses" && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 font-medium">Site Petty Cash & Bills</span>
                        <span className="text-cyan-700 font-bold">100% Tracked</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        Snap photo vouchers on mobile, approve in seconds, and eliminate untracked cash leakages.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pocket badge */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-800 font-bold text-[11px]">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-600" />
                    Your Project In Your Pocket ✓
                  </span>
                  <span className="text-[10px] text-slate-500">Mobile & Web Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Banner (Clean Light) */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-cyan-700 mb-0.5">1-on-1</p>
              <p className="text-xs text-slate-600 font-medium">Dedicated Onboarding</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-teal-700 mb-0.5">99.9%</p>
              <p className="text-xs text-slate-600 font-medium">Cloud Uptime</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700 mb-0.5">100%</p>
              <p className="text-xs text-slate-600 font-medium">Construction Focused</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-amber-700 mb-0.5">24/7</p>
              <p className="text-xs text-slate-600 font-medium">Direct WhatsApp Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
              About CivilFlow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Built for Construction. Designed for Simplicity.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              CivilFlow is a complete construction management platform that helps contractors, builders, and civil engineering teams manage their projects efficiently — from site groundbreaking to final client handover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4 border border-cyan-100">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">100% Construction Specific</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No generic templates. Built around real-world site terms: DPR, Labour Gangs, Material Inward, Challans, and Petty Cash.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Easy & Simple Interface</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Site supervisors with minimal tech experience can log daily progress, labour attendance, and site photos in under 2 minutes.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Financial Transparency</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Stop budget overruns before they happen. Track exact material procurement vs. site consumption and eliminate ghost labour expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Modules */}
      <section id="features" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
              Comprehensive Modules
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Everything You Need to Manage Construction Sites
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              One unified portal for the complete day-to-day operation of your construction business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className={`w-11 h-11 rounded-xl ${feature.color} border flex items-center justify-center mb-4`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Demo Banner (Clean Light) */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-cyan-950 rounded-2xl p-6 sm:p-10 text-white shadow-lg">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <span className="text-cyan-400 text-xs font-bold uppercase">Personalized Demonstration</span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-1 mb-2 text-white">
                  Want to see how CivilFlow handles your ongoing projects?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Our civil tech specialists will set up your project demo, import your labour roster, and give you a live walkthrough on WhatsApp.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <button
                  onClick={() => handleWhatsAppDemo()}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow hover:scale-105 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request WhatsApp Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences & Plan Options (WITHOUT PRICING) */}
      <section id="plans" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              Tailored Tiers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Built for Every Size of Construction Business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select the plan that matches your current site operations and get a custom onboarding plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Small Business */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-1">
                  <span className="text-xl">🏠</span>
                  <h3>Small Business</h3>
                </div>
                <p className="text-xs text-slate-500 mb-5">
                  For individual contractors and emerging civil builders
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                  <p className="text-xs font-bold text-cyan-800">Included Capacity:</p>
                  <p className="text-xs text-slate-700 mt-0.5">3 Active Sites • 30 Labour Roster</p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All CivilFlow Features Included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Daily Labour Wage & Attendance Slips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Material Inward & Expense Logs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Mobile App Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>24/7 WhatsApp & Phone Support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppDemo("Small Business Plan")}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Demo & Custom Quote</span>
              </button>
            </div>

            {/* Mid Business (Most Popular) */}
            <div className="relative bg-white rounded-2xl p-7 border-2 border-cyan-600 shadow-md flex flex-col justify-between h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                MOST POPULAR
              </div>

              <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-1 mt-1">
                  <span className="text-xl">🏢</span>
                  <h3>Mid Business</h3>
                </div>
                <p className="text-xs text-slate-500 mb-5">
                  Ideal for growing multi-site construction companies
                </p>

                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 mb-5">
                  <p className="text-xs font-bold text-cyan-800">Included Capacity:</p>
                  <p className="text-xs text-slate-700 mt-0.5">10 Active Sites • 100 Labour Roster</p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>All CivilFlow Features Included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>Multi-Supervisor & Engineer Roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>Material Inventory & Waste Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>Automated DPR & Photo Reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>Priority 24/7 Dedicated Support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppDemo("Mid Business Plan")}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Demo & Custom Quote</span>
              </button>
            </div>

            {/* Enterprise Business */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-1">
                  <span className="text-xl">🏙️</span>
                  <h3>Enterprise Business</h3>
                </div>
                <p className="text-xs text-slate-500 mb-5">
                  For large builders and infrastructure corporations
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                  <p className="text-xs font-bold text-cyan-800">Included Capacity:</p>
                  <p className="text-xs text-slate-700 mt-0.5">Unlimited Sites • Unlimited Labour</p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All CivilFlow Modules Unlocked</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Custom ERP & Accounting Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>On-site Staff Training & Onboarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>VIP SLA & Rapid Feature Requests</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppDemo("Enterprise Business Plan")}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Demo & Custom Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support 24/7 Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-3 border border-cyan-100">
            <Headphones className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900">
            We’re Here for You — 24/7 Dedicated Support
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
            Get instant customer support, site onboarding, and feature guidance throughout your subscription. Anytime. Anywhere on WhatsApp.
          </p>
          <button
            onClick={() => handleWhatsAppDemo()}
            className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat with Support on WhatsApp</span>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default CivilFlow;
