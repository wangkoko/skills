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

- **Python Workflow**: When working with Python:
  1. Check if a `.venv` directory exists in the project root.
    2. If it exists, use it for all Python commands.
  3. If it does not exist, ask the user whether to create one in the project root or use a different path.
  4. Always use the active virtual environment for executing Python scripts and running `pip install`.

- **Git & Tool Usage**:
  - **Git-Commit Skill**: You are authorized to use the `git-commit` skill for any Git repository within the workspace, regardless of its location.
  - **Directory Context**: If the target repository is in a subdirectory (e.g., `./wiki`), you should first change the working directory using `cd <path>` (or use `workdir` in tools) so that the skill operates correctly within that repo's context.
  - **Direct Execution**: Do not restrict yourself to the current working directory only; prioritize using specialized tools (like `git-commit`) over raw `bash` whenever possible by managing the context.

## Session Logs
...

## Session Logs

### 2026-05-16
- **Rule Added**: Every skill MUST use `skill-creator` to be created or updated. This was learned after a manually updated skill was found to be missing the required YAML frontmatter and optimized description.
