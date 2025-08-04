import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Wrench, Droplets, Flame, Thermometer, Zap } from "lucide-react";

const DemoCallsSection = () => {
  const [playingCall, setPlayingCall] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(2); // Start with middle item (index 2)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to middle item on initial load for carousel view
    if (containerRef.current && window.innerWidth < 1280) { // xl breakpoint
      const cardWidth = 280 + 16; // card width + gap
      const scrollPosition = cardWidth * 2; // scroll to 3rd item (index 2)
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  // Handle scroll to update current slide indicator
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (window.innerWidth >= 1280) return; // Skip for grid view
      
      const cardWidth = 280 + 16; // card width + gap
      const scrollLeft = container.scrollLeft;
      const slideIndex = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(Math.max(0, Math.min(slideIndex, demoCalls.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const cardWidth = 280 + 16; // card width + gap
    const scrollPosition = cardWidth * index;
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentSlide(index);
  };

  // Drag functionality
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth >= 1280) return; // Skip for grid view
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || window.innerWidth >= 1280) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    
    const x = e.pageX;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    container.scrollLeft = scrollStart - walk;
  }, [isDragging, startX, scrollStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch functionality
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (window.innerWidth >= 1280) return; // Skip for grid view
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || window.innerWidth >= 1280) return;
    const container = containerRef.current;
    if (!container) return;
    
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollStart - walk;
  }, [isDragging, startX, scrollStart]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const demoCalls = [
    {
      id: "emergency-leak",
      title: "Emergency Leak",
      icon: Droplets,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      description: "Burst pipe in kitchen - urgent response needed",
      duration: "1:45",
      scenario: "Customer has water flooding from under sink",
      outcome: "Emergency slot booked within 2 hours"
    },
    {
      id: "boiler-repair",
      title: "Boiler Breakdown",
      icon: Flame,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      description: "No heating or hot water - winter emergency",
      duration: "2:12",
      scenario: "Elderly customer with no heat in cold weather",
      outcome: "Same-day emergency repair scheduled"
    },
    {
      id: "routine-service",
      title: "Annual Service",
      icon: Wrench,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
      description: "Regular maintenance appointment booking",
      duration: "1:23",
      scenario: "Commercial client scheduling routine check",
      outcome: "Recurring maintenance contract renewed"
    },
    {
      id: "hvac-install",
      title: "HVAC Installation",
      icon: Thermometer,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      description: "New system quote and installation planning",
      duration: "3:01",
      scenario: "New construction project requiring quote",
      outcome: "€15,000 installation project secured"
    },
    {
      id: "electrical-emergency",
      title: "Electrical Issue",
      icon: Zap,
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-500/10",
      description: "Power outage and electrical safety concern",
      duration: "1:58",
      scenario: "Restaurant losing power during service",
      outcome: "Emergency electrician dispatched immediately"
    }
  ];

  const togglePlay = (callId: string) => {
    if (playingCall === callId) {
      setPlayingCall(null);
    } else {
      setPlayingCall(callId);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">REAL AI CONVERSATIONS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hear Fieson AI in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Listen to actual AI conversations handling different home service scenarios. 
            Each call demonstrates professional communication and successful booking.
          </p>
        </div>

        <div 
          ref={containerRef} 
          className={`xl:grid xl:grid-cols-5 xl:gap-6 flex xl:flex-none overflow-x-auto snap-x snap-mandatory gap-4 pl-[calc(50vw-140px)] pr-[calc(50vw-140px)] xl:px-0 xl:pl-0 xl:pr-0 pb-4 xl:pb-0 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} xl:cursor-default`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ userSelect: isDragging ? 'none' : 'auto' }}
        >
          {demoCalls.map((call) => {
            const Icon = call.icon;
            const isPlaying = playingCall === call.id;
            
            return (
              <Card key={call.id} className="p-6 hover:shadow-medium smooth-transition group cursor-pointer flex-shrink-0 w-[280px] xl:w-auto snap-center bg-muted/30">
                <div className="space-y-4">
                  {/* Icon and Play Button */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${call.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${call.iconColor}`} />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePlay(call.id)}
                      className={`w-10 h-10 rounded-full p-0 ${
                        isPlaying ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </Button>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{call.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {call.description}
                    </p>
                    <div className="text-xs text-muted-foreground font-medium">
                      Duration: {call.duration}
                    </div>
                  </div>

                  {/* Progress Bar (when playing) */}
                  {isPlaying && (
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-1">
                        <div className="bg-accent h-1 rounded-full animate-pulse" style={{width: '45%'}} />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Playing... {call.scenario}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  <div className="pt-3 border-t border-border">
                    <div className="text-xs font-medium text-green-600">
                      ✓ {call.outcome}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 xl:hidden">
          {demoCalls.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full smooth-transition ${
                currentSlide === index ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            Try Fieson AI Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoCallsSection;