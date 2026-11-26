import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface CookieConsentProps {
  forceOpen?: boolean;
  isFrench?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  onCloseSettings?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  forceOpen = false,
  isFrench = false,
  onVisibilityChange,
  onCloseSettings,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('onix_cookie_consent');
    const shouldShow = !saved || forceOpen;
    setIsVisible(shouldShow);
    onVisibilityChange?.(shouldShow);
  }, [forceOpen, onVisibilityChange]);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem('onix_cookie_consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
    onVisibilityChange?.(false);
    onCloseSettings?.();
  };

  if (!isVisible && !forceOpen) return null;

  return (
    <aside
      role="region"
      aria-label={isFrench ? 'Préférences de cookies' : 'Cookie preferences'}
      className="fixed bottom-0 left-0 right-0 z-50 px-3 py-2.5 sm:px-6 sm:py-4 bg-[#151515]/95 backdrop-blur-md text-white border-t border-slate-800 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
        <div className="flex items-start gap-2.5">
          <Shield className="w-4 h-4 text-[#B12D24] shrink-0 mt-0.5 hidden sm:block" />
          <p className="text-[11px] sm:text-xs text-slate-300 leading-snug max-w-3xl">
            <span className="font-semibold text-white">
              {isFrench ? 'Cookies : ' : 'Cookies: '}
            </span>
            {isFrench
              ? "Cookies techniques nécessaires et mesure d'audience optionnelle (Loi n° 2008-12 et Act 843)."
              : 'Essential technical cookies plus optional analytics (Ghana Act 843 & Senegal Law No. 2008-12).'}
          </p>
        </div>

        {/* Equal-weight buttons, 44px touch target on mobile, side-by-side */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="flex-1 sm:flex-none min-h-[40px] sm:min-h-[38px] px-3.5 py-2 border border-slate-500 hover:border-slate-300 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-semibold text-white transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isFrench ? 'Refuser optionnels' : 'Reject optional'}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="flex-1 sm:flex-none min-h-[40px] sm:min-h-[38px] px-3.5 py-2 bg-[#B12D24] hover:bg-black border border-[#B12D24] text-white rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isFrench ? 'Tout accepter' : 'Accept all'}
          </button>
        </div>
      </div>
    </aside>
  );
};
