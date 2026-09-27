import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles, Send, CheckCircle2 } from "lucide-react";

export const WHATSAPP_NUMBER = "919322915022";

export const getWhatsAppUrl = (message?: string) => {
  const defaultMsg =
    "Hello Infotera Team! 👋 I'm interested in booking a Free Demo / Consultancy for your software products.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickOption, setQuickOption] = useState("CivilFlow Demo");

  const quickMessages: Record<string, string> = {
    "CivilFlow Demo":
      "Hi Infotera Team! 🏗️ I want to book a Free Live Demo of CivilFlow for my construction projects & labour management.",
    "OneCRM AI":
      "Hi Infotera Team! ⚡ I'm interested in OneCRM AI for automated lead tracking and customer operations.",
    "Free Consultancy":
      "Hello! 💡 I would like to get 100% Free Tech Consultancy for my business software requirements.",
  };

  const handleSend = () => {
    const msg = quickMessages[quickOption] || quickMessages["CivilFlow Demo"];
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-border p-5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                    Infotera Tech Desk
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Typically replies in 5 minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close WhatsApp widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="py-4 space-y-3">
              <div className="bg-muted/60 p-3 rounded-xl text-xs text-muted-foreground leading-relaxed">
                👋 <strong>Welcome to Infotera!</strong> How can we help power your business today? Select an option or chat directly on WhatsApp.
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Select your requirement:</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {Object.keys(quickMessages).map((key) => (
                    <button
                      key={key}
                      onClick={() => setQuickOption(key)}
                      className={`text-left text-xs px-3 py-2 rounded-lg border transition-all flex items-center justify-between ${
                        quickOption === key
                          ? "bg-[#25D366]/10 border-[#25D366] text-emerald-700 font-semibold"
                          : "border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      <span>{key}</span>
                      {quickOption === key && <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <button
              onClick={handleSend}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <div className="relative group">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-slate-900 text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold whitespace-nowrap pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping inline-block"></span>
            Book Free Demo on WhatsApp
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Open WhatsApp Support"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white text-[9px] font-bold text-white items-center justify-center">
                  1
                </span>
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
