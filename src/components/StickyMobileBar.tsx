import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { ACCRA_WHATSAPP, DAKAR_WHATSAPP } from '../data/siteContent';

interface StickyMobileBarProps {
  onOpenTourModal: () => void;
  isFrench?: boolean;
  isHidden?: boolean;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenTourModal,
  isFrench = false,
  isHidden = false,
}) => {
  if (isHidden) return null;

  const whatsappHref = isFrench
    ? `${DAKAR_WHATSAPP}?text=Bonjour%20l%E2%80%99%C3%A9quipe%20Onix%20Dakar`
    : `${ACCRA_WHATSAPP}?text=Hello%20Onix%20Team,%20I%20would%20like%20to%20enquire%20about%20colocation`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="h-11 px-3.5 flex items-center justify-center gap-2 bg-[#25D366]/10 active:bg-[#25D366]/20 text-[#126B5E] font-semibold text-xs rounded-lg border border-[#25D366]/40 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#126B5E]"
          aria-label={
            isFrench
              ? "Échanger sur WhatsApp avec l'équipe Dakar"
              : 'Chat with Onix engineer on WhatsApp'
          }
        >
          <MessageCircle className="w-4 h-4 text-[#128C7E]" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenTourModal}
          className="h-11 flex-1 flex items-center justify-center gap-2 bg-[#B12D24] hover:bg-black text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-1"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>{isFrench ? 'Demander une visite' : 'Request a tour'}</span>
        </button>
      </div>
    </div>
  );
};
