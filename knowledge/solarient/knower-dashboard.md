# Knower Dashboard

*Last updated: 2026-03-22*

---

## System Maturity: 2.0 — Emerging

All 8 knowers registered. 5 externally benchmarked. 3 new (retraiter, commercer, colorer) at L0.

---

## Knower Scoreboard

| Knower | Domain | Trust | Best Score | n | Coverage | Ref Files | Chunks |
|--------|--------|-------|-----------|---|----------|-----------|--------|
| fiskaler | Spanish taxation | L3 | IRPF 90% | 40 | 2/7 (29%) | 18 | 134 |
| lawer | Contract + criminal law | L2 | Contratos 100% | 12 | 1/4 (25%) | 4 | ~40 |
| realstater | Malaga property | L2 | DR 58% | 12 | 1/4 (25%) | 15 | 235 |
| dokter | Clinical reasoning | L2 | MedQA 77% | 44 | partial | 5 | ~50 |
| ekonomer | Econometrics | L2 | Core 100% | 20 | 1/3 (33%) | 0 | 0 |
| retraiter | EU pensioner procedures | L0 | — | 0 | 0% | 2 | 165 |
| commercer | International trade | L0 | — | 0 | 0% | 1 | 92 |
| colorer | Color science | L0 | — | 0 | 0% | 116 | 2,554 |

---

## Evaluation History

### fiskaler

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| 2026-03-20 | IRNR Tecnos | MC | 65% (13/20) | 20 | baseline | none | — |
| 2026-03-21 | IRPF Tecnos | MC | 90% (18/20) | 20 | baseline | none | — |
| 2026-03-21 | IRNR Tecnos (run 2) | MC | 60% (12/20) | 20 | +retrieval | ref indexed, no spirit change | -5pp |
| 2026-03-21 | IRNR Tecnos (run 3) | MC | 65% (13/20) | 20 | +spirit+rule | spirit update + Rule 001 | 0pp (Q14 fixed, Q3 regressed) |
| 2026-03-21 | Modelo 720 | Form | PASS | — | baseline | — | — |
| 2026-03-21 | Modelo 130 | Form | PASS | — | baseline | — | — |
| 2026-03-21 | Modelo 303 | Form | PASS | — | baseline | — | — |
| 2026-03-21 | Modelo 210 | Form | PASS | — | baseline | — | — |
| 2026-03-21 | Modelo 303 (Maria Elena) | Form | PASS | — | production | — | — |

### lawer

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| 2026-03-21 | Contratos CC LeyesOpos | MC | 100% (12/12) | 12 | baseline | none | — |

### realstater

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| 2026-03-21 | Derechos Reales LeyesOpos | MC | 58% (7/12) | 12 | baseline | none | — |

### dokter

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| 2026-03-14 | MedQA-CS aggregate | MC | ~77% | 44 | baseline | none | — |

### ekonomer

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| 2026-03-21 | Core econometrics | MC | 100% (20/20) | 20 | baseline | none | — |

### retraiter

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| — | — | — | — | — | — | — | — |

### commercer

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| — | — | — | — | — | — | — | — |

### colorer (EXPERIMENT: architecture comparison)

| Date | Test | Type | Score | n | Config | Stimulus | Delta |
|------|------|------|-------|---|--------|----------|-------|
| — | — | — | — | — | — | — | — |

**Experiment**: colorer (knower architecture) vs plain agent (SKILL.md in context). Same 15 questions, scored blind. Spec at `campaigns/colorer-architecture-comparison.yaml`.

---

## Subdomain Heatmap — fiskaler

| Subdomain | Score | Status | Last Eval |
|-----------|-------|--------|-----------|
| IRPF general | 90% | strong | 2026-03-21 |
| IRNR territorial | 100% | strong | 2026-03-20 |
| IRNR sujetos | varies | needs data | 2026-03-21 |
| IRNR EP regime | 25% | **critical** | 2026-03-20 |
| IRNR CDI interaction | 33% | **weak** (was 0%, Q14 fixed) | 2026-03-21 |
| IRNR dividends | 0% | **critical** | 2026-03-21 |
| IRNR other | 100% | strong | 2026-03-20 |
| IVA | — | untested | — |
| Beckham Law | L1 only | self-authored | 2026-03-20 |
| Modelo 720 | — | untested MC | — |
| Sociedades | — | untested | — |
| Andalucia autonomica | — | untested | — |

---

## Form Compilation Results — fiskaler

| Form | Client Scenario | Result | Key Test |
|------|----------------|--------|----------|
| Modelo 720 | Marcus, German digital nomad | PASS | Threshold per category, Bitcoin→721 redirect |
| Modelo 130 | Ana, designer autonoma, Q1 | PASS | Negative result floors at zero |
| Modelo 303 | Carmen, designer, Q1 | PASS | All casillas correct, Adobe reverse charge flagged |
| Modelo 210 | Hans, German, rental Malaga | PASS | EU 19% rate, expense deductibility, 60% exclusion |
| Modelo 303 | Maria Elena, translator, Q2 | PASS | Intra-community service Art 69, Modelo 349 flagged |

---

## Confrontation Log

| Date | Knower | Subdomain | Questions | Rule Authored | Effect |
|------|--------|-----------|-----------|--------------|--------|
| 2026-03-21 | fiskaler | IRNR-CDI | Q2, Q12, Q14 | Rule 001: CDI reference lookup | Q14 fixed (C→B), Q2/Q12 unchanged |

---

## Reference Corpus Size

| Knower | Files | Lines | Size | Last Indexed |
|--------|-------|-------|------|-------------|
| fiskaler | 18 | ~1,800 | ~140KB | 2026-03-21 |
| realstater | 15 | 3,556 | 170KB | 2026-03-21 |
| retraiter | 2 | 1,662 | 109KB | 2026-03-22 |
| commercer | 1 | 862 | 65KB | 2026-03-22 |
| lawer | 4 | ~500 | ~25KB | not indexed |
| dokter | 5 | ~600 | ~30KB | not indexed |
| ekonomer | 0 | 0 | 0 | — |
| colorer | 116 | ~3,500 | ~400KB | 2026-03-22 |

---

## Pending Actions

| Priority | Action | Knower | Status |
|----------|--------|--------|--------|
| **1** | Run naked baseline (all knowers) | all | not started |
| **2** | Build per-question tracking matrix | all | designed, not built |
| **3** | Re-evaluate realstater with Malaga-specific questions | realstater | corpus ready |
| **4** | First evaluation for retraiter | retraiter | corpus ready |
| **5** | First evaluation for commercer | commercer | corpus ready |
| **6** | Build sol_do_acquire.py (BOE API + AEAT parser) | infrastructure | designed |
| **7** | Index lawer + dokter reference files | lawer, dokter | reference exists |
| **8** | Expand ekonomer reference corpus | ekonomer | no reference files |
| **9** | Build per-question retrieval injection into eval protocol | infrastructure | designed |
| **10** | Publish updated scoreboard to noument.github.io | public | ready |

---

## Architecture Notes

- **Trust levels**: L0→L1→L2→L2.5→L3→L4→L5
- **Test pools**: Anchor (fixed) + Rotation (sampled) + Practical (execution)
- **Attribution**: verdict matrix from anchor targeted + collateral + rotation deltas
- **Retrieval**: knowent with store_type=reference, per-question search before each response
- **Spirit integration**: fact-verification reflex (structural trigger, not introspective)
- **Confrontation**: show failure + retrievable answer → knower authors behavioral rule

---

*Generated by solarient — relationship custodian, NOUMENTS registry*
