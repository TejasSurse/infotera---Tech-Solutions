import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "crm",
    title: "CRM Software",
    description: "Manage customer relationships, track leads, and boost sales with our intelligent CRM solution designed for modern businesses.",
    features: [
      "Lead and contact management",
      "Sales pipeline visualization",
      "Customer analytics dashboard",
      "Email integration",
      "Task and activity tracking",
      "Custom reports and insights",
    ],
    industries: ["All Industries"],
    image: "📊",
  },
  {
    id: "project",
    title: "Project Management",
    description: "Streamline project workflows, collaborate with teams, and deliver projects on time with our comprehensive project management tool.",
    features: [
      "Task management and boards",
      "Team collaboration tools",
      "Time tracking",
      "Gantt charts",
      "Resource allocation",
      "Progress reporting",
    ],
    industries: ["All Industries"],
    image: "📋",
  },
  {
    id: "pos",
    title: "POS Software",
    description: "Complete point-of-sale solution for restaurants, hotels, and cafes with inventory management and analytics.",
    features: [
      "Order management",
      "Table management",
      "Inventory tracking",
      "Payment processing",
      "Kitchen display system",
      "Sales analytics",
    ],
    industries: ["Restaurants", "Hotels", "Cafes"],
    image: "🍽️",
  },
  {
    id: "labour",
    title: "Labour Payment Software",
    description: "Simplified labour management and payment processing solution designed specifically for construction companies.",
    features: [
      "Attendance tracking",
      "Wage calculation",
      "Payment processing",
      "Worker profiles",
      "Compliance management",
      "Detailed reports",
    ],
    industries: ["Construction"],
    image: "🏗️",
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    description: "Complete hospital and clinic management with appointment scheduling, patient records, and billing integration.",
    features: [
      "Appointment scheduling",
      "Patient records (EMR)",
      "Billing and invoicing",
      "Pharmacy management",
      "Lab integration",
      "Doctor dashboard",
    ],
    industries: ["Healthcare"],
    image: "🏥",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Industry-Specific Software Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready-to-deploy software products designed for specific industry needs 
              with customization options and free demos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} id={product.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      {/* Industry Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.industries.map((industry) => (
                          <span
                            key={industry}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
                        {product.title}
                        <Sparkles className="w-6 h-6 text-accent" />
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link to="/contact">
                          <Button variant="hero" size="lg">
                            Request Free Demo
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button variant="outline" size="lg">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Product Visual */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 rounded-2xl aspect-video flex items-center justify-center ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <span className="text-8xl">{product.image}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
