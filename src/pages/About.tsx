import { Target, Eye, Heart, Users, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  { icon: Heart, title: "Client First", description: "Your operational success is our priority. We go above and beyond for our partners." },
  { icon: Lightbulb, title: "Domain Innovation", description: "Building purpose-engineered technology solutions for construction & hospitality." },
  { icon: Users, title: "Collaboration", description: "Working together seamlessly to deliver tangible software efficiency." },
  { icon: Award, title: "Excellence", description: "Committed to delivering high-availability, mission-critical software." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4 shadow-sm">
              About Infotera
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Powering Industries Through Purpose-Built Software
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We are a specialized technology firm engineering flagship products like CivilFlow and OneCRM AI to eliminate operational friction in Construction and Hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To simplify and digitize heavy site operations for contractors, builders, and hotel managers with simple, zero-learning-curve software products.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To become the premier technology partner for specialized industries across India and globally, known for robust software reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              The values that drive every release, feature, and interaction at Infotera.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-slate-50 border border-slate-200 text-cyan-700 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{value.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
