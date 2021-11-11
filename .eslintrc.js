module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'prefer-const': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
