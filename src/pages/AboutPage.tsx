import React from 'react';
import { PageRoute } from '../utils/routes';
import {
  LEADERSHIP_OVERVIEW,
  UPTIME_ACCRA_URL,
  LINX_ACCRA_URL,
} from '../data/siteContent';
import { PageEndBlock } from '../components/PageEndBlock';
import { ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
              About Onix Data Centres
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              Tier IV colocation in Accra and carrier-neutral colocation in Dakar.
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Onix operates critical infrastructure across two West African sites: Onix Accra #1, Phase 1 (an Uptime Institute Tier IV Constructed Facility) and carrier-neutral colocation at the 2Africa cable landing station in Dakar.
            </p>
          </div>
        </div>
      </section>

      {/* Accra and Dakar Overview */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Two West African hubs, clearly defined
              </h2>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed border border-slate-200/80">
              <p>
                In Greater Accra, Onix operates Onix Accra #1 at Amrahia-Katamanso on raised ground outside central city congestion, pairing layered power protection with on-site solar generation, business continuity workspace, and carrier-neutral Meet-Me Room connectivity including{' '}
                <a
                  href={LINX_ACCRA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#243F87] hover:underline inline-flex items-center gap-1"
                >
                  <span>LINX Accra</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                . Phase 1 is certified by{' '}
                <a
                  href={UPTIME_ACCRA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#B12D24] hover:underline inline-flex items-center gap-1"
                >
                  <span>Uptime Institute as a Tier IV Constructed Facility</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                .
              </p>
              <p>
                In Dakar, Senegal, Onix provides carrier-neutral colocation at the 2Africa subsea cable landing station. For deployments that specifically require Tier IV certification, our Accra facility serves that workload.
              </p>

              <div className="pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                    Accra, Ghana
                  </div>
                  <div className="font-bold text-slate-900 mt-1">
                    Onix Accra #1, Phase 1 — Tier IV Constructed Facility
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#243F87]">
                    Dakar, Senegal
                  </div>
                  <div className="font-bold text-slate-900 mt-1">
                    Carrier-neutral colocation at the 2Africa cable landing station
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Functional Teams (Clean Text Layout) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Leadership &amp; operations teams
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2.5 leading-relaxed">
              Verified leadership and operational teams you will meet when requesting a facility walkthrough or engineering review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {LEADERSHIP_OVERVIEW.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 flex flex-col justify-between space-y-5 border border-slate-200/80"
              >
                <div>
                  {item.name && (
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                      {item.name}
                    </h3>
                  )}
                  <p
                    className={
                      item.name
                        ? 'text-sm text-[#B12D24] font-semibold mt-1'
                        : 'font-bold text-slate-900 text-lg sm:text-xl font-["Montserrat",sans-serif]'
                    }
                  >
                    {item.role}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  {item.statusNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Commitments */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold font-['Montserrat',sans-serif] text-white">
              How we work with buyer teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="text-[#dd625a] font-bold text-lg tabular-nums">01</div>
              <h3 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-white">
                Show the plant in person
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We encourage procurement, IT, and risk teams to inspect our power rooms, data halls, and Meet-Me Room directly or via live video.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="text-[#dd625a] font-bold text-lg tabular-nums">02</div>
              <h3 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-white">
                Direct engineering conversations
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Speak directly with technical staff about rack densities, fiber entry, and facility operations via phone, email, or WhatsApp.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="text-[#dd625a] font-bold text-lg tabular-nums">03</div>
              <h3 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-white">
                Clear site scope
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Accra and Dakar are presented distinctly so buyers see clearly where Tier IV certification applies and where carrier-neutral landing access applies.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="text-[#dd625a] font-bold text-lg tabular-nums">04</div>
              <h3 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-white">
                Scoped commercial quotes
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contract terms, service-level agreements, and recurring charges are scoped against your exact rack and connectivity requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        secondaryLabel="Talk to our team"
      />
    </div>
  );
};
