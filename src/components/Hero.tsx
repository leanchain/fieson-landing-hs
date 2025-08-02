import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Clock, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    if (!phone) return { isValid: false, message: "" };
    
    // International phone number regex: starts with +, followed by 1-3 digits for country code, then 4-14 digits
    const phoneRegex = /^\+[1-9]\d{0,3}\d{4,14}$/;
    
    if (!phone.startsWith('+')) {
      return { isValid: false, message: "Phone number must start with country code (e.g. +49)" };
    }
    
    if (!/^\+[\d\s-()]+$/.test(phone.replace(/\s/g, ''))) {
      return { isValid: false, message: "Phone number contains invalid characters" };
    }
    
    const cleanPhone = phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return { isValid: false, message: "Please enter a valid international phone number" };
    }
    
    return { isValid: true, message: "Valid phone number" };
  };

  const validation = validatePhoneNumber(phoneNumber);
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-accent/5" />
      
      <div className="container mx-auto px-24 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                AI Phone System for Plumbing & Heating (SHK)
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Every burst-pipe call booked{" "}
              <span className="text-accent">before your rival answers.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              46% of plumbing/HVAC phone leads become paid jobs — if you answer in &lt;30s. 
              After-hours emergencies spike 35% post-18:00; most shops miss them.
            </p>

            {/* CTA Section */}
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="space-y-4">
                <Input 
                  placeholder="Enter phone number" 
                  className={`w-full h-14 text-lg rounded-xl border-2 focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    showValidation 
                      ? validation.isValid 
                        ? 'border-green-500 focus:border-blue-accent' 
                        : 'border-red-500 focus:border-blue-accent'
                      : 'border-blue-accent/30 focus:border-blue-accent'
                  }`}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setShowValidation(e.target.value.length > 0);
                  }}
                />
                {showValidation && validation.message && (
                  <p className={`text-sm ${validation.isValid ? 'text-green-600' : 'text-red-500'}`}>
                    {validation.message}
                  </p>
                )}
                <Button variant="hero" size="xl" className="w-full h-14 text-lg font-semibold">
                  <span>Talk With Fieson AI</span>
                </Button>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-xs text-muted-foreground mt-2">
                  By calling, you confirm that you have read our{" "}
                  <Button variant="link" className="p-0 h-auto text-xs underline text-blue-accent">
                    Contact Terms
                  </Button>
                  {" "}and our{" "}
                  <Button variant="link" className="p-0 h-auto text-xs underline text-blue-accent">
                    Privacy Policy
                  </Button>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img src={heroImage} alt="AI Phone Answering Service" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-accent rounded-full opacity-60 animate-pulse delay-1000" />
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/50">
          <div className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">Instant Pickup</h3>
            <p className="text-muted-foreground leading-relaxed">AI answers 100% of calls, day or night. No more missed emergency calls.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">+15-25% Jobs Booked</h3>
            <p className="text-muted-foreground leading-relaxed">Pay only €3 per booked job during pilot. Zero fixed costs.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <Shield className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">Owner Freedom</h3>
            <p className="text-muted-foreground leading-relaxed">Get your nights and weekends back. 30-minute setup, no apps, no hardware.</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="currentColor" className="text-background" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>;
};
export default Hero;