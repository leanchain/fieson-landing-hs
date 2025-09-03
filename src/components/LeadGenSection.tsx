import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Calendar, Star } from "lucide-react";
import useAnalytics from "@/hooks/use-analytics";

const LeadGenSection = () => {
  const { trackEvent } = useAnalytics();

  const handleRecoverLeadsClick = () => {
    trackEvent({
      action: "button_click",
      category: "Lead Generation Section",
      label: "Recover Lost Leads Button",
    });
    // Add any navigation or other actions here if applicable
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative">
            <Card className="p-8 shadow-large bg-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Lead Pipeline</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>

                {/* Lead Items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-accent" />
                      <div>
                        <div className="font-medium text-sm">Boiler service call</div>
                        <div className="text-xs text-muted-foreground">Mrs. Johnson - Recurring customer</div>
                      </div>
                    </div>
                    <div className="text-xs text-medium text-green-600">€180</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      <div>
                        <div className="font-medium text-sm">Emergency repair</div>
                        <div className="text-xs text-muted-foreground">New customer - High priority</div>
                      </div>
                    </div>
                    <div className="text-xs text-medium text-accent">€340</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-blue-accent" />
                      <div>
                        <div className="font-medium text-sm">System installation</div>
                        <div className="text-xs text-muted-foreground">Commercial project quote</div>
                      </div>
                    </div>
                    <div className="text-xs text-medium text-blue-accent">€2,400</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Today's pipeline</span>
                    <span className="text-lg font-bold text-foreground">€2,920</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Generate the next lead
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Missed-call rescue technology automatically dials back unanswered 
              numbers after 5 minutes, recovering ~30% of lost work. Turn every 
              missed opportunity into revenue.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Automatic missed-call recovery system</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Smart follow-up scheduling and reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground">Lead qualification and priority scoring</span>
              </div>
            </div>
            
            <Button variant="blue" size="lg" onClick={handleRecoverLeadsClick}>
              Recover lost leads →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenSection;