/**
 * Blog Posting Automation Service
 *
 * Orchestrates the full "Write → Build → Deploy" pipeline:
 *   1. Generate a new blog post (via Gemini) matching the Agenzia style guide
 *   2. Inject the post into constants.ts
 *   3. Rebuild the React app (npm run build)
 *   4. Deploy to OVH via FTP  (via ovh MCP)  AND/OR
 *      trigger a Railway redeploy  (via railway MCP)
 *
 * Usage (Node / ts-node):
 *   GEMINI_API_KEY=xxx ts-node services/blogPostingAutomation.ts
 *
 * Or import and call from another module:
 *   import { BlogAutomation } from './services/blogPostingAutomation';
 *   await BlogAutomation.run({ topic: 'AI Agents in Finance', lang: 'fr' });
 */

import { GoogleGenAI } from "@google/genai";
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import type { Post } from "../types";

// ── Style guide injected into every generation prompt ──────────────────────
export const AGENZIA_STYLE_GUIDE = `
## Agenzia Blog Style Guide

### Voice & Tone
- Authoritative yet accessible — C-Level / decision-maker audience
- Confident, forward-looking, no filler words
- French posts use formal "vous", minimal colloquialism
- English posts use direct, executive language

### Structure (HTML)
Every article body must follow this exact HTML skeleton:
<p>[Strong opening statement that challenges conventional wisdom — 2–3 sentences]</p>
<h3>[Numbered section title — e.g. "1. De l'outil à l'agent autonome"]</h3>
<p>[Supporting argument with concrete metrics or examples]</p>
<h3>[Second numbered section]</h3>
<p>[Supporting argument]</p>
<blockquote>"[A concise, memorable insight — max 20 words]"</blockquote>
<h3>Conclusion</h3>
<p>[Call to action / future vision — tie back to Agenzia value proposition]</p>

### Categories
- "Stratégie" / "Strategy" — business impact, ROI, competitive advantage
- "Technologie" / "Technology" — technical deep-dives, architecture, tools

### Reading Time
- "Stratégie" posts: 7–10 min
- "Technologie" posts: 4–6 min

### Excerpt Rules
- 1–2 sentences max, 25–40 words
- Must contain a data point or provocative claim
- No "Dans cet article" / "In this article" openers

### Author Pool
- FR: Jean Dupont, Marie Curie, Pierre Martin
- EN: John Doe, Jane Smith, Alex Morgan

### Image
- Use Unsplash abstract/tech images: https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&q=80&w=1200
- Prefer: AI visualization, data streams, minimalist tech setups

### Forbidden
- Buzzword stacking without substance
- First-person "I" in article body
- Markdown in HTML content (use only HTML tags)
`;

// ── Interfaces ──────────────────────────────────────────────────────────────
export interface AutomationOptions {
  /** Blog topic / title seed */
  topic: string;
  /** Target language */
  lang?: "fr" | "en";
  /** If true, rebuild and deploy after injecting the post */
  deploy?: boolean;
  /** Unsplash photo ID override */
  imageId?: string;
}

export interface GeneratedPost extends Post {
  lang: "fr" | "en";
}

// ── Main service ─────────────────────────────────────────────────────────────
export const BlogAutomation = {
  /**
   * Generate a blog post that matches the Agenzia style guide.
   */
  async generatePost(options: AutomationOptions): Promise<GeneratedPost> {
    const lang = options.lang ?? "fr";
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? "" });

    const prompt = `
You are a senior content strategist for Agenzia, a premium AI automation agency.
Write a complete blog post in **${lang === "fr" ? "French" : "English"}** about: "${options.topic}".

Strictly follow this style guide:
${AGENZIA_STYLE_GUIDE}

Return ONLY a valid JSON object with these exact keys (no markdown fences, no extra text):
{
  "category": "Stratégie" or "Technologie" (FR) | "Strategy" or "Technology" (EN),
  "title": "...",
  "author": "...",
  "date": "${new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}",
  "readingTime": "X min",
  "excerpt": "...",
  "content": "<p>...</p><h3>...</h3>...",
  "imageUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  "isFeatured": false
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-05-20",
      contents: [{ parts: [{ text: prompt }] }],
      config: { temperature: 0.7 },
    });

    const raw = response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    // Strip any accidental markdown fences
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned) as Omit<Post, "authorAvatar">;

    // Derive avatar from author name
    const avatarSlug = parsed.author.toLowerCase().replace(/\s+/g, "_");

    return {
      ...parsed,
      authorAvatar: `https://i.pravatar.cc/150?u=${avatarSlug}`,
      lang,
    };
  },

  /**
   * Inject a generated post into constants.ts for the given language.
   * Appends to the posts array in the `lang` section.
   */
  injectPost(post: GeneratedPost): void {
    const constantsPath = path.resolve(process.cwd(), "constants.ts");
    let src = readFileSync(constantsPath, "utf8");

    // Serialise the post object (without the internal `lang` field)
    const { lang, ...postData } = post;
    const serialised = JSON.stringify(postData, null, 10)
      // Convert JSON to TS-compatible template literal content
      .replace(/"([^"]+)":/g, "$1:")
      // Re-quote string values that need it
      .replace(/: "([^"]+)"/g, ': `$1`');

    // Find the insertion point: last post entry in the target language section
    // We locate `  ${lang}: {` then find `posts: [` and inject before the closing `]`
    const langMarker = `  ${lang}: {`;
    const langIdx = src.indexOf(langMarker);
    if (langIdx === -1) throw new Error(`Language section '${lang}' not found in constants.ts`);

    const postsStart = src.indexOf("posts: [", langIdx);
    if (postsStart === -1) throw new Error("posts array not found");

    // Find the matching closing bracket for the posts array
    let depth = 0;
    let postsEnd = -1;
    for (let i = postsStart; i < src.length; i++) {
      if (src[i] === "[") depth++;
      if (src[i] === "]") {
        depth--;
        if (depth === 0) {
          postsEnd = i;
          break;
        }
      }
    }
    if (postsEnd === -1) throw new Error("Could not find end of posts array");

    const insertion = `,\n        ${serialised}`;
    src = src.slice(0, postsEnd) + insertion + src.slice(postsEnd);
    writeFileSync(constantsPath, src, "utf8");
    console.log(`✅ Post injected into constants.ts [${lang}]: "${post.title}"`);
  },

  /**
   * Build the React app using Vite.
   */
  buildApp(): void {
    console.log("🔨 Building app…");
    execSync("npm run build", { stdio: "inherit", cwd: process.cwd() });
    console.log("✅ Build complete → dist/");
  },

  /**
   * Full pipeline: generate → inject → build → (optionally) deploy instructions.
   */
  async run(options: AutomationOptions): Promise<GeneratedPost> {
    console.log(`\n🚀 Blog automation started: "${options.topic}"\n`);

    // 1. Generate
    const post = await this.generatePost(options);
    console.log(`📝 Generated: "${post.title}" [${post.category}]`);

    // 2. Inject into constants.ts
    this.injectPost(post);

    // 3. Build
    if (options.deploy !== false) {
      this.buildApp();
      console.log(`
📦 Next steps — deploy via MCP:

  OVH FTP deploy (via claude ovh MCP tool):
    ovh_ftp_deploy({
      localDistPath: "${process.cwd()}/dist",
      remotePath: "/www"
    })

  Railway redeploy (via railway MCP tool):
    Run: railway up --detach
    Or use the railway MCP to trigger a new deployment.
`);
    }

    return post;
  },
};

// ── CLI entry point ──────────────────────────────────────────────────────────
if (process.argv[1] && process.argv[1].endsWith("blogPostingAutomation.ts")) {
  const topic = process.argv[2] ?? "L'avenir des agents IA en entreprise";
  const lang = (process.argv[3] as "fr" | "en") ?? "fr";
  BlogAutomation.run({ topic, lang, deploy: true }).catch(console.error);
}
