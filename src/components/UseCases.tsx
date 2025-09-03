import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, Euro, Users, Check } from "lucide-react";
import FiesonLogo from "@/components/FiesonLogo";
import useAnalytics from "@/hooks/use-analytics";
import useBookDemo from "@/hooks/use-book-demo";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("dispatcher");
  const { trackEvent } = useAnalytics();
  const { handleBookDemoClick } = useBookDemo({ label: `Use Cases - Book a Demo Button (${activeTab})` });

  const useCases = [
    {
      id: "dispatcher",
      name: "AI DISPATCHER",
      icon: Phone,
      title: "AI Dispatcher",
      description:
        "Efficiently prioritize high-value jobs, manage capacity, assign tags, and ensure data accuracy with Fieson AI's AI Dispatcher.",
      features: [
        "Job prioritization",
        "Capacity management",
        "Tag assignment",
        "Data accuracy",
      ],
    },
    {
      id: "csr",
      name: "AI CSR",
      icon: MessageSquare,
      title: "AI CSR",
      description:
        "Easily handle customer inquiries, billing, rescheduling, follow-ups, and reminders with Fieson AI's AI CSR.",
      features: [
        "Customer inquiries",
        "Billing support",
        "Rescheduling",
        "Follow-ups",
      ],
    },
    {
      id: "sales",
      name: "AI Sales",
      icon: Euro,
      title: "AI Salesperson",
      description:
        "Sell Memberships, Negotiate Payment Plans, Upsell Packages at Any Hour of the Day with Fieson AI's AI Sales Agent",
      features: [
        "Membership sales",
        "Payment plans",
        "Upselling",
        "24/7 availability",
      ],
    },
    {
      id: "receptionist",
      name: "AI Receptionist",
      icon: Users,
      title: "AI Receptionist",
      description:
        "Fieson AI's AI answering service will speak with customers and book appointments — just like your best salesperson.",
      features: [
        "Appointment booking",
        "Customer service",
        "Call routing",
        "Professional communication",
      ],
    },
  ];

  const activeUseCase = useCases.find((useCase) => useCase.id === activeTab);

  const handleTabClick = (tabId: string, tabName: string) => {
    setActiveTab(tabId);
    trackEvent({
      action: "tab_click",
      category: "Use Cases Section",
      label: `Tab: ${tabName}`,
    });
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-4">
            USE CASES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Instantly scale your entire contact center.
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <button
                key={useCase.id}
                onClick={() => handleTabClick(useCase.id, useCase.name)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium smooth-transition transition-all duration-300 hover:scale-105 rounded-full ${
                  activeTab === useCase.id
                    ? "bg-black text-white shadow-medium"
                    : "border border-black bg-transparent text-black hover:bg-black/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{useCase.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeUseCase && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {activeUseCase.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {activeUseCase.description}
              </p>

              <div className="space-y-3 mb-8">
                {activeUseCase.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="accent"
                size="lg"
                onClick={handleBookDemoClick}
              >
                Book a demo
              </Button>
            </div>

            <div>
              <Card className="p-8 shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <FiesonLogo />
                      </div>
                      <span className="font-semibold">Fieson AI</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Live</div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">Job #88321</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Scheduled
                    </div>
                    <div className="text-sm">Part Install - Follow Up</div>
                    <div className="text-sm font-medium">Jessi Studabaker</div>
                    <div className="text-xs text-muted-foreground">
                      1488 Washington Blvd, Lincoln, NE 68336
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status: Member</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCases;
