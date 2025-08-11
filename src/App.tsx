import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Roofing from "./pages/Roofing";
import HVAC from "./pages/HVAC";
import Plumbing from "./pages/Plumbing";
import Electrical from "./pages/Electrical";
import Landscaping from "./pages/Landscaping";
import PestControl from "./pages/PestControl";
import Solar from "./pages/Solar";
import WindowCleaning from "./pages/WindowCleaning";
import CommercialCleaning from "./pages/CommercialCleaning";
import NotFound from "./pages/NotFound";
import MarkdownPage from "./pages/MarkdownPage";

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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/roofing" element={<Roofing />} />
          <Route path="/industries/hvac" element={<HVAC />} />
          <Route path="/industries/plumbing" element={<Plumbing />} />
          <Route path="/industries/electrical" element={<Electrical />} />
          <Route path="/industries/landscaping" element={<Landscaping />} />
          <Route path="/industries/pest-control" element={<PestControl />} />
          <Route path="/industries/solar" element={<Solar />} />
          <Route path="/industries/window-cleaning" element={<WindowCleaning />} />
          <Route path="/industries/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms-europe" element={<MarkdownPage filename="terms-europe" />} />
          <Route path="/markdown/:filename" element={<MarkdownPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
