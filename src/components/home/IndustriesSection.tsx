import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Hotel, HardHat, ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const primarySpecializations = [
  {
    name: "Construction & Civil Infrastructure",
    badge: "Core Specialization",
    description:
      "End-to-end digital site management, labour attendance & wage calculation, material inventory tracking, daily progress logs (DPR), and contractor ERP portals.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    color: "from-cyan-950/90 via-slate-900/80 to-transparent",
    productLink: "/products/civilflow",
    productName: "Featured Product: CivilFlow",
    features: ["Site & Labour Tracking", "Material Reconciliation", "Petty Cash Management", "Digital Blueprints & Vault"],
  },
  {
    name: "Hospitality, Hotels & Restaurants",
    badge: "Core Specialization",
    description:
      "Cloud POS systems, table reservation engines, hotel property management (PMS), banquet booking automations, and intelligent customer relationship platforms.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    color: "from-blue-950/90 via-slate-900/80 to-transparent",
    productLink: "/products/onecrm",
    productName: "Featured Product: OneCRM AI",
    features: ["Cloud POS & Kitchen Display", "Room & Banquet Booking", "AI Lead Conversion", "Guest Retention Campaigns"],
  },
];

const otherIndustries = [
  {
    name: "Real Estate & Housing",
    description: "Lead pipelines, property inventory boards, and automated WhatsApp site visit bookings.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    name: "Healthcare & Clinics",
    description: "EMR patient management, doctor scheduling, lab integrations, and billing portals.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    name: "E-commerce & Retail",
    description: "Custom storefronts, high-converting checkout funnels, and warehouse stock tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Fleet transit logs, dispatch approvals, vendor billing, and automated tracking portals.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Industry Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Specialized Tech for Heavy-Duty Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't build generic cookie-cutter templates. We solve deep workflow bottlenecks in Construction and Hospitality.
          </p>
        </AnimatedSection>

        {/* Primary Flagship Specializations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {primarySpecializations.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover group min-h-[460px] flex flex-col justify-end"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`} />
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />

                {/* Content */}
                <div className="relative z-10 p-8 sm:p-10 text-white flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {item.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-200 bg-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={item.productLink}
                    className="inline-flex items-center justify-between bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-cyan-400 hover:text-slate-950 transition-colors shadow-lg"
                  >
                    <span>{item.productName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Industries Mini Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherIndustries.map((ind, idx) => (
            <AnimatedSection key={ind.name} delay={idx * 0.05}>
              <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-card transition-all h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-primary mb-2">{ind.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold text-secondary hover:underline inline-flex items-center gap-1 mt-4"
                >
                  <span>Explore Custom Tech</span>
                  <span>→</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
