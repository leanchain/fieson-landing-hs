import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAnalytics from "@/hooks/use-analytics";
import useBookDemo from "@/hooks/use-book-demo";

const Header = () => {
  const location = useLocation();
  const { trackEvent } = useAnalytics();
  const { handleBookDemoClick } = useBookDemo({ label: "Header - Book a Demo Button" });

  const navigation = [
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavLinkClick = (name: string, href: string) => {
    trackEvent({
      action: "navigation_click",
      category: "Header Navigation",
      label: `Nav Link: ${name} (${href})`,
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-1 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={() => handleNavLinkClick("Home", "/")}>
            <img src="/favicon.svg" alt="Fieson AI Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Fieson AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}
                onClick={() => handleNavLinkClick(item.name, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="headerDemo"
              size="default"
              onClick={handleBookDemoClick}
              className="h-9 py-2 md:h-11 md:py-3"
            >
              BOOK A DEMO
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center">
            <Button
              variant="headerDemo"
              size="default"
              onClick={handleBookDemoClick}
              className="h-9 py-2 md:h-11 md:py-3 my-1"
            >
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
