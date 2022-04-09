import fs from 'fs';
import path from 'path';

import DOCKER_SECRETS from "../build/startup/DockerSecrets.js";

const GENERATION_DIR = path.join(process.cwd(), 'build/generated/@types');

const typeDefinitionFile = `export default interface DockerSecrets {\n${Object.entries(DOCKER_SECRETS).map(([key, secret]) => `    "${key}": ${typeof secret};\n`).join('')}}\n`;

const typeDefinitionFilePath = path.join(GENERATION_DIR, 'DockerSecrets.d.ts');

fs.existsSync(GENERATION_DIR) || fs.mkdirSync(GENERATION_DIR, { recursive: true });
fs.writeFileSync(typeDefinitionFilePath, typeDefinitionFile, { encoding: 'utf8', flag: "w" });

console.log('Wrote To ' + typeDefinitionFilePath);