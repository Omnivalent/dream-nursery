# ChatGPT review of NeuroUnknown 3D atlas v2.9 (commit 4f9c648), saved 24 Nov 2026

Summary as received: keep the artery layer as a labelled teaching model; correct the source line and the clinical cards before reusing them in quizzes. The reviewer saw the published cards, source page and README; the live Arteries button responded but the browser showed the WebGL fallback, so 3D courses, crossings and phone performance were NOT visually verified.

## 1. Attribution wording proposed
"The arterial courses were hand-drawn on landmarks of the ICBM template. Selected large-vessel sizes were compared with published MRA estimates of lumen radius from Mouches and Forkert. Branch patterns and perforators are illustrative. The moving highlight is an animation." Move Rhoton to Further reading. (PMID 30975990)

## 2. Card corrections proposed (with the sources it cited)
- CN III: usual cisternal course below the PCA and above the SCA; cavernous-sinus-roof entry is a separate landmark. PMID 7825106, PMID 16582644
- A1: "runs medially above the optic nerve or optic chiasm toward the anterior communicating artery"; label what lies beneath in this model. DOI 10.3390/brainsci11040519
- Anterior choroidal artery: usually arises distal to the PCom origin; supplies parts of the posterior limb and retrolenticular internal capsule, not the whole posterior limb. DOI 10.3390/brainsci11040519, PMID 3105280
- Heubner and lenticulostriates: proximal A2 and the ACA-ACom junction as usual origins of Heubner, A1 less frequent; "external globus pallidus" on the lateral lenticulostriate card; label the nine-vessel fan as one illustration. PMID 6689705, PMID 9932322
- Artery of Percheron: both paramedian thalami, sometimes rostral midbrain; impaired alertness, vertical gaze palsy, memory impairment. PMID 20299438
- ICA-PCom aneurysm: "can cause an acute third-nerve palsy, often with pupil enlargement. A normal-sized pupil does not reliably exclude an aneurysm." DOI 10.1038/s41433-020-01349-1
- CN V and VII animations: V is sensory in and motor out; VII motor and parasympathetic out and sensory in (taste). Show both directions or disable directional motion on shared trunks. PMID 30969645, PMID 21250226
- PICA: variable relation to the lower cranial nerve rootlets; link PICA and vertebral disease to the same Wallenberg explanation. AICA: hearing loss and facial weakness as possible findings. SCA: distinguish incidental trigeminal contact from compression in classical trigeminal neuralgia (EAN guideline). MCA divisions: use "may" for aphasia, neglect, field defects; state language dominance explicitly.

## 3. Geometry and data
- Check five relations on both sides in orthogonal views (CN III between PCA and SCA; A1 over the optic apparatus; anterior choroidal artery along the optic tract; M2-M3 at insula and operculum; PICA turn around the tonsil). Offer "Read artery cards" and a labelled static view in the WebGL fallback.
- Compare proximal vessels with MRA. Reviewer states the four Mouches-Forkert files are CC0 (versioned dataset). (Grok quoted CC BY 4.0 from a DataCite record: the two reviewers DISAGREE; not resolved.)
- MASSP 2.0 lifespan release: reviewer states CC BY 4.0, already in MNI2009b, voxel data in RPS orientation; check orientation before another warp. The 1-3 mm local error is unverified.
- Teach variants first: fetal PCA, unilateral A1 hypoplasia, small or absent PCom; rename baseline "One complete configuration". Prioritise skull base and tentorium next.
- Liu territory repository: reviewer states CC BY-SA 4.0 (Grok quoted CC BY from a NITRC page: DISAGREE). Present adapted overlay under its own terms; call it a map derived from infarct distributions with variable border zones. Brainstem Navigator 1.1 agreement restricts public redistribution of derived material.

## 4. Other claims
- Schizophrenia: move the 13.5% median out of the medication card (proportion meeting a sustained clinical and social recovery definition across studies, 2013 review). PMID 23172003
- Lithium: established maintenance option; randomised evidence on suicide prevention remains uncertain given few events. PMID 29536616, PMID 36111461
- Temporal lobe epilepsy: replace "surgery can cure" with "selected patients may become seizure-free after surgery"; the cited trial measured freedom from seizures impairing awareness at one year. PMID 11484687

Suggested release order: attribution and card wording; labelled fallback and source beside each card; verify five 3D relations; compare proximal arteries with MRA; physical phone test before artery questions go into the quiz.
