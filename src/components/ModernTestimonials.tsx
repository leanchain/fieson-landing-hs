import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Pause,
  TrendingUp,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  metrics?: {
    improvement: string;
    timeframe: string;
  };
  serviceType: string;
  location: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Owner',
    company: 'Johnson Plumbing Services',
    avatar: '/testimonial-1-women.jpg',
    rating: 5,
    content: 'This platform transformed our business completely. We went from manually scheduling appointments to having an AI agent that handles everything 24/7. Our booking rate increased by 300% in just 3 months!',
    metrics: {
      improvement: '300% more bookings',
      timeframe: '3 months'
    },
    serviceType: 'Plumbing',
    location: 'Austin, TX',
    featured: true
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    role: 'Founder',
    company: 'Elite HVAC Solutions',
    avatar: '/testimonial-2-men.jpg',
    rating: 5,
    content: 'The AI agent is incredible. It handles customer inquiries, schedules appointments, and even follows up with customers. Our team can focus on what they do best - providing excellent service.',
    metrics: {
      improvement: '50% time saved',
      timeframe: '2 months'
    },
    serviceType: 'HVAC',
    location: 'Phoenix, AZ'
  },
  {
    id: '3',
    name: 'Jennifer Chen',
    role: 'Operations Manager',
    company: 'Bright Electrical Co.',
    avatar: '/testimonial-3-women.jpg',
    rating: 5,
    content: 'Customer satisfaction has never been higher. The automated follow-ups and professional communication have really impressed our clients. We\'ve seen a 40% increase in repeat customers.',
    metrics: {
      improvement: '40% repeat customers',
      timeframe: '4 months'
    },
    serviceType: 'Electrical',
    location: 'Seattle, WA'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'CEO',
    company: 'Thompson Roofing',
    avatar: '/testimonial-4-men.jpg',
    rating: 5,
    content: 'The analytics dashboard gives us insights we never had before. We can see which marketing channels work best and optimize our operations. Revenue is up 60% year over year.',
    metrics: {
      improvement: '60% revenue growth',
      timeframe: '1 year'
    },
    serviceType: 'Roofing',
    location: 'Denver, CO',
    featured: true
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    role: 'Owner',
    company: 'Green Thumb Landscaping',
    avatar: '/testimonial-5-women.jpg',
    rating: 5,
    content: 'As a small business, we couldn\'t afford a full-time receptionist. This AI solution is like having a professional team working around the clock. It\'s been a game-changer for our growth.',
    metrics: {
      improvement: '200% lead conversion',
      timeframe: '6 months'
    },
    serviceType: 'Landscaping',
    location: 'Miami, FL'
  },
  {
    id: '6',
    name: 'Robert Kim',
    role: 'Founder',
    company: 'Kim\'s Cleaning Services',
    avatar: '/testimonial-6-men.jpg',
    rating: 5,
    content: 'The automated scheduling and customer management features have streamlined our entire operation. We can handle 3x more customers with the same team size.',
    metrics: {
      improvement: '3x customer capacity',
      timeframe: '5 months'
    },
    serviceType: 'Cleaning',
    location: 'Chicago, IL'
  }
];

const serviceIcons = {
  'Plumbing': '🔧',
  'HVAC': '❄️',
  'Electrical': '⚡',
  'Roofing': '🏠',
  'Landscaping': '🌿',
  'Cleaning': '🧽'
};

export default function ModernTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 mb-4"
          >
            <Award className="w-4 h-4 mr-2" />
            Customer Success Stories
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Trusted by 10,000+
            </span>{" "}
            Home Service Professionals
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses like yours are growing faster, serving more customers, 
            and increasing revenue with our AI-powered platform.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Quote Content */}
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2">
                          <Quote className="w-8 h-8 text-purple-600 opacity-50" />
                          <div className="flex">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        
                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                          "{currentTestimonial.content}"
                        </blockquote>
                        
                        {currentTestimonial.metrics && (
                          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                            <div>
                              <div className="font-semibold text-green-700">
                                {currentTestimonial.metrics.improvement}
                              </div>
                              <div className="text-sm text-gray-600">
                                in {currentTestimonial.metrics.timeframe}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex-shrink-0 text-center lg:text-left">
                        <Avatar className="w-20 h-20 mx-auto lg:mx-0 mb-4">
                          <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                          <AvatarFallback className="text-lg">
                            {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                          <p className="text-gray-600">
                            {currentTestimonial.role}, {currentTestimonial.company}
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                            <span>{serviceIcons[currentTestimonial.serviceType as keyof typeof serviceIcons]}</span>
                            <span>{currentTestimonial.serviceType}</span>
                            <span>•</span>
                            <span>{currentTestimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex 
                        ? "bg-purple-600 w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="rounded-full"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card 
                className={cn(
                  "h-full p-6 transition-all duration-300 cursor-pointer bg-white/60 backdrop-blur-sm border-0",
                  hoveredCard === testimonial.id 
                    ? "shadow-2xl transform -translate-y-2" 
                    : "shadow-lg hover:shadow-xl"
                )}
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.serviceType}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {testimonial.metrics && (
                    <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded">
                      <CheckCircle className="w-3 h-3" />
                      <span>{testimonial.metrics.improvement}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 pt-2 border-t">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="text-xs">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">300% Average Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
