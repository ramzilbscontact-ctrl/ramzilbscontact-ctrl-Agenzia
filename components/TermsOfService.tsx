
import React from 'react';
import { motion } from 'motion/react';

const TermsOfService: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-24 text-brand-primary"
    >
      <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation (CGU)</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
        <p className="mb-4">
          Les présentes CGU ont pour objet de définir les modalités de mise à disposition et d'utilisation des services du site getagenzia.fr.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Services d'Intelligence Artificielle</h2>
        <p className="mb-4">
          Agenzia propose des services basés sur l'intelligence artificielle (IA). L'utilisateur reconnaît et accepte que :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Les agents IA d'Agenzia fournissent des réponses et des recommandations à titre purement <strong>informatif</strong>.</li>
          <li>Les informations générées par l'IA ne constituent en aucun cas un conseil juridique, financier ou professionnel contraignant.</li>
          <li>L'IA peut parfois générer des informations inexactes ou incomplètes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Responsabilité de l'utilisateur</h2>
        <p className="mb-4">
          L'utilisateur est <strong>seul responsable</strong> de l'usage qu'il fait des données générées par les services d'Agenzia. Il lui appartient de vérifier l'exactitude et la pertinence des informations fournies par l'IA avant toute prise de décision ou action.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          Tous les éléments du site (textes, graphismes, logos, sons, photos, animations) sont la propriété exclusive de l'Entreprise Lebsaira, sauf mention contraire. Toute reproduction est interdite sans autorisation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Modification des CGU</h2>
        <p className="mb-4">
          L'Entreprise Lebsaira se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Droit applicable</h2>
        <p className="mb-4">
          Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>
    </motion.div>
  );
};

export default TermsOfService;
