
import type { Content } from './types';

export const translations: { [key: string]: Content } = {
  fr: {
    header: {
      nav: { solutions: 'Solutions', podcasts: 'Podcasts', videos: 'Vidéos', blog: 'Blog' },
      cta: 'Planifier un appel',
      language: 'Langue',
    },
    hero: {
      title: 'Cybersécurité, Cloud & Data enfin accessibles aux PME.',
      subtitle: 'L\'Uber de la tech pour PME françaises : Agents IA autonomes + Freelances experts = 80% d\'automatisation, déploiement 1-clic. 100% souverain SecNumCloud & RGPD. À partir de 99€/mois.',
      cta: 'Audit cyber gratuit en 5 min',
    },
    ecosystem: {
      title: 'Compatible avec votre infrastructure existante',
    },
    problem: {
      title: 'Les PME françaises sont en danger numérique.',
      description: '75 000 postes cyber/data non pourvus en France, 76% des PME sans compétences internes, et des coûts de brèche de 1 à 5M€. Les solutions traditionnelles (Thales, Atos, OVH premium) sont inaccessibles : 500€+/jour, 3-6 mois de setup.',
      cards: [
        { title: 'Migration Cloud échouée', description: '40% d\'échecs, coûts sous-estimés de +50%. SecNumCloud bloquant pour 80% des PME en mode hybride.' },
        { title: 'Cybersécurité inexistante', description: '64% des PME prennent des raccourcis risqués. Ransomwares en hausse de +30% en 2026. Détection tardive.' },
        { title: 'Data Analysis manuelle', description: '2 à 4 semaines par rapport. +45% de demande mais zéro solution IA no-code accessible aux PME.' },
      ],
    },
    vision: {
      title: 'L\'Uber du Cyber/Cloud/Data : Zero Friction, prix PME.',
      description: 'Agenzia démocratise l\'accès aux expertises Cyber, Cloud et Data pour les PME françaises. Notre plateforme combine des agents IA autonomes locaux, un matching intelligent avec des freelances juniors qualifiés, et un déploiement en 1 clic. Résultat : 80% d\'automatisation, 100% souverain SecNumCloud/RGPD/HDS, à partir de 99€/mois.',
      cta: 'Planifier une démo',
    },
    promptBuilder: {
      title: 'Diagnostiquez. Nous Sécurisons. Votre Infrastructure Idéale.',
      intro: 'Chez Agenzia, nous ne vendons pas du consulting premium. Nous déployons des agents IA locaux qui automatisent 80% de vos besoins cyber, cloud et data. Utilisez notre configurateur pour identifier votre besoin prioritaire et obtenir une solution sur-mesure en 1 clic.',
      steps: {
        challenge: { title: 'Étape 1 : Quel est votre défi principal ?' },
        tools: { title: 'Étape 2 : Quels outils/infra utilisez-vous déjà ?', available: 'Outils disponibles', selected: 'Votre infrastructure' },
        wish: { title: 'Étape 3 : Décrivez votre besoin', placeholder: 'Ex: "Je veux migrer mes serveurs vers OVH SecNumCloud avec un monitoring automatique et une assurance cyber."', suggestions: ['...migration cloud automatisée...', '...audit de vulnérabilités...', '...dashboard data temps réel...'] },
      },
      challenges: [
        { id: 'cyber', name: 'Cybersécurité & SOC', icon: 'magnet' },
        { id: 'cloud', name: 'Migration Cloud SecNumCloud', icon: 'gear' },
        { id: 'data', name: 'Data Analysis & IA No-Code', icon: 'chart' },
        { id: 'compliance', name: 'Conformité RGPD/HDS/NIS2', icon: 'balance' },
        { id: 'monitoring', name: 'Monitoring & Alerting', icon: 'chat' },
        { id: 'efacture', name: 'E-Facturation Obligatoire 2026', icon: 'team' },
      ],
      tools: [
          { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
          { id: 'slack', name: 'Slack', iconUrl: 'slack.com' },
          { id: 'hubspot', name: 'HubSpot', iconUrl: 'hubspot.com' },
          { id: 'notion', name: 'Notion', iconUrl: 'notion.so' },
          { id: 'excel', name: 'Excel', iconUrl: 'office.com' },
          { id: 'salesforce', name: 'Salesforce', iconUrl: 'salesforce.com' },
          { id: 'zapier', name: 'Zapier', iconUrl: 'zapier.com' },
          { id: 'openai', name: 'OpenAI', iconUrl: 'openai.com' },
          { id: 'trello', name: 'Trello', iconUrl: 'trello.com' },
          { id: 'asana', name: 'Asana', iconUrl: 'asana.com' },
          { id: 'monday', name: 'Monday.com', iconUrl: 'monday.com' },
          { id: 'stripe', name: 'Stripe', iconUrl: 'stripe.com' },
          { id: 'airtable', name: 'Airtable', iconUrl: 'airtable.com' },
          { id: 'teams', name: 'MS Teams', iconUrl: 'microsoft.com' },
          { id: 'pipedrive', name: 'Pipedrive', iconUrl: 'pipedrive.com' },
          { id: 'typeform', name: 'Typeform', iconUrl: 'typeform.com' },
          { id: 'whatsapp', name: 'WhatsApp', iconUrl: 'whatsapp.com' },
          { id: 'github', name: 'GitHub', iconUrl: 'github.com' },
          { id: 'jira', name: 'Jira', iconUrl: 'atlassian.com' },
          { id: 'mailchimp', name: 'Mailchimp', iconUrl: 'mailchimp.com' },
          { id: 'discord', name: 'Discord', iconUrl: 'discord.com' },
          { id: 'zoom', name: 'Zoom', iconUrl: 'zoom.us' },
          { id: 'shopify', name: 'Shopify', iconUrl: 'shopify.com' },
          { id: 'webflow', name: 'Webflow', iconUrl: 'webflow.com' },
          { id: 'aws', name: 'AWS', iconUrl: 'aws.amazon.com' },
          { id: 'dropbox', name: 'Dropbox', iconUrl: 'dropbox.com' },
          { id: 'intercom', name: 'Intercom', iconUrl: 'intercom.com' },
          { id: 'calendly', name: 'Calendly', iconUrl: 'calendly.com' },
          { id: 'clickup', name: 'ClickUp', iconUrl: 'clickup.com' },
          { id: 'figma', name: 'Figma', iconUrl: 'figma.com' },
          { id: 'miro', name: 'Miro', iconUrl: 'miro.com' },
          { id: 'gitlab', name: 'GitLab', iconUrl: 'gitlab.com' },
          { id: 'quickbooks', name: 'QuickBooks', iconUrl: 'quickbooks.com' },
          { id: 'xero', name: 'Xero', iconUrl: 'xero.com' },
          { id: 'paypal', name: 'PayPal', iconUrl: 'paypal.com' },
          { id: 'docusign', name: 'DocuSign', iconUrl: 'docusign.com' },
          { id: 'zendesk', name: 'Zendesk', iconUrl: 'zendesk.com' },
          { id: 'google-ads', name: 'Google Ads', iconUrl: 'ads.google.com' },
          { id: 'meta', name: 'Meta', iconUrl: 'meta.com' },
          { id: 'linkedin', name: 'LinkedIn', iconUrl: 'linkedin.com' },
          { id: 'firebase', name: 'Firebase', iconUrl: 'firebase.com' },
          { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'postgresql.org' }
      ],
      preview: {
        title: 'Aperçu de la Solution',
        workflow: 'Flux de travail en temps réel',
      },
      cta: 'Générer ma solution personnalisée',
    },
    modules: {
      title: 'Trois solutions clé-en-main.',
      cards: [
        { title: 'Agent IA Cyber Local', description: 'Installation en 5 min sur votre PC admin. Scan automatique des dépendances, troubleshooting logs, migration cloud OVH SecNumCloud, monitoring Prometheus + alerting.', tag: 'Cyber' },
        { title: 'Data Analysis IA No-Code', description: 'Upload Excel/CSV, dashboard instantané + insights prédictifs. Compatible Polymer, IA-souveraine.fr, Mistral Agents. 100% RGPD natif.', tag: 'Data' },
        { title: 'Marketplace Uberisée', description: 'Matching IA entre vos besoins et un pool de juniors qualifiés (écoles 42/Polytechnique). Pay-per-task dès 0.5€/insight, l\'IA gère 80% du workload.', tag: 'Marketplace' },
        { title: 'SOC & Assurance Cyber', description: 'Centre de sécurité opérationnel complet avec détection automatique, réponse aux incidents et assurance cyber auto-claim via partenariat Elyos.', tag: 'Enterprise' },
      ],
    },
    pricing: {
      title: 'Des prix pensés pour les PME.',
      subtitle: 'Pas de consulting à 500€/jour. Pas de setup de 6 mois. Juste la technologie qui marche, à un prix juste.',
      tiers: [
        {
          name: 'BASIC',
          price: '99€',
          period: '/mois',
          description: 'Idéal pour les PME qui démarrent leur transformation digitale.',
          features: [
            'Agent IA local (Claude Code)',
            'Scan automatique des vulnérabilités',
            'Monitoring infra basique',
            'Alerting email/Slack',
            'Dashboard sécurité',
            'Support communautaire',
          ],
          cta: 'Démarrer gratuitement',
        },
        {
          name: 'PRO',
          price: '499€',
          period: '/mois',
          description: 'Pour les PME en migration cloud avec besoins data avancés.',
          features: [
            'Tout le plan Basic +',
            'Migration cloud assistée OVH SecNumCloud',
            'Data Analysis IA (Polymer/Mistral)',
            'Matching freelance junior dédié',
            'Conformité RGPD/HDS automatisée',
            'Support prioritaire 24h',
          ],
          cta: 'Essai gratuit 14 jours',
          highlighted: true,
        },
        {
          name: 'ENTERPRISE',
          price: '999€',
          period: '/mois',
          description: 'SOC complet + assurance cyber pour les PME exigeantes.',
          features: [
            'Tout le plan Pro +',
            'SOC complet 24/7',
            'Assurance cyber auto-claim (Elyos)',
            'Edge AI on-premise',
            'Conformité NIS2/SecNumCloud',
            'Account manager dédié',
          ],
          cta: 'Contacter l\'équipe',
        },
      ],
    },
    roadmap: {
      title: 'Notre feuille de route.',
      subtitle: 'Un plan ambitieux mais réaliste pour révolutionner l\'accès Cyber/Cloud/Data des PME françaises.',
      phases: [
        {
          phase: 'Phase 1',
          title: 'MVP & Beta',
          timeline: 'Q2-Q3 2026',
          items: [
            'POC Agent IA local (Claude Code)',
            'Beta 10 PME partenaires',
            'Intégration Polymer/IA-souveraine.fr',
            'Launch audit freemium (leadgen)',
          ],
          kpi: '20 clients payants, MRR 10k€',
        },
        {
          phase: 'Phase 2',
          title: 'Scale Initial',
          timeline: 'Q4 2026-Q1 2027',
          items: [
            'Partenariats OVH SecNumCloud & Elyos',
            'Marketplace : 50 freelances juniors',
            'Webinars CESIN / Station F',
            'Certification Cybermalveillance.gouv',
          ],
          kpi: '100 clients, MRR 50k€, CA 255k€',
        },
        {
          phase: 'Phase 3',
          title: 'Scale Européen',
          timeline: 'Q2 2027-Q1 2028',
          items: [
            'Expansion Allemagne/Benelux (EUCS)',
            'Edge AI on-premise PME',
            'Consortium startups souveraines',
            'Levée de fonds Série A',
          ],
          kpi: 'CA 1M€ → 5M€ objectif An3',
        },
      ],
    },
    podcasts: {
      title: 'Podcasts Stratégiques',
      subtitle: 'L\'IA racontée par ceux qui la construisent. Écoutez nos analyses approfondies en déplacement.',
      cta: 'Écouter maintenant',
    },
    videos: {
      title: 'Vidéos Éducatives',
      subtitle: 'Maîtrisez l\'automatisation avec nos tutoriels et démonstrations techniques.',
      cta: 'Regarder la vidéo',
    },
    useCases: {
      title: 'Des solutions concrètes pour chaque besoin PME.',
      cases: [
        { title: 'Cybersécurité', description: 'Audit automatique des vulnérabilités, SOC IA 24/7, réponse aux incidents en temps réel, assurance cyber intégrée.' },
        { title: 'Migration Cloud', description: 'Scripts automatisés OVH SecNumCloud, monitoring Kubernetes/Docker, FinOps et optimisation des coûts cloud.' },
        { title: 'Data & Conformité', description: 'Dashboards IA no-code, insights prédictifs, conformité RGPD/HDS/NIS2 automatisée, e-facturation 2026.' },
      ],
    },
    roi: {
      title: 'Calculez vos économies cyber & cloud.',
      description: 'Comparez le coût d\'une brèche de sécurité ou d\'un consulting traditionnel avec notre solution. Une PME moyenne économise 70% sur ses dépenses cyber/cloud.',
      employeesLabel: 'Nombre d\'employés',
      hoursLabel: 'Heures IT économisées/semaine',
      costLabel: 'Coût horaire moyen (€)',
      savingsTitle: 'Économies annuelles estimées',
      savingsPerYear: '/ an',
      cta: 'Obtenir mon audit gratuit',
    },
    blog: {
      title: 'Intelligence & Perspectives.',
      subtitle: 'Décryptage des tendances IA et stratégies d\'automatisation pour les leaders de demain.',
      filters: ['Tous', 'Stratégie', 'Technologie'],
      posts: [
        {
          category: 'Stratégie',
          title: 'PME Françaises 2026 : Pourquoi la Cybersécurité IA est Devenue une Question de Survie',
          author: 'Ramzil BS',
          authorAvatar: 'https://i.pravatar.cc/150?u=ramzil_bs',
          date: '31 Mars 2026',
          readingTime: '8 min',
          excerpt: '75 000 postes cyber non pourvus, ransomwares +30%, e-facturation obligatoire Q3 2026. Les PME n\'ont plus le choix : s\'armer en IA ou disparaître.',
          content: `
            <p>Le constat est brutal : en 2026, 76% des PME françaises n'ont toujours aucune compétence cyber interne. Pendant ce temps, les ransomwares ont augmenté de 30%, et la CNIL enregistre 2 500 fuites de données par trimestre. L'e-facturation obligatoire au Q3 2026 force le passage au cloud hybride sans filet de sécurité.</p>
            <h3>1. Le marché Cyber/Data/Cloud en crise</h3>
            <p>La pénurie est critique : 75 000 postes de cyber analystes, data analysts et experts cloud restent non pourvus en France. Les solutions traditionnelles (Thales, Atos, OVH premium) facturent 500€+/jour avec 3 à 6 mois de setup. Inaccessible pour une PME de moins de 250 employés.</p>
            <h3>2. L'Uberisation comme solution</h3>
            <p>Notre approche combine trois leviers : des agents IA autonomes locaux qui automatisent 80% des tâches de monitoring et de détection, un matching intelligent avec des freelances juniors qualifiés (écoles 42, Polytechnique), et un déploiement en 1 clic 100% souverain SecNumCloud.</p>
            <h3>3. Le timing est parfait</h3>
            <p>L'e-facturation 2026 crée une urgence cloud. Le marché adressable PME représente 2 milliards d'euros en France. À partir de 99€/mois, nous rendons enfin accessible ce qui était réservé aux grands groupes.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[MUSIQUE D'INTRODUCTION]\n\nBonjour à tous, bienvenue dans Agenzia Insights. Aujourd'hui, on attaque un sujet qui concerne 76% des PME françaises : la cybersécurité. Ou plutôt, son absence totale.\n\n[PARTIE 1 : LE CONSTAT]\n75 000 postes non pourvus. Des ransomwares en hausse de 30%. La CNIL qui enregistre 2 500 fuites par trimestre. Et pendant ce temps, les solutions traditionnelles facturent 500€ par jour minimum. Avec 3 à 6 mois de setup. Autant dire que pour une PME de 50 employés, c'est mission impossible.\n\n[PARTIE 2 : L'UBERISATION]\nNotre réponse ? L'uberisation. Des agents IA locaux qui tournent sur le PC de votre admin, qui scannent, qui détectent, qui alertent. Automatiquement. Combinés avec un pool de juniors qualifiés qui interviennent sur les tâches complexes. Le tout à partir de 99€ par mois.\n\n[CONCLUSION]\nL'e-facturation obligatoire au Q3 2026 force le passage au cloud. C'est maintenant ou jamais. Rendez-vous sur agenzia.ai pour votre audit gratuit.\n\n[MUSIQUE DE FIN]`,
          videoStructure: [
            { scriptPart: "Le constat est brutal... sans filet de sécurité.", visual: "Carte de France avec zones rouges de cyberattaques. Stats en surimpression : '75K postes non pourvus'." },
            { scriptPart: "La pénurie est critique... moins de 250 employés.", visual: "Comparaison visuelle : facture consulting traditionnel vs prix Agenzia." },
            { scriptPart: "Notre approche combine... 100% souverain SecNumCloud.", visual: "Animation : Agent IA local + Freelance junior + Dashboard = Protection PME." },
            { scriptPart: "L'e-facturation 2026... aux grands groupes.", visual: "Logo Agenzia + pricing 99€/mois + CTA 'Audit Gratuit'." }
          ],
          seoTitle: "Cybersécurité PME France 2026 : L'IA comme bouclier accessible | Agenzia",
          seoDescription: "75 000 postes cyber non pourvus, ransomwares +30%. Découvrez comment l'uberisation IA rend la cybersécurité accessible aux PME françaises dès 99€/mois.",
        },
        {
          category: 'Technologie',
          title: 'Migration Cloud SecNumCloud : Le Guide Pratique pour PME en 2026',
          author: 'Ramzil BS',
          authorAvatar: 'https://i.pravatar.cc/150?u=ramzil_bs_tech',
          date: '28 Mars 2026',
          readingTime: '6 min',
          excerpt: '40% des migrations cloud échouent. Coûts sous-estimés de 50%. Voici comment notre agent IA local automatise le passage à OVH SecNumCloud en toute sécurité.',
          content: `
            <p>La migration cloud est le cauchemar des PME : 40% d'échecs, des coûts systématiquement sous-estimés de 50%, et une complexité SecNumCloud qui décourage les meilleures volontés. Pourtant, avec l'e-facturation obligatoire Q3 2026, le cloud hybride n'est plus une option.</p>
            <h3>L'Agent IA Local : votre copilote migration</h3>
            <p>Notre agent Claude Code s'installe en 5 minutes sur le PC de votre admin. Il scanne automatiquement vos dépendances (pip/npm/docker), analyse vos logs Kubernetes, et génère les scripts de migration OVH SecNumCloud adaptés à votre infrastructure existante.</p>
            <h3>Monitoring automatique post-migration</h3>
            <p>Prometheus + Mist AI sont déployés automatiquement pour surveiller votre infrastructure 24/7. Chaque alerte déclenche un diagnostic IA avant escalade humaine. Résultat : 80% des incidents résolus sans intervention manuelle.</p>
            <blockquote>"La meilleure migration cloud est celle que vos équipes ne remarquent même pas."</blockquote>
            <p>Avec notre assurance cyber partenaire Elyos, chaque vulnérabilité détectée génère automatiquement un devis d'assurance. Protection complète, zéro friction.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[INTRO]\nBienvenue dans ce nouvel épisode. On parle cloud, on parle migration, et surtout on parle de pourquoi 40% des PME échouent dans cette étape critique.\n\n[PARTIE 1 : LE PROBLÈME]\n40% d'échecs. C'est le taux de migration cloud pour les PME. Pourquoi ? Coûts sous-estimés de 50%, complexité SecNumCloud, et absence de compétences internes. L'e-facturation 2026 ne laisse plus le choix.\n\n[PARTIE 2 : LA SOLUTION]\nNotre agent IA s'installe en 5 minutes. Il scanne votre infra, génère les scripts de migration OVH SecNumCloud, et déploie un monitoring automatique. 80% des incidents résolus sans intervention humaine.\n\n[CONCLUSION]\nAvec l'assurance cyber Elyos intégrée, vous êtes couvert de bout en bout. Migration + monitoring + assurance = zéro friction. C'est ça, l'Uber du cloud PME.`,
          videoStructure: [
            { scriptPart: "40% des migrations échouent... plus une option.", visual: "Graphique d'échecs migration + Timeline e-facturation 2026" },
            { scriptPart: "Notre agent Claude Code... infrastructure existante.", visual: "Screencast : installation 5min + scan automatique" },
            { scriptPart: "Prometheus + Mist AI... intervention manuelle.", visual: "Dashboard monitoring temps réel avec alertes IA" },
            { scriptPart: "Avec notre assurance... zéro friction.", visual: "Logo Agenzia + Elyos + CTA 'Migration assistée'" }
          ],
          seoTitle: "Migration Cloud SecNumCloud PME 2026 : Guide IA Automatisé | Agenzia",
          seoDescription: "40% des migrations cloud échouent. Découvrez comment notre agent IA local automatise la migration OVH SecNumCloud pour PME avec monitoring 24/7 et assurance cyber."
        },
      ],
      cta: 'Voir tous les articles',
      newsletter: {
        title: 'Recevez nos analyses stratégiques.',
        placeholder: 'votre@email.com',
        button: 'S\'abonner'
      }
    },
    footer: {
      description: 'Agenzia. Cyber, Cloud & Data accessibles aux PME françaises.',
      sections: [
        { title: 'Solutions', links: ['Agent IA Cyber', 'Migration Cloud', 'Data Analysis IA', 'SOC & Assurance'] },
        { title: 'Entreprise', links: ['À propos', 'Carrières', 'Partenaires', 'Contact', 'Politique de Confidentialité'] },
        { title: 'Ressources', links: ['Blog', 'Podcasts', 'Vidéos', 'Documentation', 'Audit Gratuit'] },
      ],
      copyright: '© 2026 Agenzia. Tous droits réservés. 100% Souverain SecNumCloud/RGPD.',
    },
    aiAssistant: {
      greeting: 'Bonjour ! Je suis votre assistant IA cyber. Comment puis-je sécuriser votre PME aujourd\'hui ?',
      placeholder: 'Posez votre question...',
    },
    articleDetail: {
      backButton: 'Retour à la sélection',
      readingTime: 'de lecture',
      publishedOn: 'Publié le',
      podcastIncluded: 'Podcast Inclus',
      videoIncluded: 'Vidéo Incluse',
      listenPodcast: 'Écouter le Podcast',
      watchVideo: 'Voir la Vidéo',
      audioVersion: 'Version Audio Augmentée',
      videoMasterclass: 'Masterclass Technique',
      contentArchitecture: 'Content Architecture',
      multiPlatformDeclination: 'Déclinaison Multi-Plateforme',
      seoLayer: 'Couche Métadonnées (SEO)',
      podcastLayer: 'Couche Podcast (Audio)',
      videoLayer: 'Couche Vidéo (Structure)',
      metaTitle: 'Balise Title',
      metaDescription: 'Meta Description',
      scriptPart: 'Partie du Script',
      visual: 'Visuel',
    },
  },
  en: {
    header: {
      nav: { solutions: 'Solutions', podcasts: 'Podcasts', videos: 'Videos', blog: 'Blog' },
      cta: 'Schedule a call',
      language: 'Language',
    },
    hero: {
      title: 'Cybersecurity, Cloud & Data finally accessible to SMEs.',
      subtitle: 'The Uber of tech for French SMEs: Autonomous AI agents + Expert freelancers = 80% automation, 1-click deployment. 100% sovereign SecNumCloud & GDPR compliant. From 99€/month.',
      cta: 'Free cyber audit in 5 min',
    },
    ecosystem: {
      title: 'Compatible with your existing infrastructure',
    },
    problem: {
      title: 'French SMEs are in digital danger.',
      description: '75,000 unfilled cyber/data positions in France, 76% of SMEs without internal skills, and breach costs of €1-5M. Traditional solutions (Thales, Atos, OVH premium) are inaccessible: €500+/day, 3-6 months setup.',
      cards: [
        { title: 'Failed Cloud Migration', description: '40% failure rate, costs underestimated by +50%. SecNumCloud blocking for 80% of SMEs in hybrid mode.' },
        { title: 'Non-existent Cybersecurity', description: '64% of SMEs take risky shortcuts. Ransomware up +30% in 2026. Late detection.' },
        { title: 'Manual Data Analysis', description: '2-4 weeks per report. +45% demand but zero accessible AI no-code solution for SMEs.' },
      ],
    },
    vision: {
      title: 'The Uber of Cyber/Cloud/Data: Zero Friction, SME pricing.',
      description: 'Agenzia democratizes access to Cyber, Cloud, and Data expertise for French SMEs. Our platform combines local autonomous AI agents, intelligent matching with qualified junior freelancers, and 1-click deployment. Result: 80% automation, 100% sovereign SecNumCloud/GDPR/HDS, from €99/month.',
      cta: 'Schedule a demo',
    },
    promptBuilder: {
        title: 'Diagnose. We Secure. Your Ideal Infrastructure.',
        intro: 'At Agenzia, we don\'t sell premium consulting. We deploy local AI agents that automate 80% of your cyber, cloud, and data needs. Use our configurator to identify your priority need and get a custom solution in 1 click.',
        steps: {
            challenge: { title: 'Step 1: What is your main challenge?' },
            tools: { title: 'Step 2: Which tools/infra do you already use?', available: 'Available tools', selected: 'Your infrastructure' },
            wish: { title: 'Step 3: Describe your need', placeholder: 'e.g., "I want to migrate my servers to OVH SecNumCloud with automatic monitoring and cyber insurance."', suggestions: ['...automated cloud migration...', '...vulnerability audit...', '...real-time data dashboard...'] },
        },
        challenges: [
            { id: 'cyber', name: 'Cybersecurity & SOC', icon: 'magnet' },
            { id: 'cloud', name: 'SecNumCloud Migration', icon: 'gear' },
            { id: 'data', name: 'AI No-Code Data Analysis', icon: 'chart' },
            { id: 'compliance', name: 'GDPR/HDS/NIS2 Compliance', icon: 'balance' },
            { id: 'monitoring', name: 'Monitoring & Alerting', icon: 'chat' },
            { id: 'efacture', name: 'E-Invoicing 2026 Mandate', icon: 'team' },
        ],
        tools: [
          { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
          { id: 'slack', name: 'Slack', iconUrl: 'slack.com' },
          { id: 'hubspot', name: 'HubSpot', iconUrl: 'hubspot.com' },
          { id: 'notion', name: 'Notion', iconUrl: 'notion.so' },
          { id: 'excel', name: 'Excel', iconUrl: 'office.com' },
          { id: 'salesforce', name: 'Salesforce', iconUrl: 'salesforce.com' },
          { id: 'zapier', name: 'Zapier', iconUrl: 'zapier.com' },
          { id: 'openai', name: 'OpenAI', iconUrl: 'openai.com' },
          { id: 'trello', name: 'Trello', iconUrl: 'trello.com' },
          { id: 'asana', name: 'Asana', iconUrl: 'asana.com' },
          { id: 'monday', name: 'Monday.com', iconUrl: 'monday.com' },
          { id: 'stripe', name: 'Stripe', iconUrl: 'stripe.com' },
          { id: 'airtable', name: 'Airtable', iconUrl: 'airtable.com' },
          { id: 'teams', name: 'MS Teams', iconUrl: 'microsoft.com' },
          { id: 'pipedrive', name: 'Pipedrive', iconUrl: 'pipedrive.com' },
          { id: 'typeform', name: 'Typeform', iconUrl: 'typeform.com' },
          { id: 'whatsapp', name: 'WhatsApp', iconUrl: 'whatsapp.com' },
          { id: 'github', name: 'GitHub', iconUrl: 'github.com' },
          { id: 'jira', name: 'Jira', iconUrl: 'atlassian.com' },
          { id: 'mailchimp', name: 'Mailchimp', iconUrl: 'mailchimp.com' },
          { id: 'discord', name: 'Discord', iconUrl: 'discord.com' },
          { id: 'zoom', name: 'Zoom', iconUrl: 'zoom.us' },
          { id: 'shopify', name: 'Shopify', iconUrl: 'shopify.com' },
          { id: 'webflow', name: 'Webflow', iconUrl: 'webflow.com' },
          { id: 'aws', name: 'AWS', iconUrl: 'aws.amazon.com' },
          { id: 'dropbox', name: 'Dropbox', iconUrl: 'dropbox.com' },
          { id: 'intercom', name: 'Intercom', iconUrl: 'intercom.com' },
          { id: 'calendly', name: 'Calendly', iconUrl: 'calendly.com' },
          { id: 'clickup', name: 'ClickUp', iconUrl: 'clickup.com' },
          { id: 'figma', name: 'Figma', iconUrl: 'figma.com' },
          { id: 'miro', name: 'Miro', iconUrl: 'miro.com' },
          { id: 'gitlab', name: 'GitLab', iconUrl: 'gitlab.com' },
          { id: 'quickbooks', name: 'QuickBooks', iconUrl: 'quickbooks.com' },
          { id: 'xero', name: 'Xero', iconUrl: 'xero.com' },
          { id: 'paypal', name: 'PayPal', iconUrl: 'paypal.com' },
          { id: 'docusign', name: 'DocuSign', iconUrl: 'docusign.com' },
          { id: 'zendesk', name: 'Zendesk', iconUrl: 'zendesk.com' },
          { id: 'google-ads', name: 'Google Ads', iconUrl: 'ads.google.com' },
          { id: 'meta', name: 'Meta', iconUrl: 'meta.com' },
          { id: 'linkedin', name: 'LinkedIn', iconUrl: 'linkedin.com' },
          { id: 'firebase', name: 'Firebase', iconUrl: 'firebase.com' },
          { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'postgresql.org' }
        ],
        preview: {
            title: 'Solution Preview',
            workflow: 'Real-time Workflow',
        },
        cta: 'Generate my custom solution',
    },
    modules: {
      title: 'Three turnkey solutions.',
      cards: [
        { title: 'Local Cyber AI Agent', description: '5-min install on your admin PC. Auto dependency scanning, log troubleshooting, OVH SecNumCloud migration, Prometheus monitoring + alerting.', tag: 'Cyber' },
        { title: 'AI No-Code Data Analysis', description: 'Upload Excel/CSV, instant dashboard + predictive insights. Compatible with Polymer, IA-souveraine.fr, Mistral Agents. 100% GDPR native.', tag: 'Data' },
        { title: 'Uberized Marketplace', description: 'AI matching between your needs and a pool of qualified juniors (42/Polytechnique schools). Pay-per-task from €0.5/insight, AI handles 80% of workload.', tag: 'Marketplace' },
        { title: 'SOC & Cyber Insurance', description: 'Complete security operations center with auto-detection, incident response, and auto-claim cyber insurance via Elyos partnership.', tag: 'Enterprise' },
      ],
    },
    pricing: {
      title: 'Pricing built for SMEs.',
      subtitle: 'No €500/day consulting. No 6-month setup. Just technology that works, at a fair price.',
      tiers: [
        {
          name: 'BASIC',
          price: '€99',
          period: '/month',
          description: 'Ideal for SMEs starting their digital transformation.',
          features: ['Local AI agent (Claude Code)', 'Auto vulnerability scanning', 'Basic infra monitoring', 'Email/Slack alerting', 'Security dashboard', 'Community support'],
          cta: 'Start for free',
        },
        {
          name: 'PRO',
          price: '€499',
          period: '/month',
          description: 'For SMEs migrating to cloud with advanced data needs.',
          features: ['Everything in Basic +', 'Assisted OVH SecNumCloud migration', 'AI Data Analysis (Polymer/Mistral)', 'Dedicated junior freelance matching', 'Automated GDPR/HDS compliance', 'Priority 24h support'],
          cta: '14-day free trial',
          highlighted: true,
        },
        {
          name: 'ENTERPRISE',
          price: '€999',
          period: '/month',
          description: 'Complete SOC + cyber insurance for demanding SMEs.',
          features: ['Everything in Pro +', '24/7 complete SOC', 'Auto-claim cyber insurance (Elyos)', 'On-premise Edge AI', 'NIS2/SecNumCloud compliance', 'Dedicated account manager'],
          cta: 'Contact team',
        },
      ],
    },
    roadmap: {
      title: 'Our roadmap.',
      subtitle: 'An ambitious yet realistic plan to revolutionize Cyber/Cloud/Data access for French SMEs.',
      phases: [
        { phase: 'Phase 1', title: 'MVP & Beta', timeline: 'Q2-Q3 2026', items: ['Local AI Agent POC (Claude Code)', 'Beta with 10 partner SMEs', 'Polymer/IA-souveraine.fr integration', 'Freemium audit launch (leadgen)'], kpi: '20 paying clients, €10K MRR' },
        { phase: 'Phase 2', title: 'Initial Scale', timeline: 'Q4 2026-Q1 2027', items: ['OVH SecNumCloud & Elyos partnerships', 'Marketplace: 50 junior freelancers', 'CESIN / Station F webinars', 'Cybermalveillance.gouv certification'], kpi: '100 clients, €50K MRR, €255K revenue' },
        { phase: 'Phase 3', title: 'European Scale', timeline: 'Q2 2027-Q1 2028', items: ['Germany/Benelux expansion (EUCS)', 'On-premise Edge AI for SMEs', 'Sovereign startup consortium', 'Series A fundraising'], kpi: '€1M revenue → €5M Y3 target' },
      ],
    },
    podcasts: {
      title: 'Strategic Podcasts.',
      subtitle: 'Listen to our experts decode the future of SME cybersecurity.',
      cta: 'Listen to all episodes',
    },
    videos: {
      title: 'Video Masterclasses.',
      subtitle: 'Technical demonstrations to take action.',
      cta: 'View all videos',
    },
    useCases: {
      title: 'Concrete solutions for every SME need.',
      cases: [
        { title: 'Cybersecurity', description: 'Automated vulnerability audits, 24/7 AI SOC, real-time incident response, integrated cyber insurance.' },
        { title: 'Cloud Migration', description: 'Automated OVH SecNumCloud scripts, Kubernetes/Docker monitoring, FinOps and cloud cost optimization.' },
        { title: 'Data & Compliance', description: 'AI no-code dashboards, predictive insights, automated GDPR/HDS/NIS2 compliance, e-invoicing 2026.' },
      ],
    },
    roi: {
      title: 'Calculate your cyber & cloud savings.',
      description: 'Compare the cost of a security breach or traditional consulting with our solution. An average SME saves 70% on cyber/cloud expenses.',
      employeesLabel: 'Number of employees',
      hoursLabel: 'IT hours saved/week',
      costLabel: 'Average hourly cost (€)',
      savingsTitle: 'Estimated annual savings',
      savingsPerYear: '/ year',
      cta: 'Get my free audit',
    },
    blog: {
      title: 'Insights & Perspectives.',
      subtitle: 'Decoding AI trends and automation strategies for tomorrow\'s leaders.',
      filters: ['All', 'Strategy', 'Technology'],
      posts: [
        {
          category: 'Strategy',
          title: 'French SMEs 2026: Why AI Cybersecurity Has Become a Matter of Survival',
          author: 'Ramzil BS',
          authorAvatar: 'https://i.pravatar.cc/150?u=ramzil_bs',
          date: 'March 31, 2026',
          readingTime: '8 min',
          excerpt: '75,000 unfilled cyber positions, ransomware +30%, mandatory e-invoicing Q3 2026. SMEs have no choice: arm up with AI or disappear.',
          content: `
            <p>The reality is brutal: in 2026, 76% of French SMEs still have no internal cyber skills. Meanwhile, ransomware has increased by 30%, and CNIL records 2,500 data breaches per quarter. Mandatory e-invoicing in Q3 2026 forces hybrid cloud adoption without a safety net.</p>
            <h3>1. The Cyber/Data/Cloud Market in Crisis</h3>
            <p>The shortage is critical: 75,000 cyber analyst, data analyst, and cloud expert positions remain unfilled in France. Traditional solutions (Thales, Atos, OVH premium) charge €500+/day with 3-6 months setup. Unreachable for an SME with fewer than 250 employees.</p>
            <h3>2. Uberization as the Solution</h3>
            <p>Our approach combines three levers: local autonomous AI agents that automate 80% of monitoring and detection tasks, intelligent matching with qualified junior freelancers (42, Polytechnique schools), and 1-click deployment that is 100% SecNumCloud sovereign.</p>
            <h3>3. The Timing is Perfect</h3>
            <p>E-invoicing 2026 creates cloud urgency. The addressable SME market represents €2 billion in France. From €99/month, we finally make accessible what was reserved for large corporations.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[INTRO]\nHello everyone, welcome to Agenzia Insights. Today we tackle a topic affecting 76% of French SMEs: cybersecurity. Or rather, its total absence.\n\n[PART 1]\n75,000 unfilled positions. Ransomware up 30%. CNIL recording 2,500 breaches per quarter. Traditional solutions charge €500/day minimum with 3-6 months setup. For a 50-person SME, it's mission impossible.\n\n[PART 2]\nOur answer? Uberization. Local AI agents on your admin's PC that scan, detect, and alert automatically. Combined with qualified juniors for complex tasks. All from €99/month.\n\n[CONCLUSION]\nMandatory e-invoicing Q3 2026 forces cloud adoption. It's now or never. Visit agenzia.ai for your free audit.`,
          videoStructure: [
            { scriptPart: "The reality is brutal...", visual: "France map with red cyberattack zones. Stats overlay: '75K unfilled positions'." },
            { scriptPart: "The shortage is critical...", visual: "Visual comparison: traditional consulting invoice vs Agenzia pricing." },
            { scriptPart: "Our approach combines...", visual: "Animation: Local AI Agent + Junior Freelancer + Dashboard = SME Protection." },
            { scriptPart: "E-invoicing 2026...", visual: "Agenzia logo + €99/month pricing + CTA 'Free Audit'." }
          ],
          seoTitle: "SME Cybersecurity France 2026: AI as an Accessible Shield | Agenzia",
          seoDescription: "75,000 unfilled cyber positions, ransomware +30%. Discover how AI uberization makes cybersecurity accessible to French SMEs from €99/month.",
        },
        {
          category: 'Technology',
          title: 'SecNumCloud Migration: The Practical Guide for SMEs in 2026',
          author: 'Ramzil BS',
          authorAvatar: 'https://i.pravatar.cc/150?u=ramzil_bs_tech',
          date: 'March 28, 2026',
          readingTime: '6 min',
          excerpt: '40% of cloud migrations fail. Costs underestimated by 50%. Here\'s how our local AI agent automates the transition to OVH SecNumCloud safely.',
          content: `
            <p>Cloud migration is the SME nightmare: 40% failure rate, systematically underestimated costs by 50%, and SecNumCloud complexity that discourages the best intentions. Yet with mandatory e-invoicing Q3 2026, hybrid cloud is no longer optional.</p>
            <h3>The Local AI Agent: Your Migration Copilot</h3>
            <p>Our Claude Code agent installs in 5 minutes on your admin PC. It automatically scans your dependencies (pip/npm/docker), analyzes your Kubernetes logs, and generates OVH SecNumCloud migration scripts adapted to your existing infrastructure.</p>
            <h3>Automatic Post-Migration Monitoring</h3>
            <p>Prometheus + Mist AI are automatically deployed to monitor your infrastructure 24/7. Each alert triggers an AI diagnosis before human escalation. Result: 80% of incidents resolved without manual intervention.</p>
            <blockquote>"The best cloud migration is one your teams don't even notice."</blockquote>
            <p>With our Elyos cyber insurance partner, each detected vulnerability automatically generates an insurance quote. Complete protection, zero friction.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[INTRO]\nWelcome to this new episode. We talk cloud, migration, and especially why 40% of SMEs fail at this critical step.\n\n[PART 1]\n40% failure rate. That's the cloud migration stat for SMEs. Why? Costs underestimated by 50%, SecNumCloud complexity, and lack of internal skills.\n\n[PART 2]\nOur AI agent installs in 5 minutes. It scans your infra, generates SecNumCloud migration scripts, and deploys automatic monitoring. 80% of incidents resolved without human intervention.\n\n[CONCLUSION]\nWith integrated Elyos cyber insurance, you're covered end-to-end. Migration + monitoring + insurance = zero friction.`,
          videoStructure: [
            { scriptPart: "40% of migrations fail...", visual: "Migration failure chart + E-invoicing 2026 timeline" },
            { scriptPart: "Our Claude Code agent...", visual: "Screencast: 5-min install + auto scan" },
            { scriptPart: "Prometheus + Mist AI...", visual: "Real-time monitoring dashboard with AI alerts" },
            { scriptPart: "With our insurance...", visual: "Agenzia + Elyos logos + CTA 'Assisted Migration'" }
          ],
          seoTitle: "SecNumCloud Migration for SMEs 2026: Automated AI Guide | Agenzia",
          seoDescription: "40% of cloud migrations fail. Discover how our local AI agent automates OVH SecNumCloud migration for SMEs with 24/7 monitoring and cyber insurance."
        },
      ],
      cta: 'View all articles',
      newsletter: {
        title: 'Receive our strategic analysis.',
        placeholder: 'your@email.com',
        button: 'Subscribe'
      }
    },
    footer: {
      description: 'Agenzia. Cyber, Cloud & Data accessible to French SMEs.',
      sections: [
        { title: 'Solutions', links: ['Cyber AI Agent', 'Cloud Migration', 'AI Data Analysis', 'SOC & Insurance'] },
        { title: 'Company', links: ['About Us', 'Careers', 'Partners', 'Contact', 'Privacy Policy'] },
        { title: 'Resources', links: ['Blog', 'Podcasts', 'Videos', 'Documentation', 'Free Audit'] },
      ],
      copyright: '© 2026 Agenzia. All rights reserved. 100% Sovereign SecNumCloud/GDPR.',
    },
    aiAssistant: {
      greeting: 'Hello! I\'m your cyber AI assistant. How can I help secure your SME today?',
      placeholder: 'Ask your question...',
    },
    articleDetail: {
      backButton: 'Back to selection',
      readingTime: 'read',
      publishedOn: 'Published on',
      podcastIncluded: 'Podcast Included',
      videoIncluded: 'Video Included',
      listenPodcast: 'Listen to the Podcast',
      watchVideo: 'Watch the Video',
      audioVersion: 'Augmented Audio Version',
      videoMasterclass: 'Technical Masterclass',
      contentArchitecture: 'Content Architecture',
      multiPlatformDeclination: 'Multi-Platform Declination',
      seoLayer: 'Metadata Layer (SEO)',
      podcastLayer: 'Podcast Layer (Audio)',
      videoLayer: 'Video Layer (Structure)',
      metaTitle: 'Title Tag',
      metaDescription: 'Meta Description',
      scriptPart: 'Script Part',
      visual: 'Visual',
    },
  },
  de: {
    header: {
      nav: { solutions: 'Lösungen', expertises: 'Expertisen', 'cas-clients': 'Fallstudien', blog: 'Blog' },
      cta: 'Anruf vereinbaren',
      language: 'Sprache',
    },
    hero: {
      title: 'Ihr Unternehmen, durch KI erweitert.',
      subtitle: 'Wir entwerfen maßgeschneiderte Automatisierungssysteme, um Ihre Produktivität zu vervielfachen.',
      cta: 'Unsere Lösungen entdecken',
    },
    ecosystem: {
      title: 'Integriert in Ihr Technologie-Ökosystem',
    },
    problem: {
      title: 'Manuelle Abläufe bremsen Ihr Wachstum.',
      description: 'Jede sich wiederholende Aufgabe ist eine verpasste Gelegenheit.',
      cards: [
        { title: 'Zeitverlust', description: 'Wertvolle Stunden werden mit manuellen Prozessen verschwendet.' },
        { title: 'Fehlerrisiko', description: 'Menschliche Eingriffe erhöhen die Fehlerquote.' },
        { title: 'Skalierbarkeit', description: 'Aktuelle Systeme halten dem Wachstum nicht stand.' },
      ],
    },
    vision: {
      title: 'Absolute operative Effizienz.',
      description: 'Agenzia verwandelt Ihre Geschäftsprozesse in einen Wettbewerbsvorteil.',
      cta: 'Mit Experten sprechen',
    },
    promptBuilder: {
      title: 'Stellen Sie sich vor. Wir bauen.',
      intro: 'Wir bauen Erweiterungen Ihrer Intelligenz.',
      steps: {
        challenge: { title: 'Schritt 1: Herausforderung' },
        tools: { title: 'Schritt 2: Werkzeuge', available: 'Verfügbar', selected: 'Ausgewählt' },
        wish: { title: 'Schritt 3: Wunsch', placeholder: 'z.B. Automatische E-Mails...', suggestions: ['E-Mail', 'Daten', 'Aufgaben'] },
      },
      challenges: [
        { id: 'leads', name: 'Mails', icon: 'magnet' },
      ],
      tools: [
        { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
      ],
      preview: {
        title: 'Vorschau',
        workflow: 'Workflow',
      },
      cta: 'Lösung generieren',
    },
    modules: {
      title: 'Drei schlüsselfertige Lösungen.',
      cards: [
        { title: 'Lokaler Cyber-KI-Agent', description: 'Installation in 5 Min. Automatischer Scan, Log-Troubleshooting, Cloud-Migration, Monitoring.', tag: 'Cyber' },
        { title: 'KI-Datenanalyse No-Code', description: 'Excel/CSV hochladen, sofortiges Dashboard + prädiktive Insights. DSGVO-konform.', tag: 'Daten' },
        { title: 'Uberisierter Marktplatz', description: 'KI-Matching mit qualifizierten Junioren. Pay-per-Task ab 0,5€/Insight.', tag: 'Marktplatz' },
        { title: 'SOC & Cyber-Versicherung', description: 'Komplettes SOC mit automatischer Erkennung und Cyber-Versicherung.', tag: 'Enterprise' },
      ],
    },
    pricing: {
      title: 'Preise für KMU.',
      subtitle: 'Kein 500€/Tag Consulting. Keine 6-monatige Einrichtung.',
      tiers: [
        { name: 'BASIC', price: '99€', period: '/Monat', description: 'Für KMU am Anfang der digitalen Transformation.', features: ['Lokaler KI-Agent', 'Schwachstellen-Scan', 'Basis-Monitoring', 'E-Mail/Slack-Alarme', 'Sicherheits-Dashboard', 'Community-Support'], cta: 'Kostenlos starten' },
        { name: 'PRO', price: '499€', period: '/Monat', description: 'Für KMU mit Cloud-Migration und Datenbedarf.', features: ['Alles aus Basic +', 'Cloud-Migration SecNumCloud', 'KI-Datenanalyse', 'Junior-Freelance-Matching', 'DSGVO-Compliance', 'Prioritäts-Support'], cta: '14 Tage kostenlos', highlighted: true },
        { name: 'ENTERPRISE', price: '999€', period: '/Monat', description: 'Komplettes SOC + Cyber-Versicherung.', features: ['Alles aus Pro +', '24/7 SOC', 'Cyber-Versicherung', 'Edge AI On-Premise', 'NIS2-Compliance', 'Dedizierter Account Manager'], cta: 'Team kontaktieren' },
      ],
    },
    roadmap: {
      title: 'Unsere Roadmap.',
      subtitle: 'Ein Plan zur Revolutionierung des Cyber/Cloud/Data-Zugangs für KMU.',
      phases: [
        { phase: 'Phase 1', title: 'MVP & Beta', timeline: 'Q2-Q3 2026', items: ['KI-Agent POC', 'Beta mit 10 KMU', 'Polymer-Integration', 'Freemium-Audit'], kpi: '20 Kunden, 10k€ MRR' },
        { phase: 'Phase 2', title: 'Erster Scale', timeline: 'Q4 2026-Q1 2027', items: ['OVH/Elyos Partnerschaften', '50 Junior-Freelancer', 'Webinare', 'Zertifizierung'], kpi: '100 Kunden, 50k€ MRR' },
        { phase: 'Phase 3', title: 'Europäischer Scale', timeline: 'Q2 2027-Q1 2028', items: ['DE/Benelux Expansion', 'Edge AI On-Premise', 'Startup-Konsortium', 'Serie A'], kpi: '1M€ → 5M€ Umsatz' },
      ],
    },
    useCases: {
      title: 'Anwendungen',
      cases: [
        { title: 'Marketing', description: 'Inhaltsgenerierung.' },
      ],
    },
    roi: {
      title: 'ROI Berechnen',
      description: 'Visualisieren Sie Ihre Einsparungen.',
      employeesLabel: 'Mitarbeiter',
      hoursLabel: 'Gesparte Stunden',
      costLabel: 'Stundensatz',
      savingsTitle: 'Einsparungen',
      savingsPerYear: '/ Jahr',
      cta: 'Audit erhalten',
    },
    blog: {
      title: 'Insights',
      subtitle: 'KI-Trends.',
      filters: ['Alle'],
      posts: [
        { 
          category: 'Strategie', 
          title: 'Generative KI: Die operative Effizienz der Zukunft gestalten', 
          author: 'John Doe', 
          authorAvatar: 'https://i.pravatar.cc/150?u=john_doe',
          date: '12. März 2024', 
          readingTime: '8 Min.',
          excerpt: 'Die Integration von Large Language Models (LLMs) beschränkt sich nicht mehr nur auf die Texterstellung. Im Jahr 2025 wird sie zum zentralen Nervensystem agiler Organisationen.',
          content: `
            <p>Die Ära der KI-Experimente ist vorbei. Wir sind in das Zeitalter der Industrialisierung eingetreten. Für C-Levels lautet die Frage nicht mehr "Was kann KI tun?", sondern "Wie kann KI unser operatives Modell transformieren?"</p>
            <h3>1. Vom Werkzeug zum autonomen Agenten</h3>
            <p>Im Gegensatz zu herkömmlicher Software führen KI-Agenten auf Basis von LLMs nicht nur Aufgaben aus; sie treffen kontextbezogene Entscheidungen. Indem Sie Ihre proprietären Daten mit diesen Modellen verbinden, erstellen Sie Workflows, die aus Ihren vergangenen Erfolgen lernen.</p>
            <h3>2. Interoperabilität als ROI-Hebel</h3>
            <p>Der wahre Produktivitätsgewinn liegt in der Verbindung zwischen Ihren Werkzeugen. Gmail, Slack, HubSpot und Salesforce müssen nahtlos kommunizieren. Unsere Architekturen ermöglichen eine Echtzeit-Synchronisation ohne menschliches Eingreifen und reduzieren Eingabefehler um 99 %.</p>
            <h3>3. Fazit</h3>
            <p>Intelligente Automatisierung ist kein IT-Projekt, sondern eine Geschäftsstrategie. Indem Sie Ihre Talente von repetitiven Aufgaben befreien, ermöglichen Sie ihnen, sich auf Wertschöpfung und strategische Innovation zu konzentrieren.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[INTRO]\nHallo zusammen, willkommen zu einer neuen Folge von Agenzia Insights. Heute sprechen wir über ein wichtiges Thema: Warum 2024 das Ende der KI-Spielereien und der Beginn der echten industriellen Revolution für Ihr Unternehmen ist.\n\n[TEIL 1: VOM WERKZEUG ZUM AGENTEN]\nWir haben alle mit ChatGPT experimentiert, aber jetzt wird es ernst. Wir sprechen nicht mehr nur über einfache Werkzeuge, sondern über autonome Agenten. Stellen Sie sich Systeme vor, die nicht nur antworten, sondern basierend auf Ihren eigenen Daten handeln. Das ist der Übergang von der Neugier zur reinen Produktivität.\n\n[TEIL 2: INTEROPERABILITÄT]\nDas Geheimnis? Interoperabilität. Ein kompliziertes Wort dafür, dass Ihre Werkzeuge miteinander sprechen müssen. Gmail, Slack, HubSpot, Salesforce... wenn die KI das Gehirn ist, sind diese Verbindungen die Nerven. Wir sprechen von 99 % weniger Fehlern bei der Dateneingabe. Hier verbirgt sich Ihr ROI.\n\n[FAZIT]\nZusammenfassend lässt sich sagen: Intelligente Automatisierung ist kein IT-Projekt, sondern Ihre Geschäftsstrategie. Vielen Dank fürs Zuhören und bis bald, um Ihre Abläufe zu optimieren.`,
          videoStructure: [
            { scriptPart: "Hallo zusammen... industrielle Revolution.", visual: "B-Roll modernes Büro + Text: '2024: Die Industrialisierung'" },
            { scriptPart: "Wir haben alle... reinen Produktivität.", visual: "Grafik: 'Werkzeug vs. Autonomer Agent' + Zahnrad-Icons" },
            { scriptPart: "Das Geheimnis... verbirgt sich Ihr ROI.", visual: "Animation: Verbundene Gmail/Slack/HubSpot-Logos + Text: '-99 % Fehler'" },
            { scriptPart: "Zusammenfassend... Abläufe zu optimieren.", visual: "Agenzia-Logo + Button: 'Strategisches Audit'" }
          ],
          seoTitle: "KI-Industrialisierung 2024: Der strategische Leitfaden | Agenzia",
          seoDescription: "Erfahren Sie, warum 2024 das entscheidende Jahr für KI in Unternehmen ist. Autonome Agenten, Interoperabilität und ROI: Von der Experimentierphase zur realen Wirkung."
        },
        { 
          category: 'Technologie', 
          title: 'Automatisierung 2.0: Warum kognitive KI der neue Standard für digitalen Luxus ist', 
          author: 'Jane Smith', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jane_smith',
          date: '08. März 2024', 
          readingTime: '5 Min.',
          excerpt: 'Der "Pure White Look" der KI wird nicht gesehen; er wird in der Fluidität der Abläufe gefühlt. Erfahren Sie, warum die interne Nutzererfahrung der am meisten unterschätzte Wachstumshebel ist.',
          content: `
            <p>Digitaler Luxus liegt nicht mehr in technologischer Prahlerei, sondern in der Unsichtbarkeit von Prozessen. Ein leistungsstarkes Unternehmen im Jahr 2024 ist eines, in dem operative Reibungsverluste zugunsten eines "flüssigen" Workflows verschwunden sind.</p>
            <h3>Interne UX: Der verborgene Wachstumsreaktor</h3>
            <p>Oft übersehen, korreliert die Nutzererfahrung der Mitarbeiter mit ihren eigenen Geschäftswerkzeugen direkt mit der Mitarbeiterbindung und der Qualität des Kundenservice. Kognitive KI antizipiert die Bedürfnisse der Mitarbeiter, indem sie die richtigen Informationen zur richtigen Zeit bereitstellt, ohne aktives Suchen.</p>
            <blockquote>"Die anspruchsvollste Intelligenz ist diejenige, die Komplexität so weit vereinfacht, dass sie unmerklich wird."</blockquote>
            <p>Bei Agenzia wenden wir Design-Thinking-Prinzipien auf die Automatisierung an. Jeder Workflow ist wie ein Luxusprodukt konzipiert: intuitiv, robust und ästhetisch rein.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[INTRO]\nWillkommen zurück. Heute definieren wir Luxus neu. Wir sprechen nicht über teure Uhren oder schnelle Autos, sondern über etwas viel Wertvolleres für Ihr Unternehmen: Digitalen Luxus. Warum kognitive KI der neue Goldstandard für operative Exzellenz ist.\n\n[TEIL 1: DIE UNSICHTBARKEIT DES ERFOLGS]\nWahrer Luxus wird oft gefühlt, nicht gesehen. In der digitalen Welt bedeutet das die Unsichtbarkeit von Prozessen. Ein leistungsstarkes Unternehmen im Jahr 2024 ist eines, in dem operative Reibungsverluste einfach verschwunden sind. KI sollte kein auffälliges Werkzeug sein, mit dem man prahlt; sie sollte der stille Motor sein, der Ihren gesamten Workflow 'flüssig' macht.\n\n[TEIL 2: DIE INTERNE UX-REVOLUTION]\nWir verbringen so viel Zeit mit der Kundenerfahrung, aber wir vergessen oft den wichtigsten Motor: unsere eigenen Teams. Die interne UX ist der verborgene Wachstumshebel. Kognitive KI antizipiert, was Ihre Mitarbeiter brauchen, bevor sie überhaupt fragen. Es geht darum, die richtigen Informationen zur richtigen Zeit bereitstellen, ohne langes Suchen. Das ist Design Thinking, angewandt auf die Automatisierung.\n\n[FAZIT]\nBei Agenzia bauen wir jeden Workflow wie ein Luxusprodukt: intuitiv, robust und ästhetisch rein. Denn am Ende des Tages ist Einfachheit die höchste Stufe der Raffinesse. Vielen Dank fürs Zuhören, und lassen Sie uns Ihre Abläufe wie Luxus anfühlen.`,
          videoStructure: [
            { scriptPart: "Willkommen zurück... operative Exzellenz.", visual: "Minimalistischer weißer Hintergrund mit Text 'Digitaler Luxus' + Filmische Aufnahme eines eleganten Büros." },
            { scriptPart: "Wahrer Luxus... Workflow 'flüssig' macht.", visual: "B-Roll einer Person, die mühelos arbeitet + Animation einer glatten, fließenden Flüssigkeit, die Daten darstellt." },
            { scriptPart: "Wir verbringen... auf die Automatisierung.", visual: "Geteilter Bildschirm zeigt 'Alter Weg' vs. 'KI-Weg' + Icons von Slack/HubSpot-Synchronisierung." },
            { scriptPart: "Bei Agenzia... wie Luxus anfühlen.", visual: "Agenzia-Logo in Schwarz/Gold + CTA-Button 'Audit vereinbaren'." }
          ],
          seoTitle: "Kognitive KI & Digitaler Luxus: Der neue operative Standard | Agenzia",
          seoDescription: "Erfahren Sie, wie kognitive KI digitalen Luxus durch Prozessunsichtbarkeit und interne UX neu definiert. Transformieren Sie Ihre Abläufe in einen nahtlosen Wettbewerbsvorteil."
        },
      ],
      cta: 'Alle Artikel',
      newsletter: {
        title: 'Newsletter',
        placeholder: 'E-Mail',
        button: 'Abonnieren'
      }
    },
    podcasts: {
      title: 'Strategische Podcasts.',
      subtitle: 'Hören Sie unseren Experten zu, wie sie die Zukunft der Automatisierung entschlüsseln.',
      cta: 'Alle Episoden anhören',
    },
    videos: {
      title: 'Video-Masterclasses.',
      subtitle: 'Technische Demonstrationen, um ins Handeln zu kommen.',
      cta: 'Alle Videos ansehen',
    },
    footer: {
      description: 'Agenzia KI.',
      sections: [
        { title: 'Firma', links: ['Über uns', 'Datenschutzerklärung'] },
      ],
      copyright: '© 2024 Agenzia.',
    },
    aiAssistant: {
      greeting: 'Hallo! Wie kann ich helfen?',
      placeholder: 'Frage stellen...',
    },
    articleDetail: {
      backButton: 'Zurück zur Auswahl',
      readingTime: 'Lesezeit',
      publishedOn: 'Veröffentlicht am',
      podcastIncluded: 'Podcast enthalten',
      videoIncluded: 'Video enthalten',
      listenPodcast: 'Podcast anhören',
      watchVideo: 'Video ansehen',
      audioVersion: 'Erweiterte Audio-Version',
      videoMasterclass: 'Technische Masterclass',
      contentArchitecture: 'Content-Architektur',
      multiPlatformDeclination: 'Multi-Plattform-Deklination',
      seoLayer: 'Metadaten-Ebene (SEO)',
      podcastLayer: 'Podcast-Ebene (Audio)',
      videoLayer: 'Video-Ebene (Struktur)',
      metaTitle: 'Title-Tag',
      metaDescription: 'Meta-Beschreibung',
      scriptPart: 'Skript-Teil',
      visual: 'Visuell',
    },
  },
  ar: {
    header: {
      nav: { solutions: 'حلول', podcasts: 'بودكاست', videos: 'فيديوهات', blog: 'مدونة' },
      cta: 'احجز مكالمة',
      language: 'اللغة',
    },
    hero: {
      title: 'شركتك، مطورة بالذكاء الاصطناعي.',
      subtitle: 'نحن نصمم أنظمة أتمتة مخصصة لمضاعفة إنتاجيتك.',
      cta: 'اكتشف حلولنا',
    },
    ecosystem: {
      title: 'متكامل مع نظامك التقني',
    },
    problem: {
      title: 'العمليات اليدوية تبطئ نموك.',
      description: 'كل مهمة متكررة هي فرصة ضائعة.',
      cards: [
        { title: 'إضاعة الوقت', description: 'ساعات ضائعة في عمليات يدوية.' },
        { title: 'خطر الأخطاء', description: 'التدخل البشري يزيد من الأخطاء.' },
        { title: 'نقص التوسع', description: 'الأنظمة لا تواكب النمو.' },
      ],
    },
    vision: {
      title: 'كفاءة تشغيلية مطلقة.',
      description: 'تحويل العمليات إلى ميزة تنافسية.',
      cta: 'تحدث مع خبير',
    },
    promptBuilder: {
      title: 'تخيل. نحن نهندس.',
      intro: 'بناء امتدادات لذكائك.',
      steps: {
        challenge: { title: 'تحدي' },
        tools: { title: 'أدوات', available: 'متاح', selected: 'مختار' },
        wish: { title: 'أمنية', placeholder: 'مثلاً أتمتة البريد...', suggestions: ['بريد', 'بيانات'] },
      },
      challenges: [
        { id: 'leads', name: 'بريد', icon: 'magnet' },
      ],
      tools: [
        { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
      ],
      preview: {
        title: 'معاينة',
        workflow: 'سير العمل',
      },
      cta: 'إنشاء الحل',
    },
    modules: {
      title: 'ثلاثة حلول جاهزة.',
      cards: [
        { title: 'وكيل أمن سيبراني محلي', description: 'تثبيت في 5 دقائق. فحص تلقائي، مراقبة، هجرة سحابية.', tag: 'أمن' },
        { title: 'تحليل بيانات بالذكاء الاصطناعي', description: 'رفع ملفات Excel/CSV، لوحة معلومات فورية. متوافق مع RGPD.', tag: 'بيانات' },
        { title: 'سوق إلكتروني', description: 'مطابقة ذكية مع مستقلين مؤهلين. الدفع لكل مهمة.', tag: 'سوق' },
        { title: 'مركز عمليات أمنية', description: 'مركز أمني كامل مع كشف تلقائي وتأمين سيبراني.', tag: 'مؤسسي' },
      ],
    },
    pricing: {
      title: 'أسعار مصممة للشركات الصغيرة.',
      subtitle: 'بدون استشارات باهظة. بدون إعداد لمدة 6 أشهر.',
      tiers: [
        { name: 'أساسي', price: '99€', period: '/شهر', description: 'مثالي للشركات التي تبدأ تحولها الرقمي.', features: ['وكيل ذكاء اصطناعي محلي', 'فحص الثغرات', 'مراقبة أساسية', 'تنبيهات', 'لوحة أمان', 'دعم مجتمعي'], cta: 'ابدأ مجاناً' },
        { name: 'احترافي', price: '499€', period: '/شهر', description: 'للشركات التي تحتاج هجرة سحابية وبيانات متقدمة.', features: ['كل خطة الأساسي +', 'هجرة سحابية', 'تحليل بيانات بالذكاء الاصطناعي', 'مطابقة مستقل', 'امتثال RGPD', 'دعم أولوية'], cta: 'تجربة مجانية 14 يوم', highlighted: true },
        { name: 'مؤسسي', price: '999€', period: '/شهر', description: 'مركز أمني كامل + تأمين سيبراني.', features: ['كل خطة الاحترافي +', 'مركز أمني 24/7', 'تأمين سيبراني', 'ذكاء اصطناعي محلي', 'امتثال NIS2', 'مدير حساب مخصص'], cta: 'تواصل معنا' },
      ],
    },
    roadmap: {
      title: 'خارطة الطريق.',
      subtitle: 'خطة طموحة لثورة وصول الشركات الصغيرة للأمن السيبراني والسحابة والبيانات.',
      phases: [
        { phase: 'المرحلة 1', title: 'النموذج الأولي', timeline: 'Q2-Q3 2026', items: ['نموذج وكيل ذكاء اصطناعي', 'تجربة 10 شركات', 'تكامل البيانات', 'تدقيق مجاني'], kpi: '20 عميل، 10 آلاف يورو شهرياً' },
        { phase: 'المرحلة 2', title: 'التوسع الأولي', timeline: 'Q4 2026-Q1 2027', items: ['شراكات OVH/Elyos', '50 مستقل', 'ندوات', 'شهادات'], kpi: '100 عميل، 50 ألف يورو شهرياً' },
        { phase: 'المرحلة 3', title: 'التوسع الأوروبي', timeline: 'Q2 2027-Q1 2028', items: ['توسع ألمانيا/بنلوكس', 'ذكاء اصطناعي محلي', 'اتحاد شركات', 'جولة تمويل'], kpi: '1 مليون → 5 مليون يورو' },
      ],
    },
    podcasts: {
      title: 'بودكاست استراتيجي.',
      subtitle: 'استمع إلى خبرائنا وهم يفككون رموز مستقبل الأتمتة.',
      cta: 'استمع إلى جميع الحلقات',
    },
    videos: {
      title: 'ماستر كلاس فيديو.',
      subtitle: 'عروض تقنية لبدء العمل.',
      cta: 'شاهد جميع الفيديوهات',
    },
    useCases: {
      title: 'حالات الاستخدام',
      cases: [
        { title: 'تسويق', description: 'توليد المحتوى.' },
      ],
    },
    roi: {
      title: 'حساب العائد',
      description: 'وفورات الأتمتة.',
      employeesLabel: 'موظفون',
      hoursLabel: 'ساعات موفرة',
      costLabel: 'تكلفة الساعة',
      savingsTitle: 'وفورات سنوية',
      savingsPerYear: '/ سنة',
      cta: 'تدقيق مجاني',
    },
    blog: {
      title: 'مدونة',
      subtitle: 'رؤى الذكاء الاصطناعي.',
      filters: ['الكل'],
      posts: [
        { 
          category: 'استراتيجية', 
          title: 'الذكاء الاصطناعي التوليدي: هندسة الكفاءة التشغيلية للمستقبل', 
          author: 'جون دو', 
          authorAvatar: 'https://i.pravatar.cc/150?u=john_doe',
          date: '12 مارس 2024', 
          readingTime: '8 دقائق',
          excerpt: 'لم يعد دمج نماذج اللغات الكبيرة (LLMs) يقتصر على توليد النصوص. في عام 2025، سيصبح الجهاز العصبي المركزي للمؤسسات المرنة.',
          content: `
            <p>لقد انتهى عصر التجريب مع الذكاء الاصطناعي. لقد دخلنا عصر التصنيع. بالنسبة للمديرين التنفيذيين، لم يعد السؤال "ماذا يمكن للذكاء الاصطناعي أن يفعل؟" بل "كيف يمكن للذكاء الاصطناعي تحويل نموذجنا التشغيلي؟"</p>
            <h3>1. من أداة إلى وكيل مستقل</h3>
            <p>على عكس البرامج التقليدية، لا يكتفي وكلاء الذكاء الاصطناعي القائمون على نماذج اللغات الكبيرة بتنفيذ المهام؛ بل يتخذون قرارات سياقية. من خلال ربط بياناتكم الخاصة بهذه النماذج، فإنكم تنشئون سير عمل يتعلم من نجاحاتكم السابقة.</p>
            <h3>2. التوافق التشغيلي كرافعة للعائد على الاستثمار</h3>
            <p>يكمن مكسب الإنتاجية الحقيقي في الروابط بين أدواتكم. يجب أن تتواصل Gmail وSlack وHubSpot وSalesforce بسلاسة. تسمح بنيتنا بالمزامنة في الوقت الفعلي دون تدخل بشري، مما يقلل أخطاء الإدخال بنسبة 99%.</p>
            <h3>3. الخاتمة</h3>
            <p>الأتمتة الذكية ليست مشروعاً تقنياً، بل هي استراتيجية عمل. من خلال تحرير مواهبكم من المهام المتكررة، فإنكم تسمحون لهم بالتركيز على خلق القيمة والابتكار الاستراتيجي.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[مقدمة]\nأهلاً بكم في حلقة جديدة من Agenzia Insights. اليوم نتحدث عن موضوع حيوي: لماذا يمثل عام 2024 نهاية أدوات الذكاء الاصطناعي البسيطة وبداية الثورة الصناعية الحقيقية لشركاتكم.\n\n[الجزء 1: من أداة إلى وكيل مستقل]\nلقد جربنا جميعاً ChatGPT، ولكن الآن الأمور أصبحت جدية. لا نتحدث فقط عن أدوات بسيطة، بل عن وكلاء مستقلين. تخيلوا أنظمة لا تكتفي بالرد، بل تعمل بناءً على بياناتكم الخاصة. إنه الانتقال من الفضول إلى الإنتاجية الخالصة.\n\n[الجزء 2: التوافق التشغيلي]\nالسر؟ التوافق التشغيلي. إنها الكلمة المعقدة التي تعني أن أدواتكم يجب أن تتحدث مع بعضها البعض. Gmail، Slack، HubSpot، Salesforce... إذا كان الذكاء الاصطناعي هو الدماغ، فهذه الروابط هي الأعصاب. نتحدث عن تقليل أخطاء إدخال البيانات بنسبة 99%. هنا يكمن العائد على الاستثمار.\n\n[الخاتمة]\nباختصار، الأتمتة الذكية ليست مشروعاً تقنياً، بل هي استراتيجية نموكم. شكراً لاستماعكم، ونراكم قريباً لتحسين عملياتكم.`,
          videoStructure: [
            { scriptPart: "أهلاً بكم... الثورة الصناعية.", visual: "لقطات مكتب حديث + نص: '2024: عصر التصنيع'" },
            { scriptPart: "لقد جربنا... الإنتاجية الخالصة.", visual: "رسم بياني: 'أداة مقابل وكيل مستقل' + أيقونات تروس" },
            { scriptPart: "السر... العائد على الاستثمار.", visual: "رسوم متحركة: شعارات Gmail/Slack/HubSpot متصلة + نص: '-99% أخطاء'" },
            { scriptPart: "باختصار... عملياتكم.", visual: "شعار Agenzia + زر: 'تدقيق استراتيجي'" }
          ],
          seoTitle: "تصنيع الذكاء الاصطناعي 2024: الدليل الاستراتيجي | Agenzia",
          seoDescription: "اكتشف لماذا يعد عام 2024 العام المحوري للذكاء الاصطناعي في الأعمال. وكلاء مستقلون، توافق تشغيلي، وعائد على الاستثمار: انتقل من التجريب إلى التأثير الحقيقي."
        },
        { 
          category: 'تكنولوجيا', 
          title: 'الأتمتة 2.0: لماذا يعد الذكاء الاصطناعي المعرفي المعيار الجديد للفخامة الرقمية', 
          author: 'جين سميث', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jane_smith',
          date: '08 مارس 2024', 
          readingTime: '5 دقائق',
          excerpt: 'لا تُرى "الفخامة الرقمية" للذكاء الاصطناعي؛ بل تُحس في سلاسة العمليات. تعرف على سبب كون تجربة المستخدم الداخلية هي رافعة النمو الأكثر استهانة.',
          content: `
            <p>لم تعد الفخامة الرقمية تكمن في التباهي التكنولوجي بل في خفاء العمليات. الشركة ذات الأداء العالي في عام 2024 هي تلك التي اختفت فيها الاحتكاكات التشغيلية لصالح سير عمل "سائل".</p>
            <h3>تجربة المستخدم الداخلية: محرك النمو الخفي</h3>
            <p>غالباً ما يتم تجاهلها، ترتبط تجربة المستخدم للموظفين مع أدوات عملهم الخاصة ارتباطاً مباشراً بالاحتفاظ بالمواهب وجودة خدمة العملاء. يتوقع الذكاء الاصطناعي المعرفي احتياجات الموظفين من خلال توفير المعلومات الصحيحة في الوقت الصحيح، دون بحث نشط.</p>
            <blockquote>"الذكاء الأكثر تطوراً هو الذي يبسط التعقيد حتى يصبح غير محسوس."</blockquote>
            <p>في Agenzia، نطبق مبادئ التفكير التصميمي على الأتمتة. تم تصميم كل سير عمل كمنتج فاخر: بديهي، قوي، ونقي جمالياً.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[مقدمة]\nمرحباً بكم من جديد. اليوم نعيد تعريف الفخامة. لا نتحدث عن الساعات الفاخرة أو السيارات السريعة، بل عن شيء أكثر قيمة لشركتكم: الفخامة الرقمية. لماذا يعد الذكاء الاصطناعي المعرفي المعيار الذهبي الجديد للتميز التشغيلي.\n\n[الجزء 1: خفاء النجاح]\nالفخامة الحقيقية غالباً ما تُحس ولا تُرى. في العالم الرقمي، هذا يعني خفاء العمليات. الشركة ذات الأداء العالي في عام 2024 هي تلك التي اختفت فيها الاحتكاكات التشغيلية لصالح سير عمل 'سائل'. لا ينبغي أن يكون الذكاء الاصطناعي أداة براقة تتباهى بها؛ بل يجب أن يكون المحرك الصامت الذي يجعل سير عملك بالكامل يبدو سلساً.\n\n[الجزء 2: ثورة تجربة المستخدم الداخلية]\nنقضي الكثير من الوقت في تجربة العملاء، لكننا غالباً ما ننسى المحرك الأكثر أهمية: فرقنا الخاصة. تجربة المستخدم الداخلية هي رافعة النمو الخفية. الذكاء الاصطناعي المعرفي يتوقع ما يحتاجه موظفوك قبل أن يسألوا. يتعلق الأمر بتوفير المعلومة الصحيحة في الوقت الصحيح، دون عناء البحث. هذا هو التفكير التصميمي المطبق على الأتمتة.\n\n[الخاتمة]\nفي Agenzia، نصمم كل سير عمل كمنتج فاخر: بديهي، قوي، ونقي جمالياً. لأن البساطة في نهاية المطاف هي قمة الرقي. شكراً لاستماعكم، ولنجعل عملياتكم تبدو كالفخامة.`,
          videoStructure: [
            { scriptPart: "مرحباً بكم... التميز التشغيلي.", visual: "خلفية بيضاء بسيطة مع نص 'الفخامة الرقمية' + لقطة سينمائية لمكتب أنيق." },
            { scriptPart: "الفخامة الحقيقية... سير عمل 'سائل'.", visual: "لقطات لشخص يعمل بسهولة + رسوم متحركة لسائل يتدفق بسلاسة يمثل البيانات." },
            { scriptPart: "نقضي الكثير... المطبق على الأتمتة.", visual: "شاشة مقسمة تظهر 'الطريقة القديمة' مقابل 'طريقة الذكاء الاصطناعي' + أيقونات مزامنة Slack/HubSpot." },
            { scriptPart: "في Agenzia... كالفخامة.", visual: "شعار Agenzia باللون الأسود والذهبي + زر: 'احجز تدقيقاً'." }
          ],
          seoTitle: "الذكاء الاصطناعي المعرفي والفخامة الرقمية: المعيار التشغيلي الجديد | Agenzia",
          seoDescription: "اكتشف كيف يعيد الذكاء الاصطناعي المعرفي تعريف الفخامة الرقمية من خلال خفاء العمليات وتجربة المستخدم الداخلية. حول عملياتك إلى ميزة تنافسية سلسة."
        },
      ],
      cta: 'كل المقالات',
      newsletter: {
        title: 'النشرة',
        placeholder: 'بريد',
        button: 'اشتراك'
      }
    },
    footer: {
      description: 'أجينزيا.',
      sections: [
        { title: 'شركة', links: ['عننا'] },
      ],
      copyright: '© 2024 أجينزيا.',
    },
    aiAssistant: {
      greeting: 'أهلاً بك! كيف يمكنني مساعدتك في تحسين عملياتك اليوم؟',
      placeholder: 'اسأل سؤالك...',
    },
    articleDetail: {
      backButton: 'العودة إلى الاختيار',
      readingTime: 'قراءة',
      publishedOn: 'نُشر في',
      podcastIncluded: 'بودكاست متضمن',
      videoIncluded: 'فيديو متضمن',
      listenPodcast: 'استمع إلى البودكاست',
      watchVideo: 'شاهد الفيديو',
      audioVersion: 'نسخة صوتية مطورة',
      videoMasterclass: 'ماستر كلاس تقني',
      contentArchitecture: 'هندسة المحتوى',
      multiPlatformDeclination: 'توزيع المحتوى متعدد المنصات',
      seoLayer: 'طبقة البيانات الوصفية (SEO)',
      podcastLayer: 'طبقة البودكاست (صوتي)',
      videoLayer: 'طبقة الفيديو (هيكلية)',
      metaTitle: 'عنوان الصفحة (Title Tag)',
      metaDescription: 'الوصف الميتا (Meta Description)',
      scriptPart: 'جزء من السيناريو',
      visual: 'مرئي',
    },
  },
};
