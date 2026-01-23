import { motion } from "framer-motion";
import {
  Stethoscope,
  Landmark,
  Factory,
  UtensilsCrossed,
  HardHat,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Digital solutions for hospitals, clinics, and healthcare providers",
  },
  {
    icon: Landmark,
    name: "Finance",
    description: "Secure fintech solutions for banks and financial institutions",
  },
  {
    icon: Factory,
    name: "Industries",
    description: "Smart manufacturing and industrial automation solutions",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverages",
    description: "POS and management systems for restaurants and cafes",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Project management and labor payment solutions",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-cyan text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We understand the unique challenges of different industries and provide
            tailored technology solutions.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-white/60 text-sm">{industry.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
