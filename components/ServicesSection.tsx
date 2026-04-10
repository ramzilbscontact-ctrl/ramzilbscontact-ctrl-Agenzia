import React from 'react';
import { motion } from 'motion/react';
import { Server, Shield, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      tag: "CONTINUITY",
      title: "Flux Opérationnel",
      description: "Élimination des interruptions de service. Votre infrastructure s'auto-répare avant que l'impact ne soit visible.",
      href: "/services/infogerance-ia",
      className: "md:col-span-2"
    },
    {
      id: "02",
      tag: "IMMUNITY",
      title: "Immunité Cyber",
      description: "Protection active et conformité NIS2. Nous transformons votre sécurité en un actif opposable.",
      href: "/services/cybersecurite-nis2",
      className: "md:col-span-1"
    },
    {
      id: "03",
      tag: "SOVEREIGNTY",
      title: "Cloud Souverain",
      description: "Migration et gestion de vos données sur des infrastructures européennes protégées.",
      href: "/services/migration-cloud",
      className: "md:col-span-1"
    },
    {
      id: "04",
      tag: "PERFORMANCE",
      title: "Audit de Valeur",
      description: "Diagnostic complet de votre efficacité IT et identification des leviers de croissance.",
      href: "/audit",
      className: "md:col-span-2"
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50 border-b border-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">02 // THE OUTCOME</div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              DES RÉSULTATS.<br />PAS DES PROMESSES.
            </h2>
          </div>
          <p className="text-xl font-serif text-zinc-500 max-w-sm leading-relaxed">
            Nous transformons votre infrastructure technique en un moteur de croissance stable, sécurisé et souverain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black shadow-tactile">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group border-r border-b border-black p-8 md:p-12 bg-white transition-all duration-300 hover:bg-black hover:text-white flex flex-col justify-between min-h-[350px] md:min-h-[400px] relative overflow-hidden",
                service.className
              )}
            >
              {/* Hover Color Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              
              <div>
                <span className="font-mono text-[10px] mb-12 block text-zinc-400 group-hover:text-brand-accent tracking-[0.3em] transition-colors">
                  {service.id} // {service.tag}
                </span>
                <h3 className="text-4xl font-serif font-bold uppercase mb-6 tracking-tight group-hover:italic transition-all">{service.title}</h3>
                <p className="font-serif text-lg leading-relaxed text-zinc-500 group-hover:text-zinc-300 max-w-md transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="mt-12">
                <Link 
                  to={service.href}
                  className="inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest group-hover:text-brand-accent group-hover:gap-8 transition-all"
                >
                  View Specification
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
