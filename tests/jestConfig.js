module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'frontend/src/**/*.{js,jsx}',
    'backend/**/*.{js}',
    'ai/**/*.{js}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};