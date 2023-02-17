import fs from 'fs';
import ConfigFileFetcher from '../src/core/ConfigFileFetcher';

describe('ConfigFileFetcher', () => {
  describe('fetchConfig', () => {
    it('should read server type from package.json', async () => {
      const serverType = 'express';
      jest.spyOn(fs, 'readFileSync').mockReturnValue(
        JSON.stringify({
          serverType,
        })
      );

      const configFileFetcher = new ConfigFileFetcher();
      const configFile = await configFileFetcher.fetchConfig();

      expect(configFile).toEqual({ serverType });
    });

    it('should read server type from nexus.config.json if not present in package.json', async () => {
      const serverType = 'fastify';
      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce('{}')
        .mockReturnValueOnce(
          JSON.stringify({
            serverType,
          })
        );

      const configFileFetcher = new ConfigFileFetcher();
      const configFile = await configFileFetcher.fetchConfig();

      expect(configFile).toEqual({ serverType });
    });

    it('should throw an error if unable to fetch config file', async () => {
      jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
        throw new Error();
      });

      const configFileFetcher = new ConfigFileFetcher();

      await expect(configFileFetcher.fetchConfig()).rejects.toThrow(
        'Unable to fetch config file'
      );
    });
  });
});
