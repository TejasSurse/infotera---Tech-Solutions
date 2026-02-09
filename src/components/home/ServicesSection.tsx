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
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Bot,
    title: "AI Automations",
    description:
      "Streamline your business with intelligent AI-powered automation solutions that boost efficiency.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, and SEO-optimized websites that drive traffic and conversions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layout,
    title: "Portal Development",
    description:
      "Custom online portals for business management, customer engagement, and internal operations.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: MessageSquareText,
    title: "Chatbots",
    description:
      "AI-powered chatbots for 24/7 customer support and lead generation.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your unique business requirements.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile apps for Android and iOS that engage your users.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    description:
      "Complete e-commerce solutions with payment integration, inventory management, and analytics.",
    color: "from-cyan-500 to-blue-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI automations to complete web and mobile solutions, we provide end-to-end technology
            services to power your business growth.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-border/50"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Free Badge */}
                <div className="free-badge mb-4">
                  <span>Free Consultation</span>
                </div>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-secondary text-sm font-medium group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
