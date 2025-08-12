import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
          By continuing to use this site, you agree to our use of cookies.
        </span>
      </CookieConsent>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryName" element={<IndustryPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/terms-europe" element={<MarkdownPage filename="terms-europe" />} />
          <Route path="/markdown/:filename" element={<MarkdownPage />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
