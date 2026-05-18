#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OLLAMA_API = 'http://localhost:11434/api/tags';
const GLOBAL_CONFIG = path.join(process.env.HOME, '.config/opencode/config.json');
const LOCAL_CONFIG = path.join(process.cwd(), '.opencode/config.json');

async function run(targetLocalConfig) {
  console.log('🚀 Starting Ollama Config Sync Skill...');

  let models = [];

  try {
    console.log(`🔍 Fetching models from ${OLLAMA_API}...`);
    const response = execSync(`curl -s ${OLLAMA_API}`).toString();
    const data = JSON.parse(response);
    models = data.models.map(m => ({
      name: m.name,
      tools: !m.name.includes('embed')
    }));
    console.log(`✅ Found ${models.length} models.`);
  } catch (error) {
    console.error('❌ Error: Could not connect to Ollama. Is it running?');
    process.exit(1);
  }

  const newProviderConfig = {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {}
    }
  };

  models.forEach(m => {
    newProviderConfig.ollama.models[m.name] = {
      "tools": m.tools
    };
  });

  // We define the paths to update. The skill runner will provide the local path context.
  const pathsToUpdate = [GLOBAL_CONFIG, targetLocalConfig].filter(p => p !== undefined);

  for (const configPath of pathsToUpdate) {
    try {
      let currentConfig = { provider: {} };

      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, 'utf8');
        currentConfig = JSON.parse(fileContent);
        console.log(`📖 Reading existing config: ${configPath}`);
      } else {
        console.log(`🆕 Creating new config path: ${configPath}`);
        fs.mkdirSync(path.dirname(configPath), { recursive: true });
      }

      currentConfig.provider = {
        ...currentConfig.provider,
        "ollama": newProviderConfig.ollama
      };

      if (!currentConfig.$schema) {
        currentConfig.$schema = "https://opencode.ai/config.json";
      }

      fs.writeFileSync(configPath, JSON.stringify(currentConfig, null, 2));
      console.log(`✨ Successfully updated: ${configPath}`);
    } catch (error) {
      console.error(`⚠️ Failed to update ${configPath}: ${error.pass_error || error.message}`);
    }
  }

  console.log('🎉 All tasks completed!');
}

// In a real skill run, the context would pass the project-local .opencode path.
// For this implementation, we'll look for it in the current working directory.
const possibleLocal = path.join(process.cwd(), '.opencode/config.json');
const localPath = fs.existsSync(possibleLocal) ? possibleLocal : undefined;

run(localPath);
