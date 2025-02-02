/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['jsdoc', '@typescript-eslint'],
  extends: [
    '@suspensive/eslint-config-js/no-import',
    'plugin:jsdoc/recommended-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        custom: {
          regex: '^(T|\\$)[A-Z][a-zA-Z]+[0-9]*$',
          match: true,
        },
      },
    ],
    'jsdoc/require-description': 'warn',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/no-types': 'off',

    // @typescript-eslint/strict-type-checked
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
  },
}
