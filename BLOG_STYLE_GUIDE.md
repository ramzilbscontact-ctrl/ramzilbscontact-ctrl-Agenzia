# Agenzia Blog — Style Guide & Article Preview

Extracted from the two existing articles in `constants.ts` (FR + EN).

---

## 1. Audience & Voice

| Dimension | Pattern |
|-----------|---------|
| **Target reader** | C-Level, Operations Director, Head of Digital |
| **Tone** | Authoritative, forward-looking, zero fluff |
| **POV** | Institutional ("Agenzia", "nous") — never first-person "I" |
| **Language register** | Formal in FR (vous), direct-executive in EN |
| **Vocabulary** | LLMs, agents, interopérabilité, ROI, C-Levels, workflows |

---

## 2. Article Anatomy

```
[Hero Image — Unsplash abstract/tech, 1200px wide]
[Category tag]  [Reading time]
[Title — assertive, colon or dash structure]
[Author avatar] [Author name] · [Date]
[Excerpt — 1-2 sentences, data point or provocative claim]

── Body ──────────────────────────────────────────
<p>Strong opening (challenges status quo, 2-3 sent.)</p>

<h3>N. [Numbered section title]</h3>
<p>Argument + concrete metric or tool name</p>

<h3>N+1. [Next section]</h3>
<p>Argument + real-world context</p>

<blockquote>"Short memorable insight — max 20 words"</blockquote>   ← optional

<h3>Conclusion</h3>
<p>Future vision + tie-back to Agenzia value prop</p>
──────────────────────────────────────────────────

[Podcast badge]  [Video badge]    ← if media assets present
```

---

## 3. Title Patterns

| Type | Formula | Example |
|------|---------|---------|
| **Concept + Claim** | `[Subject] : [Bold Outcome]` | *L'IA Générative : Architecturer l'Efficience Opérationnelle du Futur* |
| **Version label** | `[Tech] X.0 : [Why it matters]` | *Automatisation 2.0 : Pourquoi l'IA Cognitive est le Nouveau Standard du Luxe Digital* |

### Common lexical markers
- FR: `Architecturer`, `Décupler`, `Libérer`, `Efficience`, `Luxe Digital`, `Nouveau Standard`
- EN: `Architect`, `Multiply`, `Unlock`, `Efficiency`, `New Standard`

---

## 4. Excerpt Formula

> [Provocative claim about current state] + [Year horizon] + [Agenzia role/POV]

**FR example:**
> *"L'intégration des Large Language Models (LLM) ne se limite plus à la simple génération de texte. En 2025, elle devient le système nerveux central des organisations agiles."*

**EN example:**
> *"Integrating LLMs is no longer just about text generation. By 2025, it becomes the central nervous system of agile organizations."*

---

## 5. HTML Content Rules

```html
<!-- Allowed tags only -->
<p>   → paragraphs
<h3>  → section headings (no h1/h2 inside body)
<blockquote> → 1 max per article, italic-style insight

<!-- Forbidden -->
<ul>, <ol>, <li>   ← no bullet lists
<strong>, <em>     ← no inline formatting
<a href>           ← no outbound links
```

---

## 6. Metadata Schema

```typescript
{
  category:    "Stratégie" | "Technologie",       // FR
               "Strategy"  | "Technology",        // EN
  title:       string,                            // ≤ 85 chars
  author:      "Jean Dupont" | "Marie Curie" | "Pierre Martin",   // FR
               "John Doe"   | "Jane Smith"  | "Alex Morgan",      // EN
  authorAvatar: `https://i.pravatar.cc/150?u=${slug}`,
  date:        "DD Mois YYYY",                    // "12 Mars 2024"
  readingTime: "X min",                           // Stratégie: 7-10, Techno: 4-6
  excerpt:     string,                            // 25-40 words
  content:     string,                            // HTML (see §5)
  imageUrl:    `https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&q=80&w=1200`,
  audioUrl?:   string,                            // mp3 URL (TTS generated)
  videoUrl?:   string,                            // mp4 URL (Veo generated)
  isFeatured?: boolean,                           // 1 per language max
}
```

---

## 7. ✦ ARTICLE PREVIEW — Generated in extracted style

---

### 🇫🇷 FRENCH — Stratégie

**Category:** Stratégie | **Reading time:** 8 min | **Author:** Jean Dupont
**Date:** 21 Mars 2025
**Image:** `photo-1677442136019-21780ecad995` (AI visualization, blue tones)

---

**TITLE:**
> *Les Agents IA Autonomes : Comment Réarchitecturer Votre Modèle Opérationnel en 90 Jours*

**EXCERPT:**
> *Les agents IA autonomes ne sont plus une projection futuriste. En 2025, les entreprises qui n'ont pas amorcé leur transition vers des workflows auto-pilotés accusent déjà un retard structurel.*

**BODY (HTML):**

```html
<p>Le mythe de "l'IA comme outil" est mort. En 2025, l'IA n'est plus un accélérateur parmi d'autres
— elle est le système d'exploitation de l'entreprise performante. La question n'est plus de savoir
si vous devez adopter des agents autonomes, mais de comprendre pourquoi votre concurrent l'a fait
il y a six mois.</p>

<h3>1. L'autonomie opérationnelle comme avantage concurrentiel durable</h3>
<p>Un agent IA connecté à votre CRM, votre ERP et vos outils de communication peut aujourd'hui
traiter 80 % des tâches administratives à coût marginal quasi-nul. Nos déploiements clients
montrent une réduction de 67 % du temps de traitement des leads dans les 30 premiers jours.</p>

<h3>2. L'architecture à trois couches : Perception, Décision, Action</h3>
<p>La robustesse d'un système d'agents repose sur trois couches interdépendantes : la couche de
perception (connecteurs API, webhooks temps réel), la couche de décision (LLM orchestrateur avec
mémoire vectorielle) et la couche d'action (exécution automatisée dans vos outils métiers).
Chez Agenzia, cette architecture est déployée en moins de 90 jours.</p>

<blockquote>"L'excellence opérationnelle de demain se construit aujourd'hui, dans vos workflows."</blockquote>

<h3>Conclusion</h3>
<p>La transformation n'est pas un projet IT de plus. C'est un choix stratégique qui déterminera
votre positionnement dans les 24 prochains mois. Agenzia accompagne les leaders qui choisissent
l'efficience absolue — pas le compromis.</p>
```

---

### 🇬🇧 ENGLISH — Technology

**Category:** Technology | **Reading time:** 5 min | **Author:** Jane Smith
**Date:** 21 March 2025
**Image:** `photo-1485827404703-89b55fcc595e` (minimalist tech)

---

**TITLE:**
> *Vector Memory & Retrieval-Augmented Generation: The Hidden Engine Behind Enterprise AI Agents*

**EXCERPT:**
> *Most enterprise AI deployments fail not because of the model, but because of memory architecture. RAG-powered agents with vector stores reduce hallucination rates by 94% in production environments.*

**BODY (HTML):**

```html
<p>The bottleneck in enterprise AI adoption is no longer the model itself — it is memory.
Without persistent, contextual memory, even the most sophisticated LLM operates like an
expert consultant with amnesia. Retrieval-Augmented Generation (RAG) closes this gap entirely.</p>

<h3>1. Why vanilla LLMs fail at scale</h3>
<p>Standard LLM inference has no memory beyond its context window. For business applications
processing thousands of daily interactions, this is unacceptable. Vector databases (Pinecone,
Weaviate, pgvector) allow agents to retrieve semantically relevant data from millions of
proprietary documents in under 200ms.</p>

<h3>2. The RAG architecture Agenzia deploys</h3>
<p>Our production RAG stacks combine chunked document ingestion, embedding via text-embedding-3-large,
cosine similarity search, and dynamic context injection — all before the LLM ever sees a query.
The result: answers grounded in your company's actual data, not generic training patterns.</p>

<blockquote>"A model without memory is a tool. A model with your data is a strategic asset."</blockquote>

<h3>Conclusion</h3>
<p>The companies winning with AI in 2025 are not those with the best model — they are those with
the best data architecture. Agenzia designs RAG systems that turn your institutional knowledge
into a computable, always-available competitive advantage.</p>
```

---

## 8. Automation Usage

```bash
# Generate + inject + build one post
GEMINI_API_KEY=xxx ts-node services/blogPostingAutomation.ts "Les Agents IA en Finance" fr

# Then deploy via MCP (ask Claude):
# "ovh_ftp_deploy with localDistPath=./dist remotePath=/www"
# or trigger Railway deployment via the railway MCP server
```

---

*Style guide auto-extracted by Claude Code — branch `claude/setup-blog-automation-mcp-6kT1G`*
