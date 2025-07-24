module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  moduleNameMapper: {
    '^@datadog/datadog-ci$': '<rootDir>/../datadog-ci', // 👈 map alias to relative path
  },
}
