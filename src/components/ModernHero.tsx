import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mic,
  Clock,
  TrendingUp,
  Shield,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Phone,
  MessageSquare,
  Bot,
  Calendar,
  BarChart3
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ModernHero = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [callActive, setCallActive] = useState(false);

  const features = [
    { icon: Bot, text: "AI-Powered Agents", color: "text-purple-600" },
    { icon: Phone, text: "24/7 Call Center", color: "text-blue-600" },
    { icon: Calendar, text: "Smart Booking", color: "text-green-600" },
    { icon: BarChart3, text: "Analytics Dashboard", color: "text-orange-600" },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "50%", label: "More Bookings", icon: TrendingUp },
    { value: "24/7", label: "Support", icon: Clock },
  ];

  const handleDemoCall = async () => {
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number to start the demo call.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setCallActive(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Demo Call Started!",
        description: "Our AI agent will call you in 30 seconds.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                #1 Home Services Platform
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Home Services Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Automate bookings, manage customers, and grow your revenue with our 
                AI-powered platform. Get more jobs, happier customers, and better profits.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={cn("p-2 rounded-lg bg-white shadow-sm", feature.color)}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Phone Input & Demo Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <Button
                  onClick={handleDemoCall}
                  disabled={isLoading || callActive}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Connecting...
                    </>
                  ) : callActive ? (
                    <>
                      <Phone className="w-4 h-4 mr-2 animate-pulse" />
                      Call Active
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Get Live Demo
                    </>
                  )}
                </Button>
              </div>

              {/* Secondary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto px-6 py-3 border-2 border-purple-200 hover:border-purple-300 text-purple-700 rounded-xl font-semibold transition-all"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full sm:w-auto px-6 py-3 text-gray-600 hover:text-gray-800 rounded-xl font-semibold"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with Sales
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0 space-y-2">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Demo Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Live Demo Available
                    </h3>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Online
                    </Badge>
                  </div>
                  <p className="text-gray-600">
                    Experience our AI agent in action. Get a personalized demo 
                    tailored to your home services business.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>2-3 minutes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Instant setup</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
