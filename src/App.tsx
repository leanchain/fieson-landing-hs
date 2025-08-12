import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import IndustryPage from "./pages/IndustryPage";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import MarkdownPage from "./pages/MarkdownPage";
import Integrations from "./pages/Integrations";
import About from "./pages/About";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Manually send page_view event to GA4 on route change
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>
          By continuing to use this site, you agree to our use of cookies. Read our{" "}
          <a href="/terms-europe" style={{ color: "#fff", textDecoration: "underline" }}>
            Cookie Policy
          </a>
          .
        </span>
      </CookieConsent>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
