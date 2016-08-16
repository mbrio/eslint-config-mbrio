'use strict';

module.exports = {
  'extends': [
    './config/babel.js',
    './config/node.js',
    './config/browser.js',
    './config/errors.js',
    './config/strict.js',
    './config/variables.js',
    './config/best-practices.js',
    './config/es6.js',
    './config/style.js',
    './config/react.js',
  ],
  'parserOptions': {
    'ecmaVersion': 6,
  },
  'env': {
    'node': true,
    'es6': true,
    'jest': true,
  },
};
