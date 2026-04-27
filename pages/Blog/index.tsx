import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { articles } from './articles';
import PageLayout from '../../components/PageLayout';

const categoryStyle: Record<string, string> = {
  'Conformité': 'bg-accent-soft text-accent border-accent/15',
  'Intelligence Artificielle': 'bg-ink text-pure border-ink',
  'Outils MSP': 'bg-porcelain text-graphite border-[--color-ghost-strong]',
  'Cybersécurité': 'bg-danger-soft text-danger border-danger/15',
};

const ArticlePlaceholder: React.FC<{ index: number }> = ({ index }) => {
  // 4 patterns SVG génériques (grille / circuit / shield / lock) — refondus en porcelaine
  const patterns = [
    <svg key={0} viewBox="0 0 400 200" className="w-full h-full">
      <rect width="400" height="200" fill="#F9FAFB" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="200" stroke="#E4E4E7" strokeWidth="1" />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="#E4E4E7" strokeWidth="1" />
      ))}
      <text x="200" y="105" textAnchor="middle" fill="#A1A1AA" fontFamily="Manrope" fontSize="14" fontWeight="600">
        NIS2
      </text>
    </svg>,
    <svg key={1} viewBox="0 0 400 200" className="w-full h-full">
      <rect width="400" height="200" fill="#F4F5F7" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="#E4E4E7" strokeWidth="2" />
      <circle cx="300" cy="100" r="40" fill="none" stroke="#E4E4E7" strokeWidth="2" />
      <line x1="140" y1="100" x2="260" y2="100" stroke="#E4E4E7" strokeWidth="2" />
      <circle cx="200" cy="100" r="8" fill="#0066FF" opacity="0.5" />
      <text x="200" y="170" textAnchor="middle" fill="#A1A1AA" fontFamily="Manrope" fontSize="11">AI · MSP</text>
    </svg>,
    <svg key={2} viewBox="0 0 400 200" className="w-full h-full">
      <rect width="400" height="200" fill="#F9FAFB" />
      <polygon points="200,20 340,70 340,130 200,180 60,130 60,70" fill="none" stroke="#E4E4E7" strokeWidth="2" />
      <polygon points="200,45 315,82 315,118 200,155 85,118 85,82" fill="none" stroke="#E4E4E7" strokeWidth="1.5" />
      <text x="200" y="107" textAnchor="middle" fill="#A1A1AA" fontFamily="Manrope" fontSize="13" fontWeight="600">MSP</text>
    </svg>,
    <svg key={3} viewBox="0 0 400 200" className="w-full h-full">
      <rect width="400" height="200" fill="#FEE2E2" />
      <rect x="155" y="95" width="90" height="70" rx="8" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.4" />
      <path d="M170,95 V75 a30,30 0 0,1 60,0 V95" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.4" />
      <circle cx="200" cy="125" r="8" fill="#EF4444" opacity="0.4" />
      <text x="200" y="190" textAnchor="middle" fill="#EF4444" fontFamily="Manrope" fontSize="10" fontWeight="600">RANSOMWARE</text>
    </svg>,
  ];

  return (
    <div className="w-full h-48 overflow-hidden rounded-2xl border border-[--color-ghost-strong] bg-porcelain">
      {patterns[index % patterns.length]}
    </div>
  );
};

const Blog: React.FC = () => (
  <PageLayout
    title="Expertise & insights"
    badge="Blog"
    subtitle="Analyses, comparatifs et guides pratiques pour sécuriser et optimiser votre infrastructure IT."
    maxWidth="full"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {articles.map((article, i) => (
        <motion.article
          key={article.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="card-porcelain p-6 md:p-7 group flex flex-col"
        >
          <ArticlePlaceholder index={i} />

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                categoryStyle[article.categorie] ?? 'bg-porcelain text-graphite border-[--color-ghost-strong]'
              }`}
            >
              {article.categorie}
            </span>
            <span className="text-xs text-fog inline-flex items-center gap-1">
              <Clock size={12} />
              {article.tempsLecture} min
            </span>
            <span className="text-xs text-fog ml-auto">
              {new Date(article.date).toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </span>
          </div>

          <h2 className="headline mt-5 text-xl md:text-2xl group-hover:text-accent transition-colors">
            {article.titre}
          </h2>
          <p className="mt-3 text-graphite leading-relaxed">{article.excerpt}</p>

          <Link
            to={`/blog/${article.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink self-start group/link"
          >
            Lire l'article
            <ArrowRight
              size={14}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </motion.article>
      ))}
    </div>

    {/* CTA banner */}
    <div className="mt-20">
      <div className="rounded-3xl bg-ink text-pure px-8 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Audit gratuit</div>
          <h3 className="headline text-2xl md:text-3xl text-pure">Prêt à sécuriser votre IT ?</h3>
        </div>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'blog_cta' } })
            )
          }
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pure text-ink font-semibold text-sm shadow-card hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          Demander un audit gratuit
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </PageLayout>
);

export default Blog;
