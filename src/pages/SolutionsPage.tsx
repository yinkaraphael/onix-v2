import React, { useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { PageEndBlock } from '../components/PageEndBlock';
import { CostEstimator } from '../components/CostEstimator';
import { LINX_ACCRA_URL, UPTIME_ACCRA_URL } from '../data/siteContent';
import {
  Server,
  Network,
  Shuffle,
  Headphones,
  Briefcase,
  Sun,
  ExternalLink,
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageRoute, hash?: string, notes?: string) => void;
  onOpenTourModal: () => void;
  targetHash?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onOpenTourModal,
  targetHash,
}) => {
  useEffect(() => {
    if (targetHash) {
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [targetHash]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-14 lg:pt-16 lg:pb-18 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              What you can deploy at Onix
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Colocation, carrier-neutral interconnection, remote hands, and business continuity space in Accra — plus carrier-neutral colocation at the 2Africa cable landing station in Dakar.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <div className="sticky top-16 sm:top-20 z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 flex items-center gap-2 sm:gap-3 overflow-x-auto py-3 text-sm font-medium">
          <button
            type="button"
            onClick={() => scrollToSection('colocation')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            Colocation
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('interconnection')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            Interconnection &amp; MMR
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('solar-power')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            Solar &amp; Power Layers
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('peering')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            LINX Accra &amp; Peering
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('remote-hands')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            Remote Hands
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('recovery-office')}
            className="min-h-[40px] px-4 py-2 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-200 hover:text-white cursor-pointer"
          >
            Continuity Office
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('pricing')}
            className="min-h-[40px] px-4 py-2 rounded-xl bg-[#B12D24] hover:bg-black text-white font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Scope a quote
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 py-14 sm:py-16 lg:py-20 space-y-18">
        {/* 1. Colocation */}
        <section id="colocation" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#B12D24] flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Colocation
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Accra Tier IV Constructed Facility &amp; Dakar 2Africa Landing Station
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-5 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Deploy single locking racks, multi-rack suites, or private cages in Onix Accra #1 (Phase 1 certified Tier IV Constructed Facility by Uptime Institute), or scope carrier-neutral colocation at the 2Africa cable landing station in Dakar. Applicable service-level agreements are agreed per facility and deployment contract.
              </p>
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B12D24] hover:underline"
              >
                <span>View Uptime Institute Tier IV record for Onix Accra #1, Phase 1</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
              <div className="flex flex-wrap gap-6 pt-2 text-sm sm:text-base">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="font-bold text-[#B12D24] hover:underline cursor-pointer"
                >
                  Request a tour →
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('pricing')}
                  className="font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
                >
                  Scope a commercial quotation →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interconnection */}
        <section id="interconnection" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#243F87] flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Interconnection
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Carrier-Neutral Meet-Me Room
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-5 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Our carrier-neutral Meet-Me Room lets you select your preferred network providers rather than relying on a single carrier. Dual diverse underground fiber duct entries connect external fiber routes cleanly into your rack.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Carrier neutrality</div>
                  <div className="text-slate-600 mt-1">Direct commercial relationship with your chosen networks</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Diverse paths</div>
                  <div className="text-slate-600 mt-1">Separated physical fiber entry vaults into the Accra site</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Lead times</div>
                  <div className="text-slate-600 mt-1">Confirmed with engineering per order and carrier readiness</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solar & Power Protection */}
        <section id="solar-power" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Solar &amp; layered power
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                On-Site Solar Generation Integrated with Grid, UPS &amp; Generators
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-4 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Ground-mounted solar panels on our Accra site feed into building power distribution alongside utility grid feeders, static UPS bridging, and standby diesel generators. Inspect the power plant and switchboards directly on your facility tour.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Internet Exchange & Peering */}
        <section id="peering" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <Shuffle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Internet exchange &amp; peering
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                LINX Accra Presence in Accra
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-4 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                With LINX Accra present at Onix, participating networks can keep domestic and regional traffic local inside Ghana instead of hair-pinning packets over international transit.
              </p>
              <a
                href={LINX_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#243F87] hover:underline"
              >
                <span>View LINX Accra page</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* 5. Remote Hands */}
        <section id="remote-hands" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Remote hands
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                On-Site Engineering Assistance
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-5 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Most clients visit during initial rack setup and then handle routine hardware interventions through authorised remote-hands requests with our Accra engineering team.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Power cycles</div>
                  <div className="text-slate-600 mt-1">Authorised reboots</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Component swaps</div>
                  <div className="text-slate-600 mt-1">Drives, PSUs, optics</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Patch checks</div>
                  <div className="text-slate-600 mt-1">Structured cabling</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="font-bold text-slate-900">Visual status</div>
                  <div className="text-slate-600 mt-1">Port &amp; LED checks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Continuity Office */}
        <section id="recovery-office" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Business continuity office
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                On-Site Recovery Workspace in Accra
              </p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-4 border border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Dedicated business continuity office space at our Accra campus allows banking, fintech, and enterprise operations teams to work physically alongside their hosted infrastructure if a primary corporate office is disrupted. Workspace capacity and availability are scoped on tour.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Scoped Commercial Quotation (Replaces unconfirmed USD rate calculator) */}
        <div className="pt-4">
          <CostEstimator
            onOpenTourModal={onOpenTourModal}
            onOpenContact={(notes) => onNavigate('contact', undefined, notes)}
          />
        </div>
      </div>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to our team"
      />
    </div>
  );
};
