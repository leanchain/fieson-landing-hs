import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Clock, TrendingUp, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-image.jpg";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles"; // Note: This is the correct import for styles

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPhoneInputFocused, setIsPhoneInputFocused] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [callActive, setCallActive] = useState(false);
  const callDurationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [regionCode, setRegionCode] = useState<string | undefined>("US"); // State to store region code

  useEffect(() => {
    const handleFocusPhoneInput = () => {
      const inputElement = document.querySelector(".iti-input-custom");
      if (inputElement instanceof HTMLElement) {
        inputElement.focus();
      }
    };

    window.addEventListener("focusPhoneInput", handleFocusPhoneInput);

    return () => {
      window.removeEventListener("focusPhoneInput", handleFocusPhoneInput);
    };
  }, []);

  useEffect(() => {
    if (callActive) {
      callDurationTimerRef.current = setTimeout(() => {
        setCallActive(false);
        toast({
          title: "Call Ended",
          description: "Your call has ended after 2 minutes. Please book a demo to know more.",
          variant: "default",
        });
      }, 2 * 60 * 1000); // 2 minutes in milliseconds
    }

    return () => {
      if (callDurationTimerRef.current) {
        clearTimeout(callDurationTimerRef.current);
      }
    };
  }, [callActive]);

  // No need for phoneInputRef or iti ref with the React component

  const handleInitiateCall = async () => {
    // The phoneNumber state is already updated by onChangeNumber
    const fullPhoneNumber = phoneNumber;
    

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/initiate-call`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: fullPhoneNumber, regionCode }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail?.error || errorData.detail || "Failed to initiate call");
      }

      const result = await response.json();
      
      toast({
        title: "Call Initiated",
        description: "Fieson AI is calling your number now!",
      });
      setCallActive(true);
    } catch (error) {
      console.error("Error initiating call:", error);
      toast({
        title: "Call Failed",
        description: error.message || "There was an error initiating the call.",
        variant: "destructive",
        duration: Infinity,
        action: (
          <ToastAction
            altText="Book a Demo"
            onClick={() =>
              window.open("https://cal.com/bart-rosier/session-bart", "_blank")
            }
          >
            Book a Demo
          </ToastAction>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  // The validation logic is now handled by the isValid state from IntlTelInput
  const validation = { isValid: isValid, message: "Please enter a valid phone number." };

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
                  <IntlTelInput
                    onChangeNumber={setPhoneNumber}
                    onChangeValidity={setIsValid}
                    initOptions={{
                      initialCountry: "auto",
                      separateDialCode: true,
                      utilsScript:
                        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js", // For validation
                      geoIpLookup: (callback) => {
                        fetch("https://ipapi.co/json/")
                          .then((res) => res.json())
                          .then((data) => {
                            setRegionCode(data.country_code); // Set the region code
                            callback(data.country_code);
                          })
                          .catch(() => {
                            setRegionCode("US"); // Default to US on error
                            callback("us"); // Default to US on error
                          });
                      },
                    }}
                    inputProps={{
                      onFocus: () => {
                        setIsPhoneInputFocused(true);
                        setShowDisclaimer(true);
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                        }
                      },
                      onBlur: () => {
                        setIsPhoneInputFocused(false);
                        timeoutRef.current = setTimeout(() => {
                          setShowDisclaimer(false);
                        }, 30000); // 30 seconds
                      },
                      className: cn(
                        "form-input iti-input-custom", // Custom class for styling
                        validation.isValid === false && phoneNumber !== ""
                          ? "border-red-500 focus:border-blue-accent"
                          : "border-blue-accent/30 focus:border-blue-accent"
                      ),
                      placeholder: "Enter phone number",
                      type: "tel",
                    }}
                  />
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

              <div className="text-center lg:text-left h-10 overflow-hidden transition-all duration-300 ease-in-out">
                <p
                  className={cn(
                    "text-xs text-muted-foreground mt-2",
                    showDisclaimer
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  )}
                >
                  By calling, you confirm that you have read our{" "}
                  <Link
                    to="/terms-europe"
                    className="p-0 h-auto text-xs underline text-blue-accent"
                  >
                    Contact Terms
                  </Link>{" "}
                  and our{" "}
                  <Link
                    to="/terms-europe"
                    className="p-0 h-auto text-xs underline text-blue-accent"
                  >
                    Privacy Policy
                  </Link>
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
