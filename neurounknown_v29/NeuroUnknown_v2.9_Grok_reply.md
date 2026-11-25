# Grok's independent review: NeuroUnknown 3D atlas v2.9 (commit `4f9c648`)

Reviewer: Grok. Date: 24 Nov 2026. I answered alone and did not see ChatGPT's reply.

**How to read the labels**
- **VERIFIED:** I opened the source on 24 Nov 2026: the PubMed record and abstract, an official page, or a data-repository API. "VERIFIED (abstract)" means the claim is in the abstract; I did not read the full text.
- **LIKELY:** standard anatomy or clinical teaching that I believe is right, but I did not open a source for it here.
- **UNVERIFIED:** I could not confirm it.

I invented no identifiers. Every PMID and DOI below was fetched from PubMed E-utilities, Crossref or doi.org. Rhoton 2000 and 2002 have no PubMed abstracts, and I did not read their full texts. **No relation below is credited to Rhoton.**

Every finding uses the format `Where | Problem | Exact fix | Severity | Source | Confidence`.

---

## 0. The four most important points

1. **Critical: on common small phones the atlas can't be entered.** The welcome dialog ("Your brain, one minute at a time") is fixed in place and doesn't scroll. Its content is about 757 px tall. At 320 × 568, and also at 375 × 667 (the iPhone SE 2nd and 3rd generation size), its **Start** and **Explore on my own** buttons sit at y ≈ 719 px, below the visible screen. A touch tap on them timed out. At 320 px the card is also wider than the screen (content reaches x ≈ 357 px), so text is clipped on the right. Escape closes the dialog, but touch users have no Escape key. Details are in section 7.
2. **Important: the Rhoton attribution overclaims in three places:** the per-card source line, the Sources panel, and the cite page. Replacement wording is in section 6.
3. **Important: the thalamoperforator card attributes "pure sensory stroke" to the wrong territory.** Paramedian (P1 thalamoperforator) infarcts reduce arousal and impair memory. Hemisensory loss comes from **inferolateral** (thalamogeniculate) territory strokes. Source: Schmahmann 2003, PMID 12933968, VERIFIED (abstract).
4. **Important: the anterior choroidal artery syndrome is overstated as a triad.** In 113 patients, hemiparesis occurred in 92.9% and hemianaesthesia in 43.4%. Source: Cheng 2020, PMID 32344281, VERIFIED (abstract).

---

## 1. Questions 1–15: arteries, anatomy and cards

The card text is quoted from the live `index.html` (version 2.9).

| # | Where (claim) | Verdict / problem | Exact fix | Severity | Source | Confidence |
|---|---|---|---|---|---|---|
| 1 | Oculomotor nerve: leaves between P1 (above) and SCA (below), below and lateral to PCom; cards say PCom runs "above and medial to the oculomotor nerve" and SCA runs "below the oculomotor nerve and above the trigeminal root" | **Correct.** In 27 injected specimens, the nerve's ventral surface was related to the SCA in 96.3%. Its dorsal surface was related to P1/P2A in 100% and to the PCom in 100%. | No change to the course. Optional card line: "Nerve III runs between the posterior cerebral artery above and the superior cerebellar artery below, under the posterior communicating artery." "Lateral to the ICA into the cavernous roof" is standard but not checked here. | — | Marinković 1994, PMID 7825106, DOI 10.1016/0090-3019(94)90081-7 | VERIFIED (abstract); cavernous-roof part LIKELY |
| 2 | A1 "medially above the optic chiasm and optic nerve" | **Acceptable.** A1 perforators enter the medial anterior perforated substance "above the optic nerve and chiasm". Whether A1 crosses the chiasm or the nerve varies between people. | "Runs medially above the optic chiasm or the optic nerve (which one varies between people)." Don't print a percentage unless you have the full text of Perlmutter & Rhoton 1976. | minor | Rosner 1984, PMID 6747683, DOI 10.3171/jns.1984.61.3.0468 | VERIFIED (abstract); chiasm-versus-nerve frequency UNVERIFIED |
| 3 | Anterior choroidal artery (AChA) origin, course and supply | **Mostly correct; tighten it.**<br>(a) The capsular part is the **posterior two-thirds of the posterior limb**, plus the posterior paraventricular corona radiata (Hupperts 1994).<br>(b) In 50 brains it arose from the carotid on both sides in all cases, and was double in 4% (Saeki 1977).<br>(c) "Just above the PCom", "inner pallidum" and "lateral geniculate" are standard but not checked here.<br>(d) The lesion card overstates the triad (see #3b). | Note: "…supplies the optic tract, the posterior two-thirds of the posterior limb of the internal capsule and the corona radiata just above it, part of the lateral geniculate body, the inner globus pallidus and parts of the uncus and hippocampus. It arises from the carotid, usually a few millimetres above the posterior communicating artery; it is sometimes double." | important | Hupperts 1994, PMID 7922468, DOI 10.1093/brain/117.4.825; Saeki 1977, PMID 845644, DOI 10.3171/jns.1977.46.5.0563 | (a), (b) VERIFIED (abstract); (c) LIKELY |
| 3b | AChA lesion: "weakness, loss of sensation and a homonymous field defect" | **Too strong as a fixed triad.** Hemiparesis 92.9%, hemianaesthesia 43.4%; the field defect is less constant. | "Usually weakness of the opposite side; loss of sensation and a homonymous field defect are less constant, and the full triad is uncommon." | important | Cheng 2020, PMID 32344281, DOI 10.1016/j.clineuro.2020.105826 | VERIFIED (abstract) |
| 4 | Heubner: "Leaves the ACA near the AComA and runs back **above A1** … head of caudate, front of putamen, anterior limb" | **Needs rewording.** It arose from **A2 in 78%** and "commonly courses **anterior to A-1**". It ends in the anterior perforated substance and lateral to it, sending branches around the anterior limb. | "Usually leaves the first part of A2 (about 3 in 4 hemispheres), less often A1 or the AComA junction, and doubles back along A1, often in front of it, to the anterior perforated substance. Supplies the head of the caudate, the front of the putamen and outer pallidum, and the anterior limb of the internal capsule." | minor | Perlmutter & Rhoton 1976, PMID 948013, DOI 10.3171/jns.1976.45.3.0259; Perlmutter & Rhoton 1978, PMID 671075, DOI 10.3171/jns.1978.49.2.0204 | Origin, course and anterior limb VERIFIED (abstract); caudate, putamen and pallidum LIKELY |
| 5 | Lateral lenticulostriates: "rise from M1 … into the putamen, the outer globus pallidus, the internal capsule and the caudate" | **"Outer globus pallidus" is right.** In 21 injected brains they supplied "the entire lateral segment" of the GP, the internal capsule (dorsal parts of the anterior limb, genu and posterior limb), much of the putamen and caudate, and a strip of corona radiata. **Origin is incomplete:** they arise from **M1 and M2** and enter the lateral half of the anterior perforated substance. | "Thin perforators, mostly from M1 and some from the first part of M2, entering the lateral half of the anterior perforated substance to supply most of the putamen, the outer (lateral) globus pallidus, the upper internal capsule and nearby corona radiata, and much of the caudate head and body." | minor | Donzelli 1998, PMID 9932322, DOI 10.1007/BF01653128; Rosner 1984, PMID 6747683 | VERIFIED (abstract) |
| 6 | Thalamoperforators / artery of Percheron (AOP): "Thalamic lacunes (pure sensory stroke). Occlusion of an AOP causes infarcts of both paramedian thalami with sudden drowsiness and vertical gaze palsy." | **Two problems.**<br>(1) **"Pure sensory stroke" belongs to the inferolateral (thalamogeniculate, P2) territory**, not the paramedian P1 thalamoperforators. Paramedian infarcts cause "decreased arousal, particularly if the lesion is bilateral, and impaired learning and memory".<br>(2) AOP infarcts often include the **midbrain**: in 37 patients the patterns included midbrain in 43% + 14% = 57%, and the "V sign" on FLAIR/DWI was seen in 67% of midbrain cases. A 2026 review gives the triad as altered consciousness, vertical gaze palsy and memory impairment.<br>Also, an average of four P1 perforators arise, mainly from the superior and posterior surfaces. | Lesion text: "Paramedian thalamic infarcts reduce alertness and impair memory, especially when both sides are hit. A single trunk (artery of Percheron) supplies both paramedian thalami and often the rostral midbrain; its occlusion causes sudden drowsiness, vertical gaze palsy and memory loss." Move "pure sensory stroke" to a new thalamogeniculate entry (see #14). | **important** | Schmahmann 2003, PMID 12933968, DOI 10.1161/01.STR.0000087786.38997.9E; Lazzaro 2010, PMID 20299438, DOI 10.3174/ajnr.A2044; Ibraheem 2026, PMID 43024028, DOI 10.1007/s00423-026-04171-7; Saeki 1977, PMID 845644 | VERIFIED (abstracts); "inferolateral = thalamogeniculate from P2" LIKELY |
| 7 | PICA course and Wallenberg (PICA and vertebral cards) | **Course acceptable.** The tonsillomedullary loops between the IX–XII rootlets are standard (Rhoton 2000; not read).<br>**Wallenberg is unbalanced:**<br>(a) In 130 patients with angiograms, the cause was **vertebral artery disease in 67%** and **PICA disease in 10%**.<br>(b) The sensory pattern varies; a bilateral trigeminal pattern occurs.<br>(c) Dysphagia, dysarthria and facial paresis are commoner with rostral lesions.<br>(d) The vertebral card leaves out vertigo and nystagmus, but the medulla card includes them. | Vertebral card: "…usually from vertebral artery disease (about two-thirds of cases), less often from PICA alone. Typical features: vertigo, nystagmus and nausea; same-side ataxia and Horner syndrome; hoarseness and difficulty swallowing; loss of pain and temperature on the same side of the face and the opposite side of the body, although the sensory pattern varies." PICA card: "…or a cerebellar infarct with vertigo, vomiting and unsteadiness; isolated PICA disease is a minority cause of Wallenberg syndrome." | important | Kim 2003, PMID 12805095, DOI 10.1093/brain/awg169 | VERIFIED (abstract); PICA course LIKELY |
| 8 | AICA: meatal loop near VII/VIII; "Lateral pontine syndrome: deafness and facial weakness on the same side, vertigo and ataxia, with loss of pain and temperature on the opposite side" | **Correct but incomplete.** In 82 patients with AICA-territory infarction, 98% had acute prolonged vertigo, and 60% had **combined auditory plus vestibular loss**. 13 had transient vertigo or hearing symptoms in the month before. | Add: "Vertigo is almost always present, usually with combined hearing and balance loss in the same ear; brief warning attacks of vertigo or hearing loss can come first." Same-side facial pain and temperature loss and Horner syndrome are standard additions. | minor | Lee 2009, PMID 19797177, DOI 10.1161/STROKEAHA.109.564682 | VERIFIED (abstract); Horner and facial sensory loss LIKELY |
| 9 | SCA: "A loop of this artery pressing on the trigeminal root is a common cause of trigeminal neuralgia, treated by MVD" | **Acceptable; soften it.** I did not verify a source for "SCA is the commonest offending vessel".<br>MVD long-term outcome: of 1,185 patients, 70% were pain-free without medication at 10 years. **Venous compression** predicted recurrence, so veins matter too. | "Compression of the trigeminal root, most often by a loop of this artery but also by other arteries or veins, is a recognised cause of classical trigeminal neuralgia; microvascular decompression can relieve it." | minor | Barker 1996, PMID 8598865, DOI 10.1056/NEJM199604253341701 | Outcome and veins VERIFIED (abstract); "most often SCA" LIKELY |
| 10 | Callosomarginal artery "is not present in every hemisphere" | **Yes, call it a variable branch.** All cortical branches arose more often from the pericallosal than from the callosomarginal artery, and the callosomarginal usually arose at A3. | "A variable branch: present in most hemispheres, running in or near the cingulate sulcus; when it is absent or small, the pericallosal artery gives these branches." Give no percentage until the full text is checked. | minor | Perlmutter & Rhoton 1978, PMID 671075 | VERIFIED (abstract); "most hemispheres" LIKELY |
| 11 | MCA syndromes (M1, M2 superior and inferior divisions) | **Broadly right; add caveats.**<br>(a) Aphasia versus neglect depends on which hemisphere handles language, which is usually the left (state it as a "usually").<br>(b) Proximal M1 occlusion that includes the lenticulostriates can also weaken the leg, through the internal capsule.<br>(c) A field defect can be absent.<br>(d) Superior-division strokes often include gaze deviation; non-dominant superior-division strokes can cause neglect.<br>(e) Inferior division: say "upper quadrantanopia or hemianopia". | M1: "…face and arm more than leg (the leg too if the deep branches are blocked)…". M2 superior: "…on the language side (usually the left) a non-fluent aphasia; on the other side, neglect is possible." M2 inferior: "…a fluent aphasia on the language side (usually left) or neglect on the other, often with an upper quadrantanopia or hemianopia." Add a line: "Real strokes vary with collaterals and branch pattern." | minor | Branch anatomy: Gibo 1981, PMID 7452329, DOI 10.3171/jns.1981.54.2.0151; clinical syndromes: no source opened | Anatomy VERIFIED (abstract); syndrome caveats LIKELY |
| 12 | ICA card: "An aneurysm at the origin of the PCom can compress nerve III and dilate the pupil" | **Correct; make it more precise and add urgency.** A PCom-origin aneurysm is the most clinically urgent cause of oculomotor palsy because of rupture risk. | "An aneurysm at the junction of the internal carotid and posterior communicating arteries can press on nerve III, classically causing a painful third-nerve palsy with a dilated pupil. This needs emergency imaging." | minor | Ge 2025, PMID 41351389, DOI 10.31083/RN40930 | VERIFIED (abstract); "classically pupil-involving" LIKELY |
| 13 | Segment names | **MCA M1–M4** (sphenoidal, insular, opercular, cortical) and your **12 cortical areas match Gibo 1981 exactly**.<br>**ACA:** the source system is **A2–A5 (Fischer)**, so "A2 onwards (pericallosal)" is a simplification. Note too that "pericallosal" is defined differently by different authors.<br>**PCA P1–P4** with P3 quadrigeminal and P4 cortical matches Zeal & Rhoton 1978 as usually cited, but I could not read that paper. | ACA card title: "Anterior cerebral artery, A2 to A5 (shown as one vessel; called the pericallosal artery here)". Add: "Some authors call only the part beyond the callosomarginal origin 'pericallosal'." Add a glossary line saying which segment system is used. | minor | Gibo 1981, PMID 7452329; Perlmutter & Rhoton 1978, PMID 671075; Zeal & Rhoton 1978, PMID 632878, DOI 10.3171/jns.1978.48.4.0534 (no abstract) | MCA, ACA VERIFIED (abstract); PCA UNVERIFIED |
| 14 | Missing arteries; anything to remove | **Five to add first:**<br>(1) **Thalamogeniculate arteries** (P2), needed for the thalamic sensory syndrome.<br>(2) **Medial and lateral posterior choroidal arteries.** The largest P1 branch was usually a thalamoperforating or a posterior choroidal artery.<br>(3) **PCom perforators / premamillary (anterior thalamoperforating) artery.** An average of seven PCom branches arise, and the largest supplied the premamillary area in 80%.<br>(4) **Anterior spinal artery** (the vertebral card already names it).<br>(5) **Labyrinthine artery** (the AICA card names it).<br>**Remove nothing.** Mark the perforator fans and the 12 M4 branches as "scheme, not mapped". | Add the five as thin schematic vessels with an "illustrative" badge. | important | Saeki 1977, PMID 845644; Schmahmann 2003, PMID 12933968 | VERIFIED (abstract) for (2), (3); others LIKELY |
| 15 | Variants to teach | **Minimum correct set, with numbers you can cite:**<br>• **Fetal-type PCA:** any FTP in about 31–32% of 1,407 stroke and 546 unselected patients, unilateral right 15% versus left 8% (Frid 2022). Fetal PCom in 20 of 126 people (14 one side, 6 both) (Enyedi).<br>• **Absent or hypoplastic PCom:** the commonest posterior variation (Enyedi).<br>• **Absent or hypoplastic A1:** absent 1.78%, hypoplastic (<1 mm) 3.15% (meta-analysis of 85,316 patients).<br>• **Azygos ACA:** 0.22%.<br>• **Persistent trigeminal artery:** 0.6% of 1,150 CTAs.<br>• **Complete circle:** 36% of controls (Hartkamp); 63 of 126 = 50% (Enyedi).<br>• Sex differences exist: men have larger diameters and a more often complete anterior circle; there is no sex difference for fetal PCA (Groenheide 2025). | Add a **variant switch** with: Typical · Fetal PCA (one side) · Hypoplastic A1 · Absent PCom (one side) · AOP (in the perforator layer). Put PTA and azygos ACA as a note only. Each state labelled "illustration of a common variant; frequency from …". | important | Frid 2022, PMID 34811730, DOI 10.1111/ane.13558; Enyedi 2023 (epub 2021), PMID 34966998, DOI 10.5603/FM.a2021.0134; Triantafyllou 2025, PMID 40804858, DOI 10.3390/diagnostics15151893; Deniz 2022, PMID 35604462, DOI 10.1007/s00276-022-02960-5; Hartkamp 1999, PMID 10582995, DOI 10.1161/01.str.30.12.2671; Groenheide 2025, PMID 39826777, DOI 10.1016/j.neuroimage.2025.121035 | VERIFIED (abstracts) |

**Seen in the live view (unconfirmed):** in the **Below** view at 390 × 844 (crop: `v29_screens/390x844_11b_cow_crop.png`), the two PICA courses seem to meet in **one midline trunk** over the inferior vermis. Real PICA vermian branches stay paired. **Fix if confirmed:** keep left and right PICA branches separate near the midline. Severity minor. Confidence UNVERIFIED; it's a low-resolution software render.

---

## 2. Questions 16–18: calibres, open data and territories

### Q16: Calibres

| Where | Model outer radius | Comparison | Verdict | Source | Confidence |
|---|---|---|---|---|---|
| A1 | 1.0 mm | Pooled mean A1 **diameter 2.10 mm** (radius about 1.05) | Plausible | Triantafyllou 2025, PMID 40804858 | VERIFIED (abstract) |
| ICA 2.2→1.8, M1 1.4, basilar 1.6→1.45, M2 ~1.0 | — | Mouches radii are lumen: ICA ~1.8, M1 ≤1.2, M2 ≤0.8, basilar ≤1.35, from 544 MRA datasets, MNI 0.5 mm | Plausible if ~0.2–0.4 mm of wall is added. Wall thickness not verified. | Mouches 2019, PMID 30975990, DOI 10.1038/s41597-019-0034-5 | Lumen VERIFIED (data description); wall UNVERIFIED |
| P1 1.1 | — | PCA lumen ≤0.8 (Mouches) | **Probably large**, unless meant as a fetal-variant contrast. Use 0.9–1.0 and make P1 thinner in the fetal-PCA state. | Same | LIKELY |
| PICA 0.7, AICA 0.55, SCA 0.7, Heubner 0.38, lenticulostriates 0.28–0.16 | — | Not checked against cadaver data | Order of magnitude plausible. Label these as "approximate". | none opened | UNVERIFIED |

**Exact fix:** add one sentence to the card footer: "Tube radius = Mouches & Forkert 2019 MRA lumen radius + an assumed wall; small branches are approximate." TOF-MRA radii are resolution-limited, so they get less reliable for small vessels (LIKELY).

### Q17: Open vessel and territory data (licences quoted from the source)

| Dataset | Licence (quoted) | Space | Derived meshes OK on your site? | Exact files / notes | Confidence |
|---|---|---|---|---|---|
| **Mouches & Forkert 2019** statistical arterial atlas | DataCite record for `10.6084/m9.figshare.c.4215089`: **"Creative Commons Attribution 4.0 International"** | MNI, 0.5 mm | **Yes, with attribution.** Upstream inputs include IXI (CC BY-SA 3.0) and the UNC/CASILab database, whose licence isn't stated. The authors released the atlas under CC BY; still credit IXI. | `tofAverage.nii.gz`, `vesselProbabilities.nii.gz`, `vesselRadius.nii.gz`, `vesselRadiusStd.nii.gz` (Sci Data "Data Records"). The figshare API also returned **403** from my box, so I found no mirror. | Licence and file names VERIFIED; no mirror found |
| **Liu 2023** arterial territory atlas (PMID 36739282, DOI 10.1038/s41597-022-01923-0) | NITRC "Arterial Atlas" page, License: **"Attribution … lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you"** | "MNI" (which MNI template is UNVERIFIED) | **Yes, with attribution** | `ArterialAtlas.nii` (30 territories + ventricles) and `ArterialAtlasLabels.txt`. The source stroke images are at ICPSR under a data use agreement; you don't need them. | VERIFIED |
| **Kim 2019** CT territories (PMID 31406206, DOI 10.1038/s41598-019-48266-2) | No data-availability statement found on the article page | CT-reoriented template | Unknown; don't use until the authors confirm | Useful as a method for border zones ("Certainty-Index" maps) | Method VERIFIED (abstract); licence UNVERIFIED |
| **TopCoW** challenge data (Zenodo 10.5281/zenodo.15692630, Jun 2025; paper NEJM AI 2026, PMID 42631290, DOI 10.1056/AIdbp2500994) | Zenodo record text for `TopCoW2024_Data_Release.zip`: **"Open use. Must provide the source. Use for commercial purposes requires permission of the data owner."** The `CTA_ISLES2024_TUM.zip` subset is **CC BY-NC**. | Patient space; 125 paired MRA/CTA with 13 vessel labels | Yes for a non-commercial site, with the source cited. Use it for **variant frequencies and shapes**, not as an MNI atlas. | `TopCoW2024_Data_Release.zip`, `MRA_IXI_HH.zip`, `MRA_Lausanne.zip` | Paper VERIFIED (abstract); licence text LIKELY (search-index copy of the Zenodo page; the Zenodo API showed no licence field) |
| **CoW centerline graphs and meshes** (Zenodo 10.5281/zenodo.17358162, Oct 2025) | Zenodo API: **cc-by-nc-4.0** | Patient space (TopCoW) | Yes, non-commercial with attribution. Gives ready **labelled CoW meshes + variant JSON**. | `CoW_Centerline_Data.zip` | VERIFIED |
| **IXI vessel annotations** (Bernadotte 2025, Sci Data, PMID 41381606, DOI 10.1038/s41597-025-06354-1; data 10.5281/zenodo.17393202) | Zenodo API: **cc-by-4.0** | IXI subject space | Yes, with attribution (plus IXI's licence for the images) | `IXI###.nii.gz` vessel masks | VERIFIED |
| **IXI** (brain-development.org) | **"This data is made available under the Creative Commons CC BY-SA 3.0 license"** | Subject space | Share-alike applies to derivatives of the images | MRA images | VERIFIED |
| **BraVa** (Wright 2013, PMID 23727319, DOI 10.1016/j.neuroimage.2013.05.089) | Terms page: cite "http://cng.gmu.edu/brava" and Wright et al. 2013; "Browsing and using the data … is at the user's own risk". **No redistribution licence is stated.** | Subject space (SWC reconstructions, 61 people) | Ask the authors (ascoli@gmu.edu) before redistributing meshes | SWC files | LIKELY (official page as returned by search) |
| **UNC CASILab / TubeTK** "Designed Database of MR Brain Images of Healthy Volunteers" (Bullitt 2005, PMID 16179200, DOI 10.1016/j.acra.2005.05.027) | No licence found | Subject space | Unclear; avoid redistribution | data.kitware.com collection | UNVERIFIED |
| Vein or sinus atlas; open 7 T TOF | None verified this round | — | — | — | UNVERIFIED |

### Q18: Arterial territories

**Where:** a planned cortex colouring by territory.
**Problem:** Liu 2023 territories are **lesion-derived**. The authors traced lesions in 1,298 acute stroke patients, mapped them, and drew borders "based on the ratio between probabilistic maps". The atlas has 4 major territories plus perforator sub-territories, on two levels. It isn't a perfusion map, and borders differ between people.
**Exact fix:** colour by Liu 2023 territory and add a hatched **border-zone band** instead of a hard line. Caption: "Typical territories estimated from where strokes occurred in 1,298 patients (Liu et al. 2023). In any one person the borders can shift by centimetres, depending on the circle of Willis and collaterals. Border zones (watershed areas) are shown hatched."
**Severity:** important.
**Source:** Liu 2023, PMID 36739282; Kim 2019, PMID 31406206 (border zones from certainty-index differences).
**Confidence:** VERIFIED (abstracts). "Centimetres" is LIKELY; say "considerably" if you prefer to stay conservative.

---

## 3. Question C: realism, at most 12 items, ranked

| Rank | Improvement | Gain | Effort | Data and licence | Risk of looking real but being wrong | Phone |
|---|---|---|---|---|---|---|
| 1 | **"Data vs drawing" toggle:** hatching or desaturation on schematic items (nuclei ellipsoids, nerves, perforators, M4 scheme, pulse) | Very high teaching honesty | 1–2 d | None | Low | Yes |
| 2 | **Refit major arteries to Mouches 2019** (skeletonise `vesselProbabilities` above a threshold; radius from `vesselRadius`) | High; real positions in MNI 0.5 mm | 3–5 d | CC BY 4.0 (VERIFIED) | Medium: a mean atlas blurs variants and loses small branches. Keep hand-drawn perforators, labelled. | Yes (same tubes) |
| 3 | **Territory overlay + border zones** (Liu 2023) | High for stroke teaching | 1–2 d | CC BY (VERIFIED) | Medium (see Q18 caption) | Yes (vertex colours) |
| 4 | **Variant switch** using TopCoW / CoW-centerline variant data for frequencies and shapes | High | 3–4 d | TopCoW "open use, source required"; centerlines CC BY-NC 4.0 | Low if labelled "illustration" | Yes |
| 5 | **Real tractography:** HCP-1065 population atlas (Yeh 2022, PMID 35995773, DOI 10.1038/s41467-022-32595-4) | High; replaces illustrative streamlines | 3–5 d | brain.labsolver.org: "Creative Commons Attribution-ShareAlike 4.0" + WU-Minn HCP terms. **Share-alike applies to the derived files.** | Low–medium (population streamlines ≠ an individual) | Yes, if decimated |
| 6 | **Compression and loading:** meshopt or Draco geometry, KTX2 textures, lazy layers, service worker; first load under 8 MB | High on phones | 2 d | Library licences not checked here | None | Yes |
| 7 | **Fix small-screen UI** (dialog, overlay chips covering about half the 282 × 278 canvas at 320 px). See section 7. | High on phones | 0.5–1 d | — | — | Yes |
| 8 | **Nonlinear label alignment:** fetch atlases already distributed in ICBM 2009 nonlinear space where available (for example Julich-Brain on EBRAINS). Otherwise ANTs SyN, then show the residual error per structure. | Medium–high | 3–5 d | Julich-Brain licence UNVERIFIED this round | Medium | Yes |
| 9 | **Brainstem nuclei** from an open 7 T atlas (Brainstem Navigator or MASSP 2.0 subregions) instead of ellipsoids | Medium–high for trainees | 3 d | Brainstem Navigator licence: none found on NITRC (UNVERIFIED) | Medium | Yes |
| 10 | **BigBrain-textured cut faces** (histology on clipping planes) | High "wow", medium teaching | 4–6 d | BigBrain **CC BY-NC-SA 4.0**; ICBM152 transforms CC BY 4.0 (Sci Data 2019 usage note via search; LIKELY) | Medium (one brain, histology ≠ MRI) | Partly (texture size) |
| 11 | **Materials:** baked ambient occlusion, normal maps from fold depth, matcaps for light and dark themes. WebGPU only as progressive enhancement. | Medium | 2–3 d | — | Medium (glossy realism suggests precision) | Yes on WebGL 2; WebGPU now ships in Safari 26 (webkit.org, LIKELY) |
| 12 | **Skull base, tentorium/falx, venous sinuses** | Very high for neurosurgery | 5+ d | **No verified open MNI dataset this round** | **High** (drawn context looks authoritative) | Yes |

Real pial and white surfaces (fsaverage and others) are **not ranked**. fsaverage lives in its own surface space, registering it to ICBM 2009b adds error, and I didn't verify the FreeSurfer redistribution terms (UNVERIFIED). Your 0.5 mm iso-surface plus label borders is the more honest option for now.

---

## 4. Question D: the rest of the atlas

### Q19: Ten statements most likely wrong, outdated or too strong

| # | Where (quote) | Problem | Exact fix | Severity | Source | Confidence |
|---|---|---|---|---|---|---|
| 1 | Thalamoperforators: "Thalamic lacunes (pure sensory stroke)" | Wrong territory (see §1 #6) | Move it to the thalamogeniculate entry | important | Schmahmann 2003, PMID 12933968 | VERIFIED (abstract) |
| 2 | Schizophrenia, antipsychotics: "strict recovery in only about 1 in 7" | It's an **illness-outcome** figure (median 13.5% met recovery criteria), not a drug outcome, so placing it under the drug misleads | Move it to the diagnosis text: "Across studies, about 1 in 7 people met strict recovery criteria (all treatments)." | important | Jääskeläinen 2013, PMID 23172003, DOI 10.1093/schbul/sbs130 | VERIFIED (abstract) |
| 3 | Donanemab: "EU status not verified here" | **Outdated.** EU marketing authorisation was issued **24 Sep 2025** (CHMP opinion 24 Jul 2025, after re-examination), for early AD in **ApoE ε4 heterozygotes or non-carriers** with confirmed amyloid | "EU: authorised Sept 2025 for early Alzheimer's disease in people with one or no ApoE4 copy, with MRI monitoring for ARIA." | important | EMA EPAR "Kisunla", https://www.ema.europa.eu/en/medicines/human/EPAR/kisunla | VERIFIED |
| 4 | AChA lesion triad | Overstated (see §1 #3b) | As in §1 | important | Cheng 2020, PMID 32344281 | VERIFIED (abstract) |
| 5 | Vertebral card, Wallenberg | Leaves out vertigo and nystagmus; cause mix not given | As in §1 #7 | minor | Kim 2003, PMID 12805095 | VERIFIED (abstract) |
| 6 | Hypothalamus: "(for example diabetes insipidus)" | Renamed: central DI is now **arginine vasopressin deficiency** | "…hormones (for example arginine vasopressin deficiency, formerly central diabetes insipidus)" | minor | Arima 2022, PMID 36239119, DOI 10.1530/EJE-22-0751 (title: "Changing the name of diabetes insipidus") | VERIFIED (record) |
| 7 | Triptans: "constricting dilated vessels and reducing CGRP release" | Leans on the old vascular theory; the main action is thought to be on the trigeminal system | "Stimulate 5-HT1B/1D receptors on trigeminal nerve endings and cranial vessels, reducing CGRP release; their vessel-narrowing effect is why they are avoided in vascular disease." | minor | none opened (Ailani 2021, PMID 34160823, is clinical, not mechanistic) | LIKELY |
| 8 | Lenticulostriates "rise from M1" | Also from M2 | As in §1 #5 | minor | Rosner 1984, PMID 6747683 | VERIFIED (abstract) |
| 9 | Heubner "runs back above A1" | Commonly in front of A1; usually from A2 | As in §1 #4 | minor | Perlmutter 1976, PMID 948013 | VERIFIED (abstract) |
| 10 | Atlas intro dialog: "**104 structures**"; page header: "**127 structures**"; home card: "13 systems" vs handover "20 systems" | Inconsistent counts on the live site | Generate every count from `atlas.json` at build time | minor | Live site, screenshots `v29_screens/390x844_02_atlas.png` and `390x844_03_arteries.png` | VERIFIED |

Also worth a look (LIKELY, unsourced):
- **Middle temporal gyrus:** "posterior damage can impair seeing motion". Motion perception sits at the occipitotemporal junction, and akinetopsia usually needs damage on both sides. Add "rarely, usually both sides".
- **Calcarine:** macular sparing "because the occipital pole can also receive MCA branches". Say "one explanation is…".

### Q20: Teaching design

Use **three badges**, one per item and visible on the card header:
- **Atlas data:** shape from a named atlas.
- **Our drawing:** placed by hand on this template.
- **Visual effect:** animation or shading with no data behind it.

For the arterial pulse, use this caption: "Visual effect: the moving pulse shows the direction of flow only; it is not the real speed of the pulse wave or of blood." That's acceptable if labelled. Without the label it is misleading.
Severity: important. Confidence: LIKELY.

### Q21: Safety and tone

Add to every stroke-syndrome card: "If you think someone is having a stroke, call emergency services now." Add to drug lists: "Not prescribing advice; check current national guidance."

Keep "Not for planning surgery or reading scans", and add it to the nerve cards too.

Severity: important.

### Q22: Accessibility, the three key fixes (checked live)

1. **The welcome dialog must scroll and fit:** `max-height: 100dvh; overflow-y: auto`, with focus moved to "Start" and a visible close button. Escape already works (VERIFIED live); touch has no Escape.
2. **The 3D canvas has no accessible name or role and can't be focused.** I measured `role=null`, `aria-label=null` and `tabIndex=-1`. Give it `role="img"` and `aria-label="3D brain; selected: …"`, plus keyboard controls (arrows to rotate, +/− to zoom, Enter to select the next structure). Mirror every 3D selection in the structure list.
3. **Make the list the main accessible path.** Announce selections through the existing `aria-live` regions (`regionInfo`, `fnote`, present, VERIFIED). Make sure the pulse animation and the "TODAY" ticker stop under `prefers-reduced-motion`; the code checks that setting (VERIFIED), but I didn't test whether the pulse actually stops.

### Q23: Licensing and footer

- **Rhoton overclaim:** see section 6 for the replacement wording.
- **Reference bug:** the site's reference list has an **empty DOI for Rhoton 2002**. Crossref and doi.org resolve **10.1097/00006123-200210001-00003** ("The Supratentorial Arteries", Neurosurgery, Oct 2002), VERIFIED.
- **Licence lines to add if you reuse the data:**
  - Mouches & Forkert 2019 (CC BY 4.0)
  - Liu 2023 (CC BY, NITRC)
  - HCP-1065 (CC BY-SA 4.0 + HCP acknowledgement)
  - TopCoW (open use, source required)
- **Already flagged by you and still unverified here:** Neuromorphometrics CC BY-NC, and the Juelich, MASSP and Schaefer terms.

---

## 5. Question E: questions you didn't ask, and who to ask

**Questions:**
1. **Neurosurgeon:** "Can I see the arteries with the frontal and temporal lobes retracted (a pterional view), including the relation of the anterior clinoid, optic nerve and ICA?"
2. **Neuroradiologist:** "Can the MRI slice show where each artery is, and can I toggle TOF-MRA-like maximum-intensity projections from the Mouches atlas?"
3. **Neuroanatomist:** "Which named branches come from which source, and is each perforator group marked as illustrative?"
4. **Stroke neurologist:** "Do territory colours and syndromes link both ways, from a lesion to its likely artery and from an artery to its territory?"
5. **Medical educator:** "Are the artery cards going to generate questions, and how will you stop atlas schematics turning into 'facts' in the 988-question bank?"

**Five most valuable specialties to ask:** vascular neurosurgery, neuroradiology, stroke neurology, clinical neuroanatomy, and an accessibility auditor (or a medical educator).

---

## 6. Rhoton attribution: exact replacement wording

All three current strings (verified in the live `index.html` and `cite.html`) credit Rhoton for courses and calibres that were not taken from Rhoton.

**A. Per-card source line** (`SRCN.artery`). Current: "…(courses after Rhoton 2000 and 2002; calibres rounded from Rhoton and from the MRA atlas of Mouches and Forkert 2019)…". Replace with:
> Teaching drawing by NeuroUnknown of the typical, complete configuration, placed by hand on landmarks and sulci of this template. Not traced from angiography or from any published atlas. Vessel sizes were checked against the MRA atlas of Mouches and Forkert 2019 (lumen radii). The references on this card support the relations it describes. Real arteries vary a lot between people. Not for planning surgery or reading scans.

**B. Sources panel.** Current: "…drawn by NeuroUnknown on landmarks and sulci of this template (Rhoton 2000, 2002; calibres also from Mouches and Forkert 2019)…". Replace the bracket with:
> …drawn by hand by NeuroUnknown on landmarks and sulci of this template, following standard microsurgical anatomy (not measured from any single source); sizes checked against Mouches and Forkert 2019; each card cites the papers behind its specific relations. Rhoton 2000 and 2002 are listed as further reading…

**C. Cite page, version 2.9 entry.** Current: "…with sources (Rhoton 2000 and 2002; Hartkamp 1999; Mouches and Forkert 2019)". Replace with:
> …with references for the specific relations (for example Saeki and Rhoton 1977; Perlmutter and Rhoton 1976, 1978; Gibo et al. 1981; Rosner et al. 1984; Marinković et al. 1994), circle-of-Willis frequencies (Hartkamp 1999; Enyedi 2021) and sizes (Mouches and Forkert 2019). Rhoton 2000 and 2002 are further reading; nothing was measured from them.

Only add a paper to a card once you have checked that its abstract or text supports that card's sentence. Section 1 shows which abstracts support which sentences.

---

## 7. Live site check at phone size

**Method:** headless Chrome via Playwright on 24 Nov 2026, rendering WebGL in software (SwiftShader) with mobile emulation. It ran on a data-centre network, not a phone network, so timings don't represent mobile speeds. Screenshots are in `/workspace/neurounknown/v29_screens/`.

| Viewport | What I saw | Screenshots |
|---|---|---|
| 390 × 844 | Home: no sideways scroll (scrollWidth 390), no console errors. Atlas: the welcome dialog fits, with buttons at y ≈ 718–730. After "Explore on my own", the 3D brain renders (canvas 352 × 369 CSS px). The **Arteries** button loads `assets/brain3d/arteries.bin` on demand, as designed. Arteries are visible in the lateral and **Below** views, and the circle of Willis is legible. Sources panel text captured (section 6). | `390x844_01_home.png`, `390x844_02_atlas.png`, `390x844_02b_atlas_3d.png`, `390x844_03_arteries.png`, `390x844_10_arteries_view.png`, `390x844_11_arteries_below.png`, `390x844_11b_cow_crop.png`, `390x844_12_sources.png` |
| 320 × 568 | **Welcome dialog blocks the atlas:** content 757 px tall in a 568 px viewport; fixed position, no scrolling; buttons off-screen at y ≈ 719. A touch tap timed out after 5 s. The card reaches x ≈ 357 px, so text is clipped on the right. After dismissing with Escape, the 3D view renders (canvas 282 × 278). The overlay chips (nerve toggles, Arteries, five view buttons, Cut in half, Cortex, Layers) **cover roughly half the canvas**. Automated clicks on the view buttons timed out, so they may be covered at this width (not confirmed by hand). | `320x568_01_home.png`, `320x568_02_atlas.png`, `320x568_06_intro_after_scroll.png`, `320x568_10_arteries_view.png` |
| 375 × 667 | **Same dialog problem:** buttons measured at y ≈ 719 in a 667 px tall viewport; tap timed out. The screenshot's scale looks off, so trust the measurement more than the image. | `375x667_06_intro_after_scroll.png` |

**Exact fixes:**
- Dialog: `max-height: 100dvh; overflow-y: auto`, a sticky footer holding Start/Explore, and `max-width: calc(100vw - 24px)`.
- At widths under 360 px: put the view buttons in a single horizontal scroll row *below* the canvas, and collapse the nerve toggles into one "Layers" menu.

**Severity:** critical for the dialog, important for the chips. **Confidence:** VERIFIED (automated); real-device confirmation still needed.

**Not seen:** individual artery cards opened by tapping a vessel (I read them from the page data instead), the pulse animation in motion, the slice views with arteries, and real-phone speed.

---

## 8. Developments newer than mid-2025 (all VERIFIED unless marked)

- **TopCoW challenge summary:** NEJM AI, Aug 2026 (PMID 42631290). 125 paired MRA/CTA with 13 labelled CoW components; top models exceed 90% Dice and classify fetal-type PCA well. Permanent data release on Zenodo, Jun 2025.
- **CoW centerline graphs, meshes and variant JSON:** Zenodo, Oct 2025 (CC BY-NC 4.0). The fastest route to a correct variant switch.
- **IXI-MRA vessel annotations:** Sci Data, Dec 2025 (PMID 41381606; data CC BY 4.0).
- **ACA variant meta-analysis,** 85,316 patients: Jul 2025 (PMID 40804858).
- **Artery of Percheron review:** Aug 2026 (PMID 43024028).
- **PCom aneurysm oculomotor palsy review:** Nov 2025 (PMID 41351389).
- **Donanemab EU authorisation:** 24 Sep 2025 (EMA EPAR).
- **WebGPU shipped in Safari 26** (iOS/iPadOS/macOS 26; webkit.org "WebKit Features in Safari 26.0"). LIKELY; the page lists WebGPU among its features, and the shipping claim is from the search summary. It makes a WebGPU path realistic on iPhones, but keep WebGL 2 as the default.

## 9. Still UNVERIFIED

- Rhoton 2000/2002 content (no abstract, no full text); Zeal & Rhoton 1978 PCA segments (no abstract); Rhoton 1979 AChA (no abstract).
- AChA origin "just above PCom", "inner pallidum" and LGN supply; Heubner's caudate, putamen and pallidum supply; the chiasm-versus-nerve frequency for A1; callosomarginal prevalence.
- "SCA is the commonest TN offending vessel"; MCA syndrome caveats; the triptan mechanism; the MTG motion claim; the macular-sparing mechanism.
- Vessel wall thickness; PICA, AICA, SCA, Heubner and lenticulostriate calibres.
- Licences: Kim 2019 data, UNC/CASILab, Brainstem Navigator, Julich-Brain, FreeSurfer/fsaverage, meshopt/Draco/KTX2 libraries, vein/sinus atlases, open 7 T TOF. TopCoW licence text (seen via search, not the Zenodo API).
- Which MNI template Liu 2023 uses.
- The possible PICA midline merge (software render).
- Behaviour on a real phone or a real mobile network.
