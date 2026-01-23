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
  Check,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

// Import service images
import itConsultancyImg from "@/assets/services/it-consultancy.jpg";
import softwareSolutionsImg from "@/assets/services/software-solutions.jpg";
import webDevelopmentImg from "@/assets/services/web-development.jpg";
import businessManagementImg from "@/assets/services/business-management.jpg";
import itInfrastructureImg from "@/assets/services/it-infrastructure.jpg";
import dataProtectionImg from "@/assets/services/data-protection.jpg";
import customerSupportImg from "@/assets/services/customer-support.jpg";
import cloudComputingImg from "@/assets/services/cloud-computing.jpg";

const services = [
  {
    id: "consultancy",
    icon: Monitor,
    title: "IT Consultancy",
    description: "Expert guidance to optimize your IT infrastructure and strategy for business growth.",
    image: itConsultancyImg,
    features: [
      "Technology assessment and roadmap",
      "Digital transformation strategy",
      "IT budget optimization",
      "Vendor selection and management",
      "Process automation consulting",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Software Solutions",
    description: "Custom software development tailored to your unique business requirements.",
    image: softwareSolutionsImg,
    features: [
      "Custom application development",
      "Legacy system modernization",
      "API development and integration",
      "Mobile app development",
      "Quality assurance and testing",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that drive results.",
    image: webDevelopmentImg,
    features: [
      "Responsive website design",
      "E-commerce solutions",
      "Progressive web apps",
      "Content management systems",
      "SEO optimization",
    ],
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Management",
    description: "Streamline operations with intelligent business management solutions.",
    image: businessManagementImg,
    features: [
      "ERP implementation",
      "Workflow automation",
      "Business analytics",
      "Resource planning",
      "Performance monitoring",
    ],
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    description: "Robust infrastructure setup and management for reliable operations.",
    image: itInfrastructureImg,
    features: [
      "Network design and setup",
      "Server management",
      "Virtualization solutions",
      "Disaster recovery",
      "Infrastructure monitoring",
    ],
  },
  {
    id: "data",
    icon: Shield,
    title: "Data Protection",
    description: "Comprehensive security solutions to protect your valuable business data.",
    image: dataProtectionImg,
    features: [
      "Data backup solutions",
      "Encryption services",
      "Compliance management",
      "Security audits",
      "Privacy consulting",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 dedicated support to ensure your systems run smoothly.",
    image: customerSupportImg,
    features: [
      "24/7 helpdesk support",
      "Remote assistance",
      "On-site support",
      "SLA management",
      "User training",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud solutions for flexibility and cost optimization.",
    image: cloudComputingImg,
    features: [
      "Cloud migration",
      "Multi-cloud management",
      "Serverless solutions",
      "Cost optimization",
      "Cloud security",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-cyan text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-lg text-white/80 mb-8">
              From consultancy to implementation, we provide end-to-end technology 
              solutions with 100% free consultancy to get you started.
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
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
                    className={`rounded-3xl overflow-hidden shadow-card-hover ${
                      index % 2 === 1 ? "lg:order-1" : ""
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
    </Layout>
  );
};

export default Services;
