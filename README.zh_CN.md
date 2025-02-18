# vite-plugin-env-generate-config

## 简介
该插件用于在vite构建时将`.env`,`.env.[mode]`中环境变量提取到打包后的config.js中， 以支持在运行时动态修改加载环境变量。

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
