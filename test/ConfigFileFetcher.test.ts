import fs from 'fs';
import ConfigFileFetcher from '../src/core/ConfigFileFetcher';
import { ConfigFile } from '../src/core/interface';

describe('ConfigFileFetcher', () => {
  let configFileFetcher: ConfigFileFetcher;
  let mockReadFileSync: jest.SpyInstance;

  beforeEach(() => {
    configFileFetcher = new ConfigFileFetcher();
    mockReadFileSync = jest.spyOn(fs, 'readFileSync').mockImplementation();
  });

  afterEach(() => {
    mockReadFileSync.mockRestore();
  });

  it('should fetch config from package.json if it exists', async () => {
    const expectedConfig: ConfigFile = {
      serverType: 'express',
    };
    mockReadFileSync.mockReturnValue(JSON.stringify({ ...expectedConfig }));
    const config = await configFileFetcher.fetchConfig();
    expect(config).toEqual(expectedConfig);
  });

  it('should fetch config from nexus.config.json if package.json does not exist', async () => {
    const expectedConfig: ConfigFile = {
      serverType: 'fastify',
    };
    mockReadFileSync.mockReturnValueOnce(JSON.stringify({ ...expectedConfig }));
    const config = await configFileFetcher.fetchConfig();
    expect(config).toEqual(expectedConfig);
  });

  it('should throw an error if config file cannot be found', async () => {
    mockReadFileSync.mockReturnValueOnce(JSON.stringify({}));
    await expect(configFileFetcher.fetchConfig()).rejects.toThrowError(
      'Unable to fetch config file'
    );
  });
});
