
import React from 'react';
import type { Post } from '../types';

interface ArticleDetailProps {
  post: Post;
  onBack: () => void;
}

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
  </svg>
);

const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const ArticleDetail: React.FC<ArticleDetailProps> = ({ post, onBack }) => {
  return (
    <article className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary/40 hover:text-brand-primary transition-all"
        >
          <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
            <ArrowLeftIcon className="w-4 h-4" />
          </div>
          Retour à la sélection
        </button>
      </div>

      {/* Hero Header */}
      <header className="container mx-auto px-6 mb-20 animate-unfold">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">
              {post.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-brand-secondary/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary/40">
              {post.readingTime} de lecture
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9] mb-12">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 pb-12 border-b border-black/5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-tactile ring-1 ring-black/5">
              <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-brand-primary">{post.author}</p>
              <p className="text-[10px] font-bold text-brand-secondary/40 uppercase tracking-tighter">Publié le {post.date}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-6 mb-24 animate-unfold" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-tactile-lg h-[400px] md:h-[600px] relative group">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          
          {/* Ecosystem Badge (1=3) */}
          <div className="absolute top-8 right-8 flex gap-3">
            {post.audioUrl && (
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
                <div className="w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center">
                  <PlayIcon className="w-4 h-4 ml-0.5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Podcast Inclus</span>
              </div>
            )}
            {post.videoUrl && (
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
                <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center">
                  <VideoIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Vidéo Incluse</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Players Section */}
      {(post.audioUrl || post.videoUrl) && (
        <div className="container mx-auto px-6 mb-24 animate-unfold" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.audioUrl && (
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-black/5 shadow-tactile">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center text-white shadow-lg">
                    <PlayIcon className="w-8 h-8 ml-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-primary tracking-tight">Écouter le Podcast</h3>
                    <p className="text-xs font-bold text-brand-secondary/40 uppercase tracking-widest">Version Audio Augmentée</p>
                  </div>
                </div>
                <audio controls className="w-full h-10">
                  <source src={post.audioUrl} type="audio/mpeg" />
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
            )}
            
            {post.videoUrl && (
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-black/5 shadow-tactile">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-lg">
                    <VideoIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-primary tracking-tight">Voir la Vidéo</h3>
                    <p className="text-xs font-bold text-brand-secondary/40 uppercase tracking-widest">Masterclass Technique</p>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <video controls className="w-full h-full object-cover">
                    <source src={post.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas l'élément vidéo.
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 pb-40 animate-unfold" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-3xl mx-auto">
          {/* Excerpt as intro */}
          <div className="text-2xl md:text-3xl font-black text-brand-primary tracking-tighter leading-relaxed mb-16 border-l-4 border-brand-accent pl-8 italic">
            {post.excerpt}
          </div>

          {/* Main Body */}
          <div 
            className="prose prose-lg max-w-none text-brand-secondary/80 font-medium leading-relaxed
                       prose-headings:text-brand-primary prose-headings:font-black prose-headings:tracking-tighter
                       prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8
                       prose-p:mb-8 prose-blockquote:border-brand-accent prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic
                       prose-ul:list-disc prose-ul:pl-6 prose-li:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary tracking-tighter mb-12">
            Prêt à transformer vos opérations ?
          </h2>
          <button className="bg-brand-primary text-white font-black px-12 py-6 rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl active:scale-95">
            Planifier un audit stratégique
          </button>
        </div>
      </section>
    </article>
  );
};

export default ArticleDetail;
