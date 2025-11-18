# vite-plugin-env-generate-config

[![npm](https://img.shields.io/npm/dm/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)
[![NPM](https://img.shields.io/npm/l/vite-plugin-env-generate-config)](https://github.com/chaimzhang/vite-plugin-env-generate-config/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)

English | [简体中文](README.zh_CN.md)
## Introduction

This plugin extracts environment variables from `env` and `env.[mode]` (defaulting to only variables starting with
`VITE_`) into the packaged config.js during vite build, enabling post-build variable modifications.

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
