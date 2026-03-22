
import React from 'react';
import type { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
  onNavigate: (view: 'landing' | 'blog' | 'article' | 'privacy' | 'legal' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ content, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const l = link.toLowerCase();
    if (l.includes('politique') || l.includes('privacy') || l.includes('datenschutz')) {
      onNavigate('privacy');
    } else if (l === 'blog') {
      onNavigate('blog');
    } else if (l.includes('mentions') || l.includes('legal')) {
      onNavigate('legal'); 
    } else if (l.includes('cgu') || l.includes('terms')) {
      onNavigate('terms');
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo & Baseline */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-black text-white tracking-tighter mb-4">Agenzia</h3>
            <p className="text-sm font-medium leading-relaxed max-w-sm">
              Agenzia - La puissance des agents IA au service de votre business.
            </p>
          </div>

          {/* Offices */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6">Bureaux</h4>
            <address className="not-italic text-sm font-medium">
              13 RUE des Petits Champs,<br />
              67300 Schiltigheim
            </address>
          </div>

          {/* Navigation Links (Simplified) */}
          <div className="lg:col-span-4 flex flex-col md:items-end">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {['Mentions Légales', 'Politique de Confidentialité', 'CGU'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Dense Block */}
        <div className="pt-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] leading-relaxed text-gray-500 max-w-3xl">
                Entreprise Lebsaira (Entrepreneur Individuel : Ramzi Lebsaira) — SIREN 928 689 819 — SIRET 928 689 819 00011. 
                Hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). 
                Registrar : OVH SAS (2 rue Kellermann, 59100 Roubaix, France). 
                Ce site est protégé par les lois sur la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                {content.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
