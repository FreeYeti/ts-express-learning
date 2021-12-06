import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

export default config;
