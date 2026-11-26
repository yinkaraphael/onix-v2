/**
 * Structured, verified content for Onix Data Centres redesign.
 * Unverified operational figures, draft staff bios/quotes, and placeholder briefings
 * are withheld in HANDOFF.md pending confirmation by the relevant Onix teams.
 */

export const UPTIME_ACCRA_URL =
  'https://uptimeinstitute.com/uptime-institute-awards/datacenter/onix-accra-1/1775';
export const LINX_ACCRA_URL = 'https://www.linx.net/network/linx-accra/';

export const ACCRA_PHONE = '+233 50 086 5266';
export const ACCRA_TEL = 'tel:+233500865266';
export const ACCRA_WHATSAPP = 'https://wa.me/233500865266';

export const DAKAR_PHONE = '+221 77 668 41 10';
export const DAKAR_TEL = 'tel:+221776684110';
export const DAKAR_WHATSAPP = 'https://wa.me/221776684110';

export interface ProofItem {
  id: string;
  number: string;
  label: string;
  sourceLine: string;
  href?: string;
}

export const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'tier4',
    number: 'Tier IV',
    label: 'Constructed Facility',
    sourceLine: 'Onix Accra #1, Phase 1 · Uptime Institute',
    href: UPTIME_ACCRA_URL,
  },
  {
    id: 'linx',
    number: 'LINX Accra',
    label: 'Internet exchange',
    sourceLine: 'Interconnection presence in Accra',
    href: LINX_ACCRA_URL,
  },
  {
    id: 'locations',
    number: 'Accra & Dakar',
    label: 'Two West African sites',
    sourceLine: 'Tier IV in Accra · 2Africa landing in Dakar',
  },
  {
    id: 'power',
    number: 'Multi-layer',
    label: 'Power protection',
    sourceLine: 'Solar, utility grid, generators & static UPS',
  },
];

export interface CertificateItem {
  id: string;
  name: string;
  scope: string;
  type: string;
  issuer: string;
  whatItMeans: string;
  verificationUrl?: string;
  verificationLabel?: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'uptime-tier4',
    name: 'Uptime Institute Tier IV Constructed Facility',
    scope: 'Onix Accra #1, Phase 1 (Accra, Ghana)',
    type: 'Tier Certification of Constructed Facility',
    issuer: 'Uptime Institute',
    whatItMeans:
      'Every critical infrastructure path has fault-tolerant redundancy so planned maintenance or an unexpected component failure in one path is isolated from your racks. Applies specifically to Onix Accra #1, Phase 1.',
    verificationUrl: UPTIME_ACCRA_URL,
    verificationLabel: 'View official Uptime Institute award record',
  },
];

export interface LeadershipRole {
  name?: string;
  role: string;
  summary: string;
  statusNote: string;
}

export const LEADERSHIP_OVERVIEW: LeadershipRole[] = [
  {
    name: 'Razak Awudulai',
    role: 'Chief Executive Officer',
    summary:
      'Leads Onix Data Centres across our Accra Tier IV Constructed Facility and carrier-neutral colocation operations in Dakar.',
    statusNote: 'Executive leadership · Accra',
  },
  {
    role: 'Power & Facility Operations',
    summary:
      'Manages utility feeder monitoring, generator readiness, static UPS bridging, cooling containment, and on-site solar integration.',
    statusNote: 'Accra operations team',
  },
  {
    role: 'Interconnection & Meet-Me Room',
    summary:
      'Coordinates carrier-neutral cross-connects, LINX Accra interconnection, and network onboarding for telecom and enterprise buyers.',
    statusNote: 'Meet-Me Room team',
  },
  {
    role: 'Compliance & Audit Support',
    summary:
      'Hosts bank, fintech, and public-sector risk and audit teams for physical walkthroughs and documentation reviews.',
    statusNote: 'Audit & risk support',
  },
];

export interface FacilitySpec {
  item: string;
  detail: string;
}

export const FACILITY_SPECS: FacilitySpec[] = [
  {
    item: 'Accra Certification',
    detail: 'Uptime Institute Tier IV Constructed Facility — Onix Accra #1, Phase 1',
  },
  {
    item: 'Dakar Proposition',
    detail:
      'Carrier-neutral colocation at the 2Africa cable landing station in Dakar, Senegal (certification status pending confirmation)',
  },
  {
    item: 'Power Protection',
    detail:
      'Layered power architecture combining on-site solar, utility grid feeds, standby diesel generators, and static UPS bridging',
  },
  {
    item: 'Interconnection',
    detail:
      'Carrier-neutral Meet-Me Room in Accra with LINX Accra internet-exchange presence and diverse fiber entry',
  },
  {
    item: 'Cooling & Water',
    detail:
      'Cold-aisle containment and closed-loop cooling supplied by on-site borehole water with reverse osmosis treatment',
  },
  {
    item: 'Site & Flood Resilience',
    detail:
      'Built outside central Accra congestion on raised ground designed to mitigate local flood exposure',
  },
  {
    item: 'Physical Security & Fire',
    detail:
      'Multi-stage biometric access control, man-trap airlocks, CCTV monitoring, and early-warning smoke detection with gas suppression',
  },
  {
    item: 'Remote Hands & Continuity',
    detail:
      'On-site engineering support for reboots, patching, and hardware checks, plus business continuity workspace on site',
  },
];
