import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Roofing",
    description: "Elevate your roofing business with specialized AI answering services.",
    link: "/industries/roofing",
    icon: "/public/placeholder.svg"
  },
  {
    name: "HVAC",
    description: "Keep your HVAC services running smoothly with intelligent call handling.",
    link: "/industries/hvac",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Plumbing",
    description: "Ensure no leak goes unaddressed with responsive AI for your plumbing business.",
    link: "/industries/plumbing",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Electrical",
    description: "Power up your electrical services with efficient and reliable AI support.",
    link: "/industries/electrical",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Landscaping",
    description: "Grow your landscaping business with AI that handles client inquiries seamlessly.",
    link: "/industries/landscaping",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Pest Control",
    description: "Exterminate missed calls and improve customer satisfaction for pest control.",
    link: "/industries/pest-control",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Solar",
    description: "Harness the power of AI to manage your solar installation and service calls.",
    link: "/industries/solar",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Window Cleaning",
    description: "Keep your window cleaning business sparkling with efficient AI call handling.",
    link: "/industries/window-cleaning",
    icon: "/public/placeholder.svg"
  },
  {
    name: "Commercial Cleaning",
    description: "Polish your commercial cleaning operations with smart AI answering services.",
    link: "/industries/commercial-cleaning",
    icon: "/public/placeholder.svg"
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-section text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fieson AI provides specialized answering services tailored to the unique needs of various service industries. Discover how we can help your business thrive.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Link to={industry.link} key={index}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-col items-center text-center">
                      <img src={industry.icon} alt={industry.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                      <CardTitle className="text-2xl font-bold">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center">
                      <CardDescription className="text-muted-foreground text-center">
                        {industry.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
