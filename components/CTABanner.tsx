import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTABanner = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-black p-12 lg:p-24 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[1.1] font-serif uppercase">
              Votre IT mérite la<br />certitude opérationnelle.
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
              {[
                "Audit de Valeur Offert",
                "Transition en 48h",
                "Zéro Engagement"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2' } }))}
              className="inline-flex items-center gap-6 bg-white text-black px-12 py-6 text-xs font-mono tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300"
            >
              Planifier mon diagnostic
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
