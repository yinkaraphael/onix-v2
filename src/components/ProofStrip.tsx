import React from 'react';
import { PROOF_ITEMS } from '../data/siteContent';
import { ExternalLink } from 'lucide-react';

interface ProofStripProps {
  className?: string;
  onNavigateToCertification?: () => void;
}

export const ProofStrip: React.FC<ProofStripProps> = ({
  className = '',
  onNavigateToCertification,
}) => {
  return (
    <section aria-label="Verified credentials" className={`bg-white pb-12 sm:pb-16 pt-2 ${className}`}>
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start">
          {PROOF_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-['Montserrat',sans-serif]">
                {item.number}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 mt-1.5">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#B12D24] hover:text-black underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
                  >
                    <span>{item.sourceLine}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ) : item.id === 'locations' && onNavigateToCertification ? (
                  <button
                    type="button"
                    onClick={onNavigateToCertification}
                    className="text-left font-medium text-slate-700 hover:text-[#B12D24] underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
                  >
                    {item.sourceLine}
                  </button>
                ) : (
                  <span>{item.sourceLine}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
