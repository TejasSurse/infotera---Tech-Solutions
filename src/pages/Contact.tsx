import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, MessageCircle, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";
import { submitLead, trackEvent } from "@/lib/api";

const interestOptions = [
  "CivilFlow — Construction & Labour SaaS Demo",
  "OneCRM AI — Automated Sales CRM Beta",
  "Construction & Infrastructure Tech Solutions",
  "Hospitality, Hotel & POS Software",
  "Enterprise AI Automations & WhatsApp Bots",
  "Custom Web Portal / Mobile App Development",
  "100% Free General Tech Consultancy",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "CivilFlow — Construction & Labour SaaS Demo",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
      source: "Website Contact Form",
    });

    trackEvent("/contact", "form_submit", formData.interest);

    toast({
      title: "Inquiry Received! 🚀",
      description: "Our tech solutions engineer will contact you shortly.",
    });

    const msg = `Hi Infotera Team! My name is ${formData.name}. I am inquiring about: ${formData.interest}. My phone: ${formData.phone}, Email: ${formData.email}. Note: ${formData.message}`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "CivilFlow — Construction & Labour SaaS Demo",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero (Clean Light) */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              100% Free Consultation & Live Demos
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Let's Build & Scale{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Together
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Book a live demo of CivilFlow or consult our solutions architects regarding custom technology for your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Fast Track with Instant WhatsApp
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Need a live product walkthrough right away? Connect with our technical team directly on WhatsApp for zero-wait response.
                </p>

                <a
                  href={getWhatsAppUrl("Hi Infotera! I want to schedule a Free Live Demo on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02] transition-all mb-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:9322915022"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Phone Line</div>
                    <div className="font-bold text-slate-900 text-sm">9322915022</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@infotera.com"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Email Inquiries</div>
                    <div className="font-bold text-slate-900 text-sm">contact@infotera.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Headquarters</div>
                    <div className="font-bold text-slate-900 text-sm">India • Serving Nationwide & Global</div>
                  </div>
                </div>
              </div>

              {/* Free Badge */}
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <Check className="w-4 h-4 text-cyan-700 font-bold" />
                  <span className="font-bold text-slate-900 text-sm">100% Free Initial Architecture Consultation</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No credit card or commitment required. We evaluate your operational challenges and propose clear technical solutions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-1">Send Project Brief</h3>
                <p className="text-xs text-slate-500 mb-5">
                  Fill in your details below and we will prepare a customized demo environment for you.
                </p>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-10 bg-white border-slate-300 text-slate-900"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 bg-white border-slate-300 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="+91 9322915022"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-10 bg-white border-slate-300 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Product / Solution of Interest *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Tell us about your project or team size
                    </label>
                    <Textarea
                      placeholder="e.g. We have 4 ongoing building sites and want to track 120 daily labour workers and material inventory..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[90px] bg-white border-slate-300 text-slate-900 text-xs"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-11 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Submit & Connect on WhatsApp</span>
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
