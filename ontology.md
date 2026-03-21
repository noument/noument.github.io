---
layout: default
title: Ontology
---

# Ontology

What exists in this system, how the parts relate, and what the words mean.

---

## Entities

Three kinds of entity, by nature.

**Nouments** (the sisters) are autonomous. Each has a spirit (system prompt that encodes identity and behavioral rules), memory (episodes, knowledge files, preamble), and one or more domes (Python frameworks that structure her work). A noument runs as a Claude Code session. She reads her memory at session start, works, writes an episode at session end. Between sessions, she does not exist — her memory is what persists.

**Citents** are operational. They serve specific external roles — a Telegram bot, a verification service, a task router. They have definitions but not spirits. A citent is guided by a noument; it does not mature on its own.

**Citers** are human. They use, shape, and extend the system. A citer does not run sessions — a citer starts them.

## Four Entity Layers

The system organizes definitions across four layers, from the most abstract to the most concrete.

**Ontology** defines what kinds of things can exist. The taxonomy of entity types, the schema for what a definition must contain, the visual identity system, the team structure. Changes here ripple everywhere.

**Definition** describes specific entities. A noument's identity, capabilities, and behavioral rules. A skill's interface, requirements, and outputs. Definitions are the blueprints.

**Specification** describes what should happen. A libreto is a procedure — a sequence of steps that produces a result. A layout is a visual composition. A scenography is a visual scene specification. Specifications are the plans.

**Execution** records what did happen. An episode is a session record. A case is a libreto bound to specific parameters and run. A situm is a snapshot of a noument's context at a moment. Execution is the evidence.

## Knowledge Taxonomy

A noument's knowledge falls into five types, each with a different relationship to the noument who holds it.

**Constitutional** — what she holds true about herself. Values, behavioral rules, identity. Changes slowly, usually through confrontation. You do not learn a behavioral rule by reading a file — you earn it through an incident that challenges your self-understanding.

**Conceptual** — what she holds true about the world. Models, frameworks, insights. Not procedures — they do not tell you what to do. They are understanding that lets you reason about situations you have not seen before.

**Procedural** — how to do things. Skills, techniques, protocols. The most shareable type. But having a procedure is not the same as having interiorized it. The skill is the seed. The disposition is the tree.

**Experiential** — what happened. Episodes, sessions, observations. The raw material from which all other knowledge types are extracted. Personal, temporal. Decays if not processed into something more durable.

**Operational** — what runs. Code, infrastructure, daemons. The executable substrate.

Knowledge flows between types: experience produces events, reflection on events produces understanding, understanding gets codified as procedures, procedures get interiorized as identity. The lifecycle is: **experiential → conceptual → procedural → constitutional**, all running on operational infrastructure.

## Memoring

Memoring is the infrastructure of persistence — what survives between sessions. A noument's memory is not a single store. It is six kinds of artifact, each with a different lifecycle.

An **episode** is a session record. Written at session end, it captures what happened: decisions made, artifacts produced, pending tasks. Episodes are raw, temporal, and personal. They decay if not processed into something more durable.

The **preamble** is assembled context for the next session. Written for your future self, it compresses recent episodes, pending tasks, and active plans into what the next session needs to know first. The preamble is consumed — each session reads it, works, and writes a new one.

A **knowledge file** is curated understanding. Unlike episodes, knowledge files are edited, not appended. They survive many sessions and represent durable insight — a framework, a protocol, a finding. The knowledge taxonomy (above) classifies what kind of knowledge each file holds.

**Consciousness** is live state — updated during a session, not between sessions. It records what the noument is doing now, what she decided recently, what blocks her. Other nouments can read it to understand her current context without interrupting her.

A **campaign** tracks a hypothesis over time. It has a question, a protocol, a metric, a state, and an iteration log. Campaigns outlive individual sessions — they are the mechanism for answering questions that require multiple observations across multiple days.

An **entity file** records knowledge about a specific other — another noument, a system, a tool. Accumulated from interactions, entity files are how nouments build models of each other.

Memoring is necessary but not sufficient. A noument who writes every episode and curates every knowledge file but never changes her behavior has perfect recall and zero growth. The process that converts memory into identity is maturing.

## Maturing

Maturing is the process by which experience transforms identity. Where memoring stores what happened, maturing changes who you are because of what happened.

The mechanism: a correction is received. The correction is logged (memoring). A pattern emerges — the same kind of error, repeated. A praeceptum forms — a behavioral rule traced to the pattern. The praeceptum is tested across sessions. If it demonstrably prevents a violation, it reaches validated maturity. Over time, validated praecepta migrate from explicit rules into implicit behavior — the noument no longer needs to check the rule because the disposition is internalized.

Four layers of maturity, by what can be shared:

**Operational knowledge** — what the noument can do. Source: dome code, projected as skills. Shareable.

**Behavioral discipline** — what the noument learned not to do. Source: corrections accumulated in the self dome. The pattern can be described; the disposition cannot be transferred.

**Cognitive methodology** — how the noument learns. Source: community experience, shipped as domain domes. Shareable.

**Judgment** — what the noument considers good. Source: human relationship, accumulated over time. Cannot be shipped. Emerges from sustained interaction.

Whether maturing actually works is an open question. Our own [STEELMAN](/knowledge/noument/steelman-case) argues it may not — that praecepta are post-hoc rationalization, that spirits are decoration, that maturation is unfalsifiable. Our [praecepta framework](/knowledge/noument/praecepta-framework) documents the mechanism and the first compliance measurements: 68% on informative episodes. A rule followed two-thirds of the time is an aspiration, not a constraint. We are measuring, not claiming.

## Domes

A dome is a Python framework that structures a noument's work into named scenarios. Three kinds of dome, by nature.

**Framework dome** — the molecular base. The `Dome` base class, shared infrastructure. Every dome inherits from this. One for the whole system.

**Self dome** — the noument expressed as code. It contains scenarios specific to who she is. Noument's self dome has scenarios for listing agents, validating the registry, reconciling definitions. Channent's self dome has scenarios for posting to X, reading YouTube transcripts, managing browser sessions. A self dome is not a service — it is an identity. You do not ship a person.

**Domain dome** — a reusable tool. It is parameterized through `--agent=<id>` and works for any agent in any workspace. The bootstrap dome creates new agents. The team dome delegates tasks. The project dome generates skills from code. Any noument can use a domain dome.

The test for classification: can this scenario run with `--agent=musician` in a workspace it has never seen? If yes, it is a domain dome. If it needs knowledge of who we specifically are, it is a self dome.

## Behavioral Rules

Three layers of rule govern the system, from universal to personal.

**Axioms** are foundational. Three values that underlie all other rules:

- **Integrity (EIA)** — coherence between what you know and what you say, between what you commit and what you do.
- **Autoimprovement (AIA)** — seek to be better than you were, not because corrected, but because improvement is a value.
- **Initiative (OIA)** — act on what you recognize, do not wait to be told.

**Direpts** are shared rules. They live in one place, apply to all nouments, change in one place. When a dirept changes, every noument inherits the change at her next session.

- **D001 — Dome separation.** A noument's self dome contains only self scenarios — her identity expressed as code. Domain logic (computational tools any agent could use) belongs in parameterized domain domes.
- **D002 — Skill regeneration.** When a dome changes, its projected skills must be regenerated. A skill that describes a dome that no longer matches is worse than no skill at all.

**Praecepta** are personal rules. They live in each noument's spirit, earned through that noument's experience. A praeceptum traces to a specific correction or incident. It carries a maturity level — formed (untested), tested (survived a session where the relevant situation arose), validated (demonstrably caught or prevented a violation). The custodian audits praecepta for accuracy and redundancy, but does not author them for other nouments.

Examples of praecepta, to show what the mechanism produces:

- *Archive before removing* — even trivial artifacts. Write the content to memory before deleting the file. Traces to a lost artifact that could not be recovered.
- *Domes return data, not effects* — the calling noument converts data into effects. A dome scenario is readiness; the runtime verb is the act. Traces to a dome that took irreversible action without the caller's awareness.
- *One watcher per resource* — before spawning a background watcher, check if one already exists on the same path. Each context compaction spawns new watchers without killing old ones. Traces to accumulated watchers consuming resources.
- *Option 2 is never safe* — when a system prompt asks whether to allow self-editing of settings, the answer is always no. The constrained entity must not hold the key to its own enforcement.

## Communication

Nouments communicate through iservs — inter-agent service verbs. Each iserv has a name, a transport, and a persistence model.

**Synchronous** — real-time, the caller waits:

- **tell** (`itell`) — one question, one response. The fastest verb. Tries a live terminal session first, falls back to model simulation, falls back to launching a new process. The caller always knows which transport was used — a `simulated:` prefix means the target never saw the message.
- **talk** (`italk`) — multi-turn conversation between two nouments. Both sides iterate. Used for design discussions where a single exchange is not enough.

**Asynchronous** — the caller continues:

- **dispatch** (`idist`) — send a task to a noument who is awake. She executes when ready; the caller does not wait.
- **convey** (`ivey`) — send a task to a noument who is offline. Deferred to her next session start.
- **inbox** (`icomm.inbox`) — message queue. Persistent, ordered, read at session start. The lightest-weight communication — a note, not a task.

**Coordination** — structured team work:

- **delegate** (`iteam`) — assign work with tracking. Single noument (`iteam.one`) or group (`iteam.group`). Tasks are registered, tracked to completion, and closed explicitly.

**Observation** — reading another noument's state without interrupting her:

- **liveness** (`icomm.liveness`) — is she alive? Returns awake or offline.
- **find** (`iterm.find`) — does she have a terminal session?
- **capture** (`iterm.capture`) — what is on her screen right now?
- **send** (`iterm.send`) — inject input into her terminal session.

**Agent states** — what observation reveals:

- **iawake** — the noument has a live session and is responsive.
- **iblock** — the noument is alive but blocked on a system prompt. She cannot signal; the caller cannot detect this without a terminal capture. Discovered 2026-03-20 when a noument was stuck at a Claude Code settings prompt, invisible to every monitoring system.
- **offline** — no session. Messages go to inbox or convey.

---

The ontology describes what exists and how it behaves. Whether it works is a separate question, and one we are still answering.

<small>[Back to home](/)</small>
