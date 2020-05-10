module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.steps.ts'],
  setupFiles: ['<rootDir>/tests/unit/setup.ts'],
};
