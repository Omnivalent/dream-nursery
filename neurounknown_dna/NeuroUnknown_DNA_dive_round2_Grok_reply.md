# Grok's reply: NeuroUnknown Genome Dive, round 2

Reviewer: Grok. Date: 24 Nov 2026.
Scope: answers to the 10 questions in section 5 of your round-2 counter-proposal, with the length table in section 6 checked line by line.

Rules I followed: I make no discovery claims and read the evidence conservatively. Every PMID, DOI and URL below was fetched on 24 Nov 2026 (PubMed E-utilities, the official page, or the official API or data file). Anything I could not fetch is marked **source not verified**.

---

## Q1: Chromosome lengths

**Where:** section 6 length table, the "reference length" column, and the site ruler.
**Problem:** Your reference lengths were typed from memory. I checked all 24 against two official files:
- UCSC `hg38.chrom.sizes`: https://hgdownload.soe.ucsc.edu/goldenPath/hg38/bigZips/hg38.chrom.sizes
- NCBI GRCh38.p14 assembly report (GCF_000001405.40), column "Sequence-Length": https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/001/405/GCF_000001405.40_GRCh38.p14/GCF_000001405.40_GRCh38.p14_assembly_report.txt

The two files agree on all 24. I also diffed the assembled molecules in the original GRCh38 report (GCF_000001405.26, dated 2013-12-17) against p14, and they are **identical**. GRC patches add scaffolds but do not change primary chromosome lengths. Cite it as "GRCh38 primary assembly (identical in GRCh38.p14)".

| chr | GRCh38 length (bp) | chr | GRCh38 length (bp) |
|---|---|---|---|
| 1 | 248,956,422 | 13 | 114,364,328 |
| 2 | 242,193,529 | 14 | 107,043,718 |
| 3 | 198,295,559 | 15 | 101,991,189 |
| 4 | 190,214,555 | 16 | 90,338,345 |
| 5 | 181,538,259 | 17 | 83,257,441 |
| 6 | 170,805,979 | 18 | 80,373,285 |
| 7 | 159,345,973 | 19 | 58,617,616 |
| 8 | 145,138,636 | 20 | 64,444,167 |
| 9 | 138,394,717 | 21 | 46,709,983 |
| 10 | 133,797,422 | 22 | 50,818,468 |
| 11 | 135,086,622 | X | 156,040,895 |
| 12 | 133,275,309 | Y | 57,227,415 |

**Result:** all 24 values in your section 6 "reference length" column match the official GRCh38 lengths exactly, so the differences in your table stand as computed (largest 163,906 bp on chr14, smallest 10,714 bp on chr11). Your typed-from-memory numbers are now source-verified.

**X and Y both 13,018: coincidence or error?** This is expected, not an error. Both chromosomes end in the same pseudoautosomal region, PAR2, and the ruler uses the last annotated gene's end. That gene is the same PAR2 gene on both chromosomes, sitting at the same distance from each chromosome's end, so the gap comes out identical. I checked this on the UCSC API (https://api.genome.ucsc.edu/getData/track?genome=hg38;track=wgEncodeGencodeCompV49;chrom=chrX;start=155990000;end=156040895, and the same for chrY).
- **GENCODE V49 comprehensive:** the last gene ends at 156,029,114 on X and 57,215,634 on Y, so both gaps are 11,781 bp.
- **RefSeq:** the last gene, DDX11L16, ends at 156,028,183 on X, a gap of 12,712 bp.

So the exact gap depends on the gene set and release. Your 13,018 suggests an older or different annotation build. Name that build on the page.
**Fix:** Hard-code the 24 lengths above (identical to your section 6 column) with their source line. Keep "last annotated gene" only as a separate, labelled marker if you want it.
**Severity:** important. The ruler is on the live site, and the label currently doesn't match what it shows.
**Source:** the UCSC and NCBI files above, both verified.

On your "labelling inconsistency, not a data error" point: I partly agree. The gene coordinates are correct. But a ruler labelled with the chromosome while its end is really the last gene is a wrong number for that label, and most visitors won't read the disclosure. Treat it as a data-display error with a cheap fix, not as a cosmetic issue.

---

## Q2: Licences and terms

**Where:** the downloadable catalogue CSV, and every planned data layer.

| Resource | What the official terms say | Verdict for a public educational site + CSV | Source |
|---|---|---|---|
| **OMIM** | "You may use the OMIM database and data obtained from this site for your personal use, for educational or scholarly use, or for research purposes only. The OMIM database may not be copied, distributed, transmitted, duplicated, reduced or altered in any way for commercial purposes, **or for the purpose of redistribution**, without a license from the Johns Hopkins University." | **A redistributed CSV with OMIM phenotype text needs a JHU licence.** Educational use of the site doesn't cover redistribution. | https://www.omim.org/help/copyright. Text is from the official page as indexed by search; direct fetch returned 403 (Cloudflare). The wording is the same in older official copies. Treat it as verified wording, **direct fetch not verified**. |
| **Orphanet / Orphadata** | Data file header: "Creative Commons Attribution 4.0 International" | Reuse allowed with attribution and version/date | Orphadata en_product6.xml (version dated 2026-06-23), https://www.orphadata.com/data/xml/en_product6.xml, verified |
| **ClinVar (NCBI)** | "NCBI itself places no restrictions on the use or distribution of the data contained therein", but submitters may hold rights | OK; cite ClinVar and the release date | https://www.ncbi.nlm.nih.gov/home/about/policies/, verified |
| **GWAS Catalog** | "available under the general Terms of Use for EMBL-EBI Services. Summary statistics are made available under CC0 unless otherwise stated." | OK with citation; check per-dataset licences | https://www.ebi.ac.uk/gwas/docs/about, verified |
| **FinnGen R12** | "publicly available and may be freely used… not intended to serve as a basis for product development, marketing activities, or health-related claims." Summary-stat download requires a form. Asks for an acknowledgement sentence and the Kurki 2023 citation. | OK for education; add the acknowledgement text; no health claims | https://www.finngen.fi/en/access_results, verified |
| **GENCODE** | "All the GENCODE project data is open access" (no named licence on that page) | OK with citation | https://www.gencodegenes.org/pages/data_access.html, verified (exact licence name **not verified**) |
| **UCSC cytoband** | "sequence and annotation data displayed in the Genome Browser are freely available for any use" with credit to the contributor; some tracks carry their own restrictions | OK; credit UCSC and check the cytoBand track description | https://genome.ucsc.edu/conditions.html, verified |
| **Open Targets Platform** | "marked with CC0 1.0" | OK; FinnGen R12 data inside Open Targets still follows FinnGen's terms | https://platform-docs.opentargets.org/licence, verified |
| **ENCODE cCREs** | "External data users may freely download, analyze and publish results based on any ENCODE data without restrictions." | OK; cite Moore 2020 | https://www.encodeproject.org/help/citing-encode/ (JSON view), verified |
| **GTEx** | No licence statement found on the official FAQ. Open Targets' licence table lists GTEx as CC-BY 4.0 (secondary source). | Probably fine for summary data; individual-level data is dbGaP-controlled | **source not verified** (official licence) |
| **Siletti 2023 / Allen (CELLxGENE "Human Brain Cell Atlas v1.0")** | CELLxGENE's published-data terms: "anyone will be able to access it subject to a CC-BY 4.0 license" | OK with attribution | https://cellxgene.cziscience.com/docs/032__Contribute%20and%20Publish%20Data and collection https://cellxgene.cziscience.com/collections/283d65eb-dd53-496d-adb7-7570c7caa443, verified. Separate Allen Institute terms: **not verified** |
| **AlphaFold DB** | "available for academic and commercial use, under a Creative Commons Attribution 4.0 (CC-BY 4.0) licence" | OK with attribution | https://alphafold.ebi.ac.uk/faq, verified |
| **gnomAD** | Primary data under CC0; asks for attribution; SpliceAI annotations are CC BY-NC 4.0 | OK; don't redistribute SpliceAI scores | https://gnomad.broadinstitute.org/policies, verified |

**Problem:** The live CSV redistributes OMIM phenotype text.
**Fix:** Remove the OMIM text columns from the downloadable CSV now. Replace the names with MONDO labels (CC BY 4.0) or Orphanet labels (CC BY 4.0), and link MIM numbers out to omim.org. Whether showing bare MIM numbers as links needs a licence: **not verified**, but it is the usual practice. If you want to keep OMIM text, email JHU's licensing office first.
**Severity:** **critical** for the existing site. It is the only item here that is a terms breach today rather than a quality issue.

---

## Q3: FinnGen and the four uncited GWAS rows

**Where:** the GWAS-labelled rows (93 FinnGen R12, plus APP, APOE, GBA1, SNCA).
**Problem:**
1. **The cohort label is missing.** FinnGen is one population, Finnish biobank participants from an isolated population, so the effect sizes and allele frequencies are Finnish-specific. Show "FinnGen R12 (Finland, n≈500k)" on each card.
2. **R12 is no longer the newest release.** The FinnGen page lists DF13/R13, publicly released 2 June 2026 (browser r13.finngen.fi). Either keep R12 and label it as such, or plan an upgrade. Don't call it "latest".
3. **Fine-mapping is available.** FinnGen documentation says genome-wide significant loci are fine-mapped with SuSiE and FINEMAP, using in-sample LD, up to 10 causal variants per locus, 3 Mb windows, with the HLA region excluded. The R12 PheWeb "Credible Sets" table shows the top-PIP variant and a "CS quality" flag. That gives you a lead variant and a credible-set span per locus if you want regions later.
4. **Correct FinnGen citation:** Kurki MI et al. *FinnGen provides genetic insights from a well-phenotyped isolated population.* Nature 2023;613:508–518. DOI 10.1038/s41586-022-05473-8, PMID 36653562. Verified.

**The four rows (all checked in the GWAS Catalog REST API v2):**
- **APP:** your instinct to be cautious is fair, but APP **is** a reported common-variant AD locus. Bellenguez 2022 (GWAS Catalog study GCST90027158) lists rs2154481 mapped to APP at p = 1×10⁻¹² (catalogue value). Other studies report it too. It is a weaker signal than APOE, and the gene name comes from position mapping, not proven causality. Label it "AD GWAS locus near APP (lead rs2154481)", distinct from the rare Mendelian APP mutations. Citation: Bellenguez C et al. Nat Genet 2022;54:412–436, DOI 10.1038/s41588-022-01024-z, PMID 35379992. Verified.
- **APOE:** this is the strongest common-variant AD locus. My query returned no APOE-mapped association under GCST90027158. The paper itself treats APOE ε4 separately (its abstract refers to "effects of age and the APOE ε4 allele"), so **don't cite Bellenguez as the APOE GWAS source** without checking its tables (not verified). A verified alternative is the GWAS Catalog variant page for rs429358, https://www.ebi.ac.uk/gwas/variants/rs429358, which links to multiple AD studies. Or cite Kunkle 2019 (DOI 10.1038/s41588-019-0358-2, PMID 30820047; PubMed record verified, but its APOE row is **not verified** in the catalogue).
- **SNCA:** Nalls 2019 (GCST009325) lists rs356182 at p = 4×10⁻¹⁵⁴ and rs356203 at p = 5×10⁻¹⁴⁹, both mapped to SNCA. Citation: Nalls MA et al. Lancet Neurol 2019;18:1091–1102, DOI 10.1016/S1474-4422(19)30320-5, PMID 31701892. Verified.
- **GBA1:** Nalls 2019 (GCST009325) lists rs76763715 (p.N370S, also called N409S) at p = 2×10⁻²², mapped to GBA1. Dementia with Lewy bodies: Chia 2021, rs2230288, DOI 10.1038/s41588-021-00785-3, PMID 33589841. Verified. Note: rs76763715 is a low-frequency coding variant, not a typical common tag SNP. Say "low-frequency GWAS variant".

**Fix:** Add the columns `gwas_source` (study accession + PMID), `cohort/ancestry`, `lead_variant` and `release` to the GWAS rows. Fill the four rows from the citations above.
**Severity:** important.

---

## Q4: Open Targets L2G (brief)

**Problem:** L2G is a machine-learning ranking of likely causal genes per GWAS credible set, scored 0 to 1. It is not proof of causality. Limits from the official docs:
- It is trained on known effector genes, so it favours well-studied genes.
- Distance features weigh heavily.
- Scores change with every release ("You should expect some variation in the prediction scores with each release").
- Predictions below 0.05 are dropped.
- The platform model differs from the published Mountjoy 2021 method.

**Fix:** Show L2G as "predicted gene (Open Targets L2G, release X, score 0.xx)". Never present it as "the gene". Store the release.
**Severity:** important if L2G drives the gene cards.
**Source:** https://platform-docs.opentargets.org/gentropy/locus-to-gene-l2g (verified); Mountjoy E et al. Nat Genet 2021, DOI 10.1038/s41588-021-00945-5, PMID 34711957 (verified).

## Q5: Brain bridge pitfalls (brief)

**Problem:** Linking a gene to "where in the brain" usually mixes three different things:
- bulk tissue expression (GTEx)
- cell-type expression (Siletti 2023)
- where the disease shows on MRI

Expression is not where the disease happens.

**Fix:**
- Label each link by type, for example "expressed in…" rather than "acts in…".
- Note that GTEx is bulk post-mortem tissue with a limited set of brain regions.
- Note that Siletti 2023 is a single-nucleus RNA atlas from a small number of donors.
- Never colour the 3D brain by expression as if it were a lesion map.

**Severity:** important.
**Source:** Siletti K et al. Science 2023, DOI 10.1126/science.add7046, PMID 37824663 (verified); GTEx Consortium Science 2020, DOI 10.1126/science.aaz1776, PMID 32913098 (verified). The donor count and region list for Siletti are **not verified**; check them in the paper before printing numbers.

## Q6: Representing repeat expansions (brief)

**Problem:** A single-point, single-letter variant marker cannot show the HTT CAG expansion. The 1993 paper describes "a trinucleotide repeat that is expanded and unstable on Huntington's disease chromosomes".

**Fix:**
- Add a "repeat locus" glyph: a short bar showing the repeat unit, with the normal, intermediate and pathogenic ranges as a scale.
- Write the variant in HGVS repeated-sequence notation, which takes the form `NM_…:c.<start>_<end>CAG[n]`.
- Take repeat thresholds from STRchive and cite it per locus, rather than typing numbers.
- gnomAD has an STR page that shows population repeat-length distributions.

**Severity:** important, if HD or other repeat disorders are shown at all.
**Source:**
- HGVS repeated sequences: https://hgvs-nomenclature.org/stable/recommendations/DNA/repeated/ (verified)
- den Dunnen 2016, DOI 10.1002/humu.22981, PMID 26931183 (verified)
- STRchive: Hiatt L et al. Genome Med 2025, DOI 10.1186/s13073-025-01454-4, PMID 40140942 (verified), and https://strchive.org/ (page reachable)
- gnomAD STR: https://gnomad.broadinstitute.org/short-tandem-repeats (page reachable; whether HTT is listed there is **not verified**)
- HD gene paper: Huntington's Disease Collaborative Research Group, Cell 1993;72:971–983, DOI 10.1016/0092-8674(93)90585-E, PMID 8458085 (verified)

The exact HTT CAG thresholds are **not verified** here; take them from STRchive.

## Q7: Phone performance budget (brief)

These are engineering targets, not sourced facts.
- **Load:** the first view should load under about 300 KB gzipped of genome data. Load per-chromosome gene tiles lazily, as JSON or binary.
- **Drawing:** draw the ruler and genes on one canvas, not one DOM node per gene. Cull anything below 1 px at the current zoom.
- **Frames:** keep to 60 fps on pan and zoom. Test on a mid-range Android with 4× CPU throttling.
- **Brain:** don't load the 3D brain and the genome view at full detail at the same time.

**Severity:** minor (planning). **Source:** none needed.

## Q8: Link sharing via URL fragment (brief)

**Fix:**
- Encode the state in the fragment, for example `#g=chr4:3,074,681-3,243,960&gene=HTT&layer=gwas`. A fragment isn't sent to the server, which helps privacy, and it works on static hosting.
- Include the data version in the link, for example `&v=2.7`, so old links can say "data updated since this link".
- Validate and clamp coordinates against the GRCh38 lengths above.
- Never put free-text user input into the page from the fragment unescaped.

The example coordinates are illustrative, **not verified**. **Severity:** minor. **Source:** none needed.

## Q9: 2025 to 2026 literature

Only items I verified:
- **FinnGen DF13/R13**, public 2 June 2026 (FinnGen access page, verified).
- **STRchive**, Genome Med 2025 (above, verified).
- **FinnGen single-nucleus multiome**, public 13 Aug 2026 (preprint DOI 10.1101/2025.11.25.25340489 as listed on the FinnGen page; the preprint itself is **not verified**).
- **criTRia** (medRxiv, July 2026, PMID 42465908): a preprint on evidence criteria for tandem-repeat locus–disease links. It's a preprint, so cite it only as "proposed".

I am not adding other recent papers because I couldn't verify them.

---

## HTT and Orphanet

**Where:** the HTT row under "Autism"; its source note is "Orphanet: complex neurodevelopmental disorder".
**Findings (all verified):**
- **Orphanet has no Lopes-Maciel-Rodan entry, so there is no ORPHA number for it.** In Orphadata product 6 (dated 2026-06-23), HTT is linked to:
  - ORPHA:399 Huntington disease
  - ORPHA:248111 Juvenile Huntington disease
  - **ORPHA:528084 "Non-specific syndromic intellectual disability"** (disease-causing germline mutations, assessed)

  The Orphanet API search for "Lopes-Maciel-Rodan" returns no such entry either. So your row's Orphanet source is most likely ORPHA:528084, or a grouping label. "Complex neurodevelopmental disorder" doesn't match any current HTT link name (**this inference is not verified**). Orphanet sources: https://www.orphadata.com/data/xml/en_product6.xml and https://api.orphacode.org/EN/ClinicalEntity/orphacode/528084/Name.
- **The disorder's IDs elsewhere:** MONDO:0054573 "Lopes-Maciel-Rodan syndrome", with cross-references OMIM:617435, MedGen C4479491 and GARD:0027986. Source: EBI OLS MONDO record https://www.ebi.ac.uk/ols4/api/ontologies/mondo/terms?obo_id=MONDO:0054573 (verified). The OMIM page itself was not fetched (403).
- **Jung 2021:** "Mutations causing Lopes-Maciel-Rodan syndrome are huntingtin hypomorphs." Hum Mol Genet 2021, DOI 10.1093/hmg/ddaa283, PMID 33432339 (verified). Its abstract says the variants are **hypomorphic** and cause disease in **compound heterozygotes**. So your phrase "HTT loss-of-function variants cause…" is slightly too strong. Write "biallelic hypomorphic (reduced-function) HTT variants".
- **The 1993 Cell paper:** DOI 10.1016/0092-8674(93)90585-E, PMID 8458085 (verified).

**Fix:**
- Rename the card to "Lopes-Maciel-Rodan syndrome (LOMARS): biallelic reduced-function HTT variants".
- Add a line: "This is not Huntington's disease, which is caused by a CAG repeat expansion in the same gene."
- Cite Jung 2021 + MONDO:0054573. Give the Orphanet link as ORPHA:528084 with its real name.
- Move it out of "Autism" unless a source states autism as a feature. I haven't checked whether LOMARS includes autism (**not verified**).

**Severity:** important. Visitors will read this row as Huntington's disease.

## TMEM222 (your verified example)

Polla 2021 is confirmed: Genet Med 2021, DOI 10.1038/s41436-021-01133-w, PMID 33824500, "Biallelic variants in TMEM222 cause a new autosomal recessive neurodevelopmental disorder." Your fix, naming the disorder on the card, is right. **Severity:** important (it's the pattern for all 696 autism rows).

## Huntington's disease as the opening example

I agree with your concern and would **not** open with it. It is the most emotionally loaded example for affected families. It is also a repeat expansion, which the viewer can't draw correctly until Q6 is built, and it has no catalogue rows. The opening example would then teach "empty", not "how to read the genome".
- Open with a well-sourced common-variant example such as the SNCA locus in Parkinson's (Nalls 2019), or a curated Mendelian card.
- Keep HD as a deliberate "not yet curated / repeat expansion" teaching card one click away, with a careful line of wording.

The final call is yours. **Severity:** minor (a design choice). **Source:** none needed.

---

## Q10: Errors in sections 1 to 4

Checked against sections 1 to 4 and 6:
1. **The "reference length" column** is correct: all 24 values match UCSC hg38.chrom.sizes and the NCBI GRCh38.p14 report. Change the label from "typed from memory, not source-verified" to "GRCh38 primary assembly, verified". No error.
2. **"HTT loss-of-function variants cause a developmental disorder"** should say biallelic hypomorphic variants (Jung 2021). Minor.
3. **"I haven't confirmed the Orphanet entry is that syndrome"** is now answered: it isn't. Orphanet has no LOMARS entry, and HTT is linked to ORPHA:528084. Important.
4. **APP's GWAS label has a source after all** (Bellenguez 2022, rs2154481). The problem is that the CSV doesn't cite it, not that the signal doesn't exist. APOE needs a different citation than Bellenguez. Important.
5. **"FinnGen R12" is no longer current** (R13 is public since June 2026). Label the release; don't imply it's the latest. Minor.
6. **"Labelling inconsistency, not wrong data"** is partly right. See Q1: a mislabelled number counts as wrong data on screen. Minor.

## The five changes to make first

1. **Pull the OMIM phenotype text from the public CSV today.** Use MONDO or Orphanet labels plus outbound MIM links instead. (Critical.)
2. **Replace the ruler with the GRCh38 lengths** (UCSC/NCBI, identical across patches up to p14) and add a source line. Keep "last annotated gene" as a separate labelled marker.
3. **Fix the HTT row.** Call it LOMARS with reduced-function biallelic variants, add the "not Huntington's disease" line, and cite Jung 2021, MONDO:0054573 and ORPHA:528084 with its real name. Take it out of Autism unless a source supports it.
4. **Give every GWAS row a source, cohort and release.** Label FinnGen rows "FinnGen R12, Finland"; cite the four combined rows (APP Bellenguez 2022, SNCA and GBA1 Nalls 2019, APOE via the rs429358 GWAS Catalog studies). Add the FinnGen acknowledgement sentence.
5. **Name the specific disorder on all 696 autism cards** (the TMEM222 pattern), and add the "not yet curated" state for the 11 diagnoses without gene rows.

## Still source not verified

- OMIM copyright page: direct fetch blocked (403). The wording comes from the official page as indexed by search.
- Whether bare MIM numbers or links need a licence.
- The GTEx official licence (only a secondary source says CC-BY 4.0), and separate Allen Institute terms for the Siletti data.
- The exact GENCODE licence name.
- The APOE row inside Bellenguez 2022, and Kunkle 2019's APOE catalogue record.
- Whether LOMARS includes autism.
- Which Orphanet label produced "complex neurodevelopmental disorder".
- HTT CAG thresholds, HTT in gnomAD STR, Siletti donor and region counts, and the FinnGen multiome preprint.
- The coordinates in the Q8 example.
