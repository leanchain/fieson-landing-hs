import { useCallback } from 'react';

interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any; // Allow for additional custom parameters
}

const useAnalytics = () => {
  const trackEvent = useCallback((event: GtagEvent) => {
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event, // Spread any additional properties
      });
    } else {
      console.warn('gtag is not defined. Analytics event not sent:', event);
    }
  }, []);

  return { trackEvent };
};

export default useAnalytics;
