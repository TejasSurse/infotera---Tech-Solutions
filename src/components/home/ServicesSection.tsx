import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Monitor,
  Code2,
  Globe,
  Building2,
  Server,
  Shield,
  Headphones,
  Cloud,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Monitor,
    title: "IT Consultancy",
    description:
      "Expert guidance to optimize your IT infrastructure and strategy for business growth.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    description:
      "Custom software development tailored to your unique business requirements.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications that drive results.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Building2,
    title: "Business Management",
    description:
      "Streamline operations with intelligent business management solutions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Robust infrastructure setup and management for reliable operations.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "Comprehensive security solutions to protect your valuable business data.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "24/7 dedicated support to ensure your systems run smoothly.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions for flexibility and cost optimization.",
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
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From consultancy to implementation, we provide end-to-end technology
            solutions to power your business.
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
