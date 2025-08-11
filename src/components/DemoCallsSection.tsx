import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Wrench, Droplets, Flame, Thermometer, Zap } from "lucide-react";

const DemoCallsSection = () => {
  const [playingCall, setPlayingCall] = useState<string | null>(null);

  const demoCalls = [
    {
      id: "emergency-leak",
      title: "Emergency Leak",
      icon: Droplets,
      iconColor: "text-blue-500",
      iconBg: "bg-transparent",
      description: "Burst pipe in kitchen - urgent response needed",
      duration: "1:45",
      scenario: "Customer has water flooding from under sink",
      outcome: "Emergency slot booked within 2 hours"
    },
    {
      id: "boiler-repair",
      title: "Boiler Breakdown",
      icon: Flame,
      iconColor: "text-blue-500",
      iconBg: "bg-transparent",
      description: "No heating or hot water - winter emergency",
      duration: "2:12",
      scenario: "Elderly customer with no heat in cold weather",
      outcome: "Same-day emergency repair scheduled"
    },
    {
      id: "routine-service",
      title: "Annual Service",
      icon: Wrench,
      iconColor: "text-blue-500",
      iconBg: "bg-transparent",
      description: "Regular maintenance appointment booking",
      duration: "1:23",
      scenario: "Commercial client scheduling routine check",
      outcome: "Recurring maintenance contract renewed"
    },
    {
      id: "hvac-install",
      title: "HVAC Installation",
      icon: Thermometer,
      iconColor: "text-blue-500",
      iconBg: "bg-transparent",
      description: "New system quote and installation planning",
      duration: "3:01",
      scenario: "New construction project requiring quote",
      outcome: "€15,000 installation project secured"
    },
    {
      id: "electrical-emergency",
      title: "Electrical Issue",
      icon: Zap,
      iconColor: "text-blue-500",
      iconBg: "bg-transparent",
      description: "Power outage and electrical safety concern",
      duration: "1:58",
      scenario: "Restaurant losing power during service",
      outcome: "Emergency electrician dispatched immediately"
    }
  ];

  const togglePlay = (callId: string) => {
    if (playingCall === callId) {
      setPlayingCall(null);
    } else {
      setPlayingCall(callId);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-4">REAL AI CONVERSATIONS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hear Fieson AI in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Listen to actual AI conversations handling different home service scenarios. 
            Each call demonstrates professional communication and successful booking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {demoCalls.map((call) => {
            const Icon = call.icon;
            const isPlaying = playingCall === call.id;
            
            return (
              <Card key={call.id} className="p-6 hover:shadow-medium smooth-transition group cursor-pointer">
                <div className="space-y-4">
                  {/* Icon and Play Button */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${call.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${call.iconColor}`} />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePlay(call.id)}
                      className={`w-10 h-10 rounded-full p-0 ${
                        isPlaying ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </Button>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{call.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {call.description}
                    </p>
                    <div className="text-xs text-muted-foreground font-medium">
                      Duration: {call.duration}
                    </div>
                  </div>

                  {/* Progress Bar (when playing) */}
                  {isPlaying && (
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-1">
                        <div className="bg-accent h-1 rounded-full animate-pulse" style={{width: '45%'}} />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Playing... {call.scenario}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div className="pt-3 border-t border-border">
                    <div className="text-xs font-medium text-green-600">
                      ✓ {call.outcome}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}>
            Try Fieson AI Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoCallsSection;
