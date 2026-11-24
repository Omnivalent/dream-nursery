# NeuroUnknown: Genome Dive, round 3 (final plan after ChatGPT and Grok) · version 2, with ChatGPT's full review merged

**Date:** 24 Nov 2026 · **Site:** https://omnivalent.github.io/neurounknown/ (2.8.1) · **Status:** plan agreed by three reviewers; **nothing changed on the site yet.**
**Rounds:** 1) claude proposal → ChatGPT review → 2) claude counter-proposal → Grok reply → **3) this plan.**

---

## 1. What I re-checked from Grok's reply

**Checked by me in PubMed on 24 Nov 2026 (title, authors, journal, volume, pages, DOI all match Grok's citations):**

| PMID | Paper | Note from the abstract |
|---|---|---|
| 36653562 | Kurki 2023, Nature 613:508-518, FinnGen | - |
| 35379992 | Bellenguez 2022, Nat Genet 54:412-436, Alzheimer's GWAS | Treats APOE ε4 separately ("in addition to effects of age and the APOE ε4 allele"), so it is **not** the APOE citation, as Grok said |
| 30820047 | Kunkle 2019, Nat Genet 51:414-430, Alzheimer's GWAS | - |
| 31701892 | Nalls 2019, Lancet Neurol 18:1091-1102, Parkinson's GWAS | - |
| 33589841 | Chia 2021, Nat Genet 53:294-303, Lewy body dementia | Abstract: gene-aggregation tests "implicated mutations in the gene GBA" |
| 26931183 | den Dunnen 2016, Hum Mutat 37:564-9, HGVS nomenclature | - |
| 40140942 | Hiatt 2025, Genome Med 17:29, STRchive | - |
| 42465908 | Weiner 2026, medRxiv, criTRia (preprint) | Preprint: cite only as "proposed" |

**Not checked by me (this environment cannot reach those hosts); taken from Grok and labelled as such wherever used:** the GRCh38 length files, all licence pages (OMIM, Orphanet, FinnGen, GWAS Catalog, gnomAD, AlphaFold, Open Targets, ENCODE, CELLxGENE, UCSC, ClinVar, GENCODE), the GWAS Catalog accessions, lead variants and p-values (rs2154481, rs356182, rs356203, rs76763715, rs2230288, rs429358), Orphadata product 6 and ORPHA:528084, MONDO:0054573, and FinnGen R13's release date.

**Where Grok corrected me (accepted):**
- The ruler is a **display error**, not only a labelling issue: the number shown next to a chromosome is not that chromosome's length.
- HTT: "biallelic **hypomorphic** (reduced-function) variants", not "loss-of-function variants".
- Orphanet has no LOMARS entry; our HTT row most likely comes from ORPHA:528084 "Non-specific syndromic intellectual disability" (Grok's inference, not verified).
- APP **is** a reported Alzheimer's GWAS locus: the CSV lacks a citation, not a signal.
- FinnGen R12 is not the latest release (R13 public since June 2026, per Grok).

## 1b. ChatGPT's full review (PDF, received 24 Nov 2026): what I checked and adopted

**Checked against the repository:** 905 rows with **878 distinct gene symbols** (confirmed); 7 of 18 pages populated (confirmed); the autism page is titled "Autism & neurodevelopmental conditions" (confirmed); all 696 autism rows "Mendelian (database)" (confirmed); 10 SCHEMA exome-wide rows plus 8 FDR <5% rows (confirmed); the C4 row and the AKAP11 row exist with the sources ChatGPT names (confirmed); chromosome 1 stored as 248,937,043 bp (confirmed).

**Checked in PubMed:** Sekar 2016 C4 (26814963, Nature 530:177-83); Kajiwara 1994 digenic retinitis pigmentosa (8202715, Science 264:1604-8: only double heterozygotes develop the disease); Riggs 2020 ACMG/ClinGen copy-number standards (31690835); Smith 2008 Genetics Concept Assessment (19047428); Singh 2022 SCHEMA (35396579: 10 genes exome-wide and 32 at FDR <5%, so our 8 FDR rows are a subset); Palmer 2022 BipEx (35410376): **AKAP11 reached significance when combined with SCHEMA** (OR 7.06, P = 2.83 × 10⁻⁹), as ChatGPT said; Siletti 2023 (37824663): **three postmortem donors, about 100 dissections**, as ChatGPT said.

**Not checked (links in the PDF that I cannot open from here):** GeneReviews chapters, ClinGen and ClinVar documentation, the FinnGen endpoint name "Depression or dysthymia", the National Academies and Hastings Center guidance, and the GitHub Pages statement that visitor IP addresses are logged (needed before the privacy line is published).

**Adopted from ChatGPT:**
- **Card titles name the source condition**, and the link to the page is stored separately as one of four relationships: *Direct evidence for this diagnosis* · *This syndrome can include this feature* · *Broader condition in this collection* · *Relationship awaiting review*. The first two need a phenotype-specific source. A separate count of direct autism evidence is published.
- **Evidence card wording** (public line, then details when opened):
  - *Established single-gene condition:* "Certain pathogenic changes in [gene] can cause [named condition] in [inheritance pattern]." A database mention alone stays "Listed in [source] · relationship awaiting review".
  - *Population association (GWAS):* "In [study], variation at this location was associated with [measured trait]." The candidate gene goes on a separate line with the reason it was chosen.
  - *Rare-variant study:* "In [study], [defined class of variants] in [gene] was more frequent in [case group] than in [comparison group]." State the study threshold.
  - *Human expression or regulatory observation:* "RNA from [gene] was measured in [tissue or cell type] from [sampled population]."
  - *Model-organism observation:* "Mice with [specific genetic change] showed [measured phenotype] under [study conditions]." No translation into a human psychiatric diagnosis.
- **GWAS drawing rules:** lead variant → tick "Reported association marker"; source interval → band with assembly and endpoints; fine-mapped credible set → its member variants (overview bracket labelled "Span of candidate variants"); gene label only → "Association reported. Study position unavailable in this catalogue." Candidate genes say how they were chosen ("nearest gene", "changes this gene's coding sequence", "prioritised by [method/version]", or "Mapping method unresolved"). The study's own phenotype is shown (FinnGen endpoint names, not our page title).
- **Teaching frame:** "A gene has an address. A trait can have many contributors." Plus learner questions on heterogeneity, penetrance, digenic and deletion mechanisms, and non-coding causes (C9orf72, Angelman).
- **Diagnosis-specific language for all 18 pages** (ChatGPT's table, kept as proposed teaching copy; each clinical example gets its own PubMed check before it goes on the site).
- **Teaching traits:** height only for now; chronotype and handedness deferred. Exclusions widened: no intelligence, educational attainment, sexual orientation, ancestry inference, criminality or aggression rankings, group-comparison leaderboards, individual or embryo prediction. Study population on every association card ("not reported" if missing).
- **Brain bridge** titled "Where was this gene's RNA measured?", with dataset, age group, assay, original tissue label and donor count, and four states: direct anatomical match, broader region sampled, no mapped sample, sampled but below detection. Pilot **one** region first.
- **Ruler** labelled "Nuclear reference chromosomes · GRCh38"; mitochondrial DNA stated as not shown.
- **Learner missions** (unseen lead-variant and phenotype-transfer tasks) as the release check, with text/list route, keyboard use, visible focus and reduced motion.
- **Counts and change log:** map density labelled "curated records in this release"; publication count and LOEUF moved to research details; each card shows source release, curation date and record identifier; dated corrections when an interpretation changes.

**Where the reviewers differ, and my resolution:**
- *HTT row:* Grok says move it out of Autism; ChatGPT says moving it loses the distinction. **Resolution:** keep the record, retitle it with its own condition (Grok: ORPHA:528084 / MONDO:0054573 Lopes-Maciel-Rodan syndrome), set its relationship to "Broader condition in this collection" so it no longer counts as autism evidence, and give Huntington's disease its own sourced repeat-expansion card. This satisfies both.
- *Opening example:* ChatGPT: Huntington's disease paired with height. Grok: SNCA. Me: SNCA plus height, Huntington's one tap away, because the repeat glyph (Grok Q6) does not exist in Phase 1. **Your call.**
- *C4:* ChatGPT asks for a structural-variation label; our row is already labelled "Structural variant (C4)". What is missing is its evidence type (population association), not the mechanism label.
- *OMIM:* ChatGPT's review does not raise it; Grok rates it critical. It stays first in Phase 0.

## 2. New finding: the OMIM problem is larger than the CSV

OMIM phenotype text appears in **three public places**, 695 times each: `assets/data/disease_gene_catalog.csv`, `assets/data/atlas.json` and `index.html` itself. It sits in **652 of the 905 catalogue rows**: 342 of these also carry an Orphanet name (Orphanet is CC BY 4.0 per Grok), and **310 have OMIM text only**.

There is also a conflict between two fixes: ChatGPT's "name the specific disorder on each card" would mostly reuse OMIM names. So the disorder names must come from **Orphanet or MONDO**, not OMIM. Where neither exists, the card shows "OMIM entry" with a link to omim.org and no copied text.

## 3. Decisions

1. **Phase 0 corrections come before any new feature** (all three reviewers agree).
2. **Opening example of the tour: SNCA in Parkinson's**, with height as the polygenic example. SNCA is the best teaching gene we have: according to our own catalogue it carries **both** tiers. Its notes list autosomal dominant Parkinson disease (rare Mendelian variants), and per Grok Nalls 2019 lists common variants at SNCA among the strongest Parkinson's GWAS signals. One gene then teaches "rare cause" versus "common association". Huntington's disease stays one tap away as a careful "repeat expansion / not yet curated" card. **Final say: site owner.**
3. **Five evidence types, not a ranked A–E scale** (ChatGPT): the selector is titled "What kind of evidence?"; type first, then the strength or review status of that claim. Card wording adopted from ChatGPT's table (section 1b). A separate **variant mechanism** field (repeat expansion, copy-number change, other structural variant) sits beside the evidence type.
4. **GWAS display rule (ChatGPT):** lead variant known → labelled tick; interval known → band; gene name only → "Study position unavailable". FinnGen fine-mapped credible sets (per Grok) can supply ticks and bands later.
5. **Locus-to-gene (Grok):** if used, always "predicted gene (Open Targets L2G, release X, score 0.xx)", never "the gene".
6. **Brain bridge (Grok):** "expressed in", never "acts in"; never painted like a lesion map; state that GTEx is bulk post-mortem tissue and that Siletti 2023 is a single-nucleus atlas from few donors (donor count still to check in the paper).
7. **Repeat expansions (Grok):** a "repeat locus" glyph with normal, intermediate and pathogenic ranges taken from STRchive, written in HGVS repeat notation; no typed-in thresholds.
8. **Sharing (Grok):** state in the URL fragment (`#g=…&gene=…&v=…`), validated against the GRCh38 lengths, never rendered unescaped.

## 4. Phase 0: exact work list (live site)

| # | Change | Data needed | Can I do it from this environment? |
|---|---|---|---|
| 0.1 | **Remove OMIM text** from the CSV, `atlas.json` and the page; show Orphanet names where present (342 rows); for the 310 OMIM-only rows show "OMIM entry" with an outbound link | none | **Yes** |
| 0.2 | Ruler: GRCh38 primary-assembly lengths, with a source line; "last annotated gene" as a separate labelled marker; name the annotation build | the 24 lengths (Grok-verified, identical to my table) | **Yes** |
| 0.3 | HTT row: rename to Lopes-Maciel-Rodan syndrome, biallelic reduced-function HTT variants; add "This is not Huntington's disease, which is caused by a CAG repeat expansion in the same gene"; cite Jung 2021 (PMID 33432339) and MONDO:0054573; move it out of Autism unless a source lists autism | none | **Yes** |
| 0.4 | GWAS rows: new columns `gwas_source`, `cohort`, `lead_variant`, `release`; label the 93 rows "FinnGen R12 (Finland)"; cite APP (Bellenguez 2022), SNCA and GBA1 (Nalls 2019); for APOE keep the label but mark "citation pending" until a GWAS Catalog record is checked | the FinnGen acknowledgement sentence (Grok did not quote it) | **Partly**: the citations and labels yes; the acknowledgement text and lead variants need a source I can reach |
| 0.5 | Autism cards: title with the source condition from Orphanet (or an "OMIM entry" link); ChatGPT's four relationship labels, defaulting to "Relationship awaiting review" until a phenotype-specific source is attached; a separate count of direct autism evidence | none beyond 0.1 | **Yes** (the default label; upgrading individual rows needs per-row source checks) |
| 0.6 | A visible "not yet curated" state for the 11 diagnoses without gene rows | none | **Yes** |
| 0.7 | Cite & data page: licence lines for Orphanet, FinnGen and the GRCh38 files; remove any claim that implies OMIM redistribution | none | **Yes** |

After Phase 0: Phase 1 (continuous zoom across genome, chromosome and region; gene cards with the five tiers; the SNCA tour; phone layout), then Phase 2 (cytobands, exons, common-variant layer from FinnGen credible sets or the GWAS Catalog, repeat glyph), Phase 3 (coding sequence to protein; the brain bridge).

## 5. Still open

- The ChatGPT links I could not open (GeneReviews, ClinGen, ClinVar, FinnGen endpoint names, the GitHub Pages logging statement).
- Real learners for the pilot (public readers and medical students): needs people, not code.
- Exact OMIM terms wording (omim.org blocked for both reviewers' direct fetch); whether bare MIM links need a licence.
- GTEx and Allen licences; exact GENCODE licence name.
- APOE GWAS citation; whether LOMARS includes autism; which Orphanet label produced "complex neurodevelopmental disorder".
- The FinnGen acknowledgement sentence; HTT CAG thresholds from STRchive; Siletti donor and region counts.
