import React from 'react';
import { motion } from 'motion/react';

const CGU: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-12">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition des services du site <a href="https://agenzia.ai" className="text-brand-accent hover:underline">agenzia.ai</a> et les conditions d'utilisation du site par l'Utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Accès au site</h2>
              <p>
                Le site est accessible gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les frais afférents à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à internet, sont exclusivement à la charge de l'Utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu du site (textes, images, logos, etc.) est protégé par le droit d'auteur. Toute reproduction ou représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site internet, est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Responsabilité</h2>
              <p>
                Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Évolution des conditions</h2>
              <p>
                Le site se réserve le droit de modifier les clauses de ces CGU à tout moment et sans justification.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CGU;
