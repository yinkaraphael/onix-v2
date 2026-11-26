import React, { useState, useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import {
  ACCRA_PHONE,
  ACCRA_TEL,
  ACCRA_WHATSAPP,
  DAKAR_PHONE,
  DAKAR_TEL,
  DAKAR_WHATSAPP,
} from '../data/siteContent';
import { MessageCircle, Send, CheckCircle2, Calendar } from 'lucide-react';

interface ContactPageProps {
  initialNotes?: string;
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialNotes = '',
  onNavigate,
  onOpenTourModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    interest: 'Colocation (racks and cages)',
    message: initialNotes || '',
  });

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, message: initialNotes }));
    }
  }, [initialNotes]);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please provide a valid work email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-14 lg:pt-16 lg:pb-18 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance leading-[1.12]">
              Talk to an engineer or account team
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Send your enquiry below, call our Accra or Dakar numbers directly, or message us on WhatsApp. Prefer to see the facility first? Request a guided tour in Accra or by live video.
            </p>
            <div className="pt-1 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="min-h-[44px] px-6 py-3 bg-[#B12D24] hover:bg-black text-white rounded-full text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Request a tour</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('fr-senegal')}
                className="min-h-[44px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-sm sm:text-base font-semibold transition-colors cursor-pointer"
              >
                Dakar, Sénégal (FR)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 lg:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 space-y-10">
          {/* Quick-Reach Strip */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Accra (Ghana):</span>
                <a
                  href={ACCRA_TEL}
                  className="font-bold text-slate-900 hover:text-[#B12D24] transition-colors text-base sm:text-lg"
                >
                  {ACCRA_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Dakar (Sénégal):</span>
                <a
                  href={DAKAR_TEL}
                  className="font-bold text-slate-900 hover:text-[#B12D24] transition-colors text-base sm:text-lg"
                >
                  {DAKAR_PHONE}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={ACCRA_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Accra</span>
              </a>
              <a
                href={DAKAR_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#243F87] hover:bg-slate-900 text-white rounded-full text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Dakar</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Enquiry recorded in preview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. When connected to Onix&apos;s live form backend, our team will reply to <span className="font-semibold text-slate-900">{formData.email}</span> to follow up on your requirements. This preview site does not send or store form submissions.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    To reach us directly now, email{' '}
                    <a href="mailto:info@onixdatacentres.com" className="font-semibold text-[#B12D24] hover:underline">
                      info@onixdatacentres.com
                    </a>{' '}
                    or call{' '}
                    <a href={ACCRA_TEL} className="font-semibold text-slate-900 hover:underline">
                      {ACCRA_PHONE}
                    </a>
                    .
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="min-h-[44px] px-7 py-3 bg-slate-900 hover:bg-black text-white rounded-full text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Edit or start another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      Send an enquiry
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-1">
                      Share your facility, rack, or interconnection goals and our team will follow up.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-4 bg-red-50 border border-red-200 text-sm text-red-800 rounded-xl"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Full Name <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ama Darko"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-org" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Organisation <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Company or Institution"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Work Email <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Phone or WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 50 000 0000"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Topic <span className="text-[#B12D24]">*</span>
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] bg-white cursor-pointer"
                    >
                      <option value="Colocation (racks and cages)">Colocation (racks and cages)</option>
                      <option value="Interconnection (Meet-Me Room)">Interconnection (Meet-Me Room &amp; LINX Accra)</option>
                      <option value="Remote hands & operations">Remote hands &amp; operations</option>
                      <option value="Dakar 2Africa colocation">Dakar (Senegal) 2Africa landing station colocation</option>
                      <option value="Compliance or audit tour">Compliance or audit walkthrough</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Project requirements or questions
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what you want to discuss (site preference, estimated racks, connectivity, compliance review)..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Talk to our team</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-7 sm:p-8 space-y-5 border border-slate-200/80">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B12D24]">
                  What happens next
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                  How an enquiry moves forward
                </h3>
                <ol className="space-y-4 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      Our team reviews your message and routes it to the appropriate engineering or commercial lead for Accra or Dakar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      We schedule a discovery conversation and, if useful, an in-person or live video walkthrough of the facility.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#B12D24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      You receive a scoped proposal reflecting your requested site, rack footprint, power requirements, and SLA terms.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bg-[#151515] text-white rounded-3xl p-7 sm:p-8 space-y-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Contact &amp; Addresses
                </p>

                <div className="space-y-4 text-sm sm:text-base">
                  <div>
                    <div className="text-slate-400">Accra, Ghana (Tier IV Constructed Facility):</div>
                    <a
                      href={ACCRA_TEL}
                      className="text-white hover:text-[#dd625a] font-bold text-base sm:text-lg block mt-0.5"
                    >
                      {ACCRA_PHONE}
                    </a>
                  </div>

                  <div>
                    <div className="text-slate-400">Dakar, Senegal (2Africa Landing Station):</div>
                    <a
                      href={DAKAR_TEL}
                      className="text-white hover:text-[#dd625a] font-bold text-base sm:text-lg block mt-0.5"
                    >
                      {DAKAR_PHONE}
                    </a>
                  </div>

                  <div>
                    <div className="text-slate-400">Email:</div>
                    <a
                      href="mailto:info@onixdatacentres.com"
                      className="text-white hover:text-[#dd625a] font-semibold block mt-0.5"
                    >
                      info@onixdatacentres.com
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-3 text-sm">
                    <div>
                      <span className="text-slate-400 font-semibold block text-xs uppercase tracking-wider">
                        Accra Facility
                      </span>
                      <span className="text-slate-200 mt-1 block">
                        Amrahia-Katamanso, towards Dodowa, Greater Accra, Ghana.
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block text-xs uppercase tracking-wider">
                        Head Office
                      </span>
                      <span className="text-slate-200 mt-1 block">
                        Shalom Villas, 3d, Onyasia Crescent, Accra, Ghana.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
