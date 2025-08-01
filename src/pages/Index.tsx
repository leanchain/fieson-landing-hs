import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import ConversionSection from "@/components/ConversionSection";
import LeadGenSection from "@/components/LeadGenSection";
import DemoCallsSection from "@/components/DemoCallsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <CompanyLogos />
        <UseCases />
        <HowItWorks />
        <ConversionSection />
        <LeadGenSection />
        <DemoCallsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
