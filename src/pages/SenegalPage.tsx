import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import {
  DAKAR_PHONE,
  DAKAR_TEL,
  DAKAR_WHATSAPP,
  UPTIME_ACCRA_URL,
} from '../data/siteContent';
import {
  Network,
  ShieldCheck,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface SenegalPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
}

export const SenegalPage: React.FC<SenegalPageProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [formData, setFormData] = useState({
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setErrorMsg('Veuillez remplir les champs obligatoires.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Veuillez saisir une adresse e-mail professionnelle valide.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-0" lang="fr">
      {/* 1. En-tête / Bannière Sénégal */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-4xl space-y-5">
            <p className="text-sm sm:text-base font-bold text-[#B12D24] tracking-wide">
              Bienvenue chez Onix
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#243F87] uppercase tracking-wider">
              Dakar, Sénégal · Station d&apos;atterrissement 2Africa
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Montserrat',sans-serif] text-balance">
              Colocation neutre à la station d&apos;atterrissement du câble 2Africa, à Dakar
            </h1>

            {/* Required verbatim French copy naming Accra explicitly for Tier IV */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-3xl">
              À Dakar, Onix propose des services de colocation neutres vis-à-vis des opérateurs à la station d’atterrissement du câble 2Africa. Pour un déploiement qui exige une certification Tier IV, découvrez notre site d’Accra.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="min-h-[48px] px-7 py-3.5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Demander une visite</span>
              </button>

              <a
                href={DAKAR_TEL}
                className="min-h-[48px] px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full transition-colors text-base flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-slate-700 shrink-0" />
                <span>Parler à notre équipe ({DAKAR_PHONE})</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Visite sur place à Dakar ou présentation en visioconférence en direct : découvrez les espaces d&apos;hébergement et les options d&apos;interconnexion. Après votre demande, notre équipe à Dakar vous répond pour convenir du format et des modalités d&apos;accès.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Ce que propose Onix à Dakar (sans aucune étiquette Tier sur Dakar) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Ce que vous trouverez à Dakar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#243F87] flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Station d&apos;atterrissement du câble 2Africa
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Des espaces de colocation directement implantés à la station d&apos;atterrissement du câble sous-marin 2Africa à Dakar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B12D24] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Neutralité vis-à-vis des opérateurs
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Vous choisissez librement vos opérateurs réseau et partenaires de transit sans contrainte d&apos;exclusivité.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 lg:p-8 space-y-4 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl font-['Montserrat',sans-serif]">
                Interconnexions régionales
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Accès aux opérateurs et capacités sous-marines disponibles à la station d&apos;atterrissement 2Africa, avec accompagnement technique sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distinction claire entre Dakar et Accra Tier IV */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="bg-[#151515] text-white rounded-3xl p-7 sm:p-11 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#dd625a]">
                  Accra &amp; Dakar · Rôle distinct de chaque site
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold font-['Montserrat',sans-serif]">
                  Besoin d&apos;une certification Tier IV ? Découvrez Accra
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  La certification Tier IV Constructed Facility délivrée par l&apos;Uptime Institute concerne spécifiquement Onix Accra #1 (Phase 1), au Ghana. À Dakar, Onix propose des services de colocation neutres vis-à-vis des opérateurs à la station d&apos;atterrissement du câble 2Africa.
                </p>
                <div className="flex flex-wrap gap-5 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('the-facility')}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-[#dd625a] transition-colors cursor-pointer"
                  >
                    <span>Découvrir le site d&apos;Accra Tier IV (EN)</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                  <a
                    href={UPTIME_ACCRA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Fiche Uptime Institute d&apos;Accra #1, Phase 1</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/10 space-y-4 text-sm">
                <div className="border-b border-white/10 pb-3">
                  <div className="text-slate-400">Dakar, Sénégal</div>
                  <div className="text-white font-bold mt-1">
                    Colocation neutre à la station d&apos;atterrissement 2Africa
                  </div>
                </div>
                <div>
                  <div className="text-slate-400">Accra, Ghana (Onix Accra #1, Phase 1)</div>
                  <div className="text-white font-bold mt-1">
                    Certifié Tier IV Constructed Facility (Uptime Institute)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Formulaire Dakar */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Demande enregistrée dans cet aperçu
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Merci, <span className="font-semibold text-slate-900">{formData.nom}</span>. Sur le site en production, notre équipe à Dakar répond à <span className="font-semibold text-slate-900">{formData.email}</span> pour organiser votre échange ou votre visite. Cet aperçu n&apos;envoie aucune donnée à un serveur.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Contact direct à Dakar :{' '}
                    <a href={DAKAR_TEL} className="font-semibold text-[#B12D24] hover:underline">
                      {DAKAR_PHONE}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="min-h-[44px] px-6 py-2.5 bg-slate-900 hover:bg-black text-white rounded-full text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Modifier la demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      Contacter l&apos;équipe de Dakar
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-1">
                      Décrivez votre besoin de colocation ou d&apos;interconnexion à la station d&apos;atterrissement 2Africa.
                    </p>
                  </div>

                  {errorMsg && (
                    <div role="alert" className="p-3 bg-red-50 border border-red-200 text-sm text-red-800 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dakar-nom" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Nom complet <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="dakar-nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Ex. Mamadou Diallo"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="dakar-org" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Organisation <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="dakar-org"
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Entreprise ou Opérateur"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dakar-email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        E-mail professionnel <span className="text-[#B12D24]">*</span>
                      </label>
                      <input
                        id="dakar-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.sn"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>

                    <div>
                      <label htmlFor="dakar-tel" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Téléphone ou WhatsApp
                      </label>
                      <input
                        id="dakar-tel"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="+221 77 000 00 00"
                        className="w-full min-h-[44px] px-4 py-2.5 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dakar-msg" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Votre projet à Dakar
                    </label>
                    <textarea
                      id="dakar-msg"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nombre de baies souhaité, besoins d'interconnexion, échéance..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B12D24] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full text-base transition-colors cursor-pointer"
                  >
                    Parler à notre équipe à Dakar
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-[#151515] text-white rounded-3xl p-7 sm:p-10 space-y-7">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                Coordonnées directes · Dakar
              </p>

              <div className="space-y-5 text-sm sm:text-base">
                <div>
                  <div className="text-slate-400 font-medium">Téléphone et WhatsApp :</div>
                  <a
                    href={DAKAR_TEL}
                    className="text-white hover:text-[#dd625a] text-lg sm:text-xl font-bold block mt-1"
                  >
                    {DAKAR_PHONE}
                  </a>
                </div>

                <div>
                  <div className="text-slate-400 font-medium">Courriel :</div>
                  <a
                    href="mailto:info@onixdatacentres.com"
                    className="text-white hover:text-[#dd625a] block mt-1 font-semibold"
                  >
                    info@onixdatacentres.com
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-slate-400 font-semibold mb-1 text-xs uppercase tracking-wider">
                    Implantation
                  </div>
                  <p className="text-slate-300 leading-relaxed mt-1">
                    Station d&apos;atterrissement du câble 2Africa, Dakar, Sénégal.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={DAKAR_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full min-h-[48px] py-3.5 px-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-full font-bold text-sm flex items-center justify-center gap-2 border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Échanger sur WhatsApp avec Dakar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bloc de fin de page en français */}
      <section className="bg-[#151515] text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat',sans-serif]">
            Planifier une visite à Dakar ou en visioconférence.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Échangez avec notre équipe au Sénégal sur vos besoins de colocation neutre et d&apos;interconnexion à la station d&apos;atterrissement 2Africa.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3.5 max-w-lg mx-auto">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="min-h-[48px] px-7 py-3.5 bg-[#B12D24] hover:bg-black text-white font-semibold rounded-full text-base transition-colors cursor-pointer"
            >
              Demander une visite
            </button>
            <a
              href={DAKAR_TEL}
              className="min-h-[48px] px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-base transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Parler à notre équipe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
