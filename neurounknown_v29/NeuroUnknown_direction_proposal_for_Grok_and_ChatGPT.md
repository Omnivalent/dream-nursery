# NeuroUnknown: where should the website go next? Proposal for independent review (24 Nov 2026)

**Send this same text separately to Grok and to ChatGPT.** Each reviewer answers alone, without seeing the other's answer.
Both answers come back together to the project's main assistant, which checks the claims (PubMed for science, official pages for licences and regulation) before anything is decided.

Site: https://omnivalent.github.io/neurounknown/ · version 2.9.1 (public commit `b5c896a`) · cite page: /cite.html

## 1. What exists today
An open, educational, **hypothesis-generating** site. No discovery claims, no lab data, not medical advice. It is built and maintained by one physician working with an AI assistant. It is a static site on GitHub Pages: no server, no accounts, no analytics, and feedback goes through GitHub issues.

| Section | Content now |
|---|---|
| Our study (the original mission) | A screen of 19,299 human protein-coding genes for **overlooked brain-disease genes**: strong genetic evidence plus little research (neuronal specificity N, disease evidence D, under-characterisation U, PubMed record counts). Hand-checked flags. First lead: TMEM222 (neurodevelopmental disorder). |
| Self-disorders | Disorders of the self (Ichstörungen) in schizophrenia, in 9 steps on a 3D brain |
| 3D Neuroanatomy | 127 structures in one MRI space: cortex, deep nuclei, brainstem (22), cerebellum, 11 tracts, ventricles, 12 cranial nerves plus the optic tract, **23 arteries (new in 2.9: circle of Willis, ACA/MCA/PCA by segment, vertebrobasilar and cerebellar arteries)**. Also 20 systems, 8 neurotransmitter circuits, 7 resting-state networks, MRI slices at 0.5 mm, a guided tour, and phone layout. |
| Diagnoses | 18 conditions (neurological, psychiatric, neurodevelopmental), each with involved areas, treatment pathways from guidelines, drug-site diagrams and PubMed references |
| Gene atlas | 19,203 genes at GRCh38 positions with disease links (a deeper interactive "Genome Dive" is planned; see section 2) |
| Test yourself | 988 questions (384 clinical, 604 anatomy); most anatomy questions are generated from the atlas data |
| Other | Daily literature watch and news ticker; 7 interface languages (AI-drafted, not reviewed by native-speaker clinicians); cite and data page with downloads |

**Constraints that shape any direction**
- **Licence:** the cortical labels (Neuromorphometrics) are CC BY-NC, so the 3D brain and slices are non-commercial only.
- **No independent expert review yet:** two AI reviewers have checked the site, but no human clinician has.
- **One maintainer.** Every new section adds upkeep: guidelines change, drugs get approved, links break.
- **Network limits:** the build environment cannot reach many data hosts (figshare, NITRC, UCSC, Ensembl, GTEx), so some datasets cannot be fetched.

## 2. Open commitments (already promised, not yet done)
1. **Genome Dive, Phase 0 (fixes on the live site):**
   - remove OMIM text from the site (licence);
   - lengths on GRCh38;
   - correct the Huntington's disease entry;
   - add GWAS source and cohort columns;
   - add a "not yet curated" state.
   
   Waiting on the owner's go-ahead.
2. **From the 2.9 review:**
   - a variant switch for the circle of Willis;
   - fit the arteries to the Mouches MRA atlas (licence unresolved);
   - an arterial-territory overlay (Liu 2023; licence unresolved);
   - "atlas data / our drawing / animation" badges;
   - an accessible 3D canvas;
   - test the overlay buttons at 320 px.
3. **A physical-phone test**, and a **human expert review** before any artery questions enter the quiz.

## 3. My view: three possible identities
The site currently does three things that pull in different directions.

**A. Clinical neuroanatomy learning platform**, for medical students, junior doctors and neurology, neurosurgery and psychiatry trainees: symptom → lesion → structure → vessel → syndrome, in 3D and on slices.
- Strengths: the 3D atlas and questions already exist; this has the widest audience; it is easy to show its value.
- Risks: competition from mature commercial and free tools; it must be clinically right.

**B. Overlooked-gene research hub** (the original mission): a transparent, reproducible screen with gene dossiers, and the Genome Dive linking genes to diagnoses and to brain expression.
- Strengths: it is unusual, and could be cited.
- Risks: a small audience; easy to over-read as discovery; needs genetics expertise and careful licensing (OMIM, gnomAD, GWAS sources).

**C. Public brain explainer** (curious lay readers).
- Strengths: reach.
- Risks: needs a different tone, safety framing and translation quality; it competes with large, well-funded sites.

**My recommendation:** make **A the main product**, keep **B as a separate, clearly labelled research section**, and do **C only through what A and B produce anyway**. A builds on what is strongest, and B keeps the site distinctive. Doing all three at full depth is not sustainable for one maintainer.

## 4. Proposed directions, in my priority order

### Tier 0: Trust before growth (about 4–6 weeks)
1. **Human expert review panel:** a neurologist, a neurosurgeon, a neuroradiologist, a psychiatrist and a medical educator. They review cards, questions and the 3D relations, with a public correction log.
2. **Visible evidence labels** on every item ("atlas data / our drawing / animation / guideline / single study").
3. **Genome Dive Phase 0 fixes**, including the OMIM licence issue.
4. **A Zenodo DOI for each version**, a contact form that needs no GitHub account, and an accessibility pass (keyboard, screen reader, reduced motion).
5. **Performance:** compressed meshes, first load under 8 MB, offline use (PWA).

### Tier 1: Make the atlas a clinical tool for learning (about 2–4 months)
6. **Clinical localisation mode.** A short case describes symptoms; the learner taps the lesion site on the 3D brain or the MRI slices; the answer is then explained with the structure, the vessel and the syndrome. This connects everything we have.
7. **Vascular territories and stroke syndromes**, linked both ways (artery ↔ territory ↔ syndrome), plus the variant switch (fetal PCA, A1 hypoplasia, absent PCom).
8. **Pathways as journeys:**
   - the visual pathway with interactive field defects (lesion here → field loss there);
   - the pupillary light reflex;
   - corticospinal and dorsal column–medial lemniscus;
   - the facial nerve (upper versus lower motor neuron).
9. **The spinal cord and long tracts:** cord cross-sections, Brown-Séquard and central cord syndromes. The cord is currently missing.
10. **Learning progress without accounts:** spaced repetition and progress kept in the browser (local storage); optional anonymous item statistics to find bad questions.

### Tier 2: Research arm and depth (about 4–8 months)
11. **Genome Dive Phase 1:**
    - interactive chromosomes;
    - evidence-typed cards (single-gene disorder ≠ population association ≠ rare-variant burden ≠ expression);
    - a "Where was this gene's RNA measured?" link to the 3D brain;
    - height as the only teaching trait.
12. **Gene dossiers** for flagged overlooked genes, with an explicit evidence ladder and a "what would test this" section (no claims).
13. **Imaging correlation:** openly licensed real MRI and CT example cases next to the atlas (licences to be checked case by case).
14. **More systems:** cerebellar circuits, limbic and memory circuits, autonomic and hypothalamic, sleep, pain.

### Tier 3: Reach (later)
15. Clinician-reviewed translations; a teacher mode (shareable links to a view and question set); embeds for course pages; partnerships with medical schools.

### What I propose we do NOT do
- No symptom checker, diagnosis tool, personal risk score, or upload of personal DNA or scans.
- No AI chat giving medical answers on the site.
- No genetics of intelligence, sexual orientation, criminality or ancestry ranking.
- No claims that our overlooked genes cause disease.
- No commercial use while the cortical labels are CC BY-NC (that would need relicensed or replaced labels first).

## 5. Rules for your answer
- Give a **PMID, DOI or official URL** for every factual claim (competitors, licences, regulation, education research). Label each **VERIFIED** (you opened it), **LIKELY** or **UNVERIFIED**. Never invent identifiers.
- Be concrete and honest. Say "drop this" if something is not worth doing. Prefer conservative statements.
- No personal information is needed or wanted.

## 6. Questions
1. **Identity:** do you agree with A as the main product, B as a separate research section and C as a by-product? If not, what would you choose, and why?
2. **Rank my 15 directions** (section 4) by value for the effort, for a single maintainer. Which 5 would you do in the next 6 months? Which would you drop?
3. **What is missing** that would make medical students, trainees or teachers actually use this rather than existing tools? Name the existing tools you compare against (free and commercial), with what each does better and where a gap remains.
4. **Clinical localisation mode:** how should it be designed so that it teaches well (evidence from medical education research on case-based or retrieval practice) and does not look like a diagnostic tool?
5. **Trust and safety:** what governance does a site like this need (review process, correction log, disclaimers, conflict of interest, AI-assistance statement)? Is anything in the plan at risk of counting as a medical device or medical advice in the EU or US? Cite the regulation or guidance.
6. **Measuring impact without tracking people:** how can we learn whether it helps (opt-in surveys, anonymous item statistics, privacy-friendly analytics compatible with a static site and GDPR)?
7. **Research arm (B):** is the overlooked-gene screen worth continuing and publishing (for example as a preprint or data paper)? What would make it credible to geneticists? What must change first?
8. **Data and licences:** which openly licensed resources would most strengthen directions 6–14 (for example spinal cord atlases, vascular territories, open imaging cases, brain expression data)? Quote each licence.
9. **Sustainability:** realistic ways to keep it free and maintained (grants, institutional hosting, open-source contributors), given the non-commercial licence.
10. **Your own roadmap:** a 6-month plan with monthly milestones and one measurable goal per month.
11. **Blind spots:** what am I not seeing? List up to five risks or opportunities.

**Answer format:** for questions 2, 3, 5 and 8 a table `Item | Recommendation | Why | Effort | Risk | Source | Confidence`; for the rest, short numbered points.

## 7. Extra request for each reviewer
- **Grok:** please emphasise what is **new since mid-2025** (new open datasets, education tools, regulation such as the EU AI Act timeline) and check the live site as a first-time medical student would.
- **ChatGPT:** please emphasise a **ranked, costed 6-month roadmap** and a **comparison table of existing tools**.
