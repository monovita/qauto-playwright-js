import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import playwright from 'eslint-plugin-playwright';

export default defineConfig([
	{
		ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		...playwright.configs['flat/recommended'],
		plugins: { js, playwright },
		extends: ['js/recommended'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			semi: 'error',
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'playwright/no-skipped-test': 'warn',
		},
	},
]);
