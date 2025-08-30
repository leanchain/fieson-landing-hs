import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Check, 
  Zap, 
  Crown, 
  Rocket, 
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  Bot,
  BarChart3,
  Users,
  Calendar,
  Shield,
  Headphones
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
  features: string[];
  limits: {
    jobs: string;
    customers: string;
    agents: string;
    storage: string;
  };
  popular?: boolean;
  cta: string;
  color: string;
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small home service businesses just getting started',
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Zap,
    features: [
      '24/7 AI Phone Agent',
      'Basic Appointment Scheduling',
      'Customer Management',
      'Email Notifications',
      'Mobile App Access',
      'Basic Analytics',
      'Standard Support'
    ],
    limits: {
      jobs: 'Up to 100 jobs/month',
      customers: 'Up to 500 customers',
      agents: '1 AI agent',
      storage: '5GB storage'
    },
    cta: 'Start Free Trial',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses that need advanced features',
    monthlyPrice: 99,
    yearlyPrice: 79,
    icon: Crown,
    badge: 'Most Popular',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
    features: [
      'Everything in Starter',
      'Advanced AI Conversations',
      'Multi-Channel Communication',
      'Advanced Scheduling',
      'Customer Portal',
      'Detailed Analytics',
      'Integrations (Zapier, etc.)',
      'Priority Support'
    ],
    limits: {
      jobs: 'Up to 500 jobs/month',
      customers: 'Up to 2,500 customers',
      agents: '3 AI agents',
      storage: '25GB storage'
    },
    popular: true,
    cta: 'Start Free Trial',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large operations that need maximum power and flexibility',
    monthlyPrice: 199,
    yearlyPrice: 159,
    icon: Rocket,
    badge: 'Best Value',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    features: [
      'Everything in Professional',
      'Unlimited AI Agents',
      'Custom Workflows',
      'Advanced Reporting',
      'White-label Options',
      'API Access',
      'Custom Integrations',
      'Dedicated Account Manager'
    ],
    limits: {
      jobs: 'Unlimited jobs',
      customers: 'Unlimited customers',
      agents: 'Unlimited AI agents',
      storage: '100GB storage'
    },
    cta: 'Contact Sales',
    color: 'from-green-500 to-emerald-500'
  }
];

const features = [
  { icon: Phone, name: '24/7 AI Phone Agent', description: 'Never miss a call again' },
  { icon: MessageSquare, name: 'Multi-Channel Chat', description: 'SMS, web chat, and more' },
  { icon: Calendar, name: 'Smart Scheduling', description: 'Automated appointment booking' },
  { icon: BarChart3, name: 'Advanced Analytics', description: 'Detailed business insights' },
  { icon: Users, name: 'Customer Management', description: 'Complete customer profiles' },
  { icon: Bot, name: 'AI Automation', description: 'Intelligent workflow automation' }
];

export default function ModernPricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const savings = Math.round(((plans[1].monthlyPrice - plans[1].yearlyPrice) / plans[1].monthlyPrice) * 100);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
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
            <Star className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose the Perfect Plan for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start with a free trial, then choose a plan that scales with your business. 
            All plans include our core AI features with no setup fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 p-1 bg-white rounded-full shadow-lg border max-w-xs mx-auto">
            <span className={cn("px-4 py-2 text-sm font-medium transition-colors", !isYearly ? "text-purple-600" : "text-gray-500")}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-purple-600"
            />
            <span className={cn("px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2", isYearly ? "text-purple-600" : "text-gray-500")}>
              Yearly
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                Save {savings}%
              </Badge>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={cn(
                "relative",
                plan.popular && "lg:-mt-4"
              )}
            >
              <Card 
                className={cn(
                  "h-full transition-all duration-300 border-0 shadow-xl bg-white/80 backdrop-blur-sm",
                  plan.popular && "ring-2 ring-purple-500 ring-opacity-50",
                  hoveredPlan === plan.id && "transform -translate-y-2 shadow-2xl"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={cn("px-4 py-1 text-white border-0", plan.badgeColor)}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div className={cn("w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br", plan.color)}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-green-600 mt-1">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Limits */}
                  <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">Plan Includes:</div>
                    <div className="grid grid-cols-1 gap-1 text-xs text-gray-600">
                      <div>📊 {plan.limits.jobs}</div>
                      <div>👥 {plan.limits.customers}</div>
                      <div>🤖 {plan.limits.agents}</div>
                      <div>💾 {plan.limits.storage}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full py-3 font-semibold transition-all transform hover:scale-105",
                      plan.popular 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" 
                        : "bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Everything You Need to Grow</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold">{feature.name}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you choose the right plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat with Sales
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Schedule a Call
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              Contact Support
            </Button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
