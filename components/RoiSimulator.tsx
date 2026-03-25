
import React, { useState, useEffect } from 'react';
import type { Content } from '../types';

interface RoiSimulatorProps {
  content: Content['roi'];
}

const RoiSimulator: React.FC<RoiSimulatorProps> = ({ content }) => {
  const [employees, setEmployees] = useState(50);
  const [hoursSaved, setHoursSaved] = useState(5);
  const [avgCost, setAvgCost] = useState(30);
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    const savings = employees * hoursSaved * avgCost * 52; // 52 weeks in a year
    setAnnualSavings(savings);
  }, [employees, hoursSaved, avgCost]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(value);
  };

  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-brand-secondary">
            {content.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-tactile-lg p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-brand-secondary">{content.employeesLabel}</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  id="employees"
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                />
                <span className="font-semibold text-brand-primary w-16 text-center bg-gray-100 rounded-md py-1 shadow-tactile-inset">{employees}</span>
              </div>
            </div>
             <div>
              <label htmlFor="hours" className="block text-sm font-medium text-brand-secondary">{content.hoursLabel}</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  id="hours"
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(parseFloat(e.target.value))}
                />
                <span className="font-semibold text-brand-primary w-16 text-center bg-gray-100 rounded-md py-1 shadow-tactile-inset">{hoursSaved.toFixed(1)}</span>
              </div>
            </div>
             <div>
              <label htmlFor="cost" className="block text-sm font-medium text-brand-secondary">{content.costLabel}</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  id="cost"
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={avgCost}
                  onChange={(e) => setAvgCost(parseInt(e.target.value, 10))}
                />
                <span className="font-semibold text-brand-primary w-16 text-center bg-gray-100 rounded-md py-1 shadow-tactile-inset">{avgCost}€</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-tactile-inset">
            <h3 className="text-base font-black text-brand-secondary tracking-widest uppercase">{content.savingsTitle}</h3>
            <p className="text-4xl md:text-5xl font-black text-brand-primary my-2 tracking-tighter">
              {formatCurrency(annualSavings)}
            </p>
            <p className="text-sm text-brand-secondary">{content.savingsPerYear}</p>
            <a 
              href="https://cal.eu/getagenzia/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 bg-brand-primary text-white text-base font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm w-full text-center"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiSimulator;
