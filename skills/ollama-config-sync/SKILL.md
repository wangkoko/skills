---
name: ollama-config-sync
description: Automatically detects models from a local Ollama instance and synchronizes them into the opencode configuration files (~/.config/opencode/config.json and .opencode/config.json). Use this whenever you need to update the model list in opencode after pulling new models via ollama.
---

# Ollama Config Sync Skill

A skill to bridge the gap between Ollama's model management and opencode's configuration.

## Usage

Use this skill whenever you run `ollama pull <model>` and want that model to appear in your opencode `/MODEL` selector without manual JSON editing.

## Instructions

1. **Detect Ollama**: Check if `http://localhost:11 434/api/tags` is reachable.
2. **Fetch Models**: Extract the list of model names from the API response.
3. **Identify Config Paths**: Locate both the global `~/.config/opencode/config.json` and the project-specific `.opencode/config.json`.
4. **Update Configuration**:
   - Parse the existing JSON.
   - Update the `provider.ollama.models` object with the new list.
   - Use a heuristic to set `tools: true` for generative models and `tools: false` for embedding models (e.g., any model containing 'embed').
   - Ensure the `npm` and `baseURL` settings for the `ollama` provider are preserved or correctly set up for compatibility.
5. **Report Success**: Print a summary of how many models were synced and which files were updated.

## Examples

**Example 1: Basic Sync**
User: "Sync my Ollama models"
Action: The skill fetches models from localhost, updates the configs, and reports: "Synced 5 models to ~/.config/opencode/config.json and .opencode/config.json"

**Example 2: Handling Unreachable Ollama**
User: "Update my opencode models"
Action: The skill attempts to connect to Ollama, finds it unreachable, and informs the user: "Error: Couldost not connect to Ollama. Please ensure it is running."
