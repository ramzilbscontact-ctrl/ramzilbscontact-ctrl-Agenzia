
import React, { useState } from 'react';
import type { Content } from '../types';

interface UseCasesProps {
  content: Content['useCases'];
}

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const UseCases: React.FC<UseCasesProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pe-8 rtl:lg:pe-0 rtl:lg:ps-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter">
              {content.title}
            </h2>
          </div>
          <div>
            <div className="space-y-4">
              {content.cases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl shadow-tactile overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-6 text-start"
                  >
                    <h3 className="text-lg font-semibold text-brand-primary">{useCase.title}</h3>
                    <div className="flex-shrink-0 ms-4">
                        <PlusIcon className={`w-5 h-5 text-brand-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                     <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-brand-secondary">
                          {useCase.description}
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
