# .opencode

`.opencode` is a persistent, LLM-maintained knowledge base following the **LLM Wiki** pattern. 

Unlike traditional RAG (Retrieval-Augmented Generation) systems that rediscover information from raw documents for every query, `.opencode` uses an LLM to incrementally build and maintain a structured, interlinked collection of Markdown files. This creates a compounding artifact where knowledge accumulates, connections are reinforced, and synthesis evolves as new information is added.

## 🧠 The Core Concept

The fundamental idea is to move from **Retrieval** (finding chunks) to **Maintenance** (building a wiki). The LLM acts as a "programmer" for your knowledge, performing the tedious bookkeeping of summarizing, cross-referencing, and updating entities, while you act as the "curator," providing sources and asking profound questions.

## 🏗️ Architecture

The system operates across three distinct layers:

1.  **Raw Sources**: Immutable source documents (articles, papers, transcripts, etc.) that serve as the single source of truth.
2.  **The Wiki**: A directory of LLM-generated Markdown files (summaries, entity pages, concept pages, indices) that the LLM owns and maintains.
3.  **The Schema**: Configuration and rule files (like `claude.md` or `AGENTS.md`) that define the wiki's structure, conventions, and operational workflows.

## 🛠️ Operations

-   **Ingest**: When a new source is added, the LLM processes it, extracts key information, updates relevant wiki pages, and revises the index.
-   **Query**: Ask questions against the wiki. The LLM searches relevant pages and synthesizes answers, which can then be filed back into the wiki as new pages.
-   **Lint**: Periodically, the LLM performs a "health check" to identify contradictions, orphan pages, or gaps in the knowledge base.

## 📂 Key Files in this Repository

-   `llm-wiki.md`: The foundational manifesto and architectural blueprint for this pattern.
-   `claude.md`: Session memory and operational rules for the LLM agent.
-   `config.json`: Configuration for the `.opencode` environment.
-   `skills/`: Specialized instruction sets and workflows for the LLM.

## 🚀 Getting Started

To use this knowledge base, provide your LLM agent with access to this directory and instruct it to follow the patterns established in `llm-wiki.md`.
