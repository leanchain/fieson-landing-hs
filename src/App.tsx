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
import HsDemoVoice from "./pages/HsDemoVoice";
import HsDemoChat from "./pages/HsDemoChat";
import HsDemoForm from "./pages/HsDemoForm";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Manually send page_view event to GA4 on route change
    if (window.gtag) {
      window.gtag("event", "page_view", {
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
        disableStyles={true}
        containerClasses="fixed bottom-0 left-0 right-0 flex items-center justify-between p-2 bg-gray-800 text-white text-sm z-50"
        contentClasses="flex-grow text-sm mr-4"
        buttonClasses="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-xs whitespace-nowrap"
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span className="text-xs">
          By continuing to use this site, you agree to our use of cookies. Read
          our{" "}
          <a
            href="/privacy/terms-europe"
            className="text-white underline"
          >
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
