# Handout for ChatGPT: NeuroUnknown review round 5 (clinical accuracy audit)

**Site:** https://omnivalent.github.io/neurounknown/ (version 2.3, 23 Nov 2026)
**Your role in this round:** clinical and educational accuracy reviewer. A separate reviewer (Grok) covers imaging methods,
technical issues and the newest literature, so please focus on the items below.

## What NeuroUnknown is
An open, hypothesis-generating website about understudied brain-disease genes, plus teaching sections: a 3D neuroanatomy atlas
with MRI-style slices, a disease atlas (18 neurological, psychiatric and neurodevelopmental conditions with treatment lines), a
gene atlas, and "Test yourself" question banks. It is educational, not medical advice. It makes no discovery claims.

## What changed since your round-4 review (we checked each of your round-4 points in PubMed; most were adopted in v2.1)
- Everything now lives in one space (ICBM 2009). Slices are drawn at 0.5 mm on the same 1 mm slice positions.
- 91 structures. New: midbrain, pons and medulla; 12 schematic cranial nerve nuclei (III to XII); real MASSP 2.0 segmentations of
  the substantia nigra, subthalamic nucleus, VTA and red nucleus, plus periaqueductal grey, pedunculopontine nucleus, colliculi,
  raphe nuclei, habenula, geniculate nuclei, claustrum, internal capsule and fornix; fibre tracts (optic and acoustic radiations,
  corticospinal tract, corpus callosum, cingulum, superior longitudinal and uncinate fasciculi).
- Each structure has a short "what it does" note and a "typical effect of damage" line (textbook clinical neuroanatomy).
- New systems: eye movement control, cranial nerve nuclei, serotonin; visual and auditory systems now run from brainstem/thalamus
  to cortex.
- Question banks: 384 clinical + 536 neuroanatomy questions, and a 3D "spot the lesion" game.

## Please review (in this order)
1. **Lesion effects** (open 3D Neuroanatomy, tap any structure, read "If it is damaged"). Especially: Weber, locked-in and lateral
   medullary (Wallenberg) syndromes; III, IV, VI, VII and XII palsies; nucleus ambiguus; vestibular and cochlear nuclei; Meyer's
   loop; internal capsule lacune; fornix; corpus callosum disconnection; Parinaud syndrome; conduction aphasia and the arcuate
   fasciculus. Is anything wrong, oversimplified to the point of being misleading, or missing a key qualifier?
2. **Function notes** for the new structures (same panel, "What it does"), e.g. the dorsal raphe and the SSRI-delay statement
   (we call autoreceptor adaptation "one proposed reason"), the habenula, the claustrum, the pedunculopontine nucleus.
3. **Question bank** (Test yourself). Take at least 3 rounds in each bank and the 3D game. Report any question where a wrong
   option could also be defended, where the keyed answer is wrong, or where the explanation is wrong. Quote the question text.
4. **Disease pages**: brain areas listed for MS, stroke (now including internal capsule and lateral medulla), ALS (now including
   corticospinal tract, medulla, hypoglossal nucleus, nucleus ambiguus), Parkinson's (now including the dorsal motor nucleus of
   the vagus as an early Braak site and the pedunculopontine nucleus), migraine (spinal trigeminal nucleus, dorsal pons).
5. **Our limitations list** (below): which ones matter most for a medical-student audience, and is anything missing?

## Known limitations (please do not re-report these unless you think we understate them)
- Population-average anatomy; 0.5 mm is the sharpest public MRI template we can use.
- Cranial nerve nuclei are schematic positions, not atlas boundaries; brainstem division borders are approximate.
- Atlases were aligned with affine (not nonlinear) registration; small structures can be off by 1 to 3 mm.
- Missing: optic nerve and tract, mammillary bodies, locus coeruleus, inferior olive, MLF, cerebellar peduncles, spinal cord,
  vascular territories.
- 384 clinical questions (below the 500 target); most questions are generated from site data; no expert panel yet.
- The 11 newer conditions have no gene screen yet; translations are AI-generated and unreviewed.

## How to answer (please follow; we verify every claim in PubMed before changing anything)
For each finding give:
- **Where:** page, structure or quoted question text.
- **Problem:** what is wrong or misleading.
- **Fix:** the exact corrected wording.
- **Severity:** critical (factually wrong) / important (misleading) / minor (wording).
- **Source:** PMID or DOI for anything that is not standard textbook knowledge. **Do not invent PMIDs or DOIs.** If you are not
  sure of an identifier, say "source not verified" and describe the source instead.

Please number your findings and end with a short list of the 5 changes you would make first.
