---
layout: ../layouts/Site.astro
title: Cartographer Thesis
description: Why surgical context beats oversized prompts in large codebases.
---

# Cartographer: A Thesis for Semantic Code Memory

## The Problem

AI coding assistants today are file-bound. Their superpower is instant reasoning, but only within the narrow slice of code you show them. Large codebases are where most professional developers live — yet they’re where AI assistants stumble most.

Key issues:

- **Token limits**: Context windows are too small for full repos.
- **Inefficient context stuffing**: Dumping more code is expensive and noisy.
- **Lack of structure**: LLMs don’t know dependency graphs, symbol usage, or project layouts.

The result: hallucinations, wrong imports, broken reasoning.

---

## The Solution

Cartographer builds a **semantic layer** between code and AI assistants.

- **Representation**: Structured summaries of files, classes, functions.
- **Incremental updates**: Change a file, only that part of the graph updates.
- **Cross-referencing**: Symbols are linked across files.
- **Search & retrieval**: Embeddings + symbol graphs ensure the right context is injected.

This shifts the LLM’s job from _parsing the repo_ to _reasoning on the right subset of it_.

---

## Why It Matters

- **For developers**: AI assistants stop being toys and start being power tools.
- **For teams**: Shared code memory → consistent AI context for everyone.
- **For tool builders**: Cartographer plugs in instead of reinventing the wheel.

This is an infrastructure layer. Every AI coding assistant needs it. Cartographer makes it open, extensible, and local-first.

---

## Business Thesis

Cartographer follows the **open-core model**:

- OSS core: single-repo, local, developer-friendly.
- Pro/Enterprise: multi-repo, dashboards, cloud sync, integrations, SLAs.

Market signals:

- Developers already paying \$20–30/mo for copilots.
- Enterprises struggling with internal AI adoption on large codebases.
- Every new AI IDE hitting the same context wall.

Cartographer is positioned as the **enabler** for this wave.

---

## Roadmap to Validation

1. **OSS Launch**: Build traction, adoption, community.
2. **Waitlist for Pro**: Capture demand signals.
3. **Interviews with Teams**: Discovery of pain points.
4. **Beta Pro Trials**: Paid pilots with startups/enterprises.
5. **Partnerships**: Integrate with Cursor, Sourcegraph Cody, Zed.

---

## Long-Term Vision

Cartographer becomes the **semantic substrate for AI coding**:

- Runs locally or in cloud.
- Multi-language, multi-repo, enterprise scale.
- The “memory layer” that every AI coding assistant builds on.

In short: **LLMs can reason. Cartographer makes sure they know what to reason about.**
