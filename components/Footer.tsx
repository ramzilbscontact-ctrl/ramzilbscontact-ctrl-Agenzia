
import React from 'react';
import type { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-transparent border-t border-gray-200/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-black text-brand-primary tracking-tighter">Agenzia</h3>
            <p className="mt-2 text-brand-secondary max-w-xs font-medium">{content.description}</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">{section.title}</h4>
                <ul className="mt-6 space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-brand-secondary/60 hover:text-brand-primary transition-colors text-[11px] font-bold uppercase tracking-widest">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200/80 text-center text-sm text-brand-secondary">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
