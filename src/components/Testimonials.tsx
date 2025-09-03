import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useAnalytics from "@/hooks/use-analytics";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { trackEvent } = useAnalytics();

  const testimonials = [
    {
      name: "Hans Müller",
      title: "Owner",
      company: "Müller & Sons Plumbing (DE)",
      image: "/testimonial-1-men.jpg",
      quote:
        "The Fieson AI team responds so quickly that sometimes we joke that their own employees might be AI.",
      rating: 5,
      years: "2 years",
      responseTime: "15 mins",
    },
    {
      name: "Sophie Dubois",
      title: "CMO",
      company: "Dubois Heating & Air (FR)",
      image: "/testimonial-2-women.jpg",
      quote:
        "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      rating: 5,
    },
    {
      name: "Davide Rossi",
      title: "COO",
      company: "Italian Roof Systems (IT)",
      image: "/testimonial-3-men.jpg",
      quote:
        "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
      rating: 5,
    },
    {
      name: "Emily White",
      title: "Marketing Coordinator",
      company: "Thames Plumbing Solutions (UK)",
      image: "/testimonial-4-women.jpg",
      quote:
        "It's been a reliable solution for our business, and we look forward to continuing to work with them as we grow.",
      rating: 5,
    },
    {
      name: "Björn Andersson",
      title: "COO",
      company: "Nordic Pest Control (SE)",
      image: "/testimonial-5-men.jpg",
      quote:
        "We just had our 2nd week in a row of zero missed Google Local Services calls. This is pretty cool to see since implementing Fieson AI.",
      rating: 5,
    },
    {
      name: "Lena Schmidt",
      title: "Sr Customer Ops Manager",
      company: "Alpen Service GmbH (CH)",
      image: "/testimonial-6-women.jpg",
      quote:
        "It's so rare to be sold a product in that initial meeting and then have their team actually live up to their claims.",
      rating: 5,
    },
  ];

  const [dynamicTestimonialsPerView, setDynamicTestimonialsPerView] = useState(3);
  const totalTestimonials = testimonials.length;
  const totalSlides = Math.ceil(totalTestimonials / dynamicTestimonialsPerView);

  useEffect(() => {
    const calculateTestimonialsPerView = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setDynamicTestimonialsPerView(3);
      } else if (window.innerWidth >= 640) { // sm breakpoint
        setDynamicTestimonialsPerView(2);
      } else {
        setDynamicTestimonialsPerView(1);
      }
    };

    calculateTestimonialsPerView(); // Set initial value
    window.addEventListener("resize", calculateTestimonialsPerView);

    return () => {
      window.removeEventListener("resize", calculateTestimonialsPerView);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev + dynamicTestimonialsPerView;
      const slideToSet = newSlide >= totalTestimonials ? 0 : newSlide;
      trackEvent({
        action: "carousel_navigation",
        category: "Testimonials Section",
        label: `Next Slide (to ${slideToSet})`,
      });
      return slideToSet;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev - dynamicTestimonialsPerView;
      const slideToSet = newSlide < 0 ? totalTestimonials - (totalTestimonials % dynamicTestimonialsPerView || dynamicTestimonialsPerView) : newSlide;
      trackEvent({
        action: "carousel_navigation",
        category: "Testimonials Section",
        label: `Previous Slide (to ${slideToSet})`,
      });
      return slideToSet;
    });
  };

  // Drag helpers
  const endDrag = () => {
    if (!isDragging) return;
    const width = containerRef.current?.clientWidth || 1;
    const thresholdPx = Math.max(48, width * 0.15);
    if (deltaX <= -thresholdPx) {
      nextSlide();
    } else if (deltaX >= thresholdPx) {
      prevSlide();
    }
    setIsDragging(false);
    setDeltaX(0);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDeltaX(0);
  };
  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setDeltaX(e.clientX - startX);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDeltaX(0);
  };
  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setDeltaX(e.touches[0].clientX - startX);
  };

  // Attach global listeners while dragging (better UX)
  useEffect(() => {
    const handleMouseUp = () => endDrag();
    const handleTouchEnd = () => endDrag();
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("touchcancel", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, startX, deltaX]);

  // Compute translate with drag delta
  const containerWidth = containerRef.current?.clientWidth || 1;
  const percentDelta = (deltaX / containerWidth) * 100;
  const translatePercent =
    -((currentSlide * 100) / dynamicTestimonialsPerView) +
    (isDragging ? percentDelta : 0);

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-4">
            CUSTOMER SUPPORT
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hands-on setup and support for optimal AI performance.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience firsthand how the Fieson AI team is renowned for their
            exceptional support and lightning-fast response times, often leading
            customers to think they must be AI themselves.
          </p>
        </div>

        {/* Single-slider (1 per view, all breakpoints) */}
        <div
          ref={containerRef}
          className="relative overflow-hidden select-none"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            className="flex smooth-transition"
            style={{
              transform: `translateX(${translatePercent}%)`,
              transition: isDragging ? "none" : undefined,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            aria-live="polite"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-8"
              >
                <Card className="p-6 hover:shadow-medium smooth-transition h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {testimonial.company}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation (bottom-only) */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="w-10 h-10 rounded-full p-0"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div
            className="flex space-x-2"
            role="tablist"
            aria-label="Testimonials pagination"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index * dynamicTestimonialsPerView);
                  trackEvent({
                    action: "carousel_pagination_click",
                    category: "Testimonials Section",
                    label: `Pagination Dot ${index + 1}`,
                  });
                }}
                className={`w-2 h-2 rounded-full smooth-transition transition-all duration-300 hover:scale-150 ${
                  Math.floor(currentSlide / dynamicTestimonialsPerView) === index ? "bg-blue-500" : "bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={Math.floor(currentSlide / dynamicTestimonialsPerView) === index}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="w-10 h-10 rounded-full p-0"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;