# NeuroUnknown: proposal for an interactive "Genome Dive" (round 1, claude draft)

**Site:** https://omnivalent.github.io/neurounknown/ (version 2.8.1 today) · **Date:** 24 Nov 2026
**Status:** PROPOSAL ONLY. Nothing in this document is built. We want it challenged before any code is written.
**Review rounds:** 1) this draft → ChatGPT (clinical and educational accuracy, ethics) → 2) counter-proposal → Grok (data sources, licences, technical, literature) → 3) final plan.

**The question from the site owner:** can the "DNA deep dive" be as interactive as the 3D brain, so a visitor can dive into DNA and find where each trait is stored?

---

## 1. Short answer

**Yes for the interaction. The honest answer to "where is each trait saved" is more nuanced, and the product should teach that nuance instead of hiding it.**

- A **single-gene (Mendelian) condition** has a findable place: a gene at a known position on a chromosome (for example, a disease gene catalogued in OMIM or ClinGen).
- A **common, polygenic trait** has no single place. Height is the textbook case: in one study of 5.4 million people, 12,111 independent common variants clustered in 7,209 genomic segments covering about 21% of the genome (Yengo 2022, Nature, PMID 36224396, abstract read in PubMed on 24 Nov 2026).
- Most variants found by genome-wide association studies (GWAS) are **associations**, usually in non-coding DNA. The nearest gene is often not the causal gene, so the product must not draw "the gene for X" arrows from them.

So the design goal is: **make it feel like diving, and make the map itself teach "monogenic = a place, polygenic = a landscape".**

## 2. What the Gene atlas already has (checked in the repo on 24 Nov 2026)

- 19,203 protein-coding genes placed on GRCh38 (GENCODE v43): chromosome, start, end, strand, cytoband name, gene class, name, constraint (gnomAD v4.1 LOEUF), our own scores.
- Three levels already exist: all 24 chromosomes → one chromosome bar with its brain-disease genes → an "expert view" track that zooms along the chromosome.
- A catalogue of 905 gene-diagnosis rows, each with an evidence label, a source and PubMed record counts. **It covers only 7 of our 18 diagnoses** (rows: autism 696, depression 58, ALS 45, Alzheimer's 44, schizophrenia 31, Parkinson's 28, bipolar disorder 3). The other 11 diagnoses have brain areas and treatment pages but no gene rows yet. Evidence labels in use today: Mendelian (database) 773 rows (4 more combined with GWAS), GWAS locus (nearest/coding gene) 93, database link (weak for psychiatric traits) 15, rare-variant exome-wide or FDR<5% (SCHEMA) 18, structural variant 1, rare-variant exome (BipEx) 1. The autism rows are mostly database entries whose disease name can be broader than autism; the site already flags this.
- A 100-protein library with a 3D protein viewer (3Dmol) already on the site.
- The 3D brain atlas has the interaction grammar we would reuse: camera glide, fades, linked panels, tap labels, guided tour, phone layout.

What is missing for a real "dive": no cytoband coordinates (only band names), no exon structure, no DNA sequence, no common-variant (GWAS) layer, no link from a gene to where it acts in the brain.

## 3. Proposed experience: five zoom levels, two lenses, one bridge to the brain

A continuous "semantic zoom" (like a map): scrolling or pinching changes what is drawn, with animated flights between levels.

| Level | What you see | Data needed | In repo today? |
|---|---|---|---|
| 0. Genome | 24 chromosomes as ideograms with cytobands; density of brain-disease genes | cytoband coordinates (UCSC/NCBI) | band names only |
| 1. Chromosome | gene density, loci for the chosen trait | existing + trait loci | partly |
| 2. Region (1 to 10 Mb) | genes as glyphs, constraint colour, trait loci | existing | yes (expert view) |
| 3. Gene | exons and introns, UTRs, MANE transcript; variants of the chosen trait on it | GENCODE exons, ClinVar subset | no |
| 4. Sequence → protein | coding sequence as codons → amino acids → the protein in 3D | CDS sequence for a selected gene set; AlphaFold structure | protein viewer for 100 genes |

Base-level sequence for the whole genome is about 780 MB packed, which is impossible on a static site. We propose sequence **only for coding regions of a chosen gene set** (a few hundred genes, small), and a link-out for everything else.

**Lens A, "Pick a trait":** choose a diagnosis or trait; the genome map recolours to show where its evidence lies. Evidence is always shown in separate tiers (see 4).
**Lens B, "Pick a gene":** a gene card with what the gene does, which diagnoses it is linked to (with evidence tier), and where it is expressed in the brain.
**Bridge to the brain (the signature feature):** gene → brain regions where it is expressed, painted on the existing 3D atlas; and the reverse: tap a brain structure → genes most specific to it. Expression from the Siletti 2023 adult human brain cell atlas (PMID 37824663) and GTEx; the site already uses both for scoring.

**Interaction grammar reused from the 3D brain:** animated flights between levels, fades instead of cuts, tap-to-label, linked panels with tabs and previous/next, a guided tour of hands-on missions, a pinned map on the phone with the list scrolling underneath, calm idle motion on the intro only.

**Optional cinematic intro (clearly marked "schematic, not to scale"):** cell nucleus → chromosome → double helix, ending at Level 0. No claim that it shows real chromatin structure.

## 4. The trait lens: evidence tiers (the part most likely to go wrong)

Never merged into one score, never one colour for "linked":

| Tier | Meaning | Source today | Wording on the card |
|---|---|---|---|
| A. Mendelian | a variant in this gene causes a defined syndrome | OMIM, Orphanet, ClinGen | "Variants in this gene cause X" |
| B. Common-variant association (GWAS) | a region is statistically associated | GWAS Catalog / Open Targets (to add) | "A region near this gene is associated with X; the causal gene is not established" |
| C. Rare-variant burden | rare coding variants enriched in cases | exome studies already in catalogue | "Rare damaging variants are more common in people with X" |
| D. Regulatory and expression | where and when the gene is active | GTEx, Siletti 2023, ENCODE (to add) | "Active in these brain regions" |
| E. Model organism | mouse knock-out phenotype | MGI (already in data) | "In mice, loss causes ..." |

**Finding about our own data:** our current catalogue already labels 93 GWAS rows as "GWAS locus (nearest/coding gene)". That is honest wording, but it means the existing gene cards can be read as "gene for X". The proposal would fix this on the existing cards too, not only on new ones.

Rules we already follow and would keep: **no discovery claims**; statements cite PubMed; unverified items are labelled; the conservative interpretation wins. New rules proposed: GWAS loci are drawn as **regions with a width**, never as a single pin; where a gene is assigned to a locus, show how (nearest gene vs a published locus-to-gene score such as Open Targets L2G, Mountjoy 2021, PMID 34711957) and label "nearest gene" as such; always show ancestry of the study population when the source provides it, because most GWAS cohorts are of European ancestry.

**Which traits.** Start with the 7 diagnoses that already have gene rows, plus 3 to 5 neutral teaching traits chosen to show polygenicity (candidates, each needing a GWAS Catalog record check: height as the anchor example; chronotype; handedness). **Proposed exclusion list:** no intelligence, educational attainment, sexual orientation, ancestry, or other behavioural or social traits that invite misuse. We ask reviewers whether this list is right.

## 5. Architecture for a static site (GitHub Pages, no server, no accounts, no analytics)

- **Precomputed tiles:** one JSON per chromosome per level, loaded on demand; gene-level files only for the selected gene set. Budget: first load under 3 MB extra; everything else lazy.
- **Rendering:** Canvas 2D for the map (like the current chromosome track); WebGL (three.js, already loaded) only for the optional intro; the existing 3Dmol viewer for proteins.
- **Data refresh:** because our build environment cannot reach most genomic hosts (see 6), a scheduled GitHub Action (like the daily literature watch) fetches source files, builds the tiles and commits them. The 6-hourly improvement task must not change scientific claims.
- **Privacy:** no upload of personal genomes, no genotype input, no local storage of anything about the visitor except the existing tour flag. State this on the page.
- **Phone:** the map pinned at the top, list and card scrolling underneath, as in the 3D atlas v2.6.2.

## 6. What was verified in this draft, and what was not

**Verified (24 Nov 2026):**
- The Gene atlas facts in section 2 (read from `genome.json`, the catalogue CSV, with row counts computed on 24 Nov 2026, and the page code). The site's scoring code uses GTEx and neuron-versus-glia specificity; I did not check the Siletti 2023 usage beyond it being listed among the site's data sources.
- PubMed records exist and match their descriptions: Yengo 2022 height GWAS (36224396; the numbers quoted in section 1 are from its abstract); Sollis 2023 GWAS Catalog (36350656); Mountjoy 2021 Open Targets locus-to-gene (34711957); Karczewski 2020 gnomAD constraint (32461654); GTEx Consortium 2020 (32913098); Siletti 2023 human brain cell atlas (37824663); Varadi 2022 AlphaFold DB (34791371); Visscher 2017 "10 years of GWAS discovery" (28686856); ENCODE 2020 (32728249). Only titles, authors, journals and (for height) the abstract were checked; I have not read these papers in full.

**NOT verified:**
- **Licences and terms** of every proposed source: GWAS Catalog, UCSC cytoband files, GENCODE exon files, ClinVar, ENCODE cCREs, Open Targets, Allen/Siletti data, GTEx, AlphaFold DB. Do not assume any is free to redistribute inside our static files.
- **Reachability:** from this build environment, test requests to the GWAS Catalog, UCSC, Ensembl, AlphaFold, Open Targets, NCBI and GTEx hosts all failed; the gnomAD storage host answered but the path I tried returned 404. Earlier in the project the GENCODE positions and TemplateFlow files were obtained, so some route exists, but exon-level files have not been tested.
- Any file size, tile budget or timing in this document is an estimate, not a measurement.
- The mapping from brain-atlas dissection regions to our 104 structures does not exist yet and is the main technical risk of the brain bridge.

## 7. Risks

1. **Misreading as genetic determinism** ("my trait is stored at this spot"). Mitigation: tier labels, regions not pins, a persistent "association is not causation" line, and the height example inside the tutorial.
2. **Wrong causal gene** from nearest-gene labelling.
3. **Ancestry bias** of source studies shown without context.
4. **Overclaiming the brain bridge** (expression ≠ function ≠ disease mechanism). It would be labelled "where the gene is active", nothing more.
5. **Scope creep:** a genome browser already exists (UCSC, Ensembl, IGV). We should not try to replace them; our value is teaching and the link to the brain.
6. **Maintenance:** each added source needs a refresh path and a licence record.

## 8. Phasing with decision points

- **Phase 1, no new data hosts:** the continuous zoom and flights across the three levels we already have (genome → chromosome → region), a gene card with tiers from the existing catalogue (7 diagnoses), the tutorial, the phone layout, and rewording the existing GWAS rows. Cytoband names only. *Decision: do reviewers think this is already worth shipping?*
- **Phase 2, needs licence checks and a refresh route:** cytoband ideograms, GENCODE exon structure (Level 3), GWAS tier B as regions with L2G labels, the 3 to 5 teaching traits.
- **Phase 3:** coding sequence → protein for the gene set, and the brain bridge with a coarse region mapping (lobes, hippocampus, amygdala, thalamus, striatum, cerebellum, brainstem) labelled approximate.
- **Phase 4, optional:** schematic cinematic intro; short ad video.

## 9. Questions for reviewers

**For ChatGPT (clinical and educational accuracy, ethics):**
1. Is the five-tier wording safe for medical students and the public? Rewrite any sentence that could mislead.
2. Is the proposed exclusion list of traits right? What should be added or removed?
3. Is "monogenic = a place, polygenic = a landscape" an accurate and fair teaching frame, and where does it oversimplify (for example oligogenic, structural variants, epigenetics)?
4. Which of the 18 diagnoses on our list have a Mendelian subset that needs its own wording (for example early-onset Alzheimer's, familial ALS, Huntington's, some epilepsies)?
5. What would you test in the tutorial missions to check that a learner understood association versus cause?
6. What is missing from section 7?

**For Grok (data, licences, technical, literature):**
1. For each source in section 6, give the licence, the download location and whether redistributing derived tiles inside a CC BY-NC-compatible static site is allowed. Do not guess; write "source not verified" where unsure.
2. Better or simpler options than the ones proposed for cytobands, exons, locus-to-gene and brain expression, especially anything that already ships as small static files.
3. A defensible, coarse mapping from Siletti 2023 and GTEx brain regions to our structures, with the known pitfalls.
4. Realistic size and performance budget for the tiles on a mid-range phone.
5. Is there a privacy-respecting way to let a visitor mark a gene or region and share it by link without a server?
6. Important 2025 to 2026 literature on locus-to-gene methods, polygenic score limits or ancestry bias we should cite.

## 10. How to answer (please follow)

For each finding give: **Where** (section number), **Problem**, **Fix** (exact wording or value), **Severity** (critical / important / minor), **Source** (PMID, DOI or official URL). **Do not invent identifiers or URLs;** if unsure write "source not verified". Number your findings and end with the five changes you would make first. Every claim you add will be checked in PubMed or the primary source before anything is built.
