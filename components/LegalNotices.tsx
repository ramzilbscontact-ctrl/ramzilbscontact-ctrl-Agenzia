
import React from 'react';
import { motion } from 'motion/react';

const LegalNotices: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-24 text-brand-primary"
    >
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
        <p className="mb-2">Le site getagenzia.fr est édité par :</p>
        <p className="mb-1"><strong>Entreprise Lebsaira</strong> (Entrepreneur Individuel : Ramzi Lebsaira)</p>
        <p className="mb-1">SIRET : 928 689 819 00011</p>
        <p className="mb-1">Adresse : 13 RUE des Petits Champs, 67300 Schiltigheim, France</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
        <p className="mb-2">Le site est hébergé par :</p>
        <p className="mb-1"><strong>Vercel Inc.</strong></p>
        <p className="mb-1">Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
        <p className="mb-1">Site web : https://vercel.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Registrar</h2>
        <p className="mb-2">Le nom de domaine est enregistré auprès de :</p>
        <p className="mb-1"><strong>OVH SAS</strong></p>
        <p className="mb-1">Adresse : 2 rue Kellermann, 59100 Roubaix, France</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
        <p className="mb-4">
          Pour toute question concernant le site, vous pouvez nous contacter à l'adresse du siège social mentionnée ci-dessus.
        </p>
      </section>
    </motion.div>
  );
};

export default LegalNotices;
