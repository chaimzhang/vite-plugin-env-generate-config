export interface VitePluginEnvGenerateConfigOptions {
	/**
	 *  The name of the output file.
	 *  @default 'config'
	 */
	outputName?: string
	includes?: (string | RegExp)[]
}

const Default_Options: VitePluginEnvGenerateConfigOptions = {
	outputName: 'config',
	includes: [/^VITE_/],
}

export function assignOptions(input?: VitePluginEnvGenerateConfigOptions): VitePluginEnvGenerateConfigOptions {
	return { ...Default_Options, ...input }
}
