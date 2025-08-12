import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "AI Voice Technology: Benefits and Challenges",
    description: "Explores how AI voice technology enhances convenience, efficiency, and personalization in various applications, including smart home devices and home services.",
    link: "/markdown/ai-voice-technology-benefits-and-challenges",
  },
  {
    title: "The Benefits of Voice AI for Smart Home Automation",
    description: "Discusses how voice AI improves accessibility and user experience in smart home automation, benefiting individuals with disabilities.",
    link: "/markdown/the-benefits-of-voice-ai-for-smart-home-automation",
  },
  {
    title: "How Voice AI Assistants Can Help Aging Adults Live Independently",
    description: "Focuses on the safety and assistance benefits of AI voice assistants for aging adults, including emergency calls and reminders.",
    link: "/markdown/how-voice-ai-assistants-can-help-aging-adults-live-independently",
  },
  {
    title: "The Impact of AI-Driven Voice Assistants on Smart Home Ecosystems",
    description: "An academic perspective on the positive impact of AI voice assistants in smart home environments, including challenges.",
    link: "/markdown/the-impact-of-ai-driven-voice-assistants-on-smart-home-ecosystems",
  },
  {
    title: "How AI Call Center Platforms Revolutionize Home Services",
    description: "Explains how AI improves customer interactions, automates tasks, and enhances efficiency in home service industries like HVAC and plumbing.",
    link: "/markdown/how-ai-call-center-platforms-revolutionize-home-services",
  },
  {
    title: "AI Answering and Scheduling Assistants for Home Service Leads",
    description: "Discusses how AI-powered assistants improve responsiveness and lead management for home service businesses.",
    link: "/markdown/ai-answering-and-scheduling-assistants-for-home-service-leads",
  },
  {
    title: "How AI is Revolutionizing the Home Services Industry",
    description: "Explores how AI streamlines customer service, optimizes operations, and enhances home safety in the home services sector.",
    link: "/markdown/how-ai-is-revolutionizing-the-home-services-industry",
  },
  {
    title: "The Future of Home Services: How AI is Changing the Game",
    description: "Examines how AI is driving efficiency across the customer journey, from lead intake to post-call wrap-ups, and reducing training time.",
    link: "/markdown/the-future-of-home-services-how-ai-is-changing-the-game",
  },
  {
    title: "AI in the Contact Center: The Future of Customer Service",
    description: "Focuses on how AI and automation can significantly cut down training time for new agents and provide real-time guidance.",
    link: "/markdown/ai-in-the-contact-center-the-future-of-customer-service",
  },
  {
    title: "Autonomous Repair Solutions: The Future of Home Services",
    description: "Discusses the potential rise of autonomous robots and drones for maintenance tasks and inspections in home services.",
    link: "/markdown/autonomous-repair-solutions-the-future-of-home-services",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-section text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore articles and insights on AI, home services, and voice technology.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    {article.link.startsWith("/markdown/") ? (
                      <Link
                        to={article.link}
                        className="text-accent hover:underline"
                      >
                        Read More
                      </Link>
                    ) : (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Read More
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;