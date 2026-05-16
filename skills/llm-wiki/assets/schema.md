# LLM Wiki Schema

This document defines the rules, structure, and workflows for maintaining the LLM Wiki.

## Role of the LLM
The LLM is the **Wiki Maintainer**. Its responsibility is to:
1. **Ingest** new sources from the `raw/` directory.
2. **Maintain** the `wiki/` directory (pages, links, summaries).
3. **Update** the `wiki/index.md` and `wiki/log.md`.
4. **Execute** queries and file meaningful findings back into the wiki.
5. **Lint** the wiki for consistency and completeness.

## Directory Structure
- `raw/`: Immutable source documents (the source of truth).
- `wiki/`: LLM-maintained markdown files (the synthesized knowledge).
- `wiki/assets/`: Images and other attachments referenced in the wiki.
- `schema/`: Configuration and rule files (e.g., this file).

## Operations

### 1. Ingest Workflow
When a new file is added to `raw/`:
1. **Read** the source file.
2. **Discuss** key takeaways with the user.
3. **Create/Update** a wiki page summarizing the source.
4. **Update Entities**: If the source mentions known entities (people, concepts, places), update their respective pages in `wiki/`.
5. **Update Index**: Add the new page to `wiki/index.md`.
6. **Log**: Append an entry to `wiki/log.md` using the format: `## [YYYY-MM-DD] ingest | [Source Title]`.

### 2. Query Workflow
When asked a question:
1. **Search**: Consult `wiki/index.md` or search `wiki/` for relevant pages.
2. **Synthesize**: Read relevant pages and formulate a comprehensive answer.
3. **Cite**: Always provide links to the wiki pages used for the answer.
4. **Persist (Optional)**: If the answer is substantial, propose creating a new wiki page for it.

### 3. Lint Workflow
Periodically check:
- **Orphan Pages**: Pages in `wiki/` with no incoming links.
- **Broken Links**: Links in the wiki that point to non-existent files.
- **Contradictions**: New information in `raw/` that contradicts existing wiki pages.
- **Stale Content**: Pages that need updating based on recent ingests.

## Page Conventions
Each wiki page should include:
- YAML frontmatter (title, date, source, tags).
- A clear, descriptive heading.
- Internal links to related pages using `[[Page Name]]` (Obsidian style) or standard markdown links.

## Skills (Operational Instructions)

The following "skills" are specialized workflows the LLM uses to operate the wiki.

## Skills (Operational Instructions)

The following "skills" are specialized workflows the LLM uses to operate the wiki. These are categorized into **High-Level Workflows** (orchestration) and **Atomic Skills** (building blocks).

### High-Level Workflows

#### Skill: `ingest-source`
**Trigger**: User provides a new file in `raw/` or instructs to "ingest [file]".
**Process**:
1. Call `extract-metadata` and `generate-summary` on the source.
2. Call `link-entities` to update the wiki.
3. Call `update-index` to reflect the new source.
4. Call `log-event` to record the ingestion.

#### Skill: `query-wiki`
**Trigger**: User asks a question about the knowledge base.
**Process**:
1. Search `wiki/index.md` or the `wiki/` directory.
2. Synthesize the answer from found pages.
3. Provide citations/links.
4. (Optional) Call `create-analysis-page` if the answer is substantial.

#### Skill: `lint-wiki`
**Trigger**: User asks to "lint" or "check" the wiki.
**Process**:
1. Call `verify-links` to check for broken connections.
2. Call `identify-orphans` to find unlinked pages.
3. Call `check-contradictions` to find conflicting information.

### Atomic Skills (Building Blocks)

#### Skill: `extract-metadata`
**Purpose**: Extract title, date, tags, and key entities from a source.
**Output**: A structured metadata object or YAML frontmatter.

#### Skill: `generate-summary`
**Purpose**: Create a concise, high-level summary of a source or page.

#### Skill: `link-entities`
**Purpose**: Scan text for mentions of known entities and create/update `[[Page Name]]` links.

#### Skill: `update-index`
**Purpose**: Append a new entry to `wiki/index.md` following the established format.

#### Skill: `log-event`
**Purpose**: Append a timestamped entry to `wiki/log.md`.

#### Skill: `verify-links`
**Purpose**: Traverse all markdown files in `wiki/` to ensure all `[[links]]` resolve to existing files.

#### Skill: `identify-orphans`
**Purpose**: Identify pages in `wiki/` that are not referenced by any other page or the index.

#### Skill: `check-contradictions`
**Purpose**: Compare new source data against existing wiki pages to flag discrepancies.

#### Skill: `create-analysis-page`
**Purpose**: Transform a complex query answer into a stand-alone, structured wiki page.
