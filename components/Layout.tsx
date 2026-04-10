import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-zinc-900 font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <ChatWidget />
    </div>
  );
};

export default Layout;
