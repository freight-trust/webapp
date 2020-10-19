module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'wesbos',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'react/jsx-key': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 1,
    'no-useless-escape': 0,
  },
};
