import IndustryPage from "./IndustryPage";

const WindowCleaning = () => {
  const features = [
    {
      title: "Automated quote requests",
      description: "Fieson AI gathers property details from callers to provide instant quotes or schedule on-site estimates."
    },
    {
      title: "Recurring service booking", 
      description: "Manages and schedules regular window cleaning appointments, ensuring consistent service."
    },
    {
      title: "Weather-adaptive rescheduling",
      description: "Intelligently reschedules appointments based on real-time weather conditions to avoid rain delays."
    }
  ];

  const benefits = [
    {
      title: "Increased booking efficiency",
      description: "Automates the entire booking process, from initial inquiry to confirmed appointment."
    },
    {
      title: "Improved customer satisfaction", 
      description: "Customers appreciate the flexibility of weather-adaptive scheduling and timely reminders."
    },
    {
      title: "Optimized crew routes",
      description: "Efficient scheduling and rescheduling lead to better utilization of your cleaning crews."
    },
    {
      title: "Reduced administrative tasks",
      description: "Frees up your staff from manual scheduling and rescheduling, allowing them to focus on core services."
    },
    {
      title: "Scalable operations",
      description: "Handles high call volumes during peak seasons without compromising service quality."
    }
  ];

  const struggles = [
    "Managing weather-related rescheduling",
    "Handling high call volumes during busy seasons", 
    "Providing quick and accurate quotes",
    "Ensuring consistent service for recurring clients"
  ];

  const stats = [
    { value: "~92%", label: "Service booking rate" },
    { value: "4.9 out of 5", label: "Customer satisfaction" },
    { value: "100%", label: "Calls answered 24/7" }
  ];

  const testimonials = [
    {
      name: "Sarah Lee",
      title: "Owner, Crystal Clear Windows",
      quote: "Fieson AI has made our scheduling a breeze, especially with unpredictable weather. Our customers love the flexibility!",
      image: "/public/testimonial-4-women.jpg"
    },
    {
      name: "David Kim", 
      title: "Operations Manager, Shine Bright Cleaners",
      quote: "We no longer miss a single call, even during our busiest spring season. The AI handles everything seamlessly.",
      image: "/public/testimonial-5-men.jpg"
    },
    {
      name: "Jessica Chen",
      title: "Client Coordinator, Gleam Windows", 
      quote: "The automated quote system is fantastic. It saves us so much time and provides instant information to our potential clients.",
      image: "/public/testimonial-6-women.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Window Cleaning"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default WindowCleaning;
