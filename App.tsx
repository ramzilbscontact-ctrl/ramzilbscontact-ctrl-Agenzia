
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SimulateurROI from './pages/Tools/SimulateurROI';
import Blog from './pages/Blog';
import ArticlePage from './pages/Blog/ArticlePage';
import { initPostHog } from './lib/posthog';

const App: React.FC = () => {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/rgpd" element={<RGPD />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/services/infogerance-ia" element={<InfogeranceIA />} />
          <Route path="/services/cybersecurite-nis2" element={<CybersecuriteNIS2 />} />
          <Route path="/services/migration-cloud" element={<MigrationCloud />} />
          <Route path="/simulateur-roi" element={<SimulateurROI />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
