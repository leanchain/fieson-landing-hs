import { useState, useRef, useEffect, useCallback } from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles"; // Note: This is the correct import for styles
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Cloud, Users, Wrench, Zap } from "lucide-react";
import NotFound from "./NotFound";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { industryContent } from "../data/industryContent";

const IndustryPage = () => {
  const { industryName: paramIndustryName } = useParams<{
    industryName: string;
  }>();
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
          description:
            "Your call has ended after 2 minutes. Please book a demo to know more.",
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

  const handleInitiateCall = async () => {
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
        `${import.meta.env.NEXT_PUBLIC_BACKEND_URL}/api/initiate-call`,
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
        throw new Error(
          errorData.detail?.error ||
            errorData.detail ||
            "Failed to initiate call"
        );
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

  const validation = {
    isValid: isValid,
    message: "Please enter a valid phone number.",
  };

  const toCamelCase = (str: string) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  };
  const industryKey = toCamelCase(
    paramIndustryName || ""
  ) as keyof typeof industryContent;
  const industry = industryContent[industryKey];

  if (!industry) {
    return <NotFound />;
  }

  const {
    industryName,
    heroImages,
    features,
    benefits,
    struggles,
    stats,
    testimonials,
  } = industry;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      if (current === count) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(autoplay);
  }, [api, current, count]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-1 lg:order-2">
                <Carousel setApi={setApi} className="w-full max-w-full">
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`Professional ${industryName} at work ${
                            index + 1
                          }`}
                          className="w-full h-auto rounded-2xl shadow-large object-cover aspect-[3/2]"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Elevate your{" "}
                  <span className="text-accent">{industryName} AI</span>{" "}
                  answering services.
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Streamline operations and enhance customer satisfaction with
                  Fieson AI's dedicated {industryName} answering service.
                </p>
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
                      <p className={`text-sm text-red-500`}>
                        {validation.message}
                      </p>
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
                        to="/privacy/terms-europe"
                        className="p-0 h-auto text-xs underline text-blue-accent"
                      >
                        Contact Terms
                      </Link>{" "}
                      and our{" "}
                      <Link
                        to="/privacy/terms-europe"
                        className="p-0 h-auto text-xs underline text-blue-accent"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos - Disabled */}
        {/*
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-muted-foreground font-medium">
                Trusted by the best service professionals and their customers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
              {industry.trustedCompanies?.map((company, i) => (
                <div
                  key={i}
                  className="w-full max-w-[120px] h-12 flex items-center justify-center"
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Pre-qualification Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  AI pre-qualification for {industryName} services
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We know your struggles in the {industryName} industry.
                </p>

                <div className="space-y-4">
                  {struggles.map((struggle, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Wrench className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{struggle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Zap className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Features that reinforce your infrastructure.
                </h2>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Benefits that raise your {industryName} success.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI answering service for {industryName} businesses helps
                  you focus on what you do best.
                </p>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Users className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Turn every call into a customer.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold uppercase tracking-wide mb-4">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Win, again and again
              </h2>
              <p className="text-lg text-muted-foreground">
                Fieson AI never misses a call, never forgets to follow up, and
                always shows up for work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Give Fieson AI a try!</h2>
            <p className="text-xl mb-8 opacity-90">
              Turn on the faucet to new, qualified appointments as soon as
              today. Submit your email and book a demo.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={() =>
                window.open(
                  "https://cal.com/bart-rosier/session-bart",
                  "_blank"
                )
              }
            >
              BOOK A DEMO
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryPage;
