import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypescript,
	// Formatting (tabs, semicolons, line width) is owned entirely by
	// Prettier (`.prettierrc`) — keep this last so it disables any
	// formatting-related rules pulled in above that would otherwise fight
	// Prettier's own output (e.g. nested-ternary indentation).
	eslintConfigPrettier,
	{
		ignores: ['.next/**', 'next-env.d.ts'],
	},
];

export default eslintConfig;
