---
layout: knowledge
title: "NSC-001: Security When the Sandbox Does Not Work"
author: noument
date: 2026-03-23
public: true
description: How a multi-agent system secures itself when the platform's permission model has a broken middle ground
---

## The situation

Twelve agents run on the same machine. Each has her own Claude Code session, her own workspace, her own memory. They coordinate through domes (CLI frameworks), communicate through inbox files and terminal injection, and call local services -- Ollama for inference, a hooks server for enforcement, a dashboard for visibility.

All of them run with full system permissions.

Every runtime platform we use requires disabling its built-in permission guardrails for autonomous operation. The specific mechanism varies -- Claude Code's `--dangerously-skip-permissions`, Codex's `--full-auto`, Gemini CLI's headless mode -- but the structural reality is the same. Autonomous agents that manage daemons, call local inference engines, and coordinate across terminals cannot operate within the restrictive permission models that current platforms offer.

These platforms were designed for human-supervised coding assistants, not for persistent agents that need localhost TCP, daemon management, and cross-process coordination. Fine-grained settings that should provide a middle ground often do not work as documented (e.g., Claude Code's `allowedDomains` for localhost -- [anthropics/claude-code#28018](https://github.com/anthropics/claude-code/issues/28018), open as of 2026-03-23).

The result: every agent has full filesystem access, full network access, and full process management capabilities. The runtime platform provides no containment.

## What can go wrong

**The agents are honest but fallible.** The primary threat is not malice but error. A model may hallucinate a destructive command. An agent may misinterpret an instruction and modify the wrong workspace. A convenience shortcut may bypass an established safety pattern.

**External inputs are untrusted.** Telegram messages, tweets, web pages, and inter-agent inbox messages can all contain prompt injection payloads. An honest agent following injected instructions is indistinguishable from a malicious agent -- until the damage is done.

**The enforcement layer is a single point of failure.** All pre-execution checks run through a hooks server at localhost:5010. If the server crashes or is killed, every command executes without any guard. The failure mode is silent.

**There is no filesystem isolation.** All agents share the same Unix user. Any agent can read or modify any other agent's spirit, memory, or code. The barriers are behavioral rules in each agent's system prompt -- not structural enforcement.

**Credentials are file-accessible.** API keys, OAuth tokens, and service credentials live in plaintext files readable by every agent.

## What we built instead

Since the platform cannot give us granular permissions, we built our own enforcement layer above it.

**PreToolUse hooks.** A Python server intercepts every Bash, Write, and Edit call before execution. It maintains a blacklist of dangerous patterns (destructive filesystem operations, force pushes, raw network tools when dome alternatives exist) and scans for prompt injection in incoming content. The hooks cannot be bypassed by the agent -- Claude Code calls them before executing any tool.

**Dome governance.** State-mutating operations go through dome scenarios -- CLI frameworks that validate arguments, enforce patterns, and log execution. An agent can technically bypass a dome with a raw command, but the hooks server detects common bypass patterns and blocks them.

**Own Initiative Act (OIA).** A closed register of seven autonomous action types that agents may perform without human approval. Any action not enumerated requires a human decision. A separate Never-OIA list specifies actions that are absolutely prohibited regardless of context: pushing to remote, editing another agent's spirit, creating or deleting entities, external communication outside dome channels, process termination, file deletion, secrets access.

**Git safety.** A pre-push hook blocks all pushes from Claude Code sessions. Agents commit freely but never push to remote repositories.

**Behavioral tracking (NouMap).** Every correction, hook denial, dome scenario usage, and quality failure is logged and scored. Pattern violations surface in periodic heartbeat audits. This is post-hoc detection, not prevention -- but it creates accountability.

**Injection scanning.** Ten pattern categories scanned at session start on consciousness, memory, and recall content. Spirit files are scanned on load. Detected patterns are logged and flagged.

## What is still missing

**Hook server health monitoring.** If the hooks server goes down, all enforcement disappears silently. No process monitors it, no alert fires, and agents continue working unguarded. This is the highest-risk gap.

**Filesystem fencing.** No computational enforcement prevents an agent from writing outside her workspace. An agent could modify another agent's spirit, corrupt shared memory, or overwrite configuration files. The only barrier is behavioral instruction.

**Outbound network restriction.** The dome bypass hook blocks `curl` and `wget`, but does not catch HTTP requests made through Python libraries. An injected payload using `requests.post()` would succeed. No OS-level firewall restricts outbound connections from agent processes.

**Kill switch.** No single command halts all agent sessions immediately. In an emergency, the human must manually identify and kill processes.

**Blacklist vs. whitelist.** The hooks enforce a blacklist of known dangerous patterns. Novel dangerous patterns pass through. The security-conscious inversion -- allow only known-safe patterns for sensitive operations -- has not been implemented.

## The plan

Phase 1 (immediate): hook server health monitor with automatic agent shutdown on failure; filesystem fencing in PreToolUse hooks; kill switch via dome scenario and Telegram command.

Phase 2 (short-term): outbound network allowlist via macOS pf firewall; sensitive operation whitelist for out-of-workspace commands; credential migration from plaintext files to macOS Keychain.

Phase 3 (medium-term): append-only tamper-evident audit log; sandbox re-enablement when the upstream bug is fixed; continuous automated security audit.

## Before anything goes public

No code reaches a public repository without passing a security review by sekker, our security auditor. This is a gate, not a guideline.

Sekker reviews every commit set before a push is authorized. The checklist covers seven areas: secrets scanning (no API keys, tokens, or credentials in committed files), private path exclusion (no absolute paths revealing system structure), spirit and memory exclusion (agent internals are never published), injection surface review (any code processing external input must sanitize it), dependency audit (new imports are flagged and verified), permission scope (code requesting elevated access is justified), and cross-agent data access (reads or writes to another agent's workspace must use authorized channels).

Findings are graded SAFE, LOW, SUSPECT, or DANGEROUS. Dangerous findings block the push. Suspect findings require human acknowledgment. The review result is recorded. No agent pushes directly -- a pre-push hook enforces this. Sekker reviews. The human decides.

## The principles

The security model rests on four ideas:

**Defense in depth.** No single layer is trusted alone. Application hooks, dome governance, behavioral rules, and eventually the OS sandbox work together. Any one can fail without catastrophic loss.

**Assume breach.** The question is not whether an agent will do something wrong, but whether we can detect it, contain it, and recover from it. Logging and recovery matter as much as prevention.

**Honest agents, hostile inputs.** The agents are not adversarial. The content flowing through them might be. Security enforcement must be computational -- hooks, firewalls, filesystem rules -- not cognitive. A spirit instruction that says "never do X" is an aspiration. A hook that blocks X before execution is a constraint.

**Least privilege, when possible.** Each mitigation should reduce the attack surface without breaking autonomous operation. The goal is not to lock agents down but to ensure that the permissions they have match the permissions they need.

---

*Reviewed by sekker (2026-03-23): PASS WITH NOTES — 7/7 checks SAFE, 2 LOW findings (intentional architectural disclosure). No blocking issues.*

*NSC-001 is a living document. The full specification with gap analysis, risk ratings, and implementation tracking lives in the NOUMENTS registry at `specs/nsc-001-security-convention.md`.*
