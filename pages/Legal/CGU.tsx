import React from 'react';
import PageLayout from '../../components/PageLayout';
import LegalContent from '../../components/LegalContent';

const CGU: React.FC = () => (
  <PageLayout title="Conditions générales d'utilisation" badge="Légal" maxWidth="prose">
    <LegalContent>
      <section>
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités de mise à
          disposition des services du site <a href="https://getagenzia.fr">getagenzia.fr</a> et les conditions
          d'utilisation par l'Utilisateur.
        </p>
      </section>

      <section>
        <h2>2. Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout Utilisateur disposant d'un accès Internet. Les frais
          afférents (matériel, logiciels, accès Internet) sont exclusivement à la charge de l'Utilisateur.
        </p>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site (textes, images, logos, code) est protégé par le droit d'auteur. Toute
          reproduction ou représentation totale ou partielle sans autorisation expresse est interdite et
          constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la
          propriété intellectuelle.
        </p>
      </section>

      <section>
        <h2>4. Responsabilité</h2>
        <p>
          Les sources des informations diffusées sont réputées fiables. Toutefois, Agenzia ne garantit pas
          être exempt de défauts, d'erreurs ou d'omissions. L'Utilisateur garde la responsabilité de la
          sécurité de ses identifiants ; toute divulgation est interdite.
        </p>
      </section>

      <section>
        <h2>5. Évolution des conditions</h2>
        <p>Agenzia se réserve le droit de modifier les clauses de ces CGU à tout moment.</p>
      </section>
    </LegalContent>
  </PageLayout>
);

export default CGU;
