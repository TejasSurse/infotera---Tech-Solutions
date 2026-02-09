import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  Layout,
  MessageSquareText,
  Code2,
  Smartphone,
  ShoppingCart,
  ArrowRight,
  Check,
} from "lucide-react";
import LayoutComponent from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai-automations",
    icon: Bot,
    title: "AI Automations",
    description: "Streamline your business with intelligent AI-powered automation solutions that boost efficiency and reduce manual work.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: [
      "Workflow automation with AI",
      "Intelligent document processing",
      "Automated data analysis",
      "AI-powered decision support",
      "Process optimization with machine learning",
    ],
  },
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive, and SEO-optimized websites that drive traffic and conversions for your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Responsive web design",
      "SEO optimization",
      "Performance optimization",
      "Content management systems",
      "Custom functionality development",
    ],
  },
  {
    id: "portal-development",
    icon: Layout,
    title: "Portal Development",
    description: "Custom online portals for business management, customer engagement, and internal operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      "Customer self-service portals",
      "Employee management portals",
      "Vendor and partner portals",
      "Learning management systems",
      "Secure authentication & access control",
    ],
  },
  {
    id: "chatbots",
    icon: MessageSquareText,
    title: "Chatbots",
    description: "AI-powered chatbots for 24/7 customer support and lead generation that never sleep.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    features: [
      "AI-powered conversational bots",
      "Multi-platform integration",
      "Natural language processing",
      "Lead qualification automation",
      "Customer support automation",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    features: [
      "Custom application development",
      "Legacy system modernization",
      "API development & integration",
      "Enterprise software solutions",
      "Quality assurance & testing",
    ],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Android & iOS App Development",
    description: "Native and cross-platform mobile apps for Android and iOS that engage and delight your users.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    features: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform development",
      "App store optimization",
      "Ongoing maintenance & updates",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Website",
    description: "Complete e-commerce solutions with payment integration, inventory management, and analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Custom e-commerce development",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking & fulfillment",
      "Analytics & reporting dashboard",
    ],
  },
];

const Services = () => {
  return (
    <LayoutComponent>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-cyan text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg text-white/80 mb-8">
              From AI automations to complete web and mobile solutions, we provide end-to-end technology
              services with 100% free consultancy to get you started.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Free Consultancy
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                id={service.id}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center"
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="free-badge">Free Consultation</div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="gradient" size="lg">
                        Book Free Consultancy
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-3xl overflow-hidden shadow-card-hover ${index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover aspect-square"
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Services;
