import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import infoteraLogo from "@/assets/infotera-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// Pages with dark hero backgrounds where navbar needs light text
const darkHeroPages = ["/", "/services", "/contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current page has a dark hero
  const hasDarkHero = darkHeroPages.includes(location.pathname);

  // Navbar should be light (white bg) when scrolled OR when on a page without dark hero
  const isLightNavbar = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isLightNavbar
        ? "bg-white shadow-lg"
        : "bg-[#0a1929] shadow-lg"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={infoteraLogo}
              alt="Infotera Tech Solutions"
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${!isLightNavbar ? "brightness-0 invert" : ""
                }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                  ? isLightNavbar ? "text-secondary" : "text-white"
                  : isLightNavbar
                    ? "text-primary hover:text-secondary"
                    : "text-white/80 hover:text-white"
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${isLightNavbar ? "bg-secondary" : "bg-white"
                      }`}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9322915022"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isLightNavbar
                ? "text-primary hover:text-secondary"
                : "text-white/80 hover:text-white"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>9322915022</span>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="default">
                Get Free Consultancy
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isLightNavbar ? "hover:bg-muted" : "hover:bg-white/10"
              }`}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isLightNavbar ? "text-primary" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isLightNavbar ? "text-primary" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 text-lg font-medium transition-colors ${location.pathname === link.path
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:9322915022"
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>9322915022</span>
                </a>
                <Link to="/contact" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Get Free Consultancy
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
