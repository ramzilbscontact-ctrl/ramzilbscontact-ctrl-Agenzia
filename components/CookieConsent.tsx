import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';
import { setPostHogOptIn } from '../lib/posthog';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      // If consent already exists, set PostHog state accordingly
      setPostHogOptIn(consent === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setPostHogOptIn(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setPostHogOptIn(false);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 z-[100] w-[calc(100vw-4rem)] md:max-w-md"
        >
          <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-black p-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest font-bold mb-2">Confidentialité & CGU</h3>
                <p className="text-xs font-serif text-zinc-500 leading-relaxed">
                  En continuant votre navigation, vous acceptez nos conditions générales d'utilisation et l'usage de cookies pour optimiser votre expérience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAccept}
                className="flex-1 bg-black text-white px-6 py-3 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Accepter
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 border-2 border-black text-black px-6 py-3 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-50 transition-colors"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
