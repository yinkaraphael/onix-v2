import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PageEndBlock } from '../components/PageEndBlock';
import { UPTIME_ACCRA_URL, LINX_ACCRA_URL } from '../data/siteContent';
import {
  ChevronDown,
  Check,
  Calendar,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';

export type BuyerCategory =
  | 'banks-fintech'
  | 'networks-content'
  | 'enterprise'
  | 'moving-to-onix';

interface BuyerContent {
  title: string;
  sectionLabel: string;
  headline: string;
  subhead: string;
  secondaryCtaLabel: string;
  worries: {
    worry: string;
    answer: string;
    basis: string;
  }[];
  whatWeProvide: string[];
  mostClientsStartWith: string;
  externalVerification?: {
    label: string;
    url: string;
  };
  movingTimeline?: {
    step: number;
    title: string;
    desc: string;
    phase: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const BUYER_DATA: Record<BuyerCategory, BuyerContent> = {
  'banks-fintech': {
    title: 'Banks & Fintech',
    sectionLabel: 'Banking & Financial Services',
    headline: 'Built for the audit, not just the uptime.',
    subhead:
      'Ghanaian banks and fintechs evaluate Onix Accra #1 for primary hosting, disaster recovery, and on-site business continuity workspace inside a Tier IV Constructed Facility.',
    secondaryCtaLabel: 'Talk to an engineer',
    externalVerification: {
      label: 'Inspect the Uptime Institute Tier IV award record for Onix Accra #1, Phase 1',
      url: UPTIME_ACCRA_URL,
    },
    worries: [
      {
        worry: '"We need infrastructure redundancy verified by an independent body."',
        answer:
          'Onix Accra #1, Phase 1 holds an Uptime Institute Tier IV Constructed Facility award, meaning critical power and cooling paths are independently constructed for fault tolerance.',
        basis: 'Uptime Institute award record',
      },
      {
        worry: '"Will this support a Bank of Ghana risk or compliance walkthrough?"',
        answer:
          'Your risk, compliance, and audit teams can request an on-site or live video walkthrough to inspect physical access controls, power handover equipment, and maintenance documentation.',
        basis: 'Site audit walkthrough',
      },
      {
        worry: '"Where can operational staff work during an office disruption?"',
        answer:
          'Onix provides business continuity office workspace at the Accra facility so authorised IT and operations staff can work alongside hosted systems when required.',
        basis: 'Accra facility inspection',
      },
    ],
    whatWeProvide: [
      'Private racks, multi-rack deployments, and secured cages',
      'Disaster-recovery colocation supported by diverse fiber routes',
      'On-site business continuity workspace for recovery teams',
      'Carrier-neutral Meet-Me Room cross-connects for payment and telecom links',
      'On-site remote-hands support for authorised physical interventions',
      'Audit and technical walkthrough scheduling for risk committees',
    ],
    mostClientsStartWith:
      'Dedicated racks in a private cage paired with business continuity seats for critical operations, scoping exact power density and SLA terms directly with our commercial team.',
    faqs: [
      {
        question: 'Can our internal or external auditors inspect the Accra facility?',
        answer:
          'Yes. Request a compliance tour and our operations team will arrange an in-person visit at Amrahia-Katamanso, Accra to inspect physical infrastructure, access controls, and available audit records.',
      },
      {
        question: 'Which site carries the Tier IV Constructed Facility award?',
        answer:
          'Onix Accra #1, Phase 1 holds the Uptime Institute Tier IV Constructed Facility certification. Our Dakar site provides carrier-neutral colocation at the 2Africa cable landing station and does not carry a Tier label on this site.',
      },
      {
        question: 'Where is equipment physically hosted?',
        answer:
          'For Accra deployments, your racks reside at our Amrahia-Katamanso data centre in Greater Accra, Ghana.',
      },
    ],
  },

  'networks-content': {
    title: 'Networks & Content',
    sectionLabel: 'Carrier-Neutral Interconnection',
    headline: 'One neutral room. Your choice of carriers.',
    subhead:
      'Colocate in our carrier-neutral Meet-Me Room in Accra with LINX Accra presence, alongside our carrier-neutral colocation site at the 2Africa cable landing station in Dakar.',
    secondaryCtaLabel: 'Talk to an engineer',
    externalVerification: {
      label: 'View LINX Accra network presence record',
      url: LINX_ACCRA_URL,
    },
    worries: [
      {
        worry: '"Are we locked into a single upstream carrier?"',
        answer:
          'No. Onix operates a carrier-neutral Meet-Me Room in Accra so networks, ISPs, and enterprises contract directly with their preferred connectivity providers.',
        basis: 'Carrier-neutral MMR',
      },
      {
        worry: '"How does local internet exchange peering fit in?"',
        answer:
          'LINX Accra has a documented presence at Onix in Accra, helping participating networks exchange local and regional traffic directly without hair-pinning internationally.',
        basis: 'LINX Accra record',
      },
      {
        worry: '"Can we deploy in both Accra and Dakar with one operator?"',
        answer:
          'Yes. Onix operates our Tier IV Constructed Facility in Accra and carrier-neutral colocation at the 2Africa landing station in Dakar.',
        basis: 'West Africa footprint',
      },
    ],
    whatWeProvide: [
      'Carrier-neutral Meet-Me Room colocation in Accra',
      'Single-mode and multi-mode fiber cross-connect provisioning',
      'Access to the LINX Accra internet exchange presence',
      'Carrier-neutral colocation at the 2Africa cable landing station in Dakar',
      'Dual diverse underground cable entry routes into the Accra building',
      'On-site remote hands for optical patching and hardware checks',
    ],
    mostClientsStartWith:
      'One or more racks with redundant fiber cross-connects into the Meet-Me Room, expanding peering and capacity as traffic grows.',
    faqs: [
      {
        question: 'How do carrier cross-connects work at Onix?',
        answer:
          'Because the Meet-Me Room is carrier-neutral, you contract transit or wavelengths directly with your chosen carrier and place a cross-connect order through Onix operations.',
      },
      {
        question: 'Can we interconnect at the Dakar 2Africa landing station?',
        answer:
          'Yes. Dedicated Dakar enquiries are handled by our Senegal team in French and English; visit the Dakar (FR) page for direct contact details.',
      },
      {
        question: 'What information do we need before requesting a cross-connect tour?',
        answer:
          'An outline of preferred carriers, fiber types, and power per rack helps our engineering team prepare relevant routing details for your walkthrough.',
      },
    ],
  },

  enterprise: {
    title: 'Enterprise & Public Sector',
    sectionLabel: 'Enterprise Colocation in Ghana',
    headline: 'Move critical servers out of office power cuts.',
    subhead:
      'Replace fragmented office server rooms with layered power protection, physical security, and on-site engineering support at our facility in Greater Accra.',
    secondaryCtaLabel: 'Talk to an engineer',
    externalVerification: {
      label: 'Verify Uptime Institute Tier IV award for Onix Accra #1, Phase 1',
      url: UPTIME_ACCRA_URL,
    },
    worries: [
      {
        worry: '"Our office generator and UPS already keep servers online."',
        answer:
          'Office server rooms often expose organisations to single points of failure across utility cuts, generator servicing, battery ageing, and local cooling disruptions.',
        basis: 'Layered facility design',
      },
      {
        worry: '"Moving live business applications feels risky."',
        answer:
          'We scope discovery, pre-cabling, and staged cutover steps jointly with your IT team before any production server leaves your office.',
        basis: 'Staged migration process',
      },
      {
        worry: '"Does our infrastructure stay inside Ghana?"',
        answer:
          'Yes. Equipment hosted at Onix Accra remains physically inside Greater Accra under your administrative control and chosen network routing.',
        basis: 'Accra physical residency',
      },
    ],
    whatWeProvide: [
      'Secure locking racks tailored to your power density',
      'Multi-layer power protection combining solar, grid, UPS, and generators',
      'Cold-aisle containment and closed-loop precision cooling',
      'On-site engineering assistance for physical checks and reboots',
      'Biometric access control, CCTV, and early-warning smoke detection',
      'Scoped commercial quotations matched to actual rack and power needs',
    ],
    mostClientsStartWith:
      'Consolidating office server stacks into one or two secured racks in Accra while maintaining direct administrative control over software and data.',
    faqs: [
      {
        question: 'Do we keep full administrative control of our servers and software?',
        answer:
          'Yes. You supply, configure, and manage your own hardware, operating systems, and applications while Onix provides physical power, cooling, security, and remote hands.',
      },
      {
        question: 'How do our staff connect from head office to hosted racks?',
        answer:
          'Your chosen telecom carrier establishes private fiber or encrypted VPN circuits between your offices and your racks via our Meet-Me Room.',
      },
      {
        question: 'How do we visit before making a decision?',
        answer:
          'Use Request a tour to book an in-person walkthrough in Amrahia-Katamanso, Accra or a live video tour with an Onix engineer.',
      },
    ],
  },

  'moving-to-onix': {
    title: 'Moving to Onix',
    sectionLabel: 'Migration Planning',
    headline: 'Moving is the worry. We structure the plan.',
    subhead:
      'Work through discovery, technical inspection, pre-cabling, and cutover with engineers who plan the physical handover alongside your team.',
    secondaryCtaLabel: 'Talk to an engineer',
    externalVerification: {
      label: 'Verify Uptime Institute Tier IV award for Onix Accra #1, Phase 1',
      url: UPTIME_ACCRA_URL,
    },
    worries: [
      {
        worry: '"We cannot risk unplanned downtime during the move."',
        answer:
          'Cutovers are scheduled during quiet maintenance windows with racks pre-cabled and cross-connects tested beforehand so live switchover risk stays minimal.',
        basis: 'Pre-cabled readiness',
      },
      {
        worry: '"How do we align procurement, risk, and IT leadership?"',
        answer:
          'After discovery and site inspection, we provide a scoped commercial proposal and physical schedule tailored to your rack footprint and cutover dates.',
        basis: 'Scoped proposal step',
      },
      {
        worry: '"Who checks equipment on site once it is racked?"',
        answer:
          'Once live, your IT leads coordinate directly with Onix facility operations for authorised physical interventions and inspections.',
        basis: 'Operational handover',
      },
    ],
    whatWeProvide: [
      'Technical discovery call to map rack counts, power feeds, and carriers',
      'In-person or live video walkthrough of the Accra data hall and MMR',
      'Itemised commercial quotation and onboarding scope',
      'Pre-wired rack allocation and labelled carrier cross-connect preparation',
      'Coordinated quiet-hours physical cutover support',
      'Structured operational handover to facility engineering staff',
    ],
    mostClientsStartWith:
      'A technical discovery conversation and walkthrough of the Accra hall to verify power feeds, carrier presence, and cutover sequencing before approving a move.',
    movingTimeline: [
      {
        step: 1,
        title: 'Technical discovery',
        desc: 'Review existing server inventory, power feed requirements, telecom circuits, and critical cutover constraints.',
        phase: 'Stage 01',
      },
      {
        step: 2,
        title: 'Facility tour (in person or live video)',
        desc: 'Inspect power protection equipment, data hall aisles, and Meet-Me Room patching with an Onix engineer.',
        phase: 'Stage 02',
      },
      {
        step: 3,
        title: 'Scoped commercial proposal',
        desc: 'Confirm rack footprint, power capacity, SLA terms, and recurring items before committing.',
        phase: 'Stage 03',
      },
      {
        step: 4,
        title: 'Preparation & pre-cabling',
        desc: 'Allocate racks, verify carrier fiber patching, and test circuits prior to physical equipment transport.',
        phase: 'Stage 04',
      },
      {
        step: 5,
        title: 'Scheduled cutover window',
        desc: 'Transfer or stage hardware during agreed quiet hours alongside your engineers until workloads verify online.',
        phase: 'Stage 05',
      },
      {
        step: 6,
        title: 'Operations handover',
        desc: 'Finalise access lists, remote-hands procedures, and ongoing operations contacts.',
        phase: 'Stage 06',
      },
    ],
    faqs: [
      {
        question: 'Can we migrate workloads in phases instead of one move?',
        answer:
          'Yes. Many teams stage disaster recovery or non-production racks first to validate network links before moving primary production systems.',
      },
      {
        question: 'How long does onboarding take?',
        answer:
          'Timelines depend on rack count, custom cage build-out, and carrier lead times. Your Onix engineer confirms a realistic schedule during scoping.',
      },
      {
        question: 'Can our own staff attend physical racking?',
        answer:
          'Yes. Authorised members of your technical team can work on site alongside Onix engineers during scheduled cutover windows.',
      },
    ],
  },
};

interface BuyerPageProps {
  category: BuyerCategory;
  onNavigate: (page: PageRoute, hash?: string, notes?: string) => void;
  onOpenTourModal: () => void;
}

export const BuyerPage: React.FC<BuyerPageProps> = ({
  category,
  onNavigate,
  onOpenTourModal,
}) => {
  const content = BUYER_DATA[category];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="bg-white pt-12 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs sm:text-sm font-bold text-[#B12D24] uppercase tracking-wider">
              {content.sectionLabel}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Montserrat',sans-serif] text-balance">
              {content.headline}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              {content.subhead}
            </p>

            {content.externalVerification && (
              <div>
                <a
                  href={content.externalVerification.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#B12D24] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
                >
                  <span>{content.externalVerification.label}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </div>
            )}

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
                <span>{content.secondaryCtaLabel}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
              Tours run in person at Amrahia-Katamanso, Accra or by live video and cover power protection, data halls, and the Meet-Me Room. After sending a request, our team replies to confirm format, timing, and access details.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Questions */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              What buying teams ask first
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2.5 leading-relaxed">
              Practical answers tied to verifiable records and what you can inspect on site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {content.worries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 lg:p-8 flex flex-col justify-between border border-slate-200/80"
              >
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#B12D24] uppercase tracking-wider">
                    {item.basis}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Montserrat',sans-serif] leading-snug">
                    {item.worry}
                  </h3>
                  <p className="pt-3 border-t border-slate-100 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Migration Timeline */}
      {content.movingTimeline && (
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Staged migration sequence
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-2.5 leading-relaxed">
                Exact timelines depend on rack readiness and carrier lead times and are agreed during scoping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {content.movingTimeline.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-50 rounded-3xl p-7 space-y-3.5 border border-slate-200/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-[#B12D24] text-white font-bold text-sm flex items-center justify-center tabular-nums">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3 & 4. What we provide */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                What we provide
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.whatWeProvide.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 bg-slate-50 rounded-2xl flex items-start gap-3 text-sm sm:text-base text-slate-800 border border-slate-200/70"
                  >
                    <Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#151515] text-white rounded-3xl p-7 sm:p-9 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                Typical starting scope
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {content.mostClientsStartWith}
              </p>

              <div className="pt-5 border-t border-slate-800 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="w-full min-h-[48px] py-3.5 px-5 bg-[#B12D24] hover:bg-black text-white rounded-full text-sm sm:text-base font-semibold transition-colors text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Request a tour
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('solutions', 'pricing')}
                  className="w-full min-h-[44px] py-3 px-5 bg-white/10 hover:bg-white/15 text-white rounded-full text-sm sm:text-base font-semibold transition-colors text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Scope a commercial quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proof Strip */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {/* 6. FAQ Accordion */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#B12D24]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2.5 pb-1 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to an engineer"
      />
    </div>
  );
};
