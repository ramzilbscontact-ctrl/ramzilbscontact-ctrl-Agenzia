import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { getArticleBySlug, ArticleBlock } from './articles';

const renderBlock = (block: ArticleBlock, i: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="headline text-2xl md:text-3xl mt-12 mb-5">
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="text-lg text-graphite leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="mb-6 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-lg text-graphite leading-relaxed">
              <span className="mt-2.5 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main className="min-h-[60vh] bg-pure flex flex-col items-center justify-center px-6 py-24 text-center">
        <span className="badge-pill badge-pill-danger mb-6">404 · Article introuvable</span>
        <h1 className="headline text-4xl md:text-5xl mb-6">Cet article n'existe pas</h1>
        <Link to="/blog" className="btn-tactile text-sm">
          <ArrowLeft size={16} />
          Retour au blog
        </Link>
      </main>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <main className="bg-pure">
      {/* Back nav */}
      <div className="border-b border-[--color-ghost] py-4">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-mist hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Article header — porcelaine bg */}
      <header className="bg-porcelain border-b border-[--color-ghost] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-pill">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              {article.categorie}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="headline mt-6 text-4xl md:text-5xl lg:text-6xl"
          >
            {article.titre}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-mist border-t border-[--color-ghost] pt-6"
          >
            <span className="inline-flex items-center gap-2"><User size={13} />{article.auteur}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={13} />{formattedDate}</span>
            <span className="inline-flex items-center gap-2"><Clock size={13} />{article.tempsLecture} min de lecture</span>
          </motion.div>
        </div>
      </header>

      {/* Body */}
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-ink leading-relaxed border-l-4 border-accent pl-6 mb-12 italic font-medium">
              {article.excerpt}
            </p>
            {article.contenu.map((block, i) => renderBlock(block, i))}
          </motion.div>
        </div>
      </article>

      {/* CTA end of article */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-porcelain p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Audit gratuit</div>
              <h3 className="headline text-xl md:text-2xl mb-3">Passez à l'action maintenant</h3>
              <p className="text-graphite leading-relaxed">
                Nos experts analysent votre infrastructure et identifient vos vulnérabilités clés —
                sans engagement, sans frais.
              </p>
            </div>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('open-smart-form', {
                    detail: { intent: 'audit_nis2', source: 'article_cta' },
                  })
                )
              }
              className="btn-tactile shrink-0 text-sm"
            >
              Demander un audit
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="border-t border-[--color-ghost] py-10 bg-porcelain">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/blog" className="btn-tactile-ghost text-xs">
            <ArrowLeft size={14} />
            Tous les articles
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
