import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '[.](spec|test).ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@core(.*)$': '<rootDir>/src/core/$1',
    '^@modules(.*)$': '<rootDir>/src/modules/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
  },
};

export default config;
