---
title: Claude Session Memory
type: concept
created: 2026-05-16
updated: 2026-05-16
sources: []
tags: [memory, session-state, rules]
---

# Claude Session Memory

This file tracks important instructions and learned rules from previous sessions to maintain consistency.

## Core Rules

- **Skill Creation**: Every skill MUST be created or updated using the `skill-creator` skill to ensure it follows the correct structure (YAML frontmatter, instructions, etc.) and includes necessary evaluations.

## Session Logs

### 2026-05-16
- **Rule Added**: Every skill MUST use `skill-creator` to be created or updated. This was learned after a manually updated skill was found to be missing the required YAML frontmatter and optimized description.
