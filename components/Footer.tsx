import React from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const sections = [
    {
      id: "01",
      title: "Services",
      links: [
        { name: "Infogérance IA", href: "/services/infogerance-ia" },
        { name: "Cybersécurité NIS2", href: "/services/cybersecurite-nis2" },
        { name: "Migration Cloud", href: "/services/migration-cloud" },
        { name: "Audit Flash", href: "/#contact" }
      ]
    },
    {
      id: "02",
      title: "Tarifs",
      links: [
        { name: "Plan Starter", href: "/#tarifs" },
        { name: "Plan Pro", href: "/#tarifs" },
        { name: "Plan Enterprise", href: "/#tarifs" },
        { name: "Simulateur ROI", href: "/simulateur-roi" }
      ]
    },
    {
      id: "03",
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "Politique de Confidentialité", href: "/politique-confidentialite" },
        { name: "RGPD", href: "/rgpd" },
        { name: "CGU", href: "/cgu" }
      ]
    }
  ];

  return (
    <footer className="bg-white pt-24 md:pt-32 pb-12 border-t border-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Logo & Tagline */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img
                src="/brand-logo.png"
                alt="Agenzia"
                className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-2xl font-bold text-zinc-900 tracking-tighter font-brand">Agenzia<span className="text-[10px] align-top font-brand text-brand-accent">©</span></span>
            </Link>
            <p className="text-zinc-500 text-xl font-serif leading-relaxed max-w-sm mb-10 italic">
              Votre IT. Géré. Sécurisé. Souverain. L'infogérance IA-first pour les PME françaises.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Globe, text: "Données EU" },
                { icon: Shield, text: "NIS2" },
                { icon: Lock, text: "RGPD" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1 bg-white border border-black hover:border-brand-accent hover:bg-brand-accent/5 transition-all group">
                  <item.icon className="w-3 h-3 text-black group-hover:text-brand-accent transition-colors" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-black">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {sections.map((section, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">{section.id} // {section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      {link.href.startsWith('/#') ? (
                        <a 
                          href={link.href} 
                          className="text-sm font-serif text-zinc-500 hover:text-black hover:underline underline-offset-4 transition-all"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          to={link.href} 
                          className="text-sm font-serif text-zinc-500 hover:text-black hover:underline underline-offset-4 transition-all"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <p className="text-[10px] font-brand lowercase tracking-widest text-zinc-400">
                © 2025 Agenzia — Entreprise Lebsaira
              </p>
              <p className="text-[10px] font-mono text-zinc-300">
                13 Rue des Petits Champs, 67300 Schiltigheim · SIREN: 928 689 819
              </p>
            </div>
            <div className="flex md:justify-end gap-12">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:text-black transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
