import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { VitePluginEnvGenerateConfigOptions } from './VitePluginEnvGenerateConfigOptions'

export function loadViteConfig(mode: string, options: VitePluginEnvGenerateConfigOptions): Record<string, string> {
	const baseEnvPath = path.resolve(process.cwd(), '.env')
	const modeEnvPath = path.resolve(process.cwd(), `.env.${mode}`)

	const baseEnvConfig = dotenv.parse(fs.readFileSync(baseEnvPath))
	const modeEnvConfig = dotenv.parse(fs.readFileSync(modeEnvPath))
	const mergeObj = { ...baseEnvConfig, ...modeEnvConfig }


	if (options && options.includes && options.includes.length > 0) {
		const res: Record<string, string> = {}
		for (let key in mergeObj) {
			if (options.includes.some(rule => rule instanceof RegExp ? rule.test(key) : rule === key)) {
				res[key] = mergeObj[key]
			}
		}
		return res
	}
	return mergeObj
}
