import { useCallback } from 'react';
import useAnalytics from './use-analytics';
import { useNavigate } from 'react-router-dom';

interface UseBookDemoOptions {
  label: string;
}

const useBookDemo = (options: UseBookDemoOptions) => {
  const { trackEvent } = useAnalytics();
  const navigate = useNavigate();

  const handleBookDemoClick = useCallback(() => {
    trackEvent({
      action: "button_click",
      category: "Demo Call to Action",
      label: options.label,
    });
    navigate('/book-a-demo');
  }, [trackEvent, options.label, navigate]);

  return { handleBookDemoClick };
};

export default useBookDemo;
