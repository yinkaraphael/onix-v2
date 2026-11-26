import React from 'react';
import { PageRoute } from '../utils/routes';
import { PageEndBlock } from '../components/PageEndBlock';
import { PowerStoryDiagram } from '../components/PowerStoryDiagram';
import { UPTIME_ACCRA_URL, LINX_ACCRA_URL } from '../data/siteContent';
import { ExternalLink, Calendar, MessageSquare, FileCheck2 } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs sm:text-sm font-bold text-[#B12D24] uppercase tracking-wider">
              Technical Briefings &amp; Verified Records
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              Evidence and facility briefings
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Placeholder articles and sample telemetry logs have been removed pending engineering review. Explore our independent external records and illustrative power handover below, or speak with our team for site documentation.
            </p>
          </div>
        </div>
      </section>

      {/* External Verifiable Records */}
      <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  Independent Facility Award
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Uptime Institute: Onix Accra #1, Phase 1
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Direct public award record confirming Tier IV Constructed Facility certification for Onix Accra #1, Phase 1 in Greater Accra, Ghana.
                </p>
              </div>
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#B12D24] hover:underline"
              >
                <span>Open Uptime Institute record</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#243F87]">
                  Internet Exchange Presence
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  LINX Accra interconnection record
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Published London Internet Exchange overview covering LINX Accra exchange presence for domestic and regional network peering.
                </p>
              </div>
              <a
                href={LINX_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#243F87] hover:underline"
              >
                <span>Open LINX Accra page</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Illustrative Power Handover */}
          <PowerStoryDiagram />

          {/* Direct request callout instead of fictional pack downloads */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <FileCheck2 className="w-4 h-4 text-[#B12D24]" />
                <span>Technical &amp; Audit Enquiries</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Need technical documentation for an internal review?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Request an Accra facility walkthrough or speak directly with an engineer for current compliance certificates, rack specifications, or Dakar 2Africa colocation details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="min-h-[44px] px-6 py-3 bg-[#B12D24] hover:bg-black text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Request a tour</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[44px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Talk to an engineer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to an engineer"
      />
    </div>
  );
};
