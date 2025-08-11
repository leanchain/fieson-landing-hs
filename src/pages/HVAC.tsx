import IndustryPage from "./IndustryPage";

const HVAC = () => {
  const features = [
    {
      title: "Smart scheduling and dispatch",
      description: "Fieson AI optimizes technician schedules and dispatches based on urgency, location, and technician availability."
    },
    {
      title: "Diagnostic pre-screening", 
      description: "Our AI gathers initial diagnostic information from callers, helping technicians arrive prepared with the right tools and parts."
    },
    {
      title: "Emergency call prioritization",
      description: "Identifies and prioritizes urgent HVAC repair calls, ensuring rapid response to critical situations."
    }
  ];

  const benefits = [
    {
      title: "Reduced response times",
      description: "Automated call handling and intelligent dispatching significantly cut down on customer waiting times."
    },
    {
      title: "Improved first-call resolution", 
      description: "With pre-collected diagnostic data, technicians are better equipped to resolve issues on the first visit."
    },
    {
      title: "Enhanced customer satisfaction",
      description: "24/7 availability and efficient service lead to happier, more loyal customers."
    },
    {
      title: "Optimized resource allocation",
      description: "Ensure your technicians and equipment are utilized effectively, reducing downtime and increasing productivity."
    },
    {
      title: "Seamless integration",
      description: "Integrates with your existing CRM and scheduling software for a unified operational workflow."
    }
  ];

  const struggles = [
    "Managing emergency calls after hours",
    "Inefficient scheduling and dispatch", 
    "High call volumes during peak seasons",
    "Customer dissatisfaction due to long wait times"
  ];

  const stats = [
    { value: "~95%", label: "Customer issue resolution rate" },
    { value: "4.9 out of 5", label: "Technician efficiency rating" },
    { value: "100%", label: "Emergency calls handled" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Operations Manager, Cool Air Solutions",
      quote: "Fieson AI has transformed our dispatch process. Our response times have never been better, and customers love our quick service!",
      image: "/public/testimonial-4-women.jpg"
    },
    {
      name: "Mark Johnson", 
      title: "Owner, Arctic HVAC",
      quote: "We no longer miss critical calls, even during the busiest summer months. Fieson AI is an indispensable part of our team.",
      image: "/public/testimonial-1-men.jpg"
    },
    {
      name: "Emily White",
      title: "Customer Service Lead, Climate Control Inc.", 
      quote: "The pre-screening feature saves our technicians so much time. They arrive prepared, leading to higher first-call resolution rates.",
      image: "/public/testimonial-2-women.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="HVAC"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default HVAC;
