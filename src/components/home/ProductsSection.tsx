import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const products = [
  {
    title: "CRM Software",
    description:
      "Manage customer relationships, track leads, and boost sales with our intelligent CRM solution.",
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Automation"],
    industry: "All Industries",
  },
  {
    title: "Project Management",
    description:
      "Streamline project workflows, collaborate with teams, and deliver projects on time.",
    features: ["Task Management", "Team Collaboration", "Time Tracking", "Reporting"],
    industry: "All Industries",
  },
  {
    title: "POS Software",
    description:
      "Complete point-of-sale solution for restaurants, hotels, and cafes with inventory management.",
    features: ["Order Management", "Inventory", "Payment Processing", "Analytics"],
    industry: "Food & Beverages",
  },
  {
    title: "Labour Payment Software",
    description:
      "Simplified labour management and payment processing for construction companies.",
    features: ["Attendance Tracking", "Wage Calculation", "Payment Processing", "Reports"],
    industry: "Construction",
  },
  {
    title: "Hospital Management",
    description:
      "Complete hospital and clinic management with appointment scheduling and patient records.",
    features: ["Appointments", "Patient Records", "Billing", "Pharmacy Management"],
    industry: "Healthcare",
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Industry-Specific Software Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready-to-deploy software products designed for specific industry needs
            with customization options.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 h-full flex flex-col"
              >
                {/* Industry Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {product.industry}
                  </span>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all">
                    Request Free Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
