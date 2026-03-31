# Prompts Stitch — Agenzia Cyber PME
## Stack : Hetzner (Docker) + Next.js + Tailwind + Payload CMS + n8n + Cal.com + Umami + Vapi

> Injecter chaque prompt séquentiellement dans Stitch.
> Chaque prompt = 1 composant/section indépendant et évolutif.

---

## PROMPT 1 : Setup projet + Layout global

```
Crée un projet Next.js 14 (App Router) pour "Agenzia" — startup française
de cybersécurité, cloud et data analysis pour PME.

STACK OBLIGATOIRE :
- Next.js 14 App Router (app/ directory)
- Tailwind CSS avec config custom
- shadcn/ui pour les composants de base
- Framer Motion pour les animations
- Lucide React pour les icônes
- Font : Manrope via next/font/google (self-hosted, zero layout shift)
- React Hook Form + Zod pour les formulaires

TAILWIND CONFIG — Design tokens Agenzia "White Pure Look" :
{
  colors: {
    'brand-primary': '#0D0D0D',
    'brand-secondary': '#4A4A4A',
    'brand-accent': '#3B82F6',
    'score-red': '#EF4444',
    'score-orange': '#F59E0B',
    'score-green': '#10B981',
  },
  boxShadow: {
    'tactile': '0 4px 10px -2px rgba(0, 0, 0, 0.06)',
    'tactile-md': '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
    'tactile-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  },
  fontFamily: { sans: ['Manrope', 'sans-serif'] },
}

LAYOUT (app/layout.tsx) :
- <html lang="fr">
- Script Umami analytics (defer, data-website-id placeholder)
- Header transparent qui devient blanc+ombre au scroll (>50px)
- Header : logo "Agenzia" à gauche, nav [Solutions, Scanner, Pricing, Blog],
  bouton CTA "Diagnostic gratuit" à droite
- Footer en bas
- Smooth scroll global

HÉBERGEMENT : Ce projet tournera dans Docker sur Hetzner.
Payload CMS (headless) sera sur le même serveur Docker pour le contenu.
n8n sera sur le même serveur Docker pour les webhooks.

Ne crée PAS de base de données. Le CMS Payload gère tout via son API REST.
Les appels API vers n8n se font via fetch() sur des webhooks.
```

---

## PROMPT 2 : Hero Section + Scanner intégré

```
Crée le composant Hero.tsx + SecurityScanner.tsx pour Agenzia.

HERO LAYOUT :
- Fond blanc, plein écran (min-h-screen), centré verticalement
- Headline : "Votre PME est-elle protégée ?"
  (text-5xl md:text-7xl font-black tracking-tighter)
- Sous-titre : "Conformité NIS2 • Cybersécurité • Cloud souverain — à partir de 99€/mois"
  (text-lg text-brand-secondary, max-w-2xl mx-auto)

SCANNER (dans le hero, pas une section séparée) :
- Barre de recherche large : placeholder "Entrez votre domaine (ex: entreprise.fr)"
- Bouton : "Scanner gratuitement →" (bg-brand-primary text-white)
- Texte sous la barre : "Résultat en 30 secondes. 100% gratuit. Aucune inscription."
  (text-sm text-brand-secondary)
- 3 micro-badges en ligne dessous :
  🛡️ "Conforme RGPD" | 🇫🇷 "Souverain SecNumCloud" | ⚖️ "Prêt NIS2"

COMPORTEMENT DU SCANNER :
1. User tape un domaine → clic "Scanner"
2. État loading :
   - Texte "Analyse en cours..."
   - 4 icônes (Lucide) s'allument séquentiellement (0.5s chacune) :
     Shield → Lock → Mail → Globe (HTTPS, Headers, Email, DNS)
   - Progress bar animée
3. Le scanner appelle : POST /api/scan avec body { domain }
   → Cette route Next.js forward vers le webhook n8n
   → n8n appelle Mozilla Observatory + SecurityHeaders + SSL Labs
   → Retourne { score: number, https: bool, headers: bool, spf: bool,
     ports: bool, vulnerabilities: string[] }

RÉSULTAT (composant ScanResult.tsx) :
- Score circulaire SVG animé (stroke-dasharray, 2s animation)
  Rouge (0-40) / Orange (41-70) / Vert (71-100)
- Grille 2x2 de checks : HTTPS ✅/❌, Headers ✅/❌, SPF/DKIM ✅/❌, Ports ✅/❌
- Message dynamique selon score :
  Rouge : "⚠️ Votre PME est exposée. [X] vulnérabilités détectées."
  Orange : "Des améliorations sont nécessaires."
  Vert : "Bon score ! Vérifiez votre conformité NIS2."

LEAD CAPTURE (avant résultat détaillé) :
- Modal/overlay : "Entrez votre email pour recevoir le rapport complet"
- Input email + bouton "Recevoir mon rapport"
- Soumission → POST /api/newsletter (n8n → Payload leads collection + Brevo)
- Après soumission → affiche le résultat complet

CTA POST-SCAN (dynamique selon score) :
- Rouge : bouton pulsant (scale 1→1.05, infinite 2s)
  "Score critique. Réservez un diagnostic gratuit de 15 min →"
  → Lien vers Cal.com embed ou page /diagnostic
- Orange/Vert : bouton standard vers Cal.com
```

---

## PROMPT 3 : Section Problème

```
Crée Problem.tsx pour Agenzia.

TITRE : "Les PME françaises sont en danger numérique."
SOUS-TITRE : "75 000 postes cyber non pourvus. 76% des PME sans protection.
NIS2 arrive en Q4 2026."

3 CARTES (grid md:grid-cols-3 gap-8) :

Carte 1 — "Migration Cloud échouée"
- Icône Lucide : CloudOff (rouge doux)
- Stat animée : "40%" (compteur 0→40 en 1.5s, intersection observer)
- "d'échecs, coûts sous-estimés de +50%."

Carte 2 — "Cybersécurité inexistante"
- Icône Lucide : ShieldOff (orange)
- Stat animée : "64%"
- "de raccourcis risqués. Ransomwares +30%."

Carte 3 — "Data Analysis manuelle"
- Icône Lucide : Clock (jaune)
- Stat animée : "2-4 sem."
- "par rapport. Zéro solution IA no-code PME."

DESIGN : bg-white rounded-2xl shadow-tactile-md p-8.
Hover : translateY(-4px) + shadow-tactile-lg. Transition 300ms.
Stats en text-4xl font-black, descriptions en text-brand-secondary.
Animation : Framer Motion + useInView pour le compteur.
```

---

## PROMPT 4 : Section Pricing

```
Crée Pricing.tsx pour Agenzia. Données servies depuis Payload CMS
(mais en attendant, les valeurs sont hardcodées dans le composant).

TITRE : "Des prix pensés pour les PME."
SOUS-TITRE : "Pas de consulting à 500€/jour. Pas de setup de 6 mois."

3 CARTES (grid md:grid-cols-3) :

BASIC (99€/mois) — bg-white shadow-tactile-md
- Features avec CheckCircle2 (Lucide, text-score-green) :
  Agent IA local, Scan vulnérabilités, Monitoring basique,
  Alerting email/Slack, Dashboard sécurité, Support communautaire
- CTA : "Démarrer gratuitement" (btn outline border-gray-200)

PRO (499€/mois) — HIGHLIGHTED : ring-2 ring-brand-primary scale-105 shadow-tactile-lg
- Badge absolue : "Populaire" (bg-brand-primary text-white text-xs
  font-bold px-4 py-1 rounded-full -top-4 left-1/2 -translate-x-1/2)
- Features : Tout Basic +, Migration cloud OVH SecNumCloud,
  Data Analysis IA, Freelance junior dédié, Conformité RGPD/HDS auto,
  Support prioritaire 24h
- CTA : "Essai gratuit 14 jours" (btn bg-brand-primary text-white)

ENTERPRISE (999€/mois) — bg-white shadow-tactile-md
- Features : Tout Pro +, SOC complet 24/7, Assurance cyber auto-claim,
  Edge AI on-premise, NIS2/SecNumCloud, Account manager dédié
- CTA : "Contacter l'équipe" (btn outline)

Tous les CTAs mènent vers Cal.com embed.
Toggle annuel/mensuel en haut (annuel = badge "-20%").
Sous les cartes : "100% souverain SecNumCloud/RGPD 🇫🇷"
```

---

## PROMPT 5 : Section Témoignages + Trust

```
Crée Testimonials.tsx + TrustBadges.tsx pour Agenzia.
Les témoignages seront chargés depuis Payload CMS (collection testimonials).
Pour l'instant, utiliser des données hardcodées.

BANDEAU CHIFFRES (fond gray-50, py-16) :
4 colonnes avec compteurs animés (Framer Motion) :
+47pts "Score moyen amélioré" | 100% "Conforme NIS2" |
99.9% "Uptime infra" | <2h "Temps de réponse"

TÉMOIGNAGES (3 cartes, auto-scroll sur mobile) :
- Avatar placeholder (rounded-full), nom, titre, entreprise (taille)
- Citation entre guillemets, icône Quote (Lucide) en accent
- Cartes bg-white rounded-2xl shadow-tactile-md p-8

BADGES CONFIANCE (flex gap-4 justify-center) :
5 badges (bg-gray-50 rounded-full px-4 py-2, texte small) :
🛡️ RGPD | 🇫🇷 SecNumCloud | ⚖️ NIS2 Ready | 🔒 ISO 27001 | 💼 Partenaire BPI
```

---

## PROMPT 6 : Section Blog (Payload CMS)

```
Crée BlogFeed.tsx + app/blog/page.tsx + app/blog/[slug]/page.tsx

SECTION BLOG SUR LA LANDING (BlogFeed.tsx) :
- Titre : "Intelligence & Veille Cyber"
- Layout bento : 1 article featured (grande carte) + 3 petits
- Chaque carte : image, badge catégorie (NIS2/Cyber/Cloud/Data),
  titre, extrait 2 lignes, auteur+date+temps lecture
- CTA : "Voir tous les articles →" → /blog

DONNÉES : Fetch depuis Payload CMS API REST :
GET ${PAYLOAD_API_URL}/api/blog-posts?limit=4&sort=-publishedAt

Si Payload pas encore connecté, utiliser des données statiques placeholder.

PAGE /blog : Liste complète, filtres par catégorie, pagination.
PAGE /blog/[slug] : Article complet, SSG via generateStaticParams().

SEO par article : generateMetadata() dynamique depuis Payload.

NEWSLETTER en bas du blog :
"Recevez notre veille cyber hebdomadaire."
[email input] [S'abonner]
→ POST /api/newsletter → n8n → Brevo + Payload (newsletter-subs)
```

---

## PROMPT 7 : Cal.com Embed + CTA Section finale

```
Crée CalEmbed.tsx + une section CTA finale avant le footer.

SECTION CTA FINALE (bg-brand-primary text-white py-24) :
- Titre : "Protégez votre PME dès maintenant."
- Sous-titre : "Diagnostic NIS2 gratuit en 5 minutes. Aucun engagement."
- 2 boutons :
  [Scanner mon domaine ↑] → smooth scroll vers le hero scanner
  [Réserver un appel gratuit →] → ouvre Cal.com embed modal

CAL.COM EMBED :
- Utiliser @calcom/embed-react ou iframe simple
- URL : instance Cal.com self-hosted sur Docker (port 3003)
  ou cal.com cloud si plus simple au départ
- Événement de 15 min "Diagnostic Cyber Gratuit"
- Embed inline OU modal (au choix, tester les deux)

FOOTER :
- 4 colonnes : Solutions | Entreprise | Ressources | Légal
- Logo Agenzia + description
- Icônes : LinkedIn, YouTube
- "© 2026 Agenzia. 100% Souverain SecNumCloud/RGPD."
- Badges "Partenaire BPI" + "Membre CCI Paris IDF"
- Design : bg-brand-primary text-white/gray-400
```

---

## PROMPT 8 : API Routes (n8n + Payload proxy)

```
Crée les routes API Next.js qui servent de proxy vers n8n et Payload.

app/api/scan/route.ts :
- POST : reçoit { domain: string }
- Valide avec Zod (domaine valide, pas d'injection)
- Forward vers n8n webhook : POST ${N8N_WEBHOOK_URL}/webhook/scan
- Retourne le JSON de n8n au frontend
- Rate limiting basique : max 10 scans/IP/heure (via headers)

app/api/newsletter/route.ts :
- POST : reçoit { email: string }
- Valide email avec Zod
- Forward vers n8n webhook : POST ${N8N_WEBHOOK_URL}/webhook/newsletter
- n8n gère : Payload (collection newsletter-subs) + Brevo (ajout liste)
- Retourne { success: true }

app/api/webhook/vapi/route.ts (PHASE 3, créer le squelette vide) :
- POST : reçoit webhook Vapi (fin d'appel)
- Vérifie signature Vapi
- Log dans Payload (collection call-logs)
- Commentaire : "Activé en Phase 3 quand Vapi est intégré"

VARIABLES D'ENVIRONNEMENT (.env.local) :
PAYLOAD_API_URL=http://localhost:3001
N8N_WEBHOOK_URL=http://localhost:5678
VAPI_API_KEY=placeholder
UMAMI_WEBSITE_ID=placeholder
CAL_EMBED_URL=http://localhost:3003
```

---

## PROMPT 9 : Animations + Performance

```
Ajoute les animations et optimisations au site Agenzia.

ANIMATIONS (Framer Motion) :
1. Scroll reveal : motion.div avec initial={{ opacity: 0, y: 40 }}
   whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
   viewport={{ once: true }} sur chaque section

2. Compteurs animés : hook useCountUp custom qui anime de 0 à N
   quand l'élément entre dans le viewport

3. Scanner loading : 4 icônes motion.div avec
   variants={{ hidden: { opacity: 0.3 }, visible: { opacity: 1 } }}
   et staggerChildren: 0.5

4. Score circulaire : SVG circle avec motion.circle et
   strokeDashoffset animé de circumference à (1 - score/100) * circumference

5. CTA pulse (score rouge) : motion.button avec
   animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}

6. Header scroll : useState + useEffect sur scroll,
   transition backdrop-blur-sm

PERFORMANCE :
- next/image pour toutes les images (WebP auto, lazy loading)
- next/font pour Manrope (zero CLS)
- Dynamic imports pour composants lourds (Scanner, CalEmbed)
- Metadata API pour SEO (generateMetadata dans chaque page)
- next-sitemap pour sitemap.xml + robots.txt
- Umami script avec defer (ne bloque pas le rendu)

ACCESSIBILITÉ :
- Tous les boutons : focus-visible:ring-2
- aria-label sur le scanner, les formulaires
- alt text sur toutes les images
- prefers-reduced-motion : désactiver les animations
- Contraste : noir sur blanc = 21:1 ✅
```

---

## PROMPT 10 : Docker + Déploiement Hetzner

```
Crée le Dockerfile et docker-compose.yml pour déployer le site
complet sur un VPS Hetzner (CX22, 4GB RAM, ~5€/mois).

Dockerfile (Next.js) :
- Multi-stage build :
  Stage 1 (builder) : node:20-alpine, npm ci, npm run build
  Stage 2 (runner) : node:20-alpine, copier .next/standalone + public + static
- EXPOSE 3000
- CMD ["node", "server.js"]
- next.config.js : output: 'standalone'

docker-compose.yml avec 6 services :
1. nextjs (port 3000) — le site
2. payload (port 3001) — CMS headless
3. mongo (port 27017) — DB pour Payload
4. n8n (port 5678) — orchestration/webhooks
5. umami (port 3002) — analytics
6. umami-db (postgres) — DB pour Umami

NOTE : Cal.com en cloud gratuit au départ (pas self-hosted,
trop lourd pour 4GB RAM). Utiliser cal.com/agenzia ou embed.

Nginx reverse proxy (optionnel, à ajouter plus tard) :
- agenzia.fr → nextjs:3000
- cms.agenzia.fr → payload:3001
- n8n.agenzia.fr → n8n:5678
- analytics.agenzia.fr → umami:3002

Certificats SSL : Let's Encrypt via Traefik ou Caddy (reverse proxy
Docker-native avec auto-HTTPS).

COMMANDES DE DÉPLOIEMENT :
ssh root@hetzner-ip
git clone repo
cp .env.example .env  # remplir les secrets
docker compose up -d
```

---

## PROTOCOLE ÉVOLUTIF — Comment ajouter une feature

```
QUAND TU VEUX AJOUTER QUELQUE CHOSE AU SITE :

1. Est-ce du contenu ? → Ajouter dans Payload CMS (pas de code)
   Ex: nouvel article, nouveau témoignage, nouveau partenaire

2. Est-ce une automatisation ? → Créer un workflow n8n (pas de code)
   Ex: nouvel email sequence, nouvelle veille RSS, nouveau posting auto

3. Est-ce un nouveau composant UI ? → Créer dans components/
   Ex: nouvelle section landing, nouveau widget

4. Est-ce une nouvelle page ? → Créer dans app/
   Ex: /diagnostic, /webinaire, /cas-client/[slug]

5. Est-ce une intégration externe ? → Créer route API + webhook n8n
   Ex: Vapi, Stripe, nouveau partenaire API

RÈGLE : Jamais modifier un composant existant pour ajouter une feature.
Créer un nouveau composant et l'importer. Ça garde tout stable.
```
