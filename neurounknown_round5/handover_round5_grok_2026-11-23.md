# Handout for Grok: NeuroUnknown review round 5 (imaging, technical and up-to-date literature review)

**Site:** https://omnivalent.github.io/neurounknown/ (version 2.3, 23 Nov 2026)
**Your role in this round:** imaging-methods, technical and literature-currency reviewer. A separate reviewer (ChatGPT) audits
clinical wording and the question bank, so please focus on the items below. We did not receive your round-4 answer; if you have
points from round 4 that still apply, include them.

## What NeuroUnknown is
An open, hypothesis-generating website about understudied brain-disease genes, plus teaching sections: a 3D neuroanatomy atlas
with MRI-style slices, a disease atlas (18 conditions), a gene atlas and question banks. Static site on GitHub Pages; no accounts,
no analytics. Educational, not medical advice; no discovery claims.

## Imaging and atlas methods in v2.3 (please check these)
- **Common space:** ICBM 2009 nonlinear asymmetric (MNI152NLin2009).
- **Slices:** same 1 mm navigation grid as before (182 x 218 x 182 positions); each slice is sampled from the ICBM 2009b T1
  template at 0.5 mm (Fonov et al. 2011), skull-stripped with the 2009c brain mask, bilinear interpolation in the browser.
- **Neuromorphometrics labels** (SPM space, 1.5 mm, CC BY-NC) moved into ICBM 2009 with a 12-parameter affine fitted on brain
  masks (boundary + interior cost, Powell). Whole-brain Dice 0.942 -> 0.966; putamen agreement with MASSP 0.69/0.79 -> 0.88/0.85.
- **Juelich histological atlas** (FSL, probabilistic, 25 % threshold) moved from FSL MNI152 6th-generation space with its own
  fitted affine (Dice 0.964 -> 0.978). Geniculate nuclei from Juelich and MASSP still differ by 2 to 3 mm.
- **MASSP 2.0** (Bazin et al. 2020 eLife, doi:10.7554/eLife.59430; Bazin et al. 2025 Imaging Neuroscience,
  doi:10.1162/imag_a_00560), ICBM 2009c 1 mm, via TemplateFlow: substantia nigra, subthalamic nucleus, red nucleus, VTA,
  periaqueductal grey, pedunculopontine nucleus, colliculi, raphe nuclei, lateral habenula, geniculate nuclei, claustrum,
  internal capsule, fornix.
- **Brainstem divisions:** the Neuromorphometrics brainstem label split by two oblique planes in the sagittal plane:
  midbrain/pons through the ventral pontomesencephalic junction (y -17.5, z -20.8) and the caudal edge of the inferior colliculi
  (y -37, z -15); pons/medulla through the pontomedullary sulcus (y -28, z -49) and the middle of the fourth-ventricle floor
  (y -38, z -30). Coordinates in ICBM 2009 mm.
- **Cranial nerve nuclei (schematic ellipsoids):** right-side centres (x, y, z mm): III (2.5, -23.5, -6); IV (2.5, -28.5, -12);
  V motor/main sensory (8, -31, -27); spinal V (7.5, -38, -46, long axis 8 mm); VI (3, -36.5, -29); VII motor (8, -30, -33);
  vestibular (7, -38, -33); cochlear (10.5, -38, -36); solitary (5.5, -41.5, -42); dorsal vagal (3.5, -41.8, -42);
  XII (1.5, -41.5, -43); nucleus ambiguus (5.5, -34.5, -46). Placed relative to landmarks measured in the template: front edge of
  the periaqueductal grey at the superior and inferior colliculus levels, the fourth-ventricle floor, and the brainstem half-width.
- **Meshes:** surface nets, Taubin smoothing, vertex-clustering decimation; three.js viewer.

## Please review
1. **Positions:** are any cranial nerve nucleus positions or the two brainstem planes clearly off, compared with a published MRI
   brainstem nucleus atlas (for example Brainstem Navigator) or standard histology? Give corrected coordinates with the source.
2. **Better data we could legally use:** an openly licensed MRI atlas of brainstem nuclei (cranial nerve nuclei, locus coeruleus,
   inferior olive), optic tract, mammillary bodies, cerebellar peduncles, spinal cord (PAM50), arterial territories. For each:
   name, licence, download location, coordinate space.
3. **Sharper slices:** is there a public template sharper than ICBM 2009b at 0.5 mm in MNI space that we could display (for
   example BigBrain in ICBM 2009 sym space, or a 7 T average)? Licence and practical file size.
4. **Registration:** is affine alignment of Neuromorphometrics (SPM space) and Juelich (FSL 6th-gen space) to ICBM 2009
   defensible for teaching, or should we use published nonlinear transforms (which ones)?
5. **Newest literature (2025 to 2026):** any important new guideline, approval, withdrawal or major trial for our 18 conditions
   (Alzheimer's, Parkinson's, ALS, MS, stroke, epilepsy, migraine, Huntington's, FTD, DLB, schizophrenia, bipolar disorder,
   depression, OCD, PTSD, ADHD, Tourette syndrome, autism) that our treatment pathways may be missing.
6. **Technical and UX:** performance on phones (about 10 MB meshes, 14 MB slices loaded on demand), accessibility, security
   (static site with a hash-based Content-Security-Policy), and the feedback flow (a bar on each page opens a prefilled public
   GitHub issue; is there a privacy-respecting anonymous alternative that needs no server of our own?).

## Known limitations (please do not re-report these unless you think we understate them)
- Population-average anatomy; cranial nerve nuclei schematic; brainstem borders approximate; affine registration (1 to 3 mm
  residual errors); coarse 25 % threshold tracts; missing optic tract, mammillary bodies, locus coeruleus, inferior olive, MLF,
  cerebellar peduncles, spinal cord, vascular territories; CC BY-NC licence limits from Neuromorphometrics; no analytics; no
  accessibility audit; no expert panel review yet.

## How to answer (please follow; we verify every claim before changing anything)
For each finding: **Where**, **Problem**, **Fix** (exact values or wording), **Severity** (critical / important / minor),
**Source** (PMID, DOI or official URL). **Do not invent identifiers or URLs;** if unsure, write "source not verified".
Number your findings and finish with the 5 changes you would make first.
