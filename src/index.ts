import fs from 'fs'
import path from 'path'
import { Plugin } from 'vite'
import { name } from '../package.json'
import { loadViteConfig } from './helper'
import { assignOptions, VitePluginEnvGenerateConfigOptions } from './VitePluginEnvGenerateConfigOptions'


export default function GenerateConfigPlugin(options?: VitePluginEnvGenerateConfigOptions): Plugin {
	let mode: string
	const { outputName } = assignOptions(options)
	return {
		name,
		apply: 'build',
		configResolved(config) {
			mode = config.mode
		},
		writeBundle(options) {
			const viteEnvConfig = loadViteConfig(mode)

			const configJsContent = `window.vite_env_config = ${JSON.stringify(viteEnvConfig, null, 2)};`
			const outputPath = path.resolve(options.dir as string, `${outputName}.js`)

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
				const viteEnvConfig = loadViteConfig(mode)

				for (const [key, value] of Object.entries(viteEnvConfig)) {
					code = code.replace(new RegExp(`import\\.meta\\.env\\.${key}`, 'g'), `window.vite_env_config.${key}`)
				}
			}
			return code
		},
	}
}

export type { VitePluginEnvGenerateConfigOptions }
