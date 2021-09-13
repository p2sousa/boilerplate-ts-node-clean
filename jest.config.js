const { resolve } = require('path');

const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'tests',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
};
