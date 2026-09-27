import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Linkedin, Twitter, Facebook, Instagram, Sparkles } from "lucide-react";
import infoteraLogo from "@/assets/infotera-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "CivilFlow (Construction)", path: "/products/civilflow" },
      { name: "OneCRM AI (Sales & CRM)", path: "/products/onecrm" },
      { name: "All Products Overview", path: "/products" },
    ],
    services: [
      { name: "Construction Tech Solutions", path: "/services#construction-tech" },
      { name: "Hospitality & POS Software", path: "/services#hospitality-tech" },
      { name: "Enterprise AI Automations", path: "/services#ai-automations" },
      { name: "Custom Portals & Apps", path: "/services#custom-portals" },
    ],
    company: [
      { name: "About Infotera", path: "/about" },
      { name: "Blog & Insights", path: "/blog" },
      { name: "Contact & Support", path: "/contact" },
      { name: "100% Free Consultation", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* High-Converting CTA Banner (Clean & High Contrast) */}
      <div className="bg-gradient-to-r from-cyan-900 via-slate-900 to-cyan-950 py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-3 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Launch Your Tech Transformation
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Ready to Experience CivilFlow or Consult Our Architects?
          </h3>
          <p className="text-slate-300 mb-6 text-xs sm:text-sm leading-relaxed">
            Get 100% Free Technical & AI Consultancy or book a live product walkthrough on WhatsApp in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hi Infotera Team! I want to book a Free Demo on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Free Demo on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src={infoteraLogo}
              alt="Infotera Tech Solutions"
              className="h-11 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 mb-5 max-w-sm text-xs leading-relaxed">
              Specialized Software & AI Technology Solutions for Construction & Infrastructure, Hospitality, and Enterprise Operations.
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={getWhatsAppUrl("Hi Infotera Team! Contacting from website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 9322915022</span>
              </a>
              <a
                href="tel:9322915022"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Phone: 9322915022</span>
              </a>
              <a
                href="mailto:contact@infotera.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@infotera.com</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Products</h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Specialized Services</h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Infotera Tech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
