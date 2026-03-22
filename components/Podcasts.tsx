
import React from 'react';
import type { Content, Post } from '../types';

interface PodcastsProps {
  content: Content['podcasts'];
  blogPosts: Post[];
  onNavigate?: (view: 'landing' | 'blog' | 'article', post?: Post) => void;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
  </svg>
);

const Podcasts: React.FC<PodcastsProps> = ({ content, blogPosts, onNavigate }) => {
  // Filter posts that have audioUrl
  const podcastPosts = blogPosts.filter(post => post.audioUrl);

  return (
    <section className="py-20 md:py-40 bg-gray-50/50" id="podcasts">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcastPosts.map((post, index) => (
            <div 
              key={index}
              onClick={() => onNavigate?.('article', post)}
              className="group bg-white rounded-[2.5rem] p-8 shadow-tactile hover:shadow-tactile-lg transition-all duration-500 cursor-pointer border border-black/5 animate-unfold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 shadow-inner bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-primary shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <PlayIcon className="w-8 h-8 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                  {post.readingTime}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{post.category}</span>
                    <div className="w-1 h-1 rounded-full bg-brand-secondary/20" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary/40">{post.date}</span>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-brand-primary/30 border border-brand-primary/10 px-2 py-0.5 rounded-full">LM Notebook</span>
                </div>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-brand-primary tracking-tighter leading-[0.95] group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-black/5">
                    <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-black text-brand-secondary/50 uppercase tracking-widest">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => onNavigate?.('blog')}
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-lg font-black text-brand-primary tracking-tighter group-hover:text-brand-accent transition-colors">
              {content.cta}
            </span>
            <div className="w-12 h-12 rounded-full border border-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
              <PlayIcon className="w-5 h-5 ml-0.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
