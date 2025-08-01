import { Card } from "@/components/ui/card";
import { Calendar, Phone, MessageSquare, Star, CheckCircle, Clock } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Call Received",
      description: "Customer calls about emergency leak. Fieson AI answers instantly and identifies the urgency.",
      icon: Phone,
      type: "inbound"
    },
    {
      title: "Smart Booking", 
      description: "AI checks your calendar and books the next available slot. Customer gets instant confirmation.",
      icon: Calendar,
      type: "ai-powered"
    },
    {
      title: "Job Completed",
      description: "Your tech fixes the issue. Fieson follows up to ensure satisfaction and requests reviews.",
      icon: CheckCircle,
      type: "service-update"
    }
  ];

  const getStepColor = (type: string) => {
    switch (type) {
      case "inbound":
        return "border-blue-accent bg-blue-accent/10";
      case "capacity":
        return "border-accent bg-accent/10";
      case "ai-powered":
        return "border-primary bg-primary/10";
      case "service-update":
        return "border-orange-500 bg-orange-500/10";
      default:
        return "border-muted bg-muted/50";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Power your Inbound, Outbound calls, text, & email with AI.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Step Card */}
                <Card className={`p-6 text-center ${getStepColor(step.type)}`}>
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary mx-auto" />
                  </div>
                  <h4 className="font-bold text-foreground mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 text-border">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;