import React from 'react';
import { PageRoute } from '../utils/routes';
import { PageEndBlock } from '../components/PageEndBlock';
import { Sun, Wind, Droplets, Recycle, BatteryCharging, Calendar, MessageSquare } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider">
              Resource &amp; Power Architecture
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              Designed around solar power, containment, and local water supply
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Here is how our Accra facility approaches daytime solar integration, cooling efficiency, water sourcing, and ongoing energy storage evaluation. Verified operating figures are published only once formally confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Facility systems in place
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            <div className="bg-white rounded-3xl p-7 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                On-site solar array
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ground-mounted photovoltaic panels situated within the Accra facility compound feed directly into building power distribution to support daytime electrical demand.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#243F87] flex items-center justify-center">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Cold-aisle containment
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Physical aisle containment keeps warm server exhaust separated from cool supply air, reducing mechanical cooling waste in Accra&apos;s climate.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Borehole &amp; reverse osmosis
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                On-site borehole groundwater treated via reverse osmosis supplies closed-loop facility cooling without drawing on constrained municipal water mains.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Equipment &amp; waste handling
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Shipping packaging, unboxing materials, and retired site hardware are sorted for licensed recycling and disposal contractors in Greater Accra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Measurement Policy */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
            Published environmental figures &amp; ESG reporting
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Annual PUE, array capacity ratings, and solar contribution shares are withheld from public marketing copy until formally confirmed for the relevant reporting period by Engineering. Procurement and ESG teams evaluating Accra can request current facility power and solar records during a walkthrough.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-1">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="min-h-[44px] px-6 py-3 bg-[#B12D24] hover:bg-black text-white rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Request a tour</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="min-h-[44px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Talk to an engineer</span>
            </button>
          </div>
        </div>
      </section>

      {/* Next Evaluation */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider">
            <BatteryCharging className="w-5 h-5" />
            <span>Under Engineering Evaluation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Montserrat',sans-serif]">
            Assessing energy storage expansion
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Onix continues to evaluate energy storage options to complement daytime solar generation. Firm capacities and target dates will only be shared once engineered and committed.
          </p>
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
