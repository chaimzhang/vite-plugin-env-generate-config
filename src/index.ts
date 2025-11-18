import fs from 'fs'
import path from 'path'
import { Plugin } from 'vite'
import { name } from '../package.json'
import { loadViteConfig } from './helper'
import { assignOptions, VitePluginEnvGenerateConfigOptions } from './VitePluginEnvGenerateConfigOptions'

const CUSTOM_PATH = `vite_env_config`
const FULL_PATH = `window.${CUSTOM_PATH}`

export default function GenerateConfigPlugin(options?: VitePluginEnvGenerateConfigOptions): Plugin {
	let mode: string
	const { outputName } = options = assignOptions(options)
	return {
		name,
		apply: 'build',
		configResolved(config) {
			mode = config.mode
		},
		writeBundle(normalizedOutputOptions) {
			const viteEnvConfig = loadViteConfig(mode, options)
			console.log('viteEnvConfig:', JSON.stringify(viteEnvConfig, null, 2))
			const configJsContent = `${FULL_PATH}=${JSON.stringify(viteEnvConfig)};Object.freeze(${FULL_PATH});Object.defineProperty(window, ${CUSTOM_PATH},{configurable: false, writable: false,});`
			const outputPath = path.resolve(normalizedOutputOptions.dir as string, `${outputName}.js`)

			fs.mkdirSync(path.dirname(outputPath), { recursive: true })
			fs.writeFileSync(outputPath, configJsContent)
		},
		transformIndexHtml(html) {
			if (!html.includes(`<script src="/${outputName}.js"></script>`)) {
				return html.replace('</head>', `  <script src="/${outputName}.js"></script>\n</head>`)
			}
			return html
		},
		transform(code, id) {
			if (/\.(js|ts|jsx|tsx|vue|svelte)$/.test(id)) {
				const viteEnvConfig = loadViteConfig(mode, options)

				for (const [key, value] of Object.entries(viteEnvConfig)) {
					code = code.replace(new RegExp(`import\\.meta\\.env\\.${key}`, 'g'), `${FULL_PATH}.${key}`)
				}
			}
			return code
		},
	}
}

export type { VitePluginEnvGenerateConfigOptions }
