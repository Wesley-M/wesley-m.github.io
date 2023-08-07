module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': 0,
    'object-curly-spacing': ['error', 'always'],
    'valid-jsdoc': 0,
    'prefer-spread': ['off'],
    'space-before-function-paren': ['error', 'always'],
  },
};
