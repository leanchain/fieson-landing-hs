import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Users } from "lucide-react";

const ConversionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-500 font-semibold uppercase tracking-wide mb-4">Convert every opportunity</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI-powered system intelligently handles every incoming call, ensuring you never miss a critical opportunity. It automatically triages emergency calls, instantly books appointments based on real-time availability, and operates 24/7. Say goodbye to lost revenue from after-hours emergencies like burst pipes or boiler breakdowns.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              46% of plumbing/HVAC phone leads become paid jobs — if you answer in &lt;30s. After-hours emergencies spike 35% post-18:00; most shops miss them.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Intelligent emergency call detection & prioritization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Seamless real-time calendar integration & booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Automated notifications for customers & technicians</span>
              </div>
            </div>
            
            <Button variant="accent" size="lg">
              Start Converting More Leads →
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