import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

export function loadViteConfig(mode: string): Record<string, string> {
	const baseEnvPath = path.resolve(process.cwd(), '.env')
	const modeEnvPath = path.resolve(process.cwd(), `.env.${mode}`)

	const baseEnvConfig = dotenv.parse(fs.readFileSync(baseEnvPath))
	const modeEnvConfig = dotenv.parse(fs.readFileSync(modeEnvPath))
	return Object.fromEntries(
		Object.entries({ ...baseEnvConfig, ...modeEnvConfig }).filter(([key]) => key.startsWith('VITE_')),
	)
}

