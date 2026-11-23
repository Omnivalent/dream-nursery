# NeuroUnknown v2.6.2: handover, limitations and how to improve (23 Nov 2026)

Site: https://omnivalent.github.io/neurounknown/ · current version 2.6.2.
Rollback points: v2.6.1 = `29e5439`, v2.6 = `70494cf`, v2.5 = `fb628ae`, v2.4 = `4aafa1b`, v2.3 = `be31c24`.

## 1. What changed today (v2.5 to v2.6.1)

| Area | Now |
|---|---|
| 3D brain | One continuous cortical surface per hemisphere and cerebellum, drawn through the grey matter of the 0.5 mm ICBM 2009b template; sulcal shading baked from fold depth; studio lighting |
| Cranial nerves | Exit points on the template brainstem surface, real calibres, flattened bands, rootlets for IX to XII, trigeminal ganglion with V1 to V3, ivory colour |
| Motion | Idle auto-rotation, fades between views, camera glide to the selection, regions fly in on load and on Clear |
| New sections | Pathways (tracts and nerves by type), Neurotransmitters (8 systems, moving pathway lines with particles, receptors, drugs, PubMed-checked reviews), Networks (Yeo 7 from Schaefer 2018 painted on the cortex) |
| Cards | Tabs on neurotransmitter cards; previous/next through systems, diseases, neurotransmitters; glowing nodes on involved structures |
| Guided tour | 6 steps, shown once, restart with "Guided tour" |
| Phone (2.6.1) | The 3D brain stays pinned at the top while the list and info card scroll under it; Layers, MRI slices in 3D and Sources fold into buttons under the brain |
| Phone (2.6.2) | After review: opened panels land below the pinned brain even on short screens (320 × 568); Layers and MRI buttons appear only in the 3D view; Sources opens right under the brain |
| Promo | 30-second 1080p video (atlas + questions) |

Wording correction: the MRI view has **three linked MRI views (axial, coronal, sagittal) plus a crosshair information panel**, not four MRI windows.

## 2. Known limitations

### Anatomy and imaging
1. **Population average.** The brain is an average of many people (ICBM 2009). It shows the main gyri but not every individual sulcus; small sulci are smoothed out.
2. **Cortex surface is drawn at mid grey matter**, not the true pial surface: about 0.5 to 1 mm inside the real outer surface.
3. **Cranial nerves are schematic courses.** The exits sit on the real brainstem surface, but the template has no skull, so where each nerve ends (foramina) is approximate. No nerve segments outside the skull.
4. **Cranial nerve nuclei are schematic ellipsoids**, not atlas boundaries. Locus coeruleus, tuberomammillary nucleus and lateral hypothalamus are schematic points (used only as pathway sources).
5. **Neurotransmitter pathway lines are schematic arcs** from the centre of the source to the centre of each target. They are not tractography and do not follow real fibre routes.
6. **Registration is affine** for the Neuromorphometrics and Juelich atlases: 1 to 3 mm local errors, most visible in small nuclei.
7. **Still missing:** mammillary bodies, inferior olive, MLF, cerebellar peduncles and deep cerebellar nuclei, pituitary, spinal cord, cortical layers, arteries and vascular territories.
8. **Networks** are statistical groupings from resting-state fMRI, painted to the nearest parcel within 4 mm; borders differ between people; the "limbic" network has the weakest signal.
9. **Licence:** Neuromorphometrics labels are CC BY-NC, so the anatomy files cannot be used commercially.

### Website and devices
1. **Weight:** about 17 MB of 3D meshes plus 14 MB of slices on demand. Slow on weak phones or mobile data.
2. **Phone screen space:** the pinned brain takes 44% of the screen height. Reading long cards leaves about half the screen for text.
3. **No formal accessibility audit** (screen readers, keyboard use of the 3D viewer). The tour and new sections are English only.
4. **No analytics** (by design): we do not know how many people use it or where they get stuck.
5. **Feedback needs a GitHub account** (the feedback bar opens a public issue).

### Content
1. **Question bank:** 384 clinical + 604 neuroanatomy questions; most are generated from the site's own checked data. There is no expert review and no item statistics (difficulty, discrimination).
2. **Disease circuits:** the disease view shows nodes on the involved areas but no arrows, because published sources for each circuit are not yet checked.
3. **No independent clinical review** of disease pages, drug lists or lesion effects.

## 3. What I could not achieve in this environment, and why

| Wanted | Blocker | How to unblock |
|---|---|---|
| Read thefoldedmind.com directly | Host blocked by this session's network (still 403 when retried) | Allow `thefoldedmind.com` in the environment's network settings, or keep sending screenshots and videos |
| Real pial and white surfaces (FreeSurfer fsaverage) | Licence unclear for public redistribution; different space from our atlas | Use only after the licence is checked; would need registration to ICBM 2009 |
| BigBrain (20 µm histology) for sharper slices | Download host blocked | Allow the BigBrain host; large files, needs tiling |
| Install extra mesh tools (for example quadric decimation libraries) | An automatic safety check blocked package installs | Worked around with our own code; allow installs to get smaller, cleaner meshes |
| Brainstem Navigator (MRI atlas of brainstem nuclei) | Licence and download not confirmed | Check the licence; it would replace the schematic nuclei and add the locus coeruleus and inferior olive |
| PubMed in the 6-hourly improvement task | Scheduled tasks have no connectors stored | Add the PubMed connector to that task so it can verify changes |
| Grok's review | Not received | Paste Grok's answer when it arrives; I will check each point in PubMed |

## 4. Suggestions to make the site better (in order of value)

1. **Expert review round (before adding more cases).** First task: a neuroradiologist selects a cranial nerve and a brainstem structure on a phone and says which features are schematic and which come from atlas data, testing whether that distinction is clear while learning, even with Sources folded away (each card already shows a 'schematic' badge and a 'Shape:' source line). One neurologist, one neuroradiologist and one psychiatrist review lesion effects, disease pages, neurotransmitter cards and 100 sampled questions; corrections logged publicly. This is the single biggest credibility gain.
2. **Real brainstem nuclei.** Replace the schematic nuclei with Brainstem Navigator (if the licence allows), and add the locus coeruleus, inferior olive and MLF.
3. **Disease circuits with sources.** For each disease, a short circuit (for example face processing in autism) drawn with nodes and flowing lines, each link backed by a PubMed reference, plus Findings / Symptoms / Treatment tabs like the reference site.
4. **Lighter phone load.** Compressed meshes (Draco or meshopt), WebP slices, a service worker cache. Target: under 8 MB on first load.
5. **Phone sheet.** Turn the info card into a draggable bottom sheet (half or full height) so the brain can stay larger while reading.
6. **Clinical localisation mode.** A case describes symptoms; the learner taps the lesion site on the 3D brain or the slices; the answer animates in.
7. **More hand-written clinical vignettes** (about 120) to pass 500 clinical questions safely, with item statistics collected anonymously (opt-in).
8. **Nonlinear registration** (ANTs SyN) of all atlases to ICBM 2009 to remove the 1 to 3 mm residual errors.
9. **Arterial territories** for stroke teaching (needs an openly licensed vascular atlas).
10. **Anonymous feedback** through a form owned by you (no GitHub account needed), and a Zenodo DOI for each version so colleagues can cite a fixed version.
11. **Translations** of the new sections and tour, reviewed by native-speaking clinicians.

## 5. Notes for the next reviewer (ChatGPT, Grok or a colleague)

- Please check: neurotransmitter cards (Atlas > Neurotransmitters), network descriptions (Atlas > Networks), cranial nerve courses (Atlas > Nerves + brainstem), and the phone layout.
- For each finding give: where, problem, exact fix, severity (critical / important / minor), and a source (PMID or DOI). Do not invent identifiers; write "source not verified" when unsure.
- Standing rules: no discovery claims; keep evidence types separate; label anything unverified; take the conservative interpretation.
