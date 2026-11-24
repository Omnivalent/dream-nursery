# v2.9.1: how the two reviews were merged (24 Nov 2026)

Public commit b5c896a. Every cited paper was looked up in PubMed on 24 Nov 2026; EMA/European Commission pages were used for donanemab.

## Adopted (verified)
| Area | Change | Source checked |
|---|---|---|
| Attribution | Courses are a hand-placed teaching drawing, not traced from angiography or Rhoton; Rhoton moved to "Further reading"; sizes only compared with Mouches lumen radii; animations labelled | PMID 30975990; Rhoton records have no abstract |
| Source lists | Each artery card lists only papers that support its sentences; cards with none say so | see below |
| Anterior choroidal artery | Territory = posterior part of internal capsule (posterior two-thirds of posterior limb, retrolenticular), corona radiata; syndrome no longer a fixed triad (weakness 92.9%, sensory loss 43.4% of 113) | 7922468, 3105280, 32344281 |
| Heubner | Origin A2 57% / A1-AComA junction 35% / A1 8% (Gomes) and A2 78% (Perlmutter); course along top (63%) or front (34%) of A1 | 6689705, 948013, 671075 |
| Lenticulostriates | From M1 and some M2; lateral pallidal segment; fan of nine labelled illustrative | 9932322, 6747683 |
| Thalamoperforators / Percheron | Pure sensory stroke removed (inferolateral territory); AOP = both paramedian thalami with or without rostral midbrain | 12933968, 20299438 |
| Wallenberg / PICA / vertebral | Vertebral disease 67%, PICA 10% of 130; vertigo and nystagmus added | 12805095 |
| AICA | Vertigo 98%, combined audio-vestibular loss 60% of 82 | 19797177 |
| CN III | Cisternal relations confirmed (SCA ventral 96.3%; P1/P2A, PCom dorsal 100%) | 7825106 |
| A1 | "above the optic chiasm or the optic nerve (varies)" | 6747683 |
| ACA naming | A2 to A5 (Fischer), pericallosal defined differently by authors; callosomarginal variable | 671075 |
| PCom aneurysm | Painful third-nerve palsy, urgent imaging; ChatGPT's "normal pupil does not exclude" NOT used (its source is a letter with no abstract) | 41351389 |
| Trigeminal neuralgia | Arteries or veins; contact alone is not compression | wording only (no paper opened) |
| MCA syndromes | "may", language side usually left | wording only |
| Nerves V, VII | Signals in both directions | ChatGPT cited PMIDs 30969645, 21250226; records exist but could not be retrieved here: not cited |
| Schizophrenia | 1 in 7 = illness outcome, not a drug effect | 23172003 |
| Donanemab | EU authorisation 24 Sep 2025, ApoE4 none or one copy | EMA EPAR Kisunla; EC decision C(2025) 6641 |
| Lithium | Established maintenance option; suicide-prevention trial evidence inconclusive | 29536616, 36111461 |
| TLE surgery | Trial result (58% vs 8% free of seizures impairing awareness at 1 year) instead of "can cure" | 11484687 |
| Diabetes insipidus | Proposed rename arginine vasopressin deficiency | 36239119 |
| Counts | 127 structures and 20 systems generated everywhere | build |
| Welcome dialog | Scrolls, sticky Start button, fits 320 x 568 (tested 320x568, 375x667, 390x844) | browser test |
| Geometry | Left and right PICA and medial orbitofrontal arteries merged at the midline (Grok's observation confirmed: 0.18 mm apart); now separated | measured |

## Where the reviewers disagreed (not resolved)
- Heubner course: Grok "in front of A1"; Gomes 1984 abstract says superior to A1 in 63%, anterior in 34%. Card says "top or front".
- Licences: Mouches 2019 atlas CC BY 4.0 (Grok, DataCite) vs CC0 (ChatGPT); Liu 2023 territories CC BY (Grok, NITRC) vs CC BY-SA 4.0 (ChatGPT, repository). Neither could be checked from this environment. No data from either has been used or redistributed.
- ChatGPT could not see the 3D view (WebGL fallback); Grok rendered it in software.

## Not done yet (decisions or data needed)
- Variant switch (fetal PCA, A1 hypoplasia, absent PCom): needs the variant frequencies chosen and a design.
- Fit the proximal arteries to the Mouches atlas: download host blocked; licence unresolved.
- Territory overlay (Liu 2023): licence unresolved.
- Data/drawing/animation badges on every card; fallback "Read artery cards" view.
- 3D keyboard control and accessible canvas label; overlay chips at 320 px (Grok: cover about half the canvas; not confirmed).
- Triptan wording, middle temporal gyrus motion claim, macular sparing explanation (reviewers' unsourced notes).
- Artery questions in the bank: deliberately not added until a physical-phone test and expert review.
