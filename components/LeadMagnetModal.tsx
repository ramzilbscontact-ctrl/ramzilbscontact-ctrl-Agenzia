import React, { useState, useEffect } from 'react';
import './LeadMagnetModal.css';
import { X } from 'lucide-react';

const LeadMagnetModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const trigger = document.getElementById('open-lead-magnet');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }

    return () => {
      if (trigger) {
        trigger.removeEventListener('click', openModal);
      }
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log('Submitting data to Lead Magnet Webhook:', data);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch('https://204.168.190.123:5678/webhook/lead-magnet', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log('Webhook Response Status:', response.status);

      if (response.ok) {
        alert('Envoi réussi !');
        setIsSubmitted(true);
        const submitButton = (e.currentTarget.querySelector('[type="submit"]') as HTMLButtonElement);
        if (submitButton) {
          submitButton.style.backgroundColor = '#22c55e'; // green-500
        }
      } else {
        const errorText = await response.text();
        throw new Error(`Erreur HTTP: ${response.status} - ${errorText}`);
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        console.error("Erreur : Délai d'attente dépassé");
        setError("Erreur : Délai d'attente dépassé (Vérifie ton VPS)");
      } else {
        console.error('Error submitting form:', err);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-card">
        <button className="modal-close-btn" onClick={closeModal}>
          <X size={24} />
        </button>
        {isSubmitted ? (
          <div className="modal-success-message">
            <h2>Merci, vérifiez votre boîte mail !</h2>
          </div>
        ) : (
          <>
            <h2>Accédez à votre diagnostic gratuit</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email professionnel</label>
                <input type="email" id="email" name="email" placeholder="vous@entreprise.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="company_url">URL de votre entreprise (facultatif)</label>
                <input type="url" id="company_url" name="company_url" placeholder="https://www.votre-site.fr" />
              </div>
              <button type="submit" className="modal-submit-btn" disabled={isLoading}>
                {isLoading ? 'Envoi en cours...' : "Lancer l'audit"}
              </button>
              <p className="modal-footer-text">Vos données sont sécurisées.</p>
              {error && (
                <div className="modal-error-box">
                  <pre>{error}</pre>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;
