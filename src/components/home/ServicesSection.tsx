import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HardHat,
  Hotel,
  Bot,
  Layout,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: HardHat,
    title: "Construction & Infrastructure Tech",
    description:
      "Custom site management, subcontractor billing, biometric labour sync, and DPR reporting solutions.",
    color: "from-cyan-500 to-blue-600",
    link: "/services#construction-tech",
  },
  {
    icon: Hotel,
    title: "Hospitality, Hotel & POS Software",
    description:
      "Cloud POS, kitchen order displays, table booking systems, and banquet management platforms.",
    color: "from-blue-600 to-indigo-600",
    link: "/services#hospitality-tech",
  },
  {
    icon: Bot,
    title: "AI Automations & WhatsApp Bots",
    description:
      "24/7 WhatsApp lead qualification, automated quotation generators, and intelligent OCR processing.",
    color: "from-emerald-500 to-teal-600",
    link: "/services#ai-automations",
  },
  {
    icon: Layout,
    title: "Enterprise Custom Portals & Apps",
    description:
      "Scalable web applications, iOS/Android mobile apps, and custom operational dashboards.",
    color: "from-amber-500 to-orange-600",
    link: "/services#custom-portals",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Specialized Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Custom Software & AI Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond our flagship products, we build tailored software solutions with 100% free preliminary consultancy and architectural blueprints.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-border/60 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-white shadow-md`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-primary mb-2.5 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="inline-block bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                    Free Consultation Included
                  </div>

                  <Link
                    to={service.link}
                    className="flex items-center justify-between text-secondary text-xs font-bold group-hover:underline"
                  >
                    <span>Explore Scope & Features</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
