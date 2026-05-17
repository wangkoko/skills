---
name: git-commit
description: Use this skill whenever you want to commit changes to a Git repository using the Conventional Commits standard. This skill is particularly useful when you have untracked or unstaged files and want to group them into logical categories like feat, fix, docs, chore, refactor, test, or style to maintain a clean and structured commit history. Make sure to use this skill whenever you see changes in `git status` and want to organize them into professional, structured commits.
---

---
description: A skill for committing changes using the Conventional Commit standard, grouping files by category.
mode: skill
---

# git-commit

A skill for committing changes using the Conventional Commits standard, grouping files by category.

## Compatibility
- `bash`
- `git`

## Workflow

### Implement the Git Commit Workflow

When the user wants to commit changes:

1. **Identify Changes**: Run `git status -s` to see all untracked and unstaged files.
2. **Handle Sub-repositories**: If the changes are in a sub-repository (e.g., `.opencode/`), ensure you use the `workdir` parameter or `cd` into that directory before executing git commands.
3. **Classify Files**: Group the files into logical categories based on their purpose:
    - `feat`: New functionality.
    - `fix`: Bug fixes.
    - `docs`: Documentation changes.
    - `refactor`: Code refactoring.
    - `test`: Test additions or updates.
    - `chore`: Maintenance, dependencies, or build processes.
    - `style`: Formatting or white-space changes.
4. **Stage and Commit per Category**: For each category that has changes:
    - `git add <files>`
    - Draft a professional commit message using the detailed format:
      <type>(<scope>): <brief title>

      <description>

      <change rationale>

      <what have been tested>

      <sign>
    - Execute `git commit -m "<message>"`
5. **Verification**: Run `git status` to ensure no changes are left and the working tree is clean.
6. **Report Success**: Provide a summary of how many commits were created and their messages.

## Commit Message Format
**Template:**
<type>(<scope>): <brief title>

<description>

<change rationale>

<what have been/to be tested>

<sign>

**Examples:**
- `feat(auth): implement JWT-based authentication`
  
  Implement JWT-based authentication for the auth module.
  
  Added endpoints for login/logout and integrated with the user service.
  
  Tested with manual API calls and unit tests.
  
  [opencode-agent]

- `docs(readme): update installation instructions`

  Update the installation instructions in the README.
  
  Added steps for setting up environment variables.
  
  Verified the steps by following them in a new container.
  
  [opencode-agent]`
