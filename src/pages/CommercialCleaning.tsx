import IndustryPage from "./IndustryPage";

const CommercialCleaning = () => {
  const features = [
    {
      title: "Customized service proposals",
      description: "Fieson AI gathers detailed requirements from commercial clients to help generate tailored cleaning proposals."
    },
    {
      title: "Flexible scheduling for businesses", 
      description: "Manages complex scheduling needs for commercial properties, including after-hours and recurring services."
    },
    {
      title: "Client feedback and quality assurance",
      description: "Collects client feedback post-service and flags any issues for immediate follow-up, ensuring high standards."
    }
  ];

  const benefits = [
    {
      title: "Streamlined client onboarding",
      description: "Automates the initial client intake and proposal generation, speeding up the sales cycle."
    },
    {
      title: "Improved service consistency", 
      description: "Ensures all client requirements are captured and communicated, leading to consistent, high-quality cleaning."
    },
    {
      title: "Enhanced client satisfaction",
      description: "Proactive feedback collection and issue resolution lead to stronger client relationships."
    },
    {
      title: "Optimized crew management",
      description: "Efficient scheduling and task assignment maximize the productivity of your cleaning teams."
    },
    {
      title: "Scalable operations",
      description: "Handles a growing client base and diverse service requests without increasing administrative burden."
    }
  ];

  const struggles = [
    "Managing complex and varied client requirements",
    "Scheduling services around business operating hours", 
    "Ensuring consistent quality across multiple sites",
    "Handling client feedback and complaints efficiently"
  ];

  const stats = [
    { value: "~95%", label: "Client retention rate" },
    { value: "4.9 out of 5", label: "Service quality rating" },
    { value: "100%", label: "Client inquiries managed" }
  ];

  const testimonials = [
    {
      name: "John Doe",
      title: "Property Manager, Corporate Towers",
      quote: "Fieson AI has revolutionized how we manage our cleaning contracts. The customized proposals and flexible scheduling are a game-changer.",
      image: "/public/testimonial-1-men.jpg"
    },
    {
      name: "Jane Smith", 
      title: "Operations Director, Pristine Commercial",
      quote: "Our client satisfaction has soared thanks to the AI's ability to capture detailed feedback and ensure consistent service quality.",
      image: "/public/testimonial-2-women.jpg"
    },
    {
      name: "Robert Johnson",
      title: "CEO, Elite Cleaners", 
      quote: "The AI handles all our complex scheduling needs, allowing our teams to focus on delivering exceptional cleaning services. It's truly scalable.",
      image: "/public/testimonial-3-men.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Commercial Cleaning"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default CommercialCleaning;
