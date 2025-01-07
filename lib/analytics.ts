
export const trackEvent = (eventName: string, properties = {}) => {
  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, properties);
  }
  
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).ga) {
    (window as any).ga('send', 'event', {
      eventCategory: 'User',
      eventAction: eventName,
      ...properties
    });
  }
};
