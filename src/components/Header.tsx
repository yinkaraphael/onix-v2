import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { OnixLogo } from './OnixLogo';
import { ACCRA_PHONE, ACCRA_TEL, DAKAR_PHONE, DAKAR_TEL } from '../data/siteContent';
import {
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Server,
  Activity,
  ArrowRight,
  Phone,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenTourModal,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<'who-we-serve' | 'solutions' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const isFrench = currentPage === 'fr-senegal';
  const activePhone = isFrench ? DAKAR_PHONE : ACCRA_PHONE;
  const activeTel = isFrench ? DAKAR_TEL : ACCRA_TEL;

  const openDropdown = (menu: 'who-we-serve' | 'solutions') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const scheduleClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const closeImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        closeImmediately();
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImmediately();
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isWhoWeServeOpen = activeDropdown === 'who-we-serve';
  const isSolutionsOpen = activeDropdown === 'solutions';

  return (
    <header className="fixed top-2 sm:top-3 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
      {/* Main single-row bar */}
      <div
        ref={navContainerRef}
        onMouseLeave={scheduleClose}
        className="w-full max-w-7xl 2xl:max-w-[1560px] bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.07)] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 lg:gap-6 pointer-events-auto border border-black/[0.06]"
      >
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('home');
            }}
            onMouseEnter={closeImmediately}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded-lg p-1 cursor-pointer"
            aria-label={isFrench ? 'Onix Data Centres - Accueil' : 'Onix Data Centres Home'}
          >
            <OnixLogo variant="red" className="h-7 sm:h-8 lg:h-9 w-auto" imgClassName="h-7 sm:h-8 lg:h-9 w-auto" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label={isFrench ? 'Navigation principale' : 'Primary navigation'}
          className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium text-slate-700"
        >
          {/* Who we serve dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('who-we-serve')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => {
                if (isWhoWeServeOpen) {
                  closeImmediately();
                } else {
                  openDropdown('who-we-serve');
                }
              }}
              className={`flex items-center gap-1 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
                ['banks-fintech', 'networks-content', 'enterprise', 'moving-to-onix'].includes(currentPage)
                  ? 'text-[#B12D24] font-semibold'
                  : isWhoWeServeOpen
                  ? 'text-[#B12D24]'
                  : 'hover:text-[#B12D24]'
              }`}
              aria-expanded={isWhoWeServeOpen}
            >
              <span>{isFrench ? 'Clients' : 'Who we serve'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  isWhoWeServeOpen ? 'rotate-180 text-[#B12D24]' : ''
                }`}
              />
            </button>

            {isWhoWeServeOpen && (
              <div
                onMouseEnter={() => openDropdown('who-we-serve')}
                onMouseLeave={scheduleClose}
                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl p-2.5 z-50 border border-slate-200/80"
              >
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('banks-fintech');
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group flex items-start gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#B12D24] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Banks &amp; Fintech</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Primary hosting, disaster recovery &amp; audit visits
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('networks-content');
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group flex items-start gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#243F87] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Networks &amp; Content</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Carrier-neutral Meet-Me Room &amp; LINX Accra
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('enterprise');
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group flex items-start gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Enterprise &amp; Public Sector</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Local Ghanaian hosting &amp; remote hands
                    </div>
                  </div>
                </button>

                <div className="mt-1 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      closeImmediately();
                      onNavigate('moving-to-onix');
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-[#B12D24] hover:bg-red-50 rounded-lg transition-colors flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
                  >
                    <span>See the migration plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('solutions')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => {
                if (isSolutionsOpen) {
                  closeImmediately();
                } else {
                  openDropdown('solutions');
                }
              }}
              className={`flex items-center gap-1 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
                currentPage === 'solutions'
                  ? 'text-[#B12D24] font-semibold'
                  : isSolutionsOpen
                  ? 'text-[#B12D24]'
                  : 'hover:text-[#B12D24]'
              }`}
              aria-expanded={isSolutionsOpen}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  isSolutionsOpen ? 'rotate-180 text-[#B12D24]' : ''
                }`}
              />
            </button>

            {isSolutionsOpen && (
              <div
                onMouseEnter={() => openDropdown('solutions')}
                onMouseLeave={scheduleClose}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl p-2.5 z-50 border border-slate-200/80"
              >
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('solutions', 'colocation');
                  }}
                  className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Colocation (Racks &amp; Cages)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('solutions', 'interconnection');
                  }}
                  className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Interconnection (Meet-Me Room)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('solutions', 'solar-power');
                  }}
                  className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  On-Site Solar Power
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('solutions', 'remote-hands');
                  }}
                  className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Remote Hands Support
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closeImmediately();
                    onNavigate('solutions', 'pricing');
                  }}
                  className="w-full text-left px-3 py-2.5 text-xs font-semibold text-[#B12D24] hover:bg-red-50 rounded-lg transition-colors cursor-pointer mt-1 border-t border-slate-100"
                >
                  Request a scoped quote →
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('the-facility');
            }}
            onMouseEnter={closeImmediately}
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              currentPage === 'the-facility' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            {isFrench ? 'Site d’Accra' : 'The facility'}
          </button>

          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('certification');
            }}
            onMouseEnter={closeImmediately}
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              currentPage === 'certification' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Certification
          </button>

          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('about');
            }}
            onMouseEnter={closeImmediately}
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              currentPage === 'about' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            {isFrench ? 'À propos' : 'About'}
          </button>

          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('contact');
            }}
            onMouseEnter={closeImmediately}
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              currentPage === 'contact' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Contact
          </button>

          <div className="h-3.5 w-px bg-slate-200 mx-0.5 shrink-0" aria-hidden="true" />

          {/* Dakar, Sénégal (FR) Link - always clearly visible */}
          <button
            type="button"
            onClick={() => {
              closeImmediately();
              onNavigate('fr-senegal');
            }}
            onMouseEnter={closeImmediately}
            className={`py-1.5 px-2.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              currentPage === 'fr-senegal'
                ? 'bg-[#243F87] text-white'
                : 'text-[#243F87] hover:bg-blue-50'
            }`}
            title="Dakar, Sénégal - Page en français"
          >
            Dakar, Sénégal (FR)
          </button>
        </nav>

        {/* Right: Primary Action + Mobile Tap-to-Call + Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenTourModal}
            className="hidden lg:inline-flex px-5 py-2.5 bg-[#B12D24] hover:bg-[#151515] text-white text-sm font-semibold rounded-full transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2 cursor-pointer"
          >
            {isFrench ? 'Demander une visite' : 'Request a tour'}
          </button>

          {/* Mobile Phone Icon routed dynamically to Accra or Dakar */}
          <a
            href={activeTel}
            className="flex lg:hidden items-center justify-center w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
            aria-label={
              isFrench
                ? `Appeler l'équipe Onix Dakar au ${activePhone}`
                : `Call Onix Accra team at ${activePhone}`
            }
            title={activePhone}
          >
            <Phone className="w-4 h-4 text-[#B12D24]" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-11 h-11 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] cursor-pointer"
            aria-label={
              isMobileMenuOpen
                ? isFrench
                  ? 'Fermer le menu'
                  : 'Close navigation menu'
                : isFrench
                ? 'Ouvrir le menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-3 max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-5 z-50 pointer-events-auto border border-slate-200 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-500 px-3 py-1">
              {isFrench ? 'Clients' : 'Who we serve'}
            </div>
            <button
              type="button"
              onClick={() => {
                onNavigate('banks-fintech');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Banks &amp; fintech
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('networks-content');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Networks &amp; content
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('enterprise');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Enterprise &amp; public sector
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('moving-to-onix');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#B12D24] hover:bg-red-50 rounded-xl cursor-pointer"
            >
              See the migration plan
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <button
              type="button"
              onClick={() => {
                onNavigate('solutions');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Solutions
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('the-facility');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              The facility (Accra Tier IV)
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('certification');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Certification
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('sustainability');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Sustainability
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                onNavigate('fr-senegal');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-sm font-semibold text-[#243F87] cursor-pointer"
            >
              <span>Dakar, Sénégal (FR)</span>
              <span className="text-xs font-medium">2Africa</span>
            </button>

            <a
              href={activeTel}
              className="w-full px-5 py-3 text-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B12D24]" />
              <span>
                {isFrench ? `Appeler Dakar (${activePhone})` : `Call Accra (${activePhone})`}
              </span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (isFrench) {
                  onOpenTourModal();
                } else {
                  onNavigate('contact');
                }
              }}
              className="w-full px-7 py-3 text-center font-semibold text-white bg-[#151515] hover:bg-black rounded-full text-sm flex items-center justify-center transition-colors cursor-pointer"
            >
              {isFrench ? 'Demander une visite' : 'Talk to an engineer'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
