import IndustryPage from "./IndustryPage";

const Solar = () => {
  const features = [
    {
      title: "Lead qualification for installations",
      description: "Fieson AI pre-qualifies potential solar clients, gathering essential information for sales teams."
    },
    {
      title: "Maintenance scheduling and reminders", 
      description: "Automates the booking of solar panel maintenance and sends timely reminders to customers."
    },
    {
      title: "Troubleshooting support",
      description: "Provides initial troubleshooting guidance for common solar system issues, reducing unnecessary service calls."
    }
  ];

  const benefits = [
    {
      title: "Increased sales efficiency",
      description: "Sales teams receive highly qualified leads, improving conversion rates."
    },
    {
      title: "Optimized service operations", 
      description: "Automated scheduling and troubleshooting streamline maintenance and repair processes."
    },
    {
      title: "Enhanced customer satisfaction",
      description: "Proactive reminders and quick support lead to happier solar system owners."
    },
    {
      title: "Reduced operational costs",
      description: "By handling routine inquiries and pre-qualifications, Fieson AI lowers administrative overhead."
    },
    {
      title: "Scalable customer support",
      description: "Manages high call volumes during peak demand for solar installations or seasonal maintenance."
    }
  ];

  const struggles = [
    "Managing high volume of new inquiries",
    "Scheduling complex installations and maintenance", 
    "Providing immediate support for technical issues",
    "Educating potential clients on solar benefits"
  ];

  const stats = [
    { value: "~90%", label: "Qualified lead generation" },
    { value: "4.8 out of 5", label: "Customer service rating" },
    { value: "100%", label: "Inquiries handled" }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      title: "Sales Director, BrightFuture Solar",
      quote: "Fieson AI has transformed our lead generation. We're now focusing only on highly qualified prospects, which has boosted our sales significantly.",
      image: "/public/testimonial-1-men.jpg"
    },
    {
      name: "Maria Sanchez", 
      title: "Operations Manager, SunPower Solutions",
      quote: "The automated maintenance scheduling is a lifesaver. Our customers appreciate the reminders, and our service team is more efficient than ever.",
      image: "/public/testimonial-2-women.jpg"
    },
    {
      name: "Tom Jenkins",
      title: "CEO, EcoSolar Installers", 
      quote: "With Fieson AI, we can handle all customer inquiries, from initial questions to technical support, without overwhelming our staff. It's truly scalable.",
      image: "/public/testimonial-3-men.jpg"
    }
  ];

  return (
    <IndustryPage
      industryName="Solar"
      heroImage="/public/placeholder.svg"
      features={features}
      benefits={benefits}
      struggles={struggles}
      stats={stats}
      testimonials={testimonials}
    />
  );
};

export default Solar;
