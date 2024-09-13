// @ts-nocheck

import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReactConfig from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { settings: { react: { version: 'detect' } } },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  { plugins: { react: pluginReactConfig } },
  pluginJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  pluginReactConfig.configs.flat['jsx-runtime'],
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
    },
  },
  eslintConfigPrettier
];
