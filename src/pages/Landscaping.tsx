import IndustryPage from "./IndustryPage";

const Landscaping = () => {
  const features = [
    {
      title: "Automated quote generation",
      description: "Fieson AI can gather project details from callers and generate initial service quotes or estimates."
    },
    {
      title: "Seasonal service scheduling", 
      description: "Manages and schedules recurring seasonal services like lawn care, snow removal, or spring cleanups."
    },
    {
      title: "Client preference management",
      description: "Records and applies client-specific preferences for landscaping services, ensuring personalized care."
    }
  ];

  const benefits = [
    {
      title: "Increased booking efficiency",
      description: "Automates the booking process for new and recurring landscaping services, reducing manual effort."
    },
    {
      title: "Improved client retention", 
      description: "Personalized service and timely reminders lead to higher customer satisfaction and loyalty."
    },
    {
      title: "Optimized crew deployment",
      description: "Intelligent scheduling ensures your landscaping crews are efficiently utilized across all projects."
    },
    {
      title: "Accurate initial estimates",
      description: "Provides clients with quick and accurate preliminary quotes, setting clear expectations from the start."
    },
    {
      title: "Scalable operations",
      description: "Handles increased call volumes during peak seasons without overwhelming your staff."
    }
  ];

  const struggles = [
    "Managing seasonal demand fluctuations",
    "Scheduling and dispatching multiple crews", 
    "Providing accurate quotes quickly",
    "Handling diverse client requests and preferences"
  ];

  const stats = [
    { value: "~90%", label: "Service booking rate" },
    { value: "4.7 out of 5", label: "Client satisfaction" },
    { value: "100%", label: "Seasonal calls managed" }
  ];

  const testimonials = [
    {
      name: "Robert Davis",
      title: "Owner, GreenScape Landscaping",
      quote: "Fieson AI has revolutionized our seasonal scheduling. We're now able to manage our busy periods with incredible efficiency.",
      image: "/public/testimonial-5-men.jpg"
    },
    {
      name: "Olivia Wilson", 
      title: "Client Relations, Bloom Gardens",
      quote: "Our clients love the personalized service and quick quotes they receive. It's made a huge difference in our customer retention.",
      image: "/public/testimonial-6-women.jpg"
    },
    {
      name: "James Taylor",
      title: "Operations Manager, Pristine Lawns", 
      quote: "The AI handles all our routine inquiries, freeing up our team to focus on delivering top-notch landscaping services.",
      image: "/public/testimonial-1-men.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Landscaping"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default Landscaping;
