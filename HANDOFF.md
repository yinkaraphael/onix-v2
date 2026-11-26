# Onix Data Centres — Redesign Handover Record

## 1. Repository, Baseline & GitHub Setup

- **Baseline commit in local repository**: `c5ca7788a027b6605278853d8753ab634536f35f` (`baseline: preserve imported Onix prototype`, branch `main`), committed before any redesign edits.
- **Origin verification note**: The original workspace arrived without existing `.git` history or GitHub credentials (`gh` CLI and SSH/HTTPS tokens are absent in this sandbox), so upstream repo URL / commit SHA from `yinkaraphael/onix` could not be queried directly from the sandbox. The imported prototype state was preserved verbatim as the baseline commit, and `.github/workflows/deploy.yml` was changed to `workflow_dispatch:` only so it will not auto-publish to public GitHub Pages.
- **Exact GitHub steps remaining to publish to a new private repository (`onix-redesign-v2`)**:
  ```bash
  # Authenticate via GitHub CLI or create an empty private repo named "onix-redesign-v2" on GitHub
  gh repo create onix-redesign-v2 --private --source=. --remote=origin --push
  # Or add an HTTPS/SSH remote to the newly created private repo and push:
  git remote add origin https://github.com/<your-account>/onix-redesign-v2.git
  git push -u origin main
  ```
  Leave the original repository, branches, GitHub Pages settings, and live `onixdatacentres.com` untouched. Keep the new repository private while under review.

---

## 2. Summary of Redesign Changes

1. **Homepage Hero & Action Hierarchy (`src/pages/HomePage.tsx`, `src/components/Header.tsx`, `src/components/PageEndBlock.tsx`)**
   - Simplified welcome line to `"Welcome to Onix"` (moved credentials to the factual proof strip; removed unconfirmed ownership claims).
   - Set H1 to `"Built for Accra’s power cuts."` with responsive scaling (`34px` mobile -> `48px` tablet -> `60px` desktop) so headlines stay readable at `390 px` and `320 px`.
   - Updated hero copy to focus on Accra facility walkthroughs in person or by live video without unverified measurements.
   - Standardised top and bottom actions to `"Request a tour"` (primary) and `"Talk to an engineer"` / `"Talk to our team"` (secondary), displaying format, walkthrough scope, and post-request confirmation behaviour directly alongside actions.
   - Replaced `"Learn more"` buyer card links with destination-specific labels: `"Explore colocation for banks"`, `"See interconnection options"`, `"Explore hosting in Ghana"`, and `"See the migration plan"`.
   - Kept Onix red (`#B12D24`), deep navy (`#243F87`), real facility drone video + poster, clean text layout for operations/leadership teams (`LEADERSHIP_OVERVIEW`), and removed particle canvas animations.

2. **Accra vs. Dakar Distinction (`index.html`, `src/data/siteContent.ts`, `src/pages/SenegalPage.tsx`, `src/components/Footer.tsx`)**
   - Updated page `<title>`, social metadata, proof strip, and footer to `"Onix | Tier IV in Accra and Colocation in Dakar"`.
   - Scoped the Tier IV claim strictly to **Onix Accra #1, Phase 1 — Tier IV Constructed Facility** and linked directly to `https://uptimeinstitute.com/uptime-institute-awards/datacenter/onix-accra-1/1775`.
   - Kept all Tier labels off Dakar descriptions; positioned Dakar strictly as carrier-neutral colocation at the 2Africa cable landing station.
   - Kept `"Dakar, Sénégal (FR)"` accessible from navigation and updated `/fr/senegal` with the required French copy naming Accra for Tier IV, Dakar-only contacts (`+221 77 668 41 10`, `https://wa.me/221776684110`), and `"Demander une visite"`.

3. **Evidence, Power Story & Form Safeguards (`src/components/PowerStoryDiagram.tsx`, `src/components/ProofStrip.tsx`, `src/components/CostEstimator.tsx`, `src/pages/*.tsx`)**
   - Changed `PowerStoryDiagram` default active state to `"Grid cut"` (`"Illustrative power handover"`), describing `"layers of power protection"` and plain-language UPS-to-generator bridging steps without unconfirmed telemetry timestamps or kW figures.
   - Replaced unverified `ProofStrip` percentages/counts with verifiable external records (`Uptime Institute` Accra #1 Phase 1 + `LINX Accra`) and factual multi-site/multi-layer summaries.
   - Removed placeholder testimonials (`Banks & Fintech`, `Networks & Content`, `Enterprise & Public Sector`), placeholder `Insights` cards, `OutageDiaryModal`, `BoardPackModal` + all board/engineering/migration pack downloads, fake `.txt` verification downloads, and the unverified USD `CostEstimator` calculator (replaced with a scoped quotation brief routing to `contact`).
   - Updated forms (`BookATourPage`, `ContactPage`, `TourBookingModal`, `SenegalPage`) with explicit `<label htmlFor>` bindings and honest preview notices clarifying that no submissions are transmitted or stored in this static preview.

4. **Mobile & Accessibility Fixes (`src/components/CookieConsent.tsx`, `src/components/StickyMobileBar.tsx`)**
   - Compacted the mobile cookie banner with equal-weight `"Accept all"` / `"Essential only"` buttons (`min-h-[44px]`), keyboard focus rings, and coordination hiding `StickyMobileBar` while the cookie banner is open so controls never collide on small screens.

---

## 3. Editorial & Future Content Decisions (Internal Notes)

- **Alternate headline held for Engineering review**: `"When the grid goes down in Accra, your systems don’t notice"` is held out of public pages until Onix Engineering reviews and signs off on the technical phrasing.
- **Future pack plan**: Replace the deleted ad-hoc packs later with **one Accra decision pack** (supporting optional banking and network inserts) plus **one separate Dakar facility sheet**, once specifications and legal sign-off are complete.
- **Cookie wording review**: Current English and French cookie notice copy in `src/components/CookieConsent.tsx` is a working preview placeholder and requires Legal / Privacy sign-off before public launch.
- **Staff photography & bios**: Team cards use a clean text-only layout (`LEADERSHIP_OVERVIEW`) naming CEO Razak Awudulai alongside verified functional leads until approved staff portraits and cleared quotes/bios are supplied.

---

## 4. Withheld Claims & Assets Pending Verification

| Withheld Claim / Asset | Why Withheld | Verification Needed | Owning Onix Team |
| :--- | :--- | :--- | :--- |
| Contractual uptime SLAs (`99.995%` Accra, `99.98%` Dakar, `1 h 45` annual conversion) | Brief holds contractual uptime percentages until agreements and wording are approved | Confirm exact approved SLA clauses per facility and jurisdiction | Legal & Commercial |
| Ownership & milestone dates (`"Ghanaian and African owned and operated"`, `2019` / `2023` claims) | Brief holds entity ownership wording pending confirmation | Confirm approved corporate/ownership phrasing per entity | Executive / Legal |
| Non-Tier-IV certifications (`ISO 27001`, `ISO 9001`, `PCI-DSS` numbers, expiry dates, Bank of Ghana CISD audit pack) | Placeholder numbers (`UI-FAC-...`, `IS 712894`) & synthetic `.txt` downloads removed | Supply verified certificate numbers, validity dates, and approved PDFs | Risk, Compliance & Operations |
| Dakar certification status & subsea cable list beyond 2Africa (`ACE`, `MainOne`) | Brief restricts Dakar to carrier-neutral colocation at 2Africa landing station | Confirm actual live cable interconnections & any facility certifications in Dakar | Dakar Operations & Network Engineering |
| Facility physical & sustainability metrics (`1.5 m` height, `25 km`, `640 kW`, `2,200` panels, `1.35 PUE`, `42%` daytime share, `0%` municipal water, `21.5°C`, `104 kW`, `2 of 6 CRAC`, `3 × 456 kW`, `2N+1`, `170`/`680` racks, `1,950`/`1,450 m²`, `200 m²` DR office, `3`/`5 kW` per rack) | Unverified engineering specifics excluded until Engineering confirms | Audit and sign off each physical rating and sustainability measurement | Engineering & Facilities |
| Response times & operational commitments (`< 15 mins` remote hands, `24/7` staffing claim, `3 working days` cross-connects, `12+` carriers, `< 2 ms` latency, `60 min` tour duration, `4h` / `24h` / `2 working days` reply SLAs) | Basis of timing, SLA, and carrier counts unconfirmed | Confirm measurable SLA commitments and current carrier roster | Operations & Network Engineering |
| Buyer testimonials, metrics, Outage Diary logs, Insights articles & named staff bios/quotes (`Nana Kofi Adjei`, etc.) | Placeholder/fabricated stories (`$25k` savings, `18%` latency drop, fake logs/quotes) | Replace with signed client case approvals, verified articles, and cleared staff bios/photos | Marketing, Legal & Operations |
| Live tour/enquiry form submission integration | Preview site has no live backend endpoint | Wire `/contact`, `/book-a-tour`, `/fr/senegal`, and `TourBookingModal` to CRM/email webhook | Web Engineering & Commercial |
| Accra decision pack & Dakar facility sheet | Packs consolidated post-review per brief | Draft and sign off one Accra pack (+ banking/network inserts) and one Dakar sheet | Commercial, Engineering & Compliance |
