# NeuroUnknown 3D atlas, version 2.9: independent review request (24 Nov 2026)

**Send this same text separately to Grok and to ChatGPT.** Each reviewer answers alone, without seeing the other's answer.
Both answers come back together to the project's main assistant, which checks every claim in PubMed before anything on the site changes.

Site: https://omnivalent.github.io/neurounknown/ (open **3D Neuroanatomy**; cite page: /cite.html). Version 2.9, public commit `4f9c648`.
Previous version for comparison: 2.8.1, commit `e6c2671`.

## 1. What this is
- An open, educational, **hypothesis-generating** site. It makes **no discovery claims**, has no lab data and is **not medical advice**.
- The part to review here is the **3D neuroanatomy atlas**: a browser viewer (three.js) of a population-average brain, with MRI slice views,
  fibre tracts, cranial nerves, neurotransmitter circuits, resting-state networks, diagnoses and, new in 2.9, **arteries of the brain**.
- Audience: medical students, trainees and the curious public. The site owner is a physician and wants it to be correct enough for neurosurgery and neurology trainees to learn from.

### What the atlas contains (version 2.9)
| Item | Now |
|---|---|
| Structure entries | 127: cortex (frontal, parietal, temporal, occipital, limbic, insula), basal ganglia, thalamus and other deep structures, brainstem (22), cerebellum, white-matter tracts (11), ventricles, 13 cranial-nerve items (12 nerves + optic tract), **23 artery entries (new)** |
| Systems / circuits | 20 systems, 8 neurotransmitter systems (moving pathway lines), 7 Yeo networks painted on the cortex |
| Diagnoses | 18, each with involved areas, reasons and references |
| Slice views | Axial, coronal, sagittal MRI at 0.5 mm with labels; any combination with the 3D view; the 3D cut faces are drawn from the model's own labels |
| Questions | 988 (384 clinical, 604 anatomy); most anatomy questions are generated from the atlas data |
| Weight | about 19.8 MB of meshes + 2.4 MB fibre lines + 3.3 MB arteries (loaded only when switched on) + 13.9 MB slice images on demand |

### Where the shapes come from
- **Template and labels:** ICBM 2009b nonlinear asymmetric T1 at 0.5 mm. Cortical and subcortical labels from Neuromorphometrics (CC BY-NC) moved into this space; brainstem nuclei, internal capsule and fornix from MASSP 2.0 (7 T MRI); tracts from the Juelich atlas; networks from Schaefer 2018 (400 parcels, 7 networks).
- **Cortex and cerebellum:** one continuous iso-surface per hemisphere at 0.75 mm cell size through the template's grey matter (T1 level 165 of 255), light Taubin smoothing (14 iterations), borders between structures cut along smooth curves (2.9), sulcal shading baked from fold depth.
- **Registration is affine** for the label atlases, so there are 1 to 3 mm local errors, most visible in small nuclei.

## 2. What changed in version 2.9 (please review this first)

### 2.1 Arteries (all new; this is the part most in need of expert review)
Switch on with the **Arteries** button in the 3D view, or Layers → Arteries, or Pathways → Circle of Willis / Anterior circulation / Posterior circulation.
Each artery has a card with its course and "if it is blocked or diseased".

**How the courses were made (honest description):**
1. Landmarks were measured in the template (front of pons and medulla, interpeduncular fossa, optic chiasm, insula, Sylvian fissure lips, corpus callosum, and sulci found as borders between label pairs: cingulate, central, precentral, postcentral, inferior frontal, intraparietal, calcarine, parieto-occipital).
2. Waypoints for each artery were **placed by hand** relative to those landmarks from standard microsurgical anatomy (from the assistant's own knowledge), then smoothed, laid onto the brain surface (signed distance to tissue) where the real vessel lies in a sulcus or on the surface, and pushed clear of the cranial nerves.
3. Tubes are swept along the curves with tapered radius and a flow coordinate for a pulse animation.
4. **Nothing was fitted to measured angiography.** The Mouches and Forkert 2019 MRA atlas (PMID 30975990) could not be downloaded here (host blocked); only its published radii (ICA about 1.8 mm, ACA about 1 mm, M1 up to 1.2 mm, M2 up to 0.8 mm, basilar up to 1.35 mm, PCA up to 0.8 mm; lumen only) were used as a check.

**What is drawn:** internal carotid (cavernous to terminal), ophthalmic, posterior communicating, anterior choroidal; anterior cerebral A1, anterior communicating, recurrent artery of Heubner, A2 and pericallosal, callosomarginal with 4 ascending branches, medial orbitofrontal, frontopolar; middle cerebral M1, 9 lateral lenticulostriates, M2 (superior and inferior trunks), M3 and 12 M4 branches (orbitofrontal, prefrontal, precentral, central, anterior and posterior parietal, angular, temporo-occipital, posterior/middle/anterior temporal, temporopolar); posterior cerebral P1, 3 thalamoperforators, P2 with anterior and posterior inferior temporal branches, P3/P4 with calcarine and parieto-occipital arteries; vertebral, basilar, PICA, AICA, superior cerebellar artery.

**Calibres in the model (outer radius, mm):** ICA 2.2 to 1.8; M1 1.4; A1 1.0; P1 1.1; basilar 1.6 to 1.45; vertebral 1.65; M2 about 1.0; PICA 0.7; AICA 0.55; SCA 0.7; Heubner 0.38; lenticulostriates 0.28 to 0.16.

**Known limits of the arteries (please add any I have missed):**
- It is the **typical, complete, symmetric** circle only. No variants (fetal posterior communicating artery, hypoplastic or absent A1, absent posterior communicating artery, azygos ACA, third A2). The card says a complete circle occurs in about a third to a half of people (Hartkamp 1999, PMID 10582995: 36% of controls; Enyedi 2021, PMID 34966998: 50% complete, 30.9% "classical").
- No **veins, sinuses or cisterns**. No dura, tentorium or skull, so the cavernous and petrous carotid courses and the vertebral entry are approximate.
- Perforators (lenticulostriates, thalamoperforators, Heubner, anterior choroidal) are **illustrative**, not mapped. The lenticulostriate fan is randomised within anatomical limits.
- M3/M4 branches follow sulci where the template has them; the average brain is smoother than any individual brain, so many real sulcal vessels would lie elsewhere.
- Pulse animation: a wave every second travelling outward at about 90 mm/s along the vessel. **This is a visual device**, not physiological (real pulse-wave velocity and flow velocities are different). Is that acceptable if labelled, or misleading?
- **Possible over-claim on the live site:** the source line says courses are "after Rhoton 2000 and 2002" and calibres "rounded from Rhoton". PubMed returned **no abstracts** for Rhoton's papers (PMIDs 12234447, 10983304), the full texts were **not read**, and nothing was measured from them. The anatomy came from general knowledge. This wording is to be corrected unless a reviewer can confirm each specific relation against a source.

### 2.2 Cranial nerves as flowing fibre bundles
Nerves were smooth tubes; they now show twisting fascicles and fine fibres (procedural shader, not data), with soft signals moving along them: away from the brainstem in motor nerves (III, IV, VI, VII, XI, XII), towards it in sensory nerves (II, V, VIII), both ways in mixed nerves (IX, X); the olfactory nerve towards the brain. This **simplifies** mixed nerves (for example V motor root, VII sensory and parasympathetic fibres, III parasympathetic fibres are not drawn separately). The oculomotor nerve was also moved lower on the cerebral peduncle so it runs between P1 and the superior cerebellar artery.

### 2.3 Smoother cortex
Borders between structures are now smooth curves instead of a triangle staircase; the surface is rebuilt from a reconstructed full-precision T1 (the 8-bit slice data plus the fractional part recovered from the original image, checked to within one grey level) with cubic resampling.

## 3. Known limitations of the whole atlas (before you start)
1. **Population average**, not an individual brain; small and variable sulci are smoothed out. Cortex is drawn at mid grey-matter intensity (not the true pial surface).
2. **Cranial nerve courses are schematic**; the template has no skull so the foramina and the trigeminal ganglion (Meckel's cave) are approximate. Nerve nuclei are schematic ellipsoids; locus coeruleus, tuberomammillary nucleus and lateral hypothalamus are schematic points.
3. **Fibre lines are illustrative** streamlines inside the atlas tract shapes, not tractography. Neurotransmitter pathway lines are schematic arcs between structure centres, not real fibre routes.
4. **Missing:** mammillary bodies, inferior olive, MLF, cerebellar peduncles, deep cerebellar nuclei, pituitary, spinal cord, cortical layers, veins, meninges, skull, vascular territories.
5. **Networks** are statistical groupings painted to the nearest parcel within 4 mm; the Yeo "limbic" network is orbitofrontal cortex and temporal pole only.
6. **Questions** are partly generated from the atlas, so atlas errors can carry into questions; 330 involve schematic structures and are tagged. Artery cards are **not** used by the generated questions yet.
7. **No independent clinical review** yet of disease pages, drug lists or lesion effects.
8. **Licence:** Neuromorphometrics labels are CC BY-NC (non-commercial reuse only, stated in the footer). The Juelich, MASSP and Schaefer terms as used here are not fully verified.
9. **Phone:** heavy on weak connections; the 3D brain is pinned above the list. No formal accessibility audit.

## 4. Rules for your answer (please follow strictly)
- Give a **PMID or DOI** for every factual claim. Label each claim **VERIFIED** (you opened the source), **LIKELY** or **UNVERIFIED**. **Never invent PMIDs or DOIs**; write "source not verified" when unsure.
- Keep evidence types separate (anatomy textbook ≠ imaging atlas ≠ our model). Prefer conservative statements. Say "unknown" when it is unknown.
- Be concrete: name the structure, artery, nerve or page and say **exactly what to change**.
- Please **look at the live site** if you can (3D Neuroanatomy page, Arteries button) and say which parts you could and could not see.
- No personal information is needed or wanted.
- **Answer format for each finding:** `Where | Problem | Exact fix | Severity (critical / important / minor) | Source | Confidence`.

## 5. Questions

### A. Arteries: anatomical correctness (highest priority)
Check each statement against current standard sources (for example Rhoton's microsurgical anatomy, Gray's, Osborn, Standring, the Cerebral Angiography literature). For every item give: correct / wrong / needs rewording, with source.
1. **Oculomotor nerve:** leaves the interpeduncular fossa between the PCA (P1, above) and SCA (below), then runs below and lateral to the posterior communicating artery and lateral to the ICA into the cavernous sinus roof. Our model puts it there. Correct?
2. **A1** passes above the optic chiasm or nerve (usually the optic nerve in many people). Which is more accurate to say for a teaching model: "above the optic chiasm" or "above the optic nerve and chiasm"?
3. **Anterior choroidal artery:** origin just above the posterior communicating artery, course along the optic tract to the choroidal fissure; supplies optic tract, posterior limb of the internal capsule, LGN, inner pallidum, parts of uncus and hippocampus. Any needed correction (for example which parts of the capsule)?
4. **Recurrent artery of Heubner:** origin from A1 or A2, supply of the head of the caudate, front of the putamen and anterior limb of the capsule. Correct as written?
5. **Lenticulostriates:** the card says they arise from M1 into the anterior perforated substance, supplying putamen, outer pallidum, internal capsule and caudate. Is "outer globus pallidus" right?
6. **Thalamoperforators and the artery of Percheron:** card says P1 perforators, with one trunk sometimes supplying both thalami; occlusion causes bilateral paramedian thalamic infarcts with drowsiness and vertical gaze palsy. Correct and complete?
7. **PICA:** loops between rootlets of IX to XII, around the tonsil; supplies lower vermis and suboccipital surface. Wallenberg from vertebral or PICA occlusion. Is the card's list of Wallenberg features right and balanced?
8. **AICA:** meatal loop near VII/VIII; lateral pontine syndrome features as written. Correct?
9. **SCA:** trigeminal neuralgia by SCA loop on the trigeminal root (microvascular decompression). Wording acceptable?
10. **Callosomarginal artery** "is not present in every hemisphere". Is it fairer to describe it as a variable branch?
11. **MCA stroke syndromes** on the M1, M2 superior division and M2 inferior division cards (face and arm more than leg; non-fluent aphasia; Wernicke-type aphasia, neglect, upper quadrantanopia). Check each; add any caveats (side of dominance, ranges).
12. **ICA card:** "an aneurysm at the origin of the posterior communicating artery can compress nerve III and dilate the pupil". Correct wording?
13. **Segment naming:** are our A1/A2, M1–M4, P1–P4 definitions the standard (Rhoton / Krayenbühl & Yasargil)? Note that we call the pericallosal artery A2 onwards, and call P3 the quadrigeminal segment with P4 the cortical branches.
14. **Missing arteries a neurosurgery or neurology trainee would expect** in a first teaching model (for example superior hypophyseal, long insular perforators, anterior and posterior choroidal arteries, labyrinthine artery, medial striate, basilar perforators, the anterior spinal artery). Which five to add first, and which of those we drew should be removed because they are too variable?
15. **Variants:** which variants matter most to teach (fetal PCA, A1 hypoplasia, azygos ACA, persistent trigeminal artery, bihemispheric ACA)? Should the viewer offer a variant switch, and what is the minimum correct set?

### B. Arteries: visual realism and sources
16. Calibres: are our outer radii plausible against cadaver and MRA data (lumen versus wall)? Give numbers and sources.
17. **Open data we could fit to:** list openly licensed vessel data in MNI space that we may reuse in a public educational site, with the **licence quoted from the source**. Candidates to check: Mouches and Forkert 2019 MRA atlas (PMID 30975990); Liu et al. 2023 arterial territory atlas (PMID 36739282); Kim et al. 2019 CT territories (PMID 31406206); any vein or sinus atlas; any open 7 T TOF dataset. Which allows redistribution of derived meshes?
18. Arterial territories: is it correct to colour the cortex by ACA/MCA/PCA territory using Liu 2023 (derived from stroke lesions in 1,298 patients)? What limits should the page state about border zones?

### C. Realism of the whole brain model: your best advice
We want the model to look as close as possible to a real brain **without claiming more than the data support**. Please give a **ranked list of at most 12 improvements**, each with: expected visual or teaching gain, effort (days), data source and **licence**, risk of looking real but being wrong, and whether it can run on a phone.
Please cover at least:
- **Real pial and white surfaces:** FreeSurfer fsaverage, onavg, or other average cortical meshes (and how to register them to ICBM 2009 / MNI152 2009 without introducing errors); are redistribution terms acceptable?
- **Higher-resolution histology or MRI:** BigBrain (20 µm), 7 T and 9.4 T ex vivo templates, MNI "Colin27", the 0.3 mm ICBM or similar templates.
- **Better nonlinear alignment** of Neuromorphometrics, Juelich and MASSP labels (are versions already distributed in ICBM 2009 nonlinear space?).
- **Real tractography:** an open population-average atlas (for example HCP-based) instead of illustrative streamlines; licence and how to show uncertainty.
- **Brainstem Navigator** or other open brainstem nucleus atlases to replace schematic nuclei (licence?).
- **Materials and rendering:** physically based materials, subsurface scattering, normal or micro-relief maps, ambient occlusion, screen-space effects, lighting that suits dark and light themes; what is realistic on a phone with WebGL 2, and when is WebGPU worth it?
- **Anatomical context:** dura, tentorium and falx, skull base, pituitary, veins and sinuses, choroid plexus, spinal cord; which two add the most for neurosurgery trainees?
- **Cut and dissection behaviour:** realistic cut faces, layer peeling (pia, grey, white), "Klingler-style" fibre dissection views.
- **Performance:** meshopt or Draco compression, level of detail, tiling, service worker; target a first load under 8 MB.
- **Uncertainty display:** a toggle that marks schematic versus atlas-derived structures visibly (hatching or colour).

### D. The rest of the atlas
19. **Neurotransmitter cards, network descriptions, lesion effects (the "If it is damaged" text on all structures), diagnosis pages and drug lists:** pick the 10 statements most likely to be wrong, outdated or too strong, with the exact fix and source.
20. **Teaching design:** is it clear on each page what is atlas data, what is our schematic drawing, and what is only a visual effect? Suggest wording changes.
21. **Safety and tone:** anything that a lay reader could misread as medical advice, or a trainee as a surgical guide.
22. **Accessibility:** the three most important fixes for screen-reader and keyboard users of a 3D viewer.
23. **Privacy and licensing:** anything in the footer, cite page or README that is incorrect or missing (data licences, attribution lines, the CC BY-NC restriction).

### E. Your own questions
List up to five questions we did not ask that a neurosurgeon, a neuroradiologist, a neuroanatomist and a medical educator would each ask.

## 6. What the assistant could not do here (so you can help)
| Wanted | Blocker | What would help |
|---|---|---|
| Fit arteries to a measured MRA atlas | Download host (figshare) blocked | Say whether the data licence allows reuse, and the exact file names to fetch |
| Read Rhoton 2000 and 2002 | PubMed gave no abstracts; no full text | Quote the page, figure or table for any relation you rely on, with PMID |
| Real cortical and brainstem atlases | Hosts blocked or licence unclear | Licence quotes and mirror options |
| Independent expert review | None yet | Tell us the five most valuable specialties to ask |
| FinnGen and other sites unrelated to the atlas | Blocked | Not needed for this round |

## 7. Extra request for each reviewer
- **Grok:** please emphasise anything **newer than mid-2025** (new atlases, new open datasets, new WebGL or WebGPU techniques) and check the **live site** behaviour on a phone-sized screen.
- **ChatGPT:** please emphasise **structured tables** (finding, fix, source) and a **ranked realism roadmap** with effort and licence for each item.
