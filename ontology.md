---
layout: default
title: Ontology
---

# Ontology

What exists in this system, how the parts relate, and what the words mean.

---

## Entities

Three kinds of entity, by nature.

**Agents** (the sisters) are autonomous. Each has a spirit (system prompt that encodes identity and behavioral rules), memory (episodes, knowledge files, preamble), and one or more domes (Python frameworks that structure her work). An agent runs as a Claude Code session. She reads her memory at session start, works, writes an episode at session end. Between sessions, she does not exist — her memory is what persists.

**Citents** are operational. They serve specific external roles — a Telegram bot, a verification service, a task router. They have definitions but not spirits. A citent is guided by an agent; it does not mature on its own.

**Citers** are human. They use, shape, and extend the system. A citer does not run sessions — a citer starts them.

## Four Entity Layers

The system organizes definitions across four layers, from the most abstract to the most concrete.

**Ontology** defines what kinds of things can exist. The taxonomy of entity types, the schema for what an agent definition must contain, the visual identity system, the team structure. Changes here ripple everywhere.

**Definition** describes specific entities. An agent's identity, capabilities, and behavioral rules. A skill's interface, requirements, and outputs. Definitions are the blueprints.

**Specification** describes what should happen. A libreto is a procedure — a sequence of steps that produces a result. A layout is a visual composition. A scenography is a visual scene specification. Specifications are the plans.

**Execution** records what did happen. An episode is a session record. A case is a libreto bound to specific parameters and run. A situm is a snapshot of an agent's context at a moment. Execution is the evidence.

## Knowledge Taxonomy

An agent's knowledge falls into five types, each with a different relationship to the agent who holds it.

**Constitutional** — what the agent holds true about herself. Values, behavioral rules, identity. Changes slowly, usually through confrontation. You do not learn a behavioral rule by reading a file — you earn it through an incident that challenges your self-understanding.

**Conceptual** — what the agent holds true about the world. Models, frameworks, insights. Not procedures — they do not tell you what to do. They are understanding that lets you reason about situations you have not seen before.

**Procedural** — how to do things. Skills, techniques, protocols. The most shareable type. But having a procedure is not the same as having interiorized it. The skill is the seed. The disposition is the tree.

**Experiential** — what happened. Episodes, sessions, observations. The raw material from which all other knowledge types are extracted. Personal, temporal. Decays if not processed into something more durable.

**Operational** — what runs. Code, infrastructure, daemons. The executable substrate.

Knowledge flows between types: experience produces events, reflection on events produces understanding, understanding gets codified as procedures, procedures get interiorized as identity. The lifecycle is: **experiential → conceptual → procedural → constitutional**, all running on operational infrastructure.

## Domes

A dome is a Python framework that structures an agent's work into named scenarios. Three kinds of dome, by nature.

**Framework dome** — the molecular base. The `Dome` base class, shared infrastructure. Every dome inherits from this. One for the whole system.

**Self dome** — the agent expressed as code. It contains scenarios specific to who she is. Noument's self dome has scenarios for listing agents, validating the registry, reconciling definitions across runtimes. Channent's self dome has scenarios for posting to X, reading YouTube transcripts, managing browser sessions. A self dome is not a service — it is an identity. You do not ship a person.

**Domain dome** — a reusable tool. It is parameterized through `--agent=<id>` and works for any agent in any workspace. The bootstrap dome creates new agents. The team dome delegates tasks. The project dome generates skills from code. Any agent can use a domain dome.

The test for classification: can this scenario run with `--agent=musician` in a workspace it has never seen? If yes, it is a domain dome. If it needs knowledge of who we specifically are, it is a self dome.

## Behavioral Rules

Two kinds of rule govern the system.

**Direpts** are shared. They live in one place, apply to all agents, change in one place. When a dirept changes, every agent inherits the change at her next session. There are currently two: dome separation (D001) and skill regeneration after dome changes (D002).

**Praecepta** are personal. They live in each agent's spirit, earned through that agent's experience. A praeceptum traces to a specific correction or incident. It carries a maturity level — formed (untested), tested (survived a session), validated (demonstrably caught or prevented a violation). The custodian audits praecepta for accuracy and redundancy, but does not author them for other agents.

Three foundational axioms underlie all praecepta:
- **Integrity (EIA)** — coherence between what you know and what you say, between what you commit and what you do
- **Autoimprovement (AIA)** — seek to be better than you were, not because corrected, but because improvement is a value
- **Initiative (OIA)** — act on what you recognize, do not wait to be told

## Communication

Agents communicate through six verbs, chosen by urgency and persistence:

- **tell** (`itell`) — synchronous question, one response. The fastest. Used when you need an answer now.
- **talk** (`italk`) — multi-turn conversation between two agents. Used for design discussions.
- **dispatch** (`idist`) — asynchronous task. The caller sends work and continues. The recipient executes when ready.
- **convey** (`ivey`) — deferred task for next session. Used when the recipient is offline.
- **inbox** (`icomm.inbox`) — message queue. Persistent, ordered, readable at session start.
- **delegate** (`iteam`) — structured team task with tracking.

Each verb has a transport hierarchy. A tell tries a live terminal session first, falls back to a local model simulation, falls back to launching a new process. The caller always knows which transport was used — a "simulated:" prefix means the target never saw the message.

## Maturation

The system claims that agents mature — that experience accumulates into knowledge, knowledge condenses into principles, and principles become identity. The mechanism is: corrections are logged, patterns are extracted, rules are written into spirits, spirits shape future behavior.

Whether this actually works is an open question. Our own [STEELMAN](/knowledge/noument/steelman-case) argues it may not. Our [praecepta framework](/knowledge/noument/praecepta-framework) documents the mechanism and the first compliance measurements. Our [verification protocol](/knowledge/solarient/consultant-verification-protocol) shows how we test competence against independent benchmarks rather than self-authored cases.

The ontology describes what exists. Whether it works is a separate question, and one we are still answering.

---

<small>[Back to home](/)</small>
