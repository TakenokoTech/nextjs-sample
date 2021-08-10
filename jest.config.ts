export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/test/setupTests.ts', '<rootDir>/test/tsconfig.jest.json', '<rootDir>/test/mocks/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.jest.json',
    },
  },
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: './coverage/',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/mocks/fileMock.js',
  },
};
