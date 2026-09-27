import {
  Gift,
  Bot,
  Lock,
  Building,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Gift,
    title: "100% Free Architecture Consultation",
    description:
      "Get expert IT, software architecture & AI guidance at zero upfront cost.",
    highlight: true,
  },
  {
    icon: Building,
    title: "Construction & Hospitality Deep Domain Depth",
    description:
      "Every workflow, screen, and feature is purpose-built for civil sites and hospitality operations.",
    highlight: false,
  },
  {
    icon: Bot,
    title: "AI-Driven Automation Systems",
    description:
      "Automate lead qualification, customer WhatsApp follow-ups, and daily DPR summaries with AI.",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Enterprise Grade Reliability & Uptime",
    description:
      "Secure, scalable cloud deployments with automated backups and role-based data encryption.",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 WhatsApp & Engineer Support",
    description:
      "Direct phone and WhatsApp support channel with our engineering specialists.",
    highlight: false,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Specialized Software That Drives Real ROI
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              We combine deep civil and hospitality industry knowledge with cutting-edge SaaS engineering. Our free consultation model ensures you get clear roadmaps before committing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <p className="text-2xl sm:text-3xl font-black text-cyan-700">100%</p>
                <p className="text-xs text-slate-600 font-medium mt-1">Free Consultancy</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-700">24/7</p>
                <p className="text-xs text-slate-600 font-medium mt-1">WhatsApp Support</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <p className="text-2xl sm:text-3xl font-black text-indigo-700">1-on-1</p>
                <p className="text-xs text-slate-600 font-medium mt-1">Direct Tech Support</p>
              </div>
            </div>
          </div>

          {/* Right - Reasons Cards */}
          <div className="space-y-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all ${
                  reason.highlight
                    ? "bg-cyan-50/70 border-cyan-300 shadow-sm"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    reason.highlight
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-slate-800 border border-slate-200"
                  }`}
                >
                  <reason.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    {reason.title}
                    {reason.highlight && (
                      <span className="text-[10px] px-2 py-0.2 rounded-full bg-cyan-600 text-white font-bold">
                        Zero Risk
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
