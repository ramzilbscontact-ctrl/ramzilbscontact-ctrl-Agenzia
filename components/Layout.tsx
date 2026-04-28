import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

// Cookie consent: <CookieConsentV2 /> est monté dans App.tsx (root level pour persister
// au-dessus de toutes les pages, pas dans Layout pour éviter la double mount).

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-pure text-ink font-sans antialiased selection:bg-ink selection:text-pure">
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;
