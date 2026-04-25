import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingDown, Bot, Check, X, ArrowRight, Github, Star } from 'lucide-react';
import { trackEvent } from '../lib/posthog';

const BRIDGE_URL =
  (typeof window !== 'undefined' && (window as any).__BRIDGE_URL__) ||
  'https://api.getagenzia.fr';

const WAITLIST_ENDPOINT = `${BRIDGE_URL}/webhook/saas-waitlist`;

// Countdown for NIS2 deadline
const NIS2_DEADLINE = new Date('2026-10-17T00:00:00Z').getTime();

const SaasLanding: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const diff = NIS2_DEADLINE - Date.now();
      setDaysLeft(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-[11px] font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Beta privée — {daysLeft} jours avant deadline NIS2
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[1.05] mb-6">
            1 SaaS.
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-600 to-neutral-400">
              3 menaces réglées.
            </span>
            <br />
            99&nbsp;€ / mois.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agenzia est le premier SaaS français qui combine <b>conformité NIS2</b>, <b>maîtrise des coûts cloud</b> et <b>sécurité des IA génératives</b> en un seul produit, un seul dashboard, un seul prix.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#waitlist"
              onClick={() => trackEvent('saas_cta_waitlist_hero')}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Rejoindre la beta privée
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ramzilbscontact-ctrl/scanner"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('saas_cta_github_hero')}
              className="inline-flex items-center gap-3 border-2 border-black px-8 py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Scanner open-source
              <Star className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-neutral-500 font-mono">
            50 places beta · Apache 2.0 · Made in France
          </p>
        </div>
      </section>

      {/* ═══════════ AGENZIA SCORE ═══════════ */}
      <section className="bg-neutral-50 border-y-2 border-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Le concept
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
                Un seul score
                <br />
                <span className="italic">pour les dirigeants.</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Fini les 5 dashboards différents. L'Agenzia Score combine vos 3 axes critiques en <b>un chiffre que votre board comprend</b>.
              </p>
              <ul className="space-y-3">
                {[
                  'Monté de 40 → 78 en 3 mois = conformité NIS2 atteinte',
                  'Benchmark vs moyenne de votre secteur',
                  'Décomposable en 3 sous-scores (compliance, finops, IA sec)',
                  'Mis à jour en temps réel via les agents',
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Score visual mockup */}
            <div className="bg-black text-white p-10 shadow-[12px_12px_0px_0px_rgba(26,143,160,1)]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Agenzia Score — demo
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-7xl font-serif font-bold">82</span>
                <span className="text-2xl text-neutral-500">/100</span>
                <span className="ml-auto text-green-400 text-sm font-mono">↑ +5 ce mois</span>
              </div>
              <div className="h-2 bg-neutral-800 mb-8">
                <div className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 w-[82%]" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Compliance', val: 88, sub: 'NIS2 ✓', color: 'bg-green-400' },
                  { label: 'FinOps', val: 71, sub: '−2 300€/mo', color: 'bg-yellow-400' },
                  { label: 'AI Security', val: 87, sub: '12 blocked', color: 'bg-green-400' },
                ].map((m, i) => (
                  <div key={i} className="border-l-2 border-neutral-800 pl-3">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
                      {m.label}
                    </div>
                    <div className="text-2xl font-bold">{m.val}</div>
                    <div className="text-[10px] text-neutral-400">{m.sub}</div>
                  </div>
                ))}
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                Next actions (priorité ROI)
              </div>
              <ul className="space-y-2 text-xs">
                <li className="text-neutral-300">
                  1. MFA sur 5 comptes admin → <span className="text-green-400">+8 pts NIS2</span>
                </li>
                <li className="text-neutral-300">
                  2. Éteindre 3 VMs idle AWS → <span className="text-green-400">−850 €/mo</span>
                </li>
                <li className="text-neutral-300">
                  3. Patcher CVE-2026-XXXX → <span className="text-green-400">+3 pts AI Sec</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3 MODULES ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Les 3 modules
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Ce que vos équipes <span className="italic">arrêtent de payer ailleurs.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: 'Compliance NIS2',
              tagline: 'Remplace Vanta / Drata',
              price: '20 000 €/an → inclus',
              features: [
                'Scan continu 10 mesures Art. 21',
                'Mapping NIS2 + ISO 27001 + DORA',
                'Registre ANSSI pré-rempli',
                'Alertes temps réel gap compliance',
                'Rapport mensuel PDF prêt board',
              ],
            },
            {
              icon: <TrendingDown className="w-8 h-8" />,
              title: 'FinOps Cloud',
              tagline: 'Remplace Vantage / Cloudability',
              price: '3 000 €/an → inclus',
              features: [
                'OVH, Scaleway, AWS, Azure, GCP',
                'Détection anomalies ML',
                'Rightsizing automatique',
                'Reserved Instances tracking',
                'Rapport CFO mensuel',
              ],
            },
            {
              icon: <Bot className="w-8 h-8" />,
              title: 'AI Security Firewall',
              tagline: 'Remplace Lakera / Protect AI',
              price: '50 000 €/an → inclus',
              features: [
                'Proxy OpenAI / Claude / Mistral',
                'Détection prompt injection',
                'Redact PII auto avant envoi',
                'Cost cap par user/app',
                'Logs audit NIS2-compliant',
              ],
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="bg-black text-white p-3 inline-flex mb-6">{m.icon}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                {m.tagline}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">{m.title}</h3>
              <div className="text-sm text-black font-mono mb-6 bg-yellow-100 inline-block px-2 py-1">
                {m.price}
              </div>
              <ul className="space-y-2">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ COMPARATIF ═══════════ */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Face aux concurrents
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
              Pourquoi payer <span className="italic text-red-400">73 000 € / an</span>
              <br />
              quand vous pouvez payer 1 200 € ?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-neutral-800">
                  <th className="text-left py-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Fonction
                  </th>
                  <th className="text-center py-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Vanta
                  </th>
                  <th className="text-center py-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Vantage
                  </th>
                  <th className="text-center py-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Lakera
                  </th>
                  <th className="text-center py-4 font-mono text-[10px] uppercase tracking-widest text-white font-bold">
                    Agenzia
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compliance NIS2', false, false, false, true],
                  ['FinOps Cloud', false, true, false, true],
                  ['AI Security LLM', false, false, true, true],
                  ['Dashboard unifié', false, false, false, true],
                  ['FR-native', false, false, false, true],
                  ['Remédiation auto', false, false, false, true],
                  ['Prix PME (< 1k€/mo)', false, false, false, true],
                ].map(([feature, v, c, l, a], i) => (
                  <tr key={i} className="border-b border-neutral-900">
                    <td className="py-4 text-neutral-300">{feature as string}</td>
                    <td className="py-4 text-center">
                      {v ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <X className="w-5 h-5 mx-auto text-red-400" />}
                    </td>
                    <td className="py-4 text-center">
                      {c ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <X className="w-5 h-5 mx-auto text-red-400" />}
                    </td>
                    <td className="py-4 text-center">
                      {l ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <X className="w-5 h-5 mx-auto text-red-400" />}
                    </td>
                    <td className="py-4 text-center bg-neutral-900">
                      {a ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <X className="w-5 h-5 mx-auto text-red-400" />}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="pt-6 font-mono text-[10px] uppercase tracking-widest">Prix annuel</td>
                  <td className="pt-6 text-center text-red-400 font-bold">20 000 €</td>
                  <td className="pt-6 text-center text-red-400 font-bold">3 000 €</td>
                  <td className="pt-6 text-center text-red-400 font-bold">50 000 €</td>
                  <td className="pt-6 text-center bg-neutral-900 text-green-400 font-bold">1 188 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-neutral-500 text-sm mt-8">
            Calculs basés sur plans "mid-market" 80 postes. Agenzia Starter à 99&nbsp;€/mois.
          </p>
        </div>
      </section>

      {/* ═══════════ WAITLIST ═══════════ */}
      <section id="waitlist" className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Beta privée
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            50 places. <span className="italic">Pas une de plus.</span>
          </h2>
          <p className="text-lg text-neutral-600">
            On lance le SaaS avec 50 PME françaises. Gratuit 6 mois en échange de feedback + témoignage.
          </p>
        </div>

        <WaitlistForm />
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-neutral-50 border-t-2 border-black py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Agenzia — Made in France
          </div>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            Scanner open-source (Apache 2.0) sur{' '}
            <a
              href="https://github.com/ramzilbscontact-ctrl/scanner"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ramzilbscontact-ctrl/scanner
            </a>
            . Infrastructure FR (OVH + Scaleway). Conformité RGPD by design.
          </p>
        </div>
      </footer>
    </div>
  );
};

// ─── Waitlist form ─────────────────────────────────────────────
const WaitlistForm: React.FC = () => {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      setPosition(body.position ?? null);
      setState('success');
      trackEvent('saas_waitlist_joined', { priority: data.priority });
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="border-2 border-black p-12 text-center bg-green-50">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-2">Vous êtes dans la liste 🎉</h3>
        <p className="text-neutral-600 mb-4">
          {position
            ? `Vous êtes le ${position}ᵉ inscrit${position === 1 ? '' : 's'} sur 50.`
            : "On vous recontacte dans les 48h."}
        </p>
        <p className="text-sm text-neutral-500">
          En attendant, téléchargez le scanner open-source pour un premier diagnostic :{' '}
          <a
            href="https://github.com/ramzilbscontact-ctrl/scanner"
            className="underline font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ramzilbscontact-ctrl/scanner
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-black p-8">
      <div>
        <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
          Email professionnel *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="vous@entreprise.fr"
          className="w-full p-3 border-2 border-black focus:outline-none font-mono"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
            Entreprise *
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Votre société"
            className="w-full p-3 border-2 border-black focus:outline-none font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
            Nombre de postes *
          </label>
          <select
            name="size"
            required
            className="w-full p-3 border-2 border-black focus:outline-none font-mono bg-white"
          >
            <option value="">—</option>
            <option value="0-50">0 – 50</option>
            <option value="50-150">50 – 150</option>
            <option value="150-300">150 – 300</option>
            <option value="300+">300+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
          Votre priorité n°1 *
        </label>
        <select
          name="priority"
          required
          className="w-full p-3 border-2 border-black focus:outline-none font-mono bg-white"
        >
          <option value="">Choisir…</option>
          <option value="nis2">Passer NIS2 avant octobre 2026</option>
          <option value="finops">Maîtriser mes coûts cloud</option>
          <option value="ai-security">Sécuriser nos usages ChatGPT / IA</option>
          <option value="all">Les 3 à la fois</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-black text-white py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50"
      >
        {state === 'loading' ? 'Envoi…' : 'Rejoindre la beta privée'}
      </button>

      {error && (
        <div className="text-red-600 text-sm font-mono text-center">Erreur : {error}</div>
      )}

      <p className="text-xs text-neutral-500 text-center">
        Pas de spam. Pas de newsletter. Juste un email quand votre accès est prêt.
      </p>
    </form>
  );
};

export default SaasLanding;
