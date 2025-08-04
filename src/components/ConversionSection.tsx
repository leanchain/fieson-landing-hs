import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Users } from "lucide-react";

const ConversionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Convert every opportunity
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Turn every emergency call into booked revenue with smart triage, 
              instant calendar booking, and 24/7 availability. Never lose another 
              after-hours burst pipe or boiler breakdown.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Smart emergency detection and prioritization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Real-time calendar integration and booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Automated customer and tech notifications</span>
              </div>
            </div>
            
            <Button variant="accent" size="lg">
              Convert more leads →
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <Card className="p-8 shadow-large bg-gradient-to-br from-card to-muted/20">
              <div className="space-y-6">
                {/* Incoming Call */}
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <div>
                      <div className="font-semibold text-foreground">Emergency Call</div>
                      <div className="text-sm text-muted-foreground">Burst pipe - Kitchen flooding</div>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>

                {/* Processing */}
                <div className="flex items-center space-x-3 p-4 bg-blue-accent/10 rounded-lg">
                  <div className="w-10 h-10 bg-blue-accent rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">AI Processing</div>
                    <div className="text-sm text-muted-foreground">Triaging urgency, checking availability...</div>
                  </div>
                </div>

                {/* Booking */}
                <div className="flex items-center space-x-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Booked!</div>
                    <div className="text-sm text-muted-foreground">Today 2:30 PM - Emergency slot secured</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-accent">15s</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;