import { useCallback } from 'react';
import useAnalytics from './use-analytics';

interface UseBookDemoOptions {
  label: string;
}

const useBookDemo = (options: UseBookDemoOptions) => {
  const { trackEvent } = useAnalytics();

  const handleBookDemoClick = useCallback(() => {
    trackEvent({
      action: "button_click",
      category: "Demo Call to Action",
      label: options.label,
    });
    window.open("https://cal.com/bart-rosier/session-bart", "_blank");
  }, [trackEvent, options.label]);

  return { handleBookDemoClick };
};

export default useBookDemo;
