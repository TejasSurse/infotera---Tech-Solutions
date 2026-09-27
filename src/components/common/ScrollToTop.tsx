import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/api";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Reset scroll position on route changes
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Automatically track user engagement & pageview in backend
    if (!pathname.startsWith("/admin")) {
      trackEvent(pathname, "pageview");
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
