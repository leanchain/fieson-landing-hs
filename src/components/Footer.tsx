import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FiesonLogo from "@/components/FiesonLogo";

const Footer = () => {
  const industries = [
    { name: "Commercial Cleaning", href: "/industries/commercial-cleaning" },
    { name: "Window Cleaning", href: "/industries/window-cleaning" },
    { name: "HVAC", href: "/industries/hvac" },
    { name: "Roofing", href: "/industries/roofing" },
    { name: "Solar", href: "/industries/solar" },
    { name: "Pest Control", href: "/industries/pest-control" },
    { name: "Plumbing Industry", href: "/industries/plumbing" },
  ];

  const company = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide">INDUSTRIES</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/resources"
                  className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide">GET STARTED</h3>
            <div className="space-y-4">
              <Button variant="demo" size="lg" className="w-full" onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}>
                Book a demo
              </Button>
              <Button variant="hero" size="xl" className="w-full h-14 text-lg font-semibold" onClick={() => window.dispatchEvent(new Event('focusPhoneInput'))}>
                Talk to Fieson AI
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <FiesonLogo white className="w-full h-full" />
              </div>
              <span className="text-xl font-bold">Fieson AI</span>
            </div>

            {/* Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <Link
                to="/terms-europe.html"
                className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition uppercase"
              >
                TERMS OF USE
              </Link>
              <Link to="/privacy-policy-europe.html" className="hover:text-foreground">
                privacy policy
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © Fieson AI Inc. 2025
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 text-center">
            <p className="text-primary-foreground/80 uppercase tracking-wide text-sm">SOCIAL MEDIA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;