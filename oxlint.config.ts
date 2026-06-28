import { defineConfig } from 'oxlint';
import type { OxlintConfig } from 'oxlint';
import sharedConfig from '@node-3d/addon-tools/oxlint';

const config: OxlintConfig = {
	...sharedConfig,
	ignorePatterns: [
		...(sharedConfig.ignorePatterns ?? []),
		'ThemedUi/default-theme.js',
		'examples/qml/themes/themes.js',
	],
};

export default defineConfig(config);
