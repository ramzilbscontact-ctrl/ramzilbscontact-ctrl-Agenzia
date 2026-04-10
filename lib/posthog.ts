import posthog from 'posthog-js';

export const initPostHog = () => {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

  if (key) {
    posthog.init(key, {
      api_host: host,
      person_profiles: 'identified_only', // or 'always' depending on preference
      capture_pageview: false, // We'll handle this manually or via router
      persistence: 'localStorage+cookie',
      autocapture: true,
    });
  }
};

export const setPostHogOptIn = (optedIn: boolean) => {
  if (optedIn) {
    posthog.opt_in_capturing();
  } else {
    posthog.opt_out_capturing();
  }
};

export default posthog;
