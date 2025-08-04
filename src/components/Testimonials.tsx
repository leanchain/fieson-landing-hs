import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Devynn Thompson",
      title: "Owner",
      company: "Thompson Family Plumbing",
      image: "/api/placeholder/80/80",
      quote: "The Fieson AI team responds so quickly that sometimes we joke that their own employees might be AI.",
      rating: 5,
      years: "2 years",
      responseTime: "15 mins"
    },
    {
      name: "Konnor Buscho",
      title: "CMO",
      company: "Way Cool Heating & Air",
      image: "/api/placeholder/80/80",
      quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      rating: 5
    },
    {
      name: "Joshua Smith",
      title: "COO",
      company: "Arizona Roofing Systems",
      image: "/api/placeholder/80/80",
      quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      rating: 5
    },
    {
      name: "Taylor Craig",
      title: "Marketing Coordinator",
      company: "Cellino Plumbing",
      image: "/api/placeholder/80/80",
      quote: "It's been a reliable solution for our business, and we look forward to continuing to work with them as we grow.",
      rating: 5
    },
    {
      name: "Rob Greer",
      title: "COO",
      company: "Rove Pest Control",
      image: "/api/placeholder/80/80",
      quote: "We just had our 2nd week in a row of zero missed Google Local Services calls. This is pretty cool to see since implementing Fieson AI.",
      rating: 5
    },
    {
      name: "Delaney Atkinson",
      title: "Sr Customer Ops Manager",
      company: "ABC",
      image: "/api/placeholder/80/80",
      quote: "It's so rare to be sold a product in that initial meeting and then have their team actually live up to their claims.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
  };


  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">CUSTOMER SUPPORT</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hands-on setup and support for optimal AI performance.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience firsthand how the Fieson AI team is renowned for their exceptional support 
            and lightning-fast response times, often leading customers to think they must be AI themselves.
          </p>
        </div>



        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex smooth-transition"
            style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
          >
            {testimonials.slice(1).map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-medium smooth-transition flex-shrink-0 w-1/3">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
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
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="w-10 h-10 rounded-full p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {Array.from({ length: testimonials.length - 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full smooth-transition ${
                  currentSlide === index ? 'bg-accent' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="w-10 h-10 rounded-full p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;