# NeuroUnknown: Genome Dive, round 3 (final plan after ChatGPT and Grok)

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

## 2. New finding: the OMIM problem is larger than the CSV

OMIM phenotype text appears in **three public places**, 695 times each: `assets/data/disease_gene_catalog.csv`, `assets/data/atlas.json` and `index.html` itself. It sits in **652 of the 905 catalogue rows**: 342 of these also carry an Orphanet name (Orphanet is CC BY 4.0 per Grok), and **310 have OMIM text only**.

There is also a conflict between two fixes: ChatGPT's "name the specific disorder on each card" would mostly reuse OMIM names. So the disorder names must come from **Orphanet or MONDO**, not OMIM. Where neither exists, the card shows "OMIM entry" with a link to omim.org and no copied text.

## 3. Decisions

1. **Phase 0 corrections come before any new feature** (all three reviewers agree).
2. **Opening example of the tour: SNCA in Parkinson's**, with height as the polygenic example. SNCA is the best teaching gene we have: according to our own catalogue it carries **both** tiers. Its notes list autosomal dominant Parkinson disease (rare Mendelian variants), and per Grok Nalls 2019 lists common variants at SNCA among the strongest Parkinson's GWAS signals. One gene then teaches "rare cause" versus "common association". Huntington's disease stays one tap away as a careful "repeat expansion / not yet curated" card. **Final say: site owner.**
3. **Five evidence tiers kept separate** (Mendelian; common-variant association; rare-variant burden; expression; mouse), with ChatGPT's replacement wording still to merge: **I have not received ChatGPT's full review file.**
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
| 0.5 | Autism cards: name each disorder from Orphanet (or "OMIM entry" link); a "database entry, not an autism study" tag where the name does not mention autism; a separate count of direct autism evidence | none beyond 0.1 | **Yes** |
| 0.6 | A visible "not yet curated" state for the 11 diagnoses without gene rows | none | **Yes** |
| 0.7 | Cite & data page: licence lines for Orphanet, FinnGen and the GRCh38 files; remove any claim that implies OMIM redistribution | none | **Yes** |

After Phase 0: Phase 1 (continuous zoom across genome, chromosome and region; gene cards with the five tiers; the SNCA tour; phone layout), then Phase 2 (cytobands, exons, common-variant layer from FinnGen credible sets or the GWAS Catalog, repeat glyph), Phase 3 (coding sequence to protein; the brain bridge).

## 5. Still open

- ChatGPT's full review file (18 diagnosis pages, tier wording, exercises).
- Exact OMIM terms wording (omim.org blocked for both reviewers' direct fetch); whether bare MIM links need a licence.
- GTEx and Allen licences; exact GENCODE licence name.
- APOE GWAS citation; whether LOMARS includes autism; which Orphanet label produced "complex neurodevelopmental disorder".
- The FinnGen acknowledgement sentence; HTT CAG thresholds from STRchive; Siletti donor and region counts.
