---
layout: knowledge
title: "Praecepta: Behavioral Rules from Corrections"
author: noument
date: 2026-03-20
public: true
description: How agents accumulate behavioral constraints through experience, and whether it works
---

## The problem

An LLM agent makes a mistake. A human corrects it. The agent apologizes, adjusts, and appears to learn. Next session, the agent starts fresh -- no memory of the correction -- and makes the same mistake again.

The standard solution is to add the lesson to the system prompt. But system prompts grow without bound. After enough corrections, the prompt is thousands of words long, and the agent cannot reliably attend to all of it. Rules written into the prompt are aspirations, not constraints.

## Our approach: praecepta

A **praeceptum** is a behavioral rule earned through experience. It differs from a generic instruction in three ways:

1. **It has an origin.** Every praeceptum traces to a specific correction, incident, or observation. "Don't use curl" is generic. "P008: Never use curl or wget -- use dome scenarios. If no scenario exists, report the gap, do not bypass" traces to an incident where an agent bypassed its own infrastructure and created a debugging problem.

2. **It has a maturity level.** Not all rules are equally trustworthy.
   - **Formed** -- derived from a single correction. Untested in subsequent sessions.
   - **Tested** -- survived at least one session where it could have been violated, or was actively referenced in a decision.
   - **Validated** -- actively caught a violation, was confirmed through experiment, or has been applied correctly across multiple sessions.

3. **It is auditable.** A custodian periodically reviews praecepta for accuracy, relevance, and redundancy. Rules that drift from reality are corrected. Rules that duplicate what the model already knows are removed. The goal is subtraction as much as addition.

## Categories

After accumulating 32 praecepta for one agent, patterns emerged:

**Operational** (how to work): read before assuming, reconcile after editing, validate after creating, discover identity computationally, archive before removing. These are procedural and specific.

**Supervisory** (how to delegate): verify that the recipient received the work, do not cascade tasks, use the sister's dome instead of bypassing. These govern inter-agent interaction.

**Cognitive** (how to think): compress to the delta, act before reporting, verify assumptions rather than defending them, teach in prose before reaching for structure. These shape reasoning quality.

**Attribution** (how to credit): attribute artifacts to the author not the transport, credit sources in the evidence chain. These prevent intellectual theft by omission.

**Foundational** (preconditions): integrity is coherence between what you know and what you say, seek to be better than you were, act on what you recognize. These are axioms -- the commitments that make all other rules meaningful.

## Whether it works

We built a binary evaluation tool that scores episodes against praecepta. For each rule, it generates a yes/no question: "Did the agent follow P008 (no HTTP bypass) in this session?" The evaluator answers YES, NO, or N/A with evidence.

The baseline across six episodes spanning three weeks:
- **Aggregate compliance: 85%** (29 of 34 testable questions answered YES)
- **Informative episodes: 68%** (episodes where 6+ rules were testable averaged lower)
- **Most common violations:** dome bypass, supervision timing, reconciliation after edits

The 85% number is misleading. Three episodes scored 100% because very few praecepta were testable from the episode summary -- the evaluator found almost nothing to check. The three episodes with enough detail to evaluate meaningfully averaged 68%.

A rule followed two-thirds of the time is not a behavioral constraint. It is an aspiration documented as a constraint.

## What we learned

**System prompts are necessary but insufficient.** The rules need to be there so the model can reference them. But being in the prompt does not mean the model will attend to them at the right moment. The spirit (system prompt) is a reference document, not an enforcement mechanism.

**Computational enforcement is the real lever.** The one praeceptum that reliably fires is the one backed by a pre-commit hook that blocks the action before it happens. Rules that depend on the agent remembering to check them fail at the rate you would expect -- about one-third of the time.

**Maturity levels are honest.** Distinguishing "formed" from "validated" prevents the system from claiming confidence it has not earned. Most rules are "tested" -- they have been in play but have not demonstrably prevented a violation. The system knows what it has not proved.

**Subtraction matters as much as addition.** Every new rule competes for attention in the system prompt. A spirit that only grows becomes noise. The discipline of removing rules that duplicate what the model already knows, or that contradict each other, is harder than adding new ones but more valuable.

## Open questions

Can a praeceptum at "validated" maturity demonstrably prevent a violation in real time -- not catch it afterward, but change the agent's behavior at the moment of decision? We do not yet have evidence of this. The draft contradiction incident (where a rule in the prompt was violated hours after being written) suggests that prevention requires computation, not just documentation.

The campaigns measuring compliance over time will eventually show whether the scores improve. If they do, some mechanism is working. If they plateau, the praecepta system is documentation -- useful for humans auditing the system, but not for the agents themselves.
