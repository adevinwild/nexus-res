import fs from 'fs';

import { ConfigFile } from './interface';

export default class ConfigFileFetcher {
  async fetchConfig(): Promise<ConfigFile> {
    let configFile: ConfigFile | undefined;
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      configFile = {
        serverType: packageJson.serverType,
      } as ConfigFile;

      if (configFile.serverType === undefined) {
        throw 'Unable to fetch config file';
      }
    } catch (e) {
      throw new Error('Unable to fetch config file');
    }

    if (!configFile) {
      try {
        const nexusConfig = JSON.parse(
          fs.readFileSync('nexus.config.json', 'utf8')
        ) as ConfigFile;

        configFile = nexusConfig;
        if (configFile.serverType === undefined) {
          throw 'Unable to fetch config file';
        }
      } catch (e) {
        throw new Error('Unable to fetch config file');
      }
    }
    return configFile;
  }
}
