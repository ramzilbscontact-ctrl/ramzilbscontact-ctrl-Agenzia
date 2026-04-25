import React, { useMemo, useRef, useState } from 'react';
import { Plus, Trash2, Copy, Download, ArrowLeft, ArrowRight } from 'lucide-react';

type ContentSlide = {
  id: string;
  type: 'text' | 'textImage' | 'image';
  title: string;
  text: string;
  badge: string;
  imageUrl: string;
};

const uid = () => Math.random().toString(36).slice(2, 10);

const CarouselEditor: React.FC = () => {
  const [subtitle, setSubtitle] = useState('Ce point va retenir l\'attention');
  const [introTitle, setIntroTitle] = useState('Voici ce que votre audience lira en premier');
  const [introText, setIntroText] = useState('Puis elle poursuivra naturellement avec votre message slide apres slide.');
  const [introType, setIntroType] = useState<'standard' | 'emoji' | 'image'>('standard');
  const [emoji, setEmoji] = useState('😄');
  const [showEmoji, setShowEmoji] = useState(true);
  const [swipeText, setSwipeText] = useState('Swipe');
  const [website, setWebsite] = useState('www.getagenzia.com');
  const [introImageUrl, setIntroImageUrl] = useState('');

  const [outroTitle, setOutroTitle] = useState('Passez a l\'action');
  const [outroText, setOutroText] = useState('Parlons de votre architecture NIS2.');
  const [ctaText, setCtaText] = useState('Reserver un audit');
  const [ctaUrl, setCtaUrl] = useState('https://www.cal.eu/getagenzia');

  const [bgColor, setBgColor] = useState('#F8F8F8');
  const [textColor, setTextColor] = useState('#000000');
  const [accentColor, setAccentColor] = useState('#006AFF');

  const [slides, setSlides] = useState<ContentSlide[]>([
    {
      id: uid(),
      type: 'text',
      title: 'Le risque NIS2',
      text: 'Les PME sont exposees. Une seule faille peut stopper votre activite.',
      badge: 'Risque',
      imageUrl: '',
    },
    {
      id: uid(),
      type: 'textImage',
      title: 'L\'architecture souveraine',
      text: 'Agents IA, supervision continue, remediation rapide: votre SI devient resilient.',
      badge: 'Solution',
      imageUrl: '',
    },
  ]);

  const [selectedSlideIdx, setSelectedSlideIdx] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const previewCardRef = useRef<HTMLDivElement>(null);

  const total = slides.length + 2;

  const addSlide = () => {
    setSlides((prev) => [
      ...prev,
      { id: uid(), type: 'text', title: 'Nouveau slide', text: 'Votre message ici.', badge: 'Info', imageUrl: '' },
    ]);
    setSelectedSlideIdx(slides.length);
  };

  const duplicateSlide = (idx: number) => {
    setSlides((prev) => {
      const source = prev[idx];
      if (!source) return prev;
      const next = [...prev];
      next.splice(idx + 1, 0, { ...source, id: uid() });
      return next;
    });
  };

  const moveSlide = (idx: number, direction: -1 | 1) => {
    setSlides((prev) => {
      const target = idx + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      const [item] = next.splice(idx, 1);
      next.splice(target, 0, item);
      setSelectedSlideIdx(target);
      return next;
    });
  };

  const removeSlide = (idx: number) => {
    setSlides((prev) => prev.filter((_, i) => i !== idx));
    setSelectedSlideIdx((prev) => Math.max(0, Math.min(prev, slides.length - 2)));
    setPreviewIndex((prev) => Math.min(prev, total - 2));
  };

  const updateSlide = (idx: number, patch: Partial<ContentSlide>) => {
    setSlides((prev) => prev.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  };

  const markdown = useMemo(() => {
    const bodySlides = slides
      .map(
        (s) => `---\nlayout: bento\n---\n\n<ShadowBox>\n  <CyberBadge>${s.badge}</CyberBadge>\n  \n  ## ${s.title}\n  \n  ${s.text}\n${s.imageUrl ? `\n  ![](${s.imageUrl})\n` : ''}</ShadowBox>`
      )
      .join('\n\n');

    return `---\ntheme: ../packages/theme-apple-basic\ntitle: Carrousel Agenzia\n---\n\n---\nlayout: hook\n---\n\n${subtitle}\n\n# ${introTitle}\n\n${introText}\n\n${showEmoji ? `${emoji}` : ''}\n\n---\n${bodySlides}\n\n---\nlayout: cta\n---\n\n# ${outroTitle}\n\n${outroText}\n\n[${ctaText}](${ctaUrl})\n`;
  }, [slides, subtitle, introTitle, introText, showEmoji, emoji, outroTitle, outroText, ctaText, ctaUrl]);

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'carrousel-generated.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const waitForPaint = async () => {
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  };

  const captureAllSlides = async () => {
    const html2canvas = (await import('html2canvas')).default;
    const initialIndex = previewIndex;
    const canvases: HTMLCanvasElement[] = [];

    try {
      for (let i = 0; i < total; i += 1) {
        setPreviewIndex(i);
        await waitForPaint();
        if (!previewCardRef.current) {
          throw new Error('Preview introuvable');
        }
        const canvas = await html2canvas(previewCardRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: bgColor,
        });
        canvases.push(canvas);
      }
      return canvases;
    } finally {
      setPreviewIndex(initialIndex);
    }
  };

  const downloadLinkedInPdf = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      const [{ jsPDF }, canvases] = await Promise.all([import('jspdf'), captureAllSlides()]);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [1080, 1080],
      });

      canvases.forEach((canvas, idx) => {
        const img = canvas.toDataURL('image/jpeg', 0.95);
        if (idx > 0) pdf.addPage([1080, 1080], 'portrait');
        pdf.addImage(img, 'JPEG', 0, 0, 1080, 1080, undefined, 'FAST');
      });

      pdf.save('carousel-linkedin.pdf');
    } catch (error) {
      console.error(error);
      window.alert('Export PDF impossible. Verifie les images externes (CORS) et reessaie.');
    } finally {
      setIsExporting(false);
    }
  };

  const downloadLinkedInPngZip = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      const [{ default: JSZip }, { saveAs }, canvases] = await Promise.all([
        import('jszip'),
        import('file-saver'),
        captureAllSlides(),
      ]);

      const zip = new JSZip();
      canvases.forEach((canvas, idx) => {
        const pngBase64 = canvas.toDataURL('image/png').split(',')[1] ?? '';
        zip.file(`slide-${String(idx + 1).padStart(2, '0')}.png`, pngBase64, { base64: true });
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, 'carousel-linkedin-png.zip');
    } catch (error) {
      console.error(error);
      window.alert('Export PNG impossible. Verifie les images externes (CORS) et reessaie.');
    } finally {
      setIsExporting(false);
    }
  };

  const currentView =
    previewIndex === 0
      ? 'intro'
      : previewIndex === total - 1
      ? 'outro'
      : 'slide';

  const currentSlide = slides[Math.max(0, previewIndex - 1)];

  return (
    <section className="py-20 bg-[#f8f8f8] border-b border-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <div className="inline-block border-2 border-black px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
            Carousel Editor
          </div>
          <h1 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">Editeur LinkedIn Inspire aiCarousels</h1>
          <p className="text-zinc-600 mt-3 text-lg">Une seule page pour gerer hook, contenu, CTA, images et export Slidev.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-5 border-2 border-black bg-white p-6 space-y-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] mb-3">Theme global</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className="text-xs font-mono uppercase tracking-widest">Fond
                  <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="block mt-1 h-10 w-full border border-black" />
                </label>
                <label className="text-xs font-mono uppercase tracking-widest">Texte
                  <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="block mt-1 h-10 w-full border border-black" />
                </label>
                <label className="text-xs font-mono uppercase tracking-widest">Accent
                  <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="block mt-1 h-10 w-full border border-black" />
                </label>
              </div>
            </div>

            <div className="border-t border-black pt-5 space-y-3">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em]">Intro</h2>
              <label className="text-xs font-mono uppercase tracking-widest">Type d'intro
                <select
                  value={introType}
                  onChange={(e) => setIntroType(e.target.value as 'standard' | 'emoji' | 'image')}
                  className="w-full border-2 border-black px-3 py-2 mt-1 bg-white"
                >
                  <option value="standard">Standard</option>
                  <option value="emoji">Emoji</option>
                  <option value="image">Image</option>
                </select>
              </label>
              <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="Subtitle" />
              <textarea value={introTitle} onChange={(e) => setIntroTitle(e.target.value)} className="w-full border-2 border-black px-3 py-2 min-h-[80px]" placeholder="Titre" />
              <textarea value={introText} onChange={(e) => setIntroText(e.target.value)} className="w-full border-2 border-black px-3 py-2 min-h-[80px]" placeholder="Texte" />
              <div className="grid grid-cols-3 gap-3 items-center">
                <label className="col-span-1 text-xs font-mono uppercase tracking-widest">Emoji</label>
                <input value={emoji} onChange={(e) => setEmoji(e.target.value)} className="col-span-1 border-2 border-black px-3 py-2" />
                <label className="col-span-1 flex items-center gap-2 text-xs"><input type="checkbox" checked={showEmoji} onChange={(e) => setShowEmoji(e.target.checked)} /> Actif</label>
              </div>
              <input value={swipeText} onChange={(e) => setSwipeText(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="Swipe text" />
              <input value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="Website" />
              {introType === 'image' && (
                <input value={introImageUrl} onChange={(e) => setIntroImageUrl(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="URL image intro (optionnel)" />
              )}
            </div>

            <div className="border-t border-black pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-mono uppercase tracking-[0.2em]">Slides contenu</h2>
                <button onClick={addSlide} className="border-2 border-black px-3 py-1 text-xs font-mono uppercase tracking-widest flex items-center gap-1 hover:bg-black hover:text-white transition-colors">
                  <Plus size={14} /> Ajouter
                </button>
              </div>

              <div className="space-y-2 max-h-[220px] overflow-auto pr-1">
                {slides.map((s, i) => (
                  <div key={s.id} className={`border-2 p-3 ${i === selectedSlideIdx ? 'border-black bg-zinc-50' : 'border-zinc-300 bg-white'}`}>
                    <div className="flex items-center justify-between gap-2">
                      <button onClick={() => setSelectedSlideIdx(i)} className="text-left flex-1">
                        <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Slide {i + 1}</div>
                        <div className="font-semibold truncate">{s.title}</div>
                      </button>
                      <div className="flex items-center gap-1">
                        <button onClick={() => moveSlide(i, -1)} className="p-2 border border-black hover:bg-black hover:text-white" aria-label="Monter">
                          <ArrowLeft size={14} />
                        </button>
                        <button onClick={() => moveSlide(i, 1)} className="p-2 border border-black hover:bg-black hover:text-white" aria-label="Descendre">
                          <ArrowRight size={14} />
                        </button>
                        <button onClick={() => duplicateSlide(i)} className="p-2 border border-black hover:bg-black hover:text-white" aria-label="Dupliquer slide">
                          <Copy size={14} />
                        </button>
                        <button onClick={() => removeSlide(i)} className="p-2 border border-black hover:bg-black hover:text-white" aria-label="Supprimer slide">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {slides[selectedSlideIdx] && (
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-mono uppercase tracking-widest">Type de slide
                    <select
                      value={slides[selectedSlideIdx].type}
                      onChange={(e) => updateSlide(selectedSlideIdx, { type: e.target.value as 'text' | 'textImage' | 'image' })}
                      className="w-full border-2 border-black px-3 py-2 mt-1 bg-white"
                    >
                      <option value="text">Texte</option>
                      <option value="textImage">Texte + Image</option>
                      <option value="image">Image</option>
                    </select>
                  </label>
                  <input
                    value={slides[selectedSlideIdx].badge}
                    onChange={(e) => updateSlide(selectedSlideIdx, { badge: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2"
                    placeholder="Badge"
                  />
                  <textarea
                    value={slides[selectedSlideIdx].title}
                    onChange={(e) => updateSlide(selectedSlideIdx, { title: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 min-h-[72px]"
                    placeholder="Titre"
                  />
                  {slides[selectedSlideIdx].type !== 'image' && (
                    <textarea
                      value={slides[selectedSlideIdx].text}
                      onChange={(e) => updateSlide(selectedSlideIdx, { text: e.target.value })}
                      className="w-full border-2 border-black px-3 py-2 min-h-[90px]"
                      placeholder="Texte"
                    />
                  )}
                  <input
                    value={slides[selectedSlideIdx].imageUrl}
                    onChange={(e) => updateSlide(selectedSlideIdx, { imageUrl: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2"
                    placeholder="URL image (optionnel)"
                  />
                </div>
              )}
            </div>

            <div className="border-t border-black pt-5 space-y-3">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em]">Outro / CTA</h2>
              <textarea value={outroTitle} onChange={(e) => setOutroTitle(e.target.value)} className="w-full border-2 border-black px-3 py-2 min-h-[72px]" placeholder="Titre outro" />
              <textarea value={outroText} onChange={(e) => setOutroText(e.target.value)} className="w-full border-2 border-black px-3 py-2 min-h-[80px]" placeholder="Texte outro" />
              <input value={ctaText} onChange={(e) => setCtaText(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="Texte CTA" />
              <input value={ctaUrl} onChange={(e) => setCtaUrl(e.target.value)} className="w-full border-2 border-black px-3 py-2" placeholder="URL CTA" />
            </div>
          </div>

          <div className="xl:col-span-7 space-y-4">
            <div className="border-2 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-mono uppercase tracking-[0.2em]">Preview live</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewIndex((v) => Math.max(0, v - 1))}
                    className="border-2 border-black p-2 hover:bg-black hover:text-white"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="text-xs font-mono uppercase tracking-widest px-2">{previewIndex + 1}/{total}</span>
                  <button
                    onClick={() => setPreviewIndex((v) => Math.min(total - 1, v + 1))}
                    className="border-2 border-black p-2 hover:bg-black hover:text-white"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="w-full mx-auto max-w-[760px]">
                <div
                  ref={previewCardRef}
                  className="relative border-2 border-black overflow-hidden"
                  style={{ backgroundColor: bgColor, color: textColor, aspectRatio: '1 / 1' }}
                >
                  <div className="absolute top-4 left-4 h-9 w-9 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/favicon.svg')" }} />
                  <div className="absolute top-16 right-10 h-24 w-24 rounded-full opacity-90" style={{ backgroundColor: accentColor }} />

                  {currentView === 'intro' && (
                    <div className="h-full px-12 pt-24 pb-14 flex flex-col">
                      <div className="text-sm uppercase tracking-[0.25em] font-mono text-zinc-500">{subtitle}</div>
                      <h3 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight">{introTitle}</h3>
                      <p className="mt-5 text-xl leading-relaxed max-w-[85%] text-zinc-600">{introText}</p>
                      {introType === 'image' && introImageUrl && <img src={introImageUrl} alt="intro" className="mt-5 h-40 object-cover border-2 border-black" />}
                      <div className="mt-auto flex items-end justify-between">
                        <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-mono text-xs uppercase tracking-widest" style={{ backgroundColor: accentColor }}>
                          {swipeText}
                        </div>
                        {introType === 'emoji' && showEmoji && <div className="text-3xl">{emoji}</div>}
                      </div>
                    </div>
                  )}

                  {currentView === 'slide' && currentSlide && (
                    <div className="h-full px-12 pt-24 pb-14 flex flex-col">
                      <div className="inline-block px-3 py-1 text-xs uppercase tracking-widest font-mono text-white" style={{ backgroundColor: accentColor }}>
                        {currentSlide.badge}
                      </div>
                      <h3 className="mt-4 text-4xl font-black leading-tight">{currentSlide.title}</h3>
                      {currentSlide.type !== 'image' && <p className="mt-4 text-xl leading-relaxed text-zinc-600">{currentSlide.text}</p>}
                      {(currentSlide.type === 'textImage' || currentSlide.type === 'image') && currentSlide.imageUrl && (
                        <img src={currentSlide.imageUrl} alt="slide" className="mt-6 h-52 w-full object-cover border-2 border-black" />
                      )}
                      {currentSlide.type !== 'image' && <div className="mt-auto border-2 border-black p-3 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-sm">
                        1 idee par slide, message clair, moins de 20 mots.
                      </div>}
                    </div>
                  )}

                  {currentView === 'outro' && (
                    <div className="h-full px-12 pt-24 pb-14 flex flex-col">
                      <div className="text-sm uppercase tracking-[0.25em] font-mono text-zinc-500">Final</div>
                      <h3 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight">{outroTitle}</h3>
                      <p className="mt-5 text-xl leading-relaxed max-w-[90%] text-zinc-600">{outroText}</p>
                      <a href={ctaUrl} className="mt-auto inline-block border-2 border-black px-5 py-3 text-sm font-mono uppercase tracking-widest text-white" style={{ backgroundColor: accentColor }}>
                        {ctaText}
                      </a>
                    </div>
                  )}

                  <div className="absolute left-0 bottom-0 h-2" style={{ width: `${((previewIndex + 1) / total) * 100}%`, backgroundColor: accentColor }} />
                  <div className="absolute right-4 bottom-4 text-xs font-mono uppercase tracking-widest text-zinc-500">{website}</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <button
                  onClick={downloadLinkedInPdf}
                  disabled={isExporting}
                  className="border-2 border-black px-3 py-2 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white disabled:opacity-50"
                >
                  {isExporting ? 'Export...' : 'Telecharger PDF LinkedIn'}
                </button>
                <button
                  onClick={downloadLinkedInPngZip}
                  disabled={isExporting}
                  className="border-2 border-black px-3 py-2 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white disabled:opacity-50"
                >
                  {isExporting ? 'Export...' : 'Telecharger ZIP PNG'}
                </button>
              </div>

              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-mono uppercase tracking-[0.2em]">Export Slidev Markdown</h2>
                <div className="flex gap-2">
                  <button onClick={copyMarkdown} className="border-2 border-black px-3 py-2 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white flex items-center gap-1">
                    <Copy size={14} /> Copier
                  </button>
                  <button onClick={downloadMarkdown} className="border-2 border-black px-3 py-2 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white flex items-center gap-1">
                    <Download size={14} /> Telecharger
                  </button>
                </div>
              </div>
              <textarea readOnly value={markdown} className="w-full min-h-[280px] border-2 border-black px-3 py-2 font-mono text-xs leading-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselEditor;
