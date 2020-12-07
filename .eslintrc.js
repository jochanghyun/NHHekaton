module.exports = {
  root: true,
  extends: 'prettier',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  plugins: ['@typescript-eslint'],
};
