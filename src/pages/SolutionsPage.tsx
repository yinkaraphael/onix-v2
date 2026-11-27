import React, { useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { getAssetUrl } from '../utils/assets';
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
  Calendar,
  ArrowDown,
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
  const heroBgUrl = getAssetUrl('/assets/aistudio/ONIX_DATA_CENTER-_KEELSON_STUDIOS-62_4acb453c.jpg');

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
    <div className="space-y-0 bg-white">
      {/* Hero Header (+30% taller) with Facility Corridor Photography & Dark Overlay */}
      <section className="relative -mt-16 sm:-mt-20 min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex items-center pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28 bg-[#0B1222] text-white overflow-hidden">
        <img
          src={heroBgUrl}
          alt="Cold-aisle server rack corridor inside Onix Data Centres"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Measured dark scrims for high contrast white text while preserving rack corridor detail */}
        <div className="absolute inset-0 bg-[#09101D]/45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#09101D]/82 via-[#09101D]/52 to-[#09101D]/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#09101D]/78 via-transparent to-[#09101D]/40"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-200">
              Colocation &amp; Infrastructure · Accra &amp; Dakar
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.08]">
              What you can deploy at Onix
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-slate-100/90 leading-relaxed max-w-3xl">
              Colocation, carrier-neutral interconnection, remote hands, and business continuity space in Accra — plus carrier-neutral colocation at the 2Africa cable landing station in Dakar.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="min-h-[48px] px-7 py-3.5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1222]"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Request a tour</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('pricing')}
                className="min-h-[48px] px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1222]"
              >
                <span>Scope a commercial quote</span>
                <ArrowDown className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stacked Infrastructure Sections: Alternating Light Grey / White backgrounds ending on White before CostEstimator */}
      {/* 1. Colocation (Light Grey) */}
      <section
        id="colocation"
        className="scroll-mt-24 bg-[#F4F5F7] py-20 sm:py-24 lg:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block: Icon + Heading + Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-red-100 text-[#B12D24] flex items-center justify-center shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Colocation
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                01 · Accra Tier IV Constructed Facility &amp; Dakar 2Africa Landing Station
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Deploy single locking racks, multi-rack suites, or private cages in Onix Accra #1 (Phase 1 certified Tier IV Constructed Facility by Uptime Institute), or scope carrier-neutral colocation at the 2Africa cable landing station in Dakar. Applicable service-level agreements are agreed per facility and deployment contract.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 overflow-hidden">
              <div className="p-6 sm:p-8 space-y-2.5">
                <div className="text-xs font-semibold tracking-wide text-[#B12D24]">
                  Accra, Ghana
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Onix Accra #1 · Phase 1 Tier IV Constructed Facility
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Single racks, contiguous rack pods, and dedicated cages engineered for fault-tolerant primary hosting and disaster recovery across West Africa.
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-2.5">
                <div className="text-xs font-semibold tracking-wide text-[#243F87]">
                  Dakar, Senegal
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Carrier-neutral colocation at the 2Africa landing station
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Direct colocation footprint co-located with international subsea landing infrastructure in Dakar. Tier and certification details confirmed on commercial scoping.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base">
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#B12D24] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
              >
                <span>View Uptime Institute Tier IV record for Onix Accra #1, Phase 1</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={onOpenTourModal}
                className="font-bold text-slate-900 hover:text-[#B12D24] transition-colors cursor-pointer whitespace-nowrap"
              >
                Request a tour →
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('pricing')}
                className="font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                Scope a commercial quotation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interconnection (White) */}
      <section
        id="interconnection"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-blue-100 text-[#243F87] flex items-center justify-center shrink-0">
              <Network className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Interconnection
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                02 · Carrier-Neutral Meet-Me Room
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Our carrier-neutral Meet-Me Room lets you select your preferred network providers rather than relying on a single carrier. Dual diverse underground fiber duct entries connect external fiber routes cleanly into your rack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#F8F9FA] rounded-2xl border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 overflow-hidden">
              <div className="p-6 sm:p-7 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Carrier neutrality
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct commercial relationship with your chosen terrestrial and subsea network providers.
                </p>
              </div>

              <div className="p-6 sm:p-7 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Diverse paths
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Separated physical fiber entry vaults routing into the Accra facility and Meet-Me Room.
                </p>
              </div>

              <div className="p-6 sm:p-7 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Provisioning lead times
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Confirmed directly with engineering per cross-connect order and carrier circuit readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solar & layered power (Light Grey) */}
      <section
        id="solar-power"
        className="scroll-mt-24 bg-[#F4F5F7] py-20 sm:py-24 lg:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Solar &amp; layered power
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                03 · On-Site Solar Generation Integrated with Grid, UPS &amp; Generators
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Ground-mounted solar panels on our Accra site feed into building power distribution alongside utility grid feeders, static UPS bridging, and standby diesel generators. Inspect the power plant and switchboards directly on your facility tour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 overflow-hidden">
              <div className="p-6 space-y-1.5">
                <div className="text-sm font-bold text-slate-900">On-site solar</div>
                <p className="text-sm text-slate-600">Ground-mounted array feeding site power distribution.</p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-sm font-bold text-slate-900">Utility feeders</div>
                <p className="text-sm text-slate-600">Monitored grid intake with automated disturbance detection.</p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-sm font-bold text-slate-900">Static UPS</div>
                <p className="text-sm text-slate-600">Continuous clean power bridging with zero transfer gap to racks.</p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-sm font-bold text-slate-900">Standby generators</div>
                <p className="text-sm text-slate-600">On-site diesel generation for extended grid outage endurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Internet exchange & peering (White) */}
      <section
        id="peering"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-slate-200/80 text-slate-800 flex items-center justify-center shrink-0">
              <Shuffle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Internet exchange &amp; peering
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                04 · LINX Accra Presence in Accra
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              With LINX Accra present at Onix, participating networks can keep domestic and regional traffic local inside Ghana instead of hair-pinning packets over international transit.
            </p>

            <a
              href={LINX_ACCRA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-sm font-semibold text-[#243F87] transition-colors whitespace-nowrap shrink-0 self-start lg:self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#243F87]"
            >
              <span>View LINX Accra page</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Remote hands (Light Grey) */}
      <section
        id="remote-hands"
        className="scroll-mt-24 bg-[#F4F5F7] py-20 sm:py-24 lg:py-28 border-b border-slate-200/80"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Remote hands
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                05 · On-Site Engineering Assistance
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
              Most clients visit during initial rack setup and then handle routine hardware interventions through authorised remote-hands requests with our Accra engineering team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 overflow-hidden">
              <div className="p-6 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Power cycles
                </div>
                <p className="text-sm text-slate-600">
                  Authorised hardware reboots and PDU port checks
                </p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Component swaps
                </div>
                <p className="text-sm text-slate-600">
                  Drives, PSUs, transceivers, and optical modules
                </p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Patch checks
                </div>
                <p className="text-sm text-slate-600">
                  Structured copper and fiber cabling verification
                </p>
              </div>
              <div className="p-6 space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Visual status
                </div>
                <p className="text-sm text-slate-600">
                  Port status, front-panel alerts, and LED checks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business continuity office (White — blends seamlessly into "What will it cost?" below) */}
      <section
        id="recovery-office"
        className="scroll-mt-24 bg-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-22"
      >
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          {/* Top Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 max-w-4xl">
            <div className="w-13 h-13 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] tracking-tight">
                Business continuity office
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                06 · On-Site Recovery Workspace in Accra
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Dedicated business continuity office space at our Accra campus allows banking, fintech, and enterprise operations teams to work physically alongside their hosted infrastructure if a primary corporate office is disrupted. Workspace capacity and availability are scoped on tour.
            </p>

            <button
              type="button"
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-[#B12D24] text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0 self-start lg:self-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <span>Inspect continuity workspace on tour</span>
            </button>
          </div>

          <div className="pt-8 border-b border-slate-200" aria-hidden="true" />
        </div>
      </section>

      {/* 7. Scoped Commercial Quotation on matching White canvas */}
      <div className="bg-white pt-4 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
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
