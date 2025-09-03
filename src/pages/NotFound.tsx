import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SeoHead from "@/components/SeoHead";
import useAnalytics from "@/hooks/use-analytics";

const NotFound = () => {
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    trackEvent({
      action: "page_not_found",
      category: "Error",
      label: `404 Page - ${location.pathname}`,
    });
  }, [location.pathname, trackEvent]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SeoHead title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline" onClick={() => trackEvent({
          action: "link_click",
          category: "Error Page",
          label: "Return to Home Link",
        })}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
