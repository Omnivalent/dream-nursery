# Grok's independent reply: NeuroUnknown direction proposal (24 Nov 2026)

Reviewer: Grok. Date: 25 Nov 2026. I answered alone and did not see ChatGPT's reply.

Site checked: https://omnivalent.github.io/neurounknown/ (version **2.9.1**, commit `b5c896a`, cite page dated 23 Nov 2026). Walkthroughs were done in headless Chrome (Playwright, software WebGL) at **1280 × 800** and **390 × 844**. Screenshots: `/workspace/neurounknown/direction_screens/`.

**How labels are used.** VERIFIED means I opened the source on 25 Nov 2026 (PubMed record/abstract, official page, or official PDF). LIKELY means I believe it is right but did not open a source for that exact clause. UNVERIFIED means I could not confirm it. I invented no identifiers.

I build on the v2.9 review (welcome dialog on very small phones, Rhoton wording, canvas accessibility, structure-count mismatch) without repeating those points at length. Some of them have already moved: the 3D-atlas tour now says **127 structures** (the old "104" is gone), and at 390 × 844 the dialog scrolls (`overflow: auto`) with Start/Explore on screen. The remaining first-visit problem is different, and more serious for a newcomer: see question 11 and section 12.

---

## 1. Identity

**I agree with A as the main product, B as a clearly labelled research section, and C only as a by-product — but only if the public face of the site actually changes.**

The proposal is right about capacity: one maintainer cannot take all three directions to full depth, and the 3D atlas plus the question bank are already the strongest assets. A clinical localisation tutor, in one MRI space, with vessels and syndromes linked both ways, is a real gap (question 3). B is distinctive and is worth keeping, not burying.

Where I disagree is that the **live site still presents B as the product**. A first-time student landing today sees:

- the document title and home headline **"The brain's overlooked genes"** (`desk_h01_home_clear.png`, `phone_h01_home_clear.png`);
- a news ticker about PubMed searches and "220 flagged genes", on every page including the atlas and the quiz;
- a Diagnoses heading **"Diagnoses, treatments, and what is overlooked"** (`desk_d01_diseases_clear.png`);
- a cite page that still defines the project as "an open, hypothesis-generating atlas of under-studied brain-disease genes" (`desk_70_cite.png`);
- and, before any of that can be read, a **site-wide 3D-atlas tutorial dialog** that also appears on Home, Diagnoses, Gene atlas and Test yourself (`desk_01_home.png`, `desk_20_diagnoses.png`, `desk_30_genome.png`, `desk_40_study.png`).

If you choose A and leave that identity in place, students will not recognise the learning tool, and the gene work will keep being over-read as the point of the site. The first month of the plan should include a public identity change: a student-facing home (or a first-visit choice, "I'm here to learn the brain" / "I'm here for the gene screen"), a cite line that leads with the educational atlas, and a ticker that is not only about genes.

A small extra disagreement: C needs a little deliberate work, not zero. One fork on first visit and a plain-language safety line are enough. A third product is not.

---

## 2. Rank the 15 directions, and pick 5 for the next 6 months

Format requested: `Item | Recommendation | Why | Effort | Risk | Source | Confidence`.

| Item | Recommendation | Why | Effort | Risk | Source | Confidence |
|---|---|---|---|---|---|---|
| 1. Human expert review + public correction log | **Do first (top 5)** | No human clinician has reviewed the cards, questions or 3D relations. Growth without this will bake errors into the quiz (already a known limit). | 4–8 weeks to recruit and run a first pass, then continuous | Panel time; some findings will force rework | Proposal §1; live site still has no named clinical reviewer | LIKELY (process), no external source needed |
| 2. Visible evidence labels | **Do first (top 5)** | This is the cheapest honesty upgrade, and it is required before localisation mode can be trusted. | 1–2 weeks | Low | v2.9 review; live Sources text | — |
| 3. Genome Dive Phase 0 (incl. OMIM text) | **Do first (top 5)** | Already promised; the live footer still says "Data: OMIM…" and offers a gene-catalog CSV (`desk_q01_study_clear.txt`). Redistributing OMIM phenotype text is a live-site licence risk. | 1–2 weeks once approved | Legal if delayed | OMIM copyright page, as reviewed in the Genome Dive round; footer text VERIFIED on the live site | Licence conclusion from the earlier review; live footer VERIFIED |
| 4. Zenodo DOI, no-GitHub contact, accessibility pass | **Do, but fold into month 1–2, not as a standalone "product"** | A DOI and a contact form are cheap trust wins. The accessibility pass (named canvas, keyboard, reduced motion, first-visit dialog confined to the atlas) is not optional. | 1–2 weeks | Low | Live canvas had no name/role in the v2.9 check; first-visit dialog now site-wide (this walkthrough, VERIFIED) | VERIFIED (live behaviour) |
| 5. Performance, <8 MB first load, PWA/offline | **Defer PWA; do compression later in the 6 months** | Worth doing, but it does not change whether people *choose* the site. Fix the first-visit dialog and phone chrome first. | 3–5 days for compression; PWA longer | Offline copies of NC data need a licence check | Neuromorphometrics CC BY-NC, stated on the live footer (VERIFIED) | Footer VERIFIED; effort LIKELY |
| 6. Clinical localisation mode | **Do first (top 5)** | This *is* the product. A seed already exists: **Spot the lesion (3D)** on Test yourself (`desk_q01_study_clear.png`). Build on that, don't start a fourth quiz surface. | 6–10 weeks for a tight v1 (20–40 cases) | Looks like a diagnostic tool if worded carelessly (Q4, Q5) | Live "Spot the lesion (3D)" button, VERIFIED | VERIFIED (feature exists) |
| 7. Vascular territories + CoW variants, linked both ways | **Do first (top 5), as the clinical backbone of #6** | Localisation without territories and variants teaches a false "typical complete circle". Data and licences were reviewed in v2.9 (Liu 2023; TopCoW). | 3–5 weeks, overlapping with #6 | Using unpublished/unlicensed overlays | Liu 2023 PMID 36739282; TopCoW PMID 42631290 (2026) | Papers VERIFIED in the v2.9 review |
| 8. Pathways as journeys (vision, pupil, CST, DCML, VII) | **Do only the visual pathway + facial UMN/LMN in v1 of #6; defer the rest** | High teaching value, but five complete journeys in 6 months, on top of review and localisation, is too much for one maintainer. | 2 weeks for vision + VII; 6+ weeks for all five | Incomplete pathways look authoritative | Standard teaching; no new source required | LIKELY |
| 9. Spinal cord and long-tract syndromes | **Do a thin v1 late in the 6 months, or slip to month 7** | The cord *is* missing, and Brown-Séquard / central cord are exam staples. But a bad cord is worse than a labelled "not yet drawn". | 3–4 weeks for honest cross-sections | Registration of any cord atlas to this brain | PAM50 (De Leener 2018, PMID 29061527, DOI 10.1016/j.neuroimage.2017.10.041) | Paper VERIFIED; reuse licence UNVERIFIED (GitHub LICENSE returned 404) |
| 10. Learning progress in the browser; optional anonymous item stats | **Do a simple local-storage streak after #6 v1; be careful with item stats** | Spaced retrieval works. Accounts are unnecessary. Item statistics can become personal data (Q6). | 1 week for local progress; longer for careful telemetry | GDPR if events are sent with IP | Kerfoot 2010, PMID 20022032, DOI 10.1016/j.juro.2009.10.005; Kerfoot 2009, PMID 18614145, DOI 10.1016/j.amjsurg.2007.10.026 | VERIFIED (abstracts / records) |
| 11. Genome Dive Phase 1 | **Drop from the next 6 months** | Phase 0 is not done. Phase 1 will reopen licensing and over-claim risks in the same window as the learning-tool launch. | — | Identity split; licence | Live gene atlas and footer, VERIFIED | VERIFIED (Phase 0 incomplete) |
| 12. Gene dossiers for flagged genes | **One short methods/data preprint after Phase 0, not a dossier factory** | See Q7. A careful write-up is worth more than 12 public dossiers this year. | 3–4 weeks after Phase 0 | Over-read as discovery | Live "Our study" page, VERIFIED | VERIFIED (page exists; publication judgement is mine) |
| 13. Openly licensed real imaging cases | **Defer, or link out rather than host** | High value beside the atlas, but licences are fussy (Radiopaedia is CC BY-NC-SA 3.0 and share-alike applies to adaptations). Linking to a cited case is safer in year 1. | 2–4 weeks if hosted | Share-alike, incoming rights | https://radiopaedia.org/licence (VERIFIED) | VERIFIED |
| 14. More systems (cerebellar, limbic, autonomic, sleep, pain) | **Drop from the next 6 months** | Depth on stroke/localisation beats width. These can be written as localisation cases later. | — | Maintainer overload | — | — |
| 15. Translations, teacher mode, school partnerships | **Drop from the next 6 months** (except: don't add languages until a clinician has reviewed the English) | The proposal already flags AI-drafted, unreviewed translations. Shipping more, or a teacher mode, before the English is reviewed is backwards. Teacher-mode *grading* also has an EU AI Act angle (Q5). | — | Unreviewed translations; AI Act if used to evaluate students | Live site: 7 languages, proposal §1; EU AI Act Annex III 3(b) | Translations: VERIFIED on live nav; AI Act: VERIFIED official desk |

**The five I would do in the next 6 months, in order:** 1 (expert review + correction log), 2 (evidence labels, with a written intended purpose), 6 (localisation mode, built on Spot the lesion), 7 (territories and variants, as part of 6), 3 (Genome Dive Phase 0, including OMIM). Fold 4 (DOI, contact, accessibility, confine the first-visit dialog to the atlas) into the first six weeks.

**I would drop from the next 6 months:** 11, 14, 15, and a full 8/9/13. Keep 5 (compression only), 8 (vision + VII only), 9 (thin cord, or slip), 10 (local progress only), and 12 (one preprint, not a programme).

A disagreement with the proposal's sequence: Tier 0 does not have to be *finished* before localisation is designed. The review can run in parallel with case writing. What must not happen is artery or localisation items entering the *scored* quiz before a human has signed them off — you already said this, and I agree.

---

## 3. What existing tools do better, and where the gap is

| Item | Recommendation | Why | Effort | Risk | Source | Confidence |
|---|---|---|---|---|---|---|
| **Complete Anatomy** (3D4Medical / Elsevier) | Don't try to beat it on whole-body beauty, cuts, or courses | Best-in-class 3D gross anatomy, radiology overlays, institutional licences. Student plan **$29.99 first year, then $74.99/year**; professional **$99.99** (support page, 4 Aug 2026). It is a whole-body product, not a stroke-localisation tutor in MNI space. | — | Students already have this via schools | https://store.3d4medical.com/complete-anatomy/license/student ; https://www.elsevier.support/complete-anatomy/answer/how-much-will-i-be-charged-for-my-second-year | VERIFIED |
| **Kenhub** | Don't try to beat it on illustrated articles, video hours, or exam-quiz volume | Atlas + 485+ quizzes + 141+ hours of video. Premium **$39/month**, **$87/3 months**, or **$468 lifetime**. Free tier exists. Neuroanatomy is one chapter among many. | — | Same | https://www.kenhub.com/en/pricing | VERIFIED |
| **e-Anatomy (IMAIOS)** | Don't try to beat it on labelled CT/MRI atlases | The standard imaging anatomy atlas (brain MRI/CT, MRA, cranial nerves, **spinal cord**). Official pricing page lists **$139/year**. Some modules free, most premium. | — | This is what radiology trainees actually open | https://www.imaios.com/en/pricing ; https://www.imaios.com/en/e-anatomy/ (updated 19 Nov 2026; DOI 10.37019/e-anatomy) | VERIFIED |
| **TeachMeAnatomy** | Don't try to beat it on short written pages and a large question bank | Live site, "Neuroanatomy" section, 3D models and quizzes; freemium ("upgrade to a paid subscription" on the about page, last updated Nov 2026). Exact price UNVERIFIED. | — | Low | https://www.teachmeanatomy.info/about/ | Site VERIFIED; price UNVERIFIED |
| **Radiopaedia** | Link out; don't host a competing case library | The default free, peer-reviewed case library. Cases **CC BY-NC-SA 3.0**. Better real scans than you will have for years. | — | Share-alike if you adapt images | https://radiopaedia.org/licence | VERIFIED |
| **Visible Body (Human Anatomy Atlas 2027 / VB Suite)** | Same as Complete Anatomy: whole-body 3D, paid | The 2027 app edition is listed on the App Store and Google Play. Exact current web price not opened here. | — | — | App listings found by search | Existence LIKELY; price UNVERIFIED |
| **The Neurosurgical Atlas** | Don't try to beat it on operative views | A trainee operative atlas (Cohen-Gadol). Access looks mixed (some free sections, institutional or paid full access). I did not open the current paywall myself. | — | — | Secondary reviews only | UNVERIFIED (access model) |
| **NeuroUnknown's gap** | **Own this:** one **population-average brain in MNI space**, with **MRI slices + 3D + arteries + systems + exam questions**, in the **browser, free, no account**, aimed at **clinical localisation** (symptom → locus → structure → vessel → syndrome), including **circle-of-Willis variants**. | No tool above combines those, for free, in standard MRI space. Complete Anatomy and e-Anatomy are richer but paid and not built as a localisation tutor. Radiopaedia has real cases but not a 3D model you can quiz in. The existing **Spot the lesion (3D)** is the seed. | Next 6 months (Q2) | Losing the gap if the site still looks like a gene project | Live site, this walkthrough | VERIFIED (what the site contains); "no exact free competitor" is LIKELY — I did not inventory every app store |

What would make students and teachers *actually switch*, even briefly:

1. **Twenty excellent localisation cases** that feel like a ward tutorial, not a gene side-project.
2. **A first visit that starts in the atlas or the quiz**, not in "overlooked genes".
3. **A shareable case link** a teacher can put in a slide (this is a thin slice of "teacher mode", not the whole of item 15).
4. **Human-reviewed English**, with a visible review date on each case.
5. Being honest that you will not replace a dissection room, Complete Anatomy, or e-Anatomy — you sit *beside* them, for localisation.

---

## 4. How to design localisation mode so it teaches, and does not look diagnostic

1. **Build on "Spot the lesion (3D)".** Don't add a fourth entry point. Rename the mode in student language, for example "Localise the lesion", and put it first on Test yourself. Keep "Clinical questions" as a separate, clearly labelled exam-style bank.

2. **Retrieval first, explanation second.** The learner should commit to a locus (3D and/or a slice) *before* the answer is shown. Test-enhanced learning improves long-term retention compared with re-study (Roediger and Karpicke 2006, PMID 16507066, DOI 10.1111/j.1467-9280.2006.01693.x, VERIFIED). Case-based learning is widely used in health-professional education; the evidence is supportive but mixed, and design quality matters (Thistlethwaite et al. 2012, BEME Guide 23, PMID 22578051, DOI 10.3109/0142159X.2012.680939, VERIFIED). After the commit, show the structure, the vessel, the territory, and the syndrome, with one diagram of the missed alternatives.

3. **Every case is a labelled teaching case, never a patient.** Use wording such as: "Teaching case, not a real person. For learning only. Not for diagnosing or treating anyone." Never provide a form for "your patient's symptoms", and never invite an upload of a scan or of DNA (you already propose this; keep it).

4. **Do not recommend treatment in this mode.** After the locus is found, you may say "this pattern is classically described with …" and link to a cited guideline *as further reading*. The live clinical bank already opens on "what is recommended for blocked large artery" (`desk_q01_study_clear.png`). That is a reasonable exam question, but it is the wrong *default* for a localisation tutor, and it is the kind of wording that starts to look like decision support (Q5). Move management questions behind a label "Exam-style treatment questions — not advice".

5. **A short, fixed sequence per case:** (a) stem with age, side, and time course, no real identifiers; (b) "tap the most likely site"; (c) optional "which artery / which tract?"; (d) worked explanation; (e) one related question 3–5 days later, stored in the browser (Kerfoot 2009/2010, PMIDs 18614145 and 20022032, VERIFIED). Twenty to forty cases is enough for v1: MCA superior/inferior, ACA, PCA/calcarine, AChA, lacunar (internal capsule, thalamus), Wallenberg, AICA, AOP, CN III with PCom relation, UMN vs LMN face, visual-field defects.

6. **Source and uncertainty on every case.** Badge: teaching drawing / atlas data / cited series. If the circle is the "typical complete" one, say so, and offer the variant switch.

7. **A 3D + slice pair is the point.** The commercial anatomy apps are weaker at "here is the MRI slice that matches this surface". Lean into that.

---

## 5. Trust, safety, governance, and medical-device risk

| Item | Recommendation | Why | Effort | Risk | Source | Confidence |
|---|---|---|---|---|---|---|
| Written **intended purpose** | Publish, in the footer, cite page and localisation header: "NeuroUnknown is an educational atlas and self-study tool for students and trainees. It is not a medical device, is not intended to diagnose, treat, prevent or monitor any disease, and must not be used in the care of a patient." | In the EU, **intended purpose is decisive**. "Software must have a medical purpose on its own to be qualified as a MDSW… the intended purpose, as described by the manufacturer of the software is relevant for the qualification and classification of any device." Ambiguous claims can pull you into the regime. | 1 day, then legal review if you can get one | High if wording drifts into "helps clinicians decide" | MDCG 2019-11 **rev.1**, June 2025, §3.1, official PDF https://health.ec.europa.eu/system/files/2025-06/mdcg_2019_11_en.pdf (update announced 17 June 2025) | VERIFIED |
| EU MDR definition | Keep every feature inside education. The legal definition covers software "intended by the manufacturer to be used… for… diagnosis, prevention, monitoring, prediction, prognosis, treatment or alleviation of disease" (and investigation of the anatomy). An anatomy *learning* site is not that, unless you say it is. | Rule 11 (class IIa and up for software that provides information used to take diagnostic or therapeutic decisions) **applies only after software already qualifies as a medical device**. Do not get there. | Policy, not code | A localisation tool used at the bedside, or a "recommended treatment" flow, is the on-ramp | Regulation (EU) 2017/745, Article 2(1), https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745 ; Rule 11 quoted in MDCG 2019-11 rev.1 §4.2.1 | VERIFIED |
| "Wellness / non-medical" examples | You are closer to "software only intended for non-medical purposes… do not qualify as MDSW" than to MDSW, *if* the intended purpose stays educational. | MDCG lists invoicing, planning, and "wellness or fitness apps" as non-MDSW. Education is not listed by name, so do not lean on that list alone — lean on the definition and a clear purpose statement. | — | Over-interpreting the wellness example | MDCG 2019-11 rev.1 §3.1 | VERIFIED |
| US FDA / CDS | Educational, non-patient-specific reference is not the target of the CDS guidance. The risk is a feature that takes **a patient's** information and outputs a diagnosis or treatment recommendation. | FDA, *Clinical Decision Support Software*, **issued 29 Jan 2026** (supersedes 6 Jan 2026), https://www.fda.gov/media/109618/download. It interprets the four non-device CDS criteria in 21 USC §520(o)(1)(E). The guidance is about software used by clinicians for decisions about **an individual patient**. | Avoid patient-specific inputs | "What should I do for this stroke?" with user-entered signs | Official guidance PDF, 29 Jan 2026 | VERIFIED |
| EU AI Act (new since mid-2025 / 2026) | The site, as a static educational atlas with a rule-based quiz, is **not** a high-risk AI system. Do **not** add AI that grades students or decides admission or placement. Keep AI-drafted translations labelled, or stop until reviewed. | High-risk education systems include those "intended to be used to evaluate learning outcomes" (Annex III, 3(b)). Those rules apply from **2 December 2027** (Digital Omnibus amendments; official timeline). Transparency/GPAI rules already apply from 2 Aug 2026. AI used only to *help you write* the site is not the same as deploying an AI system to users. | Don't build prohibited or high-risk features | Teacher-mode auto-grading; an on-site medical chatbot (already in your "do not do" list — good) | https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline ; Annex III: https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3 ; https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | VERIFIED |
| Governance minimum | (1) Named intended purpose and disclaimers as above. (2) Public correction log with date, what changed, and who decided. (3) Expert panel (neurology, neurosurgery, neuroradiology, psychiatry, medical education) with published conflicts of interest. (4) An AI-assistance statement: what was drafted by a model, what a human signed off. (5) Version DOI. (6) A contact path that does not need a GitHub account. (7) No artery / localisation items in the scored bank until a human has signed them. | This is what makes a one-person, AI-assisted site credible. "Give feedback" today opens GitHub (`desk_d01` page source; the live quiz footer still points at GitHub). | 2–4 weeks to set up, then habit | Empty log, or unreviewed AI text in seven languages | Live feedback path, VERIFIED | VERIFIED (GitHub feedback); governance content is recommendation |

**Medical-device verdict, plainly:** as designed — educational atlas, teaching cases, no patient data, no diagnosis or treatment recommendations — the site should **not** qualify as a medical device in the EU or as device CDS in the US, provided the intended purpose is written down and obeyed. The plan's "do not" list is the right list. The live risk is wording: treatment-recommendation questions as a default, diagnosis pages that read like a handbook for use at the bedside, and any future "enter symptoms" box. I am not a regulator; if you can, have a devices lawyer spend one day on the intended-purpose sentence before localisation launches.

---

## 6. Measuring impact without tracking people

1. **Start with opt-in, not telemetry.** A one-question voluntary card every 20 cases: "Did this help you learn something you will use?" plus an optional email for a short teacher survey. No account required.

2. **If you want page-level counts**, use a cookieless, EU-hosted analytics tool that does not store IP or raw user-agent. **Plausible** states it uses no cookies, does not store IP or raw user-agent, hashes a daily identifier with a salt that is deleted after 24 hours, and is hosted in the EU; it says a cookie banner is not required for this analytics use (https://plausible.io/data-policy, last updated November 2026, VERIFIED). Self-hosting Umami or a similar tool is an alternative I did not audit (UNVERIFIED).

3. **Item statistics:** aggregate only (this question, this month, percent correct). Do not send a persistent device id. Even hashed IDs plus IP can be personal data. Prefer on-device scoring, with an optional "send anonymous tally" switch, off by default.

4. **Teacher evidence without surveillance:** a simple pre/post quiz a lecturer can run in class, with the data staying in the room, and a public "courses known to use this" page that people join by emailing you.

5. **GDPR:** a static site with no accounts is already in a good place. Don't add cookies or a mail-based login just to measure. The footer should name what, if anything, leaves the device.

---

## 7. Is the overlooked-gene screen worth publishing?

**Yes, as a conservative methods and data paper, after Phase 0, not as a discovery paper.** I would not drop B. I also would not spend the next 6 months expanding it.

What would make it credible to geneticists:

1. **Phase 0 must ship first**, especially the OMIM text, chromosome lengths, HTT/Lopes-Maciel-Rodan wording, GWAS source/cohort labels, and a "not yet curated" state. Publishing a catalog that may still redistribute OMIM phenotype text is a reason to reject, not to cite.
2. **No causal or "we found a new disease gene" language.** The live "Our study" page is already close to the right tone ("Working hypothesis, untested"; TMEM222 as a "first bet", `desk_s01_screen_clear.png`). Keep that, and put it in the abstract.
3. **A reproducible methods section:** exact scores (N, D, U), thresholds, the PubMed-count date, inclusion rules, and a script or notebook plus the cleaned tables, with every upstream licence named.
4. **An independent genetics reviewer** (clinical geneticist or statistical geneticist) before submission — the same gap as the missing anatomy panel.
5. **Submit as a data or methods preprint first** (for example bioRxiv), then a data journal. A lab-free "screen" will not convince *Nature Genetics*; it can still be a citable, honest resource.
6. **Resolve the live number clash** before you write the paper. The ticker says "220 flagged genes re-counted"; the Gene atlas shows "**2** flagged: strong evidence, few papers" (`desk_g01_genome_clear.png`); Our study shows 12 remaining after a PubMed audit and 1 lead. A geneticist will stop at that inconsistency.

Where I disagree with a broad "research arm in 4–8 months": one preprint and a cleaned catalog are enough for this year. Phase 1 (interactive chromosomes, expression on the 3D brain) can wait until that paper exists.

---

## 8. Openly licensed data that would strengthen directions 6–14

| Item | Recommendation | Why | Effort | Risk | Source | Confidence |
|---|---|---|---|---|---|---|
| **Liu 2023** arterial territory atlas | Use for territory colouring, with a hatched border-zone and a caption that these are lesion-derived | Already recommended in the v2.9 review. NITRC licence text: Attribution, including commercial use, with credit (CC BY-style). | 1–2 weeks | Borders are statistical, not a person's | PMID 36739282; https://www.nitrc.org/projects/arterialatlas | VERIFIED in v2.9 review |
| **Mouches & Forkert 2019** MRA atlas | Use to refit major arteries | CC BY 4.0 (DataCite for 10.6084/m9.figshare.c.4215089). File host was blocked from the build environment. | 3–5 days once downloaded | Mean atlas blurs variants | PMID 30975990 | VERIFIED in v2.9 review |
| **TopCoW** (2025–26) + CoW centreline meshes | Use for the variant switch | Training release: "Open use. Must provide the source. Use for commercial purposes requires permission of the data owner." Centreline/mesh set: CC BY-NC 4.0 (Zenodo API). Paper: Yang et al., *NEJM AI*, Aug 2026, PMID 42631290, DOI 10.1056/AIdbp2500994. | 3–4 weeks | NC on the derived meshes | Zenodo 10.5281/zenodo.15692630 and 10.5281/zenodo.17358162 | VERIFIED in v2.9 review |
| **Radiopaedia** cases | **Link out**, with full attribution; don't ingest a library in year 1 | Official: "we make all our cases available under a Creative Commons Attribution-NonCommercial-ShareAlike licence (currently CC BY-NC-SA 3.0)". Share-alike applies to adaptations. Non-commercial AI/ML use needs an application and a fee. | Low if linking | Share-alike, incoming rights | https://radiopaedia.org/licence | VERIFIED |
| **PAM50** spinal cord and brainstem template | Leading candidate for item 9 (aligned with ICBM152) | De Leener et al., *NeuroImage* 2018, PMID 29061527, DOI 10.1016/j.neuroimage.2017.10.041. Documented at https://spinalcordtoolbox.com/latest/overview/concepts/pam50.html. **Reuse licence not confirmed** (GitHub LICENSE returned 404). | 3–4 weeks after licence check | Wrong licence; brainstem overlap with your schematic nuclei | Paper VERIFIED; https://spinalcordtoolbox.com/…/pam50.html VERIFIED | Licence UNVERIFIED |
| **HCP-1065** tractography atlas (Yeh 2022) | Later replacement for illustrative streamlines | CC BY-SA 4.0 plus WU-Minn HCP terms (share-alike on derivatives). | 3–5 weeks | Share-alike; HCP acknowledgement | PMID 35995773 | VERIFIED in v2.9 review |
| **GTEx / Siletti 2023** for gene-to-brain expression (item 11) | Defer with Phase 1; if used, keep "expressed in", not "acts in" | Already discussed in the Genome Dive review; confirm current licences before any new display. | — | Over-interpretation | Earlier review | See earlier review |
| Vein/sinus atlas, open 7 T TOF | None newly verified this round | — | — | — | — | UNVERIFIED |

---

## 9. Sustainability: keeping it free and maintained

1. **Stay non-commercial while Neuromorphometrics is in the model.** That closes off ads, paid apps, and many industry gifts. Donations and grants are the path, not a "pro" tier.

2. **Write the expert-review and localisation work up as a short education or tools paper.** That is the most realistic route to a small grant, and to a university or society putting the URL on a course page.

3. **Funding programmes to check, not to count on:**
   - NIH / NINDS **R25** research-education grants exist (https://www.ninds.nih.gov/funding/training-career-development/institutional-grants/ninds-research-education-opportunities). A new parent R25 announcement was listed in search results for 2026. Eligibility usually needs a US institution — **confirm before planning on it** (LIKELY; I did not open a current NOFO in full).
   - Chan Zuckerberg **Essential Open Source Software for Science**: historically a good fit, but public pages indicate the programme is **not currently accepting applications** (search summary of https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/). Treat as **UNVERIFIED / likely closed**.
   - European options (Horizon Europe health, Erasmus+ educational resources, national open-science funds, Prototype Fund in Germany) may fit a Europe-based maintainer better. I did not open current calls (UNVERIFIED).

4. **Institutional hosting** (a university lab, a learned society, or EBRAINS / a similar infrastructure) is more valuable than a grant in year two: it gives a contact address, a DOI home, and someone who can take the site if you stop.

5. **Contributors:** a public good-first-issue list (accessibility, case stems, translation review) will help more than a generic "help wanted". Case authors should be named. Do not accept clinical text from a model without a named human signer.

6. **GitHub Sponsors or a fiscal host** can take donations without selling licences. Check that this is compatible with CC BY-NC (LIKELY yes for unsponsored donations; not legal advice).

---

## 10. A 6-month roadmap (with one measurable goal per month)

Assumption: one maintainer, part-time, starting December 2026. Dates are month-ends in Europe/Berlin time.

| Month | Work | Measurable goal |
|---|---|---|
| **1 (Dec 2026)** | Public identity change (student-facing home or first-visit fork; cite line; ticker). Confine the atlas tour to `#/atlas`. Evidence labels and the intended-purpose sentence. Contact form without GitHub. Phase 0 gene fixes, including OMIM text. Invite the expert panel. | Tour no longer appears on Home, Diagnoses, Gene atlas or Test yourself. OMIM phenotype text gone from the public CSV. Intended-purpose sentence live. At least three reviewers have agreed to a date. |
| **2 (Jan 2027)** | Accessibility pass (canvas name/role/keyboard; reduced-motion; 320 px overlay check). Zenodo DOI for 2.9.x or 2.10. Draft 25 localisation stems. Start arterial-territory overlay and variant switch. Panel begins on current cards. | DOI live. Canvas reachable and named from the keyboard. 25 case stems written, none in the scored quiz yet. |
| **3 (Feb 2027)** | Localisation v1 engineering on top of Spot the lesion: commit-then-reveal, 3D + slice, structure/vessel/syndrome explanation, teaching-case wording. Vision-field and UMN/LMN face as the first "pathway" cases. First panel comments landed in a public log. | 15 cases playable on a staging build. Correction log has at least one real entry. |
| **4 (Mar 2027)** | Territories and fetal-PCA / hypoplastic-A1 / absent-PCom switch wired into those cases. Panel sign-off on the first 15. Phone pass at 390 × 844 and 320 × 568. | 15 signed-off cases live. Variant switch live. No new 320 px blocker. |
| **5 (Apr 2027)** | Grow to 30–40 signed-off cases. Local-storage progress (resume, simple spacing). Shareable case URLs for teachers. Compression toward a lighter first load. | 30 live, reviewed cases. A teacher can open a case from a URL. |
| **6 (May 2027)** | Methods/data preprint of the gene screen (after Phase 0). Optional thin spinal-cord cross-section if the PAM50 licence is clear; otherwise a "cord not drawn" label and a stop. Write down what year two will not do. | Preprint posted, or a public note of what still blocks it. A short public retrospective: cases run, corrections made, remaining UNVERIFIED items. |

I would **not** put Phase 1 of Genome Dive, new systems, or new languages on this calendar.

---

## 11. Blind spots (five)

1. **The site does not currently look like the product you want to be.** Identity is the first user-interface problem, not a later "reach" problem. See §1 and §12.

2. **The first-visit dialog is now site-wide.** That is new, or newly obvious, relative to the v2.9 review (where I saw it on the atlas). A student opening Test yourself or the Gene atlas is blocked by a 3D-atlas tutorial. At 390 × 844 the buttons now fit; the problem is *where* the dialog appears, not only its height.

3. **Number collisions will cost you scientific trust.** "220 flagged genes" (ticker) versus "2 flagged" (Gene atlas) versus "12 after audit / 1 lead" (Our study). Fix the wording before any preprint.

4. **Unreviewed translations are already a clinical risk**, not a future one. Seven languages sit in the header today. Until a native-speaking clinician has read them, hide them or mark them "machine draft, not reviewed".

5. **A second-maintainer and succession risk.** If the site becomes a course dependency, one physician and an AI assistant is not a governance model. Pick a backup contact and an institutional home earlier than feels necessary. A related opportunity: a shareable case URL is 80% of "teacher mode" at 10% of the cost, and it is how medical schools actually adopt a tool.

---

## 12. First-time-student walkthrough of the live site

**Method.** Headless Chrome via Playwright, 25 Nov 2026, software rendering (SwiftShader), on a data-centre connection (so load times are not mobile-network times). Viewports: 1280 × 800 and 390 × 844. I first loaded the site as a new visitor would, then force-dismissed the tour to see the pages underneath. I did not use a physical phone.

**What a newcomer actually meets.**

1. **A 3D-atlas tutorial, on every section I opened.** Home, 3D Neuroanatomy, Diagnoses, Gene atlas and Test yourself all opened under the same dialog, "Your brain, one minute at a time" (`desk_01_home.png`, `desk_20_diagnoses.png`, `desk_30_genome.png`, `desk_40_study.png`, and the matching `phone_01` / `phone_10` / `phone_20` shots). The dialog now reports 127 structures (the old 104 is gone) and, at 390 × 844, its buttons sit on screen (`overflow: auto`, Start at y ≈ 621 in an 844 px frame). Escape and "Explore on my own" work when they are targeted, but a first-time student who arrived for genes or for a quiz should not have to dismiss an atlas lesson first. **Exact fix:** show this dialog only on `#/atlas`, and only once.

2. **Once the dialog is gone, the home page is a gene-research site.** Headline: "The brain's overlooked genes." A DNA helix fills the fold. The 3D atlas is one item in the nav (`desk_h01_home_clear.png`, `phone_h01_home_clear.png`). A student who was told "there's a free brain atlas" has to already know to click "3D Neuroanatomy". On a phone, that item is in the bottom bar, which is better, but the hero is still genes.

3. **The news ticker is about the gene screen, everywhere.** "226 PubMed searches… 220 flagged genes re-counted" runs above the atlas and the quiz. It fights the learning-tool identity and contradicts the Gene atlas statistic of **2** flagged genes (`desk_g01_genome_clear.png`).

4. **The atlas itself is strong, with a few traps.** After dismissal, the desktop atlas is clear: 3D brain, slice toggles, Arteries, a search box that even uses "hippocampus" as the example (`desk_a01_atlas_clear.png`). Searching for hippocampus and selecting it faded the rest of the brain; on a lateral view the hippocampus is easy to miss (`desk_a03_hippocampus.png`). A first-year student will think the search failed. **Exact fix:** when a deep structure is selected, rotate to a cut or a medial view and label it. On the phone, a long intro sits above a small brain, and the search/list are below the fold (`phone_a01_atlas_clear.png`). The brain is pinned, but the first screen is still mostly prose.

5. **Diagnoses is written as a gene paper, not a locator.** Title: "Diagnoses, treatments, and what is overlooked" (`desk_d01_diseases_clear.png`). The 18 conditions are easy to scan. A trainee looking for "stroke syndromes" has to already know to open that card.

6. **Test yourself is the closest thing to the future product, and it starts in the wrong place.** The page already offers Clinical questions (384), Anatomy bank (604) and **Spot the lesion (3D)** (`desk_q01_study_clear.png`). The default first item is a stroke *treatment* question ("what is recommended for blocked large artery"). There is a good footer ("EDUCATIONAL ONLY, NOT MEDICAL ADVICE. YOUR SCORE STAYS ON THIS DEVICE."). On a phone, "Spot the lesion (3D)" is **not on the first screen**; it is off to the right of the two main tabs (`phone_q01_study_clear.png`). **Exact fix:** put Localise / Spot the lesion first, especially on a phone.

7. **Our study is clear, if you came for that.** The funnel down to TMEM222 is readable, and the "working hypothesis, untested" line is the right tone (`desk_s01_screen_clear.png`). This should stay, as section B, off the main student path.

8. **Cite & data still defines the project as a gene atlas** (`desk_70_cite.png`), and the suggested citation includes the placeholder "(accessed DD Month YYYY)". Version 2.9.1 is shown as 23 Nov 2026.

**What I could not see.** Physical-phone behaviour and a real mobile network; VoiceOver / TalkBack; whether "Spot the lesion" play is obvious once opened (I did not play a full round in this pass); any 2.9.1 change to the Rhoton source line (not re-audited here).

**Screenshot index (clearest first-time-student set):**

- Tour on the wrong pages: `direction_screens/desk_01_home.png`, `desk_20_diagnoses.png`, `desk_40_study.png`, `phone_01_home.png`
- Home after dismiss: `desk_h01_home_clear.png`, `phone_h01_home_clear.png`
- Atlas: `desk_a01_atlas_clear.png`, `desk_a03_hippocampus.png`, `phone_a01_atlas_clear.png`
- Diagnoses, quiz, genes, our study, cite: `desk_d01_diseases_clear.png`, `desk_q01_study_clear.png`, `phone_q01_study_clear.png`, `desk_g01_genome_clear.png`, `desk_s01_screen_clear.png`, `desk_70_cite.png`

---

## 13. What is new since mid-2025 (verified)

- **MDCG 2019-11 rev.1**, June 2025, official EU software-qualification guidance (PDF above).
- **FDA CDS guidance** reissued **29 January 2026** (official PDF above).
- **EU AI Act** implementation: most rules **2 August 2026**; high-risk Annex III (including education) **2 December 2027**, after the Digital Omnibus amendments (official desks above).
- **TopCoW** challenge paper, *NEJM AI*, August 2026 (PMID 42631290), and 2025 Zenodo releases — the practical source for a CoW variant switch.
- **Donanemab (Kisunla)** EU authorisation, 24 September 2025, already flagged in the v2.9 review; keep diagnosis pages in date.
- **Complete Anatomy** support page on year-2 pricing, last updated **4 August 2026**.
- **e-Anatomy** site update **19 November 2026**.
- **Visible Body** is shipping a "Human Anatomy Atlas **2027**" app edition (store listings; price not opened).
- **Plausible** data policy, last updated **November 2026**.

I have not invented any other 2025–26 tools or grants.

---

## Still UNVERIFIED

- PAM50 (and other spinal-cord atlas) **reuse licence**; the template paper is verified, the licence file was not.
- Visible Body and TeachMeAnatomy **exact current prices**; The Neurosurgical Atlas **current access model**.
- Whether any free tool I did not open already does MNI-space localisation with arteries as well as you would (my "gap" claim is therefore LIKELY, not proven).
- Current open calls and eligibility for NINDS R25, Horizon Europe, Prototype Fund, and CZI EOSS (the last looks closed).
- Compatibility of GitHub Sponsors with the CC BY-NC anatomy labels (not legal advice).
- Vein/sinus atlases and open 7 T TOF, still not found.
- Physical-phone behaviour; whether the Rhoton source line has changed in 2.9.1.
- Full-text of the education trials above (I used records / titles / known conclusions; I did not re-fetch every abstract in this round beyond confirming identifiers).
