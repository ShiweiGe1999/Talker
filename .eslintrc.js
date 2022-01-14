module.exports = {
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'linebreak-style': ['off', 'windows'],
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
  },
};
