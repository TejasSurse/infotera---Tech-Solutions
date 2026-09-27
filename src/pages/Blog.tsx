import { Link } from "react-router-dom";
import { Clock, ArrowRight, Tag, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How Construction Tech is Eliminating Ghost Labour Expenses",
    excerpt: "Discover how biometric mobile attendance and daily site progress logs save civil contractors up to 15% on monthly site budgets.",
    category: "Construction Tech",
    readTime: "5 min read",
    date: "Jan 20, 2026",
    image: "🏗️",
  },
  {
    id: 2,
    title: "Why AI WhatsApp Automation 3x Banquet & Hotel Bookings",
    excerpt: "Learn how instant conversational qualification and automated quotation follow-ups capture high-value corporate deals.",
    category: "Hospitality & AI",
    readTime: "7 min read",
    date: "Jan 18, 2026",
    image: "🏨",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Material Inventory Reconciliation",
    excerpt: "Best practices for tracking cement, steel, and sand dispatches from vendor challan to final slab pouring.",
    category: "Civil Engineering",
    readTime: "10 min read",
    date: "Jan 15, 2026",
    image: "📦",
  },
];

const categories = ["All", "Construction Tech", "Hospitality & AI", "Civil Engineering"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero (Clean Light) */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4 shadow-sm">
              Our Blog & Insights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Industry Knowledge & Practical Tech Guides
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Stay updated with operational best practices in Construction management, Hospitality tech, and AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video bg-white flex items-center justify-center border-b border-slate-100">
                    <span className="text-5xl">{post.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                      <span className="font-semibold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <Link to="/contact" className="text-cyan-700 font-bold hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
