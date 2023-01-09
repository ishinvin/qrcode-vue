/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    ignorePatterns: ['dist', 'node_modules'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
            },
        ],
    },
};
