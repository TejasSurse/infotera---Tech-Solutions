import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import infoteraLogo from "@/assets/infotera-logo.png";
import civilflowLogo from "@/assets/civilflow-logo.png";
import onecrmLogo from "@/assets/onecrm-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    // 2-second hold before closing as requested
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 2000);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 ${
        isScrolled
          ? "shadow-sm border-b border-slate-200/80"
          : "border-b border-slate-100"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={infoteraLogo}
              alt="Infotera Tech Solutions"
              className="h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === "/"
                  ? "text-cyan-700 bg-cyan-50/80 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown with 2s hold */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/products"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 ${
                  location.pathname.startsWith("/products")
                    ? "text-cyan-700 bg-cyan-50/80 font-bold"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                <span>Products</span>
                <span className="text-[10px] bg-cyan-100 text-cyan-800 px-1.5 py-0.2 rounded font-bold">
                  New
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </Link>

              {/* Dropdown Menu (No gap, smooth bridge) */}
              {isProductsDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-80 bg-white text-slate-900 rounded-2xl shadow-xl border border-slate-200 p-2.5 space-y-1 mt-0 z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/products/civilflow"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 p-1 flex items-center justify-center shrink-0 border border-slate-200">
                      <img src={civilflowLogo} alt="CivilFlow" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          CivilFlow
                        </span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded border border-emerald-200">
                          Live
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-tight mt-0.5">
                        Construction & Labour Management Platform
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/products/onecrm"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 p-0.5 flex items-center justify-center shrink-0 border border-slate-200">
                      <img src={onecrmLogo} alt="OneCRM AI" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          OneCRM AI
                        </span>
                        <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-1.5 py-0.2 rounded border border-blue-200">
                          Beta
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-tight mt-0.5">
                        End-to-End AI CRM & Sales Automation
                      </p>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <Link
                      to="/products"
                      className="text-xs font-bold text-cyan-700 hover:underline flex items-center justify-between px-2 py-1"
                    >
                      <span>View All Products & Features</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === "/services"
                  ? "text-cyan-700 bg-cyan-50/80 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Services
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === "/about"
                  ? "text-cyan-700 bg-cyan-50/80 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              to="/blog"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === "/blog"
                  ? "text-cyan-700 bg-cyan-50/80 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === "/contact"
                  ? "text-cyan-700 bg-cyan-50/80 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi Infotera! I want to book a Free Demo on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Demo</span>
            </a>

            <Link to="/contact">
              <Button variant="hero" size="default" className="text-xs h-10 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl">
                Free Consultancy
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-900 border-t border-slate-200 shadow-xl">
          <div className="container mx-auto px-4 py-5 space-y-2.5">
            <Link
              to="/"
              className="block py-2 text-sm font-bold text-slate-900 hover:text-cyan-700"
            >
              Home
            </Link>

            {/* Products Mobile Section */}
            <div className="py-2 border-y border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
                <span>Our Products</span>
                <Link to="/products" className="text-cyan-700 font-bold text-xs">View All →</Link>
              </div>
              <Link
                to="/products/civilflow"
                className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100"
              >
                <img src={civilflowLogo} alt="CivilFlow" className="w-7 h-7 object-contain" />
                <div>
                  <p className="text-xs font-bold text-slate-900">CivilFlow</p>
                  <p className="text-[11px] text-slate-500">Construction & Labour Management</p>
                </div>
              </Link>
              <Link
                to="/products/onecrm"
                className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100"
              >
                <img src={onecrmLogo} alt="OneCRM AI" className="w-7 h-7 object-cover rounded" />
                <div>
                  <p className="text-xs font-bold text-slate-900">OneCRM AI</p>
                  <p className="text-[11px] text-slate-500">End-to-End AI CRM & Leads</p>
                </div>
              </Link>
            </div>

            <Link
              to="/services"
              className="block py-2 text-sm font-bold text-slate-900 hover:text-cyan-700"
            >
              Specialized Services
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-bold text-slate-900 hover:text-cyan-700"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-sm font-bold text-slate-900 hover:text-cyan-700"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-bold text-slate-900 hover:text-cyan-700"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={getWhatsAppUrl("Hi Infotera! I want to book a Free Demo on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Free Demo on WhatsApp</span>
              </a>
              <Link to="/contact" className="block">
                <Button variant="hero" size="lg" className="w-full text-xs bg-slate-900 hover:bg-slate-800 text-white">
                  Get Free Consultancy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
