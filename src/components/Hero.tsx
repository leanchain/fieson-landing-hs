import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                AI Phone Answering System for Home Services
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI that books{" "}
              <span className="text-accent">90% of jobs.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Sameday's industry-leading AI CSRs will answer the phone, respond to texts, emails, and book jobs — just like your best salesperson.
            </p>

            {/* CTA Section */}
            <div className="space-y-6">
              {/* AI Call Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <Mic className="w-5 h-5 mr-3 group-hover:scale-110 smooth-transition" />
                  <span>TALK WITH SAMEDAY AI</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
                
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-2">AI will call you right away</p>
                  <div className="flex items-center space-x-2">
                    <Input 
                      placeholder="Enter your phone number"
                      className="max-w-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Alternative CTA */}
              <div className="text-center lg:text-left">
                <p className="text-muted-foreground inline">
                  Or simply{" "}
                  <Button variant="link" className="p-0 h-auto text-base font-semibold underline">
                    book a demo
                  </Button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="AI Phone Answering Service"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-accent rounded-full opacity-60 animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-background"
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;