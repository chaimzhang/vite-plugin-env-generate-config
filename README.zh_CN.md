# vite-plugin-env-generate-config

[![npm](https://img.shields.io/npm/dm/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)
[![NPM](https://img.shields.io/npm/l/vite-plugin-env-generate-config)](https://github.com/chaimzhang/vite-plugin-env-generate-config/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vite-plugin-env-generate-config)](https://www.npmjs.com/package/vite-plugin-env-generate-config)

简体中文 | [English](README.md)

## 简介

该插件用于在vite构建时将`.env`,`.env.[mode]`中环境变量(默认只包含`VITE_`开头的变量)提取到打包后的config.js中，
以支持在构建后修改变量。

## 安装

```bash
npm install vite-plugin-env-generate-config --save-dev
```

## 使用

在vite.config.ts中引入插件并配置：

```typoescript
import { defineConfig } from 'vite'
import envGenerateConfig from 'vite-plugin-env-generate-config'
export default defineConfig({
  plugins: [
    envGenerateConfig()
  ]
})
```
