import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

interface PageEndBlockProps {
  onOpenTourModal: () => void;
  onOpenContact: () => void;
  secondaryLabel?: string;
  className?: string;
}

export const PageEndBlock: React.FC<PageEndBlockProps> = ({
  onOpenTourModal,
  onOpenContact,
  secondaryLabel = 'Talk to an engineer',
  className = '',
}) => {
  return (
    <section className={`bg-[#151515] text-white py-14 sm:py-16 lg:py-20 relative overflow-hidden ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Montserrat',sans-serif] text-balance">
          See the Accra facility for yourself.
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Request a guided walkthrough in person at Amrahia-Katamanso, Accra or by live video, and meet the engineers who run the site.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Primary Action: Request a tour */}
          <button
            type="button"
            onClick={onOpenTourModal}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2.5 text-base whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515] cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Request a tour</span>
          </button>

          {/* Secondary Action: Talk to an engineer / Talk to our team */}
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2.5 text-base whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-slate-300" />
            <span>{secondaryLabel}</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">What you&apos;ll see:</span> power protection systems, data halls, and the Meet-Me Room.{' '}
          <span className="font-semibold text-white">After you send a request:</span> our team replies to confirm your preferred format, timing, and site access details.
        </div>
      </div>
    </section>
  );
};
