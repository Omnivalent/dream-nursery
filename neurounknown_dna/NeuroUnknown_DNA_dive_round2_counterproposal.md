# NeuroUnknown: Genome Dive, round 2 (claude counter-proposal after ChatGPT's review)

**Date:** 24 Nov 2026 · **Site:** https://omnivalent.github.io/neurounknown/ (2.8.1) · **Status:** PROPOSAL, nothing built, live site unchanged.
**Flow:** round 1 proposal → ChatGPT review → **this round-2 text** → Grok (data, licences, technical, literature) → final plan.
**Limit of this document:** ChatGPT's full review file did not reach me, only a summary of it. Its page-by-page review of the 18 diagnosis pages, its replacement wording for the five evidence types and its learner exercises are **not checked here**. Claims below come from that summary and were each re-checked against our own data or PubMed where stated.

---

## 1. ChatGPT's findings: what I verified

| # | ChatGPT said | My check on 24 Nov 2026 | Verdict |
|---|---|---|---|
| 1 | All 696 "Autism" rows carry the label "Mendelian (database)" | Counted in `disease_gene_catalog.csv`: 696 autism rows, all 696 "Mendelian (database)" | **Confirmed** |
| 2 | TMEM222: the card should name its disorder, not "autism" | Our row's source note reads: "OMIM: neurodevelopmental disorder with motor and speech delay and behavioral abnormalities; Orphanet: complex neurodevelopmental disorder" (3 PubMed records). PubMed: Polla 2021, Genet Med, [doi 10.1038/s41436-021-01133-w](https://doi.org/10.1038/s41436-021-01133-w): biallelic TMEM222 variants cause an autosomal recessive neurodevelopmental disorder; 17 individuals, nine families; intellectual disability and variable features (aggression, tremor, reduced lower-limb muscle mass, mild hypotonia). The abstract does not mention autism. | **Confirmed** (the "recessive" part is from PubMed, not from our CSV, which does not store inheritance) |
| 3 | GWAS rows have neither lead-variant IDs nor interval boundaries | CSV columns: disease, gene, name, evidence, source_note, pubmed_records, ambiguous_symbol, N, U, volume_scarcity, overlooked_flag, in_protein_library. No variant or position column. 97 rows have a GWAS label (93 GWAS-only, 4 combined with Mendelian). | **Confirmed.** My round-1 sentence "GWAS loci are drawn as regions with a width" was too strong and is withdrawn. |
| 4 | All 24 chromosome lengths in the atlas are shorter than GRCh38; largest gap 163,906 bases on chr14 | Site lengths are the **last annotated gene end per chromosome** (`build_genome.py`: `chrlen = gc.groupby("chrom").end.max()`). Compared with GRCh38 lengths I entered from memory, all 24 are shorter, largest gap 163,906 on chr14, smallest 10,714 on chr11 (table in section 6). The page note already says chromosomes are drawn to the extent of annotated genes, but the ruler end label and the "· N bp" subtitle read as chromosome length. | **Confirmed.** ChatGPT's figure matches mine exactly, which is independent agreement but **not a source check**: my reference lengths are from memory and need verifying against an authoritative file. |
| 5 | Huntington's disease has zero catalogue rows | The catalogue has 7 diagnoses; Huntington's is not one. | **Confirmed** |

## 2. Three things I found while checking that ChatGPT did not report

1. **The HTT gene sits in the catalogue as an "Autism" row.** Its note is "Orphanet: complex neurodevelopmental disorder", the symbol is flagged ambiguous in our data, and it has 4,466 PubMed records (almost all, presumably, about Huntington's disease; I did not count). PubMed shows that *HTT* loss-of-function variants cause a developmental disorder, Lopes-Maciel-Rodan syndrome (Jung 2021, Hum Mol Genet, [doi 10.1093/hmg/ddaa283](https://doi.org/10.1093/hmg/ddaa283)). **I have not verified that the Orphanet entry in our row is that syndrome.** What is certain: the row is not about Huntington's disease, yet a visitor seeing "HTT" under "Autism" will read it as such. This is the strongest example of why the cards must name the specific disorder.
2. **The GWAS layer comes from one biobank, and four rows cite no GWAS source.** Of the 97 GWAS-labelled rows, **93 cite FinnGen R12 endpoints** (for example F5_DEPRESSION_DYSTHYMIA, G6_AD_WIDE), **not the GWAS Catalog**: depression 55, Alzheimer's 34, Parkinson's 2, schizophrenia 1, bipolar disorder 1. The other **4 rows (APP, APOE, GBA1, SNCA) carry a "GWAS locus" label together with "Mendelian (database)", but their source notes list only OMIM and Orphanet**, so the GWAS part of those four labels has no cited source in the CSV. Consequences: (a) my round-1 plan to "add the GWAS Catalog" would be a **new** source, not an extension; (b) the 93 FinnGen rows are from a single cohort (FinnGen, a Finnish biobank: to be confirmed by Grok) and need a cohort/ancestry label; (c) in practice only depression and Alzheimer's have a common-variant layer today (89 of the 93).
3. **Our downloadable catalogue includes OMIM phenotype text** (the autism source notes). OMIM has its own terms of use. I have **not** checked whether redistributing that text in a CSV is permitted. This is a licence question about the **existing** site, not only about new data.

## 3. What I accept from ChatGPT, what I change, what I disagree with

**Accept**
- Build Phase 1, but only **after** a new **Phase 0** of corrections (section 4).
- GWAS display rule: **lead variant known → labelled tick; interval known → band; gene name only → the words "Study position unavailable".** No width without source boundaries.
- Fix the chromosome ruler before adding any exon or variant track.
- Autism: name the specific disorder on each card; count direct evidence for autism separately from broader neurodevelopmental database entries (the page code already has an `autism-named` versus "broader developmental disorder" split; I did not recount it here).
- Open the tutorial with a single-gene example and height as the polygenic example.

**Change**
- *Huntington's as the opening example:* I agree it teaches "not yet curated" and, with the 1993 gene paper (Huntington's Disease Collaborative Research Group, Cell, [doi 10.1016/0092-8674(93)90585-e](https://doi.org/10.1016/0092-8674(93)90585-e): an expanded, unstable CAG repeat in a gene on 4p16.3), it also teaches that **not every causal variant is a point on the map**: a repeat expansion is a length change, so the "tick" model needs a **variant-type** field (single-nucleotide change, repeat expansion, deletion, structural). Two cautions: it is the first thing every visitor sees, and it is emotionally heavy for families living with the disease. I propose a short, plain, non-fatalistic card and **leave the choice of opening example to the site owner** (a physician), with a gentler single-gene alternative available.
- *"The three-level zoom is already enough":* agreed for teaching the main idea, **provided** Phase 0 is done first; otherwise the new zoom would make wrong labels easier to see.

**Disagree / caution**
- The chromosome-length discrepancy is a **labelling inconsistency, not a data error**: the page already discloses the gene-extent convention. The fix is still right (store true chromosome length and the annotated-gene extent as separate numbers; label the unannotated ends), but I would not describe the old display as wrong data.

## 4. Revised plan

**Phase 0: corrections to the existing Gene atlas (before any new feature). Needs no new data hosts except one authoritative length file.**
1. Replace the chromosome length with the GRCh38 length; keep gene extent as a second number. *Needs Grok to confirm the 24 reference lengths from an authoritative file (table below).*
2. Autism: each row names its specific disorder (from the source note), a visible "database entry, not an autism study" tag where the note does not mention autism, and a separate count of direct autism evidence.
3. Fix the HTT row (and look for similar ambiguous-symbol rows: the data already has an `ambiguous_symbol` flag; I did not count how many rows carry it).
4. GWAS rows: show source (FinnGen R12 endpoint), the "Study position unavailable" line, and an ancestry/cohort label; for APP, APOE, GBA1 and SNCA either add the missing GWAS citation or drop the GWAS label. Remove any wording that reads as "gene for X".
5. A visible "Not yet curated" state for the 11 diagnoses without gene rows (Huntington's included).
6. Licence review of the existing catalogue download (OMIM and Orphanet text) before anything new is added.

**Phase 1:** continuous zoom and flights across genome → chromosome → region, gene card with the five evidence tiers (ChatGPT's replacement wording to be merged once I have the file), the tutorial, phone layout.
**Phase 2:** cytoband ideograms, exon structure, a common-variant layer **with a source decision** (FinnGen only, or add GWAS Catalog / Open Targets), variant-type field, teaching traits (height as anchor).
**Phase 3:** coding sequence → protein; brain bridge with a coarse, labelled-approximate region mapping.
**Phase 4:** optional schematic intro and an ad video.

## 5. Brief for Grok (self-contained)

NeuroUnknown is a static, open, educational website (GitHub Pages, no server, no accounts, no analytics) about brain-disease genes and neuroanatomy. Its Gene atlas has 19,203 protein-coding genes placed on GRCh38 (GENCODE v43), a 905-row gene-diagnosis catalogue for 7 diagnoses (autism 696, depression 58, ALS 45, Alzheimer's 44, schizophrenia 31, Parkinson's 28, bipolar disorder 3) with evidence labels, a 3D brain atlas, and a 100-protein 3D library. We plan an interactive "Genome Dive". Rules: no discovery claims; evidence types kept separate; anything unverified is labelled "source not verified"; the conservative reading wins; every claim is checked in PubMed or the primary source before use. Our build environment cannot reach most genomic hosts (GWAS Catalog, UCSC, Ensembl, AlphaFold, Open Targets, NCBI, GTEx all failed from it; the gnomAD storage host answered but the path I tried returned 404), so data would arrive through a scheduled GitHub job.

Please answer, giving **Where / Problem / Fix / Severity / Source** for each finding (PMID, DOI or official URL; **do not invent identifiers**):
1. **Chromosome lengths.** From an authoritative file (UCSC hg38.chrom.sizes or the NCBI GRCh38 assembly report), give the 24 primary-assembly lengths and compare them with the table in section 6. State which assembly patch you used.
2. **Licences and terms** for redistributing derived data inside a CC BY-NC-compatible static site, for each of: FinnGen R12 summary results; GWAS Catalog; OMIM and Orphanet (our existing CSV already contains their phenotype text: is that allowed?); ClinVar; GENCODE; UCSC cytoband; Open Targets; ENCODE cCREs; GTEx; Allen/Siletti 2023 brain data; AlphaFold DB; gnomAD.
3. **FinnGen and the four uncited rows:** does FinnGen publish fine-mapped credible sets with lead variants and intervals that we could use for depression and Alzheimer's? What cohort and ancestry label should we show? Which published GWAS would be the right citation for the GWAS signal at APP, APOE, GBA1 and SNCA?
4. **Locus-to-gene:** is a published, openly licensed locus-to-gene resource (for example Open Targets L2G) suitable for display on a gene card, and what are its documented limits?
5. **Brain bridge:** a defensible coarse mapping from GTEx brain tissues and Siletti 2023 dissection regions to these structures: lobes, hippocampus, amygdala, thalamus, striatum (caudate, putamen, accumbens), cerebellum, brainstem. List the pitfalls.
6. **Repeat expansions and structural variants:** how should a map show a variant that is a length change (the Huntington's CAG repeat) rather than a point? Any standard representation?
7. **Performance:** realistic tile size and rendering budget for a mid-range phone for 19,203 genes plus exon structure for about 300 genes.
8. **Sharing:** a privacy-respecting way to share a chosen gene or region by link without a server.
9. **Literature 2025 to 2026** on locus-to-gene methods, polygenic score limits and ancestry bias that we should cite.
10. Anything in sections 1 to 4 that is wrong. End with the **five changes you would make first.**

## 6. Chromosome lengths (for question 1)

Reference lengths below were **typed from memory** as a consistency check and are **not source-verified**.

| chr | site length (last annotated gene end) | reference length entered for the check | difference |
|---|---|---|---|
| 1 | 248,937,043 | 248,956,422 | 19,379 |
| 2 | 242,175,997 | 242,193,529 | 17,532 |
| 3 | 198,228,376 | 198,295,559 | 67,183 |
| 4 | 190,196,190 | 190,214,555 | 18,365 |
| 5 | 181,472,430 | 181,538,259 | 65,829 |
| 6 | 170,745,977 | 170,805,979 | 60,002 |
| 7 | 159,233,377 | 159,345,973 | 112,596 |
| 8 | 145,066,685 | 145,138,636 | 71,951 |
| 9 | 138,320,835 | 138,394,717 | 73,882 |
| 10 | 133,778,699 | 133,797,422 | 18,723 |
| 11 | 135,075,908 | 135,086,622 | 10,714 |
| 12 | 133,238,549 | 133,275,309 | 36,760 |
| 13 | 114,346,637 | 114,364,328 | 17,691 |
| 14 | 106,879,812 | 107,043,718 | 163,906 |
| 15 | 101,979,093 | 101,991,189 | 12,096 |
| 16 | 90,222,851 | 90,338,345 | 115,494 |
| 17 | 83,240,804 | 83,257,441 | 16,637 |
| 18 | 80,247,514 | 80,373,285 | 125,771 |
| 19 | 58,605,223 | 58,617,616 | 12,393 |
| 20 | 64,327,972 | 64,444,167 | 116,195 |
| 21 | 46,691,226 | 46,709,983 | 18,757 |
| 22 | 50,801,309 | 50,818,468 | 17,159 |
| X | 156,027,877 | 156,040,895 | 13,018 |
| Y | 57,214,397 | 57,227,415 | 13,018 |

