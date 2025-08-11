import { Button } from "@/components/ui/button";
import { Mic, Clock, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import { Phone } from "lucide-react";
import { toast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-image.jpg";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInitiateCall = async () => {
    const validationResult = validatePhoneNumber(phoneNumber);

    if (!validationResult.isValid) {
      toast({
        title: "Validation Error",
        description: validationResult.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/initiate-call`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail?.error || "Failed to initiate call");
      }

      const result = await response.json();
      console.log("Call initiated successfully:", result);
      toast({
        title: "Call Initiated",
        description: "Fieson AI is calling your number now!",
      });
    } catch (error) {
      console.error("Error initiating call:", error);
      toast({
        title: "Call Failed",
        description: error.message || "There was an error initiating the call.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validatePhoneNumber = (phone: string | undefined) => {
    if (!phone) return { isValid: false, message: "Phone number is required." };

    if (!isValidPhoneNumber(phone)) {
      return { isValid: false, message: "Please enter a valid phone number." };
    }

    return { isValid: true, message: "Valid phone number" };
  };

  const validation = validatePhoneNumber(phoneNumber);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-accent/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                AI Phone System for Home Services
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Every burst-pipe call booked{" "}
              <span className="text-accent">before your rival answers.</span>
            </h1>

            {/* CTA Section */}
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="space-y-4">
                <div className="relative">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    defaultCountry="US"
                    className={cn(
                      "flex h-14 w-full rounded-xl border-2 bg-background px-12 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      validation.isValid === false && phoneNumber !== ""
                        ? "border-red-500 focus:border-blue-accent"
                        : "border-blue-accent/30 focus:border-blue-accent"
                    )}
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                {validation.isValid === false && phoneNumber !== "" && (
                  <p className={`text-sm text-red-500`}>{validation.message}</p>
                )}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full h-14 text-lg font-semibold"
                  onClick={handleInitiateCall}
                  disabled={isLoading}
                >
                  {isLoading ? "Calling..." : "Talk With Fieson AI"}
                </Button>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-xs text-muted-foreground mt-2">
                  By calling, you confirm that you have read our{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs underline text-blue-accent"
                  >
                    Contact Terms
                  </Button>{" "}
                  and our{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs underline text-blue-accent"
                  >
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

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/50">
          <div className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">Instant Pickup</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI answers 100% of calls, day or night. No more missed emergency
              calls.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">+15-25% Jobs Booked</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pay only €3 per booked job during pilot. Zero fixed costs.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium smooth-transition group">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
              <Shield className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-3">Owner Freedom</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get your nights and weekends back. 30-minute setup, no apps, no
              hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
