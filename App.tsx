import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { initPostHog, trackPageView } from './lib/posthog';

// Routes secondaires : code-split → chargées à la demande
const MentionsLegales = lazy(() => import('./pages/Legal/MentionsLegales'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const RGPD = lazy(() => import('./pages/Legal/RGPD'));
const CGU = lazy(() => import('./pages/Legal/CGU'));
const CguOutbound = lazy(() => import('./pages/Legal/CguOutbound'));
const InfogeranceIA = lazy(() => import('./pages/Services/InfogeranceIA'));
const CybersecuriteNIS2 = lazy(() => import('./pages/Services/CybersecuriteNIS2'));
const MigrationCloud = lazy(() => import('./pages/Services/MigrationCloud'));
const SimulateurROI = lazy(() => import('./pages/Tools/SimulateurROI'));
const CarouselEditor = lazy(() => import('./pages/Tools/CarouselEditor'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticlePage = lazy(() => import('./pages/Blog/ArticlePage'));
const SaasLanding = lazy(() => import('./pages/SaasLanding'));
const SaasLandingEn = lazy(() => import('./pages/SaasLandingEn'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Verify = lazy(() => import('./pages/Auth/Verify'));
const Account = lazy(() => import('./pages/Account'));
const BillingSuccess = lazy(() => import('./pages/Billing/Success'));

// Modales/widgets globaux : lazy aussi (pas critiques au LCP)
const LeadMagnetModal = lazy(() => import('./components/LeadMagnetModal'));
const LeadMagnetSmartForm = lazy(() => import('./components/LeadMagnetSmartForm'));
const CookieConsentV2 = lazy(() => import('./components/CookieConsentV2'));
const CalPopupTrigger = lazy(() => import('./components/CalPopupTrigger'));

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

// Fallback minimaliste pour Suspense — pas de spinner full-screen qui crée un flash
const RouteFallback: React.FC = () => (
  <div style={{ minHeight: '60vh' }} aria-busy="true" />
);

const App: React.FC = () => {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<RouteFallback />}>
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
            {/* Auth + Account */}
            <Route path="/login" element={<Login />} />
            <Route path="/auth/verify" element={<Verify />} />
            <Route path="/account" element={<Account />} />
            {/* Billing post-checkout */}
            <Route path="/billing/success" element={<BillingSuccess />} />
          </Routes>
        </Suspense>
        {/* Widgets globaux — chargés en idle, pas bloquants au LCP */}
        <Suspense fallback={null}>
          <LeadMagnetModal />
          <LeadMagnetSmartForm />
          <CookieConsentV2 />
          <CalPopupTrigger />
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
