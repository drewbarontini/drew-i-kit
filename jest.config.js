// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  // transform: '^.+\\.js$': 'babel-jest',
  // transformIgnorePatterns: ['/node_modules/(?!react-testing-library)'],
};
