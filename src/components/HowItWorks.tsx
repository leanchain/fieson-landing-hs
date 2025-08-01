import { Card } from "@/components/ui/card";
import { Calendar, Phone, MessageSquare, Star, CheckCircle, Clock } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      day: "Day 1",
      time: "Monday (AM)",
      steps: [
        {
          title: "Inbound Call",
          time: "11:23 AM • 4m 12s",
          description: "Customer Sarah Johnson called about an HVAC issue. AI detected service request for AC repair and collected relevant details.",
          status: "Call completed successfully",
          icon: Phone,
          type: "inbound"
        },
        {
          title: "ST Check",
          time: "11:28 AM • Automated",
          description: "AI checked technician availability in ServiceTitan and found 3 possible time slots in customer's area.",
          status: "Available Techs: 3",
          icon: CheckCircle,
          type: "capacity"
        },
        {
          title: "Appt Booked",
          time: "11:32 AM • Confirmed",
          description: "Booked appointment for tomorrow at 2:00 PM. AI created service ticket #45982 in ServiceTitan with all customer details.",
          status: "AI determined appointment priority based on customer description and weather forecast.",
          icon: Calendar,
          type: "ai-powered"
        },
        {
          title: "SMS Confirm",
          time: "11:35 AM • Automated",
          description: "Sent appointment confirmation to (555) 123-4567 with technician details, estimated arrival window, and preparation instructions.",
          status: "Message delivered",
          icon: MessageSquare,
          type: "ai-powered"
        }
      ]
    },
    {
      day: "Day 2",
      time: "Tuesday",
      steps: [
        {
          title: "Reminder",
          time: "10:00 AM • Automated",
          description: "Sent service reminder with technician ETA and tracking link. Customer replied 'Thanks' confirming availability.",
          status: "Customer confirmed",
          icon: Clock,
          type: "ai-powered"
        },
        {
          title: "Service Done",
          time: "3:45 PM • Updated in ST",
          description: "Technician marked job complete in ServiceTitan. Replaced faulty capacitor and performed system maintenance. Invoice generated.",
          status: "Service Duration: 1h 15m • Invoice Amount: $328.50",
          icon: CheckCircle,
          type: "service-update"
        }
      ]
    },
    {
      day: "Day 3",
      time: "Wednesday",
      steps: [
        {
          title: "Happy Call",
          time: "11:15 AM • 2m 30s",
          description: "AI made outbound call to check satisfaction. Customer reported system working perfectly and appreciated fast service.",
          status: "Customer satisfied",
          icon: Phone,
          type: "ai-powered"
        },
        {
          title: "Review Ask",
          time: "11:18 AM • Automated",
          description: "Sent SMS with Google review link following positive satisfaction call. Included personalized thank you message.",
          status: "Awaiting response",
          icon: MessageSquare,
          type: "ai-powered"
        }
      ]
    },
    {
      day: "Day 5",
      time: "Friday",
      steps: [
        {
          title: "5★ Review",
          time: "2:22 PM • Google",
          description: "Customer left 5-star review on Google. AI flagged positive mention of technician John for manager recognition.",
          status: "Rating: ★★★★★",
          icon: Star,
          type: "ai-powered"
        }
      ]
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

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((dayGroup, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center mb-8">
                  <div className="hidden md:block absolute left-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center -ml-4">
                    <span className="text-accent-foreground text-xs font-bold">{dayIndex + 1}</span>
                  </div>
                  <div className="md:ml-12">
                    <h3 className="text-xl font-bold text-foreground">{dayGroup.day}</h3>
                    <p className="text-muted-foreground">{dayGroup.time}</p>
                  </div>
                </div>

                {/* Day Steps */}
                <div className="md:ml-12 space-y-6">
                  {dayGroup.steps.map((step, stepIndex) => {
                    const Icon = step.icon;
                    return (
                      <Card key={stepIndex} className={`p-6 ${getStepColor(step.type)} border-l-4`}>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-background rounded-lg shadow-soft">
                            <Icon className="w-5 h-5 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-foreground">{step.title}</h4>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                            <p className="text-muted-foreground mb-3">{step.description}</p>
                            <div className="text-sm font-medium text-accent">{step.status}</div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Completion Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>Cycle Complete - 5 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;