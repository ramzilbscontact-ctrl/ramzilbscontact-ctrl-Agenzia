
import React, { useState, useMemo } from 'react';
import type { Content } from '../types';

interface PromptBuilderProps {
  content: Content['promptBuilder'];
}

type Tool = { id: string; name: string; iconUrl: string; };

const ChallengeIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = "w-8 h-8" }) => {
    const icons: { [key: string]: React.ReactNode } = {
        magnet: <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />,
        balance: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m12 6a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4" />,
        team: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
        chart: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
        gear: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        ),
        chat: <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    };
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">{icons[icon] || ''}</svg>;
};

const Step: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-tactile-md transition-all duration-500">
        <h3 className="font-black text-brand-primary mb-8 text-xs uppercase tracking-[0.2em] opacity-40">{title}</h3>
        {children}
    </div>
);

const ToolIcon: React.FC<{ tool: Tool; className?: string }> = ({ tool, className = "h-6 w-6" }) => {
    const [status, setStatus] = useState<'primary' | 'fallback' | 'error'>('primary');
    
    // Clearbit URL
    const primarySrc = `https://logo.clearbit.com/${tool.iconUrl}?size=128`;
    // Google Favicon URL (Excellent backup)
    const fallbackSrc = `https://www.google.com/s2/favicons?sz=128&domain=${tool.iconUrl}`;

    if (status === 'error') {
        return (
            <div className={`${className} flex items-center justify-center bg-gray-50 rounded text-[9px] font-black text-brand-primary/40 uppercase tracking-tighter border border-black/5`}>
                {tool.name.substring(0, 2)}
            </div>
        );
    }

    return (
        <img 
            src={status === 'primary' ? primarySrc : fallbackSrc} 
            alt={tool.name} 
            onError={() => {
                if (status === 'primary') setStatus('fallback');
                else setStatus('error');
            }}
            className={`${className} object-contain transition-all duration-300`}
        />
    );
};

const PromptBuilder: React.FC<PromptBuilderProps> = ({ content }) => {
    const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
    const [selectedTools, setSelectedTools] = useState<Tool[]>([]);
    const [wish, setWish] = useState('');
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [draggedToolId, setDraggedToolId] = useState<string | null>(null);
    const [hoveredToolId, setHoveredToolId] = useState<string | null>(null);

    const availableTools = useMemo(() => {
        return content.tools.filter(tool => !selectedTools.some(selected => selected.id === tool.id));
    }, [content.tools, selectedTools]);
    
    const handleToolSelect = (tool: Tool) => {
        if (selectedTools.some(t => t.id === tool.id)) {
            setSelectedTools(selectedTools.filter(t => t.id !== tool.id));
        } else {
            setSelectedTools([...selectedTools, tool]);
        }
    };

    const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, tool: Tool) => {
        e.dataTransfer.setData("toolId", tool.id);
        setDraggedToolId(tool.id);
    };

    const handleDragEnd = () => {
        setDraggedToolId(null);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const toolId = e.dataTransfer.getData("toolId");
        const toolToAdd = content.tools.find(t => t.id === toolId);
        if (toolToAdd && !selectedTools.some(t => t.id === toolToAdd.id)) {
            setSelectedTools([...selectedTools, toolToAdd]);
        }
        setIsDraggingOver(false);
    };
    
    const isComplete = selectedChallenge && selectedTools.length > 0 && wish.length > 10;
    const getChallengeName = (id: string | null) => content.challenges.find(c => c.id === id)?.name;

    return (
        <section className="py-32 bg-gray-50/30">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-20 animate-unfold">
                    <h2 className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter leading-none mb-6">
                        {content.title}
                    </h2>
                    <p className="text-xl text-brand-secondary/80 font-medium">
                        {content.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {/* Step 1: Challenge */}
                        <Step title={content.steps.challenge.title}>
                           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {content.challenges.map(challenge => (
                                    <button 
                                        key={challenge.id} 
                                        onClick={() => setSelectedChallenge(challenge.id)} 
                                        className={`group relative flex flex-col items-center justify-center text-center p-8 rounded-[1.5rem] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${selectedChallenge === challenge.id ? 'bg-white scale-[1.05] shadow-tactile-lg ring-1 ring-black/5' : 'bg-white/40 hover:bg-white hover:scale-[1.02] shadow-sm'}`}
                                    >
                                        <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${selectedChallenge === challenge.id ? 'bg-brand-accent text-white' : 'bg-gray-100 text-brand-secondary/40'}`}>
                                            <ChallengeIcon icon={challenge.icon} className="w-8 h-8" />
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest leading-tight transition-colors duration-300 ${selectedChallenge === challenge.id ? 'text-brand-primary' : 'text-brand-secondary/60'}`}>{challenge.name}</span>
                                        {selectedChallenge === challenge.id && (
                                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                                        )}
                                    </button>
                                ))}
                           </div>
                        </Step>

                        {/* Step 2: Tools */}
                        <Step title={content.steps.tools.title}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                               <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-[9px] font-black text-brand-secondary/30 uppercase tracking-[0.25em]">{content.steps.tools.available} ({availableTools.length})</h4>
                                        <span className="text-[8px] font-black text-brand-accent/40 uppercase animate-pulse">Défilement ↓</span>
                                    </div>
                                    <div className="relative group/scroll">
                                        <div className="h-[280px] overflow-y-auto overflow-x-hidden pr-4 grid grid-cols-4 md:grid-cols-5 gap-3 no-scrollbar scroll-smooth">
                                            {availableTools.map(tool => (
                                                <div key={tool.id} className="relative group/tool">
                                                    <button 
                                                        onClick={() => handleToolSelect(tool)}
                                                        draggable
                                                        onDragStart={(e) => handleDragStart(e, tool)}
                                                        onDragEnd={handleDragEnd}
                                                        onMouseEnter={() => setHoveredToolId(tool.id)}
                                                        onMouseLeave={() => setHoveredToolId(null)}
                                                        className={`w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-sm border border-black/5 transition-all duration-300 hover:scale-110 hover:shadow-tactile-md cursor-grab active:cursor-grabbing ${draggedToolId === tool.id ? 'opacity-20 scale-90' : ''}`}
                                                    >
                                                        <div className="opacity-80 group-hover/tool:opacity-100 transition-all duration-300 scale-90 group-hover/tool:scale-100">
                                                            <ToolIcon tool={tool} className="h-7 w-7" />
                                                        </div>
                                                    </button>
                                                    {/* Tooltip */}
                                                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-brand-primary backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl pointer-events-none transition-all duration-300 whitespace-nowrap z-50 ${hoveredToolId === tool.id ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'}`}>
                                                        {tool.name}
                                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-brand-primary"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-4 h-12 bg-gradient-to-t from-white/90 to-transparent pointer-events-none rounded-b-2xl opacity-0 group-hover/scroll:opacity-100 transition-opacity" />
                                    </div>
                               </div>
                               <div 
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className="relative"
                               >
                                    <h4 className="text-[9px] font-black text-brand-secondary/30 uppercase tracking-[0.25em] mb-6">{content.steps.tools.selected}</h4>
                                    <div className={`min-h-[280px] rounded-[1.5rem] p-6 transition-all duration-500 border-2 border-dashed flex flex-wrap content-start gap-3 ${isDraggingOver ? 'border-brand-accent bg-blue-50/40 scale-[1.02]' : 'border-black/5 bg-black/[0.02]'}`}>
                                         {selectedTools.length === 0 && !isDraggingOver && (
                                             <div className="flex flex-col items-center justify-center w-full h-full text-center opacity-20 py-20">
                                                 <div className="w-10 h-10 rounded-full border-2 border-current mb-2 border-dashed" />
                                                 <span className="text-[9px] uppercase font-black tracking-widest">Glissez vos outils ici</span>
                                             </div>
                                         )}
                                         {selectedTools.map(tool => (
                                            <div key={tool.id} className="relative group/selected-tool">
                                                <button 
                                                    onClick={() => handleToolSelect(tool)}
                                                    onMouseEnter={() => setHoveredToolId(`sel-${tool.id}`)}
                                                    onMouseLeave={() => setHoveredToolId(null)}
                                                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-tactile-md border border-black/5 animate-pop-in transition-transform hover:scale-95"
                                                >
                                                    <ToolIcon tool={tool} className="h-6 w-6" />
                                                </button>
                                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-brand-primary backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl pointer-events-none transition-all duration-300 whitespace-nowrap z-50 ${hoveredToolId === `sel-${tool.id}` ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'}`}>
                                                    {tool.name}
                                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-brand-primary"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                               </div>
                            </div>
                        </Step>

                        {/* Step 3: Wish */}
                        <Step title={content.steps.wish.title}>
                            <div className="relative">
                                <textarea
                                    value={wish}
                                    onChange={(e) => setWish(e.target.value)}
                                    placeholder={content.steps.wish.placeholder}
                                    className="w-full h-32 bg-white/40 placeholder:text-brand-secondary/20 text-brand-primary border-black/5 focus:bg-white focus:ring-2 focus:ring-brand-accent focus:ring-opacity-20 rounded-[1.5rem] p-8 text-sm shadow-tactile-inset transition-all resize-none font-medium"
                                />
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {content.steps.wish.suggestions.map(s => (
                                        <button key={s} onClick={() => setWish(wish + (wish ? ' ' : '') + s)} className="bg-white border border-black/5 hover:bg-brand-primary hover:text-white transition-all text-[10px] font-black uppercase tracking-widest text-brand-secondary/60 px-5 py-2 rounded-full shadow-sm">{s}</button>
                                    ))}
                                </div>
                            </div>
                        </Step>
                    </div>

                    {/* Right Side: Solution Preview */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="bg-brand-primary rounded-[2.5rem] shadow-tactile-lg p-10 min-h-[560px] flex flex-col text-white">
                            <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] text-center mb-12">{content.preview.title}</h3>
                            <div className="flex-grow flex flex-col justify-center gap-12">
                                {selectedChallenge ? (
                                    <div className="text-center p-8 bg-white/5 rounded-[1.5rem] animate-pop-in border border-white/10">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2 block">Objectif</span>
                                        <p className="text-sm font-black">{getChallengeName(selectedChallenge)}</p>
                                    </div>
                                ) : (
                                    <div className="text-center p-8 opacity-20 italic text-sm">Configurez les étapes pour générer votre architecture...</div>
                                )}
                                
                                {selectedTools.length > 0 && (
                                     <div className="relative flex flex-col items-center gap-6">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Écosystème Connecté</div>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            {selectedTools.map((tool) => (
                                                <div key={tool.id} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center animate-pop-in overflow-hidden shadow-sm">
                                                    <ToolIcon tool={tool} className="h-5 w-5" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {wish.length > 10 && (
                                     <div className="p-8 bg-white/5 rounded-[1.5rem] text-xs leading-relaxed font-bold italic border-l-2 border-brand-accent animate-pop-in text-white/80">
                                        "{wish}"
                                     </div>
                                )}
                            </div>
                             <div className="mt-12">
                                <button disabled={!isComplete} className="w-full bg-white text-brand-primary font-black py-6 rounded-[1.5rem] shadow-xl transition-all disabled:opacity-10 disabled:scale-95 disabled:cursor-not-allowed hover:bg-brand-accent hover:text-white hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-tighter">
                                    <span>{content.cta}</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromptBuilder;
