import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  testEnvironment: 'node',
  testRegex: '[.](spec|test).ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@core(.*)$': '<rootDir>/core/$1',
    '^@modules(.*)$': '<rootDir>/modules/$1',
    '^@shared(.*)$': '<rootDir>/shared/$1',
  },
};

export default config;
