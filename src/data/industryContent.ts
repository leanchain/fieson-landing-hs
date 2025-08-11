export const industryContent = {
  roofing: {
    industryName: "Roofing",
    heroImage: "/src/assets/roofer-hero.jpg",
    features: [
      {
        title: "Material and crew coordination",
        description: "Fieson AI efficiently manages logistics for materials delivery and team assignments across multiple job sites."
      },
      {
        title: "Smart scope assessment", 
        description: "Fieson AI gathers initial info about roof type, size, and problems to prepare accurate quotes and dispatch appropriate crews."
      },
      {
        title: "Weather-adaptive scheduling",
        description: "Real-time weather data informs our AI to optimize job planning and reduce weather-related cancellations."
      }
    ],
    benefits: [
      {
        title: "Customized quoting",
        description: "It's equipped with a deep understanding of your unique services and roofing industry terminology and installation processes."
      },
      {
        title: "Always-on availability", 
        description: "Our AI never sleeps, so you can capture after-hours emergency calls as they come in for a better, more responsive customer experience."
      },
      {
        title: "Peak season support",
        description: "Storm season? No problem. Fieson AI handles high call volumes during peak seasons without overstretching any member of your team."
      },
      {
        title: "Automated follow-ups",
        description: "Our AI features intelligent reminders for client inspections and maintenance checks to help with customer retention all year round."
      },
      {
        title: "Excellent communication",
        description: "Your customers will get clear communication about warranties and after-service support, ensuring all their questions are answered."
      }
    ],
    struggles: [
      "Work delays due to weather",
      "Managing customer expectations", 
      "Inefficient crew assignments",
      "High staff turnover"
    ],
    stats: [
      { value: "~92%", label: "Reported booking rate" },
      { value: "4.8 out of 5", label: "Satisfaction amongst Fieson AI customers" },
      { value: "100%", label: "Phone calls answered" }
    ],
    testimonials: [
      {
        name: "Konnor Buscho",
        title: "CMO, Way Cool Heating & Air",
        quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
        image: "/public/testimonial-1-men.jpg"
      },
      {
        name: "Joshua Smith", 
        title: "COO, Arizona Roofing Systems",
        quote: "The service has been really great! We have not been missing any calls like we were previously. We also use it for after hours which works out wonderfully! This is a great system you have set up.",
        image: "/public/testimonial-2-women.jpg"
      },
      {
        name: "Taylor Craig",
        title: "Marketing Coordinator, Cellino Plumbing", 
        quote: "It's been a reliable solution for our business, and we look forward to continuing to work with them as we grow.",
        image: "/public/testimonial-3-men.jpg"
      }
    ]
  },
  hvac: {
    industryName: "HVAC",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing emergency calls after hours",
      "Inefficient scheduling and dispatch", 
      "High call volumes during peak seasons",
      "Customer dissatisfaction due to long wait times"
    ],
    stats: [
      { value: "~95%", label: "Customer issue resolution rate" },
      { value: "4.9 out of 5", label: "Technician efficiency rating" },
      { value: "100%", label: "Emergency calls handled" }
    ],
    testimonials: [
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
    ]
  },
  plumbing: {
    industryName: "Plumbing",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Handling after-hours plumbing emergencies",
      "Scheduling conflicts and missed appointments", 
      "Managing high call volumes during peak seasons",
      "Inefficient dispatching of technicians"
    ],
    stats: [
      { value: "~90%", label: "Emergency call resolution" },
      { value: "4.7 out of 5", label: "Customer satisfaction" },
      { value: "100%", label: "Calls answered 24/7" }
    ],
    testimonials: [
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
    ]
  },
  electrical: {
    industryName: "Electrical",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Handling sudden power outages and emergencies",
      "Managing complex service upgrade inquiries", 
      "Ensuring technician safety and preparedness",
      "High demand during peak seasons"
    ],
    stats: [
      { value: "~93%", label: "Electrical issue resolution" },
      { value: "4.8 out of 5", label: "Service reliability rating" },
      { value: "100%", label: "Critical calls managed" }
    ],
    testimonials: [
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
    ]
  },
  landscaping: {
    industryName: "Landscaping",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing seasonal demand fluctuations",
      "Scheduling and dispatching multiple crews", 
      "Providing accurate quotes quickly",
      "Handling diverse client requests and preferences"
    ],
    stats: [
      { value: "~90%", label: "Service booking rate" },
      { value: "4.7 out of 5", label: "Client satisfaction" },
      { value: "100%", label: "Seasonal calls managed" }
    ],
    testimonials: [
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
    ]
  },
  pestControl: {
    industryName: "Pest Control",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing urgent infestation calls",
      "Scheduling recurring pest prevention services", 
      "Educating customers on pest types and solutions",
      "High demand during specific seasons"
    ],
    stats: [
      { value: "~95%", label: "Pest eradication success rate" },
      { value: "4.9 out of 5", label: "Customer satisfaction" },
      { value: "100%", label: "Calls answered 24/7" }
    ],
    testimonials: [
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
    ]
  },
  solar: {
    industryName: "Solar",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing high volume of new inquiries",
      "Scheduling complex installations and maintenance", 
      "Providing immediate support for technical issues",
      "Educating potential clients on solar benefits"
    ],
    stats: [
      { value: "~90%", label: "Qualified lead generation" },
      { value: "4.8 out of 5", label: "Customer service rating" },
      { value: "100%", label: "Inquiries handled" }
    ],
    testimonials: [
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
    ]
  },
  windowCleaning: {
    industryName: "Window Cleaning",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing weather-related rescheduling",
      "Handling high call volumes during busy seasons", 
      "Providing quick and accurate quotes",
      "Ensuring consistent service for recurring clients"
    ],
    stats: [
      { value: "~92%", label: "Service booking rate" },
      { value: "4.9 out of 5", label: "Customer satisfaction" },
      { value: "100%", label: "Calls answered 24/7" }
    ],
    testimonials: [
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
    ]
  },
  commercialCleaning: {
    industryName: "Commercial Cleaning",
    heroImage: "/public/placeholder.svg",
    features: [
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
    ],
    benefits: [
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
    ],
    struggles: [
      "Managing complex and varied client requirements",
      "Scheduling services around business operating hours", 
      "Ensuring consistent quality across multiple sites",
      "Handling client feedback and complaints efficiently"
    ],
    stats: [
      { value: "~95%", label: "Client retention rate" },
      { value: "4.9 out of 5", label: "Service quality rating" },
      { value: "100%", label: "Client inquiries managed" }
    ],
    testimonials: [
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
    ]
  }
};
