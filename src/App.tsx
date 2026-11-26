import React, { useState, useEffect } from 'react';
import { PageRoute, resolveRoute, getPathForPage } from './utils/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TourBookingModal } from './components/TourBookingModal';
import { CookieConsent } from './components/CookieConsent';
import { ScrollProgressBar } from './components/ScrollProgressBar';

import { HomePage } from './pages/HomePage';
import { BuyerPage } from './pages/BuyerPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TheFacilityPage } from './pages/TheFacilityPage';
import { CertificationPage } from './pages/CertificationPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { BookATourPage } from './pages/BookATourPage';
import { SenegalPage } from './pages/SenegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<{
    page: PageRoute;
    hash?: string;
  }>(() => {
    const match = resolveRoute(window.location.pathname, window.location.hash);
    return { page: match.page, hash: match.hash };
  });

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  const [contactInitialNotes, setContactInitialNotes] = useState<string>('');

  const isFrench = currentRoute.page === 'fr-senegal';

  useEffect(() => {
    const handleNavigationChange = () => {
      const match = resolveRoute(window.location.pathname, window.location.hash);
      setCurrentRoute({ page: match.page, hash: match.hash });
    };

    window.addEventListener('popstate', handleNavigationChange);
    window.addEventListener('hashchange', handleNavigationChange);
    return () => {
      window.removeEventListener('popstate', handleNavigationChange);
      window.removeEventListener('hashchange', handleNavigationChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = isFrench ? 'fr' : 'en';
  }, [isFrench]);

  const navigateTo = (page: PageRoute, hash?: string, notes?: string) => {
    if (page === 'contact' && notes) {
      setContactInitialNotes(notes);
    }

    const path = getPathForPage(page);
    const fullPath = hash ? `${path}#${hash}` : path;

    if (window.location.pathname !== path || window.location.hash !== (hash ? `#${hash}` : '')) {
      window.history.pushState(null, '', fullPath);
    }

    setCurrentRoute({ page, hash });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const titleMap: Record<PageRoute, string> = {
      home: 'Onix | Tier IV in Accra and Colocation in Dakar',
      'banks-fintech': 'Banks & Fintech Colocation | Onix Accra Tier IV',
      'networks-content': 'Networks & Content Interconnection | Onix Meet-Me Room Accra',
      enterprise: 'Enterprise & Public Sector Colocation | Onix Ghana',
      'moving-to-onix': 'See the Migration Plan | Onix Data Centres',
      solutions: 'Colocation, Interconnection & Remote Hands | Onix Solutions',
      'the-facility': 'Accra Tier IV Constructed Facility | Onix Data Centres',
      certification: 'Uptime Institute Tier IV & Records | Onix Data Centres',
      sustainability: 'Solar & Water Architecture | Onix Sustainability',
      about: 'About Onix Data Centres | Accra & Dakar',
      insights: 'Technical Briefings & External Records | Onix Data Centres',
      contact: 'Talk to Our Team | Onix Data Centres Accra & Dakar',
      'book-a-tour': 'Request a Facility Tour | Onix Accra or Live Video',
      'fr-senegal': "Colocation station d'atterrissement 2Africa Dakar | Onix Sénégal",
    };

    document.title = titleMap[page] || 'Onix | Tier IV in Accra and Colocation in Dakar';
  };

  const renderCurrentPage = () => {
    switch (currentRoute.page) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'banks-fintech':
        return (
          <BuyerPage
            category="banks-fintech"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'networks-content':
        return (
          <BuyerPage
            category="networks-content"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'enterprise':
        return (
          <BuyerPage
            category="enterprise"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'moving-to-onix':
        return (
          <BuyerPage
            category="moving-to-onix"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'solutions':
        return (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            targetHash={currentRoute.hash}
          />
        );

      case 'the-facility':
        return (
          <TheFacilityPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'certification':
        return (
          <CertificationPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'sustainability':
        return (
          <SustainabilityPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'insights':
        return (
          <InsightsPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'contact':
        return (
          <ContactPage
            initialNotes={contactInitialNotes}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'book-a-tour':
        return <BookATourPage onNavigate={navigateTo} />;

      case 'fr-senegal':
        return (
          <SenegalPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#151515] font-['Source_Sans_3',sans-serif] selection:bg-[#B12D24] selection:text-white">
      <ScrollProgressBar />

      <Header
        currentPage={currentRoute.page}
        onNavigate={navigateTo}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      <main className="flex-1 pt-16 sm:pt-20 pb-16 lg:pb-0 bg-white">
        {renderCurrentPage()}
      </main>

      <Footer
        currentPage={currentRoute.page}
        onNavigate={navigateTo}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      <StickyMobileBar
        onOpenTourModal={() => setIsTourModalOpen(true)}
        isFrench={isFrench}
        isHidden={isCookieBannerVisible}
      />

      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        language={isFrench ? 'fr' : 'en'}
      />

      <CookieConsent
        forceOpen={isCookieSettingsOpen}
        isFrench={isFrench}
        onVisibilityChange={setIsCookieBannerVisible}
        onCloseSettings={() => setIsCookieSettingsOpen(false)}
      />
    </div>
  );
}
