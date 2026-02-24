
export type Language = 'fr' | 'en' | 'de' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Post {
  category: string;
  title: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string; // Added for full article reading
  imageUrl?: string;
  audioUrl?: string; // Added for podcast
  videoUrl?: string; // Added for video
  isFeatured?: boolean;
}

export interface Content {
  header: {
    nav: { [key: string]: string };
    cta: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  ecosystem: {
    title: string;
  };
  problem: {
    title: string;
    description: string;
    cards: { title: string; description: string }[];
  };
  vision: {
    title: string;
    description: string;
    cta: string;
  };
  promptBuilder: {
    title: string;
    intro: string;
    steps: {
      challenge: { title: string; };
      tools: { title: string; available: string; selected: string; };
      wish: { title: string; placeholder: string; suggestions: string[]; };
    };
    challenges: { id: string; name: string; icon: string; }[];
    tools: { id: string; name: string; iconUrl: string; }[];
    preview: {
      title: string;
      workflow: string;
    };
    cta: string;
  };
  modules: {
    title: string;
    cards: {
      title: string;
      description: string;
      tag: string;
    }[];
  };
  podcasts: {
    title: string;
    subtitle: string;
    cta: string;
  };
  videos: {
    title: string;
    subtitle: string;
    cta: string;
  };
  useCases: {
    title: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  roi: {
    title: string;
    description: string;
    employeesLabel: string;
    hoursLabel: string;
    costLabel: string;
    savingsTitle: string;
    savingsPerYear: string;
    cta: string;
  };
  blog: {
    title: string;
    subtitle: string;
    filters: string[];
    posts: Post[];
    cta: string;
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
    };
  };
  footer: {
    description: string;
    sections: {
      title: string;
      links: string[];
    }[];
    copyright: string;
  };
  aiAssistant: {
    greeting: string;
    placeholder: string;
  };
}
