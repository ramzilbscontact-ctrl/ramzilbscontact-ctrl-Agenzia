import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MentionsLegales from './pages/Legal/MentionsLegales';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import RGPD from './pages/Legal/RGPD';
import CGU from './pages/Legal/CGU';
import InfogeranceIA from './pages/Services/InfogeranceIA';
import CybersecuriteNIS2 from './pages/Services/CybersecuriteNIS2';
import MigrationCloud from './pages/Services/MigrationCloud';
import CguOutbound from './pages/Legal/CguOutbound';
import SimulateurROI from './pages/Tools/SimulateurROI';
import CarouselEditor from './pages/Tools/CarouselEditor';
import Blog from './pages/Blog';
import ArticlePage from './pages/Blog/ArticlePage';
import SaasLanding from './pages/SaasLanding';
import SaasLandingEn from './pages/SaasLandingEn';
import { initPostHog, trackPageView } from './lib/posthog';
import LeadMagnetModal from './components/LeadMagnetModal';

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/rgpd" element={<RGPD />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/cgu-outbound" element={<CguOutbound />} />
          <Route path="/services/infogerance-ia" element={<InfogeranceIA />} />
          <Route path="/services/cybersecurite-nis2" element={<CybersecuriteNIS2 />} />
          <Route path="/services/migration-cloud" element={<MigrationCloud />} />
          <Route path="/simulateur-roi" element={<SimulateurROI />} />
          <Route path="/tools/carousel-editor" element={<CarouselEditor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/saas" element={<SaasLanding />} />
          <Route path="/en/saas" element={<SaasLandingEn />} />
          <Route path="/en" element={<SaasLandingEn />} />
        </Routes>
        <LeadMagnetModal />
      </Layout>
    </Router>
  );
};

export default App;
