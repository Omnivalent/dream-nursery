# NeuroUnknown v2.3: known limitations and suggested next steps (23 Nov 2026)

Site: https://omnivalent.github.io/neurounknown/ (static site, GitHub Pages). Version 2.3. Rollback: v2.2 = site commit `d63d64a`.

## What v2.3 contains (for context)

- 3D neuroanatomy: 91 structures (171 meshes) in one space, ICBM 2009 nonlinear asymmetric (MNI152NLin2009).
  Sources: Neuromorphometrics labels (CC BY-NC, moved into ICBM 2009 with a fitted 12-parameter affine), MASSP 2.0 nuclei
  (7 T MRI; Bazin et al. 2020 eLife PMID 33325368; 2025 Imaging Neurosci PMID 40800761), Juelich histological atlas tracts (FSL),
  brainstem divisions drawn at landmarks, 12 schematic cranial nerve nuclei (III to XII).
- Slice views: 182 / 218 / 182 slice positions at 1 mm (unchanged), each drawn from the ICBM 2009b template at 0.5 mm.
- Disease atlas: 18 conditions (neurological, psychiatric, neurodevelopmental), treatment lines with PubMed-checked sources.
- Test yourself: 384 clinical and 536 neuroanatomy questions, plus a 3D "spot the lesion" game.
- Gene atlas and our genetic screen (hypothesis-generating), daily PubMed literature watch (GitHub Action, 12:00 CET).

## Limitations

### A. Anatomy and imaging
1. **Population average, not a person.** All anatomy is an average of many brains. Individual anatomy varies by millimetres.
2. **Image sharpness has a ceiling.** 0.5 mm is the finest public MRI template we can reach (ICBM 2009b). An averaged T1 image
   cannot show individual brainstem nuclei; true nucleus-level detail needs histology (for example BigBrain, 20 to 100 µm), whose
   download host is blocked from our build environment and whose contrast differs from MRI.
3. **Cranial nerve nuclei are schematic.** No reachable MRI atlas contains them. They are ellipsoids placed at textbook positions
   relative to landmarks measured in the template (aqueduct, fourth-ventricle floor, colliculi, brainstem width). Labelled as such.
4. **Brainstem division borders are approximate** (two oblique planes through standard landmarks). In the Neuromorphometrics atlas
   the front of the midbrain belongs to the "ventral diencephalon" label, so the midbrain mesh is mainly its back part.
5. **Registration is affine, not nonlinear.** Atlases from different spaces were aligned with fitted affines (whole-brain Dice
   0.966 and 0.978); local errors of 1 to 3 mm remain, most visible for small structures (geniculate nuclei differ by 2 to 3 mm
   between Juelich and MASSP).
6. **Tracts are coarse.** Juelich maximum-probability tracts at a 25 % threshold; the superior longitudinal and uncinate fasciculi
   are small fragments. No diffusion tractography.
7. **Still missing:** optic nerve and optic tract, mammillary bodies, locus coeruleus, inferior olive, medial longitudinal
   fasciculus, cerebellar peduncles and nuclei, pituitary, spinal cord, cortical layers, blood vessels and vascular territories.
8. **Licence.** Neuromorphometrics data are CC BY-NC, so the anatomy files cannot be used commercially or relicensed.
9. **Weight on phones.** About 10 MB of meshes and 14 MB of 0.5 mm slices (loaded only when the slice view is opened).

### B. Question bank
1. **Below the 500-question target for clinical questions (384).** Most questions are generated from the site's own checked data;
   only 67 are hand-written vignettes. Generated items are templated and less nuanced than real exam questions.
2. **No expert review and no item statistics** (difficulty, discrimination). Ambiguity rules are strict (no overlapping lesion
   effects, no containing structures, no fuzzy-network distractors, no "NOT involved" items), but a clinician panel has not
   reviewed the bank.

### C. Disease content
1. The 11 conditions added in v2.2 are "lite": brain areas and treatment lines, but no gene screen yet.
2. Treatment pathways are summaries of guidelines that change; EU and US differences are only partly captured.
3. No independent clinical review of the disease pages yet; the interface translations (6 languages) are AI-generated and not
   reviewed by native-speaking clinicians; scientific content is English only.

### D. Research and genetics
1. The genetic screen is hypothesis-generating; it is not a discovery claim. Only 2 genes currently carry the "overlooked" flag
   (FAM120A, AKAP11) under the v2.1 rule (independent statistical genetics, at most 60 PubMed records).
2. PubMed counts change daily; the literature watch runs on GitHub because the build environment cannot reach NCBI E-utilities.

### E. Feedback and automation
1. The feedback box opens a public GitHub issue, so a visitor needs a free GitHub account. An anonymous form needs a service
   account owned by the site owner (for example Tally or Google Forms).
2. The 6-hourly improvement task may only make small, verifiable fixes and must pass `tools/site_check.py` before publishing;
   it cannot replace human or expert review, and it must not change scientific claims without PubMed verification.

### F. Platform
1. Static site with no accounts and no analytics (by design, for privacy): we do not know how many people use it.
2. No formal accessibility audit (screen readers, keyboard-only use of the 3D viewer).
3. No permanent identifier yet (for example a Zenodo DOI) for citing a fixed version.

## Suggested next steps (in order of value)

1. **Expert review round:** a neurologist, a neuroradiologist and a psychiatrist review the anatomy notes, lesion effects,
   disease pages and a sample of 100 questions; corrections logged publicly.
2. **Hand-write about 120 more clinical vignettes** (peer-checked, with sources) to reach 500 clinical questions safely.
3. **Replace the schematic cranial nerve nuclei** with an MRI brainstem nucleus atlas (Brainstem Navigator, Bianciardi lab), if
   its licence allows redistribution, and add the locus coeruleus and inferior olive from the same source.
4. **Nonlinear registration** (ANTs SyN) of all atlases to ICBM 2009 to remove the 1 to 3 mm residual errors.
5. **Add missing pathways:** optic nerve and tract, mammillary bodies, cerebellar peduncles, spinal cord (PAM50 template) and
   arterial territories (stroke teaching).
6. **Clinical localisation mode:** a case gives symptoms and the learner clicks the lesion site on the brain or slices.
7. **Anonymous feedback** through a form owned by the site owner, plus an optional short usefulness survey.
8. **Performance:** WebP slices, caching with a service worker, smaller meshes for phones.
9. **Accessibility audit** and clinician-reviewed translations.
10. **Zenodo DOI** for each version.
