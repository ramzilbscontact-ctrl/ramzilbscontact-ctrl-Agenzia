
import type { Content } from './types';

export const translations: { [key: string]: Content } = {
  fr: {
    header: {
      nav: { solutions: 'Solutions', podcasts: 'Podcasts', videos: 'Vidéos', blog: 'Blog' },
      cta: 'Planifier un appel',
      language: 'Langue',
    },
    hero: {
      title: 'Votre entreprise, en version augmentée par l’IA.',
      subtitle: 'Nous concevons des systèmes d’automatisation sur-mesure pour décupler votre productivité et libérer le potentiel de vos équipes.',
      cta: 'Découvrir nos solutions',
    },
    ecosystem: {
      title: 'Intégré à votre écosystème technologique',
    },
    problem: {
      title: 'Les opérations manuelles freinent votre croissance.',
      description: 'Chaque tâche répétitive est une opportunité manquée. L\'inefficacité opérationnelle coûte cher, démotive vos équipes et vous laisse vulnérable face à la concurrence.',
      cards: [
        { title: 'Perte de temps', description: 'Des heures précieuses gaspillées dans des process manuels et redondants.' },
        { title: 'Risque d\'erreurs', description: 'Les interventions humaines augmentent la probabilité d\'erreurs coûteuses.' },
        { title: 'Manque de scalabilité', description: 'Vos systèmes actuels ne peuvent pas suivre la croissance de votre activité.' },
      ],
    },
    vision: {
      title: 'Passez à l’efficience opérationnelle absolue.',
      description: 'Agenzia transforme vos processus métier en un avantage compétitif. Grâce à l\'IA et l\'automatisation, nous créons un système nerveux central pour votre entreprise, où chaque action est optimisée, intelligente et instantanée.',
      cta: 'Discuter avec un expert',
    },
    promptBuilder: {
      title: 'Imaginez. Nous Architecturons. Votre Écosystème Idéal.',
      intro: 'Chez Agenzia, nous ne vendons pas des boîtes. Nous construisons des extensions de votre intelligence. Utilisez notre configurateur interactif pour définir votre besoin le plus pressant. Observez comment le "White Pure Look" se matérialise pour vous, en temps réel.',
      steps: {
        challenge: { title: 'Étape 1 : Quel est votre défi principal ?' },
        tools: { title: 'Étape 2 : Quels outils utilisez-vous déjà ?', available: 'Outils disponibles', selected: 'Votre espace de travail' },
        wish: { title: 'Étape 3 : Décrivez votre souhait', placeholder: 'Ex: "Je veux que mes leads qualifiés dans HubSpot reçoivent un email personnalisé 5 minutes après."', suggestions: ['...envoi automatique d\'email...', '...création de tâche...', '...synchronisation des données...'] },
      },
      challenges: [
        { id: 'leads', name: 'Acquisition & Conversion Leads', icon: 'magnet' },
        { id: 'admin', name: 'Gestion Administrative & Finance', icon: 'balance' },
        { id: 'hr', name: 'RH & Onboarding', icon: 'team' },
        { id: 'data', name: 'Analyse de Données & Reporting', icon: 'chart' },
        { id: 'ops', name: 'Processus Opérationnels', icon: 'gear' },
        { id: 'support', name: 'Support Client & FAQ', icon: 'chat' },
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
      title: 'Nos modules d\'intervention.',
      cards: [
        { title: 'Audit & Stratégie IA', description: 'Analyse complète de vos processus pour identifier les gisements de productivité.', tag: 'Fondation' },
        { title: 'Automatisation des Ventes', description: 'Optimisez votre CRM, qualifiez les leads et automatisez le reporting commercial.', tag: 'Sales' },
        { title: 'Support Client Augmenté', description: 'Déployez des agents IA pour des réponses instantanées et un support 24/7.', tag: 'Support' },
        { title: 'Optimisation Financière', description: 'Automatisez la facturation, le suivi des paiements et la réconciliation comptable.', tag: 'Finance' },
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
      title: 'Des applications concrètes pour chaque département.',
      cases: [
        { title: 'Marketing', description: 'Génération de contenu, analyse de sentiment, personnalisation des campagnes à grande échelle.' },
        { title: 'Ressources Humaines', description: 'Automatisation du sourcing de candidats, onboarding des nouveaux employés, gestion des congés.' },
        { title: 'Opérations', description: 'Gestion de la chaîne logistique, optimisation des stocks, maintenance prédictive.' },
      ],
    },
    roi: {
      title: 'Calculez votre retour sur investissement.',
      description: 'Visualisez concrètement les économies et le gain de temps que l’automatisation peut apporter à votre entreprise.',
      employeesLabel: 'Nombre d\'employés',
      hoursLabel: 'Heures sauvées par employé/semaine',
      costLabel: 'Coût horaire moyen (€)',
      savingsTitle: 'Économies annuelles estimées',
      savingsPerYear: '/ an',
      cta: 'Obtenir un audit gratuit',
    },
    blog: {
      title: 'Intelligence & Perspectives.',
      subtitle: 'Décryptage des tendances IA et stratégies d\'automatisation pour les leaders de demain.',
      filters: ['Tous', 'Stratégie', 'Technologie'],
      posts: [
        { 
          category: 'Stratégie', 
          title: 'L’IA Générative : Architecturer l’Efficience Opérationnelle du Futur', 
          author: 'Jean Dupont', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jean_dupont',
          date: '12 Mars 2024', 
          readingTime: '8 min',
          excerpt: 'L’intégration des Large Language Models (LLM) ne se limite plus à la simple génération de texte. En 2025, elle devient le système nerveux central des organisations agiles.',
          content: `
            <p>L'ère de l'expérimentation avec l'IA est terminée. Nous sommes entrés dans l'ère de l'industrialisation. Pour les C-Levels, la question n'est plus "Qu'est-ce que l'IA peut faire ?" mais "Comment l'IA peut-elle transformer notre modèle opérationnel ?"</p>
            <h3>1. De l'outil à l'agent autonome</h3>
            <p>Contrairement aux logiciels traditionnels, les agents IA basés sur les LLMs ne se contentent pas d'exécuter des tâches ; ils prennent des decisions contextuelles. En connectant vos données propriétaires à ces modèles, vous créez des workflows qui apprennent de vos succès passés.</p>
            <h3>2. L'interopérabilité comme levier de ROI</h3>
            <p>Le véritable gain de productivité se trouve dans la glue entre vos outils. Gmail, Slack, HubSpot et Salesforce doivent communiquer de manière fluide. Nos architectures permettent une synchronisation en temps réel sans intervention humaine, réduisant les erreurs de saisie de 99%.</p>
            <h3>3. Conclusion</h3>
            <p>L'automatisation intelligente n'est pas un projet IT, c'est une stratégie business. En libérant vos talents des tâches répétitives, vous leur permettez de se concentrer sur la création de valeur et l'innovation stratégique.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[MUSIQUE D'INTRODUCTION : ÉLECTRONIQUE ÉPURÉE, RYTHMÉE]\n\nBonjour à tous, et bienvenue dans ce nouvel épisode d'Agenzia Insights. Je suis votre hôte, et aujourd'hui, on va parler de l'éléphant dans la pièce : l'IA générative. Mais attention, on ne va pas parler de gadgets ou de générer des images de chats. On va parler d'architecture. On va parler d'efficience opérationnelle.\n\n[TRANSITION : BRUIT DE CLAVIER RAPIDE]\n\nPremière punchline : l'ère de l'expérimentation est terminée. Si vous en êtes encore à demander à ChatGPT de rédiger vos mails, vous avez déjà un train de retard. En 2025, l'IA, c'est le système nerveux central de votre boîte. C'est la glue qui fait que tout fonctionne sans friction.\n\nOn passe de l'outil à l'agent autonome. C'est quoi la différence ? Un outil attend que vous lui demandiez quelque chose. Un agent, lui, connaît vos données, comprend votre contexte et prend des décisions. Il n'exécute pas juste une tâche, il gère un workflow. Imaginez un système qui qualifie vos leads, prépare les contrats et alerte votre équipe commerciale, le tout pendant que vous dormez.\n\n[PAUSE DRAMATIQUE]\n\nMais le vrai secret, le levier de ROI massif, c'est l'interoperabilité. Vos outils — Gmail, Slack, HubSpot, Salesforce — ils doivent se parler. Et pas juste s'envoyer des notifications. Ils doivent échanger de l'intelligence. Nos architectures permettent de réduire les erreurs de saisie de 99%. Oui, vous avez bien entendu : 99%.\n\nAlors, conclusion ? L'automatisation intelligente, ce n'est pas un projet pour votre département IT. C'est une stratégie business pure et dure. C'est comment vous allez gagner la guerre de la productivité.\n\nMerci de nous avoir écoutés. Pour passer à l'action, rendez-vous sur agenzia.ai. À très vite.\n\n[MUSIQUE DE FIN : FADE OUT]`,
          videoStructure: [
            { scriptPart: "Bonjour à tous... révolution industrielle.", visual: "Plan large d'un bureau ultra-moderne, épuré, style 'White Pure'. Texte en surimpression : 'IA GÉNÉRATIVE : L'ÈRE DE L'INDUSTRIALISATION'." },
            { scriptPart: "Première punchline... train de retard.", visual: "Gros plan sur un écran montrant une interface de code fluide qui se transforme en un tableau de bord de KPIs en croissance." },
            { scriptPart: "En 2025... sans friction.", visual: "Animation 3D d'un cerveau numérique dont les synapses se connectent à des logos : Gmail, Slack, Salesforce." },
            { scriptPart: "On passe de l'outil... pendant que vous dormez.", visual: "Split screen. À gauche : un humain stressé devant des fichiers Excel. À droite : un agent IA symbolisé par une sphère lumineuse gérant tout de manière fluide." },
            { scriptPart: "Mais le vrai secret... 99%.", visual: "Graphique dynamique montrant une courbe d'erreurs chutant brutalement vers zéro. Texte : '-99% D'ERREURS'." },
            { scriptPart: "Alors, conclusion... stratégie business.", visual: "Logo Agenzia qui s'anime au centre. Texte : 'ARCHITECTURER VOTRE FUTUR'." }
          ],
          seoTitle: "IA Générative 2025 : Guide de l'Efficience Opérationnelle | Agenzia",
          seoDescription: "Passez de l'outil à l'agent autonome. Découvrez comment architecturer votre entreprise avec l'IA générative pour un ROI massif et 99% d'erreurs en moins.",
        },
        { 
          category: 'Technologie', 
          title: 'Automatisation 2.0 : Pourquoi l’IA Cognitive est le Nouveau Standard du Luxe Digital', 
          author: 'Marie Curie', 
          authorAvatar: 'https://i.pravatar.cc/150?u=marie_curie',
          date: '08 Mars 2024', 
          readingTime: '5 min',
          excerpt: 'Le "Pure White Look" de l’IA ne se voit pas, il se ressent dans la fluidité des opérations. Découvrez pourquoi l’expérience utilisateur interne est le levier de croissance le plus sous-estimé.',
          content: `
            <p>Le luxe digital ne réside plus dans l'ostentation technologique, mais dans l'invisibilité des processus. Une entreprise performante en 2024 est une entreprise où les frictions opérationnelles ont disparu au profit d'un flux de travail "liquide".</p>
            <h3>L'UX Interne : Le moteur caché de la croissance</h3>
            <p>Souvent négligée, l'expérience utilisateur des employés with their own business tools est corrélée directement à la rétention des talents et à la qualité du service client. L'IA cognitive permet d'anticiper les besoins des collaborateurs en leur fournissant la bonne information au bon moment, sans recherche active.</p>
            <blockquote>"L'intelligence la plus sophistiquée est celle qui simplifie la complexité jusqu'à la rendre imperceptible."</blockquote>
            <p>Chez Agenzia, nous appliquons les principes du design thinking à l'automatisation. Chaque workflow est conçu comme un produit de luxe : intuitif, robuste et esthétiquement pur.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[INTRO]\nBienvenue dans ce nouvel épisode. Aujourd'hui, on parle de luxe. Pas de montres ou de voitures, mais de luxe digital. Pourquoi l'IA cognitive est en train de redéfinir ce que signifie "l'excellence opérationnelle".\n\n[PARTIE 1 : L'INVISIBILITÉ]\nLe vrai luxe, c'est quand tout fonctionne sans qu'on s'en aperçoive. Dans le digital, c'est l'invisibilité des processus. Une entreprise performante, c'est celle où les frictions ont disparu. L'IA ne se voit pas, elle se ressent dans la fluidité du travail quotidien.\n\n[PARTIE 2 : L'UX INTERNE]\nOn parle souvent de l'expérience client, mais l'expérience collaborateur est le vrai moteur caché. L'IA cognitive anticipe les besoins de vos équipes. Elle apporte la bonne info au bon moment. C'est ça, le design thinking appliqué à l'automation.\n\n[CONCLUSION]\nChez Agenzia, on conçoit chaque workflow comme un produit de luxe : intuitif, robuste et pur. Merci de nous avoir suivis, et rappelez-vous : la simplicité est la sophistication suprême.`,
          videoStructure: [
            { scriptPart: "Bienvenue... excellence opérationnelle.", visual: "Fond blanc épuré, texte minimaliste 'Luxe Digital'" },
            { scriptPart: "Le vrai luxe... fluidité du travail.", visual: "B-roll cinématique d'un espace de travail zen, transitions fluides" },
            { scriptPart: "On parle souvent... appliqué à l'automation.", visual: "Schéma montrant l'IA comme un assistant invisible à côté d'un humain" },
            { scriptPart: "Chez Agenzia... sophistication suprême.", visual: "Logo Agenzia version 'Luxury Black', citation de Léonard de Vinci" }
          ],
          seoTitle: "IA Cognitive & Luxe Digital : Le Nouveau Standard | Agenzia",
          seoDescription: "Découvrez comment l'IA cognitive transforme l'expérience collaborateur et redéfinit l'excellence opérationnelle. Le luxe de l'invisibilité au service de votre croissance."
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
      description: 'Agenzia. L\'efficience opérationnelle par l\'IA.',
      sections: [
        { title: 'Solutions', links: ['Automatisation Ventes', 'Support Client', 'Opérations RH', 'Finance'] },
        { title: 'Entreprise', links: ['À propos', 'Carrières', 'Presse', 'Contact', 'Politique de Confidentialité'] },
        { title: 'Ressources', links: ['Blog', 'Podcasts', 'Vidéos', 'Documentation API'] },
      ],
      copyright: '© 2024 Agenzia. Tous droits réservés.',
    },
    aiAssistant: {
      greeting: 'Bonjour ! Comment puis-je vous aider à optimiser vos opérations aujourd\'hui ?',
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
      title: 'Your company, augmented by AI.',
      subtitle: 'We design custom automation systems to multiply your productivity and unlock your team\'s potential.',
      cta: 'Discover our solutions',
    },
    ecosystem: {
      title: 'Integrated into your technology ecosystem',
    },
    problem: {
      title: 'Manual operations are slowing your growth.',
      description: 'Every repetitive task is a missed opportunity. Operational inefficiency is costly, demotivates your teams, and leaves you vulnerable to competition.',
      cards: [
        { title: 'Wasted Time', description: 'Precious hours wasted on manual and redundant processes.' },
        { title: 'Risk of Errors', description: 'Human intervention increases the likelihood of costly mistakes.' },
        { title: 'Lack of Scalability', description: 'Your current systems cannot keep up with your business growth.' },
      ],
    },
    vision: {
      title: 'Switch to absolute operational efficiency.',
      description: 'Agenzia transforms your business processes into a competitive advantage. With AI and automation, we create a central nervous system for your company, where every action is optimized, intelligent, and instant.',
      cta: 'Talk to an expert',
    },
    promptBuilder: {
        title: 'Imagine. We Architect. Your Ideal Ecosystem.',
        intro: 'At Agenzia, we don\'t sell boxes. We build extensions of your intelligence. Use our interactive configurator to define your most pressing need. Watch how the "White Pure Look" materializes for you, in real time.',
        steps: {
            challenge: { title: 'Step 1: What is your main challenge?' },
            tools: { title: 'Step 2: Which tools do you already use?', available: 'Available tools', selected: 'Your workspace' },
            wish: { title: 'Step 3: Describe your wish', placeholder: 'e.g., "I want qualified leads in HubSpot to receive a personalized email 5 minutes later."', suggestions: ['...automatic email sending...', '...task creation...', '...data synchronization...'] },
        },
        challenges: [
            { id: 'leads', name: 'Lead Acquisition & Conversion', icon: 'magnet' },
            { id: 'admin', name: 'Admin & Finance Management', icon: 'balance' },
            { id: 'hr', name: 'HR & Onboarding', icon: 'team' },
            { id: 'data', name: 'Data Analysis & Reporting', icon: 'chart' },
            { id: 'ops', name: 'Operational Processes', icon: 'gear' },
            { id: 'support', name: 'Customer Support & FAQ', icon: 'chat' },
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
      title: 'Our intervention modules.',
      cards: [
        { title: 'AI Audit & Strategy', description: 'Comprehensive analysis of your processes to identify productivity gains.', tag: 'Foundation' },
        { title: 'Sales Automation', description: 'Optimize your CRM, qualify leads, and automate sales reporting.', tag: 'Sales' },
        { title: 'Augmented Customer Support', description: 'Deploy AI agents for instant responses and 24/7 support.', tag: 'Support' },
        { title: 'Financial Optimization', description: 'Automate invoicing, payment tracking, and accounting reconciliation.', tag: 'Finance' },
      ],
    },
    podcasts: {
      title: 'Strategic Podcasts.',
      subtitle: 'Listen to our experts decode the future of automation.',
      cta: 'Listen to all episodes',
    },
    videos: {
      title: 'Video Masterclasses.',
      subtitle: 'Technical demonstrations to take action.',
      cta: 'View all videos',
    },
    useCases: {
      title: 'Concrete applications for every department.',
      cases: [
        { title: 'Marketing', description: 'Content generation, sentiment analysis, large-scale campaign personalization.' },
        { title: 'Human Resources', description: 'Candidate sourcing automation, new employee onboarding, leave management.' },
        { title: 'Operations', description: 'Supply chain management, inventory optimization, predictive maintenance.' },
      ],
    },
    roi: {
      title: 'Calculate your return on investment.',
      description: 'Visualize the concrete savings and time gains that automation can bring to your company.',
      employeesLabel: 'Number of employees',
      hoursLabel: 'Hours saved per employee/week',
      costLabel: 'Average hourly cost ($)',
      savingsTitle: 'Estimated annual savings',
      savingsPerYear: '/ year',
      cta: 'Get a free audit',
    },
    blog: {
      title: 'Insights & Perspectives.',
      subtitle: 'Decoding AI trends and automation strategies for tomorrow\'s leaders.',
      filters: ['All', 'Strategy', 'Technology'],
      posts: [
        { 
          category: 'Strategy', 
          title: 'Generative AI: Architecting the Operational Efficiency of the Future', 
          author: 'John Doe', 
          authorAvatar: 'https://i.pravatar.cc/150?u=john_doe',
          date: 'March 12, 2024', 
          readingTime: '8 min',
          excerpt: 'Large Language Models (LLMs) integration is no longer just about text generation. In 2025, it becomes the central nervous system of agile organizations.',
          content: `
            <p>The era of AI experimentation is over. We have entered the era of industrialization. For C-Levels, the question is no longer "What can AI do?" but "How can AI transform our operational model?"</p>
            <h3>1. From Tool to Autonomous Agent</h3>
            <p>Unlike traditional software, AI agents based on LLMs don't just execute tasks; they make contextual decisions. By connecting your proprietary data to these models, you create workflows that learn from your past successes.</p>
            <h3>2. Interoperability as an ROI Lever</h3>
            <p>The real productivity gain lies in the glue between your tools. Gmail, Slack, HubSpot, and Salesforce must communicate seamlessly. Our architectures allow real-time synchronization without human intervention, reducing entry errors by 99%.</p>
            <h3>3. Conclusion</h3>
            <p>Intelligent automation is not an IT project; it's a business strategy. By freeing your talent from repetitive tasks, you allow them to focus on value creation and strategic innovation.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true,
          podcastScript: `[INTRO]\nHello everyone, welcome to this new episode of Agenzia Insights. Today we're tackling a hot topic: why 2024 marks the end of AI gadgets and the beginning of the real industrial revolution for your businesses.\n\n[PART 1: FROM TOOL TO AGENT]\nWe've all played with ChatGPT, but now, we're getting serious. We're no longer talking about simple tools, but autonomous agents. Imagine: systems that don't just respond, but act based on your proprietary data. It's the transition from curiosity to pure productivity.\n\n[PART 2: INTEROPERABILITY]\nThe secret? Interoperability. It's the fancy word for saying your tools need to talk to each other. Gmail, Slack, HubSpot, Salesforce... if AI is the brain, these connections are the nerves. We're talking about 99% fewer data entry errors. That's where your ROI is hidden.\n\n[CONCLUSION]\nIn summary, intelligent automation is no longer a technical project, it's your growth strategy. Thanks for listening, and see you soon to optimize your operations.`,
          videoStructure: [
            { scriptPart: "Hello everyone... industrial revolution.", visual: "Modern office B-roll + Text: '2024: The Industrialization'" },
            { scriptPart: "We've all played... pure productivity.", visual: "Graphic: 'Tool vs Autonomous Agent' + Gear icons" },
            { scriptPart: "The secret... where your ROI is hidden.", visual: "Animation: Connected Gmail/Slack/HubSpot logos + Text: '-99% errors'" },
            { scriptPart: "In summary... optimize your operations.", visual: "Agenzia Logo + Button: 'Strategic Audit'" }
          ],
          seoTitle: "AI Industrialization 2024: The Strategic Guide | Agenzia",
          seoDescription: "Discover why 2024 is the pivotal year for AI in business. Autonomous agents, interoperability, and ROI: move from experimentation to real impact."
        },
        { 
          category: 'Technology', 
          title: 'Automation 2.0: Why Cognitive AI is the New Standard of Digital Luxury', 
          author: 'Jane Smith', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jane_smith',
          date: 'March 08, 2024', 
          readingTime: '5 min',
          excerpt: 'The "Pure White Look" of AI isn\'t seen; it\'s felt in the fluidity of operations. Learn why internal user experience is the most underestimated growth lever.',
          content: `
            <p>Digital luxury no longer resides in technological ostentation but in the invisibility of processes. A high-performing company in 2024 is one where operational frictions have disappeared in favor of a "liquid" workflow.</p>
            <h3>Internal UX: The Hidden Growth Engine</h3>
            <p>Often overlooked, the user experience of employees with their own business tools is directly correlated to talent retention and customer service quality. Cognitive AI anticipates employee needs by providing the right information at the right time, without active searching.</p>
            <blockquote>"The most sophisticated intelligence is the one that simplifies complexity until it becomes imperceptible."</blockquote>
            <p>At Agenzia, we apply design thinking principles to automation. Every workflow is designed like a luxury product: intuitive, robust, and aesthetically pure.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
          podcastScript: `[INTRO]\nWelcome back to Agenzia Insights. Today, we're redefining luxury. We're not talking about high-end watches or fast cars, but something far more valuable for your business: Digital Luxury. Specifically, why Cognitive AI is the new gold standard for operational excellence.\n\n[PART 1: THE INVISIBILITY OF SUCCESS]\nTrue luxury is often felt, not seen. In the digital world, this means the invisibility of processes. A high-performing company in 2024 is one where operational friction has simply vanished. AI shouldn't be a flashy tool you show off; it should be the silent engine that makes your entire workflow feel 'liquid'.\n\n[PART 2: THE INTERNAL UX REVOLUTION]\nWe spend so much time on the customer experience, but we often forget the most important engine: our own teams. Internal UX is the hidden growth lever. Cognitive AI anticipates what your employees need before they even ask. It's about providing the right info at the right time, without the search. That's design thinking applied to automation.\n\n[CONCLUSION]\nAt Agenzia, we build every workflow like a luxury product: intuitive, robust, and aesthetically pure. Because at the end of the day, simplicity is the ultimate sophistication. Thanks for listening, and let's make your operations feel like luxury.`,
          videoStructure: [
            { scriptPart: "Welcome back... operational excellence.", visual: "Minimalist white background with text 'Digital Luxury' + Cinematic shot of a sleek office." },
            { scriptPart: "True luxury... feel 'liquid'.", visual: "B-roll of a person working effortlessly + Animation of a smooth, flowing liquid representing data." },
            { scriptPart: "We spend... to automation.", visual: "Split screen showing 'Old Way' vs 'AI Way' + Icons of Slack/HubSpot syncing." },
            { scriptPart: "At Agenzia... like luxury.", visual: "Agenzia logo in black/gold + CTA button 'Schedule an Audit'." }
          ],
          seoTitle: "Cognitive AI & Digital Luxury: The New Operational Standard | Agenzia",
          seoDescription: "Discover how Cognitive AI redefines digital luxury through process invisibility and internal UX. Transform your operations into a seamless competitive advantage."
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
      description: 'Agenzia. Operational efficiency through AI.',
      sections: [
        { title: 'Solutions', links: ['Sales Automation', 'Customer Support', 'HR Operations', 'Finance'] },
        { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy'] },
        { title: 'Resources', links: ['Blog', 'Podcasts', 'Videos', 'API Documentation'] },
      ],
      copyright: '© 2024 Agenzia. All rights reserved.',
    },
    aiAssistant: {
      greeting: 'Hello! How can I help you optimize your operations today?',
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
      title: 'Module',
      cards: [
        { title: 'Audit', description: 'Analyse Ihrer Prozesse.', tag: 'Basis' },
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
      title: 'وحداتنا',
      cards: [
        { title: 'تدقيق', description: 'تحليل العمليات.', tag: 'أساس' },
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
