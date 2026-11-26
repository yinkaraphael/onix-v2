import React from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PowerStoryDiagram } from '../components/PowerStoryDiagram';
import { FacilityBrowserVideo } from '../components/FacilityBrowserVideo';
import { EntranceSection } from '../components/EntranceSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageEndBlock } from '../components/PageEndBlock';
import { LEADERSHIP_OVERVIEW } from '../data/siteContent';
import {
  ShieldCheck,
  Calendar,
  MessageSquare,
  Network,
  Building2,
  Truck,
  ArrowUpRight,
  Check,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute, hash?: string, notes?: string) => void;
  onOpenTourModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-18">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10 text-center">
          {/* Short readable Welcome line */}
          <p className="text-sm sm:text-base font-bold text-[#B12D24] tracking-wide mb-3 sm:mb-4">
            Welcome to Onix
          </p>

          {/* Authoritative Hero Headline scaled cleanly across 320px–1440px */}
          <h1 className="text-[34px] sm:text-5xl lg:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-4xl lg:max-w-5xl mx-auto font-['Montserrat',sans-serif] text-balance">
            Built for Accra&apos;s power cuts.
          </h1>

          {/* Hero supporting copy */}
          <p className="mt-5 text-base sm:text-xl lg:text-2xl text-slate-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Explore how our Accra data centre is designed to keep critical equipment powered. Meet the team and see the facility in person or by live video.
          </p>

          {/* Action hierarchy: Primary Request a tour + Secondary Talk to an engineer */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="min-h-[48px] px-7 py-3.5 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-full transition-colors text-base sm:text-lg flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 shrink-0" />
              <span>Request a tour</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="min-h-[48px] px-7 py-3.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900 font-semibold rounded-full transition-colors text-base sm:text-lg flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-slate-700 shrink-0" />
              <span>Talk to an engineer</span>
            </button>
          </div>

          {/* Tour context: format, what visitors see, what happens after a request is sent */}
          <p className="mt-5 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-slate-800">Format &amp; walkthrough:</span> in person at Amrahia-Katamanso, Accra or by live video — inspect power protection, data halls, and the Meet-Me Room. After you send a request, our team replies to confirm your format, timing, and access details.
          </p>
        </div>

        {/* Real Facility Drone Video */}
        <div className="mt-10 sm:mt-12 max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10">
          <FacilityBrowserVideo />
        </div>
      </section>

      {/* 2. Factual Proof Strip (Uptime Institute Tier IV Accra #1 Phase 1 & LINX Accra) */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {/* 3. Illustrative Power Handover (Defaults to Grid cut) */}
      <EntranceSection className="py-14 lg:py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <PowerStoryDiagram />
        </div>
      </EntranceSection>

      {/* 4. Audience-Led Navigation */}
      <EntranceSection className="py-14 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Montserrat',sans-serif] text-balance">
                Built for organisations with critical infrastructure
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mt-3 leading-relaxed">
                Start from what your audit, network, or operations team needs to verify, rather than wading through generic product tiers.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="min-h-[44px] px-7 py-3 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-full transition-colors text-sm sm:text-base shrink-0 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2 cursor-pointer"
            >
              View all solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {/* Card 1: Banks & Fintech */}
            <ScrollReveal staggerIndex={0}>
              <button
                type="button"
                onClick={() => onNavigate('banks-fintech')}
                className="w-full text-left bg-white rounded-3xl p-7 lg:p-8 hover:border-slate-300 transition-colors flex flex-col justify-between group cursor-pointer h-full border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B12D24] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Banks &amp; fintech
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Primary hosting, disaster recovery, and on-site business continuity workspace in an Uptime Institute Tier IV Constructed Facility in Accra.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-semibold text-[#B12D24] group-hover:text-black transition-colors">
                  <span>Explore colocation for banks</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </button>
            </ScrollReveal>

            {/* Card 2: Networks & Content */}
            <ScrollReveal staggerIndex={1}>
              <button
                type="button"
                onClick={() => onNavigate('networks-content')}
                className="w-full text-left bg-white rounded-3xl p-7 lg:p-8 hover:border-slate-300 transition-colors flex flex-col justify-between group cursor-pointer h-full border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#243F87]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#243F87] flex items-center justify-center">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Networks &amp; content
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    A carrier-neutral Meet-Me Room in Accra with LINX Accra interconnection, plus carrier-neutral colocation at the 2Africa cable landing station in Dakar.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-semibold text-[#243F87] group-hover:text-black transition-colors">
                  <span>See interconnection options</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </button>
            </ScrollReveal>

            {/* Card 3: Enterprise & Public Sector */}
            <ScrollReveal staggerIndex={2}>
              <button
                type="button"
                onClick={() => onNavigate('enterprise')}
                className="w-full text-left bg-white rounded-3xl p-7 lg:p-8 hover:border-slate-300 transition-colors flex flex-col justify-between group cursor-pointer h-full border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Enterprise &amp; public sector
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Move critical servers out of office server rooms and away from utility power cuts while keeping equipment physically hosted in Ghana.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#B12D24] transition-colors">
                  <span>Explore hosting in Ghana</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </button>
            </ScrollReveal>

            {/* Card 4: Moving to Onix */}
            <ScrollReveal staggerIndex={3}>
              <button
                type="button"
                onClick={() => onNavigate('moving-to-onix')}
                className="w-full text-left bg-white rounded-3xl p-7 lg:p-8 hover:border-slate-300 transition-colors flex flex-col justify-between group cursor-pointer h-full border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Moving to Onix
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    A staged migration workflow covering discovery, site walkthrough, pre-cabled racks, scheduled cutover, and operational handover.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-semibold text-emerald-800 group-hover:text-black transition-colors">
                  <span>See the migration plan</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </EntranceSection>

      {/* 5. Practical Location & Remote Hands Section (Deep Navy #243F87, no unconfirmed figures) */}
      <EntranceSection className="py-14 lg:py-20 bg-[#243F87] text-white">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat',sans-serif] leading-tight text-white text-balance">
                Why we built outside central Accra congestion
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
                Operating at Amrahia-Katamanso on the Dodowa Road corridor keeps the Accra facility away from city-centre traffic congestion and urban flood basins, with space for raised ground construction and on-site solar generation.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
                Most client IT teams visit during onboarding, then run routine day-to-day physical work remotely through our on-site engineers.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('the-facility')}
                  className="min-h-[44px] px-6 py-3 bg-white text-[#243F87] hover:bg-blue-50 font-semibold rounded-full text-sm sm:text-base transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Inspect Accra facility architecture
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-[44px] px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-sm sm:text-base transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Talk to an engineer
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 rounded-3xl p-7 sm:p-8 border border-white/15 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                On-site remote hands
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-blue-100">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Controlled power cycles and visual status checks on your racks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Fiber patching and structured cabling coordination inside the Meet-Me Room</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Authorised physical swap assistance for drives, optics, and spare modules</span>
                </li>
              </ul>
              <p className="pt-4 border-t border-white/15 text-xs sm:text-sm text-blue-200 leading-relaxed">
                Target response commitments and escalation contacts are confirmed in your service schedule before deployment.
              </p>
            </div>
          </div>
        </div>
      </EntranceSection>

      {/* 6. The Team (Clean text layout where staff photography is not yet cleared) */}
      <EntranceSection className="py-14 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Montserrat',sans-serif]">
                Meet the operations team
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mt-2.5 leading-relaxed">
                Speak directly with the engineering and operational leads responsible for power, interconnection, and audit readiness.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="min-h-[44px] px-7 py-3 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-full transition-colors text-sm sm:text-base shrink-0 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2 cursor-pointer"
            >
              About Onix Data Centres
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_OVERVIEW.map((item, idx) => (
              <ScrollReveal key={idx} staggerIndex={idx} className="h-full">
                <div className="bg-white rounded-3xl p-7 flex flex-col justify-between h-full border border-slate-200/80">
                  <div>
                    {item.name && (
                      <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                        {item.name}
                      </h3>
                    )}
                    <p
                      className={`${
                        item.name
                          ? 'text-sm text-[#B12D24] font-semibold mt-1'
                          : 'font-bold text-slate-900 text-lg sm:text-xl font-["Montserrat",sans-serif]'
                      }`}
                    >
                      {item.role}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    {item.statusNote}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </EntranceSection>

      {/* 7. Distinct Dakar Senegal Band (No Tier labels) */}
      <EntranceSection className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="bg-[#243F87] text-white p-7 sm:p-9 lg:p-10 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-['Montserrat',sans-serif]">
                Also in Dakar, Senegal.
              </h2>
              <p className="text-sm sm:text-base text-blue-100 mt-1.5 max-w-2xl leading-relaxed">
                Carrier-neutral colocation at the 2Africa cable landing station. For deployments requiring Uptime Institute Tier IV certification, see our Accra facility.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('fr-senegal')}
              className="min-h-[44px] px-7 py-3 bg-white text-[#243F87] hover:bg-blue-50 active:bg-blue-100 font-semibold text-sm sm:text-base rounded-full transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              Visitez la page Dakar (FR)
            </button>
          </div>
        </div>
      </EntranceSection>

      {/* 8. Consistent Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to an engineer"
      />
    </div>
  );
};
