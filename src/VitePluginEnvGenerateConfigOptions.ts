export interface VitePluginEnvGenerateConfigOptions {
	/**
	 *  The name of the output file.
	 *  @default 'config'
	 */
	outputName?: string
}

const Default_Options: VitePluginEnvGenerateConfigOptions = {
	outputName: 'config',
}

export function assignOptions(input?: VitePluginEnvGenerateConfigOptions): VitePluginEnvGenerateConfigOptions {
	return { ...Default_Options, ...input }
}
