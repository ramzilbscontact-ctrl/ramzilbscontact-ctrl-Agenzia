import React from 'react';
import { motion } from 'motion/react';

const MentionsLegales: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-12">
            Mentions Légales
          </h1>
          
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Présentation du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://agenzia.ai" className="text-brand-accent hover:underline">agenzia.ai</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Propriétaire :</strong> Entreprise Lebsaira — SIREN : 928 689 819</li>
                <li><strong>Adresse :</strong> 13 Rue des Petits Champs, 67300 Schiltigheim</li>
                <li><strong>Responsable publication :</strong> Ramzi Lebsaira — hello@getagenzia.fr</li>
                <li><strong>Hébergeur :</strong> OVHcloud — 2 rue Kellermann, 59100 Roubaix</li>
                <li><strong>Délégué à la protection des données :</strong> Ramzi Lebsaira — hello@getagenzia.fr</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Conditions générales d’utilisation du site</h2>
              <p>
                L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Description des services fournis</h2>
              <p>
                Le site internet a pour objet de fournir une information concernant l’ensemble des activités de la société. Agenzia s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Propriété intellectuelle et contrefaçons</h2>
              <p>
                Agenzia est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Agenzia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Limitations de responsabilité</h2>
              <p>
                Agenzia agit en tant qu’éditeur du site. Agenzia est responsable de la qualité et de la véracité du contenu qu’il publie. Agenzia ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentionsLegales;
