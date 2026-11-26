import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Fuel, BatteryCharging } from 'lucide-react';
import { animate, stagger } from 'animejs';

type SimulationState = 'grid-cut' | 'daytime' | 'generator-running';

export const PowerStoryDiagram: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<SimulationState>('grid-cut');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const boxes = containerRef.current.querySelectorAll('.power-layer-card');
    if (boxes.length > 0) {
      animate(boxes, {
        y: [12, 0],
        opacity: [0.9, 1],
        duration: 240,
        ease: 'outQuad',
        delay: stagger(30),
      });
    }
  }, [activeScenario]);

  const handoverSteps =
    activeScenario === 'grid-cut'
      ? [
          {
            step: '1',
            title: 'Grid feed drops or fluctuates',
            detail: 'Automatic transfer switches isolate the utility line so grid instability does not enter the hall.',
          },
          {
            step: '2',
            title: 'Static UPS bridges the load',
            detail: 'The static UPS carries critical IT racks immediately, keeping power continuous with no break while generators spin up.',
          },
          {
            step: '3',
            title: 'Generators start and take over',
            detail: 'Standby diesel generators start, synchronise, and assume the steady facility load from the UPS.',
          },
        ]
      : activeScenario === 'daytime'
      ? [
          {
            step: '1',
            title: 'On-site solar offsets daytime load',
            detail: 'When daylight is available, the facility solar array feeds directly into the building power distribution.',
          },
          {
            step: '2',
            title: 'Utility grid supports baseload',
            detail: 'Dual utility feeders carry remaining demand while standby generators stay ready for automatic takeover.',
          },
          {
            step: '3',
            title: 'Static UPS stays inline',
            detail: 'The UPS conditions power continuously and stands ready to bridge any sudden grid interruption.',
          },
        ]
      : [
          {
            step: '1',
            title: 'Utility feeders isolated',
            detail: 'During extended utility outages, the facility runs isolated from the external electricity grid.',
          },
          {
            step: '2',
            title: 'Synchronised generators carry the site',
            detail: 'On-site diesel generators supply both IT equipment and cooling plant until stable utility power returns.',
          },
          {
            step: '3',
            title: 'UPS protects every transition',
            detail: 'When grid power is restored and verified stable, the UPS bridges the return handover without interrupting servers.',
          },
        ];

  return (
    <div ref={containerRef} className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80">
      {/* Header & Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-2">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-bold text-[#B12D24] tracking-wide mb-2">
            Illustrative power handover
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif] leading-tight text-balance">
            Four layers of power protection between a grid cut and your servers
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-3 leading-relaxed">
            Solar generation, utility grid feeds, standby diesel generators, and static UPS bridging work in sequence. When utility power drops in Accra, the UPS bridges the handover immediately until generators take over the load.
          </p>
        </div>

        {/* Scenario Tabs - Grid cut first and active by default */}
        <div
          role="tablist"
          aria-label="Power scenario selector"
          className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl sm:rounded-full shrink-0 self-start"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeScenario === 'grid-cut'}
            onClick={() => setActiveScenario('grid-cut')}
            className={`min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-full transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              activeScenario === 'grid-cut'
                ? 'bg-[#B12D24] text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Zap className="w-4 h-4 shrink-0" />
            <span>Grid cut</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeScenario === 'daytime'}
            onClick={() => setActiveScenario('daytime')}
            className={`min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-full transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              activeScenario === 'daytime'
                ? 'bg-slate-900 text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Sun className="w-4 h-4 shrink-0" />
            <span>Solar daytime</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeScenario === 'generator-running'}
            onClick={() => setActiveScenario('generator-running')}
            className={`min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-full transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
              activeScenario === 'generator-running'
                ? 'bg-[#243F87] text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Fuel className="w-4 h-4 shrink-0" />
            <span>Generator backup</span>
          </button>
        </div>
      </div>

      {/* Plain-language handover sequence */}
      <div
        role="tabpanel"
        aria-label="Illustrative handover sequence"
        className="my-6 bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/70"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/80">
          <div className="text-xs sm:text-sm font-bold text-slate-900">
            {activeScenario === 'grid-cut' && 'Scenario: Grid cut — UPS bridges while generators start'}
            {activeScenario === 'daytime' && 'Scenario: Solar daytime — Solar and grid share facility load'}
            {activeScenario === 'generator-running' && 'Scenario: Generator backup — On-site diesel plant carries load'}
          </div>
          <div className="text-xs text-slate-600 font-medium">
            Illustrative sequence (no live telemetry)
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {handoverSteps.map((item) => (
            <li key={item.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                {item.step}
              </span>
              <div>
                <div className="text-sm font-bold text-slate-900">{item.title}</div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 4 Layers of Power Protection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Layer 1: Utility Grid Feeders */}
        <div
          className={`power-layer-card p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
            activeScenario === 'grid-cut'
              ? 'bg-red-50/70 border-red-200 text-slate-900'
              : activeScenario === 'daytime'
              ? 'bg-blue-50/60 border-blue-200 text-slate-900'
              : 'bg-slate-50 border-slate-200/80 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-600">Layer 1 · Utility</span>
              <Zap
                className={`w-5 h-5 ${
                  activeScenario === 'grid-cut' ? 'text-[#B12D24]' : 'text-[#243F87]'
                }`}
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mt-3">
              Utility grid feeds
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Utility power feeds are monitored continuously and automatically isolated when voltage or frequency drops.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-black/[0.08] flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Status</span>
            <span
              className={`font-bold ${
                activeScenario === 'grid-cut' || activeScenario === 'generator-running'
                  ? 'text-[#B12D24]'
                  : 'text-emerald-800'
              }`}
            >
              {activeScenario === 'daytime' ? 'Supplying baseload' : 'Grid cut · Isolated'}
            </span>
          </div>
        </div>

        {/* Layer 2: Static UPS Bridge */}
        <div
          className={`power-layer-card p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
            activeScenario === 'grid-cut'
              ? 'bg-rose-50 border-[#B12D24]/40 text-slate-900'
              : 'bg-slate-50 border-slate-200/80 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-600">Layer 2 · Bridge</span>
              <BatteryCharging
                className={`w-5 h-5 ${
                  activeScenario === 'grid-cut' ? 'text-[#B12D24]' : 'text-slate-600'
                }`}
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mt-3">
              Static UPS bridge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Bridges the handover between grid, solar, and generators so servers receive continuous conditioned power.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-black/[0.08] flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Role</span>
            <span className={`font-bold ${activeScenario === 'grid-cut' ? 'text-[#B12D24]' : 'text-slate-800'}`}>
              {activeScenario === 'grid-cut' ? 'Bridging load now' : 'Inline conditioning'}
            </span>
          </div>
        </div>

        {/* Layer 3: Standby Generators */}
        <div
          className={`power-layer-card p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
            activeScenario === 'generator-running'
              ? 'bg-emerald-50/80 border-emerald-300 text-slate-900'
              : activeScenario === 'grid-cut'
              ? 'bg-amber-50/70 border-amber-200 text-slate-900'
              : 'bg-slate-50 border-slate-200/80 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-600">Layer 3 · Backup</span>
              <Fuel
                className={`w-5 h-5 ${
                  activeScenario === 'generator-running' ? 'text-emerald-700' : 'text-slate-600'
                }`}
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mt-3">
              Standby diesel generators
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Synchronised on-site generators start automatically on grid loss and take over the steady building load from the UPS.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-black/[0.08] flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">State</span>
            <span
              className={`font-bold ${
                activeScenario === 'generator-running'
                  ? 'text-emerald-800'
                  : activeScenario === 'grid-cut'
                  ? 'text-amber-800'
                  : 'text-slate-700'
              }`}
            >
              {activeScenario === 'grid-cut' && 'Starting & synchronising'}
              {activeScenario === 'generator-running' && 'Carrying facility load'}
              {activeScenario === 'daytime' && 'Standby ready'}
            </span>
          </div>
        </div>

        {/* Layer 4: On-site Solar */}
        <div
          className={`power-layer-card p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
            activeScenario === 'daytime'
              ? 'bg-amber-50 border-amber-300 text-slate-900'
              : 'bg-slate-50 border-slate-200/80 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-600">Layer 4 · Solar</span>
              <Sun
                className={`w-5 h-5 ${
                  activeScenario === 'daytime' ? 'text-amber-600' : 'text-slate-500'
                }`}
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mt-3">
              On-site solar array
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Ground-mounted photovoltaic generation on the Accra site supports daytime electrical demand when sunlight is available.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-black/[0.08] flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Contribution</span>
            <span className={`font-bold ${activeScenario === 'daytime' ? 'text-amber-900' : 'text-slate-700'}`}>
              {activeScenario === 'daytime' ? 'Active daytime share' : 'Available in daylight'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
