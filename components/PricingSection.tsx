import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "01",
      name: "Starter",
      price: "0€",
      description: "Audit Flash NIS2",
      features: [
        "Scan de vulnérabilités",
        "Rapport initial",
        "Conseils de remédiation",
        "Support par email"
      ],
      cta: "Commencer",
      href: "/simulateur-roi",
      popular: false
    },
    {
      id: "02",
      name: "Pro",
      price: isAnnual ? "16€" : "20€",
      description: "Continuité totale + Immunité",
      features: [
        "Zéro interruption garantie",
        "Mises à jour invisibles",
        "Résolution instantanée",
        "Conformité NIS2 permanente",
        "Rapport de valeur mensuel"
      ],
      cta: "Garantir mon IT",
      href: "https://buy.stripe.com/test_placeholder_pro",
      popular: true
    },
    {
      id: "03",
      name: "Enterprise",
      price: "DEVIS",
      description: "Souveraineté totale + SLA Critique",
      features: [
        "Accompagnement stratégique",
        "Infrastructure 100% Européenne",
        "Disponibilité 99.99%",
        "Audit de performance annuel",
        "Gestion de crise prioritaire"
      ],
      cta: "Nous contacter",
      href: "#contact",
      popular: false
    }
  ];

  return (
    <section id="tarifs" className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">04 // INVESTMENT</div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              TRANSPARENT.<br />SANS SURPRISE.
            </h2>
          </div>
          
          <div className="flex items-center gap-0 border border-black p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-2 text-[10px] font-mono uppercase tracking-widest transition-all",
                !isAnnual ? "bg-black text-white" : "text-zinc-400"
              )}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-2 text-[10px] font-mono uppercase tracking-widest transition-all flex items-center gap-2",
                isAnnual ? "bg-black text-white" : "text-zinc-400"
              )}
            >
              Annuel
              <span className={cn("text-[8px] px-1.5 py-0.5 rounded", isAnnual ? "bg-white text-black" : "bg-black text-white")}>-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black shadow-tactile">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 md:p-12 flex flex-col relative border-r border-b border-black transition-all duration-300 group hover:bg-black hover:text-white overflow-hidden",
                plan.popular ? "bg-zinc-50/50" : "bg-white"
              )}
            >
              {/* Hover Color Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <div className="mb-16">
                <div className="text-[10px] font-mono text-zinc-400 group-hover:text-brand-accent uppercase tracking-widest mb-4 transition-colors">{plan.id} // {plan.name}</div>
                <div className="text-6xl font-black text-zinc-900 group-hover:text-white tracking-tighter mb-4 font-serif transition-colors">
                  {plan.price}
                  {plan.price !== "0€" && plan.price !== "DEVIS" && (
                    <span className="text-sm font-mono text-zinc-400 ml-2 tracking-normal uppercase">/device</span>
                  )}
                </div>
                <p className="text-zinc-500 group-hover:text-zinc-400 text-lg font-serif italic transition-colors">{plan.description}</p>
              </div>

              <div className="space-y-6 mb-20 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="w-1 h-1 bg-black group-hover:bg-brand-accent rounded-full transition-colors" />
                    <span className="text-zinc-600 group-hover:text-zinc-300 text-sm font-serif transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.href}
                className={cn(
                  "w-full py-6 text-[10px] font-mono uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 border border-black shadow-tactile group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1",
                  plan.popular 
                    ? "bg-black text-white group-hover:bg-brand-accent group-hover:text-white" 
                    : "bg-white text-zinc-900 hover:bg-zinc-50 group-hover:bg-white group-hover:text-black"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
