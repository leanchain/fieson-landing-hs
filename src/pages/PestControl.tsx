import IndustryPage from "./IndustryPage";

const PestControl = () => {
  const features = [
    {
      title: "Pest identification and advice",
      description: "Fieson AI can help callers identify common pests and provide initial advice before scheduling a visit."
    },
    {
      title: "Emergency infestation response", 
      description: "Prioritizes and routes urgent pest control calls, such as for venomous insects or rodent infestations."
    },
    {
      title: "Recurring service management",
      description: "Automates the scheduling and reminders for regular pest prevention and maintenance services."
    }
  ];

  const benefits = [
    {
      title: "Faster response to urgent issues",
      description: "Ensures rapid deployment of technicians for critical pest problems, minimizing discomfort and damage."
    },
    {
      title: "Improved customer education", 
      description: "Empowers customers with immediate information about pests and initial steps they can take."
    },
    {
      title: "Consistent service delivery",
      description: "Automated scheduling for recurring services ensures no appointment is missed, building customer trust."
    },
    {
      title: "Optimized technician routes",
      description: "Intelligent dispatching reduces travel time and increases the number of service calls per day."
    },
    {
      title: "Scalable operations",
      description: "Handles high call volumes during peak pest seasons without overwhelming your team."
    }
  ];

  const struggles = [
    "Managing urgent infestation calls",
    "Scheduling recurring pest prevention services", 
    "Educating customers on pest types and solutions",
    "High demand during specific seasons"
  ];

  const stats = [
    { value: "~95%", label: "Pest eradication success rate" },
    { value: "4.9 out of 5", label: "Customer satisfaction" },
    { value: "100%", label: "Calls answered 24/7" }
  ];

  const testimonials = [
    {
      name: "Sophia Martinez",
      title: "Owner, Bug Busters",
      quote: "Fieson AI has been instrumental in managing our emergency calls. We can now respond to urgent infestations much faster, which our clients truly appreciate.",
      image: "/public/testimonial-2-women.jpg"
    },
    {
      name: "Ethan Clark", 
      title: "Operations Manager, EcoPest Solutions",
      quote: "The automated scheduling for recurring services has freed up so much of our administrative time. It's a seamless solution.",
      image: "/public/testimonial-1-men.jpg"
    },
    {
      name: "Isabella Rossi",
      title: "Client Coordinator, Guardian Pest Control", 
      quote: "Our customers are more informed and satisfied thanks to the AI's ability to provide immediate pest identification and advice. It's a fantastic tool.",
      image: "/public/testimonial-4-women.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Pest Control"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default PestControl;
