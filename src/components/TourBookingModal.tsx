import React, { useState, useEffect, useRef } from 'react';
import { X, Video, CheckCircle, MapPin, Send } from 'lucide-react';
import { ACCRA_PHONE, DAKAR_PHONE } from '../data/siteContent';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'en' | 'fr';
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  onClose,
  language = 'en',
}) => {
  const isFrench = language === 'fr';
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
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg(
        isFrench
          ? 'Veuillez renseigner tous les champs obligatoires.'
          : 'Please complete all required fields.'
      );
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg(
        isFrench
          ? 'Veuillez saisir une adresse e-mail professionnelle valide.'
          : 'Please enter a valid work email address.'
      );
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrorMsg('');
    setFormData({
      name: '',
      organisation: '',
      email: '',
      phone: '',
      tourType: 'in-person',
      preferredDate: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
    >
      <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-slate-200 overflow-hidden my-6 shadow-2xl">
        {/* Header Bar */}
        <div className="bg-[#151515] text-white px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#e4817a]">
              {isFrench
                ? "Dakar (station 2Africa) ou visite vidéo"
                : 'Accra Tier IV Constructed Facility'}
            </p>
            <h2
              id="tour-modal-title"
              className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif] mt-0.5"
            >
              {isFrench
                ? 'Demander une visite sur place ou par vidéo'
                : 'Request an On-Site or Live Video Tour'}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={resetForm}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
            aria-label={isFrench ? 'Fermer la fenêtre' : 'Close tour request dialog'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-700 border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                {isFrench ? 'Demande de visite enregistrée' : 'Tour Request Received'}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                {isFrench
                  ? `Merci ${formData.name}. Cette maquette valide votre demande localement (aucun envoi vers une boîte de production). En environnement réel, notre équipe à Dakar (${DAKAR_PHONE}) vous répond pour confirmer l'horaire et les modalités d'accès.`
                  : `Thank you, ${formData.name}. Your request has been recorded in this preview (no message was sent to a live customer inbox). In production, our team (${ACCRA_PHONE}) replies to confirm your preferred date, directions or video link, and site access requirements.`}
              </p>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-lg mx-auto text-left text-sm space-y-2 text-slate-700">
                <div className="font-bold text-slate-900">
                  {isFrench ? 'Ce qui se passe ensuite :' : 'What happens after a request is sent:'}
                </div>
                <p className="leading-relaxed">
                  {isFrench
                    ? "1. Un membre de notre équipe à Dakar vous contacte pour confirmer le créneau et le format (sur place à Dakar ou visioconférence)."
                    : '1. Our team confirms your requested format (in person at Amrahia-Katamanso, Accra or live video) and coordinates a convenient time.'}
                </p>
                <p className="leading-relaxed">
                  {isFrench
                    ? "2. Vous recevez les instructions d'accès et le contact de la personne qui vous accueillera."
                    : '2. For in-person visits, we send facility directions and visitor sign-in requirements (valid photo ID required).'}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-7 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
                >
                  {isFrench ? 'Fermer' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {isFrench
                  ? "Format : visite guidée sur place à Dakar ou visite vidéo en direct. Vous découvrirez les espaces de colocation neutres vis-à-vis des opérateurs et échangerez avec notre équipe locale. Après l'envoi, notre équipe Dakar vous contacte pour confirmer l'horaire."
                  : 'Format: guided walkthrough in person at our Amrahia-Katamanso facility in Accra, or by live video call. You will see the power protection systems, data halls, and Meet-Me Room, and meet the team. After you submit, we reply to confirm timing and visitor access details.'}
              </p>

              {errorMsg && (
                <div
                  role="alert"
                  className="mb-4 p-3.5 bg-red-50 border border-red-200 text-sm text-red-800 rounded-xl"
                >
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="tour-modal-name"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      {isFrench ? 'Nom complet' : 'Full Name'} <span className="text-[#B12D24]">*</span>
                    </label>
                    <input
                      id="tour-modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isFrench ? 'Ex. Mamadou Diallo' : 'e.g. Kwame Mensah'}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tour-modal-org"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      {isFrench ? 'Organisation' : 'Organisation'} <span className="text-[#B12D24]">*</span>
                    </label>
                    <input
                      id="tour-modal-org"
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder={isFrench ? 'Entreprise ou opérateur' : 'Company or institution'}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="tour-modal-email"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      {isFrench ? 'E-mail professionnel' : 'Work Email'} <span className="text-[#B12D24]">*</span>
                    </label>
                    <input
                      id="tour-modal-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={isFrench ? 'nom@entreprise.sn' : 'name@company.com'}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tour-modal-phone"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      {isFrench ? 'Téléphone ou WhatsApp' : 'Phone or WhatsApp'}{' '}
                      <span className="text-slate-500 font-normal">
                        ({isFrench ? 'Optionnel' : 'Optional'})
                      </span>
                    </label>
                    <input
                      id="tour-modal-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isFrench ? '+221 77 000 00 00' : '+233 50 000 0000'}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                    />
                  </div>
                </div>

                {/* Tour Format */}
                <fieldset>
                  <legend className="block text-sm font-semibold text-slate-800 mb-1.5">
                    {isFrench ? 'Format de visite' : 'Tour Format'} <span className="text-[#B12D24]">*</span>
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tourType: 'in-person' })}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
                        formData.tourType === 'in-person'
                          ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <MapPin className="w-5 h-5 text-[#B12D24] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold">
                          {isFrench ? 'Visite sur place' : 'In-person visit'}
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {isFrench ? 'Site de Dakar (2Africa)' : 'Amrahia-Katamanso, Accra'}
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tourType: 'live-video' })}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] ${
                        formData.tourType === 'live-video'
                          ? 'border-[#B12D24] bg-[#FDF2F1] text-slate-900 ring-1 ring-[#B12D24]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Video className="w-5 h-5 text-[#243F87] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold">
                          {isFrench ? 'Visite vidéo en direct' : 'Live video walkthrough'}
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {isFrench
                            ? 'Visioconférence avec notre équipe'
                            : 'Remote walkthrough with our team'}
                        </div>
                      </div>
                    </button>
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="tour-modal-date"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    {isFrench ? 'Date souhaitée' : 'Preferred Date'}{' '}
                    <span className="text-slate-500 font-normal">
                      ({isFrench ? 'Optionnel' : 'Optional'})
                    </span>
                  </label>
                  <input
                    id="tour-modal-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tour-modal-notes"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    {isFrench
                      ? 'Ce que vous souhaitez voir ou demander'
                      : "Anything you'd like to see or ask?"}{' '}
                    <span className="text-slate-500 font-normal">
                      ({isFrench ? 'Optionnel' : 'Optional'})
                    </span>
                  </label>
                  <textarea
                    id="tour-modal-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={
                      isFrench
                        ? 'Ex. Colocation de baies à Dakar, interconnexion 2Africa...'
                        : 'e.g. Power systems inspection, Meet-Me Room, audit requirements...'
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-xl text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B12D24] focus-visible:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isFrench ? 'Envoyer ma demande de visite' : 'Request a tour'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  {isFrench
                    ? 'Conformément à la Loi sénégalaise n° 2008-12 sur la protection des données.'
                    : "Handled in line with Ghana's Data Protection Act, 2012 (Act 843)."}
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
