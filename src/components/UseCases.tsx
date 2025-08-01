import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, DollarSign, Users } from "lucide-react";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("dispatcher");

  const useCases = [
    {
      id: "dispatcher",
      name: "AI DISPATCHER",
      icon: Phone,
      title: "AI Dispatcher",
      description: "Efficiently prioritize high-value jobs, manage capacity, assign tags, and ensure data accuracy with Sameday's AI Dispatcher.",
      features: ["Job prioritization", "Capacity management", "Tag assignment", "Data accuracy"],
    },
    {
      id: "csr",
      name: "AI CSR",
      icon: MessageSquare,
      title: "AI CSR",
      description: "Easily handle customer inquiries, billing, rescheduling, follow-ups, and reminders with Sameday's AI CSR.",
      features: ["Customer inquiries", "Billing support", "Rescheduling", "Follow-ups"],
    },
    {
      id: "sales",
      name: "AI Sales",
      icon: DollarSign,
      title: "AI Salesperson",
      description: "Sell Memberships, Negotiate Payment Plans, Upsell Packages at Any Hour of the Day with Sameday's AI Sales Agent",
      features: ["Membership sales", "Payment plans", "Upselling", "24/7 availability"],
    },
    {
      id: "receptionist",
      name: "AI Receptionist",
      icon: Users,
      title: "AI Receptionist",
      description: "Sameday's AI answering service will speak with customers and book appointments — just like your best salesperson.",
      features: ["Appointment booking", "Customer service", "Call routing", "Professional communication"],
    },
  ];

  const activeUseCase = useCases.find((useCase) => useCase.id === activeTab);

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">USE CASES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Instantly scale your entire contact center.
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold smooth-transition ${
                  activeTab === useCase.id
                    ? "bg-accent text-accent-foreground shadow-medium"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{useCase.name}</span>
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
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="accent" size="lg">
                Book a demo
              </Button>
            </div>

            <div>
              <Card className="p-8 shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                        <span className="text-accent-foreground font-bold text-sm">S</span>
                      </div>
                      <span className="font-semibold">Sameday AI</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Live</div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">Job #88321</div>
                    <div className="text-xs text-muted-foreground mb-3">Scheduled</div>
                    <div className="text-sm">Part Install - Follow Up</div>
                    <div className="text-sm font-medium">Jessi Studabaker</div>
                    <div className="text-xs text-muted-foreground">
                      1488 Washington Blvd, Lincoln, NE 68336
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status: Member</span>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
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