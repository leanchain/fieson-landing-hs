import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import useAnalytics from "@/hooks/use-analytics";
import useBookDemo from "@/hooks/use-book-demo";

const Pricing = () => {
  const [minutes, setMinutes] = useState([500]);
  const [calculatedCost, setCalculatedCost] = useState(500 * 0.15); // Initial cost for 500 minutes
  const { trackEvent } = useAnalytics();
  const { handleBookDemoClick } = useBookDemo({ label: "Pricing Page - Book a Demo Button" });

  const handleMinutesChange = (newMinutes: number[]) => {
    setMinutes(newMinutes);
    setCalculatedCost(newMinutes[0] * 0.15);
    trackEvent({
      action: "slider_change",
      category: "Pricing Calculator",
      label: `Minutes: ${newMinutes[0]}`, 
      value: newMinutes[0],
    });
  };
  const [activeTab, setActiveTab] = useState("General");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const minuteOptions = [50, 500, 1000, 1500, 2000, 2500, 3500, 4000, 5000, 6000, 7000, 8000, 9000, 13500, 18000, 22500, 27000];

  const plans = [
    {
      name: "Free Trial",
      subtitle: "Experience Fieson AI with no commitment.",
      price: "Free",
      popular: false,
      features: [
        "Limited minutes",
        "Single user",
        "Basic features",
        "No credit card required"
      ]
    },
    {
      name: "Launch",
      subtitle: "Fill extra spots by answering any after hours phone calls.",
      price: 250,
      popular: true,
      features: [
        "Includes 500 minutes",
        "Up to 5 users", 
        "1 location included",
        "Customize your AI",
        "Pro scheduling (ServiceTitan etc)"
      ]
    },
    {
      name: "Scale",
      subtitle: "Scale faster by answering 100% of phone calls",
      price: 500,
      popular: false,
      features: [
        "All Launch features, plus:",
        "Includes 1000 minutes",
        "Unlimited users",
        "Unlimited locations",
        "Voice cloning",
        "Pro scheduling (ServiceTitan etc)"
      ]
    }
  ];

  const enterprisePlan = { 
    name: "Enterprise", 
    subtitle: "For large organizations requiring tailored solutions and extensive support.",
    price: "Custom",
    popular: false,
    features: [
      "All Scale features, plus:",
      "Multilingual voices",
      "Advanced data analytics", 
      "Hands on training/support",
      "API access",
      "Custom integrations"
    ]
  };

  const faqTabs = ["General", "Features", "Integration", "Other"];

  const handleFaqTabClick = (tab: string) => {
    setActiveTab(tab);
    trackEvent({
      action: "tab_click",
      category: "Pricing FAQ",
      label: `FAQ Tab: ${tab}`,
    });
  };

  const handleFaqToggle = (faqId: string, question: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
    trackEvent({
      action: "accordion_toggle",
      category: "Pricing FAQ",
      label: `FAQ: ${question} - ${expandedFaq === faqId ? "Collapsed" : "Expanded"}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Fieson AI Pricing - Transparent AI Answering Service Costs"
        description="Explore Fieson AI's transparent pricing for AI answering services. No contracts, no hidden fees, just straightforward costs tailored for your home service business."
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-muted-foreground font-medium mb-4">Pricing</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                AI CSR's that work as hard as you do
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Enjoy straightforward AI answering service costs tailored for your home service business 
                with clear pricing, no contracts, and zero surprise fees.
              </p>
            </div>

            {/* Minutes Selector */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-large">
                <div className="text-center mb-8">
                  <p className="text-lg font-medium text-foreground mb-6">
                    Estimate your monthly cost based on minutes used
                  </p>
                  
                  <div className="mb-8">
                    <div className="text-3xl font-bold text-foreground mb-4">
                      <span className="text-accent">{minutes[0]}</span> minutes per month
                    </div>
                    <div className="text-2xl font-bold text-muted-foreground mb-4">
                      Estimated Cost: <span className="text-accent">€{calculatedCost.toFixed(2)}</span>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                      <Slider
                        value={minutes}
                        onValueChange={handleMinutesChange}
                        max={27000}
                        min={50}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>50</span>
                        <span>27000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 relative ${
                    plan.popular ? 'border-accent shadow-large scale-105' : 'shadow-medium'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.subtitle}</p>

                    <div className="mb-6">
                      <div className="text-4xl font-bold text-foreground">
                        {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                        {typeof plan.price === 'number' && (
                          <span className="text-lg font-normal text-muted-foreground">per month</span>
                        )}
                        {typeof plan.price === 'string' && plan.price === 'Custom' && (
                          <span className="text-lg font-normal text-muted-foreground">per month</span>
                        )}
                      </div>
                    </div>

                    <Button
                      variant={plan.popular ? "accent" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        handleBookDemoClick();
                        trackEvent({
                          action: "button_click",
                          category: "Pricing Plan",
                          label: `${plan.name} - ${plan.name === "Free Trial" ? "Start Free Trial" : "Get Started"}`,
                        });
                      }}
                    >
                      {plan.name === "Free Trial" ? "Start Free Trial" : "Get started"}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      {plan.name === "Free Trial" ? "Includes:" :
                       plan.name === "Launch" ? "Plus these amazing features:" :
                       "Everything in Launch Plus:"}
                    </p>

                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Enterprise Plan Section */}
            <div className="text-center mt-12">
              <Card className="p-8 shadow-medium max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-2">{enterprisePlan.name}</h3>
                <p className="text-muted-foreground mb-6">{enterprisePlan.subtitle}</p>
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">Pricing:</span>
                  <div className="text-3xl font-bold text-foreground">
                    {enterprisePlan.price}
                    <span className="text-base font-normal text-muted-foreground">per month</span>
                  </div>
                </div>
                <Button variant="accent" size="lg" className="w-full" onClick={() => {
                  handleBookDemoClick();
                  trackEvent({
                    action: "button_click",
                    category: "Pricing Plan",
                    label: "Contact Sales for Enterprise",
                  });
                }}>
                  Contact Sales for Enterprise
                </Button>
                <div className="space-y-2 mt-6 text-sm text-muted-foreground">
                  <p className="font-medium">Includes:</p>
                  {enterprisePlan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Need assistance?{" "}
                <Button variant="link" className="p-0 h-auto font-semibold" onClick={() => {
                  handleBookDemoClick();
                  trackEvent({
                    action: "link_click",
                    category: "Pricing Page",
                    label: "Contact Sales Link (Need Assistance)",
                  });
                }}>
                  Contact Sales
                </Button>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-muted-foreground font-medium mb-4">FAQs</p>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Common Questions for Home Service Professionals
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about Fieson AI.
                </p>
              </div>

              {/* FAQ Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {faqTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleFaqTabClick(tab)}
                    className={`px-6 py-3 rounded-lg font-medium smooth-transition ${
                      activeTab === tab
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* FAQ Content */}
              <div className="space-y-4">
                {faqs[activeTab as keyof typeof faqs]?.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => handleFaqToggle(faq.id, faq.question)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 smooth-transition"
                    >
                      <span className="font-semibold text-foreground">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Are you looking to partner with or resell Fieson AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us to discuss partnership and reseller opportunities.
              </p>
              <Button variant="accent" size="lg" onClick={() => {
                handleBookDemoClick();
                trackEvent({
                  action: "button_click",
                  category: "Pricing Page",
                  label: "Partnership Contact Us Button",
                });
              }}>
                contact us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
