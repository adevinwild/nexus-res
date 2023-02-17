import fs from 'fs';

export type ConfigFile = {
  serverType: 'http' | 'express' | 'fastify' | 'koa' | 'hapi';
};

export default class ConfigFileFetcher {
  async fetchConfig(): Promise<ConfigFile> {
    let configFile: ConfigFile | undefined;

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      configFile = {
        serverType: packageJson.serverType,
      } as ConfigFile;
    } catch (e) {
      // Ignore error
    }

    try {
      const nexusConfig = JSON.parse(
        fs.readFileSync('nexus.config.json', 'utf8')
      ) as ConfigFile;
      configFile = nexusConfig;
    } catch (e) {
      // Ignore error
    } finally {
      if (!configFile) {
        throw new Error(
          'Unable to fetch config file: configuration not found.'
        );
      } else if (!configFile.serverType) {
        throw new Error('Unable to fetch config file: serverType not defined.');
      }
    }

    return configFile;
  }
}
