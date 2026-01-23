import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  { icon: Heart, title: "Customer First", description: "Your success is our priority. We go above and beyond for our clients." },
  { icon: Lightbulb, title: "Innovation", description: "Constantly pushing boundaries with cutting-edge technology solutions." },
  { icon: Users, title: "Collaboration", description: "Working together as one team to deliver exceptional results." },
  { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality in everything we do." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Empowering Businesses Through Technology
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of technologists committed to making IT consultancy 
              accessible to every business, regardless of size or budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-2xl text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-white/80 leading-relaxed">
                  To democratize access to expert IT and AI consultancy by offering 100% free 
                  guidance, enabling businesses of all sizes to leverage technology for growth 
                  and success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-accent to-orange-400 p-8 rounded-2xl text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/80 leading-relaxed">
                  To become the most trusted technology partner for businesses worldwide, 
                  known for our commitment to client success and innovative AI-driven solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Infotera Tech Solutions.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl border border-border/50 text-center h-full"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
