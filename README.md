# vite-plugin-env-generate-config

## Introduction

This plugin is used to extract environment variables from `.env` and `.env.[mode]` into a packaged config.js during Vite
build, to support dynamically modifying and loading environment variables at runtime.

## Installation

```bash
npm install vite-plugin-env-generate-config --save-dev
```

## Usage

Import the plugin and configure it in vite.config.ts:

```typoescript
import { defineConfig } from 'vite'
import envGenerateConfig from 'vite-plugin-env-generate-config'
export default defineConfig({
  plugins: [
    envGenerateConfig()
  ]
})
```
