import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const industries = [
  {
    name: "Healthcare & Medical",
    description:
      "Digital solutions for hospitals, clinics, telemedicine, and health management systems",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    color: "from-emerald-500/80 to-teal-600/80",
  },
  {
    name: "Finance & Banking",
    description:
      "Secure fintech solutions, digital banking, and financial management platforms",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    color: "from-blue-600/80 to-indigo-700/80",
  },
  {
    name: "E-commerce & Retail",
    description:
      "Online stores, inventory management, and omnichannel retail solutions",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    color: "from-purple-500/80 to-pink-600/80",
  },
  {
    name: "Education & E-Learning",
    description:
      "Learning management systems, online courses, and educational platforms",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    color: "from-cyan-500/80 to-blue-600/80",
  },
  {
    name: "Real Estate & Property",
    description:
      "Property management, virtual tours, and real estate listing solutions",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    color: "from-amber-500/80 to-orange-600/80",
  },
  {
    name: "Hospitality & Tourism",
    description:
      "Hotel booking systems, travel platforms, and hospitality management",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    color: "from-rose-500/80 to-red-600/80",
  },
  {
    name: "Manufacturing & Industry",
    description:
      "Smart manufacturing, industrial automation, and supply chain solutions",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    color: "from-slate-600/80 to-gray-700/80",
  },
  {
    name: "Logistics & Transportation",
    description:
      "Fleet management, route optimization, and logistics tracking systems",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    color: "from-green-600/80 to-emerald-700/80",
  },
  {
    name: "Food & Restaurants",
    description:
      "POS systems, online ordering, delivery platforms, and restaurant management",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    color: "from-orange-500/80 to-red-500/80",
  },
  {
    name: "Construction & Engineering",
    description:
      "Project management, labor tracking, and construction management software",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    color: "from-yellow-600/80 to-amber-700/80",
  },
  {
    name: "Legal & Consulting",
    description:
      "Case management, document automation, and professional services solutions",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    color: "from-indigo-600/80 to-violet-700/80",
  },
  {
    name: "Entertainment & Media",
    description:
      "Streaming platforms, content management, and digital media solutions",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop",
    color: "from-fuchsia-500/80 to-purple-600/80",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We understand the unique challenges of different industries and
            provide tailored technology solutions that drive growth and
            efficiency.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Glassmorphism Card Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  {/* Industry Name - Always visible */}
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                    {industry.name}
                  </h3>

                  {/* Description - Visible on hover */}
                  <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {industry.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your industry? We create custom solutions for any sector.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium rounded-full hover:shadow-lg transition-shadow"
          >
            Let's Discuss Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustriesSection;
