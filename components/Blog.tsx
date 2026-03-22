
import React, { useState } from 'react';
import type { Content, Post } from '../types';

interface BlogProps {
  content: Content['blog'];
  onNavigate?: (view: 'landing' | 'blog' | 'article', post?: Post) => void;
  isFullPage?: boolean;
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const SafeImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <img 
      src={error ? 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800' : src} 
      alt={alt} 
      onError={() => setError(true)}
      className={className}
      loading="lazy"
    />
  );
};

const Blog: React.FC<BlogProps> = ({ content, onNavigate, isFullPage = false }) => {
  const [activeFilter, setActiveFilter] = useState(content.filters[0]);
  
  const filteredPosts = content.posts.filter(post => 
    activeFilter === content.filters[0] || post.category === activeFilter
  );

  const featuredPost = filteredPosts.find(p => p.isFeatured) || filteredPosts[0];
  const otherPosts = filteredPosts.filter(p => p !== featuredPost);

  const handlePostClick = (post: Post) => {
    if (onNavigate) {
      onNavigate('article', post);
    }
  };

  return (
    <section className={`py-20 md:py-40 ${isFullPage ? 'bg-gray-50/30' : 'bg-white'}`} id="blog">
      <div className="container mx-auto px-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 animate-unfold">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-brand-primary tracking-tighter leading-[0.85] mb-8">
              {content.title}
            </h2>
            <p className="text-xl text-brand-secondary/60 font-medium max-w-xl border-l-2 border-brand-accent/30 pl-8 ml-2">
              {content.subtitle}
            </p>
          </div>
          
          {/* Navigation / Filters */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 pb-2">
            {content.filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative text-[11px] font-black uppercase tracking-[0.3em] transition-all pb-1 ${
                  activeFilter === filter 
                  ? 'text-brand-accent' 
                  : 'text-brand-secondary/40 hover:text-brand-primary'
                }`}
              >
                {filter}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all duration-500 ${activeFilter === filter ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        {featuredPost && (
          <div 
            onClick={() => handlePostClick(featuredPost)}
            className="group relative mb-32 cursor-pointer animate-unfold" 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-gray-50 rounded-[3rem] overflow-hidden shadow-tactile-lg transition-all duration-700 hover:shadow-2xl">
              <div className="lg:col-span-8 relative overflow-hidden h-[260px] sm:h-[380px] lg:h-[700px]">
                <SafeImage 
                  src={featuredPost.imageUrl || ''} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="lg:col-span-4 p-6 md:p-10 lg:p-16 flex flex-col justify-between bg-white border-l border-black/5">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white bg-brand-primary px-4 py-2 rounded-lg">
                      {featuredPost.category}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary/30">
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-primary tracking-tighter leading-[0.95] mb-6 group-hover:text-brand-accent transition-colors duration-500">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-brand-secondary/60 font-medium leading-relaxed mb-12">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-12 border-t border-black/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5">
                      <SafeImage 
                        src={featuredPost.authorAvatar || ''} 
                        alt={featuredPost.author} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-brand-primary">{featuredPost.author}</p>
                      <p className="text-[10px] font-bold text-brand-secondary/40 uppercase tracking-tighter">{featuredPost.date}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <ArrowRightIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feed & Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-24">
            {otherPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {otherPosts.map((post, index) => (
                  <div 
                    key={index} 
                    onClick={() => handlePostClick(post)}
                    className="group cursor-pointer animate-unfold" 
                    style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                  >
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-tactile ring-1 ring-black/5 group-hover:shadow-tactile-lg transition-all duration-500">
                      <SafeImage 
                        src={post.imageUrl || ''} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                      />
                      <div className="absolute top-6 left-6">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="px-2">
                       <div className="flex items-center gap-4 mb-4">
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-secondary/30">{post.date}</span>
                          <div className="w-1 h-1 rounded-full bg-brand-accent/40" />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-secondary/30">{post.readingTime}</span>
                       </div>
                       <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-primary tracking-tighter leading-[0.95] mb-4 group-hover:text-brand-accent transition-colors duration-300">
                         {post.title}
                       </h3>
                       <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full overflow-hidden border border-black/5 grayscale group-hover:grayscale-0 transition-all">
                            <SafeImage 
                              src={post.authorAvatar || ''} 
                              alt={post.author} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <span className="text-[10px] font-black text-brand-secondary/50 uppercase tracking-[0.2em]">{post.author}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-black/5 rounded-[2rem] text-brand-secondary/30 font-black uppercase tracking-widest text-xs">
                Aucun article dans cette catégorie
              </div>
            )}
          </div>

          {/* Sidebar: Newsletter & More */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="bg-brand-primary rounded-[2.5rem] p-12 text-white shadow-tactile-lg relative overflow-hidden group/card animate-unfold" style={{ animationDelay: '0.5s' }}>
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl group-hover/card:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                  <svg className="w-7 h-7 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter leading-none mb-6">
                  {content.newsletter.title}
                </h3>
                
                <p className="text-sm text-white/50 font-medium mb-12 leading-relaxed">
                  Rejoignez 500+ leaders d'opinion et recevez nos analyses stratégiques sur l'automatisation par l'IA directement dans votre boîte mail.
                </p>
                
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="relative group/input">
                    <input 
                      type="email" 
                      placeholder={content.newsletter.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold placeholder:text-white/20 focus:bg-white focus:text-brand-primary transition-all duration-500 outline-none"
                    />
                  </div>
                  <button className="w-full bg-white text-brand-primary font-black py-5 rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all shadow-xl active:scale-95">
                    {content.newsletter.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Link */}
        {!isFullPage && onNavigate && (
          <div className="mt-32 pt-16 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-12 animate-unfold">
            <p className="text-sm font-bold text-brand-secondary/30 uppercase tracking-[0.4em]">Explorez toutes nos publications</p>
            <button 
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-8 group"
            >
              <span className="text-xl font-black text-brand-primary tracking-tighter group-hover:text-brand-accent transition-colors">
                {content.cta}
              </span>
              <div className="w-16 h-16 rounded-full border-2 border-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-700">
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
