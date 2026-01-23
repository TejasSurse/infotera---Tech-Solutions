import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Small Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing the way small businesses operate, from automation to customer service.",
    category: "AI & Automation",
    readTime: "5 min read",
    date: "Jan 20, 2026",
    image: "🤖",
  },
  {
    id: 2,
    title: "Top 10 IT Security Best Practices for 2026",
    excerpt: "Protect your business from cyber threats with these essential security practices every organization should implement.",
    category: "Security",
    readTime: "7 min read",
    date: "Jan 18, 2026",
    image: "🔒",
  },
  {
    id: 3,
    title: "Cloud Migration: A Step-by-Step Guide",
    excerpt: "Everything you need to know about migrating your business to the cloud, including common pitfalls and best practices.",
    category: "Cloud Computing",
    readTime: "10 min read",
    date: "Jan 15, 2026",
    image: "☁️",
  },
  {
    id: 4,
    title: "Building Scalable Software: Architecture Patterns",
    excerpt: "Learn about the architectural patterns that enable software to scale efficiently as your business grows.",
    category: "Development",
    readTime: "8 min read",
    date: "Jan 12, 2026",
    image: "🏗️",
  },
  {
    id: 5,
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of businesses that successfully transformed their operations through technology.",
    category: "Case Studies",
    readTime: "6 min read",
    date: "Jan 10, 2026",
    image: "📈",
  },
  {
    id: 6,
    title: "The Future of Remote Work Technology",
    excerpt: "Explore the technologies shaping the future of remote and hybrid work environments.",
    category: "Trends",
    readTime: "4 min read",
    date: "Jan 8, 2026",
    image: "💻",
  },
];

const categories = ["All", "AI & Automation", "Security", "Cloud Computing", "Development", "Case Studies", "Trends"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest in technology, IT best practices, and digital transformation strategies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 flex items-center justify-center">
                    <span className="text-6xl">{post.image}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs font-medium text-secondary">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <button className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get started with our 100% free IT & AI consultancy. No obligations, just expert guidance.
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
    </Layout>
  );
};

export default Blog;
