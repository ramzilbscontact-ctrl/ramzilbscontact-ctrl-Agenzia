
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemMarquee from './components/EcosystemMarquee';
import Problem from './components/Problem';
import PromptBuilder from './components/PromptBuilder';
import Podcasts from './components/Podcasts';
import Videos from './components/Videos';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import RoiSimulator from './components/RoiSimulator';
import Blog from './components/Blog';
import ArticleDetail from './components/ArticleDetail';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotices from './components/LegalNotices';
import TermsOfService from './components/TermsOfService';
import type { Language, Direction, Post } from './types';
import { translations } from './constants';

type View = 'landing' | 'blog' | 'article' | 'privacy' | 'legal' | 'terms';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [content, setContent] = useState(translations.fr);
  const [view, setView] = useState<View>('landing');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const newDirection = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    setContent(translations[language] || translations.fr);
    document.documentElement.lang = language;
    document.documentElement.dir = newDirection;
  }, [language]);

  const handleNavigate = (targetView: View, post?: Post) => {
    if (post) setSelectedPost(post);
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-transparent text-brand-primary font-sans antialiased">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        content={content.header} 
        onNavigate={handleNavigate}
        currentView={view}
      />
      
      <main style={{ perspective: '1000px' }}>
        {view === 'landing' ? (
          <>
            <Hero content={content.hero} />
            <EcosystemMarquee content={content.ecosystem} />
            <Problem content={content.problem} />
            <PromptBuilder content={content.promptBuilder} />
            <Podcasts content={content.podcasts} blogPosts={content.blog.posts} onNavigate={handleNavigate} />
            <Videos content={content.videos} blogPosts={content.blog.posts} onNavigate={handleNavigate} />
            <Pricing content={content.pricing} />
            <Roadmap content={content.roadmap} />
            <RoiSimulator content={content.roi} />
            <Blog 
              content={content.blog} 
              onNavigate={handleNavigate} 
              isFullPage={false} 
            />
          </>
        ) : view === 'blog' ? (
          <div className="pt-20">
            <Blog 
              content={content.blog} 
              onNavigate={handleNavigate} 
              isFullPage={true} 
            />
          </div>
        ) : view === 'privacy' ? (
          <div className="pt-20">
            <PrivacyPolicy />
          </div>
        ) : view === 'legal' ? (
          <div className="pt-20">
            <LegalNotices />
          </div>
        ) : view === 'terms' ? (
          <div className="pt-20">
            <TermsOfService />
          </div>
        ) : (
          <div className="pt-20">
            {selectedPost && (
              <ArticleDetail 
                post={selectedPost} 
                onBack={() => handleNavigate('blog')} 
                content={content.articleDetail}
              />
            )}
          </div>
        )}
      </main>

      <Footer content={content.footer} onNavigate={handleNavigate} />
      <AiAssistant content={content.aiAssistant} />
    </div>
  );
};

export default App;
