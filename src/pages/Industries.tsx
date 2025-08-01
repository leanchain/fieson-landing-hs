import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Cloud, Users, Wrench, Zap } from "lucide-react";
import rooferHero from "@/assets/roofer-hero.jpg";
import companyLogos from "@/assets/company-logos.jpg";

const Industries = () => {
  const features = [
    {
      title: "Material and crew coordination",
      description: "Sameday efficiently manages logistics for materials delivery and team assignments across multiple job sites."
    },
    {
      title: "Smart scope assessment", 
      description: "Sameday AI gathers initial info about roof type, size, and problems to prepare accurate quotes and dispatch appropriate crews."
    },
    {
      title: "Weather-adaptive scheduling",
      description: "Real-time weather data informs our AI to optimize job planning and reduce weather-related cancellations."
    }
  ];

  const benefits = [
    {
      title: "Customized quoting",
      description: "It's equipped with a deep understanding of your unique services and roofing industry terminology and installation processes."
    },
    {
      title: "Always-on availability", 
      description: "Our AI never sleeps, so you can capture after-hours emergency calls as they come in for a better, more responsive customer experience."
    },
    {
      title: "Peak season support",
      description: "Storm season? No problem. Sameday handles high call volumes during peak seasons without overstretching any member of your team."
    },
    {
      title: "Automated follow-ups",
      description: "Our AI features intelligent reminders for client inspections and maintenance checks to help with customer retention all year round."
    },
    {
      title: "Excellent communication",
      description: "Your customers will get clear communication about warranties and after-service support, ensuring all their questions are answered."
    }
  ];

  const struggles = [
    "Work delays due to weather",
    "Managing customer expectations", 
    "Inefficient crew assignments",
    "High staff turnover"
  ];

  const stats = [
    { value: "~92%", label: "Reported booking rate" },
    { value: "4.8 out of 5", label: "Satisfaction amongst Sameday customers" },
    { value: "100%", label: "Phone calls answered" }
  ];

  const testimonials = [
    {
      name: "Konnor Buscho",
      title: "CMO, Way Cool Heating & Air",
      quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Joshua Smith", 
      title: "COO, Arizona Roofing Systems",
      quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Taylor Craig",
      title: "Marketing Coordinator, Cellino Plumbing", 
      quote: "It's been a reliable solution for our business, and we look forward to continuing to work with them as we grow.",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Cover yourself with elevated{" "}
                  <span className="text-accent">roofer AI</span>{" "}
                  answering services.
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Nail down more leads and raise the bar on customer service with 
                  Sameday AI's dedicated roofer answering service.
                </p>
                <Button variant="demo" size="lg">
                  BOOK A DEMO
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={rooferHero}
                  alt="Professional roofer at work"
                  className="w-full h-auto rounded-2xl shadow-large"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-muted-foreground font-medium">
                Trusted by the best service professionals and their customers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="w-full max-w-[120px] h-12 bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-muted-foreground text-center px-2">
                    Company {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-qualification Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  AI pre-qualification for installs
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We know your struggles in the roofing industry.
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
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
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
                  Benefits that raise your roofing success.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI answering service for roofers withstands storms so you can manage job sites.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
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
                  <div className="text-5xl font-bold text-foreground mb-2">{stat.value}</div>
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
              <p className="text-accent font-semibold uppercase tracking-wide mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Win, again and again
              </h2>
              <p className="text-lg text-muted-foreground">
                Sameday never misses a call, never forgets to follow up, and always shows up for work.
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
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
            <h2 className="text-4xl font-bold mb-6">Give Sameday a try!</h2>
            <p className="text-xl mb-8 opacity-90">
              Turn on the faucet to new, qualified appointments as soon as today. Submit your email and book a demo.
            </p>
            <Button variant="accent" size="lg">
              BOOK A DEMO
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;