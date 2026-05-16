---
name: git-commit
description: Use this skill whenever you want to commit changes to a Git repository using the Conventional Commits standard. This skill is particularly useful when you have untracked or unstaged files and want to group them into logical categories like feat, fix, docs, chore, refactor, test, or style to maintain a clean and structured commit history. Make sure to use this skill whenever you see changes in `git status` and want to organize them into professional, structured commits.
---

# git-commit

A skill for committing changes using the Conventional Commits standard, grouping files by category.

## Compatibility
- `bash`
- `git`

## Workflow

### Implement the Git Commit Workflow

When the user wants to commit changes:

1. **Identify Changes**: Run `git status -s` to see all untogthered and unstaged files.
2. **Classify Files**: Group the files into logical categories based on their purpose:
    - `feat`: New functionality.
    - `fix`: Bug fixes.
    - `docs`: Documentation changes.
    - `refactor`: Code refactoring.
    - `test`: Test additions or updates.
    - `chore`: Maintenance, dependencies, or build processes.
    - `style`: Formatting or white-space changes.
3. **Stage and Commit per Category**: For each category that has changes:
    - `git add <files>`
    - Draft a professional commit message: `<type>(<scope>): <description>`
    - Execute `git commit -m "<message>"`
4. **Verification**: Run `git status` to ensure no changes are left.
5. **Report Success**: Provide a summary of how many commits were created and their messages.

## Commit Message Format
**Template:** `<type>(<scope>): <description>`

**Examples:**
- `feat(auth): implement JWT-based authentication`
- `docs(readme): update installation instructions`
