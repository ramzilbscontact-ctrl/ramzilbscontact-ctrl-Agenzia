
import React, { useState, useEffect } from 'react';
import type { Language, Content } from '../types';

// Use a local View type that matches the one in App.tsx
type View = 'landing' | 'blog' | 'article';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content['header'];
  onNavigate: (view: View) => void;
  currentView: View;
}

const LanguageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0" />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const languages: { code: Language; name: string }[] = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView === 'blog' || currentView === 'article' ? 'bg-gray-50/80 backdrop-blur-lg shadow-tactile' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('landing')}
            className="text-2xl font-black text-brand-primary tracking-tighter hover:opacity-70 transition-opacity"
          >
            Agenzia
          </button>
          
          <nav className="hidden lg:flex items-center gap-8 text-brand-secondary">
            <button onClick={() => onNavigate('landing')} className="text-xs font-black uppercase tracking-[0.2em] hover:text-brand-primary transition-colors">{content.nav.solutions}</button>
            <button 
              onClick={() => {
                onNavigate('landing');
                setTimeout(() => document.getElementById('podcasts')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-brand-primary transition-colors"
            >
              {content.nav.podcasts}
            </button>
            <button 
              onClick={() => {
                onNavigate('landing');
                setTimeout(() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-brand-primary transition-colors"
            >
              {content.nav.videos}
            </button>
            <button 
              onClick={() => onNavigate('blog')} 
              className={`text-xs font-black uppercase tracking-[0.2em] transition-colors ${currentView === 'blog' ? 'text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              {content.nav.blog}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
              >
                <LanguageIcon className="w-5 h-5" />
                <span className="hidden md:inline">{languages.find(l => l.code === language)?.name}</span>
                <ChevronDownIcon className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}/>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 end-0 bg-white rounded-md shadow-tactile-lg p-2 min-w-[120px] animate-unfold" style={{ animationDuration: '0.2s'}}>
                  {languages.map(({ code, name }) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-start px-3 py-1.5 rounded text-sm ${language === code ? 'bg-gray-100 text-brand-primary' : 'text-brand-secondary hover:bg-gray-50'}`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="https://cal.eu/getagenzia/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-brand-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
