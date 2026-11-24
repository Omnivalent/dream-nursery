# NeuroUnknown direction: merged result of the two independent reviews (25 Nov 2026)

Inputs: Grok reply (NeuroUnknown_direction_Grok_reply.md) and ChatGPT reply (NeuroUnknown_direction_ChatGPT_reply.pdf), answered separately.
Checked here: all cited education and template papers in PubMed (below); the tour behaviour on a local build of 2.9.1.

## 1. Where both agree
- **Main product = clinical localisation** (finding -> side and level -> structure, pathway, vessel). Gene screen stays as a separate, clearly labelled Research section. Public explainer only as a by-product.
- **Trust first, in parallel with building:** human review with a public correction log; provenance labels on every item; a written intended purpose; AI-assistance statement.
- **Genome Dive Phase 0 now** (OMIM text and exports first). **Phase 1, more systems and new translations: not in the next 6 months.**
- **Localisation design:** fictional teaching cases only; learner commits to an answer before the explanation; region-and-side scoring; explain the chosen answer and one plausible alternative; a later unseen case to test transfer. No patient inputs, uploads or treatment advice in this mode.
- **Medical-device status:** as an educational tool with fictional cases and no patient data, both expect it to fall outside the EU MDR and US FDA device rules, provided the intended purpose is written down and respected (reviewer-reported; official pages not opened here).
- **Measurement:** opt-in, aggregates only, no analytics needed for a pilot.
- **Gene screen:** worth one careful methods/data preprint after Phase 0, not a discovery paper.

## 2. Where they differ (my recommendation in bold)
| Topic | Grok | ChatGPT | Recommendation |
|---|---|---|---|
| Pilot size | 20-40 cases, 15 signed off by month 4 | 8 reviewed cases + supervised class pilot (>= 12 learners), transfer test | **8 reviewed cases first** (review is the bottleneck), then grow |
| Territories and variants | In the first 5 picks, part of localisation | Optional overlay after the pilot | **Variant note in cases now; overlay after the pilot** |
| Spaced repetition / progress | Simple local-storage progress after v1 | Defer; at most a local completion flag | **Defer** |
| Imaging cases | Link out to Radiopaedia (CC BY-NC-SA 3.0) | One or two rights-cleared cases later (ISLES 2022, CC BY 4.0 per metadata) | **Later; link out first** |
| Mouches artery atlas licence | CC BY 4.0 | CC0 | Unresolved; not yet used |
| Liu territories licence | CC BY (NITRC) | CC BY-SA 4.0 (authors' release) | Unresolved; not yet used |
| OMIM replacement | - | ClinGen gene-disease validity (CC0 1.0) | **Adopt for Phase 0 where phenotype matches** (terms to confirm) |

## 3. Live-site problems they found
| Finding | Checked here | Action |
|---|---|---|
| Atlas tour opens on Home, not only the atlas | True: by design since v2.8 (owner asked for it first); it stays open if the visitor switches section | **Owner decision** (atlas only, or keep on Home but close when leaving) |
| Home, title, ticker and cite page present a gene project | True | Part of the identity change (owner decision) |
| "220 flagged genes" (ticker) vs "2 flagged" (Gene atlas) vs "12 after audit" (Our study) | Wording inconsistency; to trace | Fix wording before any preprint |
| "Spot the lesion (3D)" off the first screen on phones | Not yet checked | Put localisation first on Test yourself |
| Searching a deep structure (hippocampus) fades the brain without showing it | Not yet checked | Turn to a medial/cut view when a deep structure is selected |
| Default first quiz item is a treatment question | Not yet checked | Label treatment items "exam-style, not advice"; localisation first |
| Seven AI-drafted languages unreviewed | True (stated on site) | Mark as "machine draft, not reviewed" or hide |

## 4. Papers checked in PubMed (all exist and support the use made of them)
- Roediger & Karpicke 2006, test-enhanced learning: PMID 16507066, doi 10.1111/j.1467-9280.2006.01693.x
- Larsen 2013, testing with standardized patients transfers to clinical application: PMID 22618856, doi 10.1007/s10459-012-9379-7
- Larsen 2013, testing vs self-explanation: PMID 23746156, doi 10.1111/medu.12141
- Thistlethwaite 2012, BEME Guide 23: case-based learning is liked, but effects on learning are **inconclusive** (Grok's "supportive but mixed" overstates it): PMID 22578051, doi 10.3109/0142159X.2012.680939
- Kerfoot 2009 and 2010, spaced education RCTs: PMIDs 18614145, 20022032
- De Leener 2018, PAM50 spinal cord template aligned to ICBM152: PMID 29061527 (reuse licence still unverified)

## 5. Proposed 6-month plan (merged)
| Month | Work | Goal |
|---|---|---|
| 1 | Identity change (owner decision), intended-purpose sentence, provenance labels, correction log, Genome Dive Phase 0 (OMIM out), tour and number fixes, translations marked as drafts | Every pilot item has a source and label; OMIM text gone |
| 2 | Accessible case shell (3D, slice and a text route), phone benchmark, version DOI, contact address without GitHub, reviewers start | One case completes by keyboard and touch; first load under 8 MB on two phones |
| 3 | First 4 cases: visual fields, internal capsule, Wallenberg, oculomotor nerve with PCom | 4 cases signed off by two reviewers |
| 4 | 4 more cases (AChA, ACA, PCA/calcarine, facial UMN vs LMN); supervised class pilot | 8 reviewed cases; >= 12 learners |
| 5 | Revise weak items; unseen transfer test after 7-14 days; variant note and territory overlay if licence clear | >= 8 learners complete follow-up |
| 6 | Archive release with DOI, correction log, teaching pack; decide next investment (vascular overlay, imaging lesson or spinal cord); gene-screen preprint if Phase 0 is done | Public report with denominators |

## 6. Decisions only the owner can make
1. Adopt clinical localisation as the main identity and change the home page, title, ticker and cite line?
2. Tour: atlas only, or keep it on Home but close it when the visitor leaves?
3. Go-ahead for Genome Dive Phase 0 (removing OMIM text first).
4. Reviewers: who can you ask (neurology, neurosurgery, neuroradiology, psychiatry, medical education)? Can you arrange one teaching group for a pilot?
5. A contact address for corrections that is not your personal email (for example a project alias).
6. Translations: label as machine drafts, or hide until reviewed?
