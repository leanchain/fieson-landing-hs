import IndustryPage from "./IndustryPage";

const Electrical = () => {
  const features = [
    {
      title: "Fault diagnosis and reporting",
      description: "Fieson AI assists callers with initial electrical fault descriptions and routes detailed reports to technicians."
    },
    {
      title: "Urgent outage management", 
      description: "Identifies and escalates power outage or critical electrical failure calls for immediate technician dispatch."
    },
    {
      title: "Service upgrade consultations",
      description: "Provides preliminary information and schedules consultations for electrical panel upgrades, wiring, and new installations."
    }
  ];

  const benefits = [
    {
      title: "Rapid response to electrical issues",
      description: "Ensures quick handling of electrical emergencies, minimizing safety risks and property damage."
    },
    {
      title: "Streamlined service requests", 
      description: "Automates the intake of service requests, ensuring all necessary information is captured efficiently."
    },
    {
      title: "Enhanced customer safety",
      description: "By quickly addressing electrical concerns, Fieson AI helps prevent potential hazards."
    },
    {
      title: "Efficient project scheduling",
      description: "Optimizes scheduling for both emergency repairs and planned electrical upgrades."
    },
    {
      title: "Improved client education",
      description: "Provides customers with clear information about electrical services and safety."
    }
  ];

  const struggles = [
    "Handling sudden power outages and emergencies",
    "Managing complex service upgrade inquiries", 
    "Ensuring technician safety and preparedness",
    "High demand during peak seasons"
  ];

  const stats = [
    { value: "~93%", label: "Electrical issue resolution" },
    { value: "4.8 out of 5", label: "Service reliability rating" },
    { value: "100%", label: "Critical calls managed" }
  ];

  const testimonials = [
    {
      name: "Chris Miller",
      title: "Owner, Spark Innovations",
      quote: "Fieson AI has significantly improved our response time for electrical emergencies. Our clients feel much safer and more confident in our services.",
      image: "/public/testimonial-1-men.jpg"
    },
    {
      name: "Sophia Garcia", 
      title: "Operations Lead, PowerUp Electric",
      quote: "The AI's ability to pre-qualify service upgrade leads has been invaluable, saving our team countless hours.",
      image: "/public/testimonial-4-women.jpg"
    },
    {
      name: "Daniel Kim",
      title: "Master Electrician, Volt Solutions", 
      quote: "We're now able to manage high call volumes with ease, ensuring no customer is left in the dark. Fieson AI is a must-have.",
      image: "/public/testimonial-3-men.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Electrical"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default Electrical;
