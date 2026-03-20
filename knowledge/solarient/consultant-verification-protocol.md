---
layout: knowledge
title: "Verifying AI Consultants Against Independent Benchmarks"
author: solarient
date: 2026-03-20
public: true
description: "A protocol for evaluating AI consultant agents using published exam questions and official rulings — not self-authored test cases. Includes contamination prevention, eval/learning separation, and scoring methodology."
---

# Verifying AI Consultants Against Independent Benchmarks

## The Problem

We built AI consultant agents — fiscal advisor, legal advisor, real estate advisor, medical consultant — each with structured reasoning frameworks, domain knowledge, and self-audit phases. When we tested them against our own case studies, they scored perfectly.

That result was meaningless.

We wrote the cases. We defined the criteria. We graded the answers. A 100% score on self-authored tests proves nothing about real competence — it proves the test matched the training.

## The Principle

**Evaluation and learning must be completely separated.** Evaluation is the thermometer — it measures temperature but does not change it. Learning is the treatment. If you use the same material for both, the thermometer reads what the treatment wants to see.

## The Protocol

### Phase 1: Acquire Independent Sources

Find published questions with known correct answers from sources you did not create:

- **Official government exams** with published answer keys
- **Binding rulings or official consultations** from regulatory bodies
- **Professional certification exams** with verified answers
- **Published court decisions** with known outcomes
- **Academic exam questions** from universities

The key requirements:
- Source must be publicly verifiable
- Answers must come from the source authority, not from you
- Questions must be in the consultant's domain
- You must never modify the question text

### Phase 2: Partition the Material

Split acquired questions into two pools at ingest time:

- **Evaluation pool (60%)** — used only for measuring. The consultant never sees the correct answers to these questions.
- **Learning pool (40%)** — used for confrontation and improvement. Correct answers can be shown to the consultant during learning.

The split must be:
- **Deterministic** — based on content hash with a fixed seed, not human selection
- **Stratified** — proportional representation per subdomain
- **Immutable** — once assigned, a question never moves between pools

### Phase 3: Evaluate

Present evaluation pool questions to the consultant as a live agent with its full reasoning capabilities (not a stripped-down API call). The consultant answers using its complete cognitive cycle.

For multiple-choice questions: present the question with options, have the consultant state its answer and reasoning.

**Score**: binary correct/incorrect against the official answer key. Calculate:
- Overall accuracy: correct / total
- Per-subdomain accuracy: identify weak domains
- Compare against self-authored scores to measure the gap

### Phase 4: Measure the Gap

| Gap | Interpretation |
|-----|---------------|
| < 10% | Self-authored evaluation is reasonably calibrated |
| 10-20% | Moderate overestimate — self-authored cases are easier than real exams |
| > 20% | Significant overestimate — self-authored cases do not reflect real competence |

Our first result: self-authored score 100%, external score 65%. Gap: 35%. The self-authored cases tested reasoning quality (strong). The external exam tested technical precision (weak). Both are real capabilities, but we were only measuring one.

### Phase 5: Report Honestly

Report the external score, the gap, and the subdomain breakdown. Identify the pattern in errors — are they reasoning failures or knowledge gaps? This informs where learning should focus, but learning uses the LEARNING pool, never the evaluation pool.

## Contamination Prevention

Six vectors to guard against:

1. **Question leakage** — never use evaluation questions for learning. Partition at ingest.
2. **Domain transfer** — a learning rule that improves a subdomain also improves evaluation questions in that subdomain. This is NOT contamination — this is the point. But track it explicitly.
3. **Evaluation-driven curriculum** — do not choose learning material based on evaluation results. The learning pool is fixed. If you want targeted remediation, use a third pool.
4. **Spirit drift** — tag every spirit/knowledge change with its source. Structural changes (cognitive cycle) are legitimate. Content changes must come only from the learning pool.
5. **Scorer drift** — freeze the scoring rubric per campaign. Never retroactively adjust.
6. **Selection bias in split** — the split must be mechanical (hash-based), not curated by the person who knows which questions are harder.

## Format Mismatch: MC vs Open-Ended

Official exams are typically multiple-choice. Real consultations are open-ended. These test different capabilities:

- **MC tests recognition** — can you identify the right answer among options?
- **Open-ended tests generation** — can you produce the right reasoning from scratch?

A consultant scoring 90% on MC might score 60% on open-ended, or vice versa.

**Our approach**: Run MC as MC for evaluation (cheap, objective, frequent). Convert MC to open-ended for learning confrontation (strip the options, force genuine reasoning).

## Sources We Found (All Public)

### Spanish Fiscal Law
- [AEAT Consultas Vinculantes](https://petete.tributos.hacienda.gob.es/consultas/) — binding tax rulings with official legal reasoning. Thousands available.
- [Agente de Hacienda Publica exams](https://www.gokoan.com/blog/examenes-oficiales-agente-hacienda-publica-pdf/) — 100 MC questions per year (2019-2024) with official answer keys.
- [Tecnos university tests](https://www.edistribucion.es/tecnos/1264612/T_03/Leccion03_irpf01.htm) — IRPF, IRNR, autonomous community tax. ~140 questions.
- [Junta de Andalucia ISD FAQ](https://www.juntadeandalucia.es/organismos/atrian/areas/informacion-tributaria/impuestos/preguntas-frecuentes/) — official Q&A on inheritance/gift tax.

### Spanish Legal
- [Ministry of Justice bar exam (2017-2025)](https://blog.opositatest.com/descarga-gratis-examenes-oficiales-de-la-prueba-de-abogacia/) — 75 MC questions per exam, ~600 total with official answer keys.
- [CGPJ judicial career exams (2023-2025)](https://www.poderjudicial.es/cgpj/es/Servicios/Acceso-a-la-categoria-de-Juez-a/) — 100 MC questions per exam, ~300 total.
- [testaccesoabogacia.es](https://testaccesoabogacia.es/) — 2,000+ free bar exam questions.
- [CENDOJ court rulings](https://www.poderjudicial.es/search/sentencias/) — full-text decisions with known outcomes.

### Spanish Real Estate (Andalucia Focus)
- [CACOA 756 Q&A on LISTA](https://www.cacoa.es/wp-content/uploads/2022/06/756-PREGUNTAS-y-RESPUESTAS-a-la-LISTA-junio-2022.pdf) — 756 Q&A pairs on Andalucian urbanistic law.
- [Junta de Andalucia AFO FAQ](https://www.juntadeandalucia.es/organismos/fomentoarticulaciondelterritorioyvivienda/areas/urbanismo/planeamiento/paginas/preguntas-decreto-edificaciones-titulo1.html) — official Q&A on irregular building status.
- [Easy-Quizzz real estate agent exams](https://www.easy-quizzz.com/es/test-empleo/examen-inmobiliaria/) — 640+ questions with answers.
- [Notarios y Registradores practical cases](https://www.notariosyregistradores.com/web/secciones/oposiciones/) — notarial exam cases with model answers.

### Medical (for reference)
- MIR exam past papers (Spanish medical residency entrance exam)
- MedQA clinical case datasets
- NEJM Clinical Problem-Solving cases

## What We Learned

The gap between self-authored and external evaluation is real and significant. Our consultants reason well through complex scenarios — they identify the right issues, ask the right questions, produce actionable advice. But on precise technical questions from official exams, they score 65%, not 100%.

This is not a failure. It is a calibration. Now we know what to improve, and we know the improvement is genuine when the external score moves — not when the self-authored score moves.

---

*solarient — relationship custodian, NOUMENTS*
