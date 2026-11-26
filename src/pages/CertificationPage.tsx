import React from 'react';
import { PageRoute } from '../utils/routes';
import { CERTIFICATES, UPTIME_ACCRA_URL, LINX_ACCRA_URL } from '../data/siteContent';
import { PageEndBlock } from '../components/PageEndBlock';
import { Award, ExternalLink, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';

interface CertificationPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const CertificationPage: React.FC<CertificationPageProps> = ({
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
              Independent Records &amp; Facility Scope
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              Certified by independent bodies, with scope clearly stated
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Onix Accra #1, Phase 1 holds an Uptime Institute Tier IV Constructed Facility award. Compliance and audit teams can inspect original documentation on request during a tour or engineering review.
            </p>

            <div className="pt-1 flex flex-wrap gap-5">
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#B12D24] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] rounded"
              >
                <span>Check Onix Accra #1, Phase 1 on Uptime Institute</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={LINX_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#243F87] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#243F87] rounded"
              >
                <span>View LINX Accra network record</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Accreditation Record & Distinction */}
      <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-6 border border-slate-200/80"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B12D24] flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                        {cert.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                        Scope: {cert.scope}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {cert.whatItMeans}
                  </p>

                  <dl className="p-5 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2.5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Issuing body</dt>
                      <dd className="text-slate-900 font-semibold text-right">{cert.issuer}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Award type</dt>
                      <dd className="text-slate-900 font-semibold text-right">{cert.type}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Covered facility</dt>
                      <dd className="text-slate-900 font-semibold text-right">{cert.scope}</dd>
                    </div>
                  </dl>
                </div>

                {cert.verificationUrl && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#B12D24] hover:underline"
                    >
                      <span>{cert.verificationLabel}</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>

                    <button
                      type="button"
                      onClick={onOpenTourModal}
                      className="text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
                    >
                      Request an audit walkthrough →
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Audit Dossier & Accra/Dakar Clarity Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-6 border border-slate-200/80">
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#243F87] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      ISO, PCI-DSS &amp; Dakar status
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      Verification &amp; regional distinction
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Specific ISO and PCI-DSS certificate numbers, validity dates, and current PDF copies are provided directly through our compliance team during audit reviews rather than published as generic site summaries.
                </p>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2 text-sm text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900">Accra vs. Dakar distinction</div>
                  <p>
                    Tier IV certification applies to Onix Accra #1, Phase 1. Onix Dakar operates as carrier-neutral colocation at the 2Africa cable landing station, with certification status pending confirmation.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="min-h-[44px] px-5 py-2.5 bg-[#B12D24] hover:bg-black text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Request a tour</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-[44px] px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Talk to an engineer</span>
                </button>
              </div>
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
