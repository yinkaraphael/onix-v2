import React from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PageEndBlock } from '../components/PageEndBlock';
import { FACILITY_SPECS, UPTIME_ACCRA_URL, LINX_ACCRA_URL } from '../data/siteContent';
import { PowerStoryDiagram } from '../components/PowerStoryDiagram';
import {
  ShieldCheck,
  Wind,
  Lock,
  Network,
  Droplet,
  Maximize2,
  Calendar,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';

interface TheFacilityPageProps {
  onNavigate: (page: PageRoute, hash?: string, notes?: string) => void;
  onOpenTourModal: () => void;
}

export const TheFacilityPage: React.FC<TheFacilityPageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs sm:text-sm font-bold text-[#B12D24] uppercase tracking-wider">
              Onix Accra #1, Phase 1 · Uptime Institute Tier IV Constructed Facility
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Montserrat',sans-serif] text-balance">
              Inside our Tier IV Constructed Facility in Accra
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Onix Accra #1, Phase 1 holds an Uptime Institute Tier IV Constructed Facility award, meaning critical power and cooling paths have independent fault-tolerant redundancy. Inspect the building in person or by live video with the engineers who run it.
            </p>

            <div>
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#B12D24] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
              >
                <span>Verify award record on uptimeinstitute.com (Onix Accra #1, Phase 1)</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="min-h-[48px] px-7 py-3.5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Request a tour</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[48px] px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
              >
                <MessageSquare className="w-5 h-5 text-slate-700 shrink-0" />
                <span>Talk to an engineer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {/* Facility Deep Dive Sections */}
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 py-14 lg:py-20 space-y-16">
        <div id="power">
          <PowerStoryDiagram />
        </div>

        {/* 6 Engineering Pillars (Scrubbed of unverified metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B12D24] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Sited outside Accra flood basins
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Built on raised ground along the Dodowa Road corridor at Amrahia-Katamanso to reduce exposure to central city flooding and urban road congestion.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#243F87] flex items-center justify-center">
              <Wind className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Cold-aisle cooling
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Cold-aisle containment and redundant precision cooling units keep warm exhaust air separated from server intake paths without relying on municipal water.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Multi-stage physical security
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Biometric access checks, man-trap airlocks, CCTV surveillance, logged visitor escorting, and early-warning smoke detection with gas fire suppression.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Network className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Carrier-neutral connectivity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A carrier-neutral Meet-Me Room served by diverse underground fiber entries and{' '}
              <a
                href={LINX_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#243F87] hover:underline"
              >
                LINX Accra interconnection
              </a>
              .
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-800 flex items-center justify-center">
              <Droplet className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Independent water supply
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              On-site deep borehole groundwater treated through reverse osmosis supports closed-loop cooling independent of municipal water supply interruptions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-3.5 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <Maximize2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Expandable West Africa footprint
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Scale from single racks to dedicated cages in Accra, or pair your Ghana deployment with carrier-neutral colocation at the 2Africa cable landing station in Dakar.
            </p>
          </div>
        </div>

        {/* Scope boundary callout */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-3">
          <div className="flex items-center gap-3 text-slate-900 font-semibold text-lg sm:text-xl">
            <ShieldCheck className="w-6 h-6 text-[#B12D24] shrink-0" />
            <h2 className="font-['Montserrat',sans-serif]">What a Tier IV facility does not do</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tier IV Constructed Facility certification applies specifically to physical infrastructure fault tolerance for Onix Accra #1, Phase 1 — continuous power paths, concurrent maintainability, cooling, and facility resilience. It does not replace application-level high availability, database clustering, off-site backups, or contractual SLA terms negotiated in your service agreement.
          </p>
        </div>

        {/* Verified Facility Architecture Table */}
        <div id="specs" className="pt-4">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Architecture &amp; Facility Overview
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-5 sm:px-8 font-semibold w-1/3">Area</th>
                  <th className="py-4 px-5 sm:px-8 font-semibold w-2/3">Verified Overview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FACILITY_SPECS.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-4 px-5 sm:px-8 font-semibold text-slate-900">
                      {spec.item}
                    </td>
                    <td className="py-4 px-5 sm:px-8 text-slate-700 leading-relaxed">
                      {spec.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to an engineer"
      />
    </div>
  );
};
