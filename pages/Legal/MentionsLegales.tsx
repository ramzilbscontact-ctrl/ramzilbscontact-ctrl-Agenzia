import React from 'react';
import PageLayout from '../../components/PageLayout';
import LegalContent from '../../components/LegalContent';

const MentionsLegales: React.FC = () => (
  <PageLayout title="Mentions légales" badge="Légal" maxWidth="prose">
    <LegalContent>
      <section>
        <h2>1. Présentation du site</h2>
        <p>
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
          numérique, il est précisé aux utilisateurs du site internet{' '}
          <a href="https://getagenzia.fr">getagenzia.fr</a> l'identité des différents intervenants dans le
          cadre de sa réalisation et de son suivi :
        </p>
        <ul>
          <li><strong>Propriétaire :</strong> Entreprise Lebsaira — SIREN 928 689 819</li>
          <li><strong>Adresse :</strong> 13 Rue des Petits Champs, 67300 Schiltigheim</li>
          <li><strong>Responsable publication :</strong> Ramzi Lebsaira — hello@getagenzia.fr</li>
          <li><strong>Hébergeur :</strong> OVHcloud — 2 rue Kellermann, 59100 Roubaix</li>
          <li><strong>Délégué à la protection des données :</strong> Ramzi Lebsaira — hello@getagenzia.fr</li>
        </ul>
      </section>

      <section>
        <h2>2. Conditions générales d'utilisation</h2>
        <p>
          L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation
          décrites. Ces conditions sont susceptibles d'être modifiées à tout moment, les utilisateurs sont
          invités à les consulter régulièrement.
        </p>
      </section>

      <section>
        <h2>3. Description des services</h2>
        <p>
          Le site a pour objet de fournir une information sur les activités d'Agenzia. Nous nous efforçons de
          fournir des informations aussi précises que possible. Toutefois, Agenzia ne pourra être tenu
          responsable des oublis, inexactitudes ou carences dans la mise à jour, qu'elles soient de notre fait
          ou de celui des tiers partenaires qui nous fournissent ces informations.
        </p>
      </section>

      <section>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          Agenzia est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur
          tous les éléments accessibles sur le site (textes, images, graphismes, logos, vidéos, icônes, sons).
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces
          éléments est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2>5. Limitations de responsabilité</h2>
        <p>
          Agenzia agit en tant qu'éditeur du site et est responsable de la qualité et de la véracité du
          contenu publié. Agenzia ne pourra être tenu responsable des dommages directs ou indirects causés au
          matériel de l'utilisateur lors de l'accès au site.
        </p>
      </section>
    </LegalContent>
  </PageLayout>
);

export default MentionsLegales;
