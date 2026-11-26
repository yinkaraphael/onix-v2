import React, { useState } from 'react';
import { ArrowRight, Server, Network, MapPin, Calendar } from 'lucide-react';

interface CostEstimatorProps {
  onOpenTourModal: () => void;
  onOpenContact: (notes?: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onOpenTourModal,
  onOpenContact,
}) => {
  const [site, setSite] = useState<'Accra (Tier IV Constructed Facility)' | 'Dakar (2Africa Landing Station)'>(
    'Accra (Tier IV Constructed Facility)'
  );
  const [footprint, setFootprint] = useState<string>('1 to 4 racks');
  const [interconnection, setInterconnection] = useState<string>('Carrier cross-connects & Meet-Me Room');
  const [timeline, setTimeline] = useState<string>('Within 1–3 months');

  const handleRequestQuote = () => {
    const summary = `Scoped quote enquiry — Site: ${site}; Space requirement: ${footprint}; Connectivity: ${interconnection}; Target timeline: ${timeline}.`;
    onOpenContact(summary);
  };

  return (
    <div id="pricing" className="bg-[#151515] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800">
      <div className="max-w-3xl mb-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Montserrat',sans-serif] text-white">
          What will it cost?
        </h3>
        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
          Every deployment&apos;s space, power density, and interconnection requirements differ, so we prepare an itemised commercial quote for each requirement rather than publishing generic rates. Tell us what you are scoping and our team will prepare a tailored proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          {/* Facility Choice */}
          <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
            <div className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#B12D24]" />
              <span>Select facility</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(
                [
                  'Accra (Tier IV Constructed Facility)',
                  'Dakar (2Africa Landing Station)',
                ] as const
              ).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSite(option)}
                  className={`p-4 rounded-xl text-left text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    site === option
                      ? 'bg-[#B12D24] text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Footprint */}
          <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
            <div className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-slate-300" />
              <span>Expected space footprint</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['1 to 4 racks', 'Multi-rack pod', 'Private cage'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFootprint(option)}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    footprint === option
                      ? 'bg-white text-slate-900'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Interconnection & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <label
                htmlFor="quote-interconnection"
                className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2 mb-2.5"
              >
                <Network className="w-4 h-4 text-blue-300" />
                <span>Connectivity needs</span>
              </label>
              <select
                id="quote-interconnection"
                value={interconnection}
                onChange={(e) => setInterconnection(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
              >
                <option value="Carrier cross-connects & Meet-Me Room">
                  Carrier cross-connects &amp; Meet-Me Room
                </option>
                <option value="LINX Accra peering & local exchange">
                  LINX Accra peering &amp; local exchange
                </option>
                <option value="Dedicated enterprise fiber / VPN">
                  Dedicated enterprise fiber / VPN
                </option>
                <option value="Not sure yet — advise me">
                  Not sure yet — advise me
                </option>
              </select>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <label
                htmlFor="quote-timeline"
                className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2 mb-2.5"
              >
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Target timeline</span>
              </label>
              <select
                id="quote-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
              >
                <option value="Immediate (this month)">Immediate (this month)</option>
                <option value="Within 1–3 months">Within 1–3 months</option>
                <option value="3–6 months planning">3–6 months planning</option>
                <option value="Budgeting for next year">Budgeting for next year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Summary & Enquiry Route */}
        <div className="lg:col-span-5 bg-black/40 p-6 sm:p-8 rounded-3xl space-y-5 border border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Your Scoping Summary
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-['Montserrat',sans-serif]">
              Custom commercial quotation
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              We review your power density, cooling, and cross-connect needs directly with our engineering and commercial team before issuing pricing.
            </p>
          </div>

          <dl className="space-y-3 pt-4 border-t border-white/10 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Site</dt>
              <dd className="font-semibold text-white text-right">{site}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Space</dt>
              <dd className="font-semibold text-white text-right">{footprint}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Connectivity</dt>
              <dd className="font-semibold text-white text-right">{interconnection}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Timeline</dt>
              <dd className="font-semibold text-white text-right">{timeline}</dd>
            </div>
          </dl>

          <div className="space-y-3 pt-3">
            <button
              type="button"
              onClick={handleRequestQuote}
              className="w-full min-h-[48px] py-3.5 px-5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Talk to our team with this brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onOpenTourModal}
              className="w-full min-h-[44px] py-3 px-5 bg-white/10 hover:bg-white/15 text-slate-100 font-semibold rounded-xl text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a tour first
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
