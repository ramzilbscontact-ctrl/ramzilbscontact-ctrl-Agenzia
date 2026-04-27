import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import ProblemSection from '../components/ProblemSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import ComparisonTable from '../components/ComparisonTable';
import Stats from '../components/Stats';
import CTABanner from '../components/CTABanner';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  const { hash } = useLocation();

  // Si on arrive sur "/" avec un hash (ex: /#nis2 depuis Navbar sur autre page), scroll vers la section
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    // Le DOM peut ne pas être encore monté complètement → on retry quelques fois
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 10) setTimeout(tryScroll, 100);
    };
    tryScroll();
  }, [hash]);

  return (
    <>
      <Hero />
      <LogoStrip />
      <ProblemSection />
      <ServicesSection />
      <HowItWorks />
      <PricingSection />
      <ComparisonTable />
      <Stats />
      <CTABanner />
      <ContactSection />
    </>
  );
};

export default Home;
