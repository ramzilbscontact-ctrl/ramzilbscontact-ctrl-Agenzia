import React from 'react';
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
