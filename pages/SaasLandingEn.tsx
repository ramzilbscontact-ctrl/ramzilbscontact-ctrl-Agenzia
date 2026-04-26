import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingDown, Bot, Check, X, ArrowRight, Github, Star, Zap } from 'lucide-react';
import { trackEvent } from '../lib/posthog';

const BRIDGE_URL =
  (typeof window !== 'undefined' && (window as any).__BRIDGE_URL__) ||
  'https://api.getagenzia.fr';

const WAITLIST_ENDPOINT = `${BRIDGE_URL}/webhook/saas-waitlist`;

const NIS2_DEADLINE = new Date('2026-10-17T00:00:00Z').getTime();

const SaasLandingEn: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

  useEffect(() => {
    const update = () => {
      const diff = NIS2_DEADLINE - Date.now();
      setDaysLeft(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  const price = currency === 'USD' ? '$99' : '€99';

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-[11px] font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open beta — {daysLeft} days until NIS2 deadline
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[1.05] mb-6">
            EU compliance,
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-600 to-neutral-400">
              uberised.
            </span>
            <br />
            {price} / month.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            The first <b>open-source</b> compliance scanner for EU regulations
            (<b>NIS2</b>, <b>DORA</b>, <b>EU AI Act</b>). Self-serve. No demo.
            No CLOUD Act headache.
          </p>

          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto mb-10 font-mono">
            <Zap className="inline w-4 h-4 mb-1" /> Built for US startups selling to EU customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#waitlist"
              onClick={() => trackEvent('saas_en_cta_waitlist_hero')}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Start free — no card
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ramzilbscontact-ctrl/scanner"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('saas_en_cta_github_hero')}
              className="inline-flex items-center gap-3 border-2 border-black px-8 py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Scan locally in 60s
              <Star className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-neutral-500 font-mono mb-2">
            <code className="bg-neutral-100 px-2 py-1 text-black">
              curl -sSL https://api.getagenzia.fr/scanner/install.sh | sh
            </code>
          </p>
          <p className="text-xs text-neutral-400 font-mono">
            Apache 2.0 · Hosted in Paris · No CLOUD Act · 6 months free for YC alumni
          </p>

          {/* Currency toggle */}
          <div className="mt-12 flex justify-center gap-1 text-[10px] font-mono">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 ${
                currency === 'USD' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3 py-1 ${
                currency === 'EUR' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
              }`}
            >
              EUR
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ THE PROBLEM ═══════════ */}
      <section className="bg-red-50 border-y-2 border-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[11px] font-mono uppercase tracking-widest text-red-700 mb-4">
            ⚠ The problem US founders don't see yet
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-6">
            Your EU customers are about to hit you with
            <br />
            <span className="italic text-red-600">NIS2 security questionnaires.</span>
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Starting <b>October 17, 2026</b>, 160,000 EU entities must prove
            NIS2 compliance. Article 21(2)(d) cascades the audit to{' '}
            <b>every one of their vendors</b> — including you.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Vanta and Drata bolted on NIS2 as a mapping module — but they're
            hosted in the US, which means your EU compliance evidence sits under
            the <b>CLOUD Act</b>. That's a Schrems II liability waiting to happen.
          </p>
          <div className="inline-block bg-black text-white px-6 py-3 text-sm font-mono">
            <span className="text-red-400">RESULT</span>
            <span className="mx-3">|</span>
            US vendors losing EU deals at the procurement stage
          </div>
        </div>
      </section>

      {/* ═══════════ AGENZIA SCORE ═══════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
                The concept
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
                One number.
                <br />
                <span className="italic">Three regulations.</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                No more 5 dashboards and 3 vendors. The{' '}
                <b>Agenzia Score</b> combines your EU compliance posture,
                cloud spend health, and AI security in a single 0–100 number
                your board actually understands.
              </p>
              <ul className="space-y-3">
                {[
                  'Live benchmark vs. your YC peers',
                  'Drill down into Compliance / FinOps / AI Security',
                  'Auto-updated via open-source agent on your infra',
                  'Shareable report PDF for EU customers',
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white p-10 shadow-[12px_12px_0px_0px_rgba(26,143,160,1)]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Agenzia Score — sample dashboard
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-7xl font-serif font-bold">82</span>
                <span className="text-2xl text-neutral-500">/100</span>
                <span className="ml-auto text-green-400 text-sm font-mono">↑ +5 this month</span>
              </div>
              <div className="h-2 bg-neutral-800 mb-8">
                <div className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 w-[82%]" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'NIS2', val: 88, sub: 'EU ready ✓', color: 'bg-green-400' },
                  { label: 'FinOps', val: 71, sub: '−$2,300/mo', color: 'bg-yellow-400' },
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
                Recommended next actions
              </div>
              <ul className="space-y-2 text-xs">
                <li className="text-neutral-300">
                  1. Enable MFA on 5 admin accounts → <span className="text-green-400">+8 NIS2 pts</span>
                </li>
                <li className="text-neutral-300">
                  2. Shut down 3 idle AWS VMs → <span className="text-green-400">−$850/mo</span>
                </li>
                <li className="text-neutral-300">
                  3. Patch CVE-2026-XXXX → <span className="text-green-400">+3 AI Sec pts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3 MODULES ═══════════ */}
      <section className="bg-neutral-50 border-y-2 border-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Three modules, one subscription
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
              What your team <span className="italic">stops paying elsewhere.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'EU Compliance',
                tagline: 'Replaces Vanta / Drata',
                price: '$20,000/yr → included',
                features: [
                  'NIS2 (10 measures, Art. 21)',
                  'DORA + EU AI Act mapping',
                  'ISO 27001 Annex A',
                  'ANSSI registry pre-filled',
                  'PDF export for EU customers',
                ],
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: 'Cloud FinOps',
                tagline: 'Replaces Vantage / Cloudability',
                price: '$3,000/yr → included',
                features: [
                  'AWS, Azure, GCP, OVH, Scaleway',
                  'ML anomaly detection',
                  'Automated rightsizing',
                  'Reserved Instances tracker',
                  'Monthly CFO report',
                ],
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: 'AI Security Firewall',
                tagline: 'Replaces Lakera / Protect AI',
                price: '$50,000/yr → included',
                features: [
                  'Proxy OpenAI / Claude / Mistral',
                  'Prompt injection detection',
                  'Auto-redact PII before API',
                  'Cost cap per user / per app',
                  'NIS2-compliant audit logs',
                ],
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-2 border-black p-8 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
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
        </div>
      </section>

      {/* ═══════════ COMPARISON ═══════════ */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Versus the incumbents
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
              Why pay <span className="italic text-red-400">$73,000 / year</span>
              <br />
              when you can pay $1,188?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-neutral-800">
                  <th className="text-left py-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Feature
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
                  ['NIS2 native (not mapping)', false, false, false, true],
                  ['Cloud FinOps', false, true, false, true],
                  ['AI Security proxy', false, false, true, true],
                  ['Single dashboard', false, false, false, true],
                  ['EU-hosted (CLOUD Act-free)', false, false, false, true],
                  ['Self-serve (no demo)', false, true, false, true],
                  ['Open-source agent', false, false, false, true],
                  ['< $100/month tier', false, false, false, true],
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
                  <td className="pt-6 font-mono text-[10px] uppercase tracking-widest">Annual cost</td>
                  <td className="pt-6 text-center text-red-400 font-bold">$20,000</td>
                  <td className="pt-6 text-center text-red-400 font-bold">$3,000</td>
                  <td className="pt-6 text-center text-red-400 font-bold">$50,000</td>
                  <td className="pt-6 text-center bg-neutral-900 text-green-400 font-bold">$1,188</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-neutral-500 text-sm mt-8">
            Based on mid-market plans for 80 endpoints. Agenzia Starter: $99/month, no commitment.
          </p>
        </div>
      </section>

      {/* ═══════════ DEV QUICKSTART ═══════════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
              For the devs
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
              60-second quickstart.
            </h2>
            <p className="text-neutral-600">
              No signup required. Run the scanner locally, see your score,
              decide later.
            </p>
          </div>

          <div className="bg-black text-green-400 p-8 font-mono text-sm border-2 border-black shadow-[8px_8px_0px_0px_rgba(26,143,160,1)]">
            <div className="text-neutral-500 mb-2"># macOS / Linux</div>
            <div>$ curl -sSL https://api.getagenzia.fr/scanner/install.sh | sh</div>
            <div>$ agenzia-scan</div>
            <div className="text-neutral-500 mt-4 mb-2"># Windows PowerShell</div>
            <div>{'>'} iwr -useb https://api.getagenzia.fr/scanner/install.ps1 | iex</div>
            <div>{'>'} agenzia-scan</div>
            <div className="text-neutral-500 mt-4 mb-2"># From source</div>
            <div>$ git clone https://github.com/ramzilbscontact-ctrl/scanner.git</div>
            <div>$ cd scanner && go build ./cmd/agenzia-scan</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: 'Apache 2.0', sub: 'Commercial use OK' },
              { label: 'Cross-OS', sub: 'Win / Mac / Linux' },
              { label: 'Single binary', sub: '10 MB, no deps' },
            ].map((b, i) => (
              <div key={i} className="border-2 border-black p-6 text-center">
                <div className="font-serif text-xl font-bold">{b.label}</div>
                <div className="text-xs text-neutral-500 font-mono mt-1">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WAITLIST ═══════════ */}
      <section id="waitlist" className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Open beta
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            50 YC alumni slots. <span className="italic">6 months free.</span>
          </h2>
          <p className="text-lg text-neutral-600">
            We're shipping with 50 design partners. If you're YC (W23–W26), you get
            6 months of Pro tier free in exchange for feedback and a logo.
          </p>
        </div>

        <WaitlistFormEn />
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-neutral-50 border-t-2 border-black py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
            Agenzia — Built in Paris · Deployed worldwide
          </div>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            Open-source scanner (Apache 2.0) on{' '}
            <a
              href="https://github.com/ramzilbscontact-ctrl/scanner"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ramzilbscontact-ctrl/scanner
            </a>
            . EU infrastructure (OVH + Scaleway). No CLOUD Act, no BS.
          </p>
          <p className="text-xs text-neutral-400 font-mono mt-4">
            🇫🇷 Agenzia SAS · GDPR-compliant by design · dpo@getagenzia.fr
          </p>
        </div>
      </footer>
    </div>
  );
};

// ─── Waitlist form (EN) ───────────────────────────────────────
const WaitlistFormEn: React.FC = () => {
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
        body: JSON.stringify({ ...data, locale: 'en' }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      setPosition(body.position ?? null);
      setState('success');
      trackEvent('saas_en_waitlist_joined', { priority: data.priority });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="border-2 border-black p-12 text-center bg-green-50">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-2">You're in 🎉</h3>
        <p className="text-neutral-600 mb-4">
          {position
            ? `You're #${position} on the waitlist of 50.`
            : "We'll reach out within 48h."}
        </p>
        <p className="text-sm text-neutral-500">
          In the meantime, run the open-source scanner on your infra:{' '}
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
          Work email *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="w-full p-3 border-2 border-black focus:outline-none font-mono"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
            Company *
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme Inc."
            className="w-full p-3 border-2 border-black focus:outline-none font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
            Endpoints *
          </label>
          <select
            name="size"
            required
            className="w-full p-3 border-2 border-black focus:outline-none font-mono bg-white"
          >
            <option value="">—</option>
            <option value="0-50">0–50</option>
            <option value="50-150">50–150</option>
            <option value="150-300">150–300</option>
            <option value="300+">300+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
          Top priority *
        </label>
        <select
          name="priority"
          required
          className="w-full p-3 border-2 border-black focus:outline-none font-mono bg-white"
        >
          <option value="">Pick one…</option>
          <option value="nis2">Answering EU customer NIS2 questionnaires</option>
          <option value="finops">Cutting cloud costs</option>
          <option value="ai-security">Securing ChatGPT / Copilot usage</option>
          <option value="all">All three</option>
        </select>
      </div>
      <div>
        <label className="text-[10px] font-mono uppercase tracking-widest block mb-2">
          Are you YC? (optional — unlocks free 6 months)
        </label>
        <input
          type="text"
          name="yc_batch"
          placeholder="e.g. W25, S26"
          className="w-full p-3 border-2 border-black focus:outline-none font-mono"
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-black text-white py-4 text-[11px] font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending…' : 'Join the beta'}
      </button>

      {error && (
        <div className="text-red-600 text-sm font-mono text-center">Error: {error}</div>
      )}

      <p className="text-xs text-neutral-500 text-center">
        No spam. No newsletter. Just an email when your access is ready.
      </p>
    </form>
  );
};

export default SaasLandingEn;
