import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { articles } from './articles';

const categoryColor: Record<string, string> = {
  Conformité: 'bg-brand-accent text-white',
  'Intelligence Artificielle': 'bg-black text-white',
  'Outils MSP': 'bg-zinc-700 text-white',
  Cybersécurité: 'bg-red-600 text-white',
};

const ArticlePlaceholder: React.FC<{ index: number }> = ({ index }) => {
  const patterns = [
    // Grid pattern
    <svg key={0} viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#f4f4f4" />
      <line x1="0" y1="0" x2="400" y2="200" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="400" y1="0" x2="0" y2="200" stroke="#e0e0e0" strokeWidth="1" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="200" stroke="#e0e0e0" strokeWidth="1" />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="#e0e0e0" strokeWidth="1" />
      ))}
      <text x="200" y="105" textAnchor="middle" fill="#999" fontFamily="monospace" fontSize="12">NIS2</text>
    </svg>,
    // Circuit pattern
    <svg key={1} viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#f9f9f9" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="300" cy="100" r="40" fill="none" stroke="#e0e0e0" strokeWidth="2" />
      <line x1="140" y1="100" x2="260" y2="100" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="200" cy="100" r="8" fill="#e0e0e0" />
      <text x="200" y="165" textAnchor="middle" fill="#999" fontFamily="monospace" fontSize="10">AI — MSP</text>
    </svg>,
    // Shield pattern
    <svg key={2} viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#f4f4f4" />
      <polygon points="200,20 340,70 340,130 200,180 60,130 60,70" fill="none" stroke="#e0e0e0" strokeWidth="2" />
      <polygon points="200,45 315,82 315,118 200,155 85,118 85,82" fill="none" stroke="#e0e0e0" strokeWidth="1" />
      <text x="200" y="107" textAnchor="middle" fill="#bbb" fontFamily="monospace" fontSize="11">MSP</text>
    </svg>,
    // Lock pattern
    <svg key={3} viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#fff8f8" />
      <rect x="155" y="95" width="90" height="70" rx="4" fill="none" stroke="#e0e0e0" strokeWidth="2" />
      <path d="M170,95 V75 a30,30 0 0,1 60,0 V95" fill="none" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="200" cy="125" r="8" fill="#e0e0e0" />
      <text x="200" y="185" textAnchor="middle" fill="#bbb" fontFamily="monospace" fontSize="10">RANSOMWARE</text>
    </svg>,
  ];

  return (
    <div className="w-full h-48 overflow-hidden border-b-[2px] border-black bg-zinc-50">
      {patterns[index % patterns.length]}
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 px-6 border-b-[3px] border-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">07 // BLOG</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] sm:text-[8vw] md:text-[7vw] leading-[0.85] font-black uppercase font-serif tracking-tighter"
          >
            EXPERTISE &<br />
            <span className="italic font-light text-brand-accent">INSIGHTS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-xl font-serif text-zinc-500 leading-relaxed"
          >
            Analyses, comparatifs et guides pratiques pour sécuriser et optimiser votre infrastructure IT.
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black shadow-tactile">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                viewport={{ once: true }}
                className="border-r border-b border-black group overflow-hidden bg-white hover:bg-zinc-50 transition-colors duration-300"
              >
                {/* Image placeholder */}
                <div className="overflow-hidden">
                  <ArticlePlaceholder index={i} />
                </div>

                <div className="p-8">
                  {/* Meta top row */}
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span
                      className={`text-[9px] font-mono uppercase tracking-widest px-2 py-1 ${
                        categoryColor[article.categorie] ?? 'bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      <Tag className="w-2.5 h-2.5 inline mr-1" />
                      {article.categorie}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.tempsLecture} min de lecture
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 ml-auto">
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black font-serif uppercase tracking-tight leading-tight mb-4 group-hover:text-brand-accent transition-colors duration-200">
                    {article.titre}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-serif text-zinc-500 text-base leading-relaxed mb-8">
                    {article.excerpt}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest border-[2px] border-black px-6 py-3 shadow-tactile hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white transition-all duration-200"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-black text-white border-t-[3px] border-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.4em] mb-3">
              AUDIT GRATUIT //
            </div>
            <h3 className="text-3xl md:text-4xl font-black font-serif uppercase tracking-tighter">
              Prêt à sécuriser votre IT ?
            </h3>
          </div>
          <Link
            to="/#contact"
            className="bg-brand-accent text-white px-10 py-5 text-[10px] font-mono uppercase tracking-widest border-[2px] border-brand-accent shadow-tactile-accent hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center gap-3 flex-shrink-0"
          >
            Demander un audit gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
