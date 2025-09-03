import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-1 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="Fieson AI Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Fieson AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"></nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="headerDemo"
              size="default"
              onClick={() =>
                window.open(
                  "https://cal.com/bart-rosier/session-bart",
                  "_blank"
                )
              }
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
              onClick={() =>
                window.open(
                  "https://cal.com/bart-rosier/session-bart",
                  "_blank"
                )
              }
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
