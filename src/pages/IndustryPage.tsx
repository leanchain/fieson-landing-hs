import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Cloud, Users, Wrench, Zap } from "lucide-react";

interface IndustryPageProps {
  industryName: string;
  heroImage?: string;
  features?: { title: string; description: string; }[];
  benefits?: { title: string; description: string; }[];
  struggles?: string[];
  stats?: { value: string; label: string; }[];
  testimonials?: { name: string; title: string; quote: string; image: string; }[];
}

const IndustryPage: React.FC<IndustryPageProps> = ({
  industryName,
  heroImage = "/public/placeholder.svg",
  features = [],
  benefits = [],
  struggles = [],
  stats = [],
  testimonials = [],
}) => {
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
                  Elevate your{" "}
                  <span className="text-accent">{industryName} AI</span>{" "}
                  answering services.
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Streamline operations and enhance customer satisfaction with Fieson AI's dedicated {industryName} answering service.
                </p>
                <Button variant="demo" size="lg">
                  BOOK A DEMO
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={heroImage}
                  alt={`Professional ${industryName} at work`}
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
                  Benefits that raise your {industryName} success.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI answering service for {industryName} businesses helps you focus on what you do best.
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
                Fieson AI never misses a call, never forgets to follow up, and always shows up for work.
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
            <h2 className="text-4xl font-bold mb-6">Give Fieson AI a try!</h2>
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

export default IndustryPage;
