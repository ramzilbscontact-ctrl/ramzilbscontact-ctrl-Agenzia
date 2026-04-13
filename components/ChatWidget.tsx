import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Phone, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/posthog';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-80 bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            <div className="bg-black p-8 text-white">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-2">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    trackEvent('chat_widget_closed');
                  }}
                  className="p-2 hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-tighter mb-2 italic">Une question ?</h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Appelez-nous directement</p>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8 p-6 border border-black hover:bg-zinc-50 transition-colors group">
                <div className="bg-black p-3 group-hover:bg-brand-accent transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">Ligne Directe</div>
                  <div className="text-lg font-serif font-bold tracking-tight">+33 1 59 13 17 47</div>
                </div>
              </div>
              
              <a
                href="https://www.cal.eu/getagenzia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('chat_widget_cta_clicked', { cta: 'prendre_rendez_vous' })}
                className="flex items-center justify-between w-full bg-black text-white px-8 py-4 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-800 transition-colors group"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          trackEvent(next ? 'chat_widget_opened' : 'chat_widget_closed');
        }}
        className="bg-black text-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-4 group"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full border-2 border-black animate-pulse" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest hidden md:block">Une question ?</span>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
