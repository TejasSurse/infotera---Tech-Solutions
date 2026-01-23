import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import infoteraLogo from "@/assets/infotera-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "IT Consultancy", path: "/services#consultancy" },
      { name: "Software Solutions", path: "/services#software" },
      { name: "Web Development", path: "/services#web" },
      { name: "Cloud Computing", path: "/services#cloud" },
      { name: "Data Protection", path: "/services#data" },
    ],
    products: [
      { name: "CRM Software", path: "/products#crm" },
      { name: "Project Management", path: "/products#project" },
      { name: "POS Software", path: "/products#pos" },
      { name: "Hospital Management", path: "/products#hospital" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-cyan py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get started with our 100% free IT & AI consultancy. No obligations, just expert guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-glow-orange animate-pulse-glow"
          >
            Get Free Consultancy
          </Link>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <img
              src={infoteraLogo}
              alt="Infotera Tech Solutions"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering businesses with intelligent technology and AI automation. 
              Your trusted partner for digital transformation.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@infotera.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary" />
                contact@infotera.com
              </a>
              <a
                href="tel:9322915022"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-secondary" />
                9322915022
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Infotera Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
