# NeuroUnknown v2.7: handover, limitations and how to improve (23 Nov 2026)

Site: https://omnivalent.github.io/neurounknown/ · current version 2.7 (site commit `0ff7968`).
Rollback points: v2.6.3 = `059163c`, v2.6.2 = `92e0435`, v2.6.1 = `29e5439`, v2.6 = `70494cf`, v2.5 = `fb628ae`, v2.4 = `4aafa1b`, v2.3 = `be31c24`.

## 1. What changed today (v2.5 to v2.7)

| Area | Now |
|---|---|
| 3D brain | One continuous cortical surface per hemisphere and cerebellum, drawn through the grey matter of the 0.5 mm ICBM 2009b template; sulcal shading baked from fold depth; studio lighting |
| Cranial nerves | Exit points on the template brainstem surface, real calibres, flattened bands, rootlets for IX, X, XI (cranial part) and XII, trigeminal ganglion with V1 to V3, ivory colour. XI: cranial rootlets plus the spinal root from the foramen magnum upwards; its origin in the cervical cord is not shown |
| Motion | Idle auto-rotation, fades between views, camera glide to the selection, regions fly in on load and on Clear |
| New sections | Pathways (tracts and nerves by type), Neurotransmitters (8 systems, moving pathway lines with particles, receptors, drugs, PubMed-checked reviews), Networks (Yeo 7 from Schaefer 2018 painted on the cortex) |
| Cards | Tabs on neurotransmitter cards; previous/next through systems, diseases, neurotransmitters; glowing nodes on involved structures |
| Guided tour | 6 steps, shown once, restart with "Guided tour" |
| Phone (2.6.1) | The 3D brain stays pinned at the top while the list and info card scroll under it; Layers, MRI slices in 3D and Sources fold into buttons under the brain |
| Phone (2.6.2) | After review: opened panels land below the pinned brain even on short screens (320 × 568); Layers and MRI buttons appear only in the 3D view; Sources opens right under the brain |
| Review fixes (2.6.3) | From Grok's review: limbic network wording, XI and trigeminal ganglion notes, footer licence note, a question grammar fix, schematic-structure questions tagged; 100-question expert sample prepared |
| v2.7 | Smooth fibre tracts (3,350 illustrative streamlines in the atlas tract shapes, direction colours, travelling light); nerves smoother, with fibre strands in the nerve view; view picker (3D / axial / coronal / sagittal in any combination) fitted to the screen, MRI controls in the last square, captions under each slice, tap labels in 3D and on slices |
| Promo | 30-second 1080p video (atlas + questions) |

Wording correction: the MRI view has **three linked MRI views (axial, coronal, sagittal) plus a crosshair information panel**, not four MRI windows.

## 2. Known limitations

### Anatomy and imaging
1. **Population average.** The brain is an average of many people (ICBM 2009). It shows the main gyri but not every individual sulcus; small sulci are smoothed out.
2. **Cortex surface is drawn at mid grey-matter intensity**, not the true pial surface: inside the outer surface by roughly half the local cortical thickness (about 1 to 1.5 mm on average). Thickness value is textbook, not checked here; the measuring method is Fischl and Dale 2000 (PNAS, PMID 10984517, checked in PubMed).
3. **Cranial nerves are schematic courses.** The exits sit on the real brainstem surface, but the template has no skull, so where each nerve ends (foramina) is approximate, and so is the trigeminal ganglion (Meckel's cave); its card now says so. No nerve segments outside the skull.
4. **Cranial nerve nuclei are schematic ellipsoids**, not atlas boundaries. Locus coeruleus, tuberomammillary nucleus and lateral hypothalamus are schematic points (used only as pathway sources).
5. **Fibre lines are illustrative.** They fill the atlas tract shapes along their long axis; they are not diffusion tractography and do not show real fibre trajectories, crossings or terminations. The direction colours follow the drawn lines.
6. **Neurotransmitter pathway lines are schematic arcs** from the centre of the source to the centre of each target. They are not tractography and do not follow real fibre routes.
6. **Registration is affine** for the Neuromorphometrics and Juelich atlases: 1 to 3 mm local errors, most visible in small nuclei.
7. **Still missing:** mammillary bodies, inferior olive, MLF, cerebellar peduncles and deep cerebellar nuclei, pituitary, spinal cord, cortical layers, arteries and vascular territories.
8. **Networks** are statistical groupings from resting-state fMRI, painted to the nearest parcel within 4 mm; borders differ between people. The Yeo "limbic" network is orbitofrontal cortex and temporal pole only, not the classic limbic system; its weak signal is partly technical (MRI signal loss near the sinuses). The card now says both.
9. **Licence:** Neuromorphometrics labels are CC BY-NC, and this covers the meshes and slice labels made from them: non-commercial reuse only. A licence note is now in the site footer and the GitHub README. Still to check: the Juelich atlas terms as distributed with FSL, and the MASSP and Schaefer licences.

### Website and devices
1. **Weight:** about 17 MB of 3D meshes plus 14 MB of slices on demand. Slow on weak phones or mobile data.
2. **Phone screen space:** the pinned brain takes 44% of the screen height (about 370 px on a 390 × 844 phone). On small phones its 280 px minimum applies: about 49% on a 320 × 568 screen, leaving roughly 290 px for text.
3. **No formal accessibility audit** (screen readers, keyboard use of the 3D viewer). The tour and new sections are English only.
4. **No analytics** (by design): we do not know how many people use it or where they get stuck.
5. **Feedback needs a GitHub account** (the feedback bar opens a public issue).

### Content
1. **Question bank:** 384 clinical + 604 neuroanatomy questions; most are generated from the site's own data, so any atlas error carries straight into the questions. 330 questions involve schematic structures (147 where the answer itself is schematic) and are now tagged (`sch`). Checked: no question asks the learner to locate an internuclear ophthalmoplegia (MLF) lesion on the 3D model; one MS question mentions INO with the pons as the answer. There is no expert review and no item statistics.
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

1. **Expert review round (before adding more cases).**
   - **Questions:** review `expert_review_sample_100.csv` (40 with a schematic answer, 20 with schematic distractors, 25 clinical, 15 anatomy; schematic ones first).
   - **Schematic-versus-atlas test:** a neuroradiologist opens the atlas on a phone, selects a cranial nerve and a brainstem structure, and sorts 5 features (for example nerve exit point, nerve course, nucleus position, brainstem border, ganglion position) into "atlas data" or "schematic" **without opening Sources**. Pass = at least 4 of 5 correct. A fail means the schematic labels must be made more prominent on the image itself.
   - Then a neurologist and a psychiatrist review lesion effects, disease pages and neurotransmitter cards; corrections logged publicly.
2. **Real brainstem nuclei.** Replace the schematic nuclei with Brainstem Navigator (if the licence allows), and add the locus coeruleus, inferior olive and MLF.
3. **Disease circuits with sources.** For each disease, a short circuit (for example face processing in autism) drawn with nodes and flowing lines, each link backed by a PubMed reference, plus Findings / Symptoms / Treatment tabs like the reference site.
4. **Lighter phone load.** Compressed meshes (Draco or meshopt), WebP slices, a service worker cache. Target: under 8 MB on first load.
5. **Phone sheet.** Turn the info card into a draggable bottom sheet (half or full height) so the brain can stay larger while reading.
6. **Clinical localisation mode.** A case describes symptoms; the learner taps the lesion site on the 3D brain or the slices; the answer animates in.
7. **More hand-written clinical vignettes** (about 120) to pass 500 clinical questions safely, with item statistics collected anonymously (opt-in).
8. **Nonlinear alignment.** First check whether versions already exist in MNI152 2009 nonlinear space (for example Julich-Brain releases, or Neuromorphometrics-derived labels distributed in that space); using them could remove most of the 1 to 3 mm error without new registration (availability not verified). Otherwise run ANTs SyN.
9. **Arterial territories** for stroke teaching (needs an openly licensed vascular atlas).
10. **Anonymous feedback** through a form owned by you (no GitHub account needed), and a Zenodo DOI for each version so colleagues can cite a fixed version.
11. **Translations** of the new sections and tour, reviewed by native-speaking clinicians.

## 5. Notes for the next reviewer (ChatGPT, Grok or a colleague)

- Please check: neurotransmitter cards (Atlas > Neurotransmitters), network descriptions (Atlas > Networks), cranial nerve courses (Atlas > Nerves + brainstem), and the phone layout.
- For each finding give: where, problem, exact fix, severity (critical / important / minor), and a source (PMID or DOI). Do not invent identifiers; write "source not verified" when unsure.
- Standing rules: no discovery claims; keep evidence types separate; label anything unverified; take the conservative interpretation.
