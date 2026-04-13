import posthog from 'posthog-js';

export const initPostHog = () => {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

  if (key) {
    posthog.init(key, {
      api_host: host,
      person_profiles: 'identified_only', // or 'always' depending on preference
      capture_pageview: false, // Manual pageview to keep free-tier volume controlled
      persistence: 'localStorage+cookie',
      autocapture: false,
    });
  }
};

export const trackEvent = (event: string, properties?: Record<string, string | number | boolean>) => {
  posthog.capture(event, properties);
};

export const trackPageView = (path: string) => {
  posthog.capture('$pageview', { path });
};

export const identifyLead = (leadId: string, properties?: Record<string, string>) => {
  if (!leadId) return;
  posthog.identify(leadId, properties);
};

export const setPostHogOptIn = (optedIn: boolean) => {
  if (optedIn) {
    posthog.opt_in_capturing();
  } else {
    posthog.opt_out_capturing();
  }
};

export default posthog;
