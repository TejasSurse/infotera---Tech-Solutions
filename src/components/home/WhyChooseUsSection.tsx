import { motion } from "framer-motion";
import {
  Gift,
  Bot,
  Lock,
  Building,
  HeadphonesIcon,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const reasons = [
  {
    icon: Gift,
    title: "Free Consultancy",
    description:
      "Get expert IT & AI guidance at absolutely no cost. We believe in earning your trust first.",
    highlight: true,
  },
  {
    icon: Bot,
    title: "AI-Driven Solutions",
    description:
      "Leverage cutting-edge AI and automation to streamline operations and boost productivity.",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security with solutions that grow with your business needs.",
    highlight: false,
  },
  {
    icon: Building,
    title: "Industry-Specific",
    description:
      "Tailored software solutions designed for your specific industry requirements.",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    title: "Enterprise Support",
    description:
      "Dedicated support team available to ensure smooth operations and quick resolutions.",
    highlight: false,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine deep technical expertise with a genuine commitment to your
              success. Our free consultancy model ensures you get the best advice
              without any financial risk.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gradient mb-2"
                >
                  100%
                </motion.div>
                <p className="text-muted-foreground text-sm">Free Consultancy</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-bold text-gradient mb-2"
                >
                  24/7
                </motion.div>
                <p className="text-muted-foreground text-sm">Support Available</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold text-gradient mb-2"
                >
                  5+
                </motion.div>
                <p className="text-muted-foreground text-sm">Industries Served</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Reasons Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ${
                    reason.highlight
                      ? "bg-gradient-to-r from-accent/20 to-accent/5 border-2 border-accent/30"
                      : "bg-card border border-border/50 hover:border-secondary/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      reason.highlight
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1 flex items-center gap-2">
                      {reason.title}
                      {reason.highlight && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                          Highlighted
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
