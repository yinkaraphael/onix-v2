import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { ACCRA_PHONE, ACCRA_TEL } from '../data/siteContent';
import { Video, MapPin, CheckCircle2, Send, MessageSquare } from 'lucide-react';

interface BookATourPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const BookATourPage: React.FC<BookATourPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    tourType: 'in-person' as 'in-person' | 'live-video',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-bold text-[#B12D24] uppercase tracking-wider">
              Request a facility walkthrough
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              See the Accra facility in person or by live video
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Walk through the power protection rooms, the data halls, and the carrier-neutral Meet-Me Room, and speak directly with the engineers who operate the site.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Tour request recorded in preview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. On the live Onix site, our team replies to <span className="font-semibold text-slate-900">{formData.email}</span> to confirm your requested format, preferred timing, and visitor access instructions. This preview does not transmit or store form submissions.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Need to arrange a visit directly now? Call{' '}
                    <a href={ACCRA_TEL} className="font-semibold text-[#B12D24] hover:underline">
                      {ACCRA_PHONE}
                    </a>{' '}
                    or email{' '}
                    <a href="mailto:info@onixdatacentres.com" className="font-semibold text-slate-900 hover:underline">
                      info@onixdatacentres.com
                    </a>
                    .
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="min-h-[44px] px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
                    >
                      Adjust request details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif] mb-1">
                    Request a tour
                  </h2>

                  {errorMsg && (
                    <div role="alert" className="p-3 bg-red-50 border border-red-200 text-sm text-red-800 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="page-tour-name" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                        Name <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="page-tour-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Ansah"
                        className="w-full min-h-[44px] px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="page-tour-org" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                        Organisation <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="page-tour-org"
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Company or Public Body"
                        className="w-full min-h-[44px] px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="page-tour-email" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                        Work Email <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="page-tour-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="page-tour-phone" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                        Phone or WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="page-tour-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 50 000 0000"
                        className="w-full min-h-[44px] px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Format <span className="text-[#B12D24]">*</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tourType: 'in-person' })}
                        aria-pressed={formData.tourType === 'in-person'}
                        className={`min-h-[56px] p-3.5 rounded-xl border text-left flex items-start gap-2.5 transition-colors cursor-pointer ${
                          formData.tourType === 'in-person'
                            ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-[#B12D24] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold">In-person tour</div>
                          <div className="text-xs text-slate-600">Amrahia-Katamanso, Accra</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tourType: 'live-video' })}
                        aria-pressed={formData.tourType === 'live-video'}
                        className={`min-h-[56px] p-3.5 rounded-xl border text-left flex items-start gap-2.5 transition-colors cursor-pointer ${
                          formData.tourType === 'live-video'
                            ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Video className="w-4 h-4 text-[#243F87] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold">Live video tour</div>
                          <div className="text-xs text-slate-600">Remote &amp; international teams</div>
                        </div>
                      </button>
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="page-tour-date" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      Preferred date
                    </label>
                    <input
                      id="page-tour-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>

                  <div>
                    <label htmlFor="page-tour-notes" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      What would your team like to inspect? <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="page-tour-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Power switchboards, data hall cooling, Meet-Me Room, or compliance walkthrough..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 min-h-[48px] py-3 px-6 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>Request a tour</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="min-h-[48px] py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span>Talk to an engineer</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-7 space-y-4 border border-slate-200/80">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  What you&apos;ll see
                </p>
                <h2 className="text-xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  Walkthrough itinerary
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900">1. Visitor sign-in &amp; security</div>
                    <p className="text-slate-600 leading-relaxed">
                      Review perimeter access controls, photo ID check-in, and biometric entry points.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900">2. Power protection, halls &amp; Meet-Me Room</div>
                    <p className="text-slate-600 leading-relaxed">
                      Inspect the on-site solar array, standby generators, static UPS systems, data hall containment, and carrier-neutral Meet-Me Room.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                    <div className="font-bold text-slate-900">3. Engineering &amp; audit Q&amp;A</div>
                    <p className="text-slate-600 leading-relaxed">
                      Discuss rack requirements, carrier cross-connects, and operational workflows directly with the team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#151515] text-white rounded-3xl p-7 space-y-4">
                <h3 className="text-base font-bold font-['Montserrat',sans-serif]">
                  After you send a request
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our team replies to confirm your preferred format (in person at Amrahia-Katamanso, Accra or live video), agree on a suitable time, and share site arrival and visitor ID details before you travel.
                </p>
                <div className="pt-3 border-t border-slate-800 text-sm text-slate-300">
                  Looking for Dakar colocation at the 2Africa landing station?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('fr-senegal')}
                    className="font-semibold text-white underline underline-offset-4 hover:text-blue-200 cursor-pointer"
                  >
                    Visit Dakar (FR)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
