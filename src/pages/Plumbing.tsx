import IndustryPage from "./IndustryPage";

const Plumbing = () => {
  const features = [
    {
      title: "Leak detection and reporting",
      description: "Fieson AI can guide callers through initial troubleshooting steps for leaks and accurately report issues to technicians."
    },
    {
      title: "Emergency service routing", 
      description: "Prioritizes and routes urgent plumbing emergencies like burst pipes or severe clogs to the nearest available technician."
    },
    {
      title: "Appointment scheduling and reminders",
      description: "Automates the booking of routine maintenance and repair appointments, sending timely reminders to customers."
    }
  ];

  const benefits = [
    {
      title: "Faster emergency response",
      description: "Critical plumbing issues are identified and addressed quickly, minimizing damage and customer stress."
    },
    {
      title: "Reduced administrative burden", 
      description: "Automated scheduling and initial diagnostics free up your staff to focus on complex tasks."
    },
    {
      title: "Proactive maintenance reminders",
      description: "Boosts customer retention and recurring revenue through automated follow-ups for preventative maintenance."
    },
    {
      title: "Improved customer communication",
      description: "Customers receive clear, consistent updates regarding their service requests and appointments."
    },
    {
      title: "Optimized technician routes",
      description: "Intelligent routing ensures technicians spend less time traveling and more time on jobs."
    }
  ];

  const struggles = [
    "Handling after-hours plumbing emergencies",
    "Scheduling conflicts and missed appointments", 
    "Managing high call volumes during peak seasons",
    "Inefficient dispatching of technicians"
  ];

  const stats = [
    { value: "~90%", label: "Emergency call resolution" },
    { value: "4.7 out of 5", label: "Customer satisfaction" },
    { value: "100%", label: "Calls answered 24/7" }
  ];

  const testimonials = [
    {
      name: "David Lee",
      title: "Owner, Rapid Plumbers",
      quote: "Fieson AI has been a game-changer for our emergency services. We're able to respond to critical issues much faster now.",
      image: "/public/testimonial-3-men.jpg"
    },
    {
      name: "Jessica Brown", 
      title: "Office Manager, ClearFlow Plumbing",
      quote: "Our scheduling is so much smoother, and our customers appreciate the automated reminders. Highly recommend!",
      image: "/public/testimonial-6-women.jpg"
    },
    {
      name: "Michael Green",
      title: "Lead Plumber, Aqua Solutions", 
      quote: "The initial troubleshooting guidance from the AI helps us prepare better for each job, saving time on site.",
      image: "/public/testimonial-5-men.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Plumbing"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default Plumbing;
