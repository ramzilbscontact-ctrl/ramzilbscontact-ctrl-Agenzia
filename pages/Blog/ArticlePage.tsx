import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { getArticleBySlug, ArticleBlock } from './articles';

const renderBlock = (block: ArticleBlock, i: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-black font-serif uppercase tracking-tight mt-14 mb-6 text-zinc-900"
        >
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="font-serif text-lg text-zinc-600 leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="mb-6 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-4">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
              <span className="font-serif text-lg text-zinc-600 leading-relaxed">{item}</span>
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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400 mb-4">
          404 // ARTICLE INTROUVABLE
        </div>
        <h1 className="text-5xl font-black font-serif uppercase tracking-tighter mb-8">
          Cet article n'existe pas.
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest bg-black text-white px-8 py-4 border-[2px] border-black shadow-tactile hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="border-b border-zinc-100 px-6 py-4">
        <div className="container mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Article header */}
      <header className="py-20 px-6 border-b-[3px] border-black bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest px-3 py-1.5 bg-black text-white">
              {article.categorie}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black font-serif uppercase tracking-tight leading-[0.9] mb-10"
          >
            {article.titre}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-t border-zinc-100 pt-8"
          >
            <span className="flex items-center gap-2">
              <User className="w-3 h-3" />
              {article.auteur}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {article.tempsLecture} min de lecture
            </span>
          </motion.div>
        </div>
      </header>

      {/* Article content */}
      <article className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Lead paragraph styled distinctly */}
            <p className="text-xl md:text-2xl font-serif text-zinc-700 leading-relaxed border-l-[4px] border-brand-accent pl-6 mb-12">
              {article.excerpt}
            </p>

            {/* Body blocks */}
            {article.contenu.map((block, i) => renderBlock(block, i))}
          </motion.div>
        </div>
      </article>

      {/* CTA end of article */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-[3px] border-black p-10 md:p-14 shadow-tactile bg-zinc-50 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-3">
                AUDIT GRATUIT //
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-serif uppercase tracking-tighter mb-3">
                Passez à l'action maintenant.
              </h3>
              <p className="font-serif text-zinc-500 leading-relaxed">
                Nos experts analysent votre infrastructure et identifient vos vulnérabilités clés — sans engagement, sans frais.
              </p>
            </div>
            <Link
              to="/#contact"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-[10px] font-mono uppercase tracking-widest border-[2px] border-black shadow-tactile hover:shadow-tactile-accent hover:bg-brand-accent transition-all duration-200"
            >
              Demander un audit gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="border-t-[3px] border-black px-6 py-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest border-[2px] border-black px-6 py-3 shadow-tactile hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
