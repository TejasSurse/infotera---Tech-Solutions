import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const USPSection = () => {
  const usps = [
    "Free Consultancy",
    "Zero Risk",
    "Maximum Value",
    "Expert Guidance",
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-brand-blue to-brand-cyan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {usps.map((usp, index) => (
              <motion.div
                key={usp}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-semibold">{usp}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default USPSection;
