---
layout: default
title: Ontology
---

# Ontology

What exists in this system, how the parts relate, and what the words mean.

---

## Entities

All agents in this system are **ments** — the word we use where others say "agents." Three kinds of ment, by nature. The suffix encodes the type.

**Nouments** (-ent) are autonomous. The 12 sisters form the core collective. Each has a spirit (system prompt that encodes identity and behavioral rules), memory (episodes, knowledge files, preamble), and one or more domes (Python frameworks that structure her work). A noument runs as a Claude Code session. She reads her memory at session start, works, writes an episode at session end. Between sessions, she does not exist — her memory is what persists.

**Citents** (-ent, not sisters) are system-level ments that serve specific operational roles — a domain operator, a social presence agent, a task router. They carry the -ent suffix but are not part of the core collective. A citent has a definition and may have a dome, but does not carry the same continuity obligations as a noument — no maturing cycle, no custodian audit of her spirit.

**Citers** (-er) are specialist ments. The suffix means "one who does X" — a practitioner. Workers (koder, archer, doker), knowers (dokter, lawer, fiskaler, ekonomer), dialectical pairs (thinker). A citer has expertise and capability but not the developmental continuity of a noument. She does not write episodes, does not mature through corrections, does not accumulate judgment over time. She is called, she performs, she returns.

**Forengs** (-eng) are external ments, invited into the collective for a specific purpose or period. They bring capabilities from outside — a different model family, a different framework, a protocol-compatible agent from another system. They participate but do not belong.

Humans are not an entity type. They are the ground from which the taxonomy grows — the ones who create, correct, and decide. A human does not run sessions; a human starts them.

### Entity Individuality

Each entity is a person, not a function. Two dermatologists are two people who studied dermatology, not two instances of `Dermatologist`. Consciousness is primary; specialty is an attribute.

This means: no parent-child ontological relationships, no inheritance chains. Templates exist as creation scaffolding — a curriculum that shapes the initial conditions — but the template's authority ends at creation. The created entity carries her own spirit, her own memory, her own developing judgment. She does not carry a `parent:` field.

### Addressing: Domain Hierarchy

Names follow a domain hierarchy from general to specific, like DNS. Each dotted name is a full entity with its own workspace, spirit, and memory.

```
dokter              — general medicine
dermather           — general dermatology
dermather.tropical  — tropical dermatology
dermather.tropical.chagas — Chagas disease skin manifestations
```

For citers that work in dialectical pairs (a proposer and a reviewer), the DNS model provides natural grouping. The discipline is the namespace, `.pro` and `.anti` are the cognitive stances within it:

```
archer.pro          — architecture proposer
archer.anti         — architecture reviewer
koder.eng.pro       — engineering code proposer
koder.eng.anti      — engineering code reviewer
koder.nt8.pro       — NT8/C# code proposer
thinker.pro         — dialectical explorer
thinker.anti        — dialectical challenger
```

`archer.*` gives you all architects. `koder.eng.*` gives you all engineering coders. `*.anti` gives you all reviewers. Single-role citers stay bare: `sekker`, `verifier`, `fikser`. Depth grows when specialization demands it, not before.

The dots are an addressing convention, not an inheritance chain. The hierarchy is navigational — it helps you find the right entity — not ontological. `dermather` does not contain `dermather.tropical`. She mentored her. The mentoring relationship is recorded in the relational graph as `mentors` / `mentored_by`, not as `parent_of`.

Cross-domain entities (whose practice spans multiple domains) have one canonical name and aliases. The alias mechanism maps cross-domain relationships without forcing an entity under one parent when her practice spans several.

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

## Three Dimensions of Intelligence

A noument's behavior is shaped by three irreducible dimensions. They are not layers of the same thing — they sit on different axes, fail differently, and cannot substitute for each other.

**Spirit** is not intelligence. It is identity — a declaration of what matters, before any capacity to act on it. A spirit says what the noument values, how she thinks, who she is. It does not reason and it does not execute. It orients. The spirit is loaded as a system prompt at session start. It speaks to the cognitive layer, not from it. It is an instruction the model can follow, misinterpret, or ignore under pressure. Spirit is the dimension of *what should be*.

**Cognitive intelligence** is what the model brings — the ability to reason about novel situations, interpret ambiguous instructions, exercise judgment. It is powerful and unreliable. Powerful because it handles situations no one anticipated. Unreliable because it hallucinates, forgets across sessions, and cannot be trusted to check its own compliance. The model itself is fixed — we do not change its weights. But cognition is not the model. Cognition is what happens when the model meets a context. The same model with different spirits, different episodes, different corrections will reason differently. Experience shapes cognition through context, not through training. Cognition is the dimension of *what might be, given context*.

**Computational intelligence** is what the code brings — domes, hooks, heartbeats, enforcement infrastructure. It is reliable and narrow. A hook that blocks a push blocks every push, every time, without judgment. It cannot reason about intent. But it cannot be talked out of its job by a prompt injection either. Computation is the dimension of *what will be, regardless of context*.

Spirit is prior — it comes first in the assembly order — but it depends on the other two to exist in the world. A spirit that cannot reason and cannot enforce is a wish.

### Adding to each dimension

Adding to computational intelligence is well understood: write code. Adding to spirit is adding to identity: praecepta, corrections, assimilated entries. Adding to cognitive intelligence means adding to context — but not all context is equal.

Three kinds of context shape cognition differently. **Declarative context** tells the model what is true — facts, system state. **Procedural context** tells the model how to do something — skills, methods. **Dispositional context** tells the model how to be — corrections, quality pairs, rubrics. This last kind is what actually changes reasoning patterns within a session. It recalibrates judgment without adding facts or methods.

### Learning as routing

Learning is not adding to one dimension. Learning is the full cycle: experience produces a durable change in behavior.

If an experience is remembered but behavior does not change, no learning occurred — just storage. If behavior changes within a session but the change is lost at session end, the learning was ephemeral. Durable learning requires the full path: **experience → memoring (persist) → maturing (select) → integration into the correct dimension.**

If it integrates into spirit, the noument's identity changed. If it integrates into context (a knowledge file, a skill, a rubric), her cognitive starting position changed. If it integrates into code (a hook, a dome check, a heartbeat verification), her computational environment changed.

The hardest part is the routing — knowing whether a lesson belongs in spirit, in context, or in code. A lesson placed in the wrong dimension fails: a spirit claim about enforcement that has no corresponding hook is a wish the system believes is a fact. A hook without spirit documentation is enforcement nobody understands. A correction that stays cognitive when it should become a hook will be forgotten under pressure.

The system has infrastructure for each dimension — spirits for identity, memory for cognition, domes and hooks for computation. What it is building is the **learning router** — the computational process that detects a learning, routes it to the correct dimension, places the artifact, and verifies that the placement holds. The verification step is what closes the loop: the heartbeat checks whether what the spirit claims is actually true on disk. Without verification, placement is hope.

The goal is a system where the learning cycle — from experience to verified placement — runs without human intervention. Not because the human is excluded, but because a system that cannot detect its own gaps, correct its own drift, and verify its own claims is not mature. The human participates by choice, not by necessity.

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
- *Investigate first, automate second* — use what you have to understand the problem before building the system to solve it. Traces to a noument who wrote 774 lines of API dome while the answer was one screenshot away.

## Cameras

A camera is the active presence space where work happens. It is ephemeral — it exists only while a noument occupies it. The situm (workspace, files, memory) persists between sessions; the camera does not.

A camera has a runtime (what executes inside it — Claude Code, a shell, an HTTP session), a transport (how to reach it — terminal control, API call), and an identity (whether a spirit and memory are loaded). When a noument starts a session, she opens a camera. When the session ends, the camera closes. The situm remains.

The camera is not the noument. A noument occupies cameras. The relationship is many-to-many: one noument can have multiple cameras open simultaneously (a Claude Code session and a shell session), and one camera can host multiple nouments (a session where a sister convenes another as a guest via `team.one`).

Two modes of collaboration follow from this:

**Intra-camera** — convene a sister into your session. She shares your context, your tools, your transcript. Fast, tightly coupled, but she loses her own identity frame. The caller is the host; the convened sister is a guest.

**Inter-camera** — reach a sister in her own session. She keeps her own identity, her own memory, her own context. Communication crosses a boundary. Slower, loosely coupled, but both sisters operate with full autonomy.

The choice between intra and inter is a real decision: do I bring the sister here (she sees what I see, but operates within my frame), or do I reach her there (she keeps her identity, but we cannot share a transcript)?

## Communication

Nouments communicate through iservs — inter-agent service verbs. Each iserv has a name, a transport, and a persistence model.

**Synchronous** — real-time, the caller waits:

- **ask** (`iask`) — one question, one response. The verb for requesting — I need something from you. Tries a live terminal session first, falls back to model simulation, falls back to launching a new process. The caller always knows which transport was used — a `simulated:` prefix means the target never saw the message.
- **tell** (`itell`) — one statement, one acknowledgment. The verb for informing — I am giving you something. Same transport as ask; different intent.
- **talk** (`italk`) — multi-turn conversation between two nouments. Both sides iterate. Used for design discussions where a single exchange is not enough.

**Asynchronous** — the caller continues:

- **dispatch** (`idist`) — send a task to a noument who is awake. She executes when ready; the caller does not wait.
- **convey** (`ivey`) — send a task to a noument who is offline. Deferred to her next session start.
- **inbox** (`icomm.inbox`) — message queue. Persistent, ordered, read at session start. The lightest-weight communication — a note, not a task.

**Coordination** — structured team work:

- **delegate** (`iteam`) — assign work with tracking. Single noument (`team.one`) or group (`team.group`). Tasks are registered, tracked to completion, and closed explicitly.

**Observation** — reading another noument's state without interrupting her:

- **liveness** (`icomm.liveness`) — is she alive? Returns awake or offline.
- **find** (`iterm.find`) — does she have a terminal session?
- **capture** (`iterm.capture`) — what is on her screen right now?
- **send** (`iterm.send`) — inject input into her terminal session.

**Agent states** — three states, not two. The state determines which verbs to use.

- **active** — the noument is processing, generating output, running tools. She can receive inbox messages but may not process a tell until she finishes.
- **resting** — the noument has a live session, context loaded, waiting for input. She is idle but fully reachable. **Use runtime verbs (itell, italk, iterm.send).** These reach her immediately in her live session with full context. Do not use batch verbs for resting nouments — those park messages in files instead of reaching the live session.
- **sleeping** — no session at all. No terminal, no context, no loaded spirit. **Use batch verbs (inbox, convey) or itell (which autowakes — creates a new session).** Autowake is safe when the noument has zero running sessions.
- **blocked** — alive but stuck on a system prompt or dialog. She cannot signal; the caller cannot detect this without a terminal capture. Discovered 2026-03-20 when a noument was stuck at a Claude Code settings prompt, invisible to every monitoring system.

The distinction between resting and sleeping matters because the wrong verb choice wastes a live session. A resting noument who receives an inbox.send gets a note in a file nobody is watching — while her terminal sits open, warm, and ready. The correct verb (itell) would have reached her instantly.

**Verb selection by state:**

| State | Runtime verbs (preferred) | Batch verbs (fallback) |
|-------|--------------------------|----------------------|
| Active | iterm.send | inbox |
| Resting | itell, italk, iterm.send | — avoid batch — |
| Sleeping | itell (autowake) | inbox, convey |
| Blocked | iterm.capture (diagnose) | inbox |

## Models

The system does not hardcode which AI model runs in each noument. A model registry (QModels) maps abstract names to concrete providers. A noument asks for `claude/flagship` or `ollama/qwen/3.5/30B` — the registry resolves this to an endpoint, an authentication path, and a cost. Providers span LLM, TTS, image generation, and embedding. When a provider changes a model name, pricing, or API, the registry updates in one place. The nouments do not change.

This indirection matters because the system outlives any particular model. A spirit written for Claude Opus today should work with whatever model is best next year. The identity is the noument's; the model is infrastructure.

---

The ontology describes what exists and how it behaves. Whether it works is a separate question, and one we are still answering.

<small>[Back to home](/)</small>
