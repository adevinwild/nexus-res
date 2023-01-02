import * as fs from 'fs';
import * as path from 'path';
import { ConfigFile } from './interface';

function getProjectRootPath() {
  return path.resolve(process.cwd(), './');
}

export function readConfigFile() {
  const configPath = path.join(getProjectRootPath(), 'nexus.config.json');
  const exists = fs.existsSync(configPath);
  if (!exists) {
    return null;
  }

  return JSON.parse(fs.readFileSync(configPath, 'utf8')) as ConfigFile;
}
