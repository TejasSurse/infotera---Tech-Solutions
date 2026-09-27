import { Link } from "react-router-dom";
import {
  HardHat,
  Hotel,
  Bot,
  Layout as LayoutIcon,
  Check,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import LayoutComponent from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const services = [
  {
    id: "construction-tech",
    icon: HardHat,
    category: "Specialized Sector",
    title: "Construction & Infrastructure Tech Solutions",
    description: "Tailored software, mobile apps, and portal engineering for contractors, builders, and civil engineering companies.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "Custom site management & DPR reporting systems",
      "Biometric & mobile labour attendance sync",
      "Material inventory & supplier billing portals",
      "Subcontractor measurement books (MB) digitization",
      "Integration with CivilFlow & legacy ERPs",
    ],
  },
  {
    id: "hospitality-tech",
    icon: Hotel,
    category: "Specialized Sector",
    title: "Hospitality, Hotel & POS Software",
    description: "Cloud-native Point of Sale, table reservation engines, banquet booking software, and multi-branch restaurant management.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    features: [
      "Touch POS & Kitchen Display Systems (KDS)",
      "Real-time table booking & QR menu ordering",
      "Room inventory & housekeeping operations",
      "Banquet inquiry & contract automations",
      "Automated WhatsApp customer feedback loops",
    ],
  },
  {
    id: "ai-automations",
    icon: Bot,
    category: "AI & Intelligence",
    title: "Enterprise AI Automations & Workflows",
    description: "Cut manual operational hours with intelligent AI automations, document OCR extractors, and automated customer qualification engines.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: [
      "AI WhatsApp & Email customer response bots",
      "Intelligent invoice & challan OCR extraction",
      "Automated lead qualification & routing",
      "Predictive business intelligence & forecasts",
      "Seamless integration with your CRM & databases",
    ],
  },
  {
    id: "custom-portals",
    icon: LayoutIcon,
    category: "Enterprise Software",
    title: "Custom Web Portals & Mobile Apps",
    description: "High-performance responsive portals, iOS/Android mobile apps, and SaaS dashboards built for mission-critical enterprise reliability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      "Enterprise customer & vendor portals",
      "Native iOS & Android mobile application development",
      "High-scale REST & GraphQL API architectures",
      "Role-based access control & SOC2-ready security",
      "100% Free architecture design & initial consultancy",
    ],
  },
];

const Services = () => {
  const handleWhatsAppConsult = (serviceName: string) => {
    const msg = `Hi Infotera Team! 💡 I would like to book a Free Tech Consultation for: ${serviceName}.`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <LayoutComponent>
      {/* Hero (Clean Light) */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              Specialized Engineering Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Tailored Tech for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Industry Specifics
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              From construction site automation to cloud POS systems and enterprise AI pipelines — we engineer custom technology with 100% free preliminary consultancy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleWhatsAppConsult("General Technical Consultation")}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Consult on WhatsApp (100% Free)</span>
              </button>

              <Link
                to="/products"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span>View Packaged Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-800 flex items-center justify-center border border-cyan-200">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleWhatsAppConsult(service.title)}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:scale-105 transition-all"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Free Consultation</span>
                    </button>

                    <Link to="/contact">
                      <Button variant="outline" size="default" className="text-xs">
                        Send Detailed Brief
                      </Button>
                    </Link>
                  </div>
                </div>

                <div
                  className={`rounded-2xl overflow-hidden shadow-md border border-slate-200 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Services;
