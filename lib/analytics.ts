export function trackEvent(eventName: string, data: Record<string, any> = {}) {
  // In a real implementation, this would send to your analytics service
  if (typeof window !== 'undefined') {
    console.log('Event tracked:', eventName, data)
    
    // Example: You could use Google Analytics, Mixpanel, etc.
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', eventName, data)
    // }
    // if (typeof mixpanel !== 'undefined') {
    //   mixpanel.track(eventName, data)
    // }
  }
}