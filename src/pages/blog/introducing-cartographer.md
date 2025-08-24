---
layout: ../../layouts/Site.astro
title: Introducing Cartographer
description: Giving AI Coding Assistants a Map of Your Codebase
pubDate: 2025-08-24
---

# Introducing Cartographer: Giving AI Coding Assistants a Map of Your Codebase

AI coding assistants like Copilot, Claude Code, and Cursor have transformed the way we work. They autocomplete functions, explain APIs, and generate tests with ease. But if you’ve tried to use them on a **large codebase**—100,000+ lines of code, multi-module, multi-language—you’ve seen the cracks appear:

- They lose track of your code’s structure.
- They can’t fit enough into the context window.
- They make mistakes when reasoning across files.

The problem isn’t the models. It’s the **context**.

---

## The Context Problem

LLMs are brilliant pattern recognizers, but they’re blind without context. When you paste in a function, they can explain it. When you paste in a class, they can extend it. But entire repos? Forget it. Context windows are too small, too expensive, and too inefficient to cram everything in.

That’s why Cartographer exists.

---

## Meet Cartographer

Cartographer is a **semantic memory layer** for AI coding assistants. It builds and maintains a live map of your codebase:

- **Incremental summarization**: Instead of re-parsing everything, Cartographer updates what’s changed.
- **Cross-references**: Track where functions, classes, and modules are used.
- **Vector search**: Pull the _right_ context into the LLM, not just the nearest lines.
- **Language support**: Python first, JavaScript/TypeScript close behind, more on the roadmap.
- **Local-first**: Runs on your machine, can integrate with Ollama or cloud-based LLMs.

With Cartographer, your AI assistant doesn’t just see a file. It sees the whole system.

---

## Why Now?

Developer AI tools are exploding. Cursor, Copilot, Sourcegraph Cody, Zed — they’re racing to make coding with AI seamless. But all of them face the same barrier: **how to scale from file-level to repo-level understanding**.

Cartographer solves that barrier. It’s the missing piece.

---

## What You Can Do Today

Cartographer is open source and easy to try:

```bash
pip install carto
carto index .
```

That’s it. Your repo is mapped. From there, you can query, search, and feed better context to your AI coding tools.

We’re building toward **Cartographer Pro** with features like multi-repo indexing, team dashboards, and enterprise support. But the OSS core is ready now.

---

## The Road Ahead

This is just the beginning. Our roadmap includes:

- Multi-language support (Python, JS/TS, then beyond).
- Richer cross-references and dependency graphs.
- Seamless integration with Cursor, Claude Code, Copilot.
- Cloud sync for teams that want it.

If you’ve ever felt your coding assistant hit a wall, Cartographer is for you.

---

## Join Us

- ⭐ [Star us on GitHub](#)
- 📬 [Join the waitlist](#)
- 🐦 Follow progress on [X](#)

Cartographer gives your AI coding assistant a map of your codebase. So it can finally navigate, reason, and help you — at scale.
