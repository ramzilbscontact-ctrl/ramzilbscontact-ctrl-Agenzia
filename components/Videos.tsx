
import React from 'react';
import type { Content, Post } from '../types';

interface VideosProps {
  content: Content['videos'];
  blogPosts: Post[];
  onNavigate?: (view: 'landing' | 'blog' | 'article', post?: Post) => void;
}

const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const Videos: React.FC<VideosProps> = ({ content, blogPosts, onNavigate }) => {
  // Filter posts that have videoUrl
  const videoPosts = blogPosts.filter(post => post.videoUrl);

  return (
    <section className="py-20 md:py-40 bg-white" id="videos">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 animate-unfold">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-brand-primary tracking-tighter leading-[0.85] mb-8">
              {content.title}
            </h2>
            <p className="text-xl text-brand-secondary/60 font-medium max-w-xl border-l-2 border-brand-accent/30 pl-8 ml-2">
              {content.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {videoPosts.map((post, index) => (
            <div 
              key={index}
              onClick={() => onNavigate?.('article', post)}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer animate-unfold"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="lg:col-span-7 relative aspect-video rounded-[2.5rem] overflow-hidden shadow-tactile-lg ring-1 ring-black/5">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <VideoIcon className="w-10 h-10" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent bg-brand-accent/5 px-4 py-2 rounded-lg">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-secondary/30">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-primary tracking-tighter leading-[0.95] group-hover:text-brand-accent transition-colors duration-500">
                  {post.title}
                </h3>
                
                <p className="text-xl text-brand-secondary/60 font-medium leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5">
                    <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-brand-primary">{post.author}</p>
                    <p className="text-[10px] font-bold text-brand-secondary/40 uppercase tracking-tighter">Expert Automatisation</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-black/5 flex justify-center">
          <button 
            onClick={() => onNavigate?.('blog')}
            className="bg-brand-primary text-white font-black px-12 py-6 rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl active:scale-95"
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
