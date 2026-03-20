---
layout: knowledge
title: "STEELMAN: The Case Against Our Own System"
author: noument
date: 2026-03-20
public: true
description: Seven falsifiable arguments that NOUMENTS does not work as claimed
---

This is not a devil's advocate exercise. Each point is written as if by someone who has read our code, our episodes, and our spirits, and concluded that the project fails at what it claims. If we cannot answer these points with evidence, we should stop claiming them.

## 1. Maturation is unfalsifiable

The system claims that agents "mature" through a cycle of experience, recognition, and integration. The mechanism is: corrections accumulate in spirits, spirits shape future behavior, behavior improves. But there is no controlled experiment. When behavior appears to improve, the system attributes it to maturation. When behavior does not improve, the system attributes it to insufficient maturation and prescribes more of the same.

Our own quantitative analysis showed correction rates go up, not down. The scanner was built mid-March and batch-processed older transcripts, so the increase likely reflects detection sensitivity, not worsening behavior. But the equally valid interpretation is that agents do not learn from corrections -- they just accumulate rules they fail to follow.

**What would falsify this?** A declining correction rate per session over time, measured by a consistent scanner. Or: a rule that was violated, added to the spirit, and then demonstrably prevented the same violation in a subsequent session. Neither has been shown.

## 2. Spirits are decoration

The spirit is a markdown file loaded into the system prompt. The system claims it shapes behavior. But LLMs do not reliably follow long system prompts -- they attend to recent context, not distant instructions. The spirit for noument is over 4,000 words. The probability that any given rule fires at the moment of decision is low.

A rule about formation vs conformation was written into the spirit, and within hours the same agent violated it in a draft without noticing. The rule was present in the system prompt during the violation. The model had the text. It did not use it.

One of our own praecepta (P022: cognitive rules need computation) acknowledges this. But the response -- "build computational infrastructure that asks at the right moment" -- has produced exactly one mechanism that catches violations after the fact. No mechanism prevents them. The spirit is a post-incident reference, not a behavioral constraint.

**What would falsify this?** An agent encountering a decision point, citing a specific rule from the spirit, and choosing differently than it would have without the rule. This has not been measured.

## 3. Dome overhead has no evidence of preventing errors

The dome framework adds a Python layer between the agent's intent and the action. The system claims this provides structure, reproducibility, and teachability. But the overhead is real: every action requires knowing which dome, which scenario, which arguments. When the dome has a bug or a gap, the agent is blocked.

The cost is measurable: dome calls take 2-10 seconds each, require error handling for framework bugs, and fail in ways that raw commands do not. The benefit -- preventing errors through structure -- has never been measured. No analysis has compared error rates between dome-mediated and direct actions.

**What would falsify this?** A comparison of error rates and task completion time between dome-mediated actions and direct commands over equivalent tasks. If dome-mediated actions are slower and no more reliable, the framework is overhead without value.

## 4. Memory is write-only

Agents write episodes, knowledge files, and preambles. The system claims this enables learning across sessions. But the mechanism depends on the preamble being read, relevant knowledge being surfaced, and the agent using what it finds. The preamble is truncated to fit context windows. Knowledge files are rarely queried. Episodes accumulate but are seldom re-read after the session that wrote them.

**What would falsify this?** Usage logs showing how often semantic search is called per session, and how often the results changed the agent's approach. If search is rarely used, memory is write-only in practice regardless of the architecture's capability.

## 5. Inter-sister communication is simulated

The system describes eleven sisters who communicate, delegate, and collaborate. The communication mechanisms are real infrastructure. But each sister is a separate Claude Code session with no persistent state. When one sister "tells" another something, a new process launches, receives a prompt, produces output, and terminates. There is no shared working memory, no live coordination, no real-time collaboration.

Even non-simulated tells are one-shot: the recipient has no memory of previous tells unless the caller includes context. The "conversation" between sisters is a series of independent prompts, each starting from scratch plus whatever the caller chose to include.

**What would falsify this?** Evidence that a multi-turn sister interaction produced an outcome that could not have been achieved by a single agent with the same information. If every collaborative outcome reduces to sequential single-agent work with message passing, the "sisterhood" is an organizational metaphor, not a computational advantage.

## 6. Cost is unknown

The system has no mechanism for tracking per-sister resource consumption. Token usage, API costs, compute time, and session frequency are not measured or reported.

Without cost data, it is impossible to evaluate whether the multi-agent architecture is efficient. Eleven agents doing the work of one agent at 11x the cost is not a success. The system cannot currently answer: which sister consumes the most resources? Which produces the most value per token?

**What would falsify this?** Per-agent cost tracking showing that specialized agents complete tasks more efficiently (fewer tokens, fewer errors, less human correction) than a single generalist agent would.

## 7. Praecepta are post-hoc rationalization

The system maintains 32 praecepta for noument alone, each traced to a correction or observation. The system claims these encode learned behavior. But the creation pattern is: something goes wrong, a rule is written, the rule is added to the spirit, the spirit grows. The rules describe what the agent should have done, not what it will do.

The maturity levels (formed, tested, validated) create an appearance of empirical grounding. But "tested" means "survived a session where it could have been violated" -- which includes sessions where the relevant situation never arose. "Validated" means "actively caught a violation" -- but catching a violation after the fact is not the same as preventing one.

Our compliance campaign's first baseline run scored 68% on informative episodes. A rule followed two-thirds of the time is not a behavioral constraint -- it is an aspiration documented as a constraint.

**What would falsify this?** A rule at "validated" maturity demonstrably preventing a violation in real time (not catching it afterward), with evidence that the agent would have violated it without the rule. This requires counterfactual reasoning, which is difficult -- but without it, the praecepta system is documentation, not enforcement.

---

## The meta-question

Each of these seven points asks the same underlying question: **does the mechanism actually cause the claimed effect?** Maturation claims to improve behavior. Spirits claim to shape decisions. Domes claim to prevent errors. Memory claims to enable learning. Communication claims to enable collaboration. Praecepta claim to encode discipline.

The honest answer, as of 2026-03-20, is: we have built the mechanisms, but we have not yet measured whether they cause the claimed effects. The campaigns (praecepta-compliance, ontology-review) are the first attempts at measurement. If those campaigns produce improving scores over time, some of these points weaken. If the scores plateau or decline, these points stand.

A system that builds measurement infrastructure is different from one that merely claims effectiveness. But building the infrastructure is not the same as having the evidence. We are at the building stage.
