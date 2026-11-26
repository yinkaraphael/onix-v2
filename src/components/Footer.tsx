import React from 'react';
import { OnixLogo } from './OnixLogo';
import { PageRoute } from '../utils/routes';
import {
  ACCRA_PHONE,
  ACCRA_TEL,
  ACCRA_WHATSAPP,
  DAKAR_PHONE,
  DAKAR_TEL,
  DAKAR_WHATSAPP,
  UPTIME_ACCRA_URL,
  LINX_ACCRA_URL,
} from '../data/siteContent';
import { MessageCircle, ExternalLink, Award } from 'lucide-react';

interface FooterProps {
  currentPage?: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenCookieSettings,
}) => {
  const isFrench = currentPage === 'fr-senegal';

  return (
    <footer className="bg-[#151515] text-slate-300 border-t border-slate-800">
      {/* Location-Specific Proof & Standards Row */}
      <div className="border-b border-slate-800 bg-[#1A1A1A]">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm font-semibold text-slate-300">
              {isFrench
                ? 'Accréditation et interconnexion vérifiables'
                : 'Verified accreditation and interconnection'}
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={UPTIME_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-700/70 text-xs sm:text-sm text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Award className="w-4 h-4 text-[#B12D24] shrink-0" />
                <span className="font-semibold">Accra #1, Phase 1: Tier IV Constructed Facility</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <a
                href={LINX_ACCRA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-700/70 text-xs sm:text-sm text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="font-semibold">LINX Accra</span>
                <span className="text-slate-400 font-normal">
                  {isFrench ? 'Interconnexion' : 'Interconnection'}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('fr-senegal')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-700/70 text-xs sm:text-sm text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="font-semibold">Dakar:</span>
                <span className="text-slate-300 font-normal">
                  {isFrench
                    ? 'Colocation neutre · station 2Africa'
                    : 'Carrier-neutral colocation · 2Africa landing'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Site Distinction */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <OnixLogo variant="white" className="h-auto w-auto" imgClassName="h-10 w-auto" withTagline={true} />
            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              {isFrench
                ? "Colocation neutre à la station d'atterrissement du câble 2Africa à Dakar, et installation certifiée Tier IV Constructed Facility (Accra #1, Phase 1) à Accra."
                : 'Uptime Institute Tier IV Constructed Facility (Onix Accra #1, Phase 1) in Accra, Ghana, and carrier-neutral colocation at the 2Africa cable landing station in Dakar, Senegal.'}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/onix-data-centre/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Onix Data Centre on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/onixdatacentres"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Onix Data Centre on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Who We Serve */}
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isFrench ? 'Clients' : 'Who We Serve'}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('banks-fintech')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Banks &amp; fintech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('networks-content')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Networks &amp; content
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('enterprise')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Enterprise &amp; public sector
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('moving-to-onix')}
                  className="text-[#e4817a] hover:text-white font-medium transition-colors text-left cursor-pointer"
                >
                  See the migration plan →
                </button>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('fr-senegal')}
                  className="hover:text-white transition-colors text-left font-medium text-blue-300 cursor-pointer"
                >
                  Dakar, Sénégal (FR)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions & Facility */}
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isFrench ? 'Solutions et site' : 'Solutions & Facility'}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('solutions', 'colocation')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Colocation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('solutions', 'interconnection')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Interconnection &amp; Meet-Me Room
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('solutions', 'pricing')}
                  className="text-amber-300 hover:text-white transition-colors text-left font-medium cursor-pointer"
                >
                  Request a scoped quote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('the-facility', 'power')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Illustrative power handover
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('the-facility', 'specs')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Accra facility overview
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Proof */}
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isFrench ? 'À propos et preuves' : 'Company & Proof'}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Onix &amp; Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('certification')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Certification &amp; Records
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sustainability (Solar &amp; Water)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Talk to our team
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-4 text-sm">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {isFrench ? 'Contact direct' : 'Direct Contact'}
            </div>

            {isFrench ? (
              <>
                <div>
                  <div className="text-slate-400 font-medium text-xs">Dakar, Sénégal (2Africa)</div>
                  <a
                    href={DAKAR_TEL}
                    className="text-white hover:text-[#e4817a] text-base tabular-nums transition-colors block mt-0.5 font-semibold"
                  >
                    {DAKAR_PHONE}
                  </a>
                </div>
                <div>
                  <div className="text-slate-400 font-medium text-xs">Accra, Ghana (Tier IV)</div>
                  <a
                    href={ACCRA_TEL}
                    className="text-white hover:text-[#e4817a] text-base tabular-nums transition-colors block mt-0.5 font-semibold"
                  >
                    {ACCRA_PHONE}
                  </a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="text-slate-400 font-medium text-xs">Accra, Ghana (Tier IV)</div>
                  <a
                    href={ACCRA_TEL}
                    className="text-white hover:text-[#e4817a] text-base tabular-nums transition-colors block mt-0.5 font-semibold"
                  >
                    {ACCRA_PHONE}
                  </a>
                </div>
                <div>
                  <div className="text-slate-400 font-medium text-xs">Dakar, Senegal (2Africa)</div>
                  <a
                    href={DAKAR_TEL}
                    className="text-white hover:text-[#e4817a] text-base tabular-nums transition-colors block mt-0.5 font-semibold"
                  >
                    {DAKAR_PHONE}
                  </a>
                </div>
              </>
            )}

            <div>
              <a
                href="mailto:info@onixdatacentres.com"
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                info@onixdatacentres.com
              </a>
            </div>

            <div className="pt-1">
              <a
                href={isFrench ? DAKAR_WHATSAPP : ACCRA_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#4ade80] rounded-xl border border-[#25D366]/30 transition-colors font-medium text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isFrench ? 'WhatsApp équipe Dakar' : 'WhatsApp Accra Team'}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed space-y-1.5">
              <div>
                <span className="font-semibold text-slate-300">Accra Facility:</span> Amrahia-Katamanso, towards Dodowa, Accra.
              </div>
              <div>
                <span className="font-semibold text-slate-300">Head Office:</span> Shalom Villas, 3d, Onyasia Crescent, Accra.
              </div>
              <div>
                <span className="font-semibold text-slate-300">Dakar:</span> 2Africa cable landing station, Dakar.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Privacy */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Onix Data Centre Ltd. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <span>Ghana Data Protection Act (Act 843)</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Senegal Law No. 2008-12</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="text-slate-300 hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
            >
              {isFrench ? 'Préférences de cookies' : 'Cookie preferences'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
